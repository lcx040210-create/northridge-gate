import { useCallback, useEffect, useReducer, useRef, useState } from 'react'
import { reducer, INITIAL_STATE, currentVisitor } from './engine/state'
import type { Verdict as VerdictType, Tool, Visitor } from './data/schema'
import type { ExecutionResult } from './engine/execution'
import { resolveExecution } from './engine/execution'
import { WORLD_TEXT } from './data/world'
import { ITEMS } from './data/items'
import RoomScene from './scene/RoomScene'
import Window from './ui/Window'
import Portrait from './ui/Portrait'
import Inspect, { type InspectSlot } from './ui/Inspect'
import Verdict from './ui/Verdict'
import ExecutionOverlay from './ui/ExecutionOverlay'
import ExecutionAim from './ui/ExecutionAim'
import HUD from './ui/HUD'
import Dawn from './ui/Dawn'
import Death from './ui/Death'
import * as sfx from './scene/audio'

const PSEUDO_GUIDE = [
  { key: 'skinfit', name: '贴皮型 Skin-fit', tells: '耳后到颈侧有一道接缝；两只眼睛眨眼不同步；证件上的牙齿数和本人对不上。', response: '冷兵器（消防斧），砍接缝。' },
  { key: 'coretick', name: '核响型 Core-tick', tells: '锁骨下有金属嘀嗒声，太阳穴偶尔反光；瞳孔针尖大；问天气只会答「和昨天一样」。', response: '手枪，打核。' },
  { key: 'wetnest', name: '湿巢型 Wet-nest', tells: '指缝反光、呼出的气往下沉；拒绝喝水；声音里带水声。', response: '焚化罐。' },
  { key: 'infected', name: '感染者 Infected', tells: '还是人，但喉结滑动方向反了；会突然求你「快开门」。', response: '收容，不要杀。' },
]

const OBJECTIVE = (n: number) => (n === 0 ? '走到观察窗前（正前方），按 F 检视来访者' : '有人在敲窗。回到观察窗处理下一位来访者')

