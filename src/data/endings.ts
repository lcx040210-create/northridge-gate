import type { Ending } from './schema'

export const ENDINGS: Ending[] = [
  { id: 'passed', condition: '≤1 misjudgment, no impostor escaped', lines: ['Most of tonight\'s stamps landed right.', 'Dawn breaks.'] },
  { id: 'contaminated', condition: 'an impostor entered, or one flipped', lines: ['Something has already gone inside.', 'Dawn breaks, but the facility is no longer clean.'] },
  { id: 'unclean', condition: 'San<15 at some point and ≥1 wrongful kill', lines: ['In the mirror, you blink.', 'The other eye lags one frame behind.'] },
]
