import { useEffect, useState } from 'react'
import { computeEnding } from '../engine/endings'
import { ENDINGS } from '../data/endings'
import { VISITORS } from '../data/visitors'
import type { GameState } from '../engine/types'
import { dawn } from '../scene/audio'

const VERDICT_CN = { admit: '放行', execute: '处决', contain: '收容' } as const

// 结束动画：开门 → 走廊 → 天亮 → 续作预告（点击任意处可跳过）
interface Beat {
  img?: string
  title?: string
  teaser?: boolean
  lines: string[]
  dur: number
}

function beatsOf(endingLines: string[]): Beat[] {
  return [
    { lines: ['你推开了门。', '夜班，结束了。'], dur: 3800 },
    {
      img: '/assets/env/corridor_silhouette.svg',
      lines: ['走廊里很黑，但你认得路。', '身后那扇门，在你走出的瞬间，自己关上了。'],
      dur: 5200,
    },
    { img: '/assets/ui/dawn.svg', lines: ['天亮了。', ...endingLines], dur: 4800 },
    {
      teaser: true,
      title: '北岭闸口 Ⅱ · 闸门之外',
      lines: ['北岭闸口，从来不止一道。', '你守住的，只是最外面那一扇。', '第二班，很快会叫到你的名字。'],
      dur: 6500,
    },
  ]
}

export default function Dawn({ state }: { state: GameState }) {
  const endingId = computeEnding({ records: state.records, sanTouchedBelow15: state.sanTouchedBelow15, autoReleased: state.autoReleased })
  const ending = ENDINGS.find((e) => e.id === endingId)!
  const nameOf = (id: string) => VISITORS.find((v) => v.id === id)?.claimedName ?? id
  const [beats] = useState<Beat[]>(() => beatsOf(ending.lines))
  const [beat, setBeat] = useState(0)
  const done = beat >= beats.length

  useEffect(() => { dawn() }, [])

  // 每段自动推进；点击立即跳过
  useEffect(() => {
    if (done) return
    const t = setTimeout(() => setBeat((b) => Math.min(b + 1, beats.length)), beats[beat].dur)
    return () => clearTimeout(t)
  }, [beat, done, beats])

  return (
    <div data-testid="dawn" className="dawn" onClick={() => setBeat((b) => Math.min(b + 1, beats.length))}>
      {!done ? (
        <div key={beat} className="dawn-beat" style={beats[beat].img ? { backgroundImage: `url(${beats[beat].img})` } : undefined}>
          {beats[beat].teaser ? (
            <div className="dawn-teaser">
              <p className="dawn-teaser-tag">即将到来 · COMING NEXT</p>
              <h1>{beats[beat].title}</h1>
              {beats[beat].lines.map((l) => <p key={l}>{l}</p>)}
            </div>
          ) : (
            <div className="dawn-lines">
              {beats[beat].lines.map((l) => <p key={l}>{l}</p>)}
            </div>
          )}
          <div className="dawn-hint">点击继续 ▸</div>
        </div>
      ) : (
        <div className="dawn-card">
          <h1>天亮</h1>
          <table>
            <tbody>
              {state.records.map((r, i) => (
                <tr key={i}>
                  <td>{nameOf(r.visitorId)}</td>
                  <td>{VERDICT_CN[r.verdict]}{r.tool ? ` · ${r.tool}` : ''}</td>
                  <td className={r.correct ? 'ok' : 'bad'}>{r.correct ? '正确' : '误判'}{r.escaped ? ' · 逃逸' : ''}</td>
                  <td style={{ color: '#8a8a80' }}>{r.role === 'human' ? (r.state === 'infected' ? '感染者' : '人类') : '伪人'}</td>
                </tr>
              ))}
              {state.autoReleased && (
                <tr>
                  <td>{state.autoReleased.claimedName}</td>
                  <td>沙发自动放行</td>
                  <td className={state.autoReleased.role === 'human' ? 'ok' : 'bad'}>{state.autoReleased.role === 'human' ? '人类' : '伪人'}</td>
                  <td />
                </tr>
              )}
            </tbody>
          </table>
          <h2>{endingId === 'passed' ? '班次合格' : endingId === 'contaminated' ? '设施污染' : '你也不干净'}</h2>
          {ending.lines.map((l) => <p key={l}>{l}</p>)}
          <div style={{ marginTop: 20 }}><button className="btn" onClick={() => location.reload()}>再值一班</button></div>
        </div>
      )}
    </div>
  )
}
