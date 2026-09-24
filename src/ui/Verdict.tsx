import { useState } from 'react'
import type { Verdict as V, Tool } from '../data/schema'
import { uiClick } from '../scene/audio'

const VERDICTS: { v: V; label: string; icon: string; hint: string }[] = [
  { v: 'admit', label: 'ADMIT', icon: './assets/icons/admit.svg', hint: 'OPEN GATE' },
  { v: 'execute', label: 'EXECUTE', icon: './assets/icons/execute.svg', hint: 'PICK WEAPON' },
  { v: 'contain', label: 'CONTAIN', icon: './assets/icons/contain.svg', hint: 'SEAL POD' },
]
const TOOLS: { t: Tool; name: string }[] = [
  { t: 'axe', name: 'Fire Axe' },
  { t: 'gun', name: 'Handgun' },
  { t: 'fire', name: 'Incinerator' },
]

export default function Verdict({ disabled, onJudge }: {
  disabled: boolean
  onJudge: (verdict: V, tool?: Tool) => void
}) {
  const [pickingTool, setPickingTool] = useState(false)

  if (pickingTool) {
    return (
      <div data-testid="tool-select" className="card">
        <h4>ARMORY · SELECT EXECUTION TOOL</h4>
        <div className="row">
          {TOOLS.map(({ t, name }) => (
            <button key={t} className="btn danger" onClick={() => { uiClick(); onJudge('execute', t) }}>
              <img src={`./assets/icons/${t}.svg`} alt="" /><span>{name}</span><small>{t}</small>
            </button>
          ))}
          <button className="btn" onClick={() => { uiClick(); setPickingTool(false) }}>CANCEL</button>
        </div>
      </div>
    )
  }

  return (
    <div data-testid="verdict" className="card">
      <h4>VERDICT</h4>
      <div className="row">
        {VERDICTS.map(({ v, label, icon, hint }) => (
          <button key={v} className={`btn${v === 'execute' ? ' danger' : ''}`} disabled={disabled} onClick={() => { uiClick(); if (v === 'execute') setPickingTool(true); else onJudge(v) }}>
            <img src={icon} alt="" /><span>{label}</span><small>{hint}</small>
          </button>
        ))}
      </div>
    </div>
  )
}
