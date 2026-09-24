import { useEffect, useRef, useState } from 'react'
import type { Visitor, Tool } from '../data/schema'
import { startAimTension, stopAimTension, aimTick, screech, heartbeat } from '../scene/audio'

// 弱点位置（相对扑击立绘 600×800 的百分比）
const WEAK_POINTS: Record<string, { left: string; top: string; label: string }[]> = {
  skinfit: [{ left: '71%', top: '51%', label: '耳后接缝' }],
  coretick: [{ left: '44%', top: '64%', label: '锁骨下的核' }, { left: '35%', top: '28%', label: '太阳穴核' }],
  wetnest: [{ left: '50%', top: '72%', label: '核心' }],
  human: [{ left: '50%', top: '72%', label: '胸口' }],
}

export default function ExecutionAim({ visitor, onSuccess, onFail, onCancel }: {
  visitor: Visitor
  tool?: Tool
  onSuccess: () => void
  onFail: () => void
  onCancel?: () => void
}) {
  const human = visitor.role === 'human'
  const [timeLeft, setTimeLeft] = useState(10)
  const [lunge, setLunge] = useState(false)
  const [shake, setShake] = useState(false)
  const [cursor, setCursor] = useState({ x: -100, y: -100 })
  const done = useRef(false)
  const wps = WEAK_POINTS[visitor.role] ?? WEAK_POINTS.human

  useEffect(() => {
    startAimTension()
    if (!human) screech()
    const t = setInterval(() => setTimeLeft((x) => x - 1), 1000)
    return () => { clearInterval(t); stopAimTension() }
  }, [human])

  useEffect(() => {
    if (done.current) return
    if (timeLeft <= 0) {
      done.current = true
      stopAimTension()
      // 人类不会扑你：时间到就放下武器
      if (human) (onCancel ?? onFail)()
      else onFail()
    } else if (timeLeft < 10) aimTick(timeLeft <= 3)
  }, [timeLeft, human, onFail, onCancel])

  // 伪人周期性扑向玻璃
  useEffect(() => {
    if (human) return
    const t = setInterval(() => {
      setLunge(true)
      if (Math.random() < 0.35) screech()
      setTimeout(() => setLunge(false), 380)
    }, 1500)
    return () => clearInterval(t)
  }, [human])

  const hit = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (done.current) return
    done.current = true
    stopAimTension()
    onSuccess()
  }
  const miss = () => {
    if (done.current) return
    heartbeat(0.6)
    setShake(true)
    setTimeout(() => setShake(false), 300)
  }

  const frames = visitor.attackFrame ? [visitor.attackFrame] : visitor.freezeFrames

  return (
    <div data-testid="exec-aim" className="aim" onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })} onClick={miss}>
      <div className={`stage${shake ? ' shaking' : ''}`}>
        <img className="fx" src={visitor.scene ?? '/assets/scenes/window.svg'} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6) saturate(0.7)' }} />
        <div className={`portrait${lunge ? ' lunge' : ''}`}>
          <img src={frames[0]} alt={visitor.claimedName} draggable={false} />
          {wps.map((wp) => (
            <div key={wp.label} className="weak" title={wp.label} style={{ left: wp.left, top: wp.top }} onClick={hit} />
          ))}
        </div>
        <img src="/assets/scenes/window_glass.svg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} />
      </div>
      {!human && <div className="red" />}
      <div className="timer">
        {human ? '他举起双手，一步步往后退……' : `它扑过来了！瞄准${wps.map((w) => w.label).join(' / ')}`}
        <span style={{ color: timeLeft <= 3 ? '#ff4040' : '#ffe9a8' }}>{Math.max(0, timeLeft)}</span>
        <div style={{ fontSize: 13, color: '#aaa', fontWeight: 'normal' }}>{human ? '不开火，时间到自动放下武器' : '点击弱点处决 · 超时它会冲破玻璃'}</div>
      </div>
      <img className="cross" src="/assets/icons/execute.svg" alt="" style={{ left: cursor.x, top: cursor.y, position: 'fixed' }} />
    </div>
  )
}
