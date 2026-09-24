import { useState, useEffect, useRef } from 'react'
import type { Visitor } from '../data/schema'
import * as sfx from '../scene/audio'

interface Props {
  visitor: Visitor
  gunAmmo: number
  onSuccess: () => void
  onFail: () => void
  onOutOfAmmo: () => void
}

export default function GunAim({ visitor, gunAmmo, onSuccess, onFail, onOutOfAmmo }: Props) {
  const [timeLeft, setTimeLeft] = useState(10000)
  const [shakiness, setShakiness] = useState(0)
  const [crosshairPos, setCrosshairPos] = useState({ x: 50, y: 50 })
  const targetRef = useRef<{ x: number; y: number } | null>(null)

  // 弱点坐标（百分比）
  useEffect(() => {
    if (visitor.role === 'skinfit') {
      targetRef.current = { x: 71, y: 51 } // 接缝
    } else if (visitor.role === 'coretick') {
      targetRef.current = { x: 50, y: 42 } // 锁骨核心
    } else {
      targetRef.current = { x: 50, y: 30 } // 头部
    }
  }, [visitor.role])

  useEffect(() => {
    const start = Date.now()
    let shakeAnim: number
    const targetPos = targetRef.current

    const updateShake = () => {
      const elapsed = Date.now() - start
      const remaining = 10000 - elapsed
      setTimeLeft(remaining)

      if (remaining <= 0) {
        onFail()
        return
      }

      // 准星围绕弱点晃动
      const intensity = Math.min(12, (elapsed / 10000) * 20)
      setShakiness(intensity)

      if (targetPos) {
        const angle = (elapsed / 100) * Math.PI
        const offsetX = Math.sin(angle) * intensity
        const offsetY = Math.cos(angle) * intensity
        setCrosshairPos({
          x: targetPos.x + offsetX,
          y: targetPos.y + offsetY,
        })
      }

      shakeAnim = requestAnimationFrame(updateShake)
    }

    shakeAnim = requestAnimationFrame(updateShake)

    const handleClick = () => {
      if (gunAmmo <= 0) {
        sfx.interact()
        onOutOfAmmo()
        return
      }

      sfx.gunshot()

      // 命中判定
      if (targetPos) {
        const dx = crosshairPos.x - targetPos.x
        const dy = crosshairPos.y - targetPos.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 8) {
          // 命中弱点
          cancelAnimationFrame(shakeAnim)
          setTimeout(() => onSuccess(), 300)
        }
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      cancelAnimationFrame(shakeAnim)
      document.removeEventListener('click', handleClick)
    }
  }, [gunAmmo, onSuccess, onFail, onOutOfAmmo])

  return (
    <div className="overlay" style={{ background: 'rgba(0,0,0,0.9)', cursor: 'none' }}>
      <div style={{ position: 'relative', width: 600, height: 800, margin: '0 auto' }}>
        <img
          src={visitor.attackFrame ?? visitor.portrait}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }}
        />

        {/* 弱点标记（半透明红圈） */}
        {targetRef.current && (
          <div style={{
            position: 'absolute',
            left: `${targetRef.current.x}%`,
            top: `${targetRef.current.y}%`,
            width: 60,
            height: 60,
            marginLeft: -30,
            marginTop: -30,
            border: '3px dashed rgba(208, 64, 48, 0.5)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }} />
        )}

        {/* 晃动准星 */}
        <div style={{
          position: 'absolute',
          left: `${crosshairPos.x}%`,
          top: `${crosshairPos.y}%`,
          width: 40,
          height: 40,
          marginLeft: -20,
          marginTop: -20,
          pointerEvents: 'none',
        }}>
          <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 2, background: '#e0b050' }} />
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: '#e0b050' }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', width: 8, height: 8, marginLeft: -4, marginTop: -4, border: '2px solid #e0b050', borderRadius: '50%' }} />
        </div>

        {/* HUD */}
        <div style={{ position: 'absolute', top: 16, left: 16, color: '#e8e2cc', fontSize: 14 }}>
          <div style={{ marginBottom: 8 }}>时间: {(timeLeft / 1000).toFixed(1)}s</div>
          <div style={{ color: gunAmmo === 0 ? '#d04030' : '#e0b050' }}>弹药: {gunAmmo}</div>
        </div>

        <div style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', background: 'rgba(0,0,0,0.7)', padding: '8px 16px', borderRadius: 6, color: '#e8e2cc', fontSize: 13 }}>
          瞄准弱点并点击射击
        </div>
      </div>
    </div>
  )
}
