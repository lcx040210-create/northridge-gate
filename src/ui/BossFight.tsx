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
      let impactInterval: ReturnType<typeof setInterval>

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

  // 射击/攻击处理
  useEffect(() => {
    if (phase !== 'boss_fight') return

    const handleClick = () => {
      if (!equippedWeapon) return

      if (equippedWeapon === 'gun') {
        if (gunAmmo <= 0) {
          sfx.interact()
          return
        }
        sfx.gunshot()
      } else if (equippedWeapon === 'axe') {
        sfx.axeSwing()
        sfx.axeChop()
        // 斧头 30% 概率击中
        if (Math.random() > 0.3) return
      } else if (equippedWeapon === 'fire') {
        sfx.fireWhoosh()
        // 焚化罐 40% 概率击中
        if (Math.random() > 0.4) return
      } else {
        return
      }

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
        {/* Boss 脸部跟随玩家（屏幕上方） */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          width: 1000,
          height: 714,
          marginLeft: -500,
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
              top: '10%',
              width: 600,
              height: 450,
              marginLeft: -300,
              opacity: 0.6,
            }}
          />
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
                // 留在原地 10 秒后触发好结局
                const timer = setTimeout(() => onDefeated(), 10000)
                // 可以提前结束
                return () => clearTimeout(timer)
              }}
            >
              留在原地等待
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
