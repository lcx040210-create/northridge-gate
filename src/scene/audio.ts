// 程序化声音引擎（Web Audio 全合成，无音频文件）。无 AudioContext 环境（jsdom）下全部静默。
let ctx: AudioContext | null = null
let master: GainNode | null = null
let sfxBus: GainNode | null = null
let ambBus: GainNode | null = null
let noiseBuf: AudioBuffer | null = null
let muted = false
let tinnitus: { osc: OscillatorNode; gain: GainNode } | null = null
let humGain: GainNode | null = null
let aimLoop: { stop: () => void } | null = null
const timers = new Set<number>()

export type Voice = 'human' | 'skinfit' | 'coretick' | 'wetnest' | 'suspicious'

function ac(): AudioContext | null {
  return ctx
}

function now(): number {
  return ctx ? ctx.currentTime : 0
}

function noise(): AudioBuffer {
  if (!noiseBuf && ctx) {
    noiseBuf = ctx.createBuffer(1, 2 * ctx.sampleRate, ctx.sampleRate)
    const d = noiseBuf.getChannelData(0)
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1
  }
  return noiseBuf!
}

// —— 基础积木 ——
function envGain(vol: number, attack: number, decay: number, at = now(), dest: AudioNode | null = sfxBus): GainNode {
  const g = ctx!.createGain()
  g.gain.setValueAtTime(0.0001, at)
  g.gain.exponentialRampToValueAtTime(Math.max(vol, 0.0002), at + attack)
  g.gain.exponentialRampToValueAtTime(0.0001, at + attack + decay)
  if (dest) g.connect(dest)
  return g
}

function tone(freq: number, dur: number, vol: number, opts: { type?: OscillatorType; to?: number; attack?: number; at?: number; dest?: AudioNode | null } = {}): void {
  if (!ctx) return
  const at = opts.at ?? now()
  const o = ctx.createOscillator()
  o.type = opts.type ?? 'sine'
  o.frequency.setValueAtTime(freq, at)
  if (opts.to) o.frequency.exponentialRampToValueAtTime(opts.to, at + dur)
  o.connect(envGain(vol, opts.attack ?? 0.005, dur, at, opts.dest === undefined ? sfxBus : opts.dest))
  o.start(at)
  o.stop(at + dur + 0.05)
}

function burst(dur: number, vol: number, opts: { type?: BiquadFilterType; freq?: number; to?: number; q?: number; attack?: number; at?: number; rate?: number; dest?: AudioNode | null } = {}): void {
  if (!ctx) return
  const at = opts.at ?? now()
  const s = ctx.createBufferSource()
  s.buffer = noise()
  s.playbackRate.value = opts.rate ?? 1
  const fl = ctx.createBiquadFilter()
  fl.type = opts.type ?? 'lowpass'
  fl.frequency.setValueAtTime(opts.freq ?? 2000, at)
  if (opts.to) fl.frequency.exponentialRampToValueAtTime(opts.to, at + dur)
  fl.Q.value = opts.q ?? 0.8
  s.connect(fl)
  fl.connect(envGain(vol, opts.attack ?? 0.003, dur, at, opts.dest === undefined ? sfxBus : opts.dest))
  s.start(at, Math.random() * 1.5)
  s.stop(at + dur + 0.1)
}

function later(ms: number, fn: () => void): void {
  const id = window.setTimeout(() => { timers.delete(id); fn() }, ms)
  timers.add(id)
}

