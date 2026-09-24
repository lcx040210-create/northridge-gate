import { useEffect, useState } from 'react'
import type { Visitor } from '../data/schema'
import Portrait from './Portrait'

const WEAK_POINTS: Record<string, { left: string; top: string; label: string }> = {
  skinfit: { left: '71%', top: '26%', label: '耳后接缝' },
  coretick: { left: '58%', top: '24%', label: '太阳穴核' },
  wetnest: { left: '50%', top: '48%', label: '核心' },
  human: { left: '50%', top: '38%', label: '身体' },
}

export default function ExecutionAim({ visitor, onSuccess, onFail }: {
  visitor: Visitor
  onSuccess: () => void
  onFail: () => void
}) {
  const [timeLeft, setTimeLeft] = useState(10)
  const [lunge, setLunge] = useState(false)
  const wp = WEAK_POINTS[visitor.role] ?? WEAK_POINTS.human

  useEffect(() => {
    const t = setInterval(() => setTimeLeft((x) => x - 1), 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    if (timeLeft <= 0) onFail()
  }, [timeLeft, onFail])

  // 攻击动作：周期性扑击
  useEffect(() => {
    const t = setInterval(() => { setLunge(true); setTimeout(() => setLunge(false), 380) }, 1500)
    return () => clearInterval(t)
  }, [])

  return (
    <div data-testid="exec-aim" style={{ position: 'absolute', inset: 0, background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 20 }}>
      <div style={{ color: '#e0a0a0', fontSize: 22, fontWeight: 'bold', marginBottom: 14 }}>
        它扑过来了！点击{wp.label}处决 —— <span style={{ color: timeLeft <= 3 ? '#ff4040' : '#ffe9a8', fontSize: 28 }}>{Math.max(0, timeLeft)}</span> 秒
      </div>
      <div style={{ position: 'relative', width: '38vw', height: '66vh', overflow: 'hidden', border: '2px solid #4a3030', boxShadow: '0 0 40px rgba(120,20,20,0.5)' }}>
        <div style={{ transform: lunge ? 'scale(1.1) translateY(-10px)' : 'none', transition: 'transform 0.13s', width: '100%', height: '100%' }}>
          <Portrait visitor={visitor} />
        </div>
        <div
          onClick={onSuccess}
          title={wp.label}
          style={{
            position: 'absolute', left: wp.left, top: wp.top, width: 52, height: 52,
            margin: '-26px 0 0 -26px', borderRadius: '50%',
            border: '2px dashed #e0a0a0', background: 'rgba(224,0,0,0.18)', cursor: 'crosshair',
          }}
        />
      </div>
      <div style={{ color: '#8a8a80', marginTop: 12, fontSize: 13 }}>准星对准弱点，点击左键处决</div>
    </div>
  )
}
