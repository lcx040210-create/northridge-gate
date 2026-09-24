import { render, screen } from '@testing-library/react'
import Dawn from './Dawn'
import { INITIAL_STATE } from '../engine/state'

it('renders the dawn table', () => {
  render(<Dawn state={{ ...INITIAL_STATE, phase: 'dawn' }} />)
  expect(screen.getByTestId('dawn')).toHaveTextContent('天亮')
})
