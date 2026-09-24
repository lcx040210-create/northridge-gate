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
  const targetRef = useRef<{ x: number; y: number } | null>(null)
  const boxRef = useRef<HTMLDivElement>(null)

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

    const timer = setInterval(() => {
      const remaining = 10000 - (Date.now() - start)
      setTimeLeft(remaining)

      if (remaining <= 0) {
        onFail()
      }
    }, 100)

    const handleClick = (e: MouseEvent) => {
      if (gunAmmo <= 0) {
        sfx.interact()
        onOutOfAmmo()
        return
      }

      sfx.gunshot()

      // 命中判定 - 使用鼠标实际位置（以画面容器为准，不受点击目标影响）
      const target = boxRef.current!.getBoundingClientRect()
      const clickX = ((e.clientX - target.left) / target.width) * 100
      const clickY = ((e.clientY - target.top) / target.height) * 100

      if (targetRef.current) {
        const dx = clickX - targetRef.current.x
        const dy = clickY - targetRef.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 8) {
          clearInterval(timer)
          setTimeout(() => onSuccess(), 300)
        }
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      clearInterval(timer)
      document.removeEventListener('click', handleClick)
    }
  }, [gunAmmo, onSuccess, onFail, onOutOfAmmo])

  return (
    <div className="overlay" style={{ background: 'rgba(0,0,0,0.9)', cursor: 'crosshair' }}>
      <div ref={boxRef} style={{ position: 'relative', width: 600, height: 800, margin: '0 auto' }}>
        <img
          src={visitor.attackFrame ?? visitor.portrait}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }}
        />

        {/* 弱点提示圈 */}
        {targetRef.current && (
          <div
            style={{
              position: 'absolute',
              left: `${targetRef.current.x}%`,
              top: `${targetRef.current.y}%`,
              width: 60,
              height: 60,
              border: '2px dashed rgba(255,68,68,0.5)',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }}
          />
        )}

        {/* HUD */}
        <div style={{ position: 'absolute', top: 16, left: 16, color: '#e8e2cc', fontSize: 14 }}>
          <div style={{ marginBottom: 8 }}>TIME: {(timeLeft / 1000).toFixed(1)}s</div>
          <div style={{ color: gunAmmo === 0 ? '#d04030' : '#e0b050' }}>AMMO: {gunAmmo}</div>
        </div>

        <div style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', background: 'rgba(0,0,0,0.7)', padding: '8px 16px', borderRadius: 6, color: '#e8e2cc', fontSize: 13 }}>
          AIM AT THE WEAK SPOT AND CLICK TO FIRE
        </div>
      </div>
    </div>
  )
}