// —— 环境层 ——
export function startAmbient(): void {
  if (ctx) return
  const AC = typeof AudioContext !== 'undefined' ? AudioContext : (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!AC) return
  ctx = new AC()
  master = ctx.createGain()
  master.gain.value = muted ? 0 : 0.8
  master.connect(ctx.destination)
  // 轻压缩，防止枪声爆音
  const comp = ctx.createDynamicsCompressor()
  comp.threshold.value = -14
  comp.ratio.value = 4
  comp.connect(master)
  sfxBus = ctx.createGain()
  sfxBus.gain.value = 0.9
  sfxBus.connect(comp)
  ambBus = ctx.createGain()
  ambBus.gain.value = 0.22
  ambBus.connect(comp)

  // 低频闷响（55 / 55.8 Hz 拍频）
  for (const fq of [55, 55.8, 82.4]) {
    const o = ctx.createOscillator()
    o.frequency.value = fq
    const g = ctx.createGain()
    g.gain.value = fq > 80 ? 0.12 : 0.4
    o.connect(g)
    g.connect(ambBus)
    o.start()
  }

  // 日光灯嗡鸣（120Hz 锯齿 + 低通，随机闪烁）
  const hum = ctx.createOscillator()
  hum.type = 'sawtooth'
  hum.frequency.value = 120
  const hf = ctx.createBiquadFilter()
  hf.type = 'lowpass'
  hf.frequency.value = 500
  humGain = ctx.createGain()
  humGain.gain.value = 0.05
  hum.connect(hf)
  hf.connect(humGain)
  humGain.connect(ambBus)
  hum.start()
  const flicker = () => {
    if (!ctx || !humGain) return
    const t = now()
    for (let i = 0; i < 3 + Math.random() * 4; i++) {
      humGain.gain.setValueAtTime(Math.random() < 0.5 ? 0.005 : 0.09, t + i * 0.05)
      if (Math.random() < 0.5) burst(0.03, 0.05, { type: 'highpass', freq: 3000, at: t + i * 0.05 })
    }
    humGain.gain.setValueAtTime(0.05, t + 0.4)
    later(6000 + Math.random() * 14000, flicker)
  }
  later(5000, flicker)

  // 雨：两层噪声（远处低沉 + 近处玻璃上的细碎）
  const loopNoise = (type: BiquadFilterType, freq: number, vol: number, rate = 1) => {
    const s = ctx!.createBufferSource()
    s.buffer = noise()
    s.loop = true
    s.playbackRate.value = rate
    const fl = ctx!.createBiquadFilter()
    fl.type = type
    fl.frequency.value = freq
    const g = ctx!.createGain()
    g.gain.value = vol
    s.connect(fl)
    fl.connect(g)
    g.connect(ambBus!)
    s.start()
    return { fl, g }
  }
  loopNoise('lowpass', 800, 0.35)
  loopNoise('highpass', 5000, 0.06, 0.7)
  // 玻璃雨滴点击
  const drip = () => {
    if (!ctx) return
    tone(2400 + Math.random() * 2400, 0.03, 0.015 + Math.random() * 0.02, { type: 'sine', dest: ambBus })
    later(60 + Math.random() * 400, drip)
  }
  drip()

  // 风：带通噪声 + LFO
  const wind = loopNoise('bandpass', 400, 0.25, 0.5)
  wind.fl.Q.value = 3
  const lfo = ctx.createOscillator()
  lfo.frequency.value = 0.07
  const lfoG = ctx.createGain()
  lfoG.gain.value = 250
  lfo.connect(lfoG)
  lfoG.connect(wind.fl.frequency)
  lfo.start()

  // 远雷（随机 25–60 s）
  const thunderLoop = () => {
    thunder()
    later(25000 + Math.random() * 35000, thunderLoop)
  }
  later(12000 + Math.random() * 10000, thunderLoop)

  // 无线电偶发杂音
  const radioLoop = () => {
    radioStatic(0.6 + Math.random())
    later(30000 + Math.random() * 40000, radioLoop)
  }
  later(20000, radioLoop)

  // 耳鸣（San 驱动）
  const t = ctx.createOscillator()
  t.frequency.value = 7200
  const tg = ctx.createGain()
  tg.gain.value = 0
  t.connect(tg)
  tg.connect(sfxBus)
  t.start()
  tinnitus = { osc: t, gain: tg }

  window.addEventListener('keydown', (e) => { if (e.code === 'KeyM') toggleMute() })
}

