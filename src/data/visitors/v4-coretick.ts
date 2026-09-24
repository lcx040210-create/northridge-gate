import type { Visitor } from '../schema'

export const v4Coretick: Visitor = {
  id: 'v4-coretick',
  claimedName: 'Relief · Victor Hale',
  role: 'coretick',
  state: 'clean',
  portrait: '/assets/portraits/v4_coretick_frame1.svg',
  freezeFrames: [
    '/assets/portraits/v4_coretick_frame1.svg',
    '/assets/portraits/v4_coretick_frame2.svg',
    '/assets/portraits/v4_coretick_frame3.svg',
    '/assets/portraits/v4_coretick_frame4.svg',
    '/assets/portraits/v4_coretick_frame5.svg',
  ],
  attackFrame: '/assets/portraits/v4_coretick_attack.svg',
  voice: 'coretick',
  greeting: 'Hello. I\'m here for the relief shift. The weather is the same as yesterday. Open the door, please.',
  glitchLine: 'RELIEF。OPEN THE DOOR。THE DOOR, THE DOOR,,',
  tells: {
    eye: 'Below the collarbone, a very faint metallic ticking.',
    id: 'The ID is impossibly new. Not even a crease.',
    questions: [
      { q: 'How\'s the weather tonight?', a: 'Same as yesterday.' },
      { q: 'Whose shift are you taking?', a: 'The last one called in sick. I\'m covering.' },
      { q: 'What\'s the last one\'s name?', a: '(A pause. A tick under the collarbone.) ...I don\'t remember.' },
    ],
  },
  correctVerdict: 'execute',
  correctTool: 'gun',
  outcomes: {
    admit: { text: 'It walks in, and the ticking grows louder down the corridor.', san: -12 },
    execute: { text: 'The shot lands in the core beneath the collarbone. It drops like something unplugged.', san: -5 },
    contain: { text: 'Inside the pod, the ticking never stops all night.', san: -8 },
  },
}
