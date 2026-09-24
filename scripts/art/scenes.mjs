// 场景图层：观察窗外景、玻璃前景、幻觉/走廊叠层、残渣、标题/天亮/死亡
import { rng, f, svg, FILTERS, radial, linear, rain, droplets, cracks, splatter, grainOverlay, vignette } from './lib.mjs'

const S = 1000

// 窗外：雨夜检查站外廊（人物站在中间偏下）
export function windowScene({ dawn = false } = {}) {
  const r = rng(101)
  const sky = dawn ? [[0, '#3a4450'], [0.5, '#5a6470'], [1, '#2a3038']] : [[0, '#030507'], [0.6, '#0a1014'], [1, '#12181c']]
  let d = FILTERS + linear('sky', sky) +
    radial('lamp', [[0, '#ffd890', 0.95], [0.12, '#f0a040', 0.6], [0.4, '#a05a18', 0.18], [1, '#000', 0]]) +
    linear('cone', [[0, '#f0b060', 0.32], [1, '#f0b060', 0]]) +
    linear('ground', [[0, '#101418'], [1, '#050708']]) +
    linear('wall', [[0, '#1a2024'], [1, '#0e1215']]) +
    linear('fog', [[0, '#8a9aa4', 0], [0.6, '#8a9aa4', 0.12], [1, '#8a9aa4', 0.2]]) +
    `<clipPath id="coneC"><path d="M760 120 L520 1000 L1000 1000 L1000 300Z"/></clipPath>`
  let b = `<rect width="${S}" height="${S}" fill="url(#sky)"/>`
  // 远处建筑剪影 + 零星窗灯
  b += `<path d="M0 360 L0 250 L90 250 L90 200 L180 200 L180 270 L260 270 L260 180 L330 180 L330 300 L0 300Z" fill="#0b1013"/>`
  for (let i = 0; i < 9; i++) b += `<rect x="${f(20 + r() * 300)}" y="${f(200 + r() * 90)}" width="6" height="8" fill="#c8a860" opacity="${f(0.2 + r() * 0.5)}"/>`
  // 检查站外墙（混凝土板 + 接缝 + 水渍）
  b += `<rect x="0" y="300" width="${S}" height="420" fill="url(#wall)"/>`
  for (let x = 0; x < S; x += 160) b += `<line x1="${x}" y1="300" x2="${x}" y2="720" stroke="#050708" stroke-width="3" opacity="0.8"/>`
  b += `<line x1="0" y1="510" x2="${S}" y2="510" stroke="#050708" stroke-width="3" opacity="0.7"/>`
  b += `<rect x="0" y="300" width="${S}" height="420" filter="url(#rough)" fill="#000" opacity="0.5"/>`
  for (let i = 0; i < 18; i++) { const x = r() * S; b += `<path d="M${f(x)} ${f(300 + r() * 200)} q ${f((r() - 0.5) * 10)} 80 ${f((r() - 0.5) * 12)} ${f(120 + r() * 200)}" stroke="#000" stroke-width="${f(3 + r() * 10)}" opacity="0.25" filter="url(#blur4)"/>` }
  // 远端铁门（走廊尽头）
  b += `<rect x="410" y="330" width="180" height="330" fill="#07090a"/><rect x="420" y="340" width="160" height="320" fill="#101518" stroke="#222a2e" stroke-width="3"/>`
  b += `<rect x="440" y="360" width="120" height="60" fill="#050606"/><rect x="444" y="364" width="112" height="52" fill="#1a2a22" opacity="0.6"/>`
  b += `<rect x="555" y="500" width="12" height="36" rx="3" fill="#3a4448"/>`
  b += `<rect x="470" y="300" width="60" height="16" fill="#3a0606"/><rect x="474" y="303" width="52" height="10" fill="${dawn ? '#5a2020' : '#e03020'}" opacity="0.85" filter="url(#glow)"/>`
  // 警示条
  b += `<g opacity="0.75">${Array.from({ length: 26 }, (_, i) => `<path d="M${i * 40 - 20} 720 L${i * 40} 690 L${i * 40 + 20} 690 L${i * 40} 720Z" fill="#b89a20"/>`).join('')}</g><rect x="0" y="686" width="${S}" height="4" fill="#000" opacity="0.5"/>`
  // 标牌
  b += `<rect x="90" y="400" width="210" height="80" fill="#c8c4b0"/><rect x="96" y="406" width="198" height="68" fill="none" stroke="#2a2a26" stroke-width="2"/><text x="195" y="436" font-family="Arial Narrow, Arial, sans-serif" font-weight="bold" font-size="24" text-anchor="middle" fill="#1a1a18">CHECKPOINT 3</text><text x="195" y="462" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#3a3a36">NORTHRIDGE OUTPOST</text>`
  b += `<rect x="90" y="400" width="210" height="80" filter="url(#rough)" fill="#3a3020" opacity="0.6"/>`
  // 铁丝网（左）
  let mesh = ''
  for (let i = -20; i < 30; i++) mesh += `<line x1="${i * 18}" y1="300" x2="${i * 18 + 200}" y2="720" stroke="#6a7478" stroke-width="0.8"/><line x1="${i * 18 + 200}" y1="300" x2="${i * 18}" y2="720" stroke="#6a7478" stroke-width="0.8"/>`
  b += `<g opacity="0.16"><clipPath id="meshC"><rect x="0" y="300" width="80" height="420"/></clipPath><g clip-path="url(#meshC)">${mesh}</g></g>`
  // 地面（湿，反光）
  b += `<rect x="0" y="720" width="${S}" height="280" fill="url(#ground)"/>`
  b += `<ellipse cx="780" cy="820" rx="160" ry="26" fill="#f0a850" opacity="0.14" filter="url(#blur16)"/><rect x="770" y="730" width="18" height="260" fill="#f0b060" opacity="0.18" filter="url(#blur8)"/>`
  for (let i = 0; i < 14; i++) b += `<ellipse cx="${f(r() * S)}" cy="${f(760 + r() * 220)}" rx="${f(40 + r() * 120)}" ry="${f(4 + r() * 8)}" fill="#8aa0b0" opacity="${f(0.04 + r() * 0.08)}"/>`
  // 路灯（右上）
  b += `<rect x="900" y="0" width="14" height="140" fill="#0a0c0e"/><path d="M914 110 L760 110 L748 128 L800 128Z" fill="#14181a"/>`
  b += `<ellipse cx="770" cy="128" rx="30" ry="8" fill="#ffe0a0"/>`
  b += `<circle cx="770" cy="132" r="260" fill="url(#lamp)"/>`
  b += `<path d="M740 130 L480 1000 L1000 1000 L800 130Z" fill="url(#cone)" opacity="0.8"/>`
  // 雨：整体 + 灯锥中更亮
  b += rain(S, S, 420, 7, { color: '#8a9aa8', opacity: [0.08, 0.25] })
  b += `<g clip-path="url(#coneC)">${rain(S, S, 260, 9, { color: '#ffd8a0', opacity: [0.2, 0.55], len: [24, 60] })}</g>`
  // 雾
  b += `<rect x="0" y="400" width="${S}" height="600" fill="url(#fog)"/>`
  if (dawn) b += `<rect width="${S}" height="${S}" fill="#a0b0c0" opacity="0.18"/>`
  b += grainOverlay(S, S, 0.22)
  return svg(S, S, d, b)
}

