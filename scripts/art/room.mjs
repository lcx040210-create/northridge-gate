// 房间贴图（Three.js 纹理用，不透明）
import { rng, f, svg, FILTERS, linear, radial } from './lib.mjs'

const T = 512
const noise = (id, freq, oct, seed, rgb, a) =>
  `<filter id="${id}" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="${freq}" numOctaves="${oct}" seed="${seed}" stitchTiles="stitch"/><feColorMatrix type="matrix" values="0 0 0 0 ${rgb[0]}  0 0 0 0 ${rgb[1]}  0 0 0 0 ${rgb[2]}  ${a} 0 0 0 ${-a / 2}"/></filter>`
const stains = (r, n, w, h, color, max = 60) =>
  Array.from({ length: n }, () => `<ellipse cx="${f(r() * w)}" cy="${f(r() * h)}" rx="${f(10 + r() * max)}" ry="${f(8 + r() * max * 1.4)}" fill="${color}" opacity="${f(0.05 + r() * 0.12)}" filter="url(#blur16)"/>`).join('')

export function wall() {
  const r = rng(101)
  const defs = FILTERS + noise('conc', 0.6, 3, 4, [0.1, 0.12, 0.1], 1.4) + noise('conc2', 0.02, 3, 9, [0.05, 0.06, 0.05], 1.2)
  let b = `<rect width="${T}" height="${T}" fill="#4a524a"/><rect width="${T}" height="${T}" filter="url(#conc2)" opacity="0.6"/><rect width="${T}" height="${T}" filter="url(#conc)" opacity="0.5"/>`
  // 分块混凝土板 + 下半截墙裙
  b += `<rect y="330" width="${T}" height="182" fill="#2e3a34" opacity="0.85"/><rect y="326" width="${T}" height="8" fill="#1a201c"/>`
  for (const x of [0, 256]) b += `<line x1="${x}" y1="0" x2="${x}" y2="330" stroke="#262c28" stroke-width="3"/>`
  b += `<line x1="0" y1="165" x2="${T}" y2="165" stroke="#2a302c" stroke-width="2" opacity="0.6"/>`
  for (const [x, y] of [[12, 12], [244, 12], [268, 12], [500, 12], [12, 150], [244, 150], [268, 150], [500, 150], [12, 314], [500, 314]]) b += `<circle cx="${x}" cy="${y}" r="3" fill="#20241f"/>`
  b += stains(r, 18, T, 330, '#1c140a')
  // 水渍流痕
  for (let i = 0; i < 14; i++) { const x = r() * T; b += `<path d="M${f(x)} ${f(r() * 120)} l${f((r() - 0.5) * 6)} ${f(80 + r() * 200)}" stroke="#241a10" stroke-width="${f(2 + r() * 4)}" opacity="${f(0.1 + r() * 0.15)}" filter="url(#blur2)"/>` }
  return svg(T, T, defs, b)
}

export function floor() {
  const r = rng(202)
  const defs = FILTERS + noise('lino', 0.8, 2, 5, [0.1, 0.1, 0.08], 1.2)
  let b = ''
  for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) {
    const d = (x + y) % 2 === 0
    b += `<rect x="${x * 128}" y="${y * 128}" width="128" height="128" fill="${d ? '#3a3c34' : '#5a5a4c'}"/>`
  }
  b += `<g stroke="#1a1a16" stroke-width="2">${[128, 256, 384].map((p) => `<line x1="${p}" y1="0" x2="${p}" y2="${T}"/><line x1="0" y1="${p}" x2="${T}" y2="${p}"/>`).join('')}</g>`
  b += `<rect width="${T}" height="${T}" filter="url(#lino)" opacity="0.5"/>` + stains(r, 22, T, T, '#140e06', 50)
  // 划痕 + 一块发黑的旧血迹
  for (let i = 0; i < 30; i++) { const x = r() * T, y = r() * T, a = r() * Math.PI; b += `<line x1="${f(x)}" y1="${f(y)}" x2="${f(x + Math.cos(a) * 40)}" y2="${f(y + Math.sin(a) * 40)}" stroke="#8a8a78" stroke-width="0.8" opacity="0.25"/>` }
  b += `<ellipse cx="360" cy="140" rx="46" ry="30" fill="#2a0c08" opacity="0.35" filter="url(#blur4)"/>`
  return svg(T, T, defs, b)
}

