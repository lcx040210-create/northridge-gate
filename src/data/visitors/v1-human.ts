import type { Visitor } from '../schema'

export const v1Human: Visitor = {
  id: 'v1-human', claimedName: '调度 · 林远', role: 'human', state: 'clean',
  portrait: '/assets/portraits/v1_human.svg',
  freezeFrames: ['/assets/portraits/v1_human.svg'],
  tells: { eye: '眼神正常。', id: '证件一致。', questions: [] },
  correctVerdict: 'admit',
  outcomes: { admit: { text: '放行。', san: 0 }, execute: { text: '误杀。', san: -15 }, contain: { text: '误收容。', san: -8 } },
}
