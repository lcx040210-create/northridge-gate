import { useCallback, useEffect, useReducer, useRef, useState } from 'react'
import { reducer, INITIAL_STATE, currentVisitor } from './engine/state'
import type { Verdict as VerdictType, Tool, Visitor } from './data/schema'
import type { ExecutionResult } from './engine/execution'
import { resolveExecution } from './engine/execution'
import { WORLD_TEXT } from './data/world'
import { WEAPONS, CONSUMABLES } from './data/weapons'
import { MANUAL_ENTRIES } from './data/manual'
import RoomScene from './scene/RoomScene'
import Window from './ui/Window'
import Portrait from './ui/Portrait'
import Inspect, { type InspectSlot } from './ui/Inspect'
import Verdict from './ui/Verdict'
import ExecutionOverlay from './ui/ExecutionOverlay'
import AxeQTE from './ui/AxeQTE'
import GunAim from './ui/GunAim'
import FlamethrowerCharge from './ui/FlamethrowerCharge'
import HUD from './ui/HUD'
import WeaponHUD from './ui/WeaponHUD'
import BossFight from './ui/BossFight'
import Dawn from './ui/Dawn'
import Death from './ui/Death'
import * as sfx from './scene/audio'


const OBJECTIVE = (n: number) => (n === 0 ? '走到观察窗前（正前方），按 F 检视来访者' : '有人在敲窗。回到观察窗处理下一位来访者')

