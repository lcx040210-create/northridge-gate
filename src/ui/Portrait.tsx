import { useEffect, useState } from 'react'
import type { Visitor } from '../data/schema'

// 立绘定格（stop-motion）：人类长停 + 偶尔眨眼；伪人帧序乱跳、时长不规则，偶尔长时间僵住。
// 所有帧都渲染好、只切可见性，避免切帧闪白。
export default function Portrait({ visitor, frames, className }: { visitor: Visitor; frames?: string[]; className?: string }) {
  const list = frames ?? (visitor.freezeFrames.length ? visitor.freezeFrames : [visitor.portrait])
  const [f, setF] = useState(0)
  const pseudo = visitor.role !== 'human'

  useEffect(() => {
    setF(0)
    if (list.length <= 1) return
    let t = 0
    let i = 0
    const next = () => {
      let hold: number
      if (pseudo) {
        i = Math.random() < 0.25 ? 0 : Math.floor(Math.random() * list.length)
        hold = Math.random() < 0.12 ? 1800 + Math.random() * 1600 : 110 + Math.random() * 520
      } else {
        i = (i + 1) % list.length
        hold = i === 0 ? 1600 + Math.random() * 2400 : 90 + Math.random() * 90
      }
      setF(i)
      t = window.setTimeout(next, hold)
    }
    t = window.setTimeout(next, 900)
    return () => clearTimeout(t)
  }, [visitor, list.length, pseudo])

  return (
    <div className={className ?? 'portrait'}>
      {list.map((src, i) => (
        <img key={src} src={src} alt={i === f ? visitor.claimedName : ''} style={{ display: i === f ? 'block' : 'none' }} draggable={false} />
      ))}
    </div>
  )
}
