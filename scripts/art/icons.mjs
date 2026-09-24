// UI 图标（64×64，线条风，currentColor 不可用于 <img>，故固定米白 + 强调色）+ 手册墨线插图
import { svg, FILTERS } from './lib.mjs'

const C = '#e8e2cc', A = '#e0b050', R = '#d04030'
const st = (w = 3.2, c = C) => `fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"`

export const ICONS = {
  coffee: `<path d="M14 26h30v14a12 12 0 0 1-12 12h-6a12 12 0 0 1-12-12z" ${st()}/><path d="M44 30h4a6 6 0 0 1 0 12h-4" ${st()}/><path d="M22 10c-3 4 3 6 0 10M30 8c-3 4 3 6 0 10M38 10c-3 4 3 6 0 10" ${st(2.4, A)}/>`,
  sedative: `<path d="M32 56V26" ${st()}/><path d="M32 30c-14 0-20-10-20-20 12 0 20 8 20 20zM32 36c12 0 18-8 18-18-10 0-18 6-18 18z" ${st()}/><path d="M32 30 20 16M32 36l12-12" ${st(2, A)}/>`,
  axe: `<path d="M20 56 44 14" ${st(4, A)}/><path d="M38 10c8-2 16 2 20 10-6 6-14 8-22 4z" fill="${R}" stroke="${C}" stroke-width="2.6" stroke-linejoin="round"/>`,
  gun: `<path d="M8 20h44v10H26l-4 22H12l4-22H8z" ${st()}/><path d="M24 30c0 6 4 8 8 6" ${st(2.4)}/><circle cx="54" cy="25" r="3" fill="${A}"/>`,
  fire: `<path d="M32 58c-12 0-18-8-18-18 0-12 10-16 10-28 8 6 10 12 10 16 4-2 6-6 6-10 6 6 10 14 10 22 0 10-6 18-18 18z" ${st(3.2, A)}/><path d="M32 52c-5 0-8-4-8-8 0-6 6-8 8-14 4 6 8 8 8 14 0 4-3 8-8 8z" fill="${R}" opacity="0.8"/>`,
  eye: `<path d="M4 32c8-12 18-18 28-18s20 6 28 18c-8 12-18 18-28 18S12 44 4 32z" ${st()}/><circle cx="32" cy="32" r="9" ${st()}/><circle cx="32" cy="32" r="3.5" fill="${A}"/>`,
  id: `<rect x="6" y="14" width="52" height="36" rx="4" ${st()}/><circle cx="22" cy="30" r="6" ${st(2.4)}/><path d="M13 44c2-5 5-7 9-7s7 2 9 7" ${st(2.4)}/><path d="M38 26h14M38 34h14M38 42h8" ${st(2.4, A)}/>`,
  question: `<path d="M10 14h44v28H30l-12 10V42h-8z" ${st()}/><path d="M26 23c0-4 3-6 6-6s6 2 6 5c0 4-6 4-6 9" ${st(2.8, A)}/><circle cx="32" cy="36" r="1.8" fill="${A}"/>`,
  admit: `<rect x="12" y="8" width="30" height="48" rx="2" ${st()}/><path d="M42 12l10 4v36l-10 4" ${st()}/><path d="M18 32h14m-5-6 6 6-6 6" ${st(3, A)}/>`,
  execute: `<circle cx="32" cy="32" r="20" ${st(3.2, R)}/><circle cx="32" cy="32" r="4" fill="${R}"/><path d="M32 4v14M32 46v14M4 32h14M46 32h14" ${st()}/>`,
  contain: `<rect x="12" y="10" width="40" height="46" rx="4" ${st()}/><path d="M22 10v46M32 10v46M42 10v46" ${st(2.4)}/><rect x="26" y="28" width="12" height="10" rx="2" fill="${A}"/>`,
  lock: `<rect x="14" y="28" width="36" height="28" rx="4" ${st()}/><path d="M22 28v-8a10 10 0 0 1 20 0v8" ${st()}/><circle cx="32" cy="41" r="3.5" fill="${R}"/><path d="M32 44v5" ${st(3, R)}/>`,
  manual: `<path d="M32 16c-6-4-14-6-24-6v40c10 0 18 2 24 6 6-4 14-6 24-6V10c-10 0-18 2-24 6z" ${st()}/><path d="M32 16v40" ${st(2.4)}/><path d="M14 22h10M14 30h10M40 22h10M40 30h10" ${st(2, A)}/>`,
  sofa: `<path d="M12 34V22a6 6 0 0 1 6-6h28a6 6 0 0 1 6 6v12" ${st()}/><path d="M6 36a5 5 0 0 1 10 0v4h32v-4a5 5 0 0 1 10 0v12H6z" ${st()}/><path d="M12 48v6M52 48v6" ${st()}/><path d="M40 8l4 0-4 4h4" ${st(2, A)}/>`,
  door: `<rect x="14" y="6" width="36" height="52" rx="2" ${st()}/><circle cx="42" cy="34" r="2.5" fill="${A}"/><path d="M20 12h24v18H20z" ${st(2)}/>`,
  san: `<path d="M32 56S8 42 8 24a12 12 0 0 1 24-4 12 12 0 0 1 24 4c0 18-24 32-24 32z" ${st(3.2, R)}/><path d="M14 30h10l4-8 6 16 4-8h12" ${st(2.4, A)}/>`,
  sound: `<path d="M10 24h10l14-12v40L20 40H10z" ${st()}/><path d="M42 22c4 4 4 16 0 20M48 16c8 8 8 24 0 32" ${st(2.6, A)}/>`,
  mute: `<path d="M10 24h10l14-12v40L20 40H10z" ${st()}/><path d="M42 24l14 16M56 24 42 40" ${st(3, R)}/>`,
}

