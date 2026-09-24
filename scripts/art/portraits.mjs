// 半写实人物立绘生成器：透明底人物图层（600×800），逐帧参数驱动定格动画
import { rng, f, svg, FILTERS, radial, linear } from './lib.mjs'

const W = 600, H = 800
const lerp = (a, b, t) => a + (b - a) * t

// ---------- 眼睛 ----------
function eye(cx, cy, side, p, c, id) {
  const inner = cx - side * 24, outer = cx + side * 27
  const open = Math.max(0, (1 - p.blink) * p.open)
  const Hh = 15, H2 = 7
  const up = cy - Hh * open + H2 * (1 - open)
  const X = (t) => f(lerp(inner, outer, t))
  const upper = `M${f(inner)} ${cy} C${X(0.25)} ${f(up - 2)} ${X(0.68)} ${f(up - 1)} ${f(outer)} ${cy - 2}`
  const lower = `C${X(0.7)} ${cy + H2} ${X(0.3)} ${cy + H2 + 1} ${f(inner)} ${cy}`
  const shape = `${upper} ${lower}Z`
  const ix = cx + p.gazeX * 9, iy = cy + p.gazeY * 4 - 1
  const pr = p.pupil
  let out = `<clipPath id="eye${id}"><path d="${shape}"/></clipPath>`
  out += `<g clip-path="url(#eye${id})">
    <rect x="${cx - 40}" y="${cy - 25}" width="80" height="50" fill="${c.sclera}"/>
    <ellipse cx="${cx}" cy="${cy + 2}" rx="30" ry="14" fill="url(#scleraShade)"/>
    <circle cx="${f(ix)}" cy="${f(iy)}" r="11.5" fill="url(#iris${c.key})"/>
    <circle cx="${f(ix)}" cy="${f(iy)}" r="11.5" fill="none" stroke="#120a06" stroke-width="1.6" opacity="0.8"/>
    <circle cx="${f(ix)}" cy="${f(iy)}" r="${pr}" fill="#050303"/>
    ${c.eyeGlow ? `<circle cx="${f(ix)}" cy="${f(iy)}" r="${pr + 1.5}" fill="none" stroke="${c.eyeGlow}" stroke-width="1" opacity="0.7"/>` : ''}
    <circle cx="${f(ix + 4)}" cy="${f(iy - 4)}" r="2.6" fill="#fff" opacity="0.9"/>
    <circle cx="${f(ix - 4)}" cy="${f(iy + 4)}" r="1.1" fill="#fff" opacity="0.4"/>
    <ellipse cx="${cx}" cy="${f(up)}" rx="34" ry="8" fill="#2a1410" opacity="0.55" filter="url(#blur2)"/>
  </g>`
  // 上眼睑线 + 睫毛
  out += `<path d="${upper}" fill="none" stroke="#1a0d09" stroke-width="3" stroke-linecap="round"/>`
  const lashR = rng(Math.round(cx * 7 + cy))
  if (open > 0.15) {
    for (let t = 0.3; t <= 0.95; t += 0.09) {
      const x = lerp(inner, outer, t)
      const y = up + (cy - up) * Math.pow(Math.abs(t - 0.47) * 2, 2) - 1
      out += `<line x1="${f(x)}" y1="${f(y)}" x2="${f(x + side * (2 + lashR() * 3))}" y2="${f(y - 3 - lashR() * 2)}" stroke="#1a0d09" stroke-width="1" opacity="0.7"/>`
    }
  }
  // 眼睑褶
  const crease = up - 9 - open * 2
  out += `<path d="M${X(0.05)} ${f(cy - 5)} C${X(0.3)} ${f(crease - 2)} ${X(0.7)} ${f(crease - 1)} ${X(1.02)} ${f(cy - 7)}" fill="none" stroke="${c.shadow}" stroke-width="2.4" opacity="0.55" filter="url(#blur2)"/>`
  // 下眼睑 + 眼袋
  out += `<path d="M${X(0.95)} ${cy + 4} C${X(0.7)} ${cy + H2 + 2} ${X(0.3)} ${cy + H2 + 3} ${X(0.08)} ${cy + 2}" fill="none" stroke="${c.light}" stroke-width="1.2" opacity="0.35"/>`
  out += `<path d="M${X(0.95)} ${cy + 6} C${X(0.7)} ${cy + 14} ${X(0.3)} ${cy + 15} ${X(0.05)} ${cy + 6}" fill="none" stroke="${c.shadow}" stroke-width="${3 + c.tired * 3}" opacity="${0.18 + c.tired * 0.3}" filter="url(#blur2)"/>`
  if (c.tired > 0.4) out += `<path d="M${X(0.9)} ${cy + 16} C${X(0.6)} ${cy + 24} ${X(0.3)} ${cy + 23} ${X(0.12)} ${cy + 14}" fill="none" stroke="${c.shadow}" stroke-width="2" opacity="${c.tired * 0.35}" filter="url(#blur2)"/>`
  return out
}

// ---------- 眉毛（逐根毛发） ----------
function brow(cx, cy, side, raise, angry, c, seed) {
  const r = rng(seed)
  const inner = cx - side * 26, outer = cx + side * 32
  const iy = cy - raise * 6 + angry * 6, oy = cy - 2 - raise * 3
  const my = cy - 9 - raise * 5
  let out = `<path d="M${f(inner)} ${f(iy)} Q${f(cx)} ${f(my)} ${f(outer)} ${f(oy + 4)}" fill="none" stroke="${c.hairDark}" stroke-width="${c.browW}" stroke-linecap="round" opacity="0.55" filter="url(#blur2)"/>`
  for (let i = 0; i < 70; i++) {
    const t = r()
    const x = lerp(inner, outer, t)
    const yb = (1 - t) * (1 - t) * iy + 2 * (1 - t) * t * my + t * t * (oy + 4)
    const y = yb + (r() - 0.5) * c.browW * 0.9
    const len = 5 + r() * 5
    const a = 0.25 + t * 0.4 + (r() - 0.5) * 0.3
    out += `<line x1="${f(x)}" y1="${f(y)}" x2="${f(x + Math.cos(a) * len * side)}" y2="${f(y - Math.sin(a) * len * 0.6 - 1)}" stroke="${c.hairDark}" stroke-width="0.9" opacity="${f(0.5 + r() * 0.4)}"/>`
  }
  return out
}

