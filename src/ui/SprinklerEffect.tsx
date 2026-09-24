import { useEffect, useRef } from 'react'

export default function SprinklerEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    interface Drop {
      x: number
      y: number
      speed: number
      opacity: number
    }

    const drops: Drop[] = []
    for (let i = 0; i < 200; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        speed: 3 + Math.random() * 2,
        opacity: 0.3 + Math.random() * 0.4,
      })
    }

    let animFrame: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const drop of drops) {
        drop.y += drop.speed
        if (drop.y > canvas.height) {
          drop.y = -10
          drop.x = Math.random() * canvas.width
        }

        ctx.fillStyle = `rgba(200, 220, 240, ${drop.opacity})`
        ctx.fillRect(drop.x, drop.y, 2, 8)
      }

      animFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animFrame)
  }, [])

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
        zIndex: 9999,
      }}
    />
  )
}
