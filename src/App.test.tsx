import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import App from './App'

vi.mock('./scene/RoomScene', () => ({
  default: () => <div data-testid="room" />,
}))

it('starts at opening and proceeds to visitor loop', () => {
  render(<App />)
  expect(screen.getByTestId('start')).toBeInTheDocument()
  fireEvent.click(screen.getByTestId('start'))
  expect(screen.getByTestId('hud')).toBeInTheDocument()
})
