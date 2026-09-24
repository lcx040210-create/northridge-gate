import { describe, it, expect } from 'vitest'
import { HOTSPOTS } from './cameras'

describe('HOTSPOTS', () => {
  it('has twelve hotspots including window, supplies, door, and readable items', () => {
    expect(HOTSPOTS).toHaveLength(12)
    expect(HOTSPOTS.map((h) => h.id)).toContain('window')
    expect(HOTSPOTS.map((h) => h.id)).toContain('supplies')
    expect(HOTSPOTS.map((h) => h.id)).toContain('door')
    expect(HOTSPOTS.map((h) => h.id)).toContain('book')
    expect(HOTSPOTS.map((h) => h.id)).toContain('note')
    expect(HOTSPOTS.map((h) => h.id)).toContain('poster1')
    expect(HOTSPOTS.map((h) => h.id)).toContain('poster2')
    expect(HOTSPOTS.map((h) => h.id)).toContain('poster3')
    expect(HOTSPOTS.map((h) => h.id)).toContain('banner')
  })
})
