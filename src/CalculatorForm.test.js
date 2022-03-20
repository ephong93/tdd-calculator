import CalculatorForm from './CalculatorForm'
import { render, screen } from '@testing-library/react'

describe('CalculatorForm', () => {
  it('renders number buttons', () => {
    render(<CalculatorForm />)
    for (let i = 0; i <= 9; i++) {
      expect(screen.getByText(i)).toBeTruthy()
    }
  })
})