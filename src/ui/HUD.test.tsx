import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import HUD from './HUD'
import { INITIAL_STATE } from '../engine/state'

it('renders san and dispatches coffee', () => {
  const dispatch = vi.fn()
  render(<HUD state={INITIAL_STATE} dispatch={dispatch} />)
  expect(screen.getByTestId('hud')).toHaveTextContent('San：75')
  fireEvent.click(screen.getByText(/咖啡/))
  expect(dispatch).toHaveBeenCalledWith({ type: 'DRINK_COFFEE' })
})
