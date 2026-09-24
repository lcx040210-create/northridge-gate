import { render, screen, act } from '@testing-library/react'
import { vi } from 'vitest'
import ExecutionOverlay from './ExecutionOverlay'

const result = {
  success: true,
  frames: ['/f1.png', '/f2.png', '/f3.png', '/f4.png'],
  residue: '/r.png',
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
