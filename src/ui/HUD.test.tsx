import { render, screen } from '@testing-library/react'
import HUD from './HUD'
import { INITIAL_STATE } from '../engine/state'

it('renders san level', () => {
  render(<HUD state={INITIAL_STATE} />)
  expect(screen.getByTestId('hud')).toHaveTextContent('San：75')
})
