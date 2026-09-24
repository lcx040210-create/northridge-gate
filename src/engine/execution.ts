import type { Visitor, Tool } from '../data/schema'
import { EXECUTIONS } from '../data/executions'

export interface ExecutionResult {
  success: boolean
  frames: string[]
  residue: string
  sanDelta: number
  radioDistort: boolean
  escaped: boolean
}

export function resolveExecution(visitor: Visitor, tool: Tool): ExecutionResult {
  const exec = EXECUTIONS[tool]
  const success = visitor.correctTool === tool
  if (success) {
    return {
      success: true,
      frames: exec.frames,
      residue: exec.residue,
      sanDelta: exec.onSuccess.san ?? 0,
      radioDistort: exec.onSuccess.radioDistort ?? false,
      escaped: false,
    }
  }
  return {
    success: false,
    frames: exec.frames,
    residue: exec.residue,
    sanDelta: exec.onFailure.san ?? -10,
    radioDistort: false,
    escaped: true,
  }
}
