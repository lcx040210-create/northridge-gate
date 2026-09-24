import { useState } from 'react'
import type { Visitor } from '../data/schema'
import Portrait from './Portrait'

export default function Window({ visitor }: { visitor: Visitor }) {
  const [frame, setFrame] = useState(0)
  return (
    <div data-testid="window" style={{ display: 'flex', height: '100%', padding: 24, gap: 24 }}>
      <div style={{ flex: 1, background: '#000', border: '1px solid #333' }} onClick={() => setFrame((f) => (f + 1) % visitor.freezeFrames.length)}>
        <Portrait visitor={visitor} frame={frame} />
        <div style={{ color: '#666', fontSize: 12 }}>点击立绘切换定格帧</div>
      </div>
      <div style={{ flex: 1, background: '#111', padding: 16 }}>
        <h2>{visitor.claimedName}</h2>
        {visitor.glitchLine && <p data-testid="glitch">{visitor.glitchLine}</p>}
        <p style={{ color: '#888' }}>（对话与三槽检视由后续任务接入）</p>
      </div>
    </div>
  )
}
