import { computeEnding } from '../engine/endings'
import { ENDINGS } from '../data/endings'
import type { GameState } from '../engine/types'

export default function Dawn({ state }: { state: GameState }) {
  const endingId = computeEnding({ records: state.records, sanTouchedBelow15: state.sanTouchedBelow15, autoReleased: state.autoReleased })
  const ending = ENDINGS.find((e) => e.id === endingId)!

  return (
    <div data-testid="dawn" style={{ padding: 48 }}>
      <h1>天亮</h1>
      <table>
        <tbody>
          {state.records.map((r, i) => (
            <tr key={i}>
              <td>{r.visitorId}</td>
              <td>{r.verdict}</td>
              <td>{r.correct ? '正确' : '误判'}{r.escaped ? ' · 逃逸' : ''}</td>
            </tr>
          ))}
          {state.autoReleased && (
            <tr>
              <td>{state.autoReleased.id}</td>
              <td>沙发自动放行</td>
              <td>{state.autoReleased.role === 'human' ? '人类' : '伪人'}</td>
            </tr>
          )}
        </tbody>
      </table>
      <h2>{endingId === 'passed' ? '班次合格' : endingId === 'contaminated' ? '设施污染' : '你也不干净'}</h2>
      {ending.lines.map((l) => <p key={l}>{l}</p>)}
    </div>
  )
}
