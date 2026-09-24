import * as THREE from 'three'

function loadTexture(url: string): Promise<THREE.Texture> {
  return new Promise((resolve, reject) => {
    new THREE.TextureLoader().load(url, resolve, undefined, reject)
  })
}

function tex(t: THREE.Texture, repeat = 1): THREE.Texture {
  t.colorSpace = THREE.SRGBColorSpace
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  t.repeat.set(repeat, repeat)
  return t
}

export async function buildRoom(scene: THREE.Scene): Promise<void> {
  const [wallTex, floorTex, sofaTex, metalTex, woodTex, doorTex, cabinetTex, posterTex, booksTex, windowTex, glassTex, protocolTex, warningTex, missingTex, bannerTex] = await Promise.all([
    loadTexture('/assets/room/wall.svg'),
    loadTexture('/assets/room/floor.svg'),
    loadTexture('/assets/room/sofa.svg'),
    loadTexture('/assets/room/metal.svg'),
    loadTexture('/assets/room/wood.svg'),
    loadTexture('/assets/room/door.svg'),
    loadTexture('/assets/room/cabinet.svg'),
    loadTexture('/assets/room/poster.svg'),
    loadTexture('/assets/room/books.svg'),
    loadTexture('/assets/scenes/window.svg'),
    loadTexture('/assets/scenes/window_glass.svg'),
    loadTexture('/assets/room/posterProtocol.svg'),
    loadTexture('/assets/room/posterWarning.svg'),
    loadTexture('/assets/room/posterMissing.svg'),
    loadTexture('/assets/room/banner.svg'),
  ])
  for (const t of [doorTex, cabinetTex, posterTex, booksTex, windowTex, glassTex, protocolTex, warningTex, missingTex, bannerTex]) t.colorSpace = THREE.SRGBColorSpace
  tex(wallTex, 1)
  wallTex.repeat.set(3, 1)
  tex(floorTex, 2)
  tex(sofaTex, 2)
  tex(metalTex)
  tex(woodTex)

  const sofaMat = new THREE.MeshStandardMaterial({ map: sofaTex, roughness: 0.9 })
  const metalMat = new THREE.MeshStandardMaterial({ map: metalTex, roughness: 0.5, metalness: 0.4 })
  const woodMat = new THREE.MeshStandardMaterial({ map: woodTex, roughness: 0.8 })

  scene.background = new THREE.Color(0x1a211c)
  scene.fog = new THREE.Fog(0x1a211c, 6, 20)

  // 地板
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshStandardMaterial({ map: floorTex, roughness: 0.9 }))
  floor.rotation.x = -Math.PI / 2
  scene.add(floor)

  // 后墙（观察窗）
  const backWall = new THREE.Mesh(new THREE.PlaneGeometry(10, 4), new THREE.MeshStandardMaterial({ map: wallTex, roughness: 0.85 }))
  backWall.position.set(0, 2, -3)
  scene.add(backWall)

  // 观察窗：窗外雨夜 + 玻璃（自发光，暗房里最亮的东西）
  const view = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 1.6), new THREE.MeshBasicMaterial({ map: windowTex }))
  view.position.set(0, 1.95, -2.99)
  scene.add(view)
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 1.6), new THREE.MeshBasicMaterial({ map: glassTex, transparent: true }))
  glass.position.set(0, 1.95, -2.97)
  scene.add(glass)
  const frameMat = new THREE.MeshStandardMaterial({ color: 0x22262a, roughness: 0.5, metalness: 0.5 })
  for (const [w, h, x, y] of [[2.8, 0.1, 0, 2.8], [2.8, 0.1, 0, 1.1], [0.1, 1.8, -1.35, 1.95], [0.1, 1.8, 1.35, 1.95]] as const) {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.08), frameMat)
    bar.position.set(x, y, -2.95)
    scene.add(bar)
  }
  const windowGlow = new THREE.PointLight(0xe0a860, 12, 5, 2)
  windowGlow.position.set(0, 2, -2.5)
  scene.add(windowGlow)

  // 灯箱规则（右侧后墙）
  const poster = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.8), new THREE.MeshBasicMaterial({ map: posterTex }))
  poster.position.set(3.2, 2.4, -2.98)
  scene.add(poster)

  // 可阅读海报：左墙（紧急应对守则 / 失联公告）
  const posterProtocol = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 1.25), new THREE.MeshBasicMaterial({ map: protocolTex }))
  posterProtocol.position.set(-4.97, 2.1, 0.3)
  posterProtocol.rotation.y = Math.PI / 2
  scene.add(posterProtocol)
  const posterMissing = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 1.25), new THREE.MeshBasicMaterial({ map: missingTex }))
  posterMissing.position.set(-4.97, 2.1, 1.9)
  posterMissing.rotation.y = Math.PI / 2
  scene.add(posterMissing)

  // 可阅读海报：右墙（感染者警告）
  const posterWarning = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 1.25), new THREE.MeshBasicMaterial({ map: warningTex }))
  posterWarning.position.set(4.97, 2.1, 0.3)
  posterWarning.rotation.y = -Math.PI / 2
  scene.add(posterWarning)

  // 前墙横幅：北岭防线·七道闸口（可阅读，挂在沙发上方偏左）
  const banner = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 0.7), new THREE.MeshBasicMaterial({ map: bannerTex }))
  banner.position.set(-2.5, 3.3, 2.97)
  banner.rotation.y = Math.PI
  scene.add(banner)

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

  // ===== 立体家具（带纹理） =====

  // 桌台（观察窗下）
  const desk = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.9, 0.9), metalMat)
  desk.position.set(0, 0.45, -2.4)
  scene.add(desk)
  const deskTop = new THREE.Mesh(new THREE.BoxGeometry(3.3, 0.12, 1.0), metalMat)
  deskTop.position.set(0, 0.96, -2.4)
  scene.add(deskTop)

  // 桌上的背景书籍（可阅读）
  const bookCover = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.07, 0.3), new THREE.MeshStandardMaterial({ color: 0x5a1a14, roughness: 0.7 }))
  bookCover.position.set(0.45, 1.05, -2.25)
  bookCover.rotation.y = 0.2
  scene.add(bookCover)
  const bookPages = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.05, 0.26), new THREE.MeshStandardMaterial({ color: 0xd8d0b8, roughness: 0.9 }))
  bookPages.position.set(0.45, 1.08, -2.25)
  bookPages.rotation.y = 0.2
  scene.add(bookPages)

  // 桌上的纸条（前任安保留下）
  const note = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.3), new THREE.MeshStandardMaterial({ color: 0xd8d0b0, roughness: 0.95 }))
  note.position.set(-0.55, 1.075, -2.3)
  note.rotation.x = -Math.PI / 2
  note.rotation.z = 0.25
  scene.add(note)
  // 纸条上的字迹
  const noteInk = new THREE.Mesh(new THREE.PlaneGeometry(0.18, 0.26), new THREE.MeshBasicMaterial({ color: 0x2a2a24 }))
  noteInk.position.set(-0.55, 1.078, -2.3)
  noteInk.rotation.x = -Math.PI / 2
  noteInk.rotation.z = 0.25
  noteInk.visible = false
  scene.add(noteInk)

  // 沙发（前墙前，前移留出通道）
  const seat = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.5, 1.0), sofaMat)
  seat.position.set(0, 0.4, 1.8)
  scene.add(seat)
  const back = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.9, 0.28), sofaMat)
  back.position.set(0, 1.05, 2.3)
  scene.add(back)
  const armL = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.7, 1.0), sofaMat)
  armL.position.set(-1.34, 0.55, 1.8)
  scene.add(armL)
  const armR = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.7, 1.0), sofaMat)
  armR.position.set(1.34, 0.55, 1.8)
  scene.add(armR)

  // 武器柜（右墙）
  const cabinet = new THREE.Mesh(new THREE.BoxGeometry(0.9, 2.2, 0.6), metalMat)
  cabinet.position.set(4.2, 1.1, 1.2)
  scene.add(cabinet)
  const cabinetDoor = new THREE.Mesh(new THREE.PlaneGeometry(0.58, 2.1), new THREE.MeshStandardMaterial({ map: cabinetTex, roughness: 0.6, metalness: 0.3 }))
  cabinetDoor.rotation.y = -Math.PI / 2
  cabinetDoor.position.set(3.74, 1.1, 1.2)
  scene.add(cabinetDoor)
  const cabinetHandle = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.25, 0.05), new THREE.MeshStandardMaterial({ color: 0x9a9a90, roughness: 0.4, metalness: 0.6 }))
  cabinetHandle.visible = false
  scene.add(cabinetHandle)

  // 手册柜（左墙）
  const shelf = new THREE.Mesh(new THREE.BoxGeometry(0.6, 2.0, 1.6), woodMat)
  shelf.position.set(-4.6, 1.0, 1.2)
  scene.add(shelf)
  const shelfBoard = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.06, 1.56), new THREE.MeshStandardMaterial({ color: 0x3f3524, roughness: 0.8 }))
  shelfBoard.position.set(-4.26, 1.43, 1.2)
  scene.add(shelfBoard)
  const shelfBoard2 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.06, 1.56), new THREE.MeshStandardMaterial({ color: 0x3f3524, roughness: 0.8 }))
  shelfBoard2.position.set(-4.26, 0.75, 1.2)
  scene.add(shelfBoard2)
  // 书脊（朝房间内）
  for (const y of [1.76, 1.08, 0.4]) {
    const row = new THREE.Mesh(new THREE.PlaneGeometry(1.44, 0.62), new THREE.MeshStandardMaterial({ map: booksTex, roughness: 0.9 }))
    row.rotation.y = Math.PI / 2
    row.position.set(-4.29, y, 1.2)
    scene.add(row)
  }

  // 储物柜（右墙，桌台旁边）
  const supplies = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.2, 0.5), metalMat)
  supplies.position.set(4.6, 0.6, -1.8)
  scene.add(supplies)
  const suppliesDoor = new THREE.Mesh(new THREE.PlaneGeometry(0.52, 1.1), new THREE.MeshStandardMaterial({ color: 0x4a5552, roughness: 0.6, metalness: 0.3 }))
  suppliesDoor.rotation.y = -Math.PI / 2
  suppliesDoor.position.set(4.29, 0.6, -1.8)
  scene.add(suppliesDoor)

  // 门（右墙，靠储物柜）
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.15, 2.2, 1.1), metalMat)
  door.position.set(4.9, 1.1, -0.8)
  scene.add(door)
  const doorFace = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 2.2), new THREE.MeshStandardMaterial({ map: doorTex, roughness: 0.6, metalness: 0.3 }))
  doorFace.rotation.y = -Math.PI / 2
  doorFace.position.set(4.82, 1.1, -0.8)
  scene.add(doorFace)
  const doorHandle = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.28, 0.06), new THREE.MeshStandardMaterial({ color: 0xb0a080, roughness: 0.4, metalness: 0.5 }))
  doorHandle.position.set(4.8, 1.1, -0.45)
  scene.add(doorHandle)
  const doorLock = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.18, 0.18), new THREE.MeshStandardMaterial({ color: 0x9a1a1a, roughness: 0.4, emissive: 0x4a0a0a, emissiveIntensity: 0.6 }))
  doorLock.position.set(4.8, 1.3, -0.45)
  scene.add(doorLock)

  // 灯光
  scene.add(new THREE.HemisphereLight(0x9aaa9a, 0x2a2a24, 1.3))
  scene.add(new THREE.AmbientLight(0xaab0a8, 1.5))
  const key = new THREE.PointLight(0x9fb8ff, 70, 18, 1.8)
  key.position.set(0, 3.5, 0)
  scene.add(key)
  const warm = new THREE.PointLight(0xe0c878, 50, 12, 1.8)
  warm.position.set(0, 3.2, -1)
  scene.add(warm)
}
