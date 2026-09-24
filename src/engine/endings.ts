import type { Visitor } from '../data/schema'
import type { VisitorRecord } from './types'

export interface EndingInput {
  records: VisitorRecord[]
  sanTouchedBelow15: boolean
  autoReleased: Visitor | null
}

export function computeEnding(input: EndingInput): 'passed' | 'contaminated' | 'unclean' {
  const misjudges = input.records.filter((r) => !r.correct).length
  const releasedPseudo = input.records.some((r) => r.verdict === 'admit' && r.role !== 'human')
  const killedHuman = input.records.some((r) => r.verdict === 'execute' && r.role === 'human')
  const pseudoEntered = releasedPseudo || (input.autoReleased !== null && input.autoReleased.role !== 'human')

  if (input.sanTouchedBelow15 && killedHuman) return 'unclean'
  if (pseudoEntered) return 'contaminated'
  if (misjudges <= 1) return 'passed'
  return 'contaminated' // 误判 ≥2 但无伪人进门：归入污染（spec 未列第 4 结局，此为实现裁定）
}
