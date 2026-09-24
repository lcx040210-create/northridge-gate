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

  it('after all visitors, door unlocks and stays in visitor phase', () => {
    let s = reducer(INITIAL_STATE, { type: 'START' })
    for (let i = 0; i < 3; i++) s = reducer(s, { type: 'JUDGE', verdict: 'admit' })
    expect(s.doorUnlocked).toBe(false)
    s = reducer(s, { type: 'JUDGE', verdict: 'admit' })
    expect(s.doorUnlocked).toBe(true)
    expect(s.phase).toBe('visitor')
    // 开门进入结局
    const d = reducer(s, { type: 'OPEN_DOOR' })
    expect(d.phase).toBe('dawn')
  })

  it('INSPECT no longer costs reaction', () => {
    const s0 = reducer(INITIAL_STATE, { type: 'START' })
    expect(reducer(s0, { type: 'INSPECT', slot: 'eye' }).reaction).toBe(100)
    expect(reducer(s0, { type: 'INSPECT', slot: 'id' }).reaction).toBe(100)
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

  it('TOGGLE_VENTILATION flips ventilationOn', () => {
    const s0 = reducer(INITIAL_STATE, { type: 'START' })
    expect(reducer(s0, { type: 'TOGGLE_VENTILATION' }).ventilationOn).toBe(true)
    expect(reducer(reducer(s0, { type: 'TOGGLE_VENTILATION' }), { type: 'TOGGLE_VENTILATION' }).ventilationOn).toBe(false)
  })

  it('USE_SEDATIVE reduces reactionMax to 70 and clamps reaction', () => {
    let s = reducer(INITIAL_STATE, { type: 'START' })
    s = reducer(s, { type: 'USE_SEDATIVE' })
    expect(s.reactionMax).toBe(70)
    expect(s.reaction).toBe(70)
  })

  it('USE_SOFA claw branch reduces san by 10 without heal', () => {
    const s0 = reducer(INITIAL_STATE, { type: 'START' })
    const s1 = reducer(s0, { type: 'USE_SOFA', claw: true })
    expect(s1.san).toBe(65)
    expect(s1.sofaUsed).toBe(true)
  })

  it('USE_SOFA is one-shot', () => {
    const s0 = reducer(INITIAL_STATE, { type: 'START' })
    const s1 = reducer(s0, { type: 'USE_SOFA', claw: false })
    expect(reducer(s1, { type: 'USE_SOFA', claw: false })).toEqual(s1)
  })

  it('INSPECT question slot is free', () => {
    const s0 = reducer(INITIAL_STATE, { type: 'START' })
    expect(reducer(s0, { type: 'INSPECT', slot: 'question' }).reaction).toBe(100)
  })
})

it('leaves window marks up to a cap of 8', () => {
  let st = INITIAL_STATE
  const mk = (i: number) => ({ tool: 'gun' as const, x: 10 + i, y: 20 + i, rotation: 0, scale: 0.5 })
  for (let i = 0; i < 10; i++) st = reducer(st, { type: 'MARK_WINDOW', mark: mk(i) })
  expect(st.windowMarks).toHaveLength(8)
  expect(st.windowMarks[0].tool).toBe('gun')
})
