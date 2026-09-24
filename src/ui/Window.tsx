import type { Visitor } from '../data/schema'
import Typewriter from './Typewriter'

// Dialogue panel (right side): name + greeting (typewriter) + glitch line
export default function Window({ visitor }: { visitor: Visitor }) {
  const pseudo = visitor.role !== 'human'
  return (
    <div data-testid="window" className="card">
      <h4>INTERCOM</h4>
      <div className="speaker"><span className="led" />{visitor.claimedName}</div>
      {visitor.greeting ? <Typewriter text={visitor.greeting} voice={visitor.voice} glitch={pseudo} /> : <p className="line">It watches you through the glass, waiting for you to speak.</p>}
      {visitor.glitchLine && <p data-testid="glitch" className="line glitch">「{visitor.glitchLine}」</p>}
    </div>
  )
}