export function sofa() {
  const r = rng(303)
  const defs = FILTERS + noise('leather', 0.35, 4, 6, [0.08, 0.03, 0.02], 1.6)
  let b = `<rect width="${T}" height="${T}" fill="#5a2a1e"/><rect width="${T}" height="${T}" filter="url(#leather)" opacity="0.7"/>`
  // 绗缝纽扣
  for (let y = 64; y < T; y += 128) for (let x = 64; x < T; x += 128) {
    b += `<circle cx="${x}" cy="${y}" r="26" fill="#2a0e08" opacity="0.35" filter="url(#blur8)"/><circle cx="${x}" cy="${y}" r="5" fill="#1e0a06"/>`
    for (const a of [0.8, 2.4, 3.9, 5.5]) b += `<line x1="${x}" y1="${y}" x2="${f(x + Math.cos(a) * 64)}" y2="${f(y + Math.sin(a) * 64)}" stroke="#2a0e08" stroke-width="2" opacity="0.4"/>`
  }
  // 磨损高光 + 裂口
  b += stains(r, 10, T, T, '#b88060', 40)
  b += `<path d="M300 380 l40 12 l-8 6 l30 4" stroke="#f0d8a0" stroke-width="3" fill="none" opacity="0.5"/><path d="M300 380 l40 12 l-8 6 l30 4" stroke="#1a0804" stroke-width="1.5" fill="none"/>`
  return svg(T, T, defs, b)
}

export function metal() {
  const r = rng(404)
  const defs = FILTERS + `<filter id="brush" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.004 0.6" numOctaves="2" seed="2" stitchTiles="stitch"/><feColorMatrix type="matrix" values="0 0 0 0 0.7  0 0 0 0 0.72  0 0 0 0 0.7  0.9 0 0 0 -0.3"/></filter>` +
    linear('mt', [[0, '#5a6064'], [1, '#383c40']])
  let b = `<rect width="${T}" height="${T}" fill="url(#mt)"/><rect width="${T}" height="${T}" filter="url(#brush)" opacity="0.35"/>`
  b += `<rect x="8" y="8" width="496" height="496" fill="none" stroke="#24282a" stroke-width="4"/>`
  for (let i = 0; i < 8; i++) { const p = 24 + i * 66; b += `<circle cx="${p}" cy="22" r="5" fill="#2a2e30"/><circle cx="${p - 1}" cy="21" r="2" fill="#8a9094"/><circle cx="${p}" cy="490" r="5" fill="#2a2e30"/><circle cx="${p - 1}" cy="489" r="2" fill="#8a9094"/>` }
  b += stains(r, 14, T, T, '#5a3010', 50)
  return svg(T, T, defs, b)
}

export function wood() {
  const r = rng(505)
  const defs = FILTERS + `<filter id="grainw" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.006 0.12" numOctaves="4" seed="4" stitchTiles="stitch"/><feColorMatrix type="matrix" values="0 0 0 0 0.12  0 0 0 0 0.07  0 0 0 0 0.03  1.8 0 0 0 -0.6"/></filter>`
  let b = `<rect width="${T}" height="${T}" fill="#6a4a2a"/><rect width="${T}" height="${T}" filter="url(#grainw)"/>`
  for (const y of [128, 256, 384]) b += `<line x1="0" y1="${y}" x2="${T}" y2="${y}" stroke="#2a1a0a" stroke-width="3"/>`
  for (let i = 0; i < 5; i++) b += `<ellipse cx="${f(r() * T)}" cy="${f(r() * T)}" rx="${f(10 + r() * 14)}" ry="5" fill="none" stroke="#3a220e" stroke-width="2" opacity="0.6"/>`
  return svg(T, T, defs, b)
}

