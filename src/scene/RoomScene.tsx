import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { buildRoom } from './room'
import { HOTSPOTS } from './cameras'
import { updatePlayer, applyMouseLook, STAND_HEIGHT, type Bounds, type PlayerState, type MoveInput } from './controls'

const BOUNDS: Bounds = { minX: -4.5, maxX: 4.5, minZ: -2.85, maxZ: 2.85 }
const INTERACT_RANGE = 2.5
const AIM_ANGLE = 0.3 // ~17 度，需准星真正指向物品

export default function RoomScene({ onInteract }: { onInteract: (hotspotId: string) => void }) {
  const mountRef = useRef<HTMLDivElement>(null)
  const onInteractRef = useRef(onInteract)
  onInteractRef.current = onInteract
  const [locked, setLocked] = useState(false)
  const [nearby, setNearby] = useState<string | null>(null)
  const nearbyRef = useRef<string | null>(null)

  useEffect(() => {
    const mount = mountRef.current!
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(70, mount.clientWidth / mount.clientHeight, 0.1, 50)
    camera.rotation.order = 'YXZ'

    let player: PlayerState = { x: 0, y: STAND_HEIGHT, z: 2, vy: 0, yaw: 0, pitch: 0, crouching: false }
    const keys: MoveInput = { forward: false, back: false, left: false, right: false, jump: false, crouch: false }
    let lastTime = performance.now()

    function aimedHotspot(): string | null {
      const fx = -Math.sin(player.yaw)
      const fz = -Math.cos(player.yaw)
      let best: string | null = null
      let bestDist = Infinity
      for (const h of HOTSPOTS) {
        const dx = h.position[0] - player.x
        const dz = h.position[2] - player.z
        const dist = Math.hypot(dx, dz)
        if (dist > INTERACT_RANGE) continue
        const dot = fx * dx + fz * dz
        const angle = Math.acos(Math.max(-1, Math.min(1, dot / dist)))
        if (angle < AIM_ANGLE && dist < bestDist) {
          best = h.id
          bestDist = dist
        }
      }
      return best
    }

    function interact() {
      const id = aimedHotspot()
      if (id) onInteractRef.current(id)
    }

    const onMouseMove = (e: MouseEvent) => {
      if (document.pointerLockElement === renderer.domElement) {
        player = applyMouseLook(player, e.movementX, e.movementY)
      }
    }

    const onMouseDown = () => {
      if (document.pointerLockElement !== renderer.domElement) {
        renderer.domElement.requestPointerLock()
      } else {
        interact()
      }
    }

    const onPointerLockChange = () => {
      setLocked(document.pointerLockElement === renderer.domElement)
    }

    const onKeyDown = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'KeyW': keys.forward = true; break
        case 'KeyS': keys.back = true; break
        case 'KeyA': keys.left = true; break
        case 'KeyD': keys.right = true; break
        case 'Space': keys.jump = true; e.preventDefault(); break
        case 'ControlLeft': case 'ControlRight': keys.crouch = true; break
        case 'KeyF': interact(); break
      }
    }

    const onKeyUp = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'KeyW': keys.forward = false; break
        case 'KeyS': keys.back = false; break
        case 'KeyA': keys.left = false; break
        case 'KeyD': keys.right = false; break
        case 'Space': keys.jump = false; break
        case 'ControlLeft': case 'ControlRight': keys.crouch = false; break
      }
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('keyup', onKeyUp)
    document.addEventListener('pointerlockchange', onPointerLockChange)
    renderer.domElement.addEventListener('mousedown', onMouseDown)

    let raf = 0
    const loop = () => {
      const now = performance.now()
      const dt = Math.min(0.05, (now - lastTime) / 1000)
      lastTime = now
      player = updatePlayer(player, keys, dt, BOUNDS)
      camera.position.set(player.x, player.y, player.z)
      camera.rotation.y = player.yaw
      camera.rotation.x = player.pitch
      renderer.render(scene, camera)
      const n = aimedHotspot()
      if (n !== nearbyRef.current) {
        nearbyRef.current = n
        setNearby(n)
      }
      raf = requestAnimationFrame(loop)
    }

    buildRoom(scene).then(() => { raf = requestAnimationFrame(loop) }).catch(() => { raf = requestAnimationFrame(loop) })

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('keyup', onKeyUp)
      document.removeEventListener('pointerlockchange', onPointerLockChange)
      renderer.domElement.removeEventListener('mousedown', onMouseDown)
      mount.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  const nearbyLabel = HOTSPOTS.find((h) => h.id === nearby)?.label

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <div ref={mountRef} style={{ position: 'absolute', inset: 0 }} />
      {locked && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', width: 6, height: 6, margin: '-3px 0 0 -3px', borderRadius: '50%', background: '#e8e8e0', opacity: 0.75, pointerEvents: 'none' }} />
      )}
      {!locked && (
        <div style={{ position: 'absolute', top: '58%', left: '50%', transform: 'translateX(-50%)', color: '#e8e8e0', background: 'rgba(0,0,0,0.65)', padding: '8px 18px', borderRadius: 6, pointerEvents: 'none' }}>
          点击画面锁定鼠标
        </div>
      )}
      {locked && nearby && (
        <div style={{ position: 'absolute', top: '54%', left: '50%', transform: 'translateX(-50%)', color: '#ffe9a8', background: 'rgba(0,0,0,0.65)', padding: '6px 16px', borderRadius: 6, pointerEvents: 'none' }}>
          按 F 交互：{nearbyLabel}
        </div>
      )}
    </div>
  )
}
