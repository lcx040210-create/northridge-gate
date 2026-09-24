// 第一人称移动/视角控制 —— 纯函数，可在 jsdom 下测试
export interface PlayerState {
  x: number
  y: number // 眼高（摄像机 y）
  z: number
  vy: number // 垂直速度（跳跃）
  yaw: number // 水平朝向
  pitch: number // 俯仰
  crouching: boolean
}

export interface MoveInput {
  forward: boolean // W
  back: boolean // S
  left: boolean // A
  right: boolean // D
  jump: boolean // 空格
  crouch: boolean // Ctrl
}

export interface Bounds {
  minX: number
  maxX: number
  minZ: number
  maxZ: number
}

export interface Obstacle {
  x: number
  z: number
  radius: number
}

export const MOVE_SPEED = 4
export const CROUCH_SPEED = 2
export const JUMP_VELOCITY = 5
export const GRAVITY = 15
export const STAND_HEIGHT = 1.6
export const CROUCH_HEIGHT = 1.0
export const MOUSE_SENSITIVITY = 0.002

function clamp(v: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, v))
}

// 房间障碍物：武器柜、储物柜、桌子、手册柜
// 注意：沙发和床不设置碰撞，允许玩家自由移动
const OBSTACLES: Obstacle[] = [
  { x: 4.2, z: 1.2, radius: 1.0 },   // 武器柜（右墙）
  { x: -4.6, z: 1.2, radius: 1.0 },  // 手册柜（左墙）
  { x: 4.6, z: -1.8, radius: 0.8 },  // 储物柜（右墙）
  { x: 0, z: -2.5, radius: 0.9 },    // 桌子
]

export function updatePlayer(state: PlayerState, input: MoveInput, dt: number, bounds: Bounds): PlayerState {
  const speed = state.crouching ? CROUCH_SPEED : MOVE_SPEED

  let dx = 0
  let dz = 0
  if (input.forward) dz -= 1
  if (input.back) dz += 1
  if (input.left) dx -= 1
  if (input.right) dx += 1
  const len = Math.hypot(dx, dz)
  if (len > 0) {
    dx /= len
    dz /= len
  }

  const sin = Math.sin(state.yaw)
  const cos = Math.cos(state.yaw)
  // 视角相对移动：yaw 绕 Y 轴旋转，W 始终朝镜头前方
  let x = state.x + (dx * cos + dz * sin) * speed * dt
  let z = state.z + (-dx * sin + dz * cos) * speed * dt

  // 障碍物碰撞检测
  const PLAYER_RADIUS = 0.3
  for (const obs of OBSTACLES) {
    const dist = Math.hypot(x - obs.x, z - obs.z)
    if (dist < obs.radius + PLAYER_RADIUS) {
      // 推出
      const nx = (x - obs.x) / dist
      const nz = (z - obs.z) / dist
      x = obs.x + nx * (obs.radius + PLAYER_RADIUS)
      z = obs.z + nz * (obs.radius + PLAYER_RADIUS)
    }
  }

  x = clamp(x, bounds.minX, bounds.maxX)
  z = clamp(z, bounds.minZ, bounds.maxZ)

  const targetHeight = input.crouch ? CROUCH_HEIGHT : STAND_HEIGHT
  let vy = state.vy
  let y = state.y
  if (input.jump && y <= targetHeight + 0.01) {
    vy = JUMP_VELOCITY
  }
  vy -= GRAVITY * dt
  y += vy * dt
  if (y <= targetHeight) {
    y = targetHeight
    vy = 0
  }

  return { x, y, z, vy, yaw: state.yaw, pitch: state.pitch, crouching: input.crouch }
}

export function applyMouseLook(state: PlayerState, dx: number, dy: number): PlayerState {
  const yaw = state.yaw - dx * MOUSE_SENSITIVITY
  const pitch = clamp(state.pitch - dy * MOUSE_SENSITIVITY, -Math.PI / 2 + 0.01, Math.PI / 2 - 0.01)
  return { ...state, yaw, pitch }
}
