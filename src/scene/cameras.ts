export interface Hotspot {
  id: string
  label: string
  position: [number, number, number]
  lookAt: [number, number, number]
}

export const HOTSPOTS: Hotspot[] = [
  { id: 'window', label: '观察窗', position: [0, 1.6, 2], lookAt: [0, 1.6, 0] },
  { id: 'manual', label: '手册柜', position: [-2, 1.4, 1.5], lookAt: [-2, 1.4, 0] },
  { id: 'weapons', label: '武器台', position: [2, 1.4, 1.5], lookAt: [2, 1.4, 0] },
  { id: 'sofa', label: '沙发', position: [0, 1.2, -1.5], lookAt: [0, 1.2, -3] },
]
