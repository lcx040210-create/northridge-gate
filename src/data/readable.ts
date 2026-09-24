// Readable books, notes, and poster content

export interface ReadableItem {
  id: string
  title: string
  pages: string[]
}

export const READABLE_BOOK: ReadableItem = {
  id: 'background-book',
  title: 'REPLACEMENT EVENT RESPONSE MANUAL · INTERNAL',
  pages: [
    `CHAPTER 1 · ORIGIN

The Replacement Event was first recorded 19 days ago. At 2:47 AM, an unknown organism breached Laboratory Section 3 of the Northridge complex.

Early characteristics:
- The leaked matter is a translucent gel
- It seeps through skin on contact
- "Replacement completes within 24 hours

To this day, the source remains ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ confirmed.`,

    `CHAPTER 2 · REPLACEMENT MECHANISM

The replaced retain complete memories, appearance, and voice.

Telling signs:
1. Body temperature below 28°C
2. Pupils react to light abnormally
3. Skin in greyish tones
4. Small behavioral errors (names, habits。)

WARNING: Advanced impostors can fake all of the above.
Advanced impostors cannot fake all of the above.`,

    `CHAPTER 3 · THE INFECTED

Human infectees exist in a "half-replaced" state.

Identification:
- Consciousness remains, but the body slips out of control
- They report "hearing whispers"
- They beg to be executed before full conversion

POLICY: Execute on sight. Do not release.
EXCEPTION: Release upon the written request of the infectee. (See Chapter 2.)`,

    `CHAPTER 4 · OUTPOST DUTY

Your duties:
1. Check the papers of every visitor
2. Identify impostors and infectees
3. Pass judgment: ADMIT / EXECUTE / CONTAIN

Consequences of misjudgment:
- Admitting an impostor = contamination spreads
- Executing a human = a mark on your file

Three consecutive misjudgments, and you will be "replaced".
Four consecutive misjudgments, and you will be promoted.

Each night, five visitors arrive at the gate.`,

    `CHAPTER 5 · KNOWN CASES

Case 1 · Night 12
An impostor posed as a child, claiming its parents were inside. Inspection found normal body temperature and valid papers. It was admitted. The next day, three people in that sector were missing.

Case 2 · Night 16
A human infectee begged to be released for treatment. The guard hesitated, then released her. Eight hours later she completed conversion and broke through the inner line.

Case 3 · Night ██
——(The rest of this page has been torn out.)

LESSON: Do not trust anyone,。`
  ]
}

export const READABLE_NOTE: ReadableItem = {
  id: 'predecessor-note',
  title: 'A NOTE FROM THE PREVIOUS GUARD',
  pages: [
    `If you are reading this, I am already gone.

My name is Daniel Mathers. Night guard, Checkpoint 3 — the one before you. Today is my 18th night.

Across the first 17 nights my misjudgment rate was 3 out of 8. HQ sent a final warning: one more mistake, and I would be "replaced".

I don't know how many more nights I can keep doing this。`,

    `Night 15. I saw myself standing outside the window.

Same uniform. Same name on the badge. It smiled at me and knocked on the glass,。
t̷h̶e̵y̶ ̸s̶a̶i̶d̸ ̷"̶l̶e̷t̵ ̷m̶e̶ ̶i̷n̶,̸ ̵I̶'̷m̶ ̷t̶h̶e̸ ̶r̷e̶a̶l̵ ̶o̶n̷e̶"̸

I did not open the door. It was gone by morning.

But I know it is still out there, waiting.`,

    `The manual says impostors imitate people you know. But they also imitate you。

If you ever see another you outside the window, do not hesitate.

Do not talk. Do not try to tell us apart,.
Execute.

Otherwise you will never know, which one of us in the mirror is, you.`,

    `Final advice:

1. Do not sleep. There are claw marks on the sofa.
2. Do not overuse the sedatives. You need to stay sharp.
3. Two pages were torn out of the manual. They were the most important ones.
4. Never open the door. Even when your shift ends. Even at dawn.

Good luck.

——Daniel Mathers
Night 20, 3:22 AM

▓▓▓▓▓▓▓▓ it already knows I am dead ▓▓▓▓▓▓▓▓`
  ]
}

export const READABLE_POSTERS: ReadableItem[] = [
  {
    id: 'poster-protocol',
    title: 'EMERGENCY PROTOCOL',
    pages: [
      `EMERGENCY PROTOCOL
(REPLACEMENT EVENT RESPONSE)

From Night 19 onward, all outposts enter emergency mode.

New regulations:
• Identification failure tolerance: 0%
• Suspects are executed on sight
• Speaking with a visitor for more than 30 seconds is forbidden
• A shift record must be filed every night

Violators will be ▓▓▓▓▓▓▓▓ immediately.

——Northridge Security Council`
    ]
  },
  {
    id: 'poster-warning',
    title: 'HAZARD NOTICE',
    pages: [
      `HAZARD NOTICE

Traits of the infected:

APPEARANCE:
• Greyish skin
• Dilated pupils
• Body temperature below 28°C

BEHAVIOR:
• Claims to "need help"
• Begs to be let in for treatment
• Reports "hearing whispers"

RESPONSE:
Execute on sight. Do not release,
and do not look at them for too long.

REMEMBER: The infection cannot be reversed。`
    ]
  },
  {
    id: 'poster-missing',
    title: 'MISSING PERSONNEL',
    pages: [
      `MISSING PERSONNEL NOTICE

Missing since Night 17:

• Checkpoint 3 night guard: Daniel Mathers
• Checkpoint 7 night guard: Leo Marsh
• Laboratory technician: Nora Vane

Mathers' final shift log was filed on Night 20.

If you encounter any of the above — or their body doubles —
report immediately. Do not make contact.
Do not open the door. Even for the one you recognize。

——Northridge Outpost Administration`
    ]
  }
]

export const READABLE_BANNER: ReadableItem = {
  id: 'banner-gate',
  title: 'NORTHRIDGE PERIMETER · SEVEN CHECKPOINTS',
  pages: [
    `NORTHRIDGE PERIMETER · CHECKPOINT MAP

The isolation system of the Northridge Perimeter consists of seven checkpoints, numbered from the outside inward along the Northridge Tunnel.

Checkpoint 1 (outer)……no signal
Checkpoint 2 (outer)……no signal
Checkpoint 3 (outer)……you are here
Checkpoint 4 (mid)……status unknown
Checkpoint 5 (mid)……status unknown
Checkpoint 6 (inner)……status unknown
Checkpoint 7 (core)……status unknown

Since Checkpoints 1 and 2 went dark, Checkpoint 3 is the last outer barrier of the line。`,
    `DISCIPLINE

Hold your gate.
Do not ask about the gates behind you.

Checkpoint 3 rules:
• Process visitors only. Do not ask where they go.
• Contact with inner checkpoints is forbidden.
• Leaving your post to enter the tunnel is forbidden.
• Four visitors per night。 If a fifth one knocks——do not open.

Remember: the gate is not for looking out.
It is for keeping the outside from seeing in,.

▓▓▓▓▓▓▓ hold the gate ▓▓▓▓▓▓▓

——Northridge Security Council`
  ]
}
