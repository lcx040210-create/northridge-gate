import { useState, useEffect } from 'react'
import type { Tool } from '../data/schema'
import * as sfx from '../scene/audio'

interface Props {
  equippedWeapon: Tool | null
  bossHealth: number
  onDamage: () => void
  onDefeat: () => void
}

export default function BossFight({ equippedWeapon, bossHealth, onDamage, onDefeat }: Props) {
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [windowBroken, setWindowBroken] = useState(false)
  const [bossScale, setBossScale] = useState(1.0)

  useEffect(() => {
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = (Date.now() - start) / 1000
      setTimeElapsed(elapsed)

      // Boss 逐渐变大（靠近窗户）
      const scale = 1.0 + Math.min(elapsed / 15, 1) * 0.8
      setBossScale(scale)

      // 15 秒后破窗
      if (elapsed >= 15 && !windowBroken) {
        setWindowBroken(true)
        sfx.glassBreaking()
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

  const timeLeft = Math.max(0, 15 - timeElapsed)
  const hitStage = 3 - bossHealth

  return (
    <>
      {/* 倒计时警告 */}
      {!windowBroken && (
        <div
          style={{
            position: 'fixed',
            top: 80,
            left: '50%',
            transform: 'translateX(-50%)',
            color: timeLeft < 5 ? '#ff4444' : '#ffaa44',
            fontSize: timeLeft < 5 ? 32 : 24,
            fontWeight: 'bold',
            textShadow: '0 0 20px rgba(255,68,68,0.8)',
            zIndex: 10000,
            animation: timeLeft < 5 ? 'pulse 0.5s infinite' : 'none',
          }}
        >
          玻璃破裂倒计时: {Math.ceil(timeLeft)}s
        </div>
      )}

      {/* Boss 固定在窗户中央（不跟随玩家视角） */}
      <div
        onClick={handleWeaponClick}
        style={{
          position: 'fixed',
          left: '50%',
          top: windowBroken ? '20%' : '35%',
          transform: `translate(-50%, -50%) scale(${bossScale})`,
          width: 600,
          height: 600,
          background: windowBroken
            ? 'radial-gradient(circle, rgba(20,20,20,0.95) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(60,80,100,0.4) 0%, transparent 60%)',
          borderRadius: '50%',
          cursor: equippedWeapon ? 'crosshair' : 'default',
          pointerEvents: 'auto',
          zIndex: 9999,
          transition: windowBroken ? 'top 0.8s ease-out, transform 0.3s' : 'transform 0.1s',
          boxShadow: windowBroken
            ? '0 0 100px rgba(255,50,50,0.6), inset 0 0 80px rgba(0,0,0,0.8)'
            : '0 0 60px rgba(100,150,200,0.3)',
        }}
      >
        {/* Boss 核心形态 */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '80%',
            background: hitStage === 0
              ? 'radial-gradient(circle, #1a1a1a 0%, #0a0a0a 40%, transparent 70%)'
              : hitStage === 1
              ? 'radial-gradient(circle, #2a1a1a 0%, #1a0a0a 40%, transparent 70%)'
              : hitStage === 2
              ? 'radial-gradient(circle, #3a1a1a 0%, #2a0a0a 40%, transparent 70%)'
              : 'radial-gradient(circle, #4a2a2a 0%, #3a1a1a 40%, transparent 70%)',
            borderRadius: '50%',
            animation: 'bossPulse 2s infinite',
          }}
        >
          {/* 眼睛 */}
          <div
            style={{
              position: 'absolute',
              left: '35%',
              top: '40%',
              width: 40,
              height: 50,
              background: 'radial-gradient(circle, #ff4444 0%, #aa0000 50%, transparent 100%)',
              borderRadius: '50%',
              boxShadow: '0 0 30px rgba(255,68,68,0.8)',
              animation: 'eyeGlow 1s infinite',
            }}
          />
          <div
            style={{
              position: 'absolute',
              right: '35%',
              top: '40%',
              width: 40,
              height: 50,
              background: 'radial-gradient(circle, #ff4444 0%, #aa0000 50%, transparent 100%)',
              borderRadius: '50%',
              boxShadow: '0 0 30px rgba(255,68,68,0.8)',
              animation: 'eyeGlow 1s infinite 0.5s',
            }}
          />

          {/* 嘴部裂缝 */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              bottom: '30%',
              transform: 'translateX(-50%)',
              width: '60%',
              height: 3,
              background: 'linear-gradient(90deg, transparent 0%, #ff4444 20%, #ff4444 80%, transparent 100%)',
              boxShadow: '0 0 20px rgba(255,68,68,0.6)',
            }}
          />
        </div>

        {/* 伤痕效果 */}
        {hitStage > 0 && (
          <>
            <div
              style={{
                position: 'absolute',
                left: '30%',
                top: '25%',
                width: 80,
                height: 4,
                background: '#ff2222',
                transform: 'rotate(45deg)',
                boxShadow: '0 0 10px rgba(255,34,34,0.8)',
              }}
            />
            {hitStage > 1 && (
              <div
                style={{
                  position: 'absolute',
                  right: '30%',
                  top: '28%',
                  width: 90,
                  height: 4,
                  background: '#ff2222',
                  transform: 'rotate(-45deg)',
                  boxShadow: '0 0 10px rgba(255,34,34,0.8)',
                }}
              />
            )}
            {hitStage > 2 && (
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  bottom: '20%',
                  transform: 'translateX(-50%)',
                  width: 100,
                  height: 100,
                  background: 'radial-gradient(circle, rgba(255,34,34,0.6) 0%, transparent 70%)',
                }}
              />
            )}
          </>
        )}
      </div>

      {/* 玻璃破碎效果 */}
      {windowBroken && (
        <>
          <div
            style={{
              position: 'fixed',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle at 50% 30%, rgba(255,255,255,0.1) 0%, transparent 30%)',
              pointerEvents: 'none',
              zIndex: 9998,
              animation: 'glassShatter 0.6s ease-out',
            }}
          />
          {/* 玻璃碎片 */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'fixed',
                left: `${45 + (i % 4) * 3}%`,
                top: `${25 + Math.floor(i / 4) * 10}%`,
                width: 30 + Math.random() * 20,
                height: 30 + Math.random() * 20,
                background: 'rgba(200,220,255,0.3)',
                transform: `rotate(${i * 45}deg)`,
                pointerEvents: 'none',
                zIndex: 9997,
                animation: `glassFall ${0.8 + i * 0.1}s ease-in forwards`,
              }}
            />
          ))}
        </>
      )}

      <style>{`
        @keyframes bossPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.05); }
        }
        @keyframes eyeGlow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes glassShatter {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes glassFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(200px) rotate(360deg); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: translateX(-50%) scale(1); }
          50% { opacity: 0.7; transform: translateX(-50%) scale(1.1); }
        }
      `}</style>
    </>
  )
}
