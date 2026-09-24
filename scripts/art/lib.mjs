// SVG 生成通用工具：可复现随机、滤镜、渐变
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname } from 'node:path'

export function rng(seed) {
  let s = seed >>> 0
  return () => {
    s = (s + 0x6d2b79f5) >>> 0
    let t = s
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export const f = (n) => Math.round(n * 10) / 10

export function svg(w, h, defs, body, extra = '') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" ${extra}><defs>${defs}</defs>${body}</svg>`
}

export function write(root, rel, content) {
  const p = `${root}/${rel}`
  mkdirSync(dirname(p), { recursive: true })
  writeFileSync(p, content)
}

// 常用滤镜
export const FILTERS = `
<filter id="blur2" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2"/></filter>
<filter id="blur4" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="4"/></filter>
<filter id="blur8" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="8"/></filter>
<filter id="blur16" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="16"/></filter>
<filter id="blur30" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="30"/></filter>
<filter id="skin" x="0" y="0" width="100%" height="100%">
  <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" result="n"/>
  <feColorMatrix in="n" type="matrix" values="0 0 0 0 0.25  0 0 0 0 0.14  0 0 0 0 0.1  1.6 0 0 0 -0.62" result="d"/>
  <feComposite in="d" in2="SourceGraphic" operator="in" result="dots"/>
  <feMerge><feMergeNode in="SourceGraphic"/><feMergeNode in="dots"/></feMerge>
</filter>
<filter id="grain" x="0" y="0" width="100%" height="100%">
  <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="2" seed="7" stitchTiles="stitch"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 0.55 -0.1"/>
</filter>
<filter id="rough" x="0" y="0" width="100%" height="100%">
  <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="4" seed="11"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.2 0.9"/>
</filter>
<filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
`

export const radial = (id, stops, attrs = '') =>
  `<radialGradient id="${id}" ${attrs}>${stops.map(([o, c, a = 1]) => `<stop offset="${o}" stop-color="${c}" stop-opacity="${a}"/>`).join('')}</radialGradient>`
export const linear = (id, stops, attrs = 'x1="0" y1="0" x2="0" y2="1"') =>
  `<linearGradient id="${id}" ${attrs}>${stops.map(([o, c, a = 1]) => `<stop offset="${o}" stop-color="${c}" stop-opacity="${a}"/>`).join('')}</linearGradient>`

// 整图胶片颗粒 + 暗角
export function grainOverlay(w, h, opacity = 0.18) {
  return `<rect width="${w}" height="${h}" filter="url(#grain)" opacity="${opacity}" style="mix-blend-mode:overlay"/>`
}
export function vignette(w, h, strength = 0.75) {
  return `<radialGradient id="vig" cx="50%" cy="50%" r="72%"><stop offset="0.55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="${strength}"/></radialGradient><rect width="${w}" height="${h}" fill="url(#vig)"/>`
}

// 雨丝
export function rain(w, h, n, seed, opts = {}) {
  const r = rng(seed)
  const { color = '#b8c8d0', len = [18, 48], opacity = [0.12, 0.4], slant = 0.18 } = opts
  let out = ''
  for (let i = 0; i < n; i++) {
    const x = r() * w * 1.2 - w * 0.1
    const y = r() * h
    const l = len[0] + r() * (len[1] - len[0])
    out += `<line x1="${f(x)}" y1="${f(y)}" x2="${f(x - l * slant)}" y2="${f(y + l)}" stroke="${color}" stroke-width="${f(0.6 + r() * 1.1)}" opacity="${f(opacity[0] + r() * (opacity[1] - opacity[0]))}" stroke-linecap="round"/>`
  }
  return out
}

// 玻璃水珠
export function droplets(w, h, n, seed, yMin = 0) {
  const r = rng(seed)
  let out = ''
  for (let i = 0; i < n; i++) {
    const x = r() * w
    const y = yMin + r() * (h - yMin)
    const s = 1.5 + r() * r() * 7
    out += `<g opacity="${f(0.35 + r() * 0.5)}"><ellipse cx="${f(x)}" cy="${f(y)}" rx="${f(s)}" ry="${f(s * 1.15)}" fill="#0a1014" opacity="0.35"/><ellipse cx="${f(x)}" cy="${f(y)}" rx="${f(s * 0.8)}" ry="${f(s)}" fill="none" stroke="#dfe8ee" stroke-width="0.7" opacity="0.5"/><circle cx="${f(x - s * 0.3)}" cy="${f(y - s * 0.4)}" r="${f(s * 0.25)}" fill="#fff" opacity="0.8"/></g>`
    if (r() < 0.12) {
      // 下淌水痕
      const l = 30 + r() * 120
      out += `<path d="M${f(x)} ${f(y)} q ${f((r() - 0.5) * 8)} ${f(l / 2)} ${f((r() - 0.5) * 6)} ${f(l)}" stroke="#dfe8ee" stroke-width="${f(s * 0.5)}" fill="none" opacity="0.18" stroke-linecap="round"/>`
    }
  }
  return out
}

// 裂纹（从中心放射）
export function cracks(cx, cy, n, len, seed, color = '#e8eef0') {
  const r = rng(seed)
  let out = `<g stroke="${color}" fill="none" stroke-linecap="round">`
  for (let i = 0; i < n; i++) {
    let a = (i / n) * Math.PI * 2 + r() * 0.4
    let x = cx, y = cy
    let d = `M${f(x)} ${f(y)}`
    const segs = 4 + Math.floor(r() * 4)
    for (let s = 0; s < segs; s++) {
      a += (r() - 0.5) * 0.6
      const l = (len / segs) * (0.6 + r() * 0.8)
      x += Math.cos(a) * l
      y += Math.sin(a) * l
      d += ` L${f(x)} ${f(y)}`
    }
    out += `<path d="${d}" stroke-width="${f(0.8 + r() * 1.6)}" opacity="${f(0.5 + r() * 0.4)}"/>`
  }
  // 同心环
  for (let k = 1; k <= 3; k++) {
    const rr = (len / 4) * k
    let d = ''
    for (let i = 0; i <= n; i++) {
      const a = (i / n) * Math.PI * 2
      const q = rr * (0.8 + r() * 0.4)
      d += `${i ? 'L' : 'M'}${f(cx + Math.cos(a) * q)} ${f(cy + Math.sin(a) * q)} `
    }
    out += `<path d="${d}" stroke-width="0.8" opacity="0.35"/>`
  }
  return out + '</g>'
}

// 液体飞溅
export function splatter(cx, cy, radius, n, seed, color = '#1a0406') {
  const r = rng(seed)
  let out = `<g fill="${color}">`
  let d = ''
  const pts = 18
  for (let i = 0; i <= pts; i++) {
    const a = (i / pts) * Math.PI * 2
    const q = radius * (0.35 + r() * 0.5)
    d += `${i ? 'L' : 'M'}${f(cx + Math.cos(a) * q)} ${f(cy + Math.sin(a) * q)} `
  }
  out += `<path d="${d}Z"/>`
  for (let i = 0; i < n; i++) {
    const a = r() * Math.PI * 2
    const dist = radius * (0.4 + r() * 1.4)
    const s = 1 + r() * r() * radius * 0.16
    const x = cx + Math.cos(a) * dist, y = cy + Math.sin(a) * dist
    out += `<circle cx="${f(x)}" cy="${f(y)}" r="${f(s)}"/>`
    if (r() < 0.35) {
      const l = 20 + r() * 90
      out += `<path d="M${f(x - s * 0.6)} ${f(y)} L${f(x + s * 0.6)} ${f(y)} L${f(x + s * 0.2)} ${f(y + l)} L${f(x - s * 0.2)} ${f(y + l)} Z" opacity="0.85"/>`
    }
  }
  return out + '</g>'
}
