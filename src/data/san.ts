import type { SanBand } from './schema'

export const SAN_BANDS: SanBand[] = [
  { min: 70, max: 100, effect: '正常' },
  { min: 40, max: 69, effect: '耳鸣、脸延迟一帧' },
  { min: 15, max: 39, effect: '手册「放行/处决」图标对调 0.4 秒' },
  { min: 0, max: 14, effect: '破绽可能反转显示' },
]
