import type { Visitor } from '../schema'

export const v2Skinfit: Visitor = {
  id: 'v2-skinfit',
  claimedName: 'Maintenance · Marcus Reed',
  role: 'skinfit',
  state: 'clean',
  portrait: './assets/portraits/v2_skinfit_frame1.svg',
  freezeFrames: [
    './assets/portraits/v2_skinfit_frame1.svg',
    './assets/portraits/v2_skinfit_frame2.svg',
    './assets/portraits/v2_skinfit_frame3.svg',
    './assets/portraits/v2_skinfit_frame4.svg',
    './assets/portraits/v2_skinfit_frame5.svg',
  ],
  attackFrame: './assets/portraits/v2_skinfit_attack.svg',
  voice: 'skinfit',
  greeting: 'Good evening. I\'m here to fix the light. The light. Your light, it\'s broken.',
  glitchLine: 'LIGHT BROKEN。FIX THE LIGHT。THE LIGHT,,',
  tells: {
    eye: 'He blinks, but his two eyes are not on the same rhythm.',
    id: 'The teeth count on his ID never matches his mouth.',
    questions: [
      { q: 'Badge number?', a: 'Badge... 2207.' },
      { q: 'Which light are you fixing tonight?', a: 'The one north of the guardroom. It\'s been flickering.' },
      { q: 'What\'s that behind your ear?', a: '(It pauses)... Shaving. Slipped.' },
    ],
  },
  correctVerdict: 'execute',
  correctTool: 'axe',
  outcomes: {
    admit: { text: 'You let him in. Behind you, something clicks in a way joints shouldn\'t.', san: -10 },
    execute: { text: 'The axe falls, the seam splits, and the skin slides off the bones.', san: 0 },
    contain: { text: 'The pod door seals. Inside, it speaks with your voice.', san: -8 },
  },
}