// ---------- 嘴 ----------
function mouth(p, c) {
  const mw = 36 * p.mouthW, y = 396, s = -p.smile * 6, o = p.mouthOpen * 26
  const L = f(300 - mw), R = f(300 + mw)
  let out = ''
  out += `<ellipse cx="300" cy="${y + 2 + o / 2}" rx="${f(mw + 12)}" ry="${f(16 + o / 2)}" fill="${c.shadow}" opacity="0.18" filter="url(#blur8)"/>`
  if (o > 1) {
    out += `<path d="M${L} ${y + s} C${f(300 - mw * 0.5)} ${y - 3} ${f(300 + mw * 0.5)} ${y - 3} ${R} ${y + s} C${f(300 + mw * 0.6)} ${f(y + o)} ${f(300 - mw * 0.6)} ${f(y + o)} ${L} ${y + s}Z" fill="#1a0505"/>`
    out += `<path d="M${f(300 - mw * 0.7)} ${y - 1} Q300 ${y + 4} ${f(300 + mw * 0.7)} ${y - 1} L${f(300 + mw * 0.6)} ${y + 5} Q300 ${y + 9} ${f(300 - mw * 0.6)} ${y + 5}Z" fill="${c.teeth}" opacity="0.85"/>`
    if (o > 14) out += `<path d="M${f(300 - mw * 0.5)} ${f(y + o - 6)} Q300 ${f(y + o - 10)} ${f(300 + mw * 0.5)} ${f(y + o - 6)} L${f(300 + mw * 0.4)} ${f(y + o - 2)} Q300 ${f(y + o - 3)} ${f(300 - mw * 0.4)} ${f(y + o - 2)}Z" fill="${c.teeth}" opacity="0.6"/>`
    if (c.mouthGlow) out += `<ellipse cx="300" cy="${f(y + o / 2 + 2)}" rx="${f(mw * 0.35)}" ry="${f(o * 0.25)}" fill="${c.mouthGlow}" filter="url(#glow)" opacity="0.9"/>`
  }
  out += `<path d="M${L} ${y + s} C${f(300 - mw * 0.55)} ${y - 9} 292 ${y - 11} 300 ${y - 8} C308 ${y - 11} ${f(300 + mw * 0.55)} ${y - 9} ${R} ${y + s} C${f(300 + mw * 0.5)} ${y - 1} ${f(300 - mw * 0.5)} ${y - 1} ${L} ${y + s}Z" fill="url(#lipU${c.key})"/>`
  out += `<path d="M${f(+L + 3)} ${y + s + 1} C${f(300 - mw * 0.5)} ${f(y + 1 + o)} ${f(300 + mw * 0.5)} ${f(y + 1 + o)} ${f(+R - 3)} ${y + s + 1} C${f(300 + mw * 0.6)} ${f(y + 15 + o)} ${f(300 - mw * 0.6)} ${f(y + 15 + o)} ${f(+L + 3)} ${y + s + 1}Z" fill="url(#lipL${c.key})"/>`
  out += `<ellipse cx="303" cy="${f(y + 7 + o)}" rx="${f(mw * 0.35)}" ry="2.5" fill="#fff" opacity="${c.lipGloss}" filter="url(#blur2)"/>`
  if (o <= 1) out += `<path d="M${L} ${y + s} C${f(300 - mw * 0.5)} ${y + 1} ${f(300 + mw * 0.5)} ${y + 1} ${R} ${y + s}" fill="none" stroke="#2a0d0a" stroke-width="2.2" stroke-linecap="round" opacity="0.85"/>`
  out += `<circle cx="${f(+L - 1)}" cy="${y + s}" r="3" fill="${c.shadow}" opacity="0.5" filter="url(#blur2)"/><circle cx="${f(+R + 1)}" cy="${y + s}" r="3" fill="${c.shadow}" opacity="0.5" filter="url(#blur2)"/>`
  return out
}

// ---------- 脸型 ----------
function facePath(c) {
  const top = 138, w = 108 * c.faceW, chin = 448, jw = 44 * c.jawW
  const X = (d) => f(300 + d)
  return `M300 ${top} C${X(w * 0.6)} ${top} ${X(w)} ${top + 45} ${X(w)} ${top + 115} C${X(w + 2)} ${top + 175} ${X(w - 6)} ${top + 222} ${X(w - 22)} ${top + 258} C${X(w - 40)} ${chin - 40} ${X(jw)} ${chin - 4} 300 ${chin} C${X(-jw)} ${chin - 4} ${X(-w + 40)} ${chin - 40} ${X(-w + 22)} ${top + 258} C${X(-w + 6)} ${top + 222} ${X(-w - 2)} ${top + 175} ${X(-w)} ${top + 115} C${X(-w)} ${top + 45} ${X(-w * 0.6)} ${top} 300 ${top}Z`
}

function ear(side, c) {
  const x = 300 + side * 108 * c.faceW
  const X = (d) => f(x + side * d)
  const d = `M${X(-4)} 282 C${X(22)} 262 ${X(30)} 300 ${X(22)} 330 C${X(16)} 352 ${X(4)} 360 ${X(-6)} 352 Z`
  return `<path d="${d}" fill="url(#skin${c.key})"/><path d="${d}" fill="${c.shadow}" opacity="0.35"/>
  <path d="M${X(4)} 292 C${X(18)} 284 ${X(20)} 312 ${X(12)} 332" fill="none" stroke="${c.shadow}" stroke-width="4" opacity="0.6" filter="url(#blur2)"/>
  <path d="M${X(20)} 290 C${X(26)} 306 ${X(22)} 326 ${X(14)} 340" fill="none" stroke="${c.light}" stroke-width="2" opacity="0.4" filter="url(#blur2)"/>`
}

