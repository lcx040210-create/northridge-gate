import { useState } from 'react'
import type { Visitor } from '../data/schema'

export type InspectSlot = 'eye' | 'id' | 'question'

export default function Inspect({ visitor, reaction, onInspect }: {
  visitor: Visitor
  reaction: number
  onInspect: (slot: InspectSlot) => void
}) {
  const [shown, setShown] = useState<Partial<Record<InspectSlot, boolean>>>({})
  const [qi, setQi] = useState(0)

  const slot = (id: InspectSlot, label: string, cost: number) => (
    <button
      key={id}
      disabled={reaction < cost}
      onClick={() => { setShown((s) => ({ ...s, [id]: true })); onInspect(id) }}
      style={{ marginRight: 8 }}
    >
      {label}（{cost}）
    </button>
  )

  return (
    <div data-testid="inspect">
      {slot('eye', '眼', 20)}
      {slot('id', '证', 0)}
      {slot('question', '问一句', 20)}
      {shown.eye && <p>{visitor.tells.eye}</p>}
      {shown.id && <p>{visitor.tells.id}</p>}
      {shown.question && (
        <div>
          <p>{visitor.tells.questions[qi]?.a}</p>
          <button disabled={qi >= visitor.tells.questions.length - 1} onClick={() => setQi((i) => i + 1)}>换一问</button>
        </div>
      )}
    </div>
  )
}