export function thunder(): void {
  if (!ctx) return
  burst(0.15, 0.25, { type: 'lowpass', freq: 3000, to: 300 })
  burst(4.5, 0.5, { type: 'lowpass', freq: 220, to: 40, attack: 0.3, rate: 0.4 })
}

export function radioStatic(dur = 1): void {
  if (!ctx) return
  burst(dur, 0.06, { type: 'bandpass', freq: 1800, q: 2 })
  for (let i = 0; i < 4; i++) tone(600 + Math.random() * 900, 0.08, 0.03, { type: 'square', at: now() + Math.random() * dur })
}

// San：70 以下出现耳鸣，越低越响、越尖
export function setSan(san: number): void {
  if (!ctx || !tinnitus) return
  const lvl = san >= 70 ? 0 : Math.min(0.05, ((70 - san) / 70) * 0.05)
  tinnitus.gain.gain.setTargetAtTime(lvl, now(), 0.8)
  tinnitus.osc.frequency.setTargetAtTime(6800 + (70 - Math.min(70, san)) * 30, now(), 1)
}

export function toggleMute(): boolean {
  muted = !muted
  if (master && ctx) master.gain.setTargetAtTime(muted ? 0 : 0.8, now(), 0.05)
  return muted
}

export function isMuted(): boolean {
  return muted
}

// —— 移动 ——
let stepAlt = false
export function footstep(crouching = false): void {
  if (!ctx) return
  stepAlt = !stepAlt
  const v = crouching ? 0.12 : 0.3
  burst(0.09, v, { type: 'lowpass', freq: stepAlt ? 900 : 750, to: 200 })
  tone(stepAlt ? 70 : 64, 0.08, v * 0.8, { to: 40 })
  burst(0.04, v * 0.3, { type: 'highpass', freq: 3500, at: now() + 0.02 }) // 湿地胶
}
export function jump(): void { burst(0.12, 0.12, { type: 'bandpass', freq: 600 }) }
export function land(): void {
  tone(58, 0.2, 0.5, { to: 35 })
  burst(0.15, 0.35, { type: 'lowpass', freq: 700, to: 150 })
}
export function crouch(): void { burst(0.25, 0.08, { type: 'bandpass', freq: 1200, q: 1.5, attack: 0.05 }) }

// —— 交互 ——
export function playBlip(): void { interact() }
export function interact(): void { tone(180, 0.14, 0.2, { to: 90 }) }
export function uiClick(): void { tone(1400, 0.03, 0.06, { type: 'square' }) }
export function doorLocked(): void {
  for (let i = 0; i < 3; i++) {
    const at = now() + i * 0.14
    burst(0.08, 0.4, { type: 'bandpass', freq: 1400, q: 4, at })
    tone(220, 0.1, 0.15, { type: 'square', at, to: 180 })
  }
  tone(90, 0.4, 0.3, { at: now() + 0.5, to: 60 })
}
export function pageFlip(): void {
  burst(0.22, 0.2, { type: 'highpass', freq: 1800, to: 5000, attack: 0.04 })
  burst(0.12, 0.1, { type: 'bandpass', freq: 3000, at: now() + 0.18 })
}
export function cabinet(): void {
  if (!ctx) return
  const o = ctx.createOscillator()
  o.type = 'sawtooth'
  const at = now()
  o.frequency.setValueAtTime(340, at)
  for (let i = 1; i < 10; i++) o.frequency.linearRampToValueAtTime(300 + Math.random() * 120, at + i * 0.07)
  const fl = ctx.createBiquadFilter()
  fl.type = 'bandpass'
  fl.frequency.value = 900
  fl.Q.value = 6
  o.connect(fl)
  fl.connect(envGain(0.12, 0.08, 0.7, at))
  o.start(at)
  o.stop(at + 0.9)
  burst(0.1, 0.35, { type: 'lowpass', freq: 1200, at: at + 0.75 })
}
export function coffee(): void {
  // 倒液体：逐渐变高的带通噪声 + 吞咽
  burst(1.2, 0.18, { type: 'bandpass', freq: 500, to: 1600, q: 5, attack: 0.1 })
  later(1400, () => { tone(140, 0.12, 0.25, { to: 80 }); later(500, () => tone(130, 0.12, 0.22, { to: 80 })) })
}
export function chew(): void {
  for (let i = 0; i < 6; i++) burst(0.07, 0.15, { type: 'bandpass', freq: 900 + Math.random() * 600, q: 2, at: now() + i * 0.22 })
}
export function sofaRest(): void {
  // 坐下 + 深呼吸 ×3 + 渐慢心跳
  burst(0.4, 0.3, { type: 'lowpass', freq: 400, to: 120 })
  for (let i = 0; i < 3; i++) {
    burst(1.3, 0.1, { type: 'bandpass', freq: 700, q: 1.2, attack: 0.6, at: now() + 0.8 + i * 2.6 })
    burst(1.6, 0.07, { type: 'bandpass', freq: 500, q: 1.2, attack: 0.2, at: now() + 2 + i * 2.6 })
  }
  for (let i = 0; i < 8; i++) heartbeat(0.3, now() + 1 + i * (0.8 + i * 0.08))
}