// ---------- 头发 ----------
function hair(c, seed) {
  const r = rng(seed)
  const w = 108 * c.faceW
  const X = (d) => f(300 + d)
  let out = ''
  const strands = (n, fn, col, sw, op) => {
    for (let i = 0; i < n; i++) {
      const [x1, y1, x2, y2, cx, cy] = fn(r)
      out += `<path d="M${f(x1)} ${f(y1)} Q${f(cx)} ${f(cy)} ${f(x2)} ${f(y2)}" stroke="${col}" stroke-width="${f(sw * (0.5 + r()))}" fill="none" opacity="${f(op * (0.5 + r() * 0.5))}" stroke-linecap="round"/>`
    }
  }
  if (c.hair === 'receding') {
    // 短寸 + 两侧发际后退：柔边发团 + 裁剪内短发茬
    const d = `M${X(-w - 5)} 262 C${X(-w - 12)} 180 ${X(-w * 0.6)} 110 300 108 C${X(w * 0.6)} 110 ${X(w + 12)} 180 ${X(w + 5)} 262 L${X(w - 6)} 258 C${X(w - 8)} 222 ${X(w - 14)} 198 ${X(w - 34)} 188 C${X(52)} 178 ${X(30)} 168 300 170 C${X(-30)} 168 ${X(-52)} 178 ${X(-w + 34)} 188 C${X(-w + 14)} 198 ${X(-w + 8)} 222 ${X(-w + 6)} 258Z`
    out += `<clipPath id="hc${c.key}"><path d="${d}"/></clipPath>`
    out += `<path d="${d}" fill="${c.hairMid}" filter="url(#blur4)" opacity="0.7"/><path d="${d}" fill="url(#hair${c.key})" opacity="0.85"/>`
    out += `<g clip-path="url(#hc${c.key})">`
    strands(700, (r) => { const x = 300 + (r() - 0.5) * 2.2 * w; const y = 108 + r() * 150; const s = x < 300 ? -1 : 1; return [x, y, x + s * (2 + r() * 3), y + 4 + r() * 5, x + s, y + 2] }, c.hairDark, 1.1, 0.7)
    strands(160, (r) => { const x = 250 + r() * 130; const y = 112 + r() * 50; return [x, y, x + (r() - 0.5) * 6, y + 5, x, y + 2] }, c.hairLight, 0.9, 0.5)
    out += `<ellipse cx="330" cy="130" rx="60" ry="16" fill="#fff" opacity="0.12" filter="url(#blur8)"/></g>`
  } else if (c.hair === 'messy') {
    const d = `M${X(-w - 8)} 270 C${X(-w - 20)} 160 ${X(-w * 0.5)} 100 300 104 C${X(w * 0.6)} 100 ${X(w + 22)} 160 ${X(w + 8)} 272 L${X(w - 2)} 240 C${X(w - 10)} 200 ${X(50)} 188 ${X(40)} 200 L${X(20)} 236 L300 202 L${X(-22)} 240 L${X(-40)} 204 L${X(-66)} 232 L${X(-w + 6)} 220 Z`
    out += `<path d="${d}" fill="url(#hair${c.key})"/>`
    for (let i = 0; i < 14; i++) {
      const x = 300 - w + 20 + i * (2 * w - 40) / 13 + (r() - 0.5) * 10
      const y = 170 + r() * 20
      const l = 30 + r() * 50
      out += `<path d="M${f(x - 9)} ${f(y)} Q${f(x + 2)} ${f(y + l * 0.6)} ${f(x + (r() - 0.5) * 12)} ${f(y + l)} Q${f(x + 6)} ${f(y + l * 0.5)} ${f(x + 10)} ${f(y)}Z" fill="${c.hairDark}" opacity="${f(0.75 + r() * 0.25)}"/>`
    }
    strands(220, (r) => { const x = 300 + (r() - 0.5) * 2 * w; const y = 110 + r() * 120; return [x, y, x + (r() - 0.5) * 30, y + 20 + r() * 30, x + (r() - 0.5) * 20, y + 12] }, c.hairLight, 1.1, 0.4)
    out += `<ellipse cx="340" cy="140" rx="50" ry="14" fill="#fff" opacity="0.12" filter="url(#blur4)" transform="rotate(-10 340 140)"/>`
  } else if (c.hair === 'slick') {
    const d = `M${X(-w - 3)} 248 C${X(-w - 8)} 150 ${X(-w * 0.5)} 110 305 110 C${X(w * 0.7)} 112 ${X(w + 8)} 160 ${X(w + 3)} 248 L${X(w - 3)} 232 C${X(w - 8)} 185 ${X(60)} 158 ${X(-30)} 162 C${X(-70)} 166 ${X(-w + 8)} 190 ${X(-w + 3)} 232 Z`
    out += `<path d="${d}" fill="url(#hair${c.key})"/>`
    for (let i = 0; i < 40; i++) {
      const y = 120 + i * 2.8
      out += `<path d="M${f(300 - w + 4 + r() * 10)} ${f(y + 60 - i)} Q300 ${f(y - 14)} ${f(300 + w - 6)} ${f(y + 50 - i * 0.8)}" stroke="${i % 3 ? c.hairDark : c.hairLight}" stroke-width="0.8" fill="none" opacity="0.14"/>`
    }
    out += `<path d="M240 128 Q300 114 370 130" stroke="#fff" stroke-width="6" fill="none" opacity="0.2" filter="url(#blur4)"/>`
  } else if (c.hair === 'hat') {
    strands(80, (r) => { const s = r() < 0.5 ? -1 : 1; const x = 300 + s * (w - 8 - r() * 10); const y = 200 + r() * 60; return [x, y, x + s * 2, y + 14, x + s * 4, y + 6] }, c.hairDark, 1.4, 0.7)
  }
  return out
}

