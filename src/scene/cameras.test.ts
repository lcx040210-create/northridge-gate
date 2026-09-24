import { describe, it, expect } from 'vitest'
import { HOTSPOTS } from './cameras'

describe('HOTSPOTS', () => {
  it('has six hotspots including window, supplies, and door', () => {
    expect(HOTSPOTS).toHaveLength(6)
    expect(HOTSPOTS.map((h) => h.id)).toContain('window')
    expect(HOTSPOTS.map((h) => h.id)).toContain('supplies')
    expect(HOTSPOTS.map((h) => h.id)).toContain('door')
  })
})
