import CalculatorForm from './CalculatorForm'
import { render, screen, fireEvent } from '@testing-library/react'

describe('CalculatorForm', () => {
  const onAppend = jest.fn()
  const onCalculate = jest.fn()
  const onClear = jest.fn()
  
  const setup = () => {
    render(<CalculatorForm onAppend={onAppend} onCalculate={onCalculate} onClear={onClear} />)
    const numberButtons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].map(number =>
      screen.getByRole('button', { name: number })
    )
    const operationButtons = ['+', '-', '*', '/'].map(operation =>
      screen.getByRole('button', { name: operation })
    )
    const equalButton = screen.getByRole('button', { name: '=' })
    const clearButton = screen.getByRole('button', { name: 'CR' })
    return {
      numberButtons,
      operationButtons,
      equalButton,
      clearButton
    }
  }
  it('renders number buttons', () => {
    setup()
    for (let i = 0; i <= 9; i++) {
      expect(screen.getByRole('button', { name: i })).toBeTruthy()
    }
  })
  it('renders operation buttons', () => {
    setup()
    expect(screen.getByRole('button', { name: '+'})).toBeTruthy()
    expect(screen.getByRole('button', { name: '-'})).toBeTruthy()
    expect(screen.getByRole('button', { name: '*'})).toBeTruthy()
    expect(screen.getByRole('button', { name: '/'})).toBeTruthy()
  })
  it('renders equal button', () => {
    setup()
    expect(screen.getByRole('button', {name: '='})).toBeTruthy()
  })
  it('calls onAppend when a number button or operation button is clicked', () => {
    const { numberButtons, operationButtons } = setup()
    numberButtons.forEach(numberButton => {
      fireEvent.click(numberButton)
      const value = numberButton.textContent
      expect(onAppend).toBeCalledWith(value)
    })
    
    operationButtons.forEach(operationButton => {
      fireEvent.click(operationButton)
      const value = operationButton.textContent
      expect(onAppend).toBeCalledWith(value)
    })
  })
  it('calls calculate when a equal button is clicked', () => {
    const { equalButton } = setup()
    fireEvent.click(equalButton)
    expect(onCalculate).toBeCalled()
  })
  it('calls onClear when the CR button is clicked', () => {
    const { clearButton } = setup()
    fireEvent.click(clearButton)
    expect(onClear).toBeCalled()
  })
})