import { render, screen, fireEvent } from '@testing-library/react'
import Dawn from './Dawn'
import { INITIAL_STATE } from '../engine/state'

it('plays the ending cinematic then renders the dawn table', () => {
  render(<Dawn state={{ ...INITIAL_STATE, phase: 'dawn' }} />)
  // 跳过结束动画分镜（4 段）→ 结算表
  for (let i = 0; i < 4; i++) fireEvent.click(screen.getByTestId('dawn'))
  expect(screen.getByTestId('dawn')).toHaveTextContent('天亮')
})

it('teases the sequel during the cinematic', () => {
  render(<Dawn state={{ ...INITIAL_STATE, phase: 'dawn' }} />)
  for (let i = 0; i < 3; i++) fireEvent.click(screen.getByTestId('dawn'))
  expect(screen.getByTestId('dawn')).toHaveTextContent('北岭闸口 Ⅱ')
})
