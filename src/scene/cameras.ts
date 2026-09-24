export interface Hotspot {
  id: string
  label: string
  position: [number, number, number] // 玩家站立触发点
  lookAt: [number, number, number]
}

export const HOTSPOTS: Hotspot[] = [
  { id: 'window', label: '观察窗', position: [0, 1.6, -2], lookAt: [0, 1.6, -3] },
  { id: 'manual', label: '手册柜', position: [-3.5, 1.4, 1.2], lookAt: [-4.2, 1.4, 1.2] },
  { id: 'weapons', label: '武器柜', position: [3.5, 1.4, 1.2], lookAt: [4.2, 1.4, 1.2] },
  { id: 'sofa', label: '沙发', position: [0, 1.2, 1.5], lookAt: [0, 1.2, 2.2] },
  { id: 'door', label: '门', position: [0, 1.6, 2.3], lookAt: [0, 1.6, 3] },
]