// 门：铁门 + 锁 + 告示
export function door() {
  const W = 512, H = 1024
  const defs = FILTERS + linear('dr', [[0, '#4a5054'], [1, '#2a2e32']], 'x1="0" y1="0" x2="1" y2="1"') + noise('rust', 0.05, 4, 12, [0.3, 0.12, 0.04], 1.6)
  let b = `<rect width="${W}" height="${H}" fill="url(#dr)"/><rect width="${W}" height="${H}" filter="url(#rust)" opacity="0.45"/>`
  b += `<rect x="40" y="40" width="432" height="420" rx="6" fill="none" stroke="#1a1e20" stroke-width="6"/><rect x="40" y="540" width="432" height="440" rx="6" fill="none" stroke="#1a1e20" stroke-width="6"/>`
  b += `<rect x="46" y="46" width="420" height="4" fill="#7a8084" opacity="0.5"/>`
  b += `<rect x="120" y="120" width="272" height="150" fill="#e8d44a"/><rect x="128" y="128" width="256" height="134" fill="none" stroke="#1a1a1a" stroke-width="4"/>`
  b += `<text x="256" y="190" font-family="Impact,Arial Black,sans-serif" font-size="46" text-anchor="middle" fill="#1a1a1a">NO EXIT</text><text x="256" y="240" font-family="Arial,sans-serif" font-size="20" text-anchor="middle" fill="#1a1a1a" font-weight="bold">UNTIL DAWN · 06:00</text>`
  b += `<path d="M40 1000 L472 1000" stroke="#e8d44a" stroke-width="30" stroke-dasharray="40 40"/>`
  b += Array.from({ length: 10 }, (_, i) => `<circle cx="${60 + i * 44}" cy="500" r="6" fill="#1e2224"/>`).join('')
  return svg(W, H, defs, b)
}

// 武器柜正面
export function cabinet() {
  const W = 512, H = 1024
  const defs = FILTERS + linear('cb', [[0, '#3a4a3a'], [1, '#1e261e']], 'x1="0" y1="0" x2="1" y2="1"') + noise('cbn', 0.5, 3, 13, [0.1, 0.12, 0.1], 1.2)
  let b = `<rect width="${W}" height="${H}" fill="url(#cb)"/><rect width="${W}" height="${H}" filter="url(#cbn)" opacity="0.4"/>`
  for (let i = 0; i < 6; i++) b += `<rect x="90" y="${100 + i * 26}" width="332" height="10" rx="4" fill="#0e140e"/>`
  b += `<rect x="70" y="330" width="372" height="90" fill="#b82010"/><text x="256" y="392" font-family="Impact,Arial Black,sans-serif" font-size="56" text-anchor="middle" fill="#f0e8d8" letter-spacing="8">ARMORY</text>`
  b += `<text x="256" y="470" font-family="Arial,sans-serif" font-size="22" text-anchor="middle" fill="#c8c8b0">AUTHORIZED EXECUTION ONLY</text>`
  b += `<rect x="400" y="560" width="30" height="120" rx="6" fill="#8a8e88"/><rect x="404" y="564" width="8" height="112" fill="#d0d4ce" opacity="0.5"/>`
  b += `<rect x="226" y="820" width="60" height="44" rx="4" fill="#1a1a1a"/><circle cx="256" cy="842" r="8" fill="#c8a040"/>`
  for (const y of [40, 984]) b += `<rect x="20" y="${y - 6}" width="472" height="12" fill="#141a14"/>`
  return svg(W, H, defs, b)
}

