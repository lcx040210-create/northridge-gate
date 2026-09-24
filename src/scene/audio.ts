// 程序化环境音（Web Audio，无需音频文件）
let ctx: AudioContext | null = null

export function startAmbient(): void {
  if (ctx) return
  const AC = typeof AudioContext !== 'undefined' ? AudioContext : (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!AC) return // jsdom / 无音频环境
  ctx = new AC()
  const master = ctx.createGain()
  master.gain.value = 0.16
  master.connect(ctx.destination)

  // 低频闷响（不安感，55Hz + 55.8Hz 产生拍频）
  const drone = ctx.createOscillator()
  drone.type = 'sine'
  drone.frequency.value = 55
  const drone2 = ctx.createOscillator()
  drone2.type = 'sine'
  drone2.frequency.value = 55.8
  const droneGain = ctx.createGain()
  droneGain.gain.value = 0.5
  drone.connect(droneGain)
  drone2.connect(droneGain)
  droneGain.connect(master)
  drone.start()
  drone2.start()

  // 日光灯嗡鸣（120Hz 锯齿波 + 低通）
  const hum = ctx.createOscillator()
  hum.type = 'sawtooth'
  hum.frequency.value = 120
  const humFilter = ctx.createBiquadFilter()
  humFilter.type = 'lowpass'
  humFilter.frequency.value = 420
  const humGain = ctx.createGain()
  humGain.gain.value = 0.02
  hum.connect(humFilter)
  humFilter.connect(humGain)
  humGain.connect(master)
  hum.start()

  // 雨声（白噪声 + 低通）
  const noiseBuffer = ctx.createBuffer(1, 2 * ctx.sampleRate, ctx.sampleRate)
  const data = noiseBuffer.getChannelData(0)
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1
  const noise = ctx.createBufferSource()
  noise.buffer = noiseBuffer
  noise.loop = true
  const rainFilter = ctx.createBiquadFilter()
  rainFilter.type = 'lowpass'
  rainFilter.frequency.value = 900
  const rainGain = ctx.createGain()
  rainGain.gain.value = 0.06
  noise.connect(rainFilter)
  rainFilter.connect(rainGain)
  rainGain.connect(master)
  noise.start()
}

// 交互提示音（低沉短促的"咚"）
export function playBlip(): void {
  if (!ctx) return
  const osc = ctx.createOscillator()
  osc.type = 'sine'
  osc.frequency.value = 180
  osc.frequency.exponentialRampToValueAtTime(90, ctx.currentTime + 0.12)
  const gain = ctx.createGain()
  gain.gain.setValueAtTime(0.25, ctx.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15)
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.start()
  osc.stop(ctx.currentTime + 0.16)
}
