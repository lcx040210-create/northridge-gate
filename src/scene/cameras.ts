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
  { id: 'supplies', label: '储物柜', position: [1.8, 1.2, -2], lookAt: [2.5, 1.2, -2.4] },
  { id: 'sofa', label: '沙发', position: [0, 1.2, 1.2], lookAt: [0, 1.2, 1.8] },
  { id: 'door', label: '门', position: [3.8, 1.6, -0.8], lookAt: [4.5, 1.6, -0.8] },

  // 新增可阅读物品
  { id: 'book', label: '桌上书籍', position: [0, 1.0, -2.2], lookAt: [0, 0.8, -2.5] },
  { id: 'note', label: '纸条', position: [0.5, 1.0, -2.3], lookAt: [0.5, 0.8, -2.5] },
  { id: 'poster1', label: '墙上海报', position: [-2, 1.6, -2.5], lookAt: [-2.5, 1.6, -2.8] },
  { id: 'poster2', label: '警告海报', position: [2, 1.6, -2.5], lookAt: [2.5, 1.6, -2.8] },
  { id: 'poster3', label: '失联公告', position: [-4, 1.6, 0], lookAt: [-4.8, 1.6, 0] },
]
