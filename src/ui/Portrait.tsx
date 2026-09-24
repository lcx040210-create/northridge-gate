import type { Visitor } from '../data/schema'

export default function Portrait({ visitor, frame = 0 }: { visitor: Visitor; frame?: number }) {
  const src = visitor.freezeFrames[frame] ?? visitor.portrait
  return <img src={src} alt={visitor.claimedName} style={{ height: '100%', filter: 'grayscale(0.3) contrast(1.1)' }} />
}
