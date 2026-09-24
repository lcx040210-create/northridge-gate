import * as THREE from 'three'
import type { Tool } from '../data/schema'

export type HandState = 'empty' | 'axe' | 'gun' | 'flamethrower'

export class Hands {
  private group: THREE.Group
  private leftArm: THREE.Mesh
  private rightArm: THREE.Mesh
  private leftHand: THREE.Mesh
  private rightHand: THREE.Mesh
  private weapon: THREE.Group | null = null
  private state: HandState = 'empty'

  constructor() {
    this.group = new THREE.Group()
    this.group.position.set(0, -0.4, -0.5)

    const armMat = new THREE.MeshStandardMaterial({ color: 0x8a7a6a, roughness: 0.8 })
    const handMat = new THREE.MeshStandardMaterial({ color: 0xa89888, roughness: 0.7 })

    // 左臂
    this.leftArm = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.035, 0.35, 8), armMat)
    this.leftArm.position.set(-0.15, -0.1, 0.1)
    this.leftArm.rotation.z = 0.3
    this.group.add(this.leftArm)

    this.leftHand = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.08, 0.04), handMat)
    this.leftHand.position.set(-0.22, -0.25, 0.12)
    this.group.add(this.leftHand)

    // 右臂
    this.rightArm = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.035, 0.35, 8), armMat)
    this.rightArm.position.set(0.15, -0.1, 0.1)
    this.rightArm.rotation.z = -0.3
    this.group.add(this.rightArm)

    this.rightHand = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.08, 0.04), handMat)
    this.rightHand.position.set(0.22, -0.25, 0.12)
    this.group.add(this.rightHand)
  }

  getObject(): THREE.Group {
    return this.group
  }

  setState(newState: HandState): void {
    if (this.state === newState) return
    this.state = newState

    // 移除旧武器
    if (this.weapon) {
      this.group.remove(this.weapon)
      this.weapon = null
    }

    // 重置手臂姿势
    this.leftArm.rotation.set(0, 0, 0.3)
    this.rightArm.rotation.set(0, 0, -0.3)
    this.leftHand.position.set(-0.22, -0.25, 0.12)
    this.rightHand.position.set(0.22, -0.25, 0.12)

    // 添加新武器
    switch (newState) {
      case 'axe':
        this.weapon = this.createAxe()
        this.rightArm.rotation.set(-0.5, 0, -0.2)
        this.rightHand.position.set(0.12, -0.3, 0.05)
        break
      case 'gun':
        this.weapon = this.createGun()
        this.rightArm.rotation.set(-0.8, 0, -0.15)
        this.leftArm.rotation.set(-0.8, 0, 0.15)
        this.rightHand.position.set(0.08, -0.25, -0.05)
        this.leftHand.position.set(-0.08, -0.25, -0.05)
        break
      case 'flamethrower':
        this.weapon = this.createFlamethrower()
        this.rightArm.rotation.set(-0.6, 0, -0.2)
        this.rightHand.position.set(0.15, -0.28, 0)
        break
    }

    if (this.weapon) {
      this.group.add(this.weapon)
    }
  }

  update(stride: number, grounded: boolean): void {
    if (!grounded || this.state !== 'empty') return
    const swing = Math.sin(stride * Math.PI * 0.8) * 0.15
    this.leftArm.rotation.x = -0.3 + swing
    this.rightArm.rotation.x = -0.3 - swing
  }

  private createAxe(): THREE.Group {
    const axe = new THREE.Group()

    // 木柄
    const handle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.015, 0.015, 0.5, 8),
      new THREE.MeshStandardMaterial({ color: 0x5a4a3a, roughness: 0.9 })
    )
    handle.position.set(0.1, -0.3, 0)
    handle.rotation.set(0.5, 0, -0.3)
    axe.add(handle)

    // 斧刃
    const blade = new THREE.Mesh(
      new THREE.BoxGeometry(0.12, 0.08, 0.02),
      new THREE.MeshStandardMaterial({ color: 0xc04030, roughness: 0.4, metalness: 0.6 })
    )
    blade.position.set(0.08, -0.05, 0)
    blade.rotation.set(0.5, 0, -0.3)
    axe.add(blade)

    return axe
  }

  private createGun(): THREE.Group {
    const gun = new THREE.Group()

    // 枪身
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(0.04, 0.12, 0.18),
      new THREE.MeshStandardMaterial({ color: 0x3a3a3a, roughness: 0.6, metalness: 0.5 })
    )
    body.position.set(0, -0.25, -0.12)
    gun.add(body)

    // 枪管
    const barrel = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.012, 0.15, 8),
      new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.4, metalness: 0.7 })
    )
    barrel.position.set(0, -0.2, -0.28)
    barrel.rotation.x = Math.PI / 2
    gun.add(barrel)

    return gun
  }

  private createFlamethrower(): THREE.Group {
    const ft = new THREE.Group()

    // 罐体
    const tank = new THREE.Mesh(
      new THREE.CylinderGeometry(0.06, 0.06, 0.2, 12),
      new THREE.MeshStandardMaterial({ color: 0xd0b050, roughness: 0.5, metalness: 0.4 })
    )
    tank.position.set(0.12, -0.28, 0.05)
    tank.rotation.set(0, 0, -0.3)
    ft.add(tank)

    // 喷嘴
    const nozzle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.015, 0.02, 0.08, 8),
      new THREE.MeshStandardMaterial({ color: 0x4a4a4a, roughness: 0.6, metalness: 0.6 })
    )
    nozzle.position.set(0.08, -0.22, -0.08)
    nozzle.rotation.x = Math.PI / 2
    ft.add(nozzle)

    return ft
  }

  // 攻击动画
  async animateAttack(tool: Tool): Promise<void> {
    return new Promise((resolve) => {
      if (tool === 'axe') {
        this.animateAxeSwing(resolve)
      } else if (tool === 'gun') {
        this.animateGunRecoil(resolve)
      } else if (tool === 'fire') {
        this.animateFlameShot(resolve)
      }
    })
  }

  private animateAxeSwing(done: () => void): void {
    const start = Date.now()
    const duration = 400
    const initialRot = this.rightArm.rotation.x

    const animate = () => {
      const elapsed = Date.now() - start
      const t = elapsed / duration

      if (t < 0.5) {
        // 上抬
        this.rightArm.rotation.x = initialRot + t * 4
      } else if (t < 1) {
        // 下劈
        this.rightArm.rotation.x = initialRot + (2 - t * 2) * 2
      } else {
        this.rightArm.rotation.x = initialRot
        done()
        return
      }

      requestAnimationFrame(animate)
    }
    animate()
  }

  private animateGunRecoil(done: () => void): void {
    const start = Date.now()
    const duration = 150
    const initialZ = this.group.position.z

    const animate = () => {
      const elapsed = Date.now() - start
      const t = elapsed / duration

      if (t < 0.3) {
        this.group.position.z = initialZ + t * 0.15
      } else if (t < 1) {
        this.group.position.z = initialZ + (1 - t) * 0.045
      } else {
        this.group.position.z = initialZ
        done()
        return
      }

      requestAnimationFrame(animate)
    }
    animate()
  }

  private animateFlameShot(done: () => void): void {
    // 焚化罐动画较简单，仅轻微抖动
    const start = Date.now()
    const duration = 200

    const animate = () => {
      const elapsed = Date.now() - start
      const t = elapsed / duration

      if (t < 1) {
        this.rightArm.rotation.z = -0.2 + Math.sin(t * Math.PI * 8) * 0.05
      } else {
        this.rightArm.rotation.z = -0.2
        done()
        return
      }

      requestAnimationFrame(animate)
    }
    animate()
  }
}
