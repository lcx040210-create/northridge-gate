// src/data/visitors/v4-coretick.ts
import type { Visitor } from '../schema'

export const v4Coretick: Visitor = {
  id: 'v4-coretick', claimedName: '替班 · 周齐', role: 'coretick', state: 'clean',
  portrait: '/assets/portraits/v4_coretick_frame1.svg',
  freezeFrames: ['/assets/portraits/v4_coretick_frame1.svg', '/assets/portraits/v4_coretick_frame2.svg', '/assets/portraits/v4_coretick_frame3.svg'],
  glitchLine: '我来替班，你们，快开门',
  tells: { eye: '锁骨下有金属嘀嗒声。', id: '证件崭新得不像话。', questions: [] },
  correctVerdict: 'execute', correctTool: 'gun',
  outcomes: { admit: { text: '放走。', san: -12 }, execute: { text: '命中核。', san: -5 }, contain: { text: '收容。', san: -8 } },
}
