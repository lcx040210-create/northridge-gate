import { useEffect, useState } from 'react'
import { computeEnding } from '../engine/endings'
import { ENDINGS } from '../data/endings'
import { VISITORS } from '../data/visitors'
import type { GameState } from '../engine/types'
import { dawn } from '../scene/audio'

const VERDICT_EN = { admit: 'ADMIT', execute: 'EXECUTE', contain: 'CONTAIN' } as const

// Ending cinematic: open the door → corridor → dawn → sequel teaser (click anywhere to skip)
interface Beat {
  img?: string
  title?: string
  teaser?: boolean
  lines: string[]
  dur: number
}

function beatsOf(endingLines: string[]): Beat[] {
  return [
    { lines: ['You push the door open.', 'The night shift is over.'], dur: 3800 },
    {
      img: '/assets/env/corridor_silhouette.svg',
      lines: ['The corridor is dark, but you know the way.', 'Behind you, the door closes by itself the moment you step out.'],
      dur: 5200,
    },
    { img: '/assets/ui/dawn.svg', lines: ['Dawn breaks.', ...endingLines], dur: 4800 },
    {
      teaser: true,
      img: '/assets/ui/teaser.svg',
      title: 'NORTHRIDGE GATE Ⅱ · BEYOND THE CHECKPOINT',
      lines: ['Northridge Gate was never just one gate.', 'You held only one of seven.', 'The next shift will call your name soon.'],
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

  // Each beat auto-advances; clicking skips immediately
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
              <p className="dawn-teaser-tag">COMING NEXT</p>
              <h1>{beats[beat].title}</h1>
              {beats[beat].lines.map((l) => <p key={l}>{l}</p>)}
            </div>
          ) : (
            <div className="dawn-lines">
              {beats[beat].lines.map((l) => <p key={l}>{l}</p>)}
            </div>
          )}
          <div className="dawn-hint">CLICK TO CONTINUE ▸</div>
        </div>
      ) : (
        <div className="dawn-card">
          <h1>DAWN</h1>
          <table>
            <tbody>
              {state.records.map((r, i) => (
                <tr key={i}>
                  <td>{nameOf(r.visitorId)}</td>
                  <td>{VERDICT_EN[r.verdict]}{r.tool ? ` · ${r.tool}` : ''}</td>
                  <td className={r.correct ? 'ok' : 'bad'}>{r.correct ? 'CORRECT' : 'WRONG'}{r.escaped ? ' · ESCAPED' : ''}</td>
                  <td style={{ color: '#8a8a80' }}>{r.role === 'human' ? (r.state === 'infected' ? 'INFECTED' : 'HUMAN') : 'IMPOSTOR'}</td>
                </tr>
              ))}
              {state.autoReleased && (
                <tr>
                  <td>{state.autoReleased.claimedName}</td>
                  <td>SOFA AUTO-RELEASE</td>
                  <td className={state.autoReleased.role === 'human' ? 'ok' : 'bad'}>{state.autoReleased.role === 'human' ? 'HUMAN' : 'IMPOSTOR'}</td>
                  <td />
                </tr>
              )}
            </tbody>
          </table>
          <h2>{endingId === 'passed' ? 'SHIFT PASSED' : endingId === 'contaminated' ? 'FACILITY CONTAMINATED' : 'YOU ARE NOT CLEAN'}</h2>
          {ending.lines.map((l) => <p key={l}>{l}</p>)}
          <div style={{ marginTop: 20 }}><button className="btn" onClick={() => location.reload()}>TAKE ANOTHER SHIFT</button></div>
        </div>
      )}
    </div>
  )
}
