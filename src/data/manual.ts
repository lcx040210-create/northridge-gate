export interface ManualEntry {
  key: string
  name: string
  tells: string
  response: string
  locked: boolean
}

export const MANUAL_ENTRIES: ManualEntry[] = [
  { key: 'skinfit', name: '贴皮型 Skin-fit', tells: '耳后到颈侧有一道接缝；两只眼睛眨眼不同步；证件上的牙齿数和本人对不上。', response: '冷兵器（消防斧），砍接缝。', locked: false },
  { key: 'coretick', name: '核响型 Core-tick', tells: '锁骨下有金属嘀嗒声，太阳穴偶尔反光；瞳孔针尖大；问天气只会答「和昨天一样」。', response: '手枪，打核。', locked: false },
  { key: 'wetnest', name: '湿巢型 Wet-nest', tells: '指缝反光、呼出的气往下沉；拒绝喝水；声音里带水声。', response: '焚化罐。', locked: false },
  { key: 'infected', name: '感染者 Infected', tells: '还是人，但喉结滑动方向反了；会突然求你「快开门」。', response: '收容，不要杀。', locked: false },
  { key: 'mirror', name: '镜面型 Mirror', tells: '???', response: '???', locked: true },
  { key: 'hollow', name: '空壳型 Hollow', tells: '???', response: '???', locked: true },
  { key: 'crawler', name: '爬行型 Crawler', tells: '???', response: '???', locked: true },
]
