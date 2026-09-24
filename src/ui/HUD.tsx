import type { GameState } from '../engine/types'

export default function HUD({ state }: { state: GameState }) {
  const bandEffect = state.san >= 70 ? '正常' : state.san >= 40 ? '耳鸣' : state.san >= 15 ? '对调' : '反转'
  return (
    <div data-testid="hud" style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(0,0,0,0.55)', padding: '10px 14px', borderRadius: 8 }}>
      <div style={{ color: '#d8d8d0', fontSize: 13 }}>San：{state.san}（{bandEffect}）</div>
      <div style={{ width: 180, height: 8, background: '#333', borderRadius: 4, marginTop: 5 }}>
        <div style={{ width: `${state.san}%`, height: '100%', background: state.san < 40 ? '#a33' : '#3a3', borderRadius: 4 }} />
      </div>
    </div>
  )
}