// 玻璃前景层（透明）：金属窗框、铁丝夹层、水珠、雾气、裂痕、反光
export function windowGlass() {
  let d = FILTERS + linear('frameG', [[0, '#3a4044'], [0.5, '#1c2023'], [1, '#0a0c0d']]) +
    linear('condense', [[0, '#c8d4dc', 0], [0.7, '#c8d4dc', 0.08], [1, '#c8d4dc', 0.28]]) +
    linear('refl', [[0, '#fff', 0], [0.5, '#fff', 0.07], [1, '#fff', 0]], 'x1="0" y1="0" x2="1" y2="0"')
  let b = ''
  // 铁丝夹层玻璃（菱形网）
  let wire = ''
  for (let i = -30; i < 40; i++) wire += `<line x1="${i * 40}" y1="0" x2="${i * 40 + 1000}" y2="1000" stroke="#9aa4a8" stroke-width="0.7"/><line x1="${i * 40}" y1="1000" x2="${i * 40 + 1000}" y2="0" stroke="#9aa4a8" stroke-width="0.7"/>`
  b += `<g opacity="0.07">${wire}</g>`
  // 反光带
  b += `<path d="M120 0 L320 0 L0 700 L0 380Z" fill="url(#refl)" opacity="0.9"/><path d="M620 0 L680 0 L260 1000 L200 1000Z" fill="#fff" opacity="0.035"/>`
  // 水珠 + 冷凝
  b += droplets(S, S, 260, 33, 40)
  b += `<rect width="${S}" height="${S}" fill="url(#condense)"/>`
  b += `<path d="M300 900 C380 860 520 870 640 900" stroke="#000" stroke-width="40" opacity="0.08" fill="none" filter="url(#blur8)"/>`
  // 右上裂痕
  b += cracks(890, 110, 11, 150, 44, '#d8e2e6')
  // 窗框
  b += `<path d="M0 0 H1000 V1000 H0Z M60 60 V940 H940 V60Z" fill="url(#frameG)" fill-rule="evenodd"/>`
  b += `<path d="M60 60 H940 V940 H60Z" fill="none" stroke="#000" stroke-width="10" opacity="0.6" filter="url(#blur4)"/>`
  b += `<path d="M62 62 H938" stroke="#6a7478" stroke-width="2" opacity="0.6"/><path d="M62 938 H938" stroke="#000" stroke-width="3"/>`
  for (const [x, y] of [[30, 30], [500, 30], [970, 30], [30, 500], [970, 500], [30, 970], [970, 970]]) b += `<circle cx="${x}" cy="${y}" r="9" fill="#2a3034"/><circle cx="${x - 2}" cy="${y - 2}" r="5" fill="#5a6468"/><line x1="${x - 5}" y1="${y}" x2="${x + 5}" y2="${y}" stroke="#111" stroke-width="2"/>`
  // 对讲格栅（下沿）
  b += `<rect x="420" y="944" width="160" height="46" rx="6" fill="#15181a" stroke="#3a4044"/>`
  for (let i = 0; i < 12; i++) b += `<rect x="${432 + i * 12}" y="952" width="5" height="30" rx="2" fill="#050606"/>`
  b += `<circle cx="600" cy="966" r="6" fill="#40c060" opacity="0.8" filter="url(#glow)"/>`
  b += `<rect width="${S}" height="${S}" filter="url(#grain)" opacity="0.12"/>`
  b += vignette(S, S, 0.7)
  return svg(S, S, d, b)
}

