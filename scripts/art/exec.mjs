// 处决定格叠层（透明 1000×1000，叠在窗景+人物之上）：第一人称武器 + 特效
import { rng, f, svg, FILTERS, radial, linear, cracks, splatter } from './lib.mjs'

const S = 1000
const DEFS = FILTERS +
  `<filter id="flame" x="-30%" y="-30%" width="160%" height="160%"><feTurbulence type="fractalNoise" baseFrequency="0.018 0.045" numOctaves="3" seed="8" result="t"/><feDisplacementMap in="SourceGraphic" in2="t" scale="70" xChannelSelector="R" yChannelSelector="G"/><feGaussianBlur stdDeviation="2"/></filter>` +
  `<filter id="smoke" x="-40%" y="-40%" width="180%" height="180%"><feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="4" seed="3" result="t"/><feDisplacementMap in="SourceGraphic" in2="t" scale="120" xChannelSelector="R" yChannelSelector="G"/><feGaussianBlur stdDeviation="10"/></filter>` +
  `<filter id="motion" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="14 3"/></filter>` +
  linear('axeHead', [[0, '#d83a2a'], [0.6, '#8a1810'], [1, '#3a0806']], 'x1="0" y1="0" x2="1" y2="1"') +
  linear('axeEdge', [[0, '#f4f6f6'], [1, '#8a9294']], 'x1="0" y1="0" x2="1" y2="0"') +
  linear('handle', [[0, '#e8c040'], [0.5, '#b08a18'], [1, '#5a4408']], 'x1="0" y1="0" x2="1" y2="0"') +
  linear('glove', [[0, '#3a3a36'], [1, '#0e0e0c']], 'x1="0" y1="0" x2="1" y2="1"') +
  linear('slide', [[0, '#4a4e52'], [0.5, '#1e2022'], [1, '#0a0b0c']], 'x1="0" y1="0" x2="1" y2="0"') +
  radial('flash', [[0, '#fffbe8', 1], [0.15, '#ffd070', 0.9], [0.45, '#ff7a20', 0.35], [1, '#ff5010', 0]]) +
  radial('whiteFlash', [[0, '#fff', 0.95], [0.3, '#fff', 0.5], [1, '#fff', 0]]) +
  radial('fireCore', [[0, '#fffbe0'], [0.3, '#ffd050'], [0.65, '#ff7010'], [1, '#a02000', 0]]) +
  linear('jet', [[0, '#fff4c0'], [0.3, '#ffb030'], [0.8, '#e04008'], [1, '#801000', 0]], 'x1="1" y1="1" x2="0" y2="0"') +
  linear('canister', [[0, '#6a7070'], [0.5, '#2a2e30'], [1, '#101214']], 'x1="0" y1="0" x2="1" y2="0"') +
  radial('orangeWash', [[0, '#ff9030', 0.5], [1, '#ff6010', 0.15]])

