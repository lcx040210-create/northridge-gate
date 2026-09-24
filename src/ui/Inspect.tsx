import { useState } from 'react'
import type { Visitor } from '../data/schema'
import Typewriter from './Typewriter'
import { inspect } from '../scene/audio'

export type InspectSlot = 'eye' | 'id' | 'question'

const SLOTS: { id: InspectSlot; label: string; icon: string }[] = [
  { id: 'eye', label: 'EYES', icon: './assets/icons/eye.svg' },
  { id: 'id', label: 'ID', icon: './assets/icons/id.svg' },
  { id: 'question', label: 'ASK', icon: './assets/icons/question.svg' },
]

export default function Inspect({ visitor, onInspect }: {
  visitor: Visitor
  onInspect: (slot: InspectSlot) => void
}) {
  const [shown, setShown] = useState<Partial<Record<InspectSlot, boolean>>>({})
  const [qi, setQi] = useState(0)
  const qs = visitor.tells.questions
  const pseudo = visitor.role !== 'human'

  const open = (id: InspectSlot) => {
    inspect(id)
    if (id === 'question' && shown.question) {
      if (qi < qs.length - 1) setQi((i) => i + 1)
    } else setShown((s) => ({ ...s, [id]: true }))
    onInspect(id)
  }

  return (
    <div data-testid="inspect" className="card">
      <h4>INSPECT</h4>
      <div className="row">
        {SLOTS.map((s) => (
          <button key={s.id} className="btn" onClick={() => open(s.id)} disabled={s.id === 'question' && shown.question && qi >= qs.length - 1}>
            <img src={s.icon} alt="" /><span>{s.id === 'question' && shown.question ? 'ASK AGAIN' : s.label}</span>
          </button>
        ))}
      </div>
      {shown.eye && <div className="finding"><img src="./assets/icons/eye.svg" alt="" /><span>{visitor.tells.eye}</span></div>}
      {shown.id && <div className="finding"><img src="./assets/icons/id.svg" alt="" /><span>{visitor.tells.id}</span></div>}
      {shown.question && qs[qi] && (
        <div className="finding">
          <img src="./assets/icons/question.svg" alt="" />
          <div>
            <div className="q">You: {qs[qi].q}</div>
            <Typewriter key={qi} text={qs[qi].a} voice={visitor.voice} glitch={pseudo} />
          </div>
        </div>
      )}
    </div>
  )
}