// —— 窗口 / 对话 ——
export function intercom(on = true): void {
  tone(on ? 900 : 700, 0.05, 0.1, { type: 'square' })
  burst(on ? 0.35 : 0.2, 0.08, { type: 'bandpass', freq: 2200, q: 1.5, at: now() + 0.04 })
}
export function knock(): void {
  for (const [i, dt] of [[0, 0], [1, 0.24], [2, 0.46]] as const) {
    tone(i === 2 ? 110 : 130, 0.12, 0.45, { to: 70, at: now() + dt })
    burst(0.06, 0.3, { type: 'bandpass', freq: 1800, q: 1.2, at: now() + dt })
  }
}

const VOICE_BASE: Record<Voice, { f: number; type: OscillatorType; spread: number }> = {
  human: { f: 150, type: 'triangle', spread: 40 },
  suspicious: { f: 175, type: 'triangle', spread: 70 },
  skinfit: { f: 128, type: 'triangle', spread: 20 },
  coretick: { f: 160, type: 'square', spread: 8 },
  wetnest: { f: 95, type: 'sawtooth', spread: 30 },
}
// 说话声（每 1–2 个字一声），伪人会跳调 / 带金属嘀嗒 / 湿咕噜
export function voiceBlip(voice: Voice, glitch = false): void {
  if (!ctx) return
  const v = VOICE_BASE[voice]
  let fq = v.f + (Math.random() - 0.5) * v.spread
  if (glitch && Math.random() < 0.3) fq *= Math.random() < 0.5 ? 0.5 : 1.9
  const o = ctx.createOscillator()
  o.type = v.type
  o.frequency.value = fq
  const fl = ctx.createBiquadFilter()
  fl.type = 'bandpass'
  fl.frequency.value = 900 + Math.random() * 500
  fl.Q.value = 1.5
  o.connect(fl)
  fl.connect(envGain(0.12, 0.01, 0.07))
  o.start()
  o.stop(now() + 0.1)
  if (voice === 'coretick' && Math.random() < 0.25) tone(3200, 0.015, 0.08, { type: 'square', at: now() + 0.05 })
  if (voice === 'wetnest' && Math.random() < 0.3) burst(0.08, 0.06, { type: 'lowpass', freq: 400, rate: 0.5 })
  if (glitch && Math.random() < 0.15) burst(0.05, 0.12, { type: 'highpass', freq: 4000 })
}
export function typeTick(): void { burst(0.012, 0.03, { type: 'highpass', freq: 5000 }) }
export function whisper(): void {
  for (let i = 0; i < 5; i++) burst(0.5 + Math.random() * 0.5, 0.06, { type: 'bandpass', freq: 2500 + Math.random() * 2000, q: 4, attack: 0.15, at: now() + i * 0.45 })
}

