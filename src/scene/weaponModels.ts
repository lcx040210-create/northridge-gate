import * as THREE from 'three'

export function createWeaponModels(): { axe: THREE.Group; gun: THREE.Group; flamethrower: THREE.Group } {
  const axe = new THREE.Group()
  const handle = new THREE.Mesh(
    new THREE.CylinderGeometry(0.02, 0.02, 0.6, 8),
    new THREE.MeshStandardMaterial({ color: 0x5a4a3a, roughness: 0.9 })
  )
  handle.rotation.x = Math.PI / 2
  axe.add(handle)
  const blade = new THREE.Mesh(
    new THREE.BoxGeometry(0.15, 0.1, 0.03),
    new THREE.MeshStandardMaterial({ color: 0xc04030, roughness: 0.4, metalness: 0.6 })
  )
  blade.position.z = 0.3
  axe.add(blade)

  const gun = new THREE.Group()
  const gunBody = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, 0.15, 0.22),
    new THREE.MeshStandardMaterial({ color: 0x3a3a3a, roughness: 0.6, metalness: 0.5 })
  )
  gun.add(gunBody)
  const barrel = new THREE.Mesh(
    new THREE.CylinderGeometry(0.015, 0.015, 0.18, 8),
    new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.4, metalness: 0.7 })
  )
  barrel.position.z = 0.2
  barrel.rotation.x = Math.PI / 2
  gun.add(barrel)

  const flamethrower = new THREE.Group()
  const tank = new THREE.Mesh(
    new THREE.CylinderGeometry(0.08, 0.08, 0.25, 12),
    new THREE.MeshStandardMaterial({ color: 0xd0b050, roughness: 0.5, metalness: 0.4 })
  )
  tank.rotation.x = Math.PI / 2
  flamethrower.add(tank)
  const nozzle = new THREE.Mesh(
    new THREE.CylinderGeometry(0.02, 0.025, 0.1, 8),
    new THREE.MeshStandardMaterial({ color: 0x4a4a4a, roughness: 0.6, metalness: 0.6 })
  )
  nozzle.position.z = 0.18
  nozzle.rotation.x = Math.PI / 2
  flamethrower.add(nozzle)

  return { axe, gun, flamethrower }
}

export function positionWeaponsInCabinet(cabinet: THREE.Object3D, weapons: ReturnType<typeof createWeaponModels>): void {
  // 武器柜内部位置 (柜子在 x=4.2, z=1.2)
  weapons.axe.position.set(4.1, 1.5, 1.2)
  weapons.axe.rotation.y = Math.PI / 2
  cabinet.add(weapons.axe)

  weapons.gun.position.set(4.1, 1.0, 1.35)
  weapons.gun.rotation.y = Math.PI / 2
  cabinet.add(weapons.gun)

  weapons.flamethrower.position.set(4.1, 0.6, 1.05)
  weapons.flamethrower.rotation.y = Math.PI / 2
  cabinet.add(weapons.flamethrower)
}
