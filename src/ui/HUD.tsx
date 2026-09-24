import type { Action } from '../engine/state'
import type { GameState } from '../engine/types'

export default function HUD({ state, dispatch }: { state: GameState; dispatch: (a: Action) => void }) {
  const bandEffect = state.san >= 70 ? '正常' : state.san >= 40 ? '耳鸣' : state.san >= 15 ? '对调' : '反转'
  return (
    <div data-testid="hud" style={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', padding: 16 }}>
      <div>
        <div>San：{state.san}（{bandEffect}）</div>
        <div style={{ width: 200, height: 10, background: '#333' }}>
          <div style={{ width: `${state.san}%`, height: '100%', background: state.san < 40 ? '#a33' : '#3a3' }} />
        </div>
        <div>反应：{state.reaction}/{state.reactionMax}</div>
      </div>
      <div>
        <button disabled={state.coffeeUsed >= 2} onClick={() => dispatch({ type: 'DRINK_COFFEE' })}>咖啡（{2 - state.coffeeUsed}）</button>
        <button disabled={state.sedativeUsed} onClick={() => dispatch({ type: 'USE_SEDATIVE' })}>镇静叶</button>
        <button disabled={state.sofaUsed} onClick={() => dispatch({ type: 'USE_SOFA', claw: Math.random() < 0.15 })}>沙发</button>
        <button onClick={() => dispatch({ type: 'TOGGLE_VENTILATION' })}>通风：{state.ventilationOn ? '开' : '关'}</button>
      </div>
    </div>
  )
}
