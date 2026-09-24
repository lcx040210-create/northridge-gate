export interface Weapon {
  id: 'axe' | 'gun' | 'fire'
  name: string
  desc: string
  locked: boolean
  constraint?: string
}

export const WEAPONS: Weapon[] = [
  { id: 'axe', name: 'Fire Axe', desc: 'Standard-issue blade.', locked: false },
  { id: 'gun', name: 'Handgun', desc: 'For Core-ticks. Aim for the core under the collarbone.', locked: false },
  { id: 'fire', name: 'Incinerator', desc: 'For Wet-nests.', locked: false },
]

export interface Consumable {
  id: 'coffee' | 'sedative'
  name: string
  desc: string
  constraint: string
}

export const CONSUMABLES: Consumable[] = [
  { id: 'coffee', name: 'Coffee', desc: 'Warm. The machine\'s coffee keeps you awake a little longer.', constraint: 'Hands shake for 20s; the machine only pours two cups' },
  { id: 'sedative', name: 'Sedative Leaf', desc: 'Chews like dry hay.', constraint: 'San drains slower; reaction cap -30%; single use' },
]