export const icon = (k) => svg(64, 64, '', ICONS[k])

// 手册墨线插图（泛黄纸 + 红圈标注）
const PAPER = '#e8dcc0', INK = '#2a2218', RED = '#a82418'
const ink = (w = 2.4) => `fill="none" stroke="${INK}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"`
const head = `<path d="M100 60c-34 0-54 26-54 62 0 40 22 70 54 70s54-30 54-70c0-36-20-62-54-62z" ${ink(3)}/><path d="M78 184c-2 12-4 20-12 28M122 184c2 12 4 20 12 28" ${ink()}/><path d="M36 240c14-18 36-26 64-26s50 8 64 26" ${ink(3)}/>`
const circle = (cx, cy, r) => `<ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${r * 0.8}" fill="none" stroke="${RED}" stroke-width="3" stroke-dasharray="6 3" transform="rotate(-8 ${cx} ${cy})"/>`
const label = (x, y, t) => `<text x="${x}" y="${y}" font-family="Courier New,monospace" font-size="14" font-weight="bold" fill="${RED}">${t}</text>`

export function manualArt(k) {
  let b = `<rect width="200" height="260" fill="${PAPER}"/><rect width="200" height="260" filter="url(#rough)" opacity="0.15"/>` + head
  if (k === 'skinfit') {
    b += `<path d="M78 112c6-4 14-4 18 0M104 112c6-4 14-4 18 0" ${ink()}/><path d="M86 118a4 3 0 1 0 1 0M112 116a4 4 0 1 0 1 0" ${ink(2)}/><path d="M86 160c8 3 20 3 28 0" ${ink()}/>`
    b += `<path d="M150 104c6 10 6 26 0 36" ${ink(3)}/><path d="M148 108l6 4-6 4 6 4-6 4 6 4-6 4" fill="none" stroke="${RED}" stroke-width="1.8"/>` + circle(152, 124, 18) + label(8, 30, 'SEAM / BLINK')
  } else if (k === 'coretick') {
    b += `<path d="M80 114h14M106 114h14" ${ink()}/><circle cx="87" cy="118" r="1.5" fill="${INK}"/><circle cx="113" cy="118" r="1.5" fill="${INK}"/><path d="M82 158c10 6 26 6 36 0" ${ink()}/>`
    b += `<circle cx="72" cy="232" r="8" fill="${INK}"/><path d="M60 232h-10M84 232h10M72 220v-8" stroke="${INK}" stroke-width="2"/>` + circle(72, 232, 22) + label(8, 30, 'TICK · COLLAR')
  } else if (k === 'wetnest') {
    b += `<path d="M78 112c6-2 14-2 18 0M104 112c6-2 14-2 18 0" ${ink()}/><path d="M86 160c8 2 20 2 28 0" ${ink()}/><path d="M92 170c-2 10 0 18 2 26M108 170c2 10 0 18-2 26" stroke="${INK}" stroke-width="1.6" stroke-dasharray="2 4"/>`
    b += `<path d="M150 200l10 30 8-26 8 26" ${ink(2.6)}/><path d="M156 212l4 2M164 210l4 2" stroke="${RED}" stroke-width="2"/>` + circle(162, 216, 22) + label(8, 30, 'WET · SINKS')
  } else if (k === 'infected') {
    b += `<path d="M78 114c6-2 14-2 18 0M104 114c6-2 14-2 18 0" ${ink()}/><path d="M84 158c10-4 22-4 32 0" ${ink()}/><path d="M100 196v16" ${ink(3)}/><path d="M96 206l4-6 4 6M96 196l4 6 4-6" stroke="${RED}" stroke-width="2" fill="none"/>`
    b += circle(100, 204, 18) + label(8, 30, 'THROAT · REVERSED')
  } else if (k === 'mirror') {
    b += `<path d="M78 114c6-2 14-2 18 0M104 114c6-2 14-2 18 0" ${ink()}/><circle cx="86" cy="118" r="2" fill="${INK}"/><circle cx="114" cy="118" r="2" fill="${INK}"/>`
    b += `<rect x="140" y="100" width="40" height="60" rx="4" ${ink(3)}/><text x="100" y="250" font-family="serif" font-size="36" font-weight="bold" fill="${RED}" opacity="0.3">???</text>`
  } else if (k === 'hollow') {
    b += `<path d="M78 114c6-2 14-2 18 0M104 114c6-2 14-2 18 0" ${ink()}/><circle cx="86" cy="118" r="8" fill="none" stroke="${INK}" stroke-width="2"/><circle cx="114" cy="118" r="8" fill="none" stroke="${INK}" stroke-width="2"/>`
    b += `<text x="100" y="250" font-family="serif" font-size="36" font-weight="bold" fill="${RED}" opacity="0.3">???</text>`
  } else if (k === 'crawler') {
    b += `<path d="M78 114c6-2 14-2 18 0M104 114c6-2 14-2 18 0" ${ink()}/><circle cx="86" cy="118" r="2" fill="${INK}"/><circle cx="114" cy="118" r="2" fill="${INK}"/>`
    b += `<path d="M40 240l20-20M160 240l-20-20" ${ink(3)}/><text x="100" y="250" font-family="serif" font-size="36" font-weight="bold" fill="${RED}" opacity="0.3">???</text>`
  } else {
    b += `<text x="100" y="150" font-family="serif" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">REDACTED</text>`
  }
  return svg(200, 260, FILTERS, b)
}
