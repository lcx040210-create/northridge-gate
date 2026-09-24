import type { SanBand } from './schema'

export const SAN_BANDS: SanBand[] = [
  { min: 70, max: 100, effect: 'NORMAL' },
  { min: 40, max: 69, effect: 'RINGING EARS · THE FACE IN THE WINDOW LAGS ONE FRAME' },
  { min: 15, max: 39, effect: 'MANUAL ADMIT/EXECUTE ICONS SWAP FOR 0.4s' },
  { min: 0, max: 14, effect: 'TELLS MAY DISPLAY INVERTED' },
]
