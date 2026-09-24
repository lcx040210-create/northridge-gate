import { useState, useEffect } from 'react'
import type { Visitor } from '../data/schema'
import * as sfx from '../scene/audio'

interface Props {
  visitor: Visitor
  onSuccess: () => void
  onFail: () => void
}

export default function AxeQTE({ visitor, onSuccess, onFail }: Props) {
  const [hits, setHits] = useState(0)
  const [timeLeft, setTimeLeft] = useState(3000)
  const target = 7

  useEffect(() => {
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      setTimeLeft(3000 - elapsed)
      if (elapsed >= 3000) {
        clearInterval(timer)
        onFail()
      }
    }, 50)

    const handleKey = (e: KeyboardEvent) => {
      if (e.code === 'KeyF') {
        sfx.axeSwing()
        setHits((h) => {
          const newHits = h + 1
          if (newHits >= target) {
            clearInterval(timer)
            setTimeout(() => onSuccess(), 200)
          }
          return newHits
        })
      }
    }

    document.addEventListener('keydown', handleKey)
    return () => {
      clearInterval(timer)
      document.removeEventListener('keydown', handleKey)
    }
  }, [onSuccess, onFail])

  const progress = (hits / target) * 100

  return (
    <div className="overlay" style={{ background: 'rgba(0,0,0,0.85)' }}>
      <div className="pane" style={{ maxWidth: 800, textAlign: 'center' }}>
        <img src={visitor.attackFrame ?? visitor.portrait} alt="" style={{ width: 300, height: 400, objectFit: 'cover', borderRadius: 8, marginBottom: 24 }} />

        <h2 style={{ fontSize: 28, marginBottom: 16, color: '#d04030' }}>SPAM F!</h2>

        <div style={{ position: 'relative', width: '100%', height: 40, background: '#2a2a24', borderRadius: 8, marginBottom: 16, overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #c04030, #d05040)',
            transition: 'width 0.1s'
          }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 'bold' }}>
            {hits} / {target}
          </div>
        </div>

        <div style={{ fontSize: 16, color: timeLeft < 1000 ? '#d04030' : '#e0b050' }}>
          TIME LEFT: {(timeLeft / 1000).toFixed(1)}s
        </div>
      </div>
    </div>
  )
}
