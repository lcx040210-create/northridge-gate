import { useState, useEffect } from 'react'
import type { Tool } from '../data/schema'

interface Props {
  equippedWeapon: Tool | null
  bossHealth: number
  onDamage: () => void
  onDefeat: () => void
}

export default function BossFight({ equippedWeapon, bossHealth, onDamage, onDefeat }: Props) {
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [windowBroken, setWindowBroken] = useState(false)

  useEffect(() => {
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = (Date.now() - start) / 1000
      setTimeElapsed(elapsed)

      // 15 秒后破窗
      if (elapsed >= 15 && !windowBroken) {
        setWindowBroken(true)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [windowBroken])

  useEffect(() => {
    if (bossHealth <= 0) {
      onDefeat()
    }
  }, [bossHealth, onDefeat])

  const handleWeaponClick = () => {
    if (!equippedWeapon) return

    // 概率命中
    if (equippedWeapon === 'axe') {
      if (Math.random() > 0.3) return // 30% 命中
    } else if (equippedWeapon === 'fire') {
      if (Math.random() > 0.4) return // 40% 命中
    }
    // gun 100% 命中

    onDamage()
  }

  const hitStage = 3 - bossHealth

  return (
    <>
      {/* Boss 固定在窗户位置（不跟随玩家） */}
      <div
        onClick={handleWeaponClick}
        style={{
          position: 'fixed',
          left: '50%',
          top: windowBroken ? '10%' : '-60%',
          transform: 'translate(-50%, 0)',
          width: 700,
          height: 500,
          backgroundImage: `url(/assets/boss/face_hit${hitStage}.svg)`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          transition: windowBroken ? 'top 0.8s ease-out' : 'none',
          cursor: equippedWeapon ? 'crosshair' : 'default',
          pointerEvents: 'auto',
          zIndex: 9999,
          filter: 'drop-shadow(0 0 40px rgba(96, 192, 255, 0.3))',
        }}
      />

      {/* 玻璃破碎效果 */}
      {windowBroken && (
        <div
          style={{
            position: 'fixed',
            left: '50%',
            top: '15%',
            transform: 'translate(-50%, 0)',
            width: 800,
            height: 600,
            backgroundImage: 'url(/assets/env/glass_shatter.svg)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            pointerEvents: 'none',
            zIndex: 9998,
            animation: 'glassShatter 0.5s ease-out',
          }}
        />
      )}
    </>
  )
}
