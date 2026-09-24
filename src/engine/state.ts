import type { Visitor, Verdict, Tool } from '../data/schema'
import { VISITORS } from '../data/visitors'
import { resolveVerdict } from './judge'
import { applySanDelta } from './san'
import type { GameState, VisitorRecord } from './types'
import type { WoundMark } from '../data/wounds'

export const INITIAL_STATE: GameState = {
  phase: 'opening',
  san: 75,
  reaction: 100,
  reactionMax: 100,
  ventilationOn: false,
  sofaUsed: false,
  coffeeUsed: 0,
  sedativeUsed: false,
  hallucinationTriggered: false,
  visitorIndex: 0,
  records: [],
  autoReleased: null,
  sanTouchedBelow15: false,
  equippedWeapon: null,
  gunAmmo: 12,
  sprinklerTriggered: false,
  doorUnlocked: false,
  windowMarks: [],
}

export type Action =
  | { type: 'START' }
  | { type: 'JUDGE'; verdict: Verdict; tool?: Tool }
  | { type: 'INSPECT'; slot: 'eye' | 'id' | 'question' }
  | { type: 'DRINK_COFFEE' }
  | { type: 'USE_SEDATIVE' }
  | { type: 'USE_SOFA'; claw: boolean }
  | { type: 'TOGGLE_VENTILATION' }
  | { type: 'EQUIP_WEAPON'; weapon: Tool }
  | { type: 'USE_WEAPON' }
  | { type: 'TRIGGER_SPRINKLER' }
  | { type: 'MARK_WINDOW'; mark: WoundMark }
  | { type: 'OPEN_DOOR' }

export function currentVisitor(state: GameState): Visitor | null {
  return state.phase === 'visitor' ? VISITORS[state.visitorIndex] ?? null : null
}

export function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case 'START':
      return { ...INITIAL_STATE, phase: 'visitor' }

    case 'JUDGE': {
      const visitor = currentVisitor(state)
      if (!visitor) return state
      const j = resolveVerdict(visitor, action.verdict, action.tool)
      const record: VisitorRecord = {
        visitorId: visitor.id,
        role: visitor.role,
        state: visitor.state,
        correctTool: visitor.correctTool,
        verdict: j.verdict,
        tool: j.tool,
        correct: j.correct,
        escaped: j.escaped,
        sanAtJudge: state.san,
      }
      const rawDelta = j.outcome.san ?? 0
      const delta = state.sedativeUsed && rawDelta < 0 ? Math.round(rawDelta / 2) : rawDelta
      const san = applySanDelta(state.san, delta)
      const visitorIndex = state.visitorIndex + 1
      const allDone = visitorIndex >= VISITORS.length
      return {
        ...state,
        san,
        records: [...state.records, record],
        visitorIndex,
        // 四人检查完毕 → 门解锁，玩家自行开门触发结局
        phase: 'visitor',
        doorUnlocked: state.doorUnlocked || allDone,
        sanTouchedBelow15: state.sanTouchedBelow15 || san < 15,
      }
    }

    case 'INSPECT': {
      return state // 检视不再消耗体力
    }

    case 'DRINK_COFFEE': {
      if (state.coffeeUsed >= 2) return state // 第三杯凉水
      return {
        ...state,
        coffeeUsed: state.coffeeUsed + 1,
        san: applySanDelta(state.san, 8),
        reaction: Math.min(state.reactionMax, state.reaction + 20),
      }
    }

    case 'USE_SEDATIVE': {
      if (state.sedativeUsed) return state
      const reactionMax = Math.round(state.reactionMax * 0.7)
      return { ...state, sedativeUsed: true, reactionMax, reaction: Math.min(state.reaction, reactionMax) }
    }

    case 'USE_SOFA': {
      const visitor = currentVisitor(state)
      if (state.sofaUsed || !visitor) return state
      const san = action.claw
        ? applySanDelta(state.san, -10)
        : applySanDelta(state.san, 20)
      const visitorIndex = state.visitorIndex + 1
      const allDone = visitorIndex >= VISITORS.length
      return {
        ...state,
        san,
        sofaUsed: true,
        autoReleased: visitor,
        visitorIndex,
        phase: 'visitor',
        doorUnlocked: state.doorUnlocked || allDone,
      }
    }

    case 'TOGGLE_VENTILATION':
      return { ...state, ventilationOn: !state.ventilationOn }

    case 'EQUIP_WEAPON':
      return { ...state, equippedWeapon: action.weapon }

    case 'USE_WEAPON': {
      if (!state.equippedWeapon) return state
      if (state.equippedWeapon === 'gun') {
        return { ...state, gunAmmo: Math.max(0, state.gunAmmo - 1) }
      }
      return state
    }

    case 'TRIGGER_SPRINKLER':
      return { ...state, sprinklerTriggered: true }

    case 'MARK_WINDOW': {
      // 最多保留 8 处痕迹，玻璃已满是血
      if (state.windowMarks.length >= 8) return state
      return { ...state, windowMarks: [...state.windowMarks, action.mark] }
    }

    case 'OPEN_DOOR':
      if (!state.doorUnlocked) return state
      return { ...state, phase: 'dawn' }

    default:
      return state
  }
}
