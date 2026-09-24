import { useState } from 'react'
import type { GameState } from '../engine/types'
import { toggleMute, isMuted } from '../scene/audio'

export default function HUD({ state }: { state: GameState }) {
  const [muted, setMuted] = useState(isMuted())
  const bandEffect = state.san >= 70 ? 'NORMAL' : state.san >= 40 ? 'RINGING' : state.san >= 15 ? 'SWAP' : 'INVERT'
  const color = state.san >= 70 ? '#5aa05a' : state.san >= 40 ? '#c9b060' : '#b83a2a'
  return (
    <>
      <div data-testid="hud" className="hud">
        <img src="./assets/icons/san.svg" alt="" />
        <div>
          <div style={{ fontSize: 13 }}>San: {state.san} ({bandEffect})</div>
          <div className="bar"><div style={{ width: `${state.san}%`, background: color }} /></div>
        </div>
      </div>
      <div className="hud-right">
        <span>VISITORS {Math.min(state.visitorIndex + 1, 4)} / 4</span>
        <button className="btn" style={{ padding: '4px 8px' }} onClick={() => setMuted(toggleMute())} title="M MUTE">
          <img src={muted ? './assets/icons/mute.svg' : './assets/icons/sound.svg'} alt={muted ? 'Muted' : 'Sound'} />
        </button>
      </div>
      {/* The lower the San, the darker and redder the screen edges */}
      <div className="san-fx" style={{ boxShadow: state.san < 70 ? `inset 0 0 ${200 - state.san * 2}px rgba(${state.san < 40 ? '90,0,0' : '0,0,0'},${(0.9 - state.san / 100).toFixed(2)})` : 'none' }} />
    </>
  )
}
