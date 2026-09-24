import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
}

export default function FlameEffect({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const frameRef = useRef<number>()

  useEffect(() => {
    if (!active) {
      particlesRef.current = []
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    const animate = () => {
      if (!active) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 生成新粒子（喷火器从中心向前喷射）
      for (let i = 0; i < 8; i++) {
        particlesRef.current.push({
          x: centerX + (Math.random() - 0.5) * 60,
          y: centerY + (Math.random() - 0.5) * 60,
          vx: (Math.random() - 0.5) * 4,
          vy: -8 - Math.random() * 6,
          life: 1,
          maxLife: 30 + Math.random() * 20,
          size: 20 + Math.random() * 30,
        })
      }

      // 更新和绘制粒子
      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.2 // 重力
        p.life++
        p.size *= 0.96

        const alpha = 1 - p.life / p.maxLife
        if (alpha <= 0) return false

        // 火焰颜色渐变：亮黄 → 橙 → 红 → 暗红
        const ratio = p.life / p.maxLife
        let r, g, b
        if (ratio < 0.3) {
          r = 255
          g = 240 - ratio * 200
          b = 100 - ratio * 300
        } else if (ratio < 0.6) {
          r = 255
          g = 140 - (ratio - 0.3) * 300
          b = 10
        } else {
          r = 255 - (ratio - 0.6) * 400
          g = 50 - (ratio - 0.6) * 100
          b = 10
        }

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size)
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha})`)
        gradient.addColorStop(0.5, `rgba(${r * 0.8}, ${g * 0.7}, ${b}, ${alpha * 0.6})`)
        gradient.addColorStop(1, `rgba(${r * 0.5}, ${g * 0.4}, ${b}, 0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(p.x - p.size, p.y - p.size, p.size * 2, p.size * 2)

        return true
      })

      frameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [active])

  if (!active) return null

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9998,
      }}
    />
  )
}