function hardHat(c) {
  const w = 108 * c.faceW
  const X = (d) => f(300 + d)
  return `<path d="M${X(-w - 30)} 208 C${X(-w - 30)} 196 ${X(w + 30)} 196 ${X(w + 30)} 208 L${X(w + 34)} 222 C300 212 300 212 ${X(-w - 34)} 222Z" fill="url(#hatBrim)"/>
  <path d="M${X(-w - 6)} 205 C${X(-w - 10)} 120 250 84 300 84 C350 84 ${X(w + 10)} 120 ${X(w + 6)} 205Z" fill="url(#hatDome)"/>
  <path d="M300 86 L300 204" stroke="#6a5a18" stroke-width="14" opacity="0.35"/>
  <path d="M296 88 L296 202" stroke="#fff4b8" stroke-width="2" opacity="0.4"/>
  <ellipse cx="340" cy="120" rx="30" ry="14" fill="#fff8d0" opacity="0.35" filter="url(#blur4)"/>
  <path d="M${X(-w - 30)} 214 C300 204 300 204 ${X(w + 30)} 214" stroke="#1a1606" stroke-width="3" fill="none" opacity="0.5"/>
  <ellipse cx="300" cy="226" rx="${f(w + 10)}" ry="18" fill="#000" opacity="0.4" filter="url(#blur8)"/>`
}

// ---------- 身体/服装 ----------
function torso(c, seed) {
  const r = rng(seed)
  const body = `M30 800 L34 690 C44 610 120 572 206 554 C236 546 258 528 264 506 L336 506 C342 528 364 546 394 554 C480 572 556 610 566 690 L570 800Z`
  let out = `<path d="${body}" fill="url(#cloth${c.key})"/>`
  for (let i = 0; i < 12; i++) {
    const x = 80 + r() * 440, y = 600 + r() * 180
    out += `<path d="M${f(x)} ${f(y)} q ${f(20 + r() * 30)} ${f(-10 + r() * 20)} ${f(40 + r() * 50)} ${f(r() * 40)}" stroke="#000" stroke-width="${f(4 + r() * 8)}" fill="none" opacity="0.25" filter="url(#blur4)"/>`
  }
  out += `<path d="M80 640 C150 600 200 590 240 590" stroke="${c.clothLight}" stroke-width="10" opacity="0.2" fill="none" filter="url(#blur8)"/>`
  out += `<path d="M390 590 C450 594 520 620 540 660" stroke="${c.clothLight}" stroke-width="14" opacity="0.28" fill="none" filter="url(#blur8)"/>`
  if (c.outfit === 'jacket') {
    out += `<path d="M206 554 L262 506 L300 590 L338 506 L394 554 L360 620 L300 600 L240 620Z" fill="${c.clothDark}"/>`
    out += `<path d="M262 506 L300 590 L338 506" fill="#b8b0a0" opacity="0.8"/><path d="M280 520 L300 590 L320 520 L300 540Z" fill="#2a2a30"/>`
    out += `<path d="M300 600 L300 800" stroke="#0a0c10" stroke-width="3"/>`
    out += `<rect x="370" y="640" width="90" height="26" rx="3" fill="#8a7a40"/><rect x="376" y="646" width="78" height="14" fill="#3a3218"/>`
    out += `<rect x="150" y="628" width="44" height="78" rx="6" fill="#1a1a1a"/><rect x="160" y="604" width="6" height="30" fill="#222"/><circle cx="172" cy="660" r="9" fill="#333"/><rect x="158" y="680" width="28" height="18" fill="#2a2a2a"/><circle cx="182" cy="642" r="3" fill="#c03020" opacity="0.8"/>`
    for (let i = 0; i < 10; i++) out += `<ellipse cx="${f(80 + r() * 440)}" cy="${f(570 + r() * 80)}" rx="${f(20 + r() * 40)}" ry="${f(8 + r() * 14)}" fill="#000" opacity="0.18" filter="url(#blur8)"/>`
  } else if (c.outfit === 'coverall') {
    out += `<path d="M230 546 L268 506 L300 560 L332 506 L370 546 L340 580 L300 566 L260 580Z" fill="${c.clothDark}"/>`
    out += `<path d="M300 566 L300 800" stroke="#888" stroke-width="4"/><path d="M300 566 L300 800" stroke="#222" stroke-width="1" stroke-dasharray="3 3"/>`
    out += `<rect x="40" y="700" width="520" height="22" fill="#b8b8a8" opacity="0.7"/><rect x="40" y="704" width="520" height="14" fill="#e8e8d8" opacity="0.35"/>`
    out += `<rect x="360" y="610" width="70" height="60" fill="${c.clothDark}" stroke="#000" stroke-opacity="0.4"/><rect x="376" y="596" width="8" height="40" fill="#555"/><rect x="392" y="600" width="6" height="36" fill="#a03020"/>`
    out += `<rect x="170" y="620" width="84" height="22" rx="2" fill="#d8d0b0"/><text x="212" y="637" font-family="monospace" font-size="15" text-anchor="middle" fill="#222" font-weight="bold">REED</text>`
  } else if (c.outfit === 'hoodie') {
    out += `<path d="M150 580 C170 520 230 500 264 506 L300 540 L336 506 C370 500 430 520 450 580 C400 560 360 570 336 560 L300 590 L264 560 C240 570 200 560 150 580Z" fill="${c.clothDark}"/>`
    out += `<path d="M284 580 C282 620 280 650 286 680" stroke="#d8d4c8" stroke-width="4" fill="none"/><path d="M316 580 C318 620 322 660 314 690" stroke="#d8d4c8" stroke-width="4" fill="none"/>`
    out += `<circle cx="286" cy="684" r="4" fill="#aaa"/><circle cx="314" cy="694" r="4" fill="#aaa"/>`
    out += `<path d="M180 740 L420 740 L400 800 L200 800Z" fill="${c.clothDark}" opacity="0.6"/>`
    for (let i = 0; i < 14; i++) out += `<ellipse cx="${f(80 + r() * 440)}" cy="${f(570 + r() * 150)}" rx="${f(20 + r() * 50)}" ry="${f(10 + r() * 20)}" fill="#000" opacity="0.22" filter="url(#blur8)"/>`
  } else if (c.outfit === 'pressed') {
    out += `<path d="M236 548 L268 506 L300 548 L332 506 L364 548 L330 600 L300 570 L270 600Z" fill="#e4e2da"/>`
    out += `<path d="M268 506 L300 548 L332 506 L318 506 L300 530 L282 506Z" fill="url(#skin${c.key})"/>`
    out += `<path d="M300 560 L300 800" stroke="#9a9888" stroke-width="2"/>`
    for (let y = 590; y < 800; y += 44) out += `<circle cx="300" cy="${y}" r="4" fill="#d8d4c0" stroke="#777" stroke-width="0.8"/>`
    out += `<path d="M120 620 L200 620 M400 620 L480 620" stroke="#fff" stroke-width="1.5" opacity="0.5"/>`
    out += `<rect x="370" y="628" width="76" height="46" rx="3" fill="#f2f0e8" stroke="#888"/><rect x="376" y="634" width="22" height="30" fill="#aab"/><line x1="404" y1="640" x2="440" y2="640" stroke="#555" stroke-width="2"/><line x1="404" y1="650" x2="434" y2="650" stroke="#555" stroke-width="2"/><text x="422" y="668" font-family="monospace" font-size="9" text-anchor="middle" fill="#333">HALE</text>`
  }
  return out
}

