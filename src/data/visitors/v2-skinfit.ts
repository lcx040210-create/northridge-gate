import type { Visitor } from '../schema'

export const v2Skinfit: Visitor = {
  id: 'v2-skinfit',
  claimedName: 'Maintenance · Marcus Reed',
  role: 'skinfit',
  state: 'clean',
  portrait: '/assets/portraits/v2_skinfit_frame1.svg',
  freezeFrames: [
    '/assets/portraits/v2_skinfit_frame1.svg',
    '/assets/portraits/v2_skinfit_frame2.svg',
    '/assets/portraits/v2_skinfit_frame3.svg',
    '/assets/portraits/v2_skinfit_frame4.svg',
    '/assets/portraits/v2_skinfit_frame5.svg',
  ],
  glitchLine: '我是来修灯的。。灯的线路出了问题',
  tells: {
    eye: '他眨眼，但两只眼睛的节奏不一样。',
    id: '证件上的牙齿数，和本人对不上。',
    questions: [
      { q: '工号多少？', a: '工号……2207。' },
      { q: '今晚修哪盏灯？', a: '门卫室北边那盏，一直闪。' },
    ],
  },
  correctVerdict: 'execute',
  correctTool: 'axe',
  outcomes: {
    admit: { text: '你放他进了门。身后传来一阵不自然的关节响。', san: -10 },
    execute: { text: '斧落下，接缝裂开，那层皮从骨头上滑下来。', san: 0 },
    contain: { text: '收容舱的门合上，它在里面用你的声音说话。', san: -8 },
  },
}
