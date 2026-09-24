import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { buildRoom } from './room'
import { HOTSPOTS } from './cameras'
import { updatePlayer, applyMouseLook, STAND_HEIGHT, type Bounds, type PlayerState, type MoveInput } from './controls'

const BOUNDS: Bounds = { minX: -4.5, maxX: 4.5, minZ: -3, maxZ: 3 }
const INTERACT_RANGE = 2.2

export default function RoomScene({ onInteract }: { onInteract: (hotspotId: string) => void }) {
  const mountRef = useRef<HTMLDivElement>(null)
  const onInteractRef = useRef(onInteract)
  onInteractRef.current = onInteract

  useEffect(() => {
    const mount = mountRef.current!
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    buildRoom(scene)
    const camera = new THREE.PerspectiveCamera(70, mount.clientWidth / mount.clientHeight, 0.1, 50)
    camera.rotation.order = 'YXZ'

    let player: PlayerState = { x: 0, y: STAND_HEIGHT, z: 2.5, vy: 0, yaw: Math.PI, pitch: 0, crouching: false }
    const keys: MoveInput = { forward: false, back: false, left: false, right: false, jump: false, crouch: false }
    let lastTime = performance.now()

    function interact() {
      for (const h of HOTSPOTS) {
        const dx = player.x - h.position[0]
        const dz = player.z - h.position[2]
        if (Math.hypot(dx, dz) < INTERACT_RANGE) {
          onInteractRef.current(h.id)
          return
        }
      }
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
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('keyup', onKeyUp)
      renderer.domElement.removeEventListener('mousedown', onMouseDown)
      mount.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} style={{ position: 'absolute', inset: 0, cursor: 'crosshair' }} />
}
