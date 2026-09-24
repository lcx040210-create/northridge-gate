import type { Visitor } from '../data/schema'
import Typewriter from './Typewriter'

// 对话面板（右侧）：名字 + 开场白（打字机） + 卡帧句
export default function Window({ visitor }: { visitor: Visitor }) {
  const pseudo = visitor.role !== 'human'
  return (
    <div data-testid="window" className="card">
      <h4>INTERCOM · 对讲</h4>
      <div className="speaker"><span className="led" />{visitor.claimedName}</div>
      {visitor.greeting ? <Typewriter text={visitor.greeting} voice={visitor.voice} glitch={pseudo} /> : <p className="line">他透过玻璃看着你，等你开口。</p>}
      {visitor.glitchLine && <p data-testid="glitch" className="line glitch">「{visitor.glitchLine}」</p>}
    </div>
  )
}
