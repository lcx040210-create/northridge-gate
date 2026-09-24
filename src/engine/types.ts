import type { Visitor, Verdict, Tool, Outcome } from '../data/schema'

export interface Judgment {
  verdict: Verdict
  tool?: Tool
  correct: boolean       // 判定是否正确（含工具）
  escaped: boolean       // 用错工具导致逃走
  outcome: Outcome
}

export interface VisitorRecord {
  visitorId: string
  role: Visitor['role']
  state: Visitor['state']
  correctTool?: Tool
  verdict: Verdict
  tool?: Tool
  correct: boolean
  escaped: boolean
  sanAtJudge: number
}

export type Phase = 'opening' | 'visitor' | 'dawn'

export interface GameState {
  phase: Phase
  san: number
  reaction: number
  reactionMax: number
  ventilationOn: boolean
  sofaUsed: boolean
  coffeeUsed: number
  sedativeUsed: boolean
  hallucinationTriggered: boolean
  visitorIndex: number
  records: VisitorRecord[]
  autoReleased: Visitor | null
  sanTouchedBelow15: boolean
}
