import { describe, it, expect } from 'vitest'
import { resolveExecution } from './execution'
import { v2Skinfit } from '../data/visitors/v2-skinfit'
import { v4Coretick } from '../data/visitors/v4-coretick'

describe('resolveExecution', () => {
  it('axe succeeds against skinfit', () => {
    const r = resolveExecution(v2Skinfit, 'axe')
    expect(r.success).toBe(true)
    expect(r.escaped).toBe(false)
  })
  it('gun escapes against skinfit', () => {
    const r = resolveExecution(v2Skinfit, 'gun')
    expect(r.success).toBe(false)
    expect(r.escaped).toBe(true)
  })
  it('gun succeeds against coretick', () => {
    const r = resolveExecution(v4Coretick, 'gun')
    expect(r.success).toBe(true)
  })
})
