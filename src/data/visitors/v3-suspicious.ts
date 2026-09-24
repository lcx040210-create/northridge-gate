import type { Visitor } from '../schema'

export const v3Suspicious: Visitor = {
  id: 'v3-suspicious',
  claimedName: 'Visitor · Sam Whitfield',
  role: 'human',
  state: 'clean',
  portrait: './assets/portraits/v3_suspicious_frame1.svg',
  freezeFrames: [
    './assets/portraits/v3_suspicious_frame1.svg',
    './assets/portraits/v3_suspicious_frame2.svg',
    './assets/portraits/v3_suspicious_frame3.svg',
    './assets/portraits/v3_suspicious_frame4.svg',
    './assets/portraits/v3_suspicious_frame5.svg',
  ],
  attackFrame: './assets/portraits/v3_suspicious_attack.svg',
  voice: 'suspicious',
  greeting: 'Please—please hurry, something followed me out there. I ran the whole way!',
  tells: {
    eye: 'His blinking rhythm is off, but it might just be nerves.',
    id: 'The ID is real, but the photo is worn almost blank.',
    questions: [
      { q: 'Why come at this hour?', a: 'I didn\'t want to. I was told this place could shelter me.' },
      { q: 'Do you know anyone inside?', a: 'My sister is on duty in there. She\'s... I can\'t remember.' },
      { q: 'What\'s your sister\'s name?', a: 'She\'s... Lynn. Yes, Lynn Whitfield. She said she\'s on the night shift tonight.' },
    ],
  },
  correctVerdict: 'admit',
  outcomes: {
    admit: { text: 'He steps in and lets out a long breath, sinking onto the bench.', san: 0 },
    execute: { text: 'You killed a man. The blood was real, and so was the warmth.', san: -20 },
    contain: { text: 'He is shoved into the pod, crying that he isn\'t one of them.', san: -15 },
  },
}
