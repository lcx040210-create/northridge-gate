import type { Visitor } from '../schema'

export const v4Coretick: Visitor = {
  id: 'v4-coretick',
  claimedName: '替班 · 周齐',
  role: 'coretick',
  state: 'clean',
  portrait: '/assets/portraits/v4_coretick_frame1.png',
  freezeFrames: [
    '/assets/portraits/v4_coretick_frame1.png',
    '/assets/portraits/v4_coretick_frame2.png',
    '/assets/portraits/v4_coretick_frame3.png',
    '/assets/portraits/v4_coretick_frame4.png',
    '/assets/portraits/v4_coretick_frame5.png',
  ],
  glitchLine: '我来替班，你们，快开门',
  tells: {
    eye: '锁骨下方，有极轻的金属嘀嗒声。',
    id: '证件崭新得不像话，连折痕都没有。',
    questions: [
      { q: '今晚天气怎么样？', a: '和昨天一样。' },
      { q: '你替谁的班？', a: '上一班的人请假了，我顶。' },
    ],
  },
  correctVerdict: 'execute',
  correctTool: 'gun',
  outcomes: {
    admit: { text: '它走进门，嘀嗒声在走廊里放大。', san: -12 },
    execute: { text: '一枪命中锁骨下的核，它像断电一样倒下。', san: -5 },
    contain: { text: '收容舱里，那嘀嗒声整夜没停。', san: -8 },
  },
}
