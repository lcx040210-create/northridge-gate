import { describe, it, expect } from 'vitest'
import { resolveVerdict } from './judge'
import { v1Human } from '../data/visitors/v1-human'
import { v2Skinfit } from '../data/visitors/v2-skinfit'

describe('resolveVerdict', () => {
  it('admitting a clean human is correct', () => {
    const j = resolveVerdict(v1Human, 'admit')
    expect(j.correct).toBe(true)
    expect(j.escaped).toBe(false)
  })

  it('executing a skinfit with an axe is correct', () => {
    const j = resolveVerdict(v2Skinfit, 'execute', 'axe')
    expect(j.correct).toBe(true)
    expect(j.escaped).toBe(false)
  })

  it('executing a skinfit with a gun causes escape', () => {
    const j = resolveVerdict(v2Skinfit, 'execute', 'gun')
    expect(j.correct).toBe(false)
    expect(j.escaped).toBe(true)
  })

  it('executing a human is wrong but not an escape', () => {
    const j = resolveVerdict(v1Human, 'execute', 'axe')
    expect(j.correct).toBe(false)
    expect(j.escaped).toBe(false)
  })
})
