// 生成全部 SVG 资源：node scripts/art/gen.mjs [portraits|scenes|exec|room|icons]
import { fileURLToPath } from 'node:url'
import { write } from './lib.mjs'
import { CAST, character } from './portraits.mjs'

const ROOT = fileURLToPath(new URL('../../public/assets', import.meta.url))
const only = process.argv[2]
const want = (k) => !only || only === k

if (want('portraits')) {
  for (const [name, { c, frames, attack }] of Object.entries(CAST)) {
    frames.forEach((p, i) => write(ROOT, `portraits/${name}_frame${i + 1}.svg`, character(c, p)))
    write(ROOT, `portraits/${name}_attack.svg`, character(c, attack))
  }
  console.log('portraits done')
}

if (want('scenes')) {
  const s = await import('./scenes.mjs')
  write(ROOT, 'scenes/window.svg', s.windowScene())
  write(ROOT, 'scenes/window_glass.svg', s.windowGlass())
  write(ROOT, 'env/shoes_hallucination.svg', s.shoes())
  write(ROOT, 'env/corridor_silhouette.svg', s.corridorSilhouette())
  for (const t of ['axe', 'gun', 'fire']) write(ROOT, `env/window_residue_${t}.svg`, s.residue(t))
  write(ROOT, 'env/glass_shatter.svg', s.shatter())
  write(ROOT, 'env/blood_vignette.svg', s.bloodVignette())
  write(ROOT, 'ui/title.svg', s.titleArt())
  write(ROOT, 'ui/dawn.svg', s.dawnArt())
  write(ROOT, 'ui/teaser.svg', s.teaserArt())
  console.log('scenes done')
}

if (want('exec')) {
  const { execFrames } = await import('./exec.mjs')
  for (const t of ['axe', 'gun', 'fire']) execFrames(t).forEach((s, i) => write(ROOT, `exec/exec_${t}_${i + 1}.svg`, s))
  console.log('exec done')
}

if (want('room')) {
  const r = await import('./room.mjs')
  for (const k of ['wall', 'floor', 'sofa', 'metal', 'wood', 'door', 'cabinet', 'poster', 'books', 'posterProtocol', 'posterWarning', 'posterMissing', 'banner']) write(ROOT, `room/${k}.svg`, r[k]())
  console.log('room done')
}

if (want('icons')) {
  const { ICONS, icon } = await import('./icons.mjs')
  for (const k of Object.keys(ICONS)) write(ROOT, `icons/${k}.svg`, icon(k))
  const { manualArt } = await import('./icons.mjs')
  for (const k of ['skinfit', 'coretick', 'wetnest', 'infected', 'mirror', 'hollow', 'crawler']) write(ROOT, `manual/${k}.svg`, manualArt(k))
  console.log('icons done')
}
