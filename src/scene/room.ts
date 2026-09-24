import * as THREE from 'three'

function loadTexture(url: string): Promise<THREE.Texture> {
  return new Promise((resolve, reject) => {
    new THREE.TextureLoader().load(url, resolve, undefined, reject)
  })
}

export async function buildRoom(scene: THREE.Scene): Promise<void> {
  const [wallTex, floorTex] = await Promise.all([
    loadTexture('/assets/room/wall.svg'),
    loadTexture('/assets/room/floor.svg'),
  ])
  wallTex.colorSpace = THREE.SRGBColorSpace
  floorTex.colorSpace = THREE.SRGBColorSpace
  floorTex.wrapS = floorTex.wrapT = THREE.RepeatWrapping
  floorTex.repeat.set(2, 2)

  scene.background = new THREE.Color(0x05070a)
  scene.fog = new THREE.Fog(0x05070a, 5, 15)

  // 地板
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshStandardMaterial({ map: floorTex, roughness: 0.9 }),
  )
  floor.rotation.x = -Math.PI / 2
  scene.add(floor)

  // 后墙（带观察窗的纹理）
  const backWall = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 4),
    new THREE.MeshStandardMaterial({ map: wallTex, roughness: 0.85 }),
  )
  backWall.position.set(0, 2, -2)
  scene.add(backWall)

  // 其余墙面 + 天花板（暗色）
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x111418, roughness: 0.9 })
  const frontWall = new THREE.Mesh(new THREE.PlaneGeometry(10, 4), darkMat)
  frontWall.position.set(0, 2, 3)
  scene.add(frontWall)

  const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(6, 4), darkMat)
  leftWall.position.set(-5, 2, 0.5)
  leftWall.rotation.y = Math.PI / 2
  scene.add(leftWall)

  const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(6, 4), darkMat)
  rightWall.position.set(5, 2, 0.5)
  rightWall.rotation.y = -Math.PI / 2
  scene.add(rightWall)

  const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(10, 6), darkMat)
  ceiling.position.set(0, 4, 0.5)
  ceiling.rotation.x = Math.PI / 2
  scene.add(ceiling)

  // 桌台
  const desk = new THREE.Mesh(
    new THREE.BoxGeometry(3, 0.8, 0.8),
    new THREE.MeshStandardMaterial({ color: 0x2a2a2e, roughness: 0.7 }),
  )
  desk.position.set(0, 0.4, -1.4)
  scene.add(desk)

  // 灯光
  scene.add(new THREE.AmbientLight(0x3a4038, 1.0))
  const key = new THREE.PointLight(0x88aaff, 25, 15)
  key.position.set(0, 3.5, 1)
  scene.add(key)
  const warm = new THREE.PointLight(0xc9b060, 12, 10)
  warm.position.set(0, 3.2, -1)
  scene.add(warm)
}
