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

  // 新增可阅读物品（与 room.ts 中的 3D 模型位置一致）
  { id: 'book', label: '桌上书籍', position: [0.45, 1.1, -2.25], lookAt: [0.45, 1.1, -2.25] },
  { id: 'note', label: '纸条', position: [-0.55, 1.1, -2.3], lookAt: [-0.55, 1.1, -2.3] },
  { id: 'poster1', label: '紧急应对守则', position: [-4.97, 2.1, 0.3], lookAt: [-4.97, 2.1, 0.3] },
  { id: 'poster2', label: '感染者警告', position: [4.97, 2.1, 0.3], lookAt: [4.97, 2.1, 0.3] },
  { id: 'poster3', label: '失联人员公告', position: [-4.97, 2.1, 1.9], lookAt: [-4.97, 2.1, 1.9] },
  { id: 'banner', label: '横幅', position: [-2.5, 1.6, 2.7], lookAt: [-2.5, 3.3, 3] },
]
