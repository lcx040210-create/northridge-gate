import type { Visitor } from '../schema'

export const v3Suspicious: Visitor = {
  id: 'v3-suspicious',
  claimedName: '访客 · 何夕',
  role: 'human',
  state: 'clean',
  portrait: '/assets/portraits/v3_suspicious_frame1.svg',
  freezeFrames: [
    '/assets/portraits/v3_suspicious_frame1.svg',
    '/assets/portraits/v3_suspicious_frame2.svg',
    '/assets/portraits/v3_suspicious_frame3.svg',
    '/assets/portraits/v3_suspicious_frame4.svg',
    '/assets/portraits/v3_suspicious_frame5.svg',
  ],
  tells: {
    eye: '他眨眼节奏有点乱，但可能只是紧张。',
    id: '证件是真的，只是照片磨得很旧。',
    questions: [
      { q: '为什么半夜来？', a: '我也不想，接到通知说这里能避一避。' },
      { q: '认识里面的人吗？', a: '我妹妹在里面值班，叫……我记不清了。' },
    ],
  },
  correctVerdict: 'admit',
  outcomes: {
    admit: { text: '他进去后长舒一口气，瘫坐在长椅上。', san: 0 },
    execute: { text: '你杀了一个人。血是真的，温度也是真的。', san: -20 },
    contain: { text: '他被塞进收容舱，哭着说自己不是。', san: -15 },
  },
}