// —— 检视 ——
export function inspect(slot: 'eye' | 'id' | 'question'): void {
  if (slot === 'eye') { tone(2000, 0.3, 0.04, { to: 3000, attack: 0.1 }); burst(0.2, 0.05, { type: 'highpass', freq: 6000 }) }
  if (slot === 'id') { burst(0.1, 0.2, { type: 'bandpass', freq: 2400 }); later(250, () => tone(1200, 0.06, 0.08, { type: 'square' })) }
  if (slot === 'question') intercom(true)
}

// —— 判定 ——
export function admit(): void {
  if (!ctx) return
  // 刺耳门禁蜂鸣 + 门闩 + 铰链
  const o = ctx.createOscillator()
  o.type = 'square'
  o.frequency.value = 180
  const fl = ctx.createBiquadFilter()
  fl.type = 'lowpass'
  fl.frequency.value = 1200
  o.connect(fl)
  fl.connect(envGain(0.1, 0.01, 0.9))
  o.start()
  o.stop(now() + 1)
  later(900, () => { burst(0.1, 0.4, { type: 'bandpass', freq: 1000, q: 3 }); cabinet() })
}
export function contain(): void {
  // 液压泄压 + 重锁落下 + 远处拍窗
  burst(1.2, 0.3, { type: 'highpass', freq: 2500, to: 800, attack: 0.02 })
  later(1000, () => { tone(50, 0.6, 0.7, { to: 30 }); burst(0.2, 0.5, { type: 'lowpass', freq: 900 }) })
  later(1800, () => { for (let i = 0; i < 5; i++) tone(100, 0.1, 0.2, { to: 70, at: now() + i * 0.3 + Math.random() * 0.1 }) })
}

// —— 处决瞄准 ——
export function heartbeat(vol = 0.5, at = now()): void {
  tone(62, 0.12, vol, { to: 40, at })
  tone(56, 0.14, vol * 0.7, { to: 36, at: at + 0.18 })
}
export function screech(): void {
  if (!ctx) return
  for (const base of [700, 1043, 1580]) {
    const o = ctx.createOscillator()
    o.type = 'sawtooth'
    const at = now()
    o.frequency.setValueAtTime(base, at)
    o.frequency.linearRampToValueAtTime(base * 1.6, at + 0.5)
    const lfo = ctx.createOscillator()
    lfo.frequency.value = 38
    const lg = ctx.createGain()
    lg.gain.value = base * 0.05
    lfo.connect(lg)
    lg.connect(o.frequency)
    o.connect(envGain(0.07, 0.02, 0.6, at))
    o.start(at)
    lfo.start(at)
    o.stop(at + 0.7)
    lfo.stop(at + 0.7)
  }
  burst(0.6, 0.15, { type: 'bandpass', freq: 2500, q: 1 })
}
export function aimTick(urgent: boolean): void { tone(urgent ? 1760 : 1100, 0.05, urgent ? 0.18 : 0.1, { type: 'square' }) }

export function startAimTension(): void {
  if (!ctx) return
  stopAimTension()
  const o = ctx.createOscillator()
  o.type = 'sawtooth'
  o.frequency.setValueAtTime(40, now())
  o.frequency.linearRampToValueAtTime(90, now() + 10)
  const fl = ctx.createBiquadFilter()
  fl.type = 'lowpass'
  fl.frequency.setValueAtTime(200, now())
  fl.frequency.linearRampToValueAtTime(1400, now() + 10)
  const g = ctx.createGain()
  g.gain.setValueAtTime(0.0001, now())
  g.gain.exponentialRampToValueAtTime(0.16, now() + 1)
  o.connect(fl)
  fl.connect(g)
  g.connect(sfxBus!)
  o.start()
  let beat = 0.9
  let alive = true
  const hb = () => {
    if (!alive) return
    heartbeat(0.55)
    beat = Math.max(0.35, beat - 0.05)
    later(beat * 1000, hb)
  }
  hb()
  aimLoop = {
    stop: () => {
      alive = false
      g.gain.setTargetAtTime(0.0001, now(), 0.05)
      o.stop(now() + 0.3)
    },
  }
}
export function stopAimTension(): void {
  aimLoop?.stop()
  aimLoop = null
}