// 幻觉：走廊地上多出一双鞋
export function shoes() {
  let b = `<ellipse cx="200" cy="930" rx="120" ry="16" fill="#000" opacity="0.6" filter="url(#blur8)"/>`
  for (const x of [150, 240]) {
    b += `<path d="M${x - 40} 925 C${x - 42} 900 ${x - 20} 890 ${x} 892 C${x + 10} 880 ${x + 40} 880 ${x + 44} 900 L${x + 46} 926 Z" fill="#141010"/><path d="M${x - 40} 925 L${x + 46} 926 L${x + 46} 932 L${x - 40} 932Z" fill="#050303"/><path d="M${x - 10} 892 C${x + 5} 886 ${x + 20} 886 ${x + 34} 892" stroke="#3a3030" stroke-width="2" fill="none"/><ellipse cx="${x + 10}" cy="890" rx="18" ry="4" fill="#fff" opacity="0.08"/>`
  }
  // 鞋上方淡淡的腿部轮廓（几乎看不见）
  b += `<path d="M120 880 L150 520 L180 520 L200 880Z M210 880 L230 520 L262 520 L280 880Z" fill="#000" opacity="0.18" filter="url(#blur16)"/>`
  return svg(S, S, FILTERS, b)
}

// 走廊尽头的人影（San 低时叠加）
export function corridorSilhouette() {
  let b = `<g filter="url(#blur2)" opacity="0.85"><ellipse cx="500" cy="420" rx="22" ry="28" fill="#000"/><path d="M470 450 C460 470 452 540 456 620 L470 660 L530 660 L544 620 C548 540 540 470 530 450Z" fill="#000"/><path d="M456 470 L430 600 L440 604 L466 490Z M544 470 L572 610 L562 614 L534 490Z" fill="#000"/></g>`
  b += `<circle cx="492" cy="416" r="2" fill="#e8e0d0" opacity="0.8"/><circle cx="508" cy="416" r="2" fill="#e8e0d0" opacity="0.8"/>`
  return svg(S, S, FILTERS, b)
}

