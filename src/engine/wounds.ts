import type { Visitor, Tool } from '../data/schema'

export interface WoundEffect {
  type: 'hit' | 'miss'
  location: string
  visual: 'crack' | 'bullet_hole' | 'burn' | 'slash'
}

export function calculateWound(visitor: Visitor, tool: Tool, success: boolean): WoundEffect {
  if (success) {
    // 成功击杀
    if (tool === 'axe') {
      return { type: 'hit', location: visitor.role === 'skinfit' ? 'neck_seam' : 'torso', visual: 'slash' }
    } else if (tool === 'gun') {
      return { type: 'hit', location: visitor.role === 'coretick' ? 'core' : 'head', visual: 'bullet_hole' }
    } else if (tool === 'fire') {
      return { type: 'hit', location: 'full_body', visual: 'burn' }
    }
  } else {
    // 失败 - 轻伤但逃走
    if (tool === 'axe') {
      return { type: 'miss', location: 'shoulder', visual: 'slash' }
    } else if (tool === 'gun') {
      return { type: 'miss', location: Math.random() > 0.5 ? 'shoulder' : 'abdomen', visual: 'bullet_hole' }
    } else if (tool === 'fire') {
      return { type: 'miss', location: 'arm', visual: 'burn' }
    }
  }

  return { type: 'miss', location: 'none', visual: 'crack' }
}
