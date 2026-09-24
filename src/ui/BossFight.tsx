import { useState, useEffect } from 'react'
import type { GameState } from '../engine/types'
import * as sfx from '../scene/audio'

interface Props {
  state: GameState
  onTransition: () => void
  onDamage: () => void
  onDefeated: () => void
  onDoorOpened: () => void
}

export default function BossFight({ state, onTransition, onDamage, onDefeated, onDoorOpened }: Props) {
  const { phase, bossHealth, doorUnlocked, equippedWeapon, gunAmmo } = state
  const [hideTimer, setHideTimer] = useState(phase === 'boss_intro' ? 5 : 0)
  const [bossScale, setBossScale] = useState(0.5)
  const [showGlass, setShowGlass] = useState(false)

  // Boss 出场动画
  useEffect(() => {
    if (phase === 'boss_intro') {
      sfx.alarmBeep()
      sfx.bossRoar()

      const timer = setInterval(() => {
        setHideTimer((t) => {
          if (t <= 1) {
            clearInterval(timer)
            onTransition()
            return 0
          }
          return t - 1
        })
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [phase, onTransition])

  // Boss 撞击动画
  useEffect(() => {
    if (phase === 'boss_fight') {
      let impactInterval: NodeJS.Timeout

      const doImpact = () => {
        sfx.glassBreaking()
        setBossScale(0.5)
        setShowGlass(true)

        // 冲向窗口
        setTimeout(() => setBossScale(1.2), 100)
        setTimeout(() => {
          setBossScale(0.9)
          setShowGlass(false)
        }, 500)
      }

      doImpact()
      impactInterval = setInterval(doImpact, 2000)

      return () => clearInterval(impactInterval)
    }
  }, [phase])

  // 射击处理
  useEffect(() => {
    if (phase !== 'boss_fight') return

    const handleClick = () => {
      if (equippedWeapon !== 'gun') {
        return
      }

      if (gunAmmo <= 0) {
        sfx.interact()
        return
      }

      sfx.gunshot()
      onDamage()

      if (bossHealth - 1 <= 0) {
        setTimeout(() => {
          sfx.bossRoar()
          onDefeated()
        }, 800)
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [phase, equippedWeapon, gunAmmo, bossHealth, onDamage, onDefeated])

  if (phase === 'boss_intro') {
    return (
      <div className="overlay" style={{ background: 'rgba(0,0,0,0.95)' }}>
        <div style={{ textAlign: 'center', paddingTop: '40vh' }}>
          <h1 style={{ fontSize: 48, color: '#d04030', marginBottom: 32, animation: 'pulse 1s infinite' }}>
            ⚠ 警报 ⚠
          </h1>
          <p style={{ fontSize: 24, color: '#e8e2cc', marginBottom: 16 }}>
            窗外出现了什么东西
          </p>
          <p style={{ fontSize: 36, color: '#e0b050', fontWeight: 'bold' }}>
            {hideTimer}
          </p>
          <p style={{ fontSize: 18, color: '#9a9a90', marginTop: 32 }}>
            快躲到沙发后面！
          </p>
        </div>
      </div>
    )
  }

  if (phase === 'boss_fight') {
    return (
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }}>
        {/* Boss 脸部在窗口 */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '20%',
          width: 1400,
          height: 1000,
          marginLeft: -700,
          marginTop: -500,
          transform: `scale(${bossScale})`,
          transition: 'transform 0.4s',
          pointerEvents: 'auto',
        }}>
          <img
            src={`/assets/boss/face_hit${3 - bossHealth}.svg`}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>

        {/* 玻璃裂纹 */}
        {showGlass && (
          <img
            src="/assets/env/glass_shatter.svg"
            alt=""
            style={{
              position: 'absolute',
              left: '50%',
              top: '20%',
              width: 800,
              height: 600,
              marginLeft: -400,
              marginTop: -300,
              opacity: 0.6,
            }}
          />
        )}

        {/* HUD */}
        <div style={{ position: 'absolute', top: 24, left: '50%', transform: 'translateX(-50%)', background: 'rgba(0,0,0,0.8)', padding: '12px 24px', borderRadius: 8, pointerEvents: 'none' }}>
          <div style={{ fontSize: 18, color: '#e8e2cc', marginBottom: 8 }}>
            Boss 血量: {bossHealth}/3
          </div>
          <div style={{ width: 300, height: 20, background: '#2a2a24', borderRadius: 4, overflow: 'hidden' }}>
            <div style={{
              width: `${(bossHealth / 3) * 100}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #d04030, #c05040)',
              transition: 'width 0.3s',
            }} />
          </div>
        </div>

        {equippedWeapon !== 'gun' && (
          <div style={{ position: 'absolute', bottom: 80, left: '50%', transform: 'translateX(-50%)', background: 'rgba(208, 64, 48, 0.9)', padding: '12px 24px', borderRadius: 8, color: '#fff', fontSize: 16, pointerEvents: 'none' }}>
            ⚠ 必须使用手枪！打开武器柜装备手枪
          </div>
        )}
      </div>
    )
  }

  if (phase === 'boss_door_trap') {
    return (
      <div className="overlay" style={{ background: 'rgba(0,0,0,0.85)' }}>
        <div style={{ textAlign: 'center', paddingTop: '35vh' }}>
          <h1 style={{ fontSize: 42, color: '#50d050', marginBottom: 24 }}>
            它退走了
          </h1>
          <p style={{ fontSize: 20, color: '#e8e2cc', marginBottom: 32 }}>
            门锁灯变成了绿色……
          </p>

          <div style={{ display: 'flex', gap: 24, justifyContent: 'center', marginTop: 48 }}>
            <button
              className="btn big"
              style={{ background: '#d04030', borderColor: '#d04030' }}
              onClick={onDoorOpened}
            >
              推开门离开
            </button>
            <button
              className="btn big"
              onClick={() => {
                setTimeout(() => onDefeated(), 3000)
              }}
            >
              留在原地 (10 秒)
            </button>
          </div>

          <p style={{ fontSize: 14, color: '#9a9a90', marginTop: 32 }}>
            你能感觉到，门外有什么在等着你……
          </p>
        </div>
      </div>
    )
  }

  return null
}
