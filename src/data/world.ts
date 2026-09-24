import type { WorldText } from './schema'

export const WORLD_TEXT: WorldText[] = [
  { id: 'manual-missing', surface: 'manual', text: '《识别手册 v0.4》——中间两页被撕掉了。' },
  { id: 'drawer-note', surface: 'drawer', text: '便利贴：「不要相信说自己是替班的人。」' },
  { id: 'radio-static', surface: 'radio', text: '对讲机偶尔冒出一段实验室的忙音。' },
  { id: 'lightbox', surface: 'lightbox', text: '灯箱：「日间禁止外出」。窗外永远是夜。' },
  { id: 'cabinet-label', surface: 'label', text: '武器柜：斧（可用）、手枪（可用）、其余灰格「白班权限」。' },

  // 新增背景故事文本
  { id: 'poster-protocol', surface: 'poster1', text: '墙上海报：【替换事件应对守则】第19夜起，所有哨所进入紧急模式。识别失败率容忍度：0%。' },
  { id: 'poster-warning', surface: 'poster2', text: '红色警告牌：「感染者特征：皮肤灰白、瞳孔扩散、体温低于28°C。发现立即处决。」' },
  { id: 'notice-board', surface: 'notice', text: '公告板：「第17夜起，3号闸口前任安保失联。如发现其本人或伪装体，立即上报。」' },
  { id: 'shelf-log', surface: 'shelf1', text: '书架文件：《北岭前哨运行日志》第16夜："今晚又有12人试图进入。只有3个是真的。"' },
  { id: 'shelf-report', surface: 'shelf2', text: '泛黄报告：《替换事件源头调查》"事件源头仍未确定。伪人数量每夜递增。建议全面封锁。"' },
  { id: 'shelf-memo', surface: 'shelf3', text: '备忘录：「记住：伪人会模仿你认识的人。不要犹豫，不要交谈，直接处决。」' },
  { id: 'desk-note', surface: 'desk', text: '桌上笔记：「第18夜记录：误判率3/8。上级警告：再有误判将被替换。我不想成为它们。」' },
  { id: 'door-sign', surface: 'doorsign', text: '门上标签：「紧急通道 — 仅限撤离使用。未经授权开门将触发警报。门已锁死。」' },
  { id: 'window-scratch', surface: 'windowmark', text: '窗户边缘有抓痕：「它们会在外面等。有时等几个小时。不要开窗。」' },
  { id: 'bed-diary', surface: 'bed', text: '床头日记：「第15夜：我看到了我自己站在窗外。它对我笑。我没开门。第二天它就消失了。」' },
  { id: 'sofa-magazine', surface: 'sofa', text: '沙发上的杂志：《替换事件专刊》"伪人智能持续进化。最新案例：伪装成受伤儿童通过检测。"' },
  { id: 'supply-label', surface: 'supply', text: '储物柜标签：「应急物资：止血带×2、镇定剂×1（已用完）、备用弹匣×3。节约使用。」' },
]