// —— 处决 ——
export function gunshot(): void {
  burst(0.04, 1, { type: 'highpass', freq: 800 })
  burst(0.5, 0.9, { type: 'lowpass', freq: 4000, to: 300 })
  tone(90, 0.3, 0.9, { to: 35 })
  later(80, () => burst(1.4, 0.2, { type: 'lowpass', freq: 1200, to: 200, attack: 0.05 })) // 回响
  later(420, () => { for (let i = 0; i < 3; i++) tone(4200 + i * 900, 0.08, 0.05, { at: now() + i * 0.09 }) }) // 弹壳落地
}
export function coreBurst(): void {
  burst(0.3, 0.4, { type: 'highpass', freq: 3000 })
  for (let i = 0; i < 10; i++) tone(2000 + Math.random() * 5000, 0.04, 0.06, { type: 'square', at: now() + Math.random() * 0.4 })
  tone(300, 0.8, 0.15, { type: 'sawtooth', to: 40 })
}
export function axeSwing(): void { burst(0.35, 0.3, { type: 'bandpass', freq: 400, to: 2500, q: 2, attack: 0.2 }) }
export function axeChop(): void {
  tone(80, 0.25, 1, { to: 40 })
  burst(0.2, 0.8, { type: 'lowpass', freq: 2500, to: 300 })
  burst(0.35, 0.4, { type: 'lowpass', freq: 600, rate: 0.6, at: now() + 0.03 }) // 湿
  glassCrack()
}
export function glassCrack(): void {
  burst(0.08, 0.5, { type: 'highpass', freq: 3500 })
  for (let i = 0; i < 8; i++) tone(3000 + Math.random() * 4000, 0.15 + Math.random() * 0.3, 0.05, { at: now() + Math.random() * 0.3 })
}
export function glassShatter(): void {
  burst(0.6, 0.8, { type: 'highpass', freq: 2000, to: 6000 })
  for (let i = 0; i < 24; i++) tone(2500 + Math.random() * 6000, 0.1 + Math.random() * 0.4, 0.07, { at: now() + Math.random() * 0.8 })
  tone(70, 0.4, 0.8, { to: 30 })
}
export function fireIgnite(): void { burst(0.3, 0.3, { type: 'bandpass', freq: 800, q: 2 }); tone(200, 0.1, 0.1, { type: 'square', to: 120 }) }
export function fireWhoosh(): void {
  burst(1.6, 0.8, { type: 'lowpass', freq: 300, to: 2400, attack: 0.15 })
  burst(2.2, 0.4, { type: 'bandpass', freq: 500, q: 1, attack: 0.4, rate: 0.5 })
  for (let i = 0; i < 30; i++) burst(0.02, 0.2, { type: 'highpass', freq: 3000, at: now() + 0.5 + Math.random() * 2.5 }) // 噼啪
}
export function bodyFall(): void { tone(55, 0.4, 0.8, { to: 30 }); burst(0.3, 0.5, { type: 'lowpass', freq: 500 }) }

