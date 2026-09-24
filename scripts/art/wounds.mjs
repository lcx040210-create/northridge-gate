// 伤口 SVG 叠加层生成
import { svg } from './lib.mjs'

const RED = '#8a1810'
const BLACK = '#1a1210'

export function woundOverlay(type, location) {
  const defs = `<filter id="blood"><feTurbulence baseFrequency="0.5" numOctaves="3"/><feColorMatrix values="0.8 0 0 0 0.54  0 0.1 0 0 0.094  0 0 0.1 0 0.063  0 0 0 0.9 0"/></filter>`

  if (type === 'bullet_hole') {
    // 弹孔：黑色圆圈 + 放射裂纹
    let b = `<circle cx="300" cy="400" r="8" fill="${BLACK}"/>`
    b += `<circle cx="300" cy="400" r="12" fill="none" stroke="${RED}" stroke-width="2" opacity="0.6"/>`
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2
      const x = 300 + Math.cos(angle) * 20
      const y = 400 + Math.sin(angle) * 20
      b += `<line x1="300" y1="400" x2="${x}" y2="${y}" stroke="${RED}" stroke-width="1.5" opacity="0.5"/>`
    }
    // 液体流出
    b += `<path d="M300 408c-2 20 -1 40 0 60" stroke="${BLACK}" stroke-width="3" fill="none" opacity="0.8"/>`
    return svg(600, 800, defs, b)
  } else if (type === 'slash') {
    // 劈砍：长斜线 + 血迹飞溅
    let b = `<path d="M 280 360 Q 290 380 300 400 Q 310 420 320 440" stroke="${RED}" stroke-width="6" fill="none" opacity="0.9"/>`
    b += `<path d="M 285 370 L 315 430" stroke="${BLACK}" stroke-width="3" fill="none" opacity="0.7"/>`
    // 飞溅
    for (let i = 0; i < 12; i++) {
      const x = 260 + Math.random() * 80
      const y = 350 + Math.random() * 100
      const r = 2 + Math.random() * 4
      b += `<circle cx="${x}" cy="${y}" r="${r}" fill="${RED}" opacity="${0.5 + Math.random() * 0.3}" filter="url(#blood)"/>`
    }
    return svg(600, 800, defs, b)
  } else if (type === 'burn') {
    // 烧伤：黑色焦痕 + 烟雾纹理
    let b = `<ellipse cx="300" cy="400" rx="80" ry="100" fill="${BLACK}" opacity="0.8" filter="url(#smoke)"/>`
    b += `<ellipse cx="300" cy="400" rx="60" ry="80" fill="#3a2a1a" opacity="0.6"/>`
    // 裂纹
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2
      const x = 300 + Math.cos(angle) * 50
      const y = 400 + Math.sin(angle) * 60
      b += `<line x1="300" y1="400" x2="${x}" y2="${y}" stroke="#2a1a0a" stroke-width="1" opacity="0.8"/>`
    }
    const smokeDef = `<filter id="smoke"><feTurbulence baseFrequency="0.03" numOctaves="4"/><feColorMatrix values="0.3 0 0 0 0.2  0 0.3 0 0 0.2  0 0 0.3 0 0.2  0 0 0 0.4 0"/></filter>`
    return svg(600, 800, defs + smokeDef, b)
  }

  return svg(600, 800, '', '')
}

export function coreExplosion() {
  // 核心爆裂：金属碎片 + 火花
  const defs = `<radialGradient id="spark"><stop offset="0%" stop-color="#ffd060"/><stop offset="100%" stop-color="#d04030"/></radialGradient>`
  let b = `<circle cx="300" cy="340" r="40" fill="url(#spark)" opacity="0.9"/>`
  // 放射线
  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * Math.PI * 2
    const x1 = 300 + Math.cos(angle) * 40
    const y1 = 340 + Math.sin(angle) * 40
    const x2 = 300 + Math.cos(angle) * (80 + Math.random() * 40)
    const y2 = 340 + Math.sin(angle) * (80 + Math.random() * 40)
    b += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#ffa030" stroke-width="2" opacity="0.8"/>`
  }
  // 碎片
  for (let i = 0; i < 20; i++) {
    const x = 260 + Math.random() * 80
    const y = 300 + Math.random() * 80
    const size = 3 + Math.random() * 5
    b += `<rect x="${x}" y="${y}" width="${size}" height="${size}" fill="#8a8a80" opacity="0.7" transform="rotate(${Math.random() * 360} ${x} ${y})"/>`
  }
  return svg(600, 800, defs, b)
}