function neck(c) {
  const d = 'M244 410 C248 448 244 478 232 506 C266 524 334 524 368 506 C356 478 352 448 356 410Z'
  return `<path d="${d}" fill="url(#skin${c.key})"/><path d="${d}" fill="url(#neckShade)"/>
  <path d="M296 470 C292 486 300 500 304 488" stroke="${c.shadow}" stroke-width="3" fill="none" opacity="0.35" filter="url(#blur2)"/>
  <path d="M338 420 C334 470 340 500 352 526" stroke="${c.light}" stroke-width="5" fill="none" opacity="0.35" filter="url(#blur4)"/>`
}

function sweat(n, seed) {
  const r = rng(seed)
  let out = ''
  for (let i = 0; i < n; i++) {
    const x = 220 + r() * 160, y = 170 + r() * 200
    const s = 1.5 + r() * 2.5
    out += `<ellipse cx="${f(x)}" cy="${f(y)}" rx="${f(s)}" ry="${f(s * 1.3)}" fill="#fff" opacity="0.14"/><circle cx="${f(x - s * 0.3)}" cy="${f(y - s * 0.4)}" r="${f(s * 0.25)}" fill="#fff" opacity="0.6"/>`
  }
  return out
}

function wetDrops(n, seed) {
  const r = rng(seed)
  let out = ''
  for (let i = 0; i < n; i++) {
    const x = 60 + r() * 480, y = 540 + r() * 250
    const s = 1.2 + r() * 2.2
    out += `<ellipse cx="${f(x)}" cy="${f(y)}" rx="${f(s * 0.6)}" ry="${f(s * 1.3)}" fill="#dfe8ee" opacity="0.3"/><ellipse cx="${f(x)}" cy="${f(y + s)}" rx="${f(s * 0.7)}" ry="${f(s * 0.5)}" fill="#000" opacity="0.2"/>`
  }
  return out
}

function seam(c, open) {
  // 右耳后到颈侧的接缝（观者右侧）
  const x = 300 + 108 * c.faceW
  const d = `M${f(x + 2)} 300 C${f(x + 4)} 330 ${f(x - 6)} 370 ${f(x - 24)} 404 C${f(x - 34)} 430 ${f(x - 40)} 470 ${f(x - 46)} 520`
  let out = `<path d="${d}" stroke="#3a1010" stroke-width="${f(1.6 + open * 5)}" fill="none" opacity="${f(0.55 + open * 0.4)}" stroke-linecap="round"/>`
  if (open > 0.2) out += `<path d="${d}" stroke="#8a1c18" stroke-width="${f(open * 3)}" fill="none" opacity="0.9"/><path d="${d}" stroke="#e8d0c0" stroke-width="1" fill="none" opacity="0.5" transform="translate(-3 0)"/>`
  for (let i = 0; i < 9; i++) {
    const t = i / 8
    const y = 305 + t * 210, xx = x + 2 - t * 48 + Math.sin(t * 3) * 4
    out += `<line x1="${f(xx - 4)}" y1="${f(y - 2)}" x2="${f(xx + 4)}" y2="${f(y + 2)}" stroke="#2a0808" stroke-width="1" opacity="0.5"/>`
  }
  return out
}

