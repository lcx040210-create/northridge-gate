import { useState, useEffect, useRef } from 'react'
import type { Visitor } from '../data/schema'
import * as sfx from '../scene/audio'

interface Props {
  visitor: Visitor
  onSuccess: () => void
  onFail: () => void
  onOverheat: () => void
}

export default function FlamethrowerCharge({ visitor, onSuccess, onFail, onOverheat }: Props) {
  const [charging, setCharging] = useState(false)
  const [charge, setCharge] = useState(0)
  const [timeLeft, setTimeLeft] = useState(10000)
  const chargeRef = useRef(0)
  const overheatRef = useRef(false)

  useEffect(() => {
    const start = Date.now()
    let chargeAnim: number
    let chargeSound: ReturnType<typeof setTimeout> | null = null

    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      setTimeLeft(10000 - elapsed)
      if (elapsed >= 10000) {
        onFail()
      }
    }, 50)

    const updateCharge = () => {
      if (charging && !overheatRef.current) {
        chargeRef.current = chargeRef.current + 1.5
        setCharge(chargeRef.current)

        if (chargeRef.current > 100) {
          // 过热
          overheatRef.current = true
          onOverheat()
          return
        }
      }
      chargeAnim = requestAnimationFrame(updateCharge)
    }
    chargeAnim = requestAnimationFrame(updateCharge)

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'KeyF' && !charging && !overheatRef.current) {
        setCharging(true)
        chargeSound = setTimeout(() => sfx.flameCharge(), 100)
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'KeyF' && charging) {
        setCharging(false)
        if (chargeSound) clearTimeout(chargeSound)

        // 判定
        if (chargeRef.current >= 80 && chargeRef.current <= 100) {
          // 成功
          cancelAnimationFrame(chargeAnim)
          clearInterval(timer)
          setTimeout(() => {
            sfx.fireWhoosh()
            onSuccess()
          }, 200)
        } else if (chargeRef.current < 80) {
          // 火力不足
          sfx.fireIgnite()
          onFail()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      cancelAnimationFrame(chargeAnim)
      clearInterval(timer)
      if (chargeSound) clearTimeout(chargeSound)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [charging, onSuccess, onFail, onOverheat])

  const barColor =
    charge >= 80 && charge <= 100 ? '#50d050' :
    charge > 100 ? '#d04030' :
    '#d0b050'

  return (
    <div className="overlay" style={{ background: 'rgba(0,0,0,0.85)' }}>
      <div className="pane" style={{ maxWidth: 800, textAlign: 'center' }}>
        <img src={visitor.attackFrame ?? visitor.portrait} alt="" style={{ width: 300, height: 400, objectFit: 'cover', borderRadius: 8, marginBottom: 24 }} />

        <h2 style={{ fontSize: 28, marginBottom: 16, color: '#d0b050' }}>HOLD F TO CHARGE</h2>

        <div style={{ position: 'relative', width: '100%', height: 50, background: '#2a2a24', borderRadius: 8, marginBottom: 16, overflow: 'hidden', border: '2px solid #3a3a32' }}>
          {/* 成功区间标记 */}
          <div style={{ position: 'absolute', left: '80%', top: 0, bottom: 0, width: '20%', background: 'rgba(80, 208, 80, 0.2)', borderLeft: '2px dashed #50d050' }} />

          {/* 蓄力条 */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: `${Math.min(charge, 100)}%`,
            background: `linear-gradient(90deg, ${barColor}, ${barColor})`,
            transition: 'background 0.2s',
          }} />

          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 'bold' }}>
            {charge.toFixed(0)}%
          </div>
        </div>

        <div style={{ fontSize: 15, color: '#9a9a90', marginBottom: 12 }}>
          CHARGE TO 80-100%, THEN RELEASE
        </div>

        <div style={{ fontSize: 16, color: timeLeft < 3000 ? '#d04030' : '#e0b050' }}>
          TIME LEFT: {(timeLeft / 1000).toFixed(1)}s
        </div>

        {charge > 100 && (
          <div style={{ marginTop: 16, color: '#d04030', fontSize: 18, fontWeight: 'bold' }}>
            ⚠ OVERHEAT! THE CANISTER IS ABOUT TO BURST
          </div>
        )}
      </div>
    </div>
  )
}
