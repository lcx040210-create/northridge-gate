import { useEffect, useState } from 'react'
import type { ExecutionResult } from '../engine/execution'
import type { Tool, Visitor } from '../data/schema'
import * as sfx from '../scene/audio'

// 处决定格：遮黑 → 4 帧（第一人称武器叠在来访者立绘上）→ 玻璃残渣。无文字。
const TIMES = [900, 1500, 2150, 3000]
const DONE_AT = 4400

// 各帧立绘的受击动作
const POSE: Record<Tool, string[]> = {
  axe: ['none', 'translateX(-2%)', 'translateX(-6%) rotate(-7deg) scale(1.03)', 'translate(-10%, 32%) rotate(-24deg)'],
  gun: ['none', 'translateY(-1%)', 'translate(3%, -2%) rotate(6deg) scale(0.98)', 'translate(6%, 36%) rotate(18deg)'],
  fire: ['none', 'scale(1.01)', 'translateY(4%) scale(0.97)', 'translateY(40%) scale(0.9)'],
}
const FILTER: Record<Tool, string[]> = {
  axe: ['brightness(0.8)', 'brightness(0.8)', 'brightness(1.3) contrast(1.3)', 'brightness(0.45) saturate(0.6)'],
  gun: ['brightness(0.8)', 'brightness(1.6) sepia(0.4)', 'brightness(1.2) contrast(1.4)', 'brightness(0.45)'],
  fire: ['brightness(0.8)', 'brightness(1.2) sepia(0.6)', 'brightness(1.4) sepia(1) saturate(3) hue-rotate(-20deg)', 'brightness(0.15) sepia(1)'],
}

function playFrame(tool: Tool, i: number, success: boolean) {
  if (tool === 'axe') [() => sfx.cabinet(), () => sfx.axeSwing(), () => sfx.axeChop(), () => success && sfx.bodyFall()][i]()
  if (tool === 'gun') [() => sfx.aimTick(false), () => sfx.gunshot(), () => success ? sfx.coreBurst() : sfx.glassCrack(), () => success && sfx.bodyFall()][i]()
  if (tool === 'fire') [() => sfx.fireIgnite(), () => sfx.fireWhoosh(), () => sfx.screech(), () => success && sfx.bodyFall()][i]()
}

export default function ExecutionOverlay({ result, onDone, tool, visitor }: {
  result: ExecutionResult
  onDone: () => void
  tool?: Tool
  visitor?: Visitor
}) {
  const [frame, setFrame] = useState(-1) // -1 = 遮黑
  const t = tool ?? (result.frames[0]?.match(/exec_(axe|gun|fire)/)?.[1] as Tool | undefined) ?? 'axe'

  useEffect(() => {
    setFrame(-1)
    const ids = TIMES.map((ms, i) => setTimeout(() => { setFrame(i); playFrame(t, i, result.success) }, ms))
    ids.push(setTimeout(onDone, DONE_AT))
    return () => ids.forEach(clearTimeout)
  }, [result, onDone, t])

  // 失败 = 用错工具，它逃了：最后一帧人不倒而是消失
  const pose = frame < 0 ? 'none' : !result.success && frame === 3 ? 'translateX(60%) scale(0.9)' : POSE[t][frame]
  const portrait = visitor?.attackFrame ?? visitor?.portrait

  return (
    <div data-testid="exec-overlay" className="exec">
      {frame === -1 && <div data-testid="blackout" style={{ position: 'absolute', inset: 0, background: '#000' }} />}
      {frame >= 0 && (
        <div className={`stage${frame === 2 ? ' shaking' : ''}`}>
          <img className="fx" src={visitor?.scene ?? '/assets/scenes/window.svg'} alt="" style={{ filter: 'brightness(0.55)' }} />
          {portrait && (
            <div className="portrait" style={{ transform: `translateX(-50%) ${pose}`, filter: FILTER[t][frame], opacity: !result.success && frame === 3 ? 0 : 1 }}>
              <img src={portrait} alt="" draggable={false} />
            </div>
          )}
          <img className="fx" src="/assets/scenes/window_glass.svg" alt="" />
          {frame === 3 && result.success && <img className="fx" src={result.residue} alt="残渣" />}
          <img className="fx" src={result.frames[frame]} alt={`帧${frame}`} />
          <div className={`flash${frame === 1 || frame === 2 ? ' on' : ''}`} key={frame} />
        </div>
      )}
    </div>
  )
}
