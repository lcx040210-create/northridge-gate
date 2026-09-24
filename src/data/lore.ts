import type { WorldText } from './schema'

export const LORE_TEXTS: WorldText[] = [
  { id: 'poster', surface: 'lightbox', text: '灯箱：「禁止日间外出 · 夜间请保持警惕」——替换事件后第 19 日' },
  { id: 'radio', surface: 'radio', text: '对讲机偶尔冒出实验室的忙音："…收容协议失效…3 号闸口保持关闭…"' },
  { id: 'sticky-note', surface: 'sticky', text: '便利贴（手册柜上）：「不要相信说自己是替班的人。他们都死了。」' },
  { id: 'log-book', surface: 'label', text: '值班日志（武器柜旁）：第 18 夜，白班 3 人未归。第 17 夜，排水系统检出生物组织。第 16 夜…（后面被撕掉）' },
]

export const WORLD_TEXT: WorldText[] = [
  { id: 'manual-missing', surface: 'manual', text: '《识别手册 v0.4》——中间两页被撕掉了。边缘有焦痕。' },
  { id: 'drawer-note', surface: 'drawer', text: '储物柜内壁刻字：「它们在学习。第一夜很容易，第二夜就不一样了。」' },
  { id: 'radio-static', surface: 'radio', text: '对讲机偶尔冒出一段实验室的忙音。有时能听到呼吸声。' },
  { id: 'lightbox', surface: 'lightbox', text: '灯箱：「日间禁止外出」。窗外永远是夜。' },
  { id: 'cabinet-label', surface: 'label', text: '武器柜：斧（可用）、手枪（可用）、其余灰格「白班权限」。白班的人再也没回来过。' },
]