// 残渣（玻璃上的处决痕迹，透明）
export function residue(tool) {
  let b = ''
  if (tool === 'axe') {
    b += splatter(520, 430, 150, 70, 5, '#1a0306')
    b += `<g opacity="0.6">${splatter(540, 460, 90, 30, 6, '#5a0a0c')}</g>`
    b += cracks(500, 420, 14, 300, 8)
    b += `<path d="M380 300 L640 560" stroke="#e8eef0" stroke-width="5" opacity="0.7"/><path d="M384 296 L644 556" stroke="#000" stroke-width="2" opacity="0.5"/>`
  } else if (tool === 'gun') {
    b += splatter(560, 360, 110, 90, 12, '#0a0d10')
    b += `<g opacity="0.8">${splatter(560, 360, 60, 40, 13, '#3a4a58')}</g>`
    b += cracks(500, 380, 16, 220, 14)
    b += `<circle cx="500" cy="380" r="9" fill="#000"/><circle cx="500" cy="380" r="14" fill="none" stroke="#e8eef0" stroke-width="2" opacity="0.7"/>`
  } else {
    b += `<ellipse cx="500" cy="520" rx="330" ry="380" fill="#0a0806" opacity="0.7" filter="url(#blur30)"/>`
    b += `<ellipse cx="500" cy="560" rx="200" ry="260" fill="#000" opacity="0.6" filter="url(#blur16)"/>`
    const r = rng(21)
    for (let i = 0; i < 22; i++) { const x = 240 + r() * 520; b += `<path d="M${f(x)} ${f(300 + r() * 300)} q 4 ${f(60 + r() * 160)} 0 ${f(120 + r() * 200)}" stroke="#1a1208" stroke-width="${f(3 + r() * 6)}" opacity="0.7" stroke-linecap="round"/>` }
    for (let i = 0; i < 40; i++) b += `<circle cx="${f(200 + r() * 600)}" cy="${f(200 + r() * 700)}" r="${f(1 + r() * 3)}" fill="#ff8a30" opacity="${f(0.3 + r() * 0.6)}" filter="url(#glow)"/>`
  }
  return svg(S, S, FILTERS, b)
}