export default function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null)
  const [aiming, setAiming] = useState<{ tool: Tool; visitor: Visitor } | null>(null)
  const [execution, setExecution] = useState<{ result: ExecutionResult; tool: Tool; visitor: Visitor } | null>(null)
  const [death, setDeath] = useState<Visitor | null | false>(false)
  const [toast, setToast] = useState<string | null>(null)
  const toastTimer = useRef(0)

  const visitor = currentVisitor(state)

  const say = useCallback((text: string, ms = 4200) => {
    setToast(text)
    clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setToast(null), ms)
  }, [])

  useEffect(() => {
    if (activeHotspot !== null) document.exitPointerLock?.()
  }, [activeHotspot])

  // San → 耳鸣
  useEffect(() => { sfx.setSan(state.san) }, [state.san])

  // 新来访者：敲窗
  useEffect(() => {
    if (state.phase !== 'visitor' || !visitor) return
    const t = setTimeout(() => sfx.knock(), state.visitorIndex === 0 ? 2500 : 1200)
    return () => clearTimeout(t)
  }, [state.phase, state.visitorIndex, visitor])

  // 幻觉：第 3 位时走廊多出一双鞋
  const showShoes = activeHotspot === 'window' && state.visitorIndex === 2 && !state.hallucinationTriggered
  useEffect(() => { if (showShoes) { const t = setTimeout(() => sfx.whisper(), 2000); return () => clearTimeout(t) } }, [showShoes])

  const open = (id: string) => {
    sfx.interact()
    if (id === 'window') sfx.intercom(true)
    if (id === 'manual') sfx.pageFlip()
    if (id === 'weapons') sfx.cabinet()
    if (id === 'door') sfx.doorLocked()
    setActiveHotspot(id)
  }
  const close = () => {
    if (activeHotspot === 'window') sfx.intercom(false)
    if (activeHotspot === 'manual') sfx.pageFlip()
    setActiveHotspot(null)
  }

  const handleJudge = (verdict: VerdictType, tool?: Tool) => {
    if (!visitor) return
    if (verdict === 'execute' && tool) {
      setAiming({ tool, visitor })
      return
    }
    if (verdict === 'admit') sfx.admit()
    if (verdict === 'contain') sfx.contain()
    const o = visitor.outcomes[verdict]
    if (o) say(o.text)
    dispatch({ type: 'JUDGE', verdict, tool })
    setActiveHotspot(null)
  }

  const onAimSuccess = () => {
    if (!aiming) return
    const result = resolveExecution(aiming.visitor, aiming.tool)
    setExecution({ result, tool: aiming.tool, visitor: aiming.visitor })
    dispatch({ type: 'JUDGE', verdict: 'execute', tool: aiming.tool })
    setAiming(null)
    setActiveHotspot(null)
  }
  const onAimCancel = () => {
    setAiming(null)
    say('你放下了武器。他还站在窗外，发着抖。')
  }
  const onAimFail = () => {
    setDeath(aiming?.visitor ?? null)
    setAiming(null)
  }
  const execRef = useRef(execution)
  execRef.current = execution
  const onExecDone = useCallback(() => {
    const e = execRef.current
    if (e) {
      const text = e.result.success ? e.visitor.outcomes.execute?.text : '不对——它没死。玻璃上只剩一道拖痕，它跑进了夜里。'
      if (text) say(text, 5200)
    }
    setExecution(null)
  }, [say])

  if (state.phase === 'opening') {
    return (
      <div className="title">
        <div className="title-card">
          <p>替换事件后第 19 夜。你是北岭前哨 3 号闸口的夜班安保。透过观察窗判断来者是<b style={{ color: '#e8e2cc' }}>人</b>、<b style={{ color: '#e8e2cc' }}>伪人</b>还是<b style={{ color: '#e8e2cc' }}>感染者</b>——放行、处决、收容。对错，天亮才见分晓。</p>
          <div className="keys">
            <kbd>W A S D</kbd><span>移动</span>
            <kbd>鼠标</kbd><span>视角（点击画面锁定鼠标）</span>
            <kbd>空格 / Ctrl</kbd><span>跳跃 / 蹲下</span>
            <kbd>F / 左键</kbd><span>与准星对准的物品交互</span>
            <kbd>M</kbd><span>静音</span>
          </div>
          <p style={{ fontSize: 13 }}>观察窗在你正前方。手册柜在左，武器柜在右，沙发和门在身后。建议戴耳机。</p>
          <button data-testid="start" className="btn big" onClick={() => { sfx.startAmbient(); dispatch({ type: 'START' }) }}>开始值班</button>
        </div>
      </div>
    )
  }

  if (state.phase === 'dawn') return <Dawn state={state} />

  const cabinetLabel = WORLD_TEXT.find((w) => w.surface === 'label')?.text

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <RoomScene onInteract={open} />
      <HUD state={state} />

      {activeHotspot === null && !execution && (
        <>
          <div className="hint" style={{ top: 56 }}>→ {OBJECTIVE(state.records.length)}</div>
          <div className="hint" style={{ bottom: 28, color: '#c8c8c0' }}>准星对准物品，按 F 交互</div>
        </>
      )}

      {toast && <div className="toast">{toast}</div>}

      {activeHotspot === 'window' && visitor && (
        <div className="window-view">
          <div className="pane">
            <img src={visitor.scene ?? '/assets/scenes/window.svg'} alt="" />
            {showShoes && <img className="shoes" src="/assets/env/shoes_hallucination.svg" alt="" />}
            <Portrait visitor={visitor} />
            <img src="/assets/scenes/window_glass.svg" alt="" />
            <div className="rim" />
            {showShoes && (
              <p data-testid="hallucination" style={{ position: 'absolute', bottom: 14, left: 14, color: '#e0a0a0', background: 'rgba(0,0,0,0.6)', padding: '4px 10px', borderRadius: 3 }}>走廊里，多了一双鞋。</p>
            )}
          </div>
          <div className="side">
            <Window visitor={visitor} />
            <Inspect key={visitor.id} visitor={visitor} onInspect={(s: InspectSlot) => dispatch({ type: 'INSPECT', slot: s })} />
            <Verdict key={`v-${visitor.id}`} disabled={false} onJudge={handleJudge} />
            <button className="btn" onClick={close} style={{ alignSelf: 'flex-start' }}>离开窗口</button>
          </div>
        </div>
      )}

      {activeHotspot === 'manual' && (
        <div className="overlay">
          <div className="manual">
            <div className="panel-head">
              <h2><img src="/assets/icons/manual.svg" alt="" style={{ filter: 'invert(0.85)' }} />识别手册 v0.4</h2>
              <button className="btn" onClick={close}>合上</button>
            </div>
            <div className="pages">
              {PSEUDO_GUIDE.map((p) => (
                <div key={p.key} className="entry">
                  <img src={`/assets/manual/${p.key}.svg`} alt="" />
                  <div>
                    <b>{p.name}</b>
                    <p>{p.tells}</p>
                    <p className="resp">应对：{p.response}</p>
                  </div>
                </div>
              ))}
              <p className="note">
                规则：先检视再判定。证件免费，看眼睛和问话会消耗反应时间。<br />
                处决时要亲手瞄准弱点，10 秒内不动手，它会冲破玻璃。用错武器，它会逃走。<br />
                {WORLD_TEXT.find((w) => w.surface === 'manual')?.text} {WORLD_TEXT.find((w) => w.surface === 'drawer')?.text}
              </p>
            </div>
          </div>
        </div>
      )}

      {activeHotspot === 'weapons' && (
        <div className="overlay">
          <div className="panel" style={{ width: 520 }}>
            <div className="panel-head">
              <h2><img src="/assets/icons/gun.svg" alt="" />武器柜 ARMORY</h2>
              <button className="btn" onClick={() => { sfx.cabinet(); close() }}>关上</button>
            </div>
            {ITEMS.map((i) => (
              <div key={i.id} className="item">
                <img src={`/assets/icons/${i.id}.svg`} alt="" />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 'bold', marginBottom: 2 }}>{i.name}</div>
                  <div className="desc">{i.desc}</div>
                  {i.effect.constraint && <div className="warn">⚠ {i.effect.constraint}</div>}
                </div>
                {i.id === 'coffee' && <button className="btn" disabled={state.coffeeUsed >= 2} onClick={() => { sfx.coffee(); dispatch({ type: 'DRINK_COFFEE' }) }}>{state.coffeeUsed >= 2 ? '已喝光' : '喝'}</button>}
                {i.id === 'sedative' && <button className="btn" disabled={state.sedativeUsed} onClick={() => { sfx.chew(); dispatch({ type: 'USE_SEDATIVE' }) }}>{state.sedativeUsed ? '已用' : '嚼'}</button>}
              </div>
            ))}
            <p className="desc" style={{ color: '#8a8a80', fontSize: 12 }}>{cabinetLabel}</p>
          </div>
        </div>
      )}

      {activeHotspot === 'sofa' && (
        <div className="overlay">
          <div className="panel" style={{ width: 440 }}>
            <div className="panel-head">
              <h2><img src="/assets/icons/sofa.svg" alt="" />沙发</h2>
              <button className="btn" onClick={close}>离开</button>
            </div>
            <p style={{ lineHeight: 1.7, marginBottom: 16 }}>
              闭眼休息约 40 秒，San +20。<br />
              <span style={{ color: '#e0a0a0' }}>但闭眼期间若有排队者，会必定自动放行 1 人。</span><br />
              <span style={{ color: '#8a8a80' }}>全关仅一次。</span>
            </p>
            <button
              className="btn big"
              disabled={state.sofaUsed}
              onClick={() => { sfx.sofaRest(); dispatch({ type: 'USE_SOFA', claw: Math.random() < 0.15 }); close(); say('你闭上眼。雨声，心跳，远处好像有人开了门。') }}
            >
              {state.sofaUsed ? '已经休息过了' : '闭眼休息'}
            </button>
          </div>
        </div>
      )}

      {activeHotspot === 'door' && (
        <div className="overlay">
          <div className="panel" style={{ width: 360, textAlign: 'center' }}>
            <img src="/assets/icons/lock.svg" alt="" style={{ width: 56, height: 56, marginBottom: 8 }} />
            <h2 style={{ margin: '0 0 12px' }}>门被锁住了</h2>
            <p style={{ color: '#9a9a90', margin: '0 0 16px' }}>门上写着 NO EXIT · UNTIL DAWN。外面永远是夜。你出不去的。</p>
            <button className="btn" onClick={close}>离开</button>
          </div>
        </div>
      )}

      {aiming && <ExecutionAim visitor={aiming.visitor} tool={aiming.tool} onSuccess={onAimSuccess} onFail={onAimFail} onCancel={onAimCancel} />}
      {execution && <ExecutionOverlay result={execution.result} tool={execution.tool} visitor={execution.visitor} onDone={onExecDone} />}
      {death !== false && <Death visitor={death} />}
    </div>
  )
}
