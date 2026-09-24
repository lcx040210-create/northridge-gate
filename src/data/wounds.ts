// 武器痕迹 SVG 资源路径
export const WOUND_MARKS = {
  axe: './assets/env/window_residue_axe.svg',
  gun: './assets/env/window_residue_gun.svg',
  fire: './assets/env/window_residue_fire.svg',
}

export interface WoundMark {
  tool: 'axe' | 'gun' | 'fire'
  x: number // 百分比
  y: number // 百分比
  rotation: number // 度
  scale: number
}
