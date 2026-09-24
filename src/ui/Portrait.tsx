import { useEffect, useState } from 'react'
import type { Visitor } from '../data/schema'

// 立绘 + 自动定格循环（stop-motion 感）
export default function Portrait({ visitor }: { visitor: Visitor }) {
  const [f, setF] = useState(0)
  useEffect(() => {
    setF(0)
    if (visitor.freezeFrames.length <= 1) return
    const t = setInterval(() => setF((i) => (i + 1) % visitor.freezeFrames.length), 220)
    return () => clearInterval(t)
  }, [visitor])
  const src = visitor.freezeFrames[f] ?? visitor.portrait
  return (
    <img
      src={src}
      alt={visitor.claimedName}
      style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.25) contrast(1.15)' }}
    />
  )
}
