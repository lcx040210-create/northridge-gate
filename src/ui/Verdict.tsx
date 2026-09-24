import { useState } from 'react'
import type { Verdict as V, Tool } from '../data/schema'
import { uiClick } from '../scene/audio'

const VERDICTS: { v: V; label: string; icon: string; hint: string }[] = [
  { v: 'admit', label: '放行', icon: '/assets/icons/admit.svg', hint: '开门' },
  { v: 'execute', label: '处决', icon: '/assets/icons/execute.svg', hint: '选武器' },
  { v: 'contain', label: '收容', icon: '/assets/icons/contain.svg', hint: '关进舱' },
]
const TOOLS: { t: Tool; name: string }[] = [
  { t: 'axe', name: '消防斧' },
  { t: 'gun', name: '手枪' },
  { t: 'fire', name: '焚化罐' },
]

export default function Verdict({ disabled, onJudge }: {
  disabled: boolean
  onJudge: (verdict: V, tool?: Tool) => void
}) {
  const [pickingTool, setPickingTool] = useState(false)

  if (pickingTool) {
    return (
      <div data-testid="tool-select" className="card">
        <h4>ARMORY · 选择处决方式</h4>
        <div className="row">
          {TOOLS.map(({ t, name }) => (
            <button key={t} className="btn danger" onClick={() => { uiClick(); onJudge('execute', t) }}>
              <img src={`/assets/icons/${t}.svg`} alt="" /><span>{name}</span><small>{t}</small>
            </button>
          ))}
          <button className="btn" onClick={() => { uiClick(); setPickingTool(false) }}>取消</button>
        </div>
      </div>
    )
  }

  return (
    <div data-testid="verdict" className="card">
      <h4>VERDICT · 判定</h4>
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