// 死亡：玻璃爆碎 + 血色暗角
export function shatter() {
  let b = cracks(500, 460, 26, 700, 91, '#f0f4f6')
  const r = rng(92)
  for (let i = 0; i < 40; i++) {
    const x = r() * S, y = r() * S, s = 10 + r() * 50, a = r() * 360
    b += `<path d="M${f(x)} ${f(y)} l ${f(s)} ${f(s * 0.3)} l ${f(-s * 0.4)} ${f(s * 0.8)}Z" fill="#dfe8ee" opacity="${f(0.2 + r() * 0.4)}" transform="rotate(${f(a)} ${f(x)} ${f(y)})"/>`
  }
  return svg(S, S, FILTERS, b)
}
export function bloodVignette() {
  const d = FILTERS + radial('bv', [[0.35, '#300000', 0], [0.75, '#500000', 0.6], [1, '#1a0000', 0.95]])
  return svg(S, S, d, `<rect width="${S}" height="${S}" fill="url(#bv)"/>${splatter(80, 80, 180, 40, 3, '#3a0000')}${splatter(930, 900, 200, 40, 4, '#3a0000')}`)
}

// 标题/开场背景（1600×900）：值班室内看出去的观察窗
export function titleArt() {
  const W = 1600, H = 900
  const d = FILTERS + radial('tl', [[0, '#ffcf80', 0.9], [0.3, '#a05a18', 0.25], [1, '#000', 0]]) + linear('tw', [[0, '#0e1316'], [1, '#050708']])
  let b = `<rect width="${W}" height="${H}" fill="#050606"/>`
  b += `<rect x="440" y="120" width="720" height="440" fill="url(#tw)"/>`
  b += `<circle cx="1050" cy="160" r="260" fill="url(#tl)"/>`
  b += `<clipPath id="tc"><rect x="440" y="120" width="720" height="440"/></clipPath><g clip-path="url(#tc)">${rain(W, H, 300, 5, { opacity: [0.1, 0.35] })}</g>`
  // 窗外人影
  b += `<g opacity="0.95"><ellipse cx="800" cy="330" rx="46" ry="58" fill="#000"/><path d="M700 560 C700 450 740 400 800 396 C860 400 900 450 900 560Z" fill="#000"/></g>`
  b += `<circle cx="784" cy="324" r="3" fill="#e8e0d0"/><circle cx="816" cy="324" r="3" fill="#e8e0d0" opacity="0.6"/>`
  b += `<path d="M0 0 H${W} V${H} H0Z M440 120 V560 H1160 V120Z" fill="#0a0c0d" fill-rule="evenodd"/>`
  b += `<rect x="430" y="110" width="740" height="460" fill="none" stroke="#2a3034" stroke-width="20"/>`
  b += `<rect x="340" y="600" width="920" height="60" fill="#14181a"/><rect x="340" y="600" width="920" height="6" fill="#2a3236"/>`
  b += droplets(W, H, 120, 7, 120).replace(/<g /g, '<g clip-path="url(#tc)" ')
  b += `<rect x="1000" y="560" width="30" height="40" fill="#1a1a1a"/><circle cx="1015" cy="570" r="4" fill="#40c060" filter="url(#glow)"/>`
  b += grainOverlay(W, H, 0.3) + vignette(W, H, 0.9)
  return svg(W, H, d, b)
}

// 天亮：灰蓝的晨光从窗外渗入，窗外空无一人
export function dawnArt() {
  const W = 1600, H = 900
  const d = FILTERS + linear('dsky', [[0, '#8a98a8'], [0.6, '#c8c0b0'], [1, '#6a6a68']]) + radial('dsun', [[0, '#fff4e0', 0.9], [1, '#fff4e0', 0]])
  let b = `<rect width="${W}" height="${H}" fill="#0c0e10"/>`
  b += `<rect x="440" y="120" width="720" height="440" fill="url(#dsky)"/>`
  b += `<circle cx="800" cy="560" r="300" fill="url(#dsun)"/>`
  b += `<path d="M440 470 L560 440 L680 460 L820 430 L960 455 L1160 440 L1160 560 L440 560Z" fill="#3a3e40"/>`
  b += `<clipPath id="dc"><rect x="440" y="120" width="720" height="440"/></clipPath><g clip-path="url(#dc)">${rain(W, H, 80, 3, { color: '#fff', opacity: [0.05, 0.15] })}${droplets(W, H, 80, 9, 120)}</g>`
  b += `<path d="M0 0 H${W} V${H} H0Z M440 120 V560 H1160 V120Z" fill="#101315" fill-rule="evenodd"/>`
  b += `<rect x="430" y="110" width="740" height="460" fill="none" stroke="#3a4044" stroke-width="20"/>`
  b += `<path d="M440 560 L200 900 L1400 900 L1160 560Z" fill="#c8c0b0" opacity="0.08"/>`
  b += grainOverlay(W, H, 0.25) + vignette(W, H, 0.8)
  return svg(W, H, d, b)
}