// —— 死亡 / 天亮 ——
export function death(): void {
  stopAimTension()
  screech()
  later(250, glassShatter)
  later(600, () => {
    burst(0.8, 0.6, { type: 'lowpass', freq: 800, to: 100 })
    tone(40, 3, 0.6, { to: 25, attack: 0.02 })
    for (let i = 0; i < 4; i++) heartbeat(0.5 - i * 0.1, now() + 0.6 + i * (1 + i * 0.5))
  })
  if (tinnitus && ctx) {
    tinnitus.gain.gain.setTargetAtTime(0.08, now() + 0.8, 0.3)
    tinnitus.gain.gain.setTargetAtTime(0, now() + 6, 1)
  }
}
export function dawn(): void {
  if (!ctx || !ambBus) return
  ambBus.gain.setTargetAtTime(0.03, now(), 2)
  if (tinnitus) tinnitus.gain.gain.setTargetAtTime(0, now(), 0.5)
  // 大三和弦慢慢浮现 + 远处鸟鸣
  ;[261.6, 329.6, 392, 523.2].forEach((fq, i) => tone(fq, 5, 0.06, { attack: 1.5 + i * 0.3, type: 'sine' }))
  for (let i = 0; i < 6; i++) later(2000 + i * 900 + Math.random() * 500, () => tone(3200 + Math.random() * 800, 0.12, 0.05, { to: 4200 }))
}

// —— 新增音效（武器系统 & Boss 战）——
export function alarmBeep(): void {
  if (!ctx) return
  const at = now()
  for (let i = 0; i < 6; i++) {
    tone(440, 0.15, 0.08, { type: 'square', at: at + i * 0.5 })
  }
}

export function sprinkler(): void {
  if (!ctx) return
  const at = now()
  // 水流声：白噪声高通滤波
  for (let i = 0; i < 50; i++) {
    burst(0.08, 0.015, { type: 'highpass', freq: 2000 + Math.random() * 1000, q: 0.3, at: at + i * 0.1 })
  }
}

export function scream(): void {
  if (!ctx) return
  const at = now()
  // 尖叫：800Hz → 1200Hz 扫频，带颤音
  tone(800, 0.8, 0.12, { type: 'sawtooth', to: 1200, at })
  // 颤音调制
  const lfo = ctx.createOscillator()
  lfo.frequency.value = 12
  const lfoGain = ctx.createGain()
  lfoGain.gain.value = 50
  lfo.connect(lfoGain)
  const osc = ctx.createOscillator()
  osc.frequency.setValueAtTime(1000, at)
  lfoGain.connect(osc.frequency)
  osc.connect(envGain(0.08, 0.02, 0.8, at))
  osc.start(at)
  osc.stop(at + 0.82)
  lfo.start(at)
  lfo.stop(at + 0.82)
}

export function wail(): void {
  if (!ctx) return
  const at = now()
  // 哀嚎：低沉200Hz锯齿波，音量波动
  for (let i = 0; i < 10; i++) {
    const vol = 0.06 + Math.sin(i * 0.8) * 0.03
    tone(200 + Math.random() * 30, 0.15, vol, { type: 'sawtooth', at: at + i * 0.15 })
  }
}

export function flameCharge(): void {
  if (!ctx) return
  const at = now()
  // 蓄力音：频率上升
  tone(120, 2.0, 0.06, { type: 'sawtooth', to: 240, at })
  burst(2.0, 0.04, { type: 'bandpass', freq: 400, to: 800, q: 2, at })
}

export function bossRoar(): void {
  if (!ctx) return
  const at = now()
  // 低频震动 + 混沌噪声
  tone(30, 1.5, 0.15, { type: 'sawtooth', to: 25, at })
  tone(60, 1.5, 0.1, { type: 'triangle', to: 50, at })
  burst(1.5, 0.12, { type: 'lowpass', freq: 300, to: 150, q: 1.5, at })
}

export function glassBreaking(): void {
  if (!ctx) return
  const at = now()
  // 玻璃破碎：高频爆裂
  burst(0.3, 0.15, { type: 'highpass', freq: 3000, q: 0.5, at })
  for (let i = 0; i < 8; i++) {
    burst(0.05, 0.08, { type: 'bandpass', freq: 2000 + Math.random() * 2000, q: 3, at: at + i * 0.04 })
  }
  // 低频撞击
  tone(80, 0.2, 0.12, { type: 'sine', to: 40, at })
}


export function stopAll(): void {
  timers.forEach(clearTimeout)
  timers.clear()
  stopAimTension()
  void ac()?.close()
  ctx = null
}