// 灯箱：墙上的规则告示（会发光）
export function poster() {
  const W = 1024, H = 512
  const defs = FILTERS + radial('lb', [[0, '#fff8e0'], [1, '#e8d8a8']])
  let b = `<rect width="${W}" height="${H}" fill="#1a1a16"/><rect x="16" y="16" width="992" height="480" fill="url(#lb)"/>`
  b += `<text x="512" y="100" font-family="Impact,Arial Black,sans-serif" font-size="64" text-anchor="middle" fill="#8a1810" letter-spacing="6">CHECKPOINT RULES</text>`
  const rules = ['1. ONE VISITOR AT A TIME.', '2. INSPECT BEFORE YOU JUDGE.', '3. THEY WILL LIE. THE BODY DOES NOT.', '4. DO NOT OPEN THE DOOR.', '5. IF IT SMILES TOO LONG — ARMORY.']
  rules.forEach((t, i) => { b += `<text x="80" y="${180 + i * 62}" font-family="Courier New,monospace" font-size="38" font-weight="bold" fill="#1a1a14">${t}</text>` })
  b += `<path d="M760 440 l120 -20" stroke="#8a1810" stroke-width="6" opacity="0.7"/><text x="770" y="480" font-family="Brush Script MT,cursive" font-size="34" fill="#8a1810" transform="rotate(-6 770 480)">they knock</text>`
  return svg(W, H, defs, b)
}

// 书脊
export function books() {
  const r = rng(606)
  const W = 512, H = 256
  const cols = ['#5a1a14', '#1e3a4a', '#2a3a1e', '#4a3a1a', '#3a1a3a', '#1a1a1a', '#6a5a3a']
  let b = `<rect width="${W}" height="${H}" fill="#1a1208"/>`
  let x = 6
  while (x < W - 20) {
    const w = 22 + r() * 30, h = 170 + r() * 80, c = cols[Math.floor(r() * cols.length)]
    b += `<rect x="${f(x)}" y="${f(H - h)}" width="${f(w)}" height="${f(h)}" fill="${c}"/><rect x="${f(x)}" y="${f(H - h)}" width="3" height="${f(h)}" fill="#fff" opacity="0.1"/>`
    b += `<rect x="${f(x + 4)}" y="${f(H - h + 20)}" width="${f(w - 8)}" height="6" fill="#c8a040" opacity="0.7"/><rect x="${f(x + 4)}" y="${f(H - 30)}" width="${f(w - 8)}" height="6" fill="#c8a040" opacity="0.7"/>`
    x += w + 2
  }
  return svg(W, H, FILTERS, b)
}

// 可阅读海报：紧急应对守则
export function posterProtocol() {
  const W = 640, H = 800
  const defs = FILTERS
  let b = `<rect width="${W}" height="${H}" fill="#d8d0b8"/>`
  b += `<rect x="24" y="24" width="592" height="752" fill="none" stroke="#5a1810" stroke-width="6"/>`
  b += `<rect x="36" y="36" width="568" height="40" fill="#5a1810"/>`
  b += `<text x="320" y="64" font-family="Impact,Arial Black,sans-serif" font-size="28" text-anchor="middle" fill="#e8dcc0" letter-spacing="4">紧急应对守则</text>`
  const lines = ['· 识别失败率容忍度：0%', '· 可疑目标一律处决', '· 禁止与来访者交谈超过30秒', '· 每夜必须上报处理记录', '· 违反者立即调离岗位', '—— 北岭安全委员会']
  lines.forEach((t, i) => {
    b += `<text x="80" y="${160 + i * 70}" font-family="SimHei,Microsoft YaHei,sans-serif" font-size="34" fill="#1a1410">${t}</text>`
  })
  // 撕裂与污渍
  b += `<path d="M0 700 L120 690 L240 705 L360 688 L480 702 L640 692" stroke="none"/>`
  for (let i = 0; i < 8; i++) b += `<circle cx="${40 + Math.random() * 560}" cy="${60 + Math.random() * 680}" r="${6 + Math.random() * 18}" fill="#4a3a20" opacity="${0.04 + Math.random() * 0.08}"/>`
  b += `<rect x="600" y="0" width="40" height="120" fill="#b8b0a0" transform="rotate(8 600 0)" opacity="0.7"/>`
  return svg(W, H, defs, b)
}