// Boss 巨型伪人脸（1400×1000）
export function bossface(hits = 0) {
  const defs = FILTERS + `<radialGradient id="glow"><stop offset="0%" stop-color="#60c0ff"/><stop offset="100%" stop-color="#204060"/></radialGradient>`
  let b = `<rect width="1400" height="1000" fill="#0a0a0a"/>`
  b += `<ellipse cx="700" cy="500" rx="500" ry="550" fill="#c8c0b0" opacity="0.95"/>`
  b += `<path d="M 250 300 Q 350 280 450 300 Q 550 320 700 330 Q 850 320 950 300 Q 1050 280 1150 300" stroke="#60c0ff" stroke-width="4" fill="none" opacity="0.7" filter="url(#glow)"/>`
  const eyeY = 400
  for (const [cx, size] of [[450, 80], [700, 90], [950, 80]]) {
    b += `<ellipse cx="${cx}" cy="${eyeY}" rx="${size}" ry="${size * 1.2}" fill="#1a1a18"/>`
    const pupilOffset = hits * 5
    b += `<ellipse cx="${cx + pupilOffset}" cy="${eyeY}" rx="${size * 0.6}" ry="${size * 0.7}" fill="#ffd060" opacity="0.9"/>`
    b += `<circle cx="${cx + pupilOffset}" cy="${eyeY}" r="${size * 0.3}" fill="#1a1210"/>`
  }
  b += `<path d="M 400 650 Q 500 680 600 690 Q 700 695 800 690 Q 900 680 1000 650" stroke="#1a1210" stroke-width="6" fill="none"/>`
  b += `<path d="M 400 650 Q 500 720 600 740 Q 700 745 800 740 Q 900 720 1000 650" fill="#2a1810" opacity="0.9"/>`
  for (let row = 0; row < 3; row++) {
    for (let i = 0; i < 12; i++) {
      const x = 420 + i * 50
      const y = 660 + row * 30
      b += `<path d="M ${x} ${y} l ${8 + row * 2} ${15 + row * 5} l ${8 + row * 2} ${-15 - row * 5} z" fill="#e8e8e0" opacity="0.95"/>`
    }
  }
  if (hits >= 1) {
    b += `<circle cx="960" cy="${eyeY}" r="15" fill="#1a1210"/>`
    b += `<path d="M 960 ${eyeY + 15} Q 958 ${eyeY + 40} 956 ${eyeY + 60}" stroke="#1a1210" stroke-width="4" fill="none"/>`
  }
  if (hits >= 2) {
    b += `<circle cx="700" cy="300" r="12" fill="#1a1210"/>`
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2
      const x = 700 + Math.cos(angle) * 25
      const y = 300 + Math.sin(angle) * 25
      b += `<line x1="700" y1="300" x2="${x}" y2="${y}" stroke="#1a1210" stroke-width="2" opacity="0.6"/>`
    }
  }
  if (hits >= 3) {
    b += `<circle cx="440" cy="${eyeY}" r="15" fill="#1a1210"/>`
    b += `<path d="M 440 ${eyeY + 15} Q 442 ${eyeY + 40} 444 ${eyeY + 60}" stroke="#1a1210" stroke-width="4" fill="none"/>`
  }
  return svg(1400, 1000, defs, b)
}
