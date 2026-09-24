import { useState } from 'react'
import type { Visitor } from '../data/schema'

export type InspectSlot = 'eye' | 'id' | 'question'

export default function Inspect({ visitor, onInspect }: {
  visitor: Visitor
  onInspect: (slot: InspectSlot) => void
}) {
  const [shown, setShown] = useState<Partial<Record<InspectSlot, boolean>>>({})
  const [qi, setQi] = useState(0)

  const slot = (id: InspectSlot, label: string) => (
    <button
      key={id}
      onClick={() => { setShown((s) => ({ ...s, [id]: true })); onInspect(id) }}
      style={{ marginRight: 8, padding: '6px 14px' }}
    >
      {label}
    </button>
  )

  return (
    <div data-testid="inspect" style={{ background: '#121612', padding: 14, borderRadius: 8, border: '1px solid #2a302a', color: '#d8d8d0' }}>
      <div style={{ marginBottom: 8 }}>{slot('eye', '眼')}{slot('id', '证')}{slot('question', '问一句')}</div>
      {shown.eye && <p style={{ margin: '4px 0' }}>👁 {visitor.tells.eye}</p>}
      {shown.id && <p style={{ margin: '4px 0' }}>🪪 {visitor.tells.id}</p>}
      {shown.question && (
        <div style={{ margin: '4px 0' }}>
          <p>💬 {visitor.tells.questions[qi]?.a}</p>
          <button disabled={qi >= visitor.tells.questions.length - 1} onClick={() => setQi((i) => i + 1)}>换一问</button>
        </div>
      )}
    </div>
  )
}
