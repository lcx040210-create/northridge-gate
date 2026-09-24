import { useEffect } from 'react'
import { computeEnding } from '../engine/endings'
import { ENDINGS } from '../data/endings'
import { VISITORS } from '../data/visitors'
import type { GameState } from '../engine/types'
import { dawn } from '../scene/audio'

const VERDICT_CN = { admit: '放行', execute: '处决', contain: '收容' } as const

export default function Dawn({ state }: { state: GameState }) {
  const endingId = computeEnding({ records: state.records, sanTouchedBelow15: state.sanTouchedBelow15, autoReleased: state.autoReleased })
  const ending = ENDINGS.find((e) => e.id === endingId)!
  const nameOf = (id: string) => VISITORS.find((v) => v.id === id)?.claimedName ?? id

  useEffect(() => { dawn() }, [])

  return (
    <div data-testid="dawn" className="dawn">
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
    </div>
  )
}
