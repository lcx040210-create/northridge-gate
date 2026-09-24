import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import Verdict from './Verdict'

it('fires onJudge with admit directly, execute opens tool select', () => {
  const onJudge = vi.fn()
  render(<Verdict disabled={false} onJudge={onJudge} />)
  fireEvent.click(screen.getByText('ADMIT'))
  expect(onJudge).toHaveBeenCalledWith('admit')
  fireEvent.click(screen.getByText('EXECUTE'))
  fireEvent.click(screen.getByText('gun'))
  expect(onJudge).toHaveBeenCalledWith('execute', 'gun')
})
