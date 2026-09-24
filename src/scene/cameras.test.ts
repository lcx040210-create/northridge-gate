import { describe, it, expect } from 'vitest'
import { HOTSPOTS } from './cameras'

describe('HOTSPOTS', () => {
  it('has four hotspots with a window', () => {
    expect(HOTSPOTS).toHaveLength(4)
    expect(HOTSPOTS.map((h) => h.id)).toContain('window')
  })
})
