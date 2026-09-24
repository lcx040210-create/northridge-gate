export interface ManualEntry {
  key: string
  name: string
  tells: string
  response: string
  locked: boolean
}

export const MANUAL_ENTRIES: ManualEntry[] = [
  { key: 'skinfit', name: 'Skin-fit', tells: 'A seam runs from behind the ear down the neck; the two eyes blink out of sync; the teeth in the ID photo never match the mouth.', response: 'Fire Axe. Cut the seam.', locked: false },
  { key: 'coretick', name: 'Core-tick', tells: 'A metal ticking under the collarbone, the temples glint sometimes; pupils pin-sized; ask about the weather and it only ever answers "same as yesterday".', response: 'Handgun. Aim for the core.', locked: false },
  { key: 'wetnest', name: 'Wet-nest', tells: 'Webbing glints between the fingers, its breath sinks instead of rising; refuses water; the voice carries a wet sound.', response: 'Incinerator.', locked: false },
  { key: 'infected', name: 'Infected', tells: 'Still human, but the throat slides the wrong way; suddenly begs you to "open the door".', response: 'Contain. Do not kill.', locked: false },
  { key: 'mirror', name: 'Mirror', tells: '???', response: '???', locked: true },
  { key: 'hollow', name: 'Hollow', tells: '???', response: '???', locked: true },
  { key: 'crawler', name: 'Crawler', tells: '???', response: '???', locked: true },
]
