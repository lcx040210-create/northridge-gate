import { describe, it, expect } from 'vitest'
import { updatePlayer, applyMouseLook, STAND_HEIGHT, CROUCH_HEIGHT, type Bounds, type MoveInput } from './controls'

const bounds: Bounds = { minX: -4.5, maxX: 4.5, minZ: -3, maxZ: 3 }
const noInput: MoveInput = { forward: false, back: false, left: false, right: false, jump: false, crouch: false }
const base = { x: 0, y: STAND_HEIGHT, z: 0, vy: 0, yaw: 0, pitch: 0, crouching: false }

describe('updatePlayer', () => {
  it('W moves forward toward -Z when yaw is 0', () => {
    const s = updatePlayer(base, { ...noInput, forward: true }, 1, bounds)
    expect(s.z).toBeLessThan(0)
  })

  it('S moves backward toward +Z when yaw is 0', () => {
    const s = updatePlayer(base, { ...noInput, back: true }, 1, bounds)
    expect(s.z).toBeGreaterThan(0)
  })

  it('W follows view direction: at yaw=PI/2 it moves toward -X', () => {
    const s = updatePlayer({ ...base, yaw: Math.PI / 2 }, { ...noInput, forward: true }, 1, bounds)
    expect(s.x).toBeLessThan(0)
    expect(s.z).toBeCloseTo(0)
  })

  it('A strafes left of view direction at yaw=0', () => {
    const s = updatePlayer(base, { ...noInput, left: true }, 1, bounds)
    expect(s.x).toBeLessThan(0)
    expect(s.z).toBeCloseTo(0)
  })

  it('jump raises y above stand height then gravity lands back', () => {
    let s = updatePlayer(base, { ...noInput, jump: true }, 0.1, bounds)
    expect(s.vy).toBeGreaterThan(0)
    for (let i = 0; i < 200; i++) s = updatePlayer(s, noInput, 0.1, bounds)
    expect(s.y).toBeCloseTo(STAND_HEIGHT)
  })

  it('crouch settles to crouch height', () => {
    let s = base
    for (let i = 0; i < 200; i++) s = updatePlayer(s, { ...noInput, crouch: true }, 0.1, bounds)
    expect(s.y).toBeCloseTo(CROUCH_HEIGHT)
  })

  it('clamps position to bounds', () => {
    const s = updatePlayer({ ...base, x: -4.5 }, { ...noInput, left: true }, 1, bounds)
    expect(s.x).toBe(-4.5)
  })
})

describe('applyMouseLook', () => {
  it('positive dx turns yaw negative', () => {
    const s = applyMouseLook(base, 100, 0)
    expect(s.yaw).toBeLessThan(0)
  })

  it('clamps pitch to near +/-90 degrees', () => {
    const up = applyMouseLook(base, 0, -100000)
    expect(up.pitch).toBeGreaterThan(-Math.PI / 2 - 0.1)
    const down = applyMouseLook(base, 0, 100000)
    expect(down.pitch).toBeLessThan(Math.PI / 2 + 0.1)
  })
})
