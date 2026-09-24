import type { Visitor } from '../schema'

export const v2Skinfit: Visitor = {
  id: 'v2-skinfit', claimedName: '维修 · 陈默', role: 'skinfit', state: 'clean',
  portrait: '/assets/portraits/v2_skinfit_frame1.svg',
  freezeFrames: ['/assets/portraits/v2_skinfit_frame1.svg', '/assets/portraits/v2_skinfit_frame2.svg', '/assets/portraits/v2_skinfit_frame3.svg'],
  glitchLine: '我是来修灯的。。灯的线路出了问题',
  tells: { eye: '他眨眼，两只眼睛节奏不一样。', id: '证件牙齿数对不上。', questions: [] },
  correctVerdict: 'execute', correctTool: 'axe',
  outcomes: { admit: { text: '放走伪人。', san: -10 }, execute: { text: '斧落。', san: 0 }, contain: { text: '收容。', san: -8 } },
}