export default function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null)
  const [executionGame, setExecutionGame] = useState<{ tool: Tool; visitor: Visitor } | null>(null)
  const [execution, setExecution] = useState<{ result: ExecutionResult; tool: Tool; visitor: Visitor } | null>(null)
  const [death, setDeath] = useState<Visitor | null | false>(false)
  const [toast, setToast] = useState<string | null>(null)
  const toastTimer = useRef(0)

  const visitor = currentVisitor(state)

  const say = useCallback((text: string, ms = 4200) => {
    setToast(text)
    clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setToast(null), ms)
  }, [])

  useEffect(() => {
    if (activeHotspot !== null) document.exitPointerLock?.()
  }, [activeHotspot])

  // San → 耳鸣
  useEffect(() => { sfx.setSan(state.san) }, [state.san])

  // 新来访者：敲窗
  useEffect(() => {
    if (state.phase !== 'visitor' || !visitor) return
    const t = setTimeout(() => sfx.knock(), state.visitorIndex === 0 ? 2500 : 1200)
    return () => clearTimeout(t)
  }, [state.phase, state.visitorIndex, visitor])

  // 幻觉：第 3 位时走廊多出一双鞋
  const showShoes = activeHotspot === 'window' && state.visitorIndex === 2 && !state.hallucinationTriggered
  useEffect(() => { if (showShoes) { const t = setTimeout(() => sfx.whisper(), 2000); return () => clearTimeout(t) } }, [showShoes])

  const open = (id: string) => {
    sfx.interact()
    if (id === 'window') sfx.intercom(true)
    if (id === 'manual') sfx.pageFlip()
    if (id === 'weapons') sfx.cabinet()
    if (id === 'supplies') sfx.interact()
    if (id === 'door') sfx.doorLocked()
    setActiveHotspot(id)
  }
  const close = () => {
    if (activeHotspot === 'window') sfx.intercom(false)
    if (activeHotspot === 'manual') sfx.pageFlip()
    setActiveHotspot(null)
  }

  const handleJudge = (verdict: VerdictType, tool?: Tool) => {
    if (!visitor) return
    if (verdict === 'execute' && tool) {
      // 进入处决小游戏
      setExecutionGame({ tool, visitor })
      return
    }
    if (verdict === 'admit') sfx.admit()
    if (verdict === 'contain') sfx.contain()
    const o = visitor.outcomes[verdict]
    if (o) say(o.text)
    dispatch({ type: 'JUDGE', verdict, tool })
    setActiveHotspot(null)
  }

  // 小游戏成功
  const onExecutionSuccess = () => {
    if (!executionGame) return
    const result = resolveExecution(executionGame.visitor, executionGame.tool)
    setExecution({ result, tool: executionGame.tool, visitor: executionGame.visitor })
    dispatch({ type: 'JUDGE', verdict: 'execute', tool: executionGame.tool })
    setExecutionGame(null)
    setActiveHotspot(null)
  }

  // 小游戏失败
  const onExecutionFail = () => {
    if (!executionGame) return
    sfx.scream()
    say(`它没死！${executionGame.visitor.role !== 'human' ? '它逃进了夜里。' : '他惊恐地逃走了。'}`, 5000)
    // 记录为失败的处决
    dispatch({ type: 'JUDGE', verdict: 'execute', tool: executionGame.tool })
    setExecutionGame(null)
    setActiveHotspot(null)
  }

  // 斧头/焚化罐失败（玩家被攻击）
  const onExecutionDeath = () => {
    setDeath(executionGame?.visitor ?? null)
    setExecutionGame(null)
  }

  // 焚化罐过热
  const onFlamethrowerOverheat = () => {
    sfx.fireWhoosh()
    dispatch({ type: 'JUDGE', verdict: 'execute', tool: 'fire' })
    say('罐体过热爆炸！你被烧伤了。', 4000)
    // San -20
    setExecutionGame(null)
  }

  // 手枪弹药耗尽
  const onOutOfAmmo = () => {
    say('弹药耗尽！', 3000)
    onExecutionDeath()
  }
  const execRef = useRef(execution)
  execRef.current = execution
  const onExecDone = useCallback(() => {
    const e = execRef.current
    if (e) {
      const text = e.result.success ? e.visitor.outcomes.execute?.text : '不对——它没死。玻璃上只剩一道拖痕，它跑进了夜里。'
      if (text) say(text, 5200)
    }
    setExecution(null)
  }, [say])

  if (state.phase === 'opening') {
    return (
      <div className="title">
        <div className="title-card">
          <p>替换事件后第 19 夜。你是北岭前哨 3 号闸口的夜班安保。透过观察窗判断来者是<b style={{ color: '#e8e2cc' }}>人</b>、<b style={{ color: '#e8e2cc' }}>伪人</b>还是<b style={{ color: '#e8e2cc' }}>感染者</b>——放行、处决、收容。对错，天亮才见分晓。</p>
          <div className="keys">
            <kbd>W A S D</kbd><span>移动</span>
            <kbd>鼠标</kbd><span>视角（点击画面锁定鼠标）</span>
            <kbd>空格 / Ctrl</kbd><span>跳跃 / 蹲下</span>
            <kbd>F / 左键</kbd><span>与准星对准的物品交互</span>
            <kbd>M</kbd><span>静音</span>
          </div>
          <p style={{ fontSize: 13 }}>观察窗在你正前方。手册柜在左，武器柜在右，沙发和门在身后。建议戴耳机。</p>
          <button data-testid="start" className="btn big" onClick={() => { sfx.startAmbient(); dispatch({ type: 'START' }) }}>开始值班</button>
        </div>
      </div>
    )
  }

  if (state.phase === 'dawn') return <Dawn state={state} />

  const cabinetLabel = WORLD_TEXT.find((w) => w.surface === 'label')?.text

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <RoomScene onInteract={open} equippedWeapon={state.equippedWeapon} />
      <HUD state={state} />
      <WeaponHUD state={state} />

      {activeHotspot === null && !execution && (
        <>
          <div className="hint" style={{ top: 56 }}>→ {OBJECTIVE(state.records.length)}</div>
          <div className="hint" style={{ bottom: 28, color: '#c8c8c0' }}>准星对准物品，按 F 交互</div>
        </>
      )}

      {toast && <div className="toast">{toast}</div>}

      {activeHotspot === 'window' && visitor && (
        <div className="window-view">
          <div className="pane">
            <img src={visitor.scene ?? '/assets/scenes/window.svg'} alt="" />
            {showShoes && <img className="shoes" src="/assets/env/shoes_hallucination.svg" alt="" />}
            <Portrait visitor={visitor} />
            <img src="/assets/scenes/window_glass.svg" alt="" />
            <div className="rim" />
            {showShoes && (
              <p data-testid="hallucination" style={{ position: 'absolute', bottom: 14, left: 14, color: '#e0a0a0', background: 'rgba(0,0,0,0.6)', padding: '4px 10px', borderRadius: 3 }}>走廊里，多了一双鞋。</p>
            )}
          </div>
          <div className="side">
            <Window visitor={visitor} />
            <Inspect key={visitor.id} visitor={visitor} onInspect={(s: InspectSlot) => dispatch({ type: 'INSPECT', slot: s })} />
            <Verdict key={`v-${visitor.id}`} disabled={false} onJudge={handleJudge} />
            <button className="btn" onClick={close} style={{ alignSelf: 'flex-start' }}>离开窗口</button>
          </div>
        </div>
      )}

      {activeHotspot === 'manual' && (
        <div className="overlay">
          <div className="manual">
            <div className="panel-head">
              <h2><img src="/assets/icons/manual.svg" alt="" style={{ filter: 'invert(0.85)' }} />识别手册 v0.4</h2>
              <button className="btn" onClick={close}>合上</button>
            </div>
            <div className="pages">
              {MANUAL_ENTRIES.map((p) => (
                <div key={p.key} className={`entry ${p.locked ? 'locked' : ''}`}>
                  <img src={`/assets/manual/${p.key}.svg`} alt="" style={p.locked ? { filter: 'brightness(0.3) blur(2px)' } : {}} />
                  <div>
                    <b>{p.name} {p.locked && <span style={{ color: '#8a6a4a', fontSize: 13 }}>🔒 未解锁</span>}</b>
                    <p style={p.locked ? { color: '#6a6a60' } : {}}>{p.tells}</p>
                    <p className="resp" style={p.locked ? { color: '#6a6a60' } : {}}>应对：{p.response}</p>
                  </div>
                </div>
              ))}
              <p className="note">
                规则：先检视再判定。证件免费，看眼睛和问话会消耗反应时间。<br />
                处决时要亲手瞄准弱点，10 秒内不动手，它会冲破玻璃。用错武器，它会逃走。<br />
                {WORLD_TEXT.find((w) => w.surface === 'manual')?.text} {WORLD_TEXT.find((w) => w.surface === 'drawer')?.text}
              </p>
            </div>
          </div>
        </div>
      )}

      {activeHotspot === 'weapons' && (
        <div className="overlay">
          <div className="panel" style={{ width: 640 }}>
            <div className="panel-head">
              <h2><img src="/assets/icons/gun.svg" alt="" />武器柜 ARMORY</h2>
              <button className="btn" onClick={() => { sfx.cabinet(); close() }}>关上</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, padding: '16px 0' }}>
              {WEAPONS.map((w) => (
                <div
                  key={w.id}
                  className={`weapon-slot ${w.locked ? 'locked' : ''}`}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 16,
                    background: w.locked ? '#2a2a24' : state.equippedWeapon === w.id ? '#4a5548' : '#3a3a32',
                    borderRadius: 6,
                    border: w.locked ? '2px dashed #4a4a40' : state.equippedWeapon === w.id ? '2px solid #60b060' : '2px solid #5a5a50',
                    cursor: w.locked ? 'not-allowed' : 'pointer',
                  }}
                  onClick={() => {
                    if (!w.locked) {
                      dispatch({ type: 'EQUIP_WEAPON', weapon: w.id })
                      sfx.interact()
                      say(`已装备 ${w.name}`)
                    }
                  }}
                >
                  <img src={`/assets/icons/${w.id}.svg`} alt="" style={{ width: 72, height: 72, marginBottom: 8, filter: w.locked ? 'brightness(0.3)' : 'none' }} />
                  <div style={{ fontWeight: 'bold', marginBottom: 4, color: w.locked ? '#6a6a60' : '#e8e2cc' }}>{w.name}</div>
                  {w.locked && <div style={{ fontSize: 12, color: '#8a6a4a' }}>🔒 白班权限</div>}
                  {!w.locked && <div className="desc" style={{ textAlign: 'center', fontSize: 12 }}>{w.desc}</div>}
                  {state.equippedWeapon === w.id && <div style={{ marginTop: 8, color: '#60b060', fontSize: 11 }}>✓ 已装备</div>}
                </div>
              ))}
            </div>
            <p className="desc" style={{ color: '#8a8a80', fontSize: 12, marginTop: 8 }}>
              点击武器装备，按 F 键使用
            </p>
          </div>
        </div>
      )}

      {activeHotspot === 'supplies' && (
        <div className="overlay">
          <div className="panel" style={{ width: 520 }}>
            <div className="panel-head">
              <h2><img src="/assets/icons/coffee.svg" alt="" />储物柜</h2>
              <button className="btn" onClick={close}>关上</button>
            </div>
            {CONSUMABLES.map((i) => (
              <div key={i.id} className="item">
                <img src={`/assets/icons/${i.id}.svg`} alt="" />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 'bold', marginBottom: 2 }}>{i.name}</div>
                  <div className="desc">{i.desc}</div>
                  <div className="warn">⚠ {i.constraint}</div>
                </div>
                {i.id === 'coffee' && <button className="btn" disabled={state.coffeeUsed >= 2} onClick={() => { sfx.coffee(); dispatch({ type: 'DRINK_COFFEE' }); say('温的苦味液体。心跳开始加快。') }}>{state.coffeeUsed >= 2 ? '已喝光' : '喝'}</button>}
                {i.id === 'sedative' && <button className="btn" disabled={state.sedativeUsed} onClick={() => { sfx.chew(); dispatch({ type: 'USE_SEDATIVE' }); say('干草般的味道。呼吸逐渐平稳。') }}>{state.sedativeUsed ? '已用' : '嚼'}</button>}
              </div>
            ))}
            <p className="desc" style={{ color: '#8a8a80', fontSize: 12, marginTop: 16 }}>
              {WORLD_TEXT.find((w) => w.surface === 'drawer')?.text}
            </p>
          </div>
        </div>
      )}

      {activeHotspot === 'sofa' && (
        <div className="overlay">
          <div className="panel" style={{ width: 440 }}>
            <div className="panel-head">
              <h2><img src="/assets/icons/sofa.svg" alt="" />沙发</h2>
              <button className="btn" onClick={close}>离开</button>
            </div>
            <p style={{ lineHeight: 1.7, marginBottom: 16 }}>
              闭眼休息约 40 秒，San +20。<br />
              <span style={{ color: '#e0a0a0' }}>但闭眼期间若有排队者，会必定自动放行 1 人。</span><br />
              <span style={{ color: '#8a8a80' }}>全关仅一次。</span>
            </p>
            <button
              className="btn big"
              disabled={state.sofaUsed}
              onClick={() => { sfx.sofaRest(); dispatch({ type: 'USE_SOFA', claw: Math.random() < 0.15 }); close(); say('你闭上眼。雨声，心跳，远处好像有人开了门。') }}
            >
              {state.sofaUsed ? '已经休息过了' : '闭眼休息'}
            </button>
          </div>
        </div>
      )}

      {activeHotspot === 'door' && (
        <div className="overlay">
          <div className="panel" style={{ width: 360, textAlign: 'center' }}>
            <img src="/assets/icons/lock.svg" alt="" style={{ width: 56, height: 56, marginBottom: 8 }} />
            <h2 style={{ margin: '0 0 12px' }}>门被锁住了</h2>
            <p style={{ color: '#9a9a90', margin: '0 0 16px' }}>门上写着 NO EXIT · UNTIL DAWN。外面永远是夜。你出不去的。</p>
            <button className="btn" onClick={close}>离开</button>
          </div>
        </div>
      )}

      {execution && <ExecutionOverlay result={execution.result} tool={execution.tool} visitor={execution.visitor} onDone={onExecDone} />}
      {death !== false && <Death visitor={death} />}

      {/* 处决小游戏 */}
      {executionGame && executionGame.tool === 'axe' && (
        <AxeQTE visitor={executionGame.visitor} onSuccess={onExecutionSuccess} onFail={onExecutionDeath} />
      )}
      {executionGame && executionGame.tool === 'gun' && (
        <GunAim
          visitor={executionGame.visitor}
          gunAmmo={state.gunAmmo}
          onSuccess={onExecutionSuccess}
          onFail={onExecutionDeath}
          onOutOfAmmo={onOutOfAmmo}
        />
      )}
      {executionGame && executionGame.tool === 'fire' && (
        <FlamethrowerCharge
          visitor={executionGame.visitor}
          onSuccess={onExecutionSuccess}
          onFail={onExecutionFail}
          onOverheat={onFlamethrowerOverheat}
        />
      )}

      {/* Boss 战 */}
      {(state.phase === 'boss_intro' || state.phase === 'boss_fight' || state.phase === 'boss_door_trap') && (
        <BossFight
          state={state}
          onTransition={() => dispatch({ type: 'BOSS_TRANSITION' })}
          onDamage={() => dispatch({ type: 'BOSS_DAMAGE' })}
          onDefeated={() => dispatch({ type: 'BOSS_DEFEATED' })}
          onDoorOpened={() => {
            // 门陷阱 - 玩家死亡
            setDeath(null)
          }}
        />
      )}
    </div>
  )
}
