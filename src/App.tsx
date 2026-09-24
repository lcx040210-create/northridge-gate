import { useReducer, useState } from 'react'
import { reducer, INITIAL_STATE, currentVisitor } from './engine/state'
import type { Verdict as VerdictType, Tool } from './data/schema'
import type { ExecutionResult } from './engine/execution'
import { resolveExecution } from './engine/execution'
import RoomScene from './scene/RoomScene'
import Window from './ui/Window'
import Inspect, { type InspectSlot } from './ui/Inspect'
import Verdict from './ui/Verdict'
import ExecutionOverlay from './ui/ExecutionOverlay'
import HUD from './ui/HUD'
import Dawn from './ui/Dawn'
import { HOTSPOTS } from './scene/cameras'

export default function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  const [hotspot, setHotspot] = useState('window')
  const [execution, setExecution] = useState<ExecutionResult | null>(null)

  const visitor = currentVisitor(state)

  const handleJudge = (verdict: VerdictType, tool?: Tool) => {
    if (verdict === 'execute' && tool && visitor) {
      setExecution(resolveExecution(visitor, tool))
    }
    dispatch({ type: 'JUDGE', verdict, tool })
  }

  if (state.phase === 'opening') {
    return (
      <div style={{ padding: 48 }}>
        <p>窗外有一个剪影在等。</p>
        <p>打开武器柜：消防斧、手枪。窗框贴纸亮起三类对照。</p>
        <button data-testid="start" onClick={() => dispatch({ type: 'START' })}>开始</button>
      </div>
    )
  }

  if (state.phase === 'dawn') return <Dawn state={state} />

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <RoomScene hotspotId={hotspot} />
      <HUD state={state} dispatch={dispatch} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', gap: 8, padding: 8 }}>
        {HOTSPOTS.map((h) => (
          <button key={h.id} onClick={() => setHotspot(h.id)}>{h.label}</button>
        ))}
      </div>
      {hotspot === 'window' && visitor && (
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.85)' }}>
          <Window visitor={visitor} />
          <Inspect visitor={visitor} reaction={state.reaction} onInspect={(s: InspectSlot) => dispatch({ type: 'INSPECT', slot: s })} />
          <Verdict disabled={state.reaction <= 0} onJudge={handleJudge} />
          {state.visitorIndex === 2 && !state.hallucinationTriggered && <p data-testid="hallucination">走廊里，多了一双鞋。</p>}
        </div>
      )}
      {execution && <ExecutionOverlay result={execution} onDone={() => setExecution(null)} />}
    </div>
  )
}
