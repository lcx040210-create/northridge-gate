import type { WorldText } from './schema'

export const WORLD_TEXT: WorldText[] = [
  { id: 'manual-missing', surface: 'manual', text: '《IDENTIFICATION MANUAL v0.4》 — two pages in the middle have been torn out.' },
  { id: 'drawer-note', surface: 'drawer', text: `A sticky note: "Don't trust anyone who says they're here to take over your shift."` },
  { id: 'radio-static', surface: 'radio', text: 'The radio sometimes spits out a busy tone from the laboratory.' },
  { id: 'lightbox', surface: 'lightbox', text: 'Lightbox: "NO DAYLIGHT ALLOWED". Outside the window, it is always night.' },
  { id: 'cabinet-label', surface: 'label', text: 'Armory: FIRE AXE (available), HANDGUN (available), the rest greyed out — "DAY SHIFT ONLY".' },

  // Background story text
  { id: 'poster-protocol', surface: 'poster1', text: 'Poster on the wall: [EMERGENCY PROTOCOL] From Night 19 onward, all outposts enter emergency mode. Identification failure tolerance: 0%.' },
  { id: 'poster-warning', surface: 'poster2', text: 'Red hazard sign: "INFECTED TRAITS: grey skin, dilated pupils, body temperature below 28°C. Execute on sight."' },
  { id: 'notice-board', surface: 'notice', text: 'Notice board: "Missing since Night 17: the former night guard of Checkpoint 3. Report any sighting of him — or of a body double — immediately." (Scrawled underneath in pencil: "he was here last night")' },
  { id: 'shelf-log', surface: 'shelf1', text: 'A folder on the shelf: 《NORTHRIDGE OUTPOST OPERATIONS LOG》 Night 16: "Tonight 1▓ people tried to get in. Only 3 were real."' },
  { id: 'shelf-report', surface: 'shelf2', text: 'A yellowed report: 《INVESTIGATION INTO THE ORIGIN OF THE REPLACEMENT EVENT》 "The origin is still undetermined. The number of impostors grows every night. Full lockdown advised,。"' },
  { id: 'shelf-memo', surface: 'shelf3', text: 'A memo: "Remember: impostors imitate people you know. Do not hesitate. Do not talk. Execute on sight." (On the back, in the same handwriting: "trust them")' },
  { id: 'desk-note', surface: 'desk', text: 'A note on the desk: "Night 18 record: misjudgment rate 2/8. Warning from HQ: one more mistake and I will be replaced. I don\'t want to become one of them."' },
  { id: 'door-sign', surface: 'doorsign', text: 'Label on the door: "EMERGENCY EXIT — evacuation only. Unauthorized opening triggers the alarm. The door is locked."' },
  { id: 'window-scratch', surface: 'windowmark', text: 'Scratches on the window frame: "They wait outside. Sometimes for hours. Do not open the window,。"' },
  { id: 'bed-diary', surface: 'bed', text: 'A diary by the bed: "Night 15: I saw myself standing outside the window. It smiled at me. I did not open the door. The next day it was gone."' },
  { id: 'sofa-magazine', surface: 'sofa', text: 'A magazine on the sofa: 《REPLACEMENT EVENT SPECIAL ISSUE》 "Impostor intelligence keeps evolving. Latest case: impersonating a wounded child to pass inspection."' },
  { id: 'supply-label', surface: 'supply', text: 'Supply locker label: "Emergency supplies: bandage ×2, sedative ×1 (used up), spare magazines ×3. Use sparingly."' },
]