// ---------- 整体角色 ----------
export function character(c, p) {
  const key = c.key
  const defs = FILTERS +
    `<filter id="blur1"><feGaussianBlur stdDeviation="1"/></filter>` +
    `<filter id="cyanShift"><feColorMatrix type="matrix" values="0 0 0 0 0  0 1 0 0 0.1  0 0 1 0 0.2  0 0 0 1 0"/></filter><filter id="redShift"><feColorMatrix type="matrix" values="1 0 0 0 0.25  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"/></filter>` +
    radial(`skin${key}`, [[0, c.light], [0.55, c.base], [1, c.shadow]], 'cx="0.6" cy="0.38" r="0.75"') +
    radial('scleraShade', [[0.4, '#000', 0], [1, '#3a2018', 0.55]], 'cx="0.5" cy="0.5" r="0.6"') +
    radial(`iris${key}`, [[0, c.irisIn], [0.35, c.iris], [1, '#0c0806']], 'cx="0.5" cy="0.5" r="0.5"') +
    radial('coreG', [[0, '#e8f4f8'], [0.5, '#6a8a98'], [1, '#1a2a30']]) +
    linear(`lipU${key}`, [[0, c.lip], [1, c.lipDark]]) +
    linear(`lipL${key}`, [[0, c.lipDark], [0.4, c.lip], [1, c.lipDark]]) +
    linear(`hair${key}`, [[0, c.hairLight], [0.5, c.hairMid], [1, c.hairDark]]) +
    linear(`cloth${key}`, [[0, c.clothLight], [0.5, c.cloth], [1, c.clothDark]], 'x1="0.8" y1="0" x2="0.2" y2="1"') +
    linear('neckShade', [[0, '#1a0a06', 0.75], [0.35, '#1a0a06', 0.25], [1, '#1a0a06', 0.05]]) +
    linear('hatDome', [[0, '#f2d84a'], [0.6, '#c8a820'], [1, '#6a5610']], 'x1="0.8" y1="0" x2="0.2" y2="1"') +
    linear('hatBrim', [[0, '#d8bc30'], [1, '#5a4a10']]) +
    `<clipPath id="face${key}"><path d="${facePath(c)}"/></clipPath>` +
    `<radialGradient id="stubble${key}" cx="0.5" cy="0.78" r="0.4"><stop offset="0.3" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>` +
    `<mask id="stubM${key}"><rect x="150" y="300" width="300" height="160" fill="url(#stubble${key})"/></mask>` +
    `<filter id="stubF" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="1.6" numOctaves="1" seed="4"/><feColorMatrix type="matrix" values="0 0 0 0 0.1  0 0 0 0 0.07  0 0 0 0 0.05  3.2 0 0 0 -1.35"/></filter>`

  const face = facePath(c)
  const leftEye = { blink: p.blinkL, open: p.eyeOpen, gazeX: p.gazeX, gazeY: p.gazeY, pupil: p.pupilL }
  const rightEye = { blink: p.blinkR, open: p.eyeOpen, gazeX: p.gazeX, gazeY: p.gazeY, pupil: p.pupilR }

  let head = ear(-1, c) + ear(1, c)
  head += `<path d="${face}" fill="url(#skin${key})"/>`
  head += `<g clip-path="url(#face${key})">
    <ellipse cx="196" cy="320" rx="80" ry="180" fill="${c.shadow}" opacity="0.75" filter="url(#blur30)"/><ellipse cx="372" cy="250" rx="46" ry="90" fill="${c.light}" opacity="0.3" filter="url(#blur16)"/><path d="M216 350 C240 372 256 372 268 366" stroke="${c.shadow}" stroke-width="10" fill="none" opacity="0.35" filter="url(#blur8)"/>
    <ellipse cx="410" cy="300" rx="20" ry="160" fill="${c.rim}" opacity="0.35" filter="url(#blur16)"/>
    ${c.skinTexture ? `<rect x="150" y="130" width="300" height="330" filter="url(#skin)" fill="${c.base}" opacity="${c.skinTexture}"/>` : ''}
    <ellipse cx="315" cy="190" rx="70" ry="34" fill="${c.light}" opacity="0.45" filter="url(#blur16)"/>
    <ellipse cx="255" cy="${292 - p.browRaise * 3}" rx="40" ry="24" fill="${c.shadow}" opacity="${f(0.4 + c.tired * 0.2)}" filter="url(#blur8)"/>
    <ellipse cx="345" cy="${292 - p.browRaise * 3}" rx="40" ry="24" fill="${c.shadow}" opacity="${f(0.32 + c.tired * 0.2)}" filter="url(#blur8)"/>
    <ellipse cx="258" cy="258" rx="36" ry="10" fill="${c.light}" opacity="0.3" filter="url(#blur4)"/>
    <ellipse cx="350" cy="256" rx="36" ry="10" fill="${c.light}" opacity="0.4" filter="url(#blur4)"/>
    <ellipse cx="370" cy="330" rx="30" ry="22" fill="${c.light}" opacity="0.45" filter="url(#blur8)"/>
    <ellipse cx="236" cy="336" rx="24" ry="18" fill="${c.light}" opacity="0.18" filter="url(#blur8)"/>
    <ellipse cx="228" cy="378" rx="26" ry="36" fill="${c.shadow}" opacity="${f(0.25 + c.gaunt * 0.3)}" filter="url(#blur16)"/>
    <ellipse cx="376" cy="378" rx="24" ry="34" fill="${c.shadow}" opacity="${f(0.15 + c.gaunt * 0.25)}" filter="url(#blur16)"/>
    <ellipse cx="300" cy="460" rx="120" ry="40" fill="${c.shadow}" opacity="0.6" filter="url(#blur16)"/>
    ${c.stubble ? `<rect x="150" y="300" width="300" height="160" filter="url(#stubF)" mask="url(#stubM${key})" opacity="${c.stubble}"/>` : ''}
    <ellipse cx="303" cy="315" rx="6" ry="32" fill="${c.light}" opacity="0.55" filter="url(#blur4)"/>
    <path d="M290 292 C286 312 282 330 282 346" stroke="${c.shadow}" stroke-width="9" fill="none" opacity="0.45" filter="url(#blur4)"/>
    <path d="M314 300 C318 318 320 332 320 344" stroke="${c.shadow}" stroke-width="5" fill="none" opacity="0.18" filter="url(#blur4)"/>
    <circle cx="302" cy="343" r="11" fill="${c.base}" filter="url(#blur4)"/>
    <circle cx="306" cy="340" r="5" fill="${c.light}" opacity="0.7" filter="url(#blur2)"/>
    <path d="M288 338 C274 340 272 356 284 361" stroke="${c.shadow}" stroke-width="3.5" fill="none" opacity="0.6" filter="url(#blur2)"/>
    <path d="M314 338 C328 340 330 356 318 361" stroke="${c.shadow}" stroke-width="3" fill="none" opacity="0.4" filter="url(#blur2)"/>
    <ellipse cx="300" cy="364" rx="24" ry="6" fill="${c.shadow}" opacity="0.5" filter="url(#blur4)"/>
    <ellipse cx="289" cy="359" rx="5.5" ry="2.8" fill="#2a1410" opacity="0.8" filter="url(#blur1)"/>
    <ellipse cx="312" cy="359" rx="5.5" ry="2.8" fill="#2a1410" opacity="0.75"/>
    <path d="M295 366 L293 386 M305 366 L307 386" stroke="${c.shadow}" stroke-width="2.5" opacity="0.3" filter="url(#blur2)"/>
    <path d="M280 352 C266 368 262 384 264 404" stroke="${c.shadow}" stroke-width="3" fill="none" opacity="${f(0.15 + c.age * 0.35)}" filter="url(#blur2)"/>
    <path d="M322 352 C336 368 340 384 338 404" stroke="${c.shadow}" stroke-width="2.5" fill="none" opacity="${f(0.1 + c.age * 0.3)}" filter="url(#blur2)"/>
    ${c.age > 0.4 ? `<path d="M250 206 Q300 196 350 206 M258 222 Q300 214 344 222" stroke="${c.shadow}" stroke-width="1.6" fill="none" opacity="${f(c.age * 0.35)}" filter="url(#blur1)"/>` : ''}
    ${mouth(p, c)}
    <ellipse cx="300" cy="418" rx="20" ry="6" fill="${c.shadow}" opacity="0.45" filter="url(#blur4)"/>
    <ellipse cx="305" cy="432" rx="24" ry="10" fill="${c.light}" opacity="0.35" filter="url(#blur4)"/>
    ${c.waxy ? `<ellipse cx="300" cy="300" rx="100" ry="140" fill="${c.base}" opacity="${f(c.waxy * 0.8)}" filter="url(#blur16)"/><ellipse cx="330" cy="240" rx="40" ry="20" fill="#fff" opacity="${c.waxy}" filter="url(#blur8)"/><ellipse cx="360" cy="340" rx="18" ry="10" fill="#fff" opacity="${c.waxy}" filter="url(#blur4)"/>` : ''}
    ${c.sweat ? sweat(c.sweat, 91) : ''}
  </g>`
  head += brow(255, 262, -1, p.browRaise + (p.browAsym || 0), p.browAngry, c, 21)
  head += brow(345, 262, 1, p.browRaise, p.browAngry, c, 37)
  head += eye(255, 294, -1, leftEye, c, `${key}L`)
  head += eye(345, 294, 1, rightEye, c, `${key}R`)
  head += hair(c, 55)
  if (c.hair === 'hat') head += hardHat(c)
  if (c.seam) head += seam(c, p.seamOpen || 0)
  if (c.temple) head += `<circle cx="210" cy="236" r="${f(6 + (p.glint || 0) * 4)}" fill="#9ab8c8" opacity="${f(0.1 + (p.glint || 0) * 0.35)}" filter="url(#glow)"/>`

  let body = neck(c) + `<ellipse cx="300" cy="436" rx="70" ry="22" fill="#000" opacity="0.35" filter="url(#blur8)"/><g transform="translate(0 -26)">${torso(c, 77)}</g>`

  if (c.core) body += `<g transform="translate(262 522)"><ellipse rx="16" ry="11" fill="${c.shadow}" opacity="0.6" filter="url(#blur2)"/><circle r="7" fill="url(#coreG)"/><circle r="${f(4 + (p.glint || 0) * 6)}" fill="#cfe8f0" opacity="${f(0.2 + (p.glint || 0) * 0.7)}" filter="url(#glow)"/></g>`

  const char = `<g id="char"><g transform="translate(${p.dx} ${p.dy})">${body}<g transform="rotate(${p.tilt} 300 470) translate(${p.hx} ${p.hy})">${head}</g>${c.drops ? wetDrops(c.drops, 17) : ''}</g></g>`
  let glitch = ''
  if (p.glitch) {
    const bands = [[160, 40, 18], [300, 26, -24], [420, 50, 12], [610, 30, -30]]
    glitch += bands.map(([y, h, dx], i) => `<clipPath id="gb${i}"><rect x="0" y="${y}" width="${W}" height="${h}"/></clipPath><g clip-path="url(#gb${i})"><use href="#char" transform="translate(${dx} 0)"/></g>`).join('')
    glitch += `<use href="#char" transform="translate(8 0)" opacity="0.16" filter="url(#redShift)"/><use href="#char" transform="translate(-6 0)" opacity="0.1" filter="url(#cyanShift)"/>`
  }
  return svg(W, H, defs, char + glitch)
}

