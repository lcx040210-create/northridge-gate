import { useEffect } from 'react'
import type { Visitor } from '../data/schema'
import { death } from '../scene/audio'

// Death: it smashes through the glass and lunges at your face → red vignette → black screen
export default function Death({ visitor }: { visitor: Visitor | null }) {
  useEffect(() => { death() }, [])

  return (
    <div data-testid="death" className="death">
      {visitor && <div className="portrait"><img src={visitor.attackFrame ?? visitor.portrait} alt="" draggable={false} /></div>}
      <img className="fx" src="/assets/env/glass_shatter.svg" alt="" />
      <img className="fx" src="/assets/env/blood_vignette.svg" alt="" />
      <div className="black" />
      <div className="msg">
        <h1>YOU DIED</h1>
        <p>When it came through the glass, you never got to pull the trigger.</p>
        <button className="btn big" onClick={() => location.reload()}>RESTART</button>
      </div>
    </div>
  )
}
