// 基础枚举
export type Verdict = 'admit' | 'execute' | 'contain'   // 三判定，只进结局
export type Tool = 'axe' | 'gun' | 'fire'               // 处决工具
export type Role = 'human' | 'skinfit' | 'coretick' | 'wetnest'
export type VisitorState = 'clean' | 'infected'         // 感染者是状态，不是第 4 图鉴
export type VoiceKind = 'human' | 'suspicious' | 'skinfit' | 'coretick' | 'wetnest'
export type Surface = 'manual' | 'sticky' | 'radio' | 'lightbox' | 'drawer' | 'label' | 'poster1' | 'poster2' | 'notice' | 'shelf1' | 'shelf2' | 'shelf3' | 'desk' | 'doorsign' | 'windowmark' | 'bed' | 'sofa' | 'supply'

// 判定结果（文案 + San 变动；对错由引擎推导，不写在数据里）
export interface Outcome {
  text: string
  san?: number
}

export interface Visitor {
  id: string
  claimedName: string            // 自称姓名 / 工号
  role: Role
  state: VisitorState
  portrait: string               // 立绘路径
  freezeFrames: string[]         // 伪人 3–5 帧定格；人类只 1 帧
  scene?: string                 // 场景背景图层（可选，默认观察窗）
  glitchLine?: string            // 伪人卡帧句（错字/重复标点）；干净人类为空
  greeting?: string              // 靠近窗口时的开场白（打字机播放）
  attackFrame?: string           // 扑击立绘（处决瞄准 / 死亡用）
  voice?: VoiceKind              // 说话声音色
  tells: {
    eye?: string                 // 眼检视结果（扣反应）
    id?: string                  // 证件检视结果（免费）
    questions: { q: string; a: string }[]  // 问一句，最多 2 问，扣反应
  }
  correctVerdict: Verdict
  correctTool?: Tool             // 处决时正确工具；收容/放行为空
  outcomes: Partial<Record<Verdict, Outcome>>
}

export interface Item {
  id: string
  name: string
  desc: string                   // 首次拾取出一行说明
  effect: { san?: number; reaction?: number; constraint?: string }
}

export interface WorldText {
  id: string
  surface: Surface
  text: string
}

export interface Ending {
  id: 'passed' | 'contaminated' | 'unclean'
  condition: string              // 结算条件（供显示）
  lines: string[]                // 天亮翻牌两句文案
}

export interface SanBand {
  min: number
  max: number                    // 0–100，开局 75
  effect: string
}

export interface Execution {
  tool: Tool
  frames: string[]               // 遮黑 + 定格 4 帧
  residue: string                // 玻璃残渣路径
  onSuccess: { san?: number; radioDistort?: boolean }
  onFailure: { san?: number; escaped: true }
}

// 注：相比 spec §5，去掉了数据里的 `OutcomeFlag` 枚举——对错、逃逸、误杀都由引擎根据 `correctVerdict`/`correctTool`/`role` 推导，DeepSeek 填数据时无需手写 flag，减少出错面。