// 可阅读海报：感染者特征警告
export function posterWarning() {
  const W = 640, H = 800
  const defs = FILTERS
  let b = `<rect width="${W}" height="${H}" fill="#c8b8a8"/>`
  b += `<rect x="24" y="24" width="592" height="752" fill="none" stroke="#8a1810" stroke-width="8"/>`
  b += `<rect x="36" y="36" width="568" height="44" fill="#8a1810"/>`
  b += `<text x="320" y="68" font-family="Impact,Arial Black,sans-serif" font-size="30" text-anchor="middle" fill="#f0e0c8" letter-spacing="6">⚠ 危险警告 ⚠</text>`
  const lines = ['感染者识别特征：', '', '外观：', '· 皮肤灰白色', '· 瞳孔扩散', '· 体温低于28°C', '', '行为：', '· 声称需要帮助', '· 恳求放行治疗', '· 自述听到耳语', '', '应对：立即处决。', '感染无法逆转。']
  let y = 140
  for (const t of lines) {
    if (t === '') { y += 20; continue }
    const big = t === '感染者识别特征：' || t === '外观：' || t === '行为：' || t === '应对：立即处决。' || t === '感染无法逆转。'
    b += `<text x="90" y="${y}" font-family="SimHei,Microsoft YaHei,sans-serif" font-size="${big ? 34 : 30}" font-weight="${big ? 'bold' : 'normal'}" fill="${big ? '#5a1010' : '#1a1410'}">${t}</text>`
    y += 52
  }
  b += `<circle cx="520" cy="180" r="40" fill="none" stroke="#8a1810" stroke-width="5"/><path d="M500 160 L540 200 M540 160 L500 200" stroke="#8a1810" stroke-width="5"/>`
  return svg(W, H, defs, b)
}

// 可阅读海报：失联人员公告
export function posterMissing() {
  const W = 640, H = 800
  const defs = FILTERS
  let b = `<rect width="${W}" height="${H}" fill="#b8b0a0"/>`
  b += `<rect x="24" y="24" width="592" height="752" fill="none" stroke="#2a2a24" stroke-width="6"/>`
  b += `<rect x="36" y="36" width="568" height="44" fill="#2a2a24"/>`
  b += `<text x="320" y="68" font-family="Impact,Arial Black,sans-serif" font-size="30" text-anchor="middle" fill="#e0d8c8" letter-spacing="6">失联人员通报</text>`
  b += `<text x="320" y="130" font-family="SimHei,Microsoft YaHei,sans-serif" font-size="28" fill="#1a1410" text-anchor="middle">第17夜起失联：</text>`
  const people = ['3号闸口安保：张伟', '7号闸口安保：李明', '实验室技术员：王芳']
  people.forEach((t, i) => {
    b += `<text x="140" y="${200 + i * 70}" font-family="SimHei,Microsoft YaHei,sans-serif" font-size="30" fill="#2a2018">${t}</text>`
  })
  b += `<text x="320" y="460" font-family="SimHei,Microsoft YaHei,sans-serif" font-size="28" fill="#5a1010" text-anchor="middle">如发现其本人或伪装体，</text>`
  b += `<text x="320" y="510" font-family="SimHei,Microsoft YaHei,sans-serif" font-size="28" fill="#5a1010" text-anchor="middle">立即上报，切勿接触。</text>`
  b += `<text x="320" y="600" font-family="SimHei,Microsoft YaHei,sans-serif" font-size="24" fill="#4a4a40" text-anchor="middle">—— 北岭前哨管理处</text>`
  // 旧化
  for (let i = 0; i < 10; i++) b += `<ellipse cx="${60 + Math.random() * 520}" cy="${80 + Math.random() * 640}" rx="${20 + Math.random() * 50}" ry="${12 + Math.random() * 30}" fill="#6a5a3a" opacity="${0.05 + Math.random() * 0.08}" filter="url(#blur4)"/>`
  return svg(W, H, defs, b)
}
