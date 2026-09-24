import { useEffect, useState } from 'react'
import type { ExecutionResult } from '../engine/execution'

export default function ExecutionOverlay({ result, onDone }: {
  result: ExecutionResult
  onDone: () => void
}) {
  const [frame, setFrame] = useState(-1) // -1 = 遮黑

  useEffect(() => {
    setFrame(-1)
    const t1 = setTimeout(() => setFrame(0), 2000) // 2 秒遮黑
    const t2 = setTimeout(() => setFrame(1), 2600)
    const t3 = setTimeout(() => setFrame(2), 3200)
    const t4 = setTimeout(() => setFrame(3), 3800)
    const t5 = setTimeout(onDone, 4600)
    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout)
  }, [result, onDone])

  return (
    <div data-testid="exec-overlay" style={{ position: 'absolute', inset: 0, background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {frame === -1 && <div data-testid="blackout">遮黑</div>}
      {frame >= 0 && <img src={result.frames[frame]} alt={`帧${frame}`} style={{ maxHeight: '60%' }} />}
      {frame === 3 && result.success && <img src={result.residue} alt="残渣" style={{ maxHeight: '28%', marginTop: 12 }} />}
    </div>
  )
}
