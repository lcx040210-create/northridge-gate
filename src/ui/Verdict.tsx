import { useState } from 'react'
import type { Verdict as V, Tool } from '../data/schema'

const VERDICTS: { v: V; label: string }[] = [
  { v: 'admit', label: '放行' },
  { v: 'execute', label: '处决' },
  { v: 'contain', label: '收容' },
]
const TOOLS: Tool[] = ['axe', 'gun', 'fire']

export default function Verdict({ disabled, onJudge }: {
  disabled: boolean
  onJudge: (verdict: V, tool?: Tool) => void
}) {
  const [pickingTool, setPickingTool] = useState(false)

  if (pickingTool) {
    return (
      <div data-testid="tool-select">
        {TOOLS.map((t) => (
          <button key={t} onClick={() => onJudge('execute', t)}>{t}</button>
        ))}
        <button onClick={() => setPickingTool(false)}>取消</button>
      </div>
    )
  }

  return (
    <div data-testid="verdict">
      {VERDICTS.map(({ v, label }) => (
        <button key={v} disabled={disabled} onClick={() => (v === 'execute' ? setPickingTool(true) : onJudge(v))}>
          {label}
        </button>
      ))}
    </div>
  )
}
