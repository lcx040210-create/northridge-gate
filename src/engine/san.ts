import type { SanBand } from '../data/schema'

export function applySanDelta(current: number, delta: number): number {
  return Math.max(0, Math.min(100, current + delta))
}

export function getSanBand(san: number, bands: SanBand[]): SanBand {
  return bands.find((b) => san >= b.min && san <= b.max) ?? bands[bands.length - 1]
}
