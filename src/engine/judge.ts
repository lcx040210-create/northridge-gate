import type { Visitor, Verdict, Tool } from '../data/schema'
import type { Judgment } from './types'

export function resolveVerdict(visitor: Visitor, verdict: Verdict, tool?: Tool): Judgment {
  const correctVerdict = verdict === visitor.correctVerdict
  let toolCorrect = true
  let escaped = false
  // 只有「该处决的伪人」用错工具才算逃逸；杀错目标不算逃逸
  if (verdict === 'execute' && visitor.correctVerdict === 'execute' && visitor.correctTool) {
    toolCorrect = tool === visitor.correctTool
    escaped = !toolCorrect
  }
  const correct = correctVerdict && toolCorrect
  const outcome = visitor.outcomes[verdict] ?? { text: '', san: 0 }
  return { verdict, tool, correct, escaped, outcome }
}
