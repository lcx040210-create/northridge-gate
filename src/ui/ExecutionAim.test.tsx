import { render, act } from '@testing-library/react'
import { vi } from 'vitest'
import ExecutionAim from './ExecutionAim'
import { v1Human } from '../data/visitors/v1-human'
import { v2Skinfit } from '../data/visitors/v2-skinfit'

it('human: timeout lowers the weapon instead of killing the player', () => {
  vi.useFakeTimers()
  const onFail = vi.fn()
  const onCancel = vi.fn()
  render(<ExecutionAim visitor={v1Human} onSuccess={vi.fn()} onFail={onFail} onCancel={onCancel} />)
  act(() => { vi.advanceTimersByTime(10500) })
  expect(onCancel).toHaveBeenCalledTimes(1)
  expect(onFail).not.toHaveBeenCalled()
  vi.useRealTimers()
})

it('pseudo: timeout kills the player', () => {
  vi.useFakeTimers()
  const onFail = vi.fn()
  render(<ExecutionAim visitor={v2Skinfit} onSuccess={vi.fn()} onFail={onFail} onCancel={vi.fn()} />)
  act(() => { vi.advanceTimersByTime(10500) })
  expect(onFail).toHaveBeenCalledTimes(1)
  vi.useRealTimers()
})
