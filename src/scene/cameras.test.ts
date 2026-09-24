import { describe, it, expect } from 'vitest'
import { HOTSPOTS } from './cameras'

describe('HOTSPOTS', () => {
  it('has five hotspots including window and door', () => {
    expect(HOTSPOTS).toHaveLength(5)
    expect(HOTSPOTS.map((h) => h.id)).toContain('window')
    expect(HOTSPOTS.map((h) => h.id)).toContain('door')
  })
})
