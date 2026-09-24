import type { Visitor } from '../data/schema'

// 对话面板（右侧）：名字 + 卡帧句 + 台词
export default function Window({ visitor }: { visitor: Visitor }) {
  return (
    <div data-testid="window" style={{ background: '#121612', padding: 14, borderRadius: 8, color: '#d8d8d0', border: '1px solid #2a302a' }}>
      <div style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 8 }}>{visitor.claimedName}</div>
      {visitor.glitchLine && <p data-testid="glitch" style={{ color: '#e0a0a0', margin: '0 0 8px' }}>「{visitor.glitchLine}」</p>}
      <p style={{ color: '#8a8a80', fontSize: 13, margin: 0 }}>他透过玻璃看着你，等你开口。</p>
    </div>
  )
}
