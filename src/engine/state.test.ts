import { describe, it, expect } from 'vitest'
import { reducer, INITIAL_STATE } from './state'

describe('reducer', () => {
  it('START moves to visitor phase', () => {
    expect(reducer(INITIAL_STATE, { type: 'START' }).phase).toBe('visitor')
  })

  it('JUDGE appends a record and advances', () => {
    const s = reducer(reducer(INITIAL_STATE, { type: 'START' }), { type: 'JUDGE', verdict: 'admit' })
    expect(s.records).toHaveLength(1)
    expect(s.visitorIndex).toBe(1)
  })

  it('after all visitors, phase becomes dawn', () => {
    let s = reducer(INITIAL_STATE, { type: 'START' })
    for (let i = 0; i < 3; i++) s = reducer(s, { type: 'JUDGE', verdict: 'admit' })
    expect(s.phase).toBe('dawn')
  })

  it('INSPECT eye costs reaction, id is free', () => {
    const s0 = reducer(INITIAL_STATE, { type: 'START' })
    const s1 = reducer(s0, { type: 'INSPECT', slot: 'eye' })
    expect(s1.reaction).toBe(80)
    const s2 = reducer(s1, { type: 'INSPECT', slot: 'id' })
    expect(s2.reaction).toBe(80)
  })

  it('DRINK_COFFEE heals san and is limited to two cups', () => {
    let s = reducer(INITIAL_STATE, { type: 'START' })
    s = reducer(s, { type: 'DRINK_COFFEE' })
    expect(s.san).toBe(83)
    s = reducer(s, { type: 'DRINK_COFFEE' })
    s = reducer(s, { type: 'DRINK_COFFEE' })
    expect(s.san).toBe(91) // 第三杯凉水，无效果
    expect(s.coffeeUsed).toBe(2)
  })

  it('USE_SOFA heals, auto-releases current visitor, marks sofaUsed', () => {
    const s0 = reducer(INITIAL_STATE, { type: 'START' })
    const s1 = reducer(s0, { type: 'USE_SOFA', claw: false })
    expect(s1.san).toBe(95)
    expect(s1.sofaUsed).toBe(true)
    expect(s1.autoReleased?.id).toBe('v1-human')
    expect(s1.visitorIndex).toBe(1)
  })

  it('sedative halves negative san deltas', () => {
    let s = reducer(INITIAL_STATE, { type: 'START' })
    s = reducer(s, { type: 'USE_SEDATIVE' })
    // v1-human 是干净人类，处决 → outcome san -15，镇静叶减半 → -7（Math.round(-7.5) = -7）
    s = reducer(s, { type: 'JUDGE', verdict: 'execute', tool: 'axe' })
    expect(s.san).toBe(68)
  })
})
