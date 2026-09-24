import { describe, it, expect } from 'vitest'
import { applySanDelta, getSanBand } from './san'
import { SAN_BANDS } from '../data/san'

describe('applySanDelta', () => {
  it('clamps to 0..100', () => {
    expect(applySanDelta(50, 100)).toBe(100)
    expect(applySanDelta(50, -100)).toBe(0)
  })
  it('leaves mid values unchanged', () => {
    expect(applySanDelta(75, -10)).toBe(65)
  })
})

describe('getSanBand', () => {
  it('maps san to the correct band effect', () => {
    expect(getSanBand(75, SAN_BANDS).effect).toBe('正常')
    expect(getSanBand(50, SAN_BANDS).effect).toContain('耳鸣')
    expect(getSanBand(10, SAN_BANDS).effect).toContain('反转')
  })
})
