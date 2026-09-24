import { render, screen, act } from '@testing-library/react'
import { vi } from 'vitest'
import ExecutionOverlay from './ExecutionOverlay'

const result = {
  success: true,
  frames: ['/f1.svg', '/f2.svg', '/f3.svg', '/f4.svg'],
  residue: '/r.svg',
  sanDelta: 0,
  radioDistort: false,
  escaped: false,
}

it('shows blackout first, then calls onDone', () => {
  vi.useFakeTimers()
  const onDone = vi.fn()
  render(<ExecutionOverlay result={result} onDone={onDone} />)
  expect(screen.getByTestId('blackout')).toBeInTheDocument()
  act(() => { vi.advanceTimersByTime(5000) })
  expect(onDone).toHaveBeenCalled()
  vi.useRealTimers()
})
