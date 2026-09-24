import { useEffect, useReducer, useState } from 'react'
import { reducer, INITIAL_STATE, currentVisitor } from './engine/state'
import type { Verdict as VerdictType, Tool } from './data/schema'
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
import HUD from './ui/HUD'
import Dawn from './ui/Dawn'
import { startAmbient, playBlip } from './scene/audio'

const ITEM_ICONS: Record<string, string> = {
  coffee: '☕',
  sedative: '🌿',
  axe: '🪓',
  gun: '🔫',
  fire: '🔥',
}

const PSEUDO_GUIDE = [
  { name: '贴皮型 Skin-fit', tells: '耳后接缝 · 眨眼不同步 · 证件牙齿数不对', response: '冷兵器（消防斧）' },
  { name: '核响型 Core-tick', tells: '锁骨下金属嘀嗒 · 问天气答「和昨天一样」', response: '手枪打头核' },
  { name: '湿巢型 Wet-nest', tells: '指缝反光 · 呼气下沉 · 拒绝喝水', response: '焚化' },
  { name: '感染者 Infected', tells: '喉结滑动反了 · 突然求你快开门', response: '收容，不要杀' },
]

export default function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null)
  const [execution, setExecution] = useState<ExecutionResult | null>(null)

  const visitor = currentVisitor(state)

  useEffect(() => {
    if (activeHotspot !== null) document.exitPointerLock?.()
  }, [activeHotspot])

  const handleJudge = (verdict: VerdictType, tool?: Tool) => {
    if (verdict === 'execute' && tool && visitor) {
      setExecution(resolveExecution(visitor, tool))
    }
    dispatch({ type: 'JUDGE', verdict, tool })
  }

  const close = () => setActiveHotspot(null)

  if (state.phase === 'opening') {
    return (
      <div style={{ padding: 48, color: '#d8d8d0', background: '#0a0c0a', minHeight: '100vh' }}>
        <h1>北岭闸口</h1>
        <p style={{ color: '#9a9a90' }}>替换事件后第 19 夜。你是前哨的夜班安保，透过观察窗判断来者是人、伪人还是感染者。放行、处决、收容——对错到天亮才见分晓。</p>
        <h3>操作</h3>
        <ul>
          <li>WASD 移动</li>
          <li>鼠标移动视角（进入后点击画面锁定鼠标）</li>
          <li>空格 跳跃 · Ctrl 蹲下</li>
          <li>F 或 鼠标左键 与物品交互</li>
        </ul>
        <h3>目标</h3>
        <p>走到观察窗前按 F，检视来访者（眼 / 证 / 问一句），然后放行、处决或收容。</p>
        <button data-testid="start" onClick={() => { startAmbient(); dispatch({ type: 'START' }) }} style={{ fontSize: 18, padding: '10px 28px', cursor: 'pointer' }}>开始值班</button>
      </div>
    )
  }

  if (state.phase === 'dawn') return <Dawn state={state} />

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <RoomScene onInteract={(id) => { playBlip(); setActiveHotspot(id) }} />
      <HUD state={state} />

      {activeHotspot === null && (
        <div style={{ position: 'absolute', top: 56, left: '50%', transform: 'translateX(-50%)', color: '#ffe9a8', background: 'rgba(0,0,0,0.5)', padding: '6px 16px', borderRadius: 6, pointerEvents: 'none' }}>
          {state.records.length === 0 ? '→ 目标：走到观察窗前，按 F 检视来访者' : '→ 目标：继续处理下一位来访者'}
        </div>
      )}

      {activeHotspot === null && (
        <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', color: '#c8c8c0', background: 'rgba(0,0,0,0.55)', padding: '6px 16px', borderRadius: 6, pointerEvents: 'none' }}>
          走到观察窗或物品前，按 F 交互
        </div>
      )}

      {activeHotspot === 'window' && visitor && (
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.88)', display: 'flex', padding: 20, gap: 20 }}>
          <div style={{ flex: 1, background: '#050505', border: '1px solid #333', position: 'relative', overflow: 'hidden' }}>
            <Portrait visitor={visitor} />
            {state.visitorIndex === 2 && !state.hallucinationTriggered && (
              <p data-testid="hallucination" style={{ position: 'absolute', bottom: 10, left: 10, color: '#e0a0a0', background: 'rgba(0,0,0,0.6)', padding: '4px 10px', borderRadius: 4 }}>走廊里，多了一双鞋。</p>
            )}
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14, overflow: 'auto' }}>
            <Window visitor={visitor} />
            <Inspect visitor={visitor} onInspect={(s: InspectSlot) => dispatch({ type: 'INSPECT', slot: s })} />
            <Verdict disabled={false} onJudge={handleJudge} />
            <button onClick={close} style={{ alignSelf: 'flex-start' }}>离开</button>
          </div>
        </div>
      )}

      {activeHotspot === 'manual' && (
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.82)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#1a1d1a', border: '1px solid #4a5048', borderRadius: 8, padding: 24, width: 480, color: '#d8d8d0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h2 style={{ margin: 0 }}>📖 识别手册 v0.4</h2>
              <button onClick={close}>离开</button>
            </div>
            <div style={{ background: '#242824', padding: 18, borderRadius: 6, maxHeight: '70vh', overflow: 'auto' }}>
              <h3 style={{ margin: '0 0 10px', color: '#ffe9a8' }}>已发现的伪人种类与应对</h3>
              {PSEUDO_GUIDE.map((p) => (
                <div key={p.name} style={{ marginBottom: 14, paddingBottom: 12, borderBottom: '1px solid #33382f' }}>
                  <div style={{ fontWeight: 'bold', color: '#d8d8d0' }}>{p.name}</div>
                  <div style={{ color: '#9a9a90', fontSize: 13, margin: '4px 0' }}>破绽：{p.tells}</div>
                  <div style={{ color: '#c9b060', fontSize: 13 }}>应对：{p.response}</div>
                </div>
              ))}
              <p style={{ margin: 0, color: '#8a8a80', fontStyle: 'italic' }}>
                {WORLD_TEXT.find((w) => w.surface === 'drawer')?.text}
              </p>
            </div>
          </div>
        </div>
      )}

      {activeHotspot === 'weapons' && (
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.82)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#1a1d1a', border: '1px solid #4a5048', borderRadius: 8, padding: 24, width: 480, color: '#d8d8d0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h2 style={{ margin: 0 }}>🗄️ 武器 / 道具</h2>
              <button onClick={close}>离开</button>
            </div>
            {ITEMS.map((i) => (
              <div key={i.id} style={{ background: '#242824', padding: 12, marginBottom: 10, borderRadius: 6, display: 'flex', gap: 14, alignItems: 'center', border: '1px solid #33382f' }}>
                <div style={{ fontSize: 28, width: 36, textAlign: 'center' }}>{ITEM_ICONS[i.id] ?? '⬛'}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 'bold', marginBottom: 2 }}>{i.name}</div>
                  <div style={{ color: '#9a9a90', fontSize: 13 }}>{i.desc}</div>
                  {i.effect.constraint && <div style={{ color: '#c9b060', fontSize: 12, marginTop: 2 }}>⚠ {i.effect.constraint}</div>}
                </div>
                {i.id === 'coffee' && <button disabled={state.coffeeUsed >= 2} onClick={() => dispatch({ type: 'DRINK_COFFEE' })}>{state.coffeeUsed >= 2 ? '已喝光' : '喝'}</button>}
                {i.id === 'sedative' && <button disabled={state.sedativeUsed} onClick={() => dispatch({ type: 'USE_SEDATIVE' })}>{state.sedativeUsed ? '已用' : '嚼'}</button>}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeHotspot === 'sofa' && (
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.82)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#1a1d1a', border: '1px solid #4a5048', borderRadius: 8, padding: 24, width: 440, color: '#d8d8d0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h2 style={{ margin: 0 }}>🛋️ 沙发</h2>
              <button onClick={close}>离开</button>
            </div>
            <p style={{ lineHeight: 1.6, marginBottom: 16 }}>
              闭眼休息约 40 秒，San +20。<br />
              <span style={{ color: '#e0a0a0' }}>但闭眼期间若有排队者，会必定自动放行 1 人。</span><br />
              <span style={{ color: '#8a8a80' }}>全关仅一次。</span>
            </p>
            <button
              disabled={state.sofaUsed}
              onClick={() => { dispatch({ type: 'USE_SOFA', claw: Math.random() < 0.15 }); close() }}
              style={{ fontSize: 16, padding: '10px 24px', cursor: state.sofaUsed ? 'default' : 'pointer' }}
            >
              {state.sofaUsed ? '已经休息过了' : '闭眼休息'}
            </button>
          </div>
        </div>
      )}

      {activeHotspot === 'door' && (
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.82)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#1a1d1a', border: '1px solid #4a5048', borderRadius: 8, padding: 24, width: 360, color: '#d8d8d0', textAlign: 'center' }}>
            <div style={{ fontSize: 40, marginBottom: 8 }}>🔒</div>
            <h2 style={{ margin: '0 0 12px' }}>门被锁住了</h2>
            <p style={{ color: '#9a9a90', margin: '0 0 16px' }}>外面永远是夜。你出不去的。</p>
            <button onClick={close}>离开</button>
          </div>
        </div>
      )}

      {execution && <ExecutionOverlay result={execution} onDone={() => setExecution(null)} />}
    </div>
  )
}
