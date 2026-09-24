import { describe, it, expect } from 'vitest'
import { computeEnding } from './endings'
import type { VisitorRecord } from './types'

function rec(p: Partial<VisitorRecord>): VisitorRecord {
  return { visitorId: 'x', role: 'human', state: 'clean', verdict: 'admit', correct: true, escaped: false, sanAtJudge: 70, ...p }
}

describe('computeEnding', () => {
  it('passes when all four are correct', () => {
    const r = computeEnding({ records: [rec({}), rec({}), rec({}), rec({})], sanTouchedBelow15: false, autoReleased: null })
    expect(r).toBe('passed')
  })
  it('contaminates when a pseudo is admitted', () => {
    const r = computeEnding({ records: [rec({ role: 'skinfit', verdict: 'admit', correct: false })], sanTouchedBelow15: false, autoReleased: null })
    expect(r).toBe('contaminated')
  })
  it('contaminates when sofa auto-released a pseudo', () => {
    const r = computeEnding({ records: [], sanTouchedBelow15: false, autoReleased: { role: 'coretick' } as never })
    expect(r).toBe('contaminated')
  })
  it('unclean when san touched <15 and killed a human', () => {
    const r = computeEnding({ records: [rec({ role: 'human', verdict: 'execute', correct: false })], sanTouchedBelow15: true, autoReleased: null })
    expect(r).toBe('unclean')
  })
  it('fails (contaminated fallback) on 2+ misjudges with no release', () => {
    const r = computeEnding({ records: [rec({ correct: false }), rec({ correct: false })], sanTouchedBelow15: false, autoReleased: null })
    expect(r).toBe('contaminated')
  })
})
