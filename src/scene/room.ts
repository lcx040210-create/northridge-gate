import * as THREE from 'three'

function loadTexture(url: string): Promise<THREE.Texture> {
  return new Promise((resolve, reject) => {
    new THREE.TextureLoader().load(url, resolve, undefined, reject)
  })
}

function box(w: number, h: number, d: number, x: number, y: number, z: number, color: number, roughness = 0.85): THREE.Mesh {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshStandardMaterial({ color, roughness }))
  m.position.set(x, y, z)
  return m
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

  scene.background = new THREE.Color(0x1a211c)
  scene.fog = new THREE.Fog(0x1a211c, 6, 20)

  // 地板
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshStandardMaterial({ map: floorTex, roughness: 0.9 }))
  floor.rotation.x = -Math.PI / 2
  scene.add(floor)

  // 后墙（观察窗）在 z=-3
  const backWall = new THREE.Mesh(new THREE.PlaneGeometry(10, 4), new THREE.MeshStandardMaterial({ map: wallTex, roughness: 0.85 }))
  backWall.position.set(0, 2, -3)
  scene.add(backWall)

  // 前墙 + 侧墙 + 天花板
  const wallMat = new THREE.MeshStandardMaterial({ color: 0x2e332e, roughness: 0.9 })
  const frontWall = new THREE.Mesh(new THREE.PlaneGeometry(10, 4), wallMat)
  frontWall.position.set(0, 2, 3)
  scene.add(frontWall)
  const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(6, 4), wallMat)
  leftWall.position.set(-5, 2, 0)
  leftWall.rotation.y = Math.PI / 2
  scene.add(leftWall)
  const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(6, 4), wallMat)
  rightWall.position.set(5, 2, 0)
  rightWall.rotation.y = -Math.PI / 2
  scene.add(rightWall)
  const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(10, 6), wallMat)
  ceiling.position.set(0, 4, 0)
  ceiling.rotation.x = Math.PI / 2
  scene.add(ceiling)

  // ===== 立体家具 =====

  // 桌台（观察窗下）
  const desk = box(3.2, 0.9, 0.9, 0, 0.45, -2.4, 0x5a5248, 0.7)
  scene.add(desk)
  const deskTop = box(3.3, 0.12, 1.0, 0, 0.96, -2.4, 0x6e665c, 0.5)
  scene.add(deskTop)

  // 沙发（前墙前）：坐垫 + 靠背 + 两个扶手
  const sofaMat = new THREE.MeshStandardMaterial({ color: 0x5a3232, roughness: 0.9 })
  const seat = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.5, 1.0), sofaMat)
  seat.position.set(0, 0.4, 2.2)
  scene.add(seat)
  const back = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.9, 0.28), sofaMat)
  back.position.set(0, 1.05, 2.7)
  scene.add(back)
  const armL = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.7, 1.0), sofaMat)
  armL.position.set(-1.34, 0.55, 2.2)
  scene.add(armL)
  const armR = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.7, 1.0), sofaMat)
  armR.position.set(1.34, 0.55, 2.2)
  scene.add(armR)

  // 武器柜（右墙）：金属柜 + 门缝
  const cabinet = box(0.9, 2.2, 0.6, 4.2, 1.1, 1.2, 0x4a5258, 0.6)
  scene.add(cabinet)
  const cabinetDoor = box(0.04, 1.6, 0.5, 4.74, 1.1, 1.2, 0x33383e, 0.6)
  scene.add(cabinetDoor)
  const cabinetHandle = box(0.1, 0.25, 0.05, 4.78, 1.1, 1.0, 0x9a9a90, 0.4)
  scene.add(cabinetHandle)

  // 手册柜（左墙）：木架 + 隔层
  const shelf = box(1.6, 2.0, 0.5, -4.2, 1.0, 1.2, 0x5a4a32, 0.8)
  scene.add(shelf)
  const shelfBoard = box(1.5, 0.06, 0.46, -4.2, 1.45, 1.2, 0x3f3524, 0.8)
  scene.add(shelfBoard)
  const shelfBoard2 = box(1.5, 0.06, 0.46, -4.2, 0.75, 1.2, 0x3f3524, 0.8)
  scene.add(shelfBoard2)

  // 门（前墙）：门板 + 把手 + 锁
  const door = box(1.1, 2.2, 0.15, 0, 1.1, 2.9, 0x3a3f3a, 0.6)
  scene.add(door)
  const doorHandle = box(0.06, 0.28, 0.06, 0.35, 1.1, 2.95, 0xb0a080, 0.4)
  scene.add(doorHandle)
  const doorLock = box(0.18, 0.18, 0.04, 0.05, 1.25, 2.96, 0x9a1a1a, 0.4)
  scene.add(doorLock)

  // 灯光：半球光 + 环境光 + 双点光
  scene.add(new THREE.HemisphereLight(0x9aaa9a, 0x2a2a24, 1.3))
  scene.add(new THREE.AmbientLight(0xaab0a8, 1.5))
  const key = new THREE.PointLight(0x9fb8ff, 70, 18, 1.8)
  key.position.set(0, 3.5, 0)
  scene.add(key)
  const warm = new THREE.PointLight(0xe0c878, 50, 12, 1.8)
  warm.position.set(0, 3.2, -1)
  scene.add(warm)
}
