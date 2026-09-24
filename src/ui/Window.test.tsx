import { render, screen } from '@testing-library/react'
import Window from './Window'
import { v2Skinfit } from '../data/visitors/v2-skinfit'

it('renders visitor name and glitch line for pseudo', () => {
  render(<Window visitor={v2Skinfit} />)
  expect(screen.getByTestId('window')).toBeInTheDocument()
  expect(screen.getByTestId('glitch')).toHaveTextContent('修灯')
})
