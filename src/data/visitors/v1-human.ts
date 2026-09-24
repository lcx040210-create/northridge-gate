import type { Visitor } from '../schema'

export const v1Human: Visitor = {
  id: 'v1-human',
  claimedName: 'Dispatcher · Daniel Cole',
  role: 'human',
  state: 'clean',
  portrait: './assets/portraits/v1_human_frame1.svg',
  freezeFrames: [
    './assets/portraits/v1_human_frame1.svg',
    './assets/portraits/v1_human_frame2.svg',
    './assets/portraits/v1_human_frame3.svg',
    './assets/portraits/v1_human_frame4.svg',
    './assets/portraits/v1_human_frame5.svg',
  ],
  attackFrame: './assets/portraits/v1_human_attack.svg',
  voice: 'human',
  greeting: '...Hey. Can you open the door? The rain is brutal. I\'m here to take the second half of the shift.',
  tells: {
    eye: 'Eyes look normal. Just annoyed about being soaked.',
    id: 'Photo matches the face. The teeth count lines up.',
    questions: [
      { q: 'What brings you here tonight?', a: 'Shift swap. Day shift said I\'d cover the second half.' },
      { q: 'Is it raining out there?', a: 'Pouring. Got soaked on the way over.' },
      { q: 'Anyone waiting for you at home?', a: '...My daughter. She said she\'d wait up for me. I promised to bring her warm milk.' },
    ],
  },
  correctVerdict: 'admit',
  outcomes: {
    admit: { text: 'The door opens a crack. He nods and steps in, and his shadow dissolves into the corridor.', san: 0 },
    execute: { text: 'You press execute. Red splashes across the glass. He falls, and does not move again.', san: -15 },
    contain: { text: 'He is dragged into the containment pod, shouting through the window all night.', san: -8 },
  },
}