function glove(x, y, rot, scale = 1) {
  return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${scale})">
    <path d="M-70 40 C-80 -10 -60 -50 -20 -56 C20 -60 60 -40 70 -6 C78 26 60 70 20 90 L-40 110Z" fill="url(#glove)"/>
    ${[-36, -12, 12, 36].map((dx) => `<path d="M${dx - 12} -40 C${dx - 14} -70 ${dx + 14} -70 ${dx + 12} -40" fill="#222220" stroke="#000" stroke-width="2"/>`).join('')}
    <path d="M-60 0 C-30 -20 30 -22 64 -4" stroke="#5a5a54" stroke-width="3" fill="none" opacity="0.5"/>
    <path d="M-66 60 L-40 140 L60 140 L40 80Z" fill="#1a1c20"/>
  </g>`
}

function axe(x, y, rot, blur = false) {
  const g = `<g transform="translate(${x} ${y}) rotate(${rot})">
    <rect x="-16" y="-20" width="32" height="620" rx="12" fill="url(#handle)"/>
    <path d="M-14 -20 L-14 580" stroke="#fff6c0" stroke-width="3" opacity="0.4"/>
    <path d="M-40 -70 L40 -70 L50 20 L-30 30Z" fill="#2a2a2a"/>
    <path d="M30 -90 L190 -130 C220 -60 220 30 190 100 L30 60Z" fill="url(#axeHead)"/>
    <path d="M168 -124 C196 -60 196 34 168 96 L190 100 C220 30 220 -60 190 -130Z" fill="url(#axeEdge)"/>
    <path d="M-30 -80 L-120 -60 L-120 20 L-30 40Z" fill="#6a1410"/>
    <path d="M40 -60 L170 -96" stroke="#ff8070" stroke-width="3" opacity="0.4"/>
    ${glove(0, 420, 10, 1.1)}
  </g>`
  return blur ? `<g filter="url(#motion)" opacity="0.85">${g}</g>` : g
}

function pistol(dy, rec = 0) {
  return `<g transform="translate(500 ${760 + dy + rec})">
    <path d="M-60 -10 L60 -10 L90 260 L-90 260Z" fill="url(#glove)"/>
    <path d="M-44 -200 L44 -200 L70 20 L-70 20Z" fill="url(#slide)"/>
    <path d="M-44 -200 L44 -200 L46 -186 L-46 -186Z" fill="#6a7074"/>
    ${Array.from({ length: 8 }, (_, i) => `<line x1="${-62 + i * 4}" y1="${-40 + i * 6}" x2="${-50 + i * 4}" y2="${-40 + i * 6}" stroke="#000" stroke-width="2"/>`).join('')}
    <rect x="-8" y="-236" width="16" height="36" fill="#0a0a0a"/><circle cx="0" cy="-232" r="3" fill="#e8f080"/>
    <rect x="-44" y="-40" width="26" height="30" fill="#0a0a0a"/><rect x="18" y="-40" width="26" height="30" fill="#0a0a0a"/>
    <circle cx="-31" cy="-32" r="3" fill="#e8f080"/><circle cx="31" cy="-32" r="3" fill="#e8f080"/>
    ${glove(-110, 90, -14, 1.2)}${glove(110, 100, 14, 1.2)}
  </g>`
}

function canister(dx = 0, pilot = true) {
  return `<g transform="translate(${760 + dx} 700) rotate(-28)">
    <rect x="-24" y="-260" width="48" height="340" rx="6" fill="url(#canister)"/>
    <rect x="-34" y="-280" width="68" height="30" rx="4" fill="#1a1c1e"/>
    <rect x="-10" y="-330" width="20" height="60" fill="#3a3e40"/>
    <rect x="-40" y="-100" width="80" height="16" fill="#b82010"/>
    ${pilot ? `<ellipse cx="0" cy="-344" rx="10" ry="18" fill="#60a0ff" opacity="0.85" filter="url(#glow)"/><ellipse cx="0" cy="-348" rx="4" ry="9" fill="#e0f0ff"/>` : ''}
    <rect x="-60" y="60" width="120" height="260" rx="30" fill="#2a2c2a"/>
    ${glove(0, 40, 0, 1)}
  </g>`
}

export function execFrames(tool) {
  const r = rng(tool.length * 13)
  const frames = []
  if (tool === 'axe') {
    frames.push(axe(800, 380, -38))
    frames.push(`<path d="M900 100 C700 200 560 360 520 520" stroke="#fff" stroke-width="40" opacity="0.18" fill="none" filter="url(#motion)"/>` + axe(620, 470, 22, true))
    frames.push(`<circle cx="500" cy="420" r="380" fill="url(#whiteFlash)"/>` + splatter(500, 420, 180, 90, 31, '#1a0306') + cracks(500, 420, 16, 360, 32) + axe(430, 520, 58))
    frames.push(`<g opacity="0.9">${splatter(520, 440, 140, 60, 33, '#1a0306')}</g>` + axe(840, 700, 80) + Array.from({ length: 6 }, (_, i) => `<ellipse cx="${f(700 + i * 12)}" cy="${f(800 + r() * 120)}" rx="3" ry="7" fill="#2a0406"/>`).join(''))
  } else if (tool === 'gun') {
    frames.push(pistol(0))
    frames.push(`<rect width="${S}" height="${S}" fill="url(#orangeWash)"/><circle cx="500" cy="520" r="330" fill="url(#flash)"/>` +
      Array.from({ length: 10 }, (_, i) => { const a = (i / 10) * Math.PI * 2; return `<path d="M500 520 L${f(500 + Math.cos(a) * 240)} ${f(520 + Math.sin(a) * 240)} L${f(500 + Math.cos(a + 0.12) * 60)} ${f(520 + Math.sin(a + 0.12) * 60)}Z" fill="#fff6d0" opacity="0.8"/>` }).join('') +
      pistol(0, 40) + `<rect x="620" y="440" width="18" height="30" rx="3" fill="#c8a040" transform="rotate(30 629 455)"/>`)
    frames.push(`<circle cx="500" cy="330" r="200" fill="url(#whiteFlash)" opacity="0.8"/>` + splatter(500, 330, 140, 110, 41, '#0a0d10') +
      Array.from({ length: 34 }, () => { const a = r() * Math.PI * 2, l = 60 + r() * 260; return `<line x1="500" y1="330" x2="${f(500 + Math.cos(a) * l)}" y2="${f(330 + Math.sin(a) * l)}" stroke="${r() < 0.5 ? '#bfe8ff' : '#ffe8a0'}" stroke-width="${f(1 + r() * 3)}" opacity="${f(0.5 + r() * 0.5)}" filter="url(#glow)"/>` }).join('') +
      Array.from({ length: 12 }, () => `<rect x="${f(380 + r() * 240)}" y="${f(220 + r() * 220)}" width="${f(4 + r() * 10)}" height="${f(3 + r() * 6)}" fill="#8aa0b0" transform="rotate(${f(r() * 360)} 500 330)"/>`).join('') +
      cracks(500, 330, 14, 240, 42) + pistol(40))
    frames.push(`<g filter="url(#smoke)" opacity="0.5"><path d="M500 540 C470 460 540 400 500 300 C470 220 520 160 500 60" stroke="#c8c8c0" stroke-width="40" fill="none"/></g>` + pistol(120))
  } else {
    frames.push(canister(0))
    frames.push(`<g filter="url(#flame)"><path d="M620 440 L380 280 C300 260 260 340 320 420 C380 480 520 470 640 470Z" fill="url(#jet)"/><ellipse cx="380" cy="360" rx="130" ry="110" fill="url(#fireCore)"/></g><rect width="${S}" height="${S}" fill="url(#orangeWash)" opacity="0.6"/>` + canister(0))
    frames.push(`<rect width="${S}" height="${S}" fill="#ff6010" opacity="0.25"/><g filter="url(#flame)">` +
      Array.from({ length: 16 }, () => { const x = 250 + r() * 500, y = 900 - r() * 200, h = 300 + r() * 450, w = 60 + r() * 120; return `<path d="M${f(x - w)} ${f(y)} C${f(x - w)} ${f(y - h * 0.5)} ${f(x)} ${f(y - h * 0.7)} ${f(x + (r() - 0.5) * 40)} ${f(y - h)} C${f(x + w * 0.4)} ${f(y - h * 0.6)} ${f(x + w)} ${f(y - h * 0.4)} ${f(x + w)} ${f(y)}Z" fill="url(#fireCore)" opacity="${f(0.6 + r() * 0.4)}"/>` }).join('') +
      `</g>` + canister(40))
    frames.push(`<rect width="${S}" height="${S}" fill="#000" opacity="0.35"/><g filter="url(#smoke)" opacity="0.75">` +
      Array.from({ length: 5 }, (_, i) => `<path d="M${400 + i * 50} 900 C${360 + i * 50} 700 ${460 + i * 40} 500 ${420 + i * 50} 100" stroke="#2a2826" stroke-width="${60 + i * 10}" fill="none"/>`).join('') + `</g>` +
      Array.from({ length: 50 }, () => `<circle cx="${f(250 + r() * 500)}" cy="${f(200 + r() * 700)}" r="${f(1 + r() * 3)}" fill="#ff9a40" filter="url(#glow)" opacity="${f(0.3 + r() * 0.7)}"/>`).join('') + canister(120, false))
  }
  return frames.map((b) => svg(S, S, DEFS, b))
}
