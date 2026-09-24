import type { Item } from './schema'

export const ITEMS: Item[] = [
  { id: 'coffee', name: 'Coffee', desc: 'Warm. The machine\'s coffee keeps you awake a little longer.', effect: { san: 8, reaction: 20, constraint: 'Hands shake for 20s; the machine only pours two cups' } },
  { id: 'sedative', name: 'Sedative Leaf', desc: 'Chews like dry hay.', effect: { san: 0, constraint: 'San drains slower; reaction cap -30%; single use' } },
  { id: 'axe', name: 'Fire Axe', desc: 'Standard-issue blade.', effect: {} },
  { id: 'gun', name: 'Handgun', desc: 'For Core-ticks. Aim for the core under the collarbone.', effect: {} },
  { id: 'fire', name: 'Incinerator', desc: 'For Wet-nests.', effect: {} },
]
