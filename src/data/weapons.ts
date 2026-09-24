export interface Weapon {
  id: 'axe' | 'gun' | 'fire'
  name: string
  desc: string
  locked: boolean
  constraint?: string
}

export const WEAPONS: Weapon[] = [
  { id: 'axe', name: '消防斧', desc: '本班配发的冷兵器。', locked: false },
  { id: 'gun', name: '手枪', desc: '对付核响型，打头核。', locked: false },
  { id: 'fire', name: '焚化罐', desc: '对付湿巢型。', locked: false },
]

export interface Consumable {
  id: 'coffee' | 'sedative'
  name: string
  desc: string
  constraint: string
}

export const CONSUMABLES: Consumable[] = [
  { id: 'coffee', name: '咖啡', desc: '温的。机子里的咖啡能让你清醒一点。', constraint: '手抖 20 秒；机只出两杯' },
  { id: 'sedative', name: '镇静叶', desc: '嚼起来像干草。', constraint: 'San 下降变慢；反应上限 -30%；一次性' },
]
