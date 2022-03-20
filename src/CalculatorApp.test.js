import CalculatorApp from './CalculatorApp'
import { render, screen, fireEvent } from '@testing-library/react'

describe('CalculatorApp', () => {
  it('renders all buttons properly', () => {
    render(<CalculatorApp />)
    const numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    numberArray.forEach(number => {
      expect(screen.getByRole('button', { name: number })).toBeTruthy()
    })
    const operationArray = ['+', '-', '*', '/']
    operationArray.forEach(operation => {
      expect(screen.getByRole('button', { name: operation })).toBeTruthy()
    })
    expect(screen.getByRole('button', { name: '=' })).toBeTruthy()
  })
  it('renders display', () => {
    render(<CalculatorApp />)
    expect(screen.getByTestId('panel')).toBeTruthy()
    expect(screen.getByTestId('panel').textContent).toBe('0')
  })
  it('update value in panel when clicking the buttons', () => {
    render(<CalculatorApp />)
    const aNumberButton = screen.getByRole('button', { name: '1'})
    fireEvent.click(aNumberButton)
    expect(screen.getByTestId('panel').textContent).toBe('1')
  })
})