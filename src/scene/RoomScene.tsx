import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { HOTSPOTS } from './cameras'
import { buildRoom } from './room'

export default function RoomScene({ hotspotId }: { hotspotId: string }) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current!
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    buildRoom(scene)
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 50)
    camera.position.set(0, 1.6, 2)

    const hotspot = HOTSPOTS.find((h) => h.id === hotspotId) ?? HOTSPOTS[0]
    camera.position.set(...hotspot.position)
    camera.lookAt(...hotspot.lookAt)

    renderer.render(scene, camera)
    return () => {
      mount.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [hotspotId])

  return <div ref={mountRef} style={{ position: 'absolute', inset: 0 }} />
}
