import type { Visitor } from '../schema'

export const v1Human: Visitor = {
  id: 'v1-human',
  claimedName: 'Dispatcher · Daniel Cole',
  role: 'human',
  state: 'clean',
  portrait: '/assets/portraits/v1_human_frame1.svg',
  freezeFrames: [
    '/assets/portraits/v1_human_frame1.svg',
    '/assets/portraits/v1_human_frame2.svg',
    '/assets/portraits/v1_human_frame3.svg',
  ],
  attackFrame: '/assets/portraits/v1_human_attack.svg',
  voice: 'human',
  greeting: '……嘿。能开一下门吗？雨太大了，我是来接后半夜的班的。',
  tells: {
    eye: '眼神正常，只是被雨淋得有点烦。',
    id: '证件照片和本人一致，牙齿数对得上。',
    questions: [
      { q: '今晚来做什么？', a: '换班的，白班说让我来顶后半夜。' },
      { q: '窗外在下雨吗？', a: '下大了，来的路上淋透了。' },
      { q: '家里还有人等你吗？', a: '……我女儿。她说等我回去，给她带杯热牛奶。' },
    ],
  },
  correctVerdict: 'admit',
  outcomes: {
    admit: { text: '门开了一条缝，他点头进去，影子消失在走廊。', san: 0 },
    execute: { text: '你按下处决。玻璃上溅开，那人倒下去，没有再动。', san: -15 },
    contain: { text: '他被拖进收容舱，隔着窗喊了整夜。', san: -8 },
  },
}
