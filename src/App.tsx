import { useEffect, useReducer, useState } from 'react'
import { reducer, INITIAL_STATE, currentVisitor } from './engine/state'
import type { Verdict as VerdictType, Tool } from './data/schema'
import type { ExecutionResult } from './engine/execution'
import { resolveExecution } from './engine/execution'
import { WORLD_TEXT } from './data/world'
import { ITEMS } from './data/items'
import RoomScene from './scene/RoomScene'
import Window from './ui/Window'
import Inspect, { type InspectSlot } from './ui/Inspect'
import Verdict from './ui/Verdict'
import ExecutionOverlay from './ui/ExecutionOverlay'
import HUD from './ui/HUD'
import Dawn from './ui/Dawn'

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
      <div style={{ padding: 48 }}>
        <p>窗外有一个剪影在等。</p>
        <p>WASD 移动 · 鼠标视角 · 空格跳跃 · Ctrl 蹲下 · F / 左键交互</p>
        <button data-testid="start" onClick={() => dispatch({ type: 'START' })}>开始</button>
      </div>
    )
  }

  if (state.phase === 'dawn') return <Dawn state={state} />

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <RoomScene onInteract={setActiveHotspot} />
      <HUD state={state} dispatch={dispatch} />

      {activeHotspot === 'window' && visitor && (
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.85)' }}>
          <button onClick={close} style={{ position: 'absolute', top: 8, right: 8, zIndex: 10 }}>离开</button>
          <Window visitor={visitor} />
          <Inspect visitor={visitor} reaction={state.reaction} onInspect={(s: InspectSlot) => dispatch({ type: 'INSPECT', slot: s })} />
          <Verdict disabled={state.reaction <= 0} onJudge={handleJudge} />
          {state.visitorIndex === 2 && !state.hallucinationTriggered && <p data-testid="hallucination">走廊里，多了一双鞋。</p>}
        </div>
      )}

      {activeHotspot === 'manual' && (
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.9)', padding: 40, color: '#d8d8d0' }}>
          <button onClick={close} style={{ position: 'absolute', top: 8, right: 8 }}>离开</button>
          <h2>识别手册</h2>
          {WORLD_TEXT.filter((w) => w.surface === 'manual' || w.surface === 'drawer').map((w) => <p key={w.id}>{w.text}</p>)}
        </div>
      )}

      {activeHotspot === 'weapons' && (
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.9)', padding: 40, color: '#d8d8d0' }}>
          <button onClick={close} style={{ position: 'absolute', top: 8, right: 8 }}>离开</button>
          <h2>武器 / 道具</h2>
          {ITEMS.map((i) => <p key={i.id}>{i.name}：{i.desc}</p>)}
        </div>
      )}

      {activeHotspot === 'sofa' && (
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.9)', padding: 40, color: '#d8d8d0' }}>
          <button onClick={close} style={{ position: 'absolute', top: 8, right: 8 }}>离开</button>
          <h2>沙发</h2>
          <p>闭眼休息约 40 秒，San +20。但闭眼期间若有排队者，会必定自动放行 1 人。全关仅一次。</p>
          <p>（使用请点 HUD 上的「沙发」按钮）</p>
        </div>
      )}

      {execution && <ExecutionOverlay result={execution} onDone={() => setExecution(null)} />}
    </div>
  )
}
