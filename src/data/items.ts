import type { Item } from './schema'

export const ITEMS: Item[] = [
  { id: 'coffee', name: '咖啡', desc: '温的。机子里的咖啡能让你清醒一点。', effect: { san: 8, reaction: 20, constraint: '手抖 20 秒；机只出两杯' } },
  { id: 'sedative', name: '镇静叶', desc: '嚼起来像干草。', effect: { san: 0, constraint: 'San 下降变慢；反应上限 -30%；一次性' } },
  { id: 'axe', name: '消防斧', desc: '本班配发的冷兵器。', effect: {} },
  { id: 'gun', name: '手枪', desc: '对付核响型，打头核。', effect: {} },
  { id: 'fire', name: '焚化罐', desc: '对付湿巢型。', effect: {} },
]