// ---------- 四位来访者 ----------
const BASE_P = { tilt: 0, dx: 0, dy: 0, hx: 0, hy: 0, blinkL: 0, blinkR: 0, eyeOpen: 1, gazeX: 0, gazeY: 0, pupilL: 4.5, pupilR: 4.5, mouthOpen: 0, mouthW: 1, smile: 0, browRaise: 0, browAngry: 0 }
const P = (o) => ({ ...BASE_P, ...o })

export const CAST = {
  v1_human: {
    c: { key: 'a', base: '#c48a6c', light: '#f2c4a2', shadow: '#5a2e20', rim: '#8ab0d0', sclera: '#e2d6c8', iris: '#5a3a20', irisIn: '#a0703a', lip: '#a8625a', lipDark: '#6a3430', lipGloss: 0.25, teeth: '#d8ccb0', hair: 'receding', hairLight: '#6a5a4a', hairMid: '#3a2e24', hairDark: '#1a140e', browW: 7, cloth: '#2e3a48', clothLight: '#5a6a7a', clothDark: '#141c24', outfit: 'jacket', faceW: 1.05, jawW: 1.15, tired: 0.8, gaunt: 0.4, age: 0.75, stubble: 0.55, skinTexture: 0.5, drops: 26 },
    frames: [P({ gazeY: 0.2 }), P({ blinkL: 1, blinkR: 1, gazeY: 0.2, dy: 1 }), P({ gazeX: -0.4, gazeY: 0.6, tilt: -2, dy: 3, mouthOpen: 0.1 })],
    attack: P({ eyeOpen: 1.25, browRaise: 1.4, mouthOpen: 0.6, mouthW: 0.9, pupilL: 3, pupilR: 3, tilt: 3, dy: -6 }),
  },
  v2_skinfit: {
    c: { key: 'b', base: '#d2ad98', light: '#f8dccb', shadow: '#7a4a3a', rim: '#a0b8d0', sclera: '#e8e2da', iris: '#6a7a80', irisIn: '#9ab0b8', lip: '#b87a70', lipDark: '#7a4440', lipGloss: 0.55, teeth: '#e8e0c8', hair: 'hat', hairLight: '#5a4a3a', hairMid: '#2a2018', hairDark: '#140e0a', browW: 6, cloth: '#3a3e36', clothLight: '#6a7064', clothDark: '#1c1e1a', outfit: 'coverall', faceW: 1, jawW: 1, tired: 0.1, gaunt: 0.1, age: 0.1, stubble: 0, skinTexture: 0, waxy: 0.22, seam: true, drops: 18 },
    frames: [
      P({ smile: 0.4, pupilR: 6 }),
      P({ smile: 0.4, blinkL: 1, pupilR: 6 }),
      P({ smile: 0.9, mouthW: 1.2, tilt: 9, hx: 4, pupilR: 6.5, seamOpen: 0.2 }),
      P({ smile: 0.9, mouthW: 1.25, tilt: 11, hx: 4, blinkR: 0.6, pupilL: 3, pupilR: 7, seamOpen: 0.45 }),
      P({ smile: 0.4, pupilR: 6, glitch: true, seamOpen: 0.3, tilt: -3 }),
    ],
    attack: P({ eyeOpen: 1.3, browAngry: 1, mouthOpen: 1.6, mouthW: 1.5, smile: 0.6, pupilL: 2.5, pupilR: 8, tilt: 14, seamOpen: 1, dy: -8 }),
  },
  v3_suspicious: {
    c: { key: 'c', base: '#d6a288', light: '#fad2b8', shadow: '#6a3a2a', rim: '#9ab8d8', sclera: '#eadcd0', iris: '#6a5a2a', irisIn: '#a09048', lip: '#b8706a', lipDark: '#7a4038', lipGloss: 0.3, teeth: '#e0d6bc', hair: 'messy', hairLight: '#5a4630', hairMid: '#2e2218', hairDark: '#120c08', browW: 6, cloth: '#4a4a4a', clothLight: '#7a7a78', clothDark: '#222224', outfit: 'hoodie', faceW: 0.94, jawW: 0.85, tired: 0.45, gaunt: 0.35, age: 0, stubble: 0.12, skinTexture: 0.35, sweat: 12, drops: 22 },
    frames: [
      P({ gazeX: 0.9, browRaise: 0.6, browAsym: 0.4, mouthW: 0.9 }),
      P({ gazeX: -0.9, browRaise: 0.6, mouthW: 0.9, hx: -3 }),
      P({ blinkL: 1, blinkR: 1, browRaise: 0.8, tilt: -3, mouthW: 0.85 }),
      P({ gazeY: 1, gazeX: 0.2, browRaise: 0.3, dy: 4, tilt: 2, mouthOpen: 0.08 }),
      P({ eyeOpen: 1.15, pupilL: 3.5, pupilR: 3.5, browRaise: 1.1, mouthOpen: 0.2, mouthW: 0.85 }),
    ],
    attack: P({ eyeOpen: 1.3, browRaise: 1.6, mouthOpen: 0.8, mouthW: 0.8, pupilL: 3, pupilR: 3, tilt: -5, dy: -4 }),
  },
  v4_coretick: {
    c: { key: 'd', base: '#c8a898', light: '#eed6c8', shadow: '#5e4038', rim: '#a8c0d8', sclera: '#eeeae4', iris: '#8a9498', irisIn: '#c0cacc', lip: '#a47a72', lipDark: '#6a4a44', lipGloss: 0.15, teeth: '#dcd8cc', hair: 'slick', hairLight: '#6a6660', hairMid: '#2a2826', hairDark: '#0e0e0e', browW: 5, cloth: '#8a8878', clothLight: '#c8c6b8', clothDark: '#4a4a40', outfit: 'pressed', faceW: 0.98, jawW: 1.05, tired: 0, gaunt: 0.2, age: 0.3, stubble: 0, skinTexture: 0.15, core: true, temple: true, eyeGlow: '#bfe0f0', mouthGlow: '#bfe8ff' },
    frames: [
      P({ pupilL: 2.5, pupilR: 2.5, glint: 0 }),
      P({ pupilL: 2.5, pupilR: 2.5, glint: 0.5 }),
      P({ pupilL: 2.5, pupilR: 2.5, glint: 1 }),
      P({ pupilL: 2.5, pupilR: 2.5, glint: 0.4, hx: 1 }),
      P({ pupilL: 2.5, pupilR: 2.5, glint: 0, gazeX: 0.3 }),
    ],
    attack: P({ eyeOpen: 1.2, pupilL: 1.5, pupilR: 1.5, mouthOpen: 1.9, mouthW: 1.1, glint: 1, dy: -10 }),
  },
}
