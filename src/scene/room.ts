import * as THREE from 'three'

export function buildRoom(scene: THREE.Scene): void {
  scene.background = new THREE.Color(0x0a0a0c)
  scene.fog = new THREE.Fog(0x0a0a0c, 4, 12)

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshStandardMaterial({ color: 0x1a1a1e }),
  )
  floor.rotation.x = -Math.PI / 2
  scene.add(floor)

  const backWall = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 4),
    new THREE.MeshStandardMaterial({ color: 0x222226 }),
  )
  backWall.position.set(0, 2, -2)
  scene.add(backWall)

  const window = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 1.5),
    new THREE.MeshStandardMaterial({ color: 0x050507 }),
  )
  window.position.set(0, 1.7, -1.99)
  scene.add(window)

  const desk = new THREE.Mesh(
    new THREE.BoxGeometry(3, 0.1, 1),
    new THREE.MeshStandardMaterial({ color: 0x2a2a2e }),
  )
  desk.position.set(0, 0.9, 0.5)
  scene.add(desk)

  scene.add(new THREE.AmbientLight(0x404040, 1.2))
  const key = new THREE.PointLight(0x88aaff, 20, 12)
  key.position.set(0, 3, 1)
  scene.add(key)
}
