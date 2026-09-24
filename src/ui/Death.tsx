import { useEffect } from 'react'
import type { Visitor } from '../data/schema'
import { death } from '../scene/audio'

// 死亡：它撞碎玻璃扑到脸上 → 血色暗角 → 黑屏
export default function Death({ visitor }: { visitor: Visitor | null }) {
  useEffect(() => { death() }, [])
  return (
    <div data-testid="death" className="death">
      {visitor && <div className="portrait"><img src={visitor.attackFrame ?? visitor.portrait} alt="" draggable={false} /></div>}
      <img className="fx" src="/assets/env/glass_shatter.svg" alt="" />
      <img className="fx" src="/assets/env/blood_vignette.svg" alt="" />
      <div className="black" />
      <div className="msg">
        <h1>你死了</h1>
        <p>它冲进来的时候，你没来得及扣动扳机。</p>
        <button className="btn big" onClick={() => location.reload()}>重新开始</button>
      </div>
    </div>
  )
}
