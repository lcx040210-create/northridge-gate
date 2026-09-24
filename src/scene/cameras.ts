export interface Hotspot {
  id: string
  label: string
  position: [number, number, number] // 玩家站立触发点
  lookAt: [number, number, number]
}

export const HOTSPOTS: Hotspot[] = [
  { id: 'window', label: 'Observation Window', position: [0, 1.6, -2], lookAt: [0, 1.6, -3] },
  { id: 'manual', label: 'Manual Shelf', position: [-3.5, 1.4, 1.2], lookAt: [-4.2, 1.4, 1.2] },
  { id: 'weapons', label: 'Armory', position: [3.5, 1.4, 1.2], lookAt: [4.2, 1.4, 1.2] },
  { id: 'supplies', label: 'Supply Locker', position: [1.8, 1.2, -2], lookAt: [2.5, 1.2, -2.4] },
  { id: 'sofa', label: 'Sofa', position: [0, 1.2, 0.8], lookAt: [0, 1.2, 1.4] },
  { id: 'door', label: 'Door', position: [3.8, 1.6, -0.8], lookAt: [4.5, 1.6, -0.8] },

  // Readable items (positions match the 3D models in room.ts)
  { id: 'book', label: 'Book on Desk', position: [0.45, 1.1, -2.25], lookAt: [0.45, 1.1, -2.25] },
  { id: 'note', label: 'Note', position: [-0.55, 1.1, -2.3], lookAt: [-0.55, 1.1, -2.3] },
  { id: 'poster1', label: 'Protocol Poster', position: [-4.97, 2.1, 0.3], lookAt: [-4.97, 2.1, 0.3] },
  { id: 'poster2', label: 'Hazard Poster', position: [4.97, 2.1, 0.3], lookAt: [4.97, 2.1, 0.3] },
  { id: 'poster3', label: 'Missing Personnel', position: [-4.97, 2.1, 1.9], lookAt: [-4.97, 2.1, 1.9] },
  { id: 'banner', label: 'Banner', position: [-2.5, 1.6, 2.7], lookAt: [-2.5, 3.3, 3] },
]
