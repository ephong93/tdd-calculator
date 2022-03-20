import CalculatorForm from './CalculatorForm'
import { render, screen, fireEvent } from '@testing-library/react'

describe('CalculatorForm', () => {
  const onAppend = jest.fn()
  const onCalculate = jest.fn()
  
  const setup = () => {
    render(<CalculatorForm onAppend={onAppend} onCalculate={onCalculate} />)
  }
  it('renders number buttons', () => {
    setup()
    for (let i = 0; i <= 9; i++) {
      expect(screen.getByText(i)).toBeTruthy()
    }
  })
  it('renders operation buttons', () => {
    setup()
    expect(screen.getByText('+')).toBeTruthy()
    expect(screen.getByText('-')).toBeTruthy()
    expect(screen.getByText('/')).toBeTruthy()
    expect(screen.getByText('*')).toBeTruthy()
  })
  it('renders equal button', () => {
    setup()
    expect(screen.getByText('=')).toBeTruthy()
  })
  it('calls onAppend when a number button or operation button is clicked', () => {
    setup()
    const numberButtons = screen.getAllByTestId('number-button')
    numberButtons.forEach(numberButton => {
      fireEvent.click(numberButton)
      const value = numberButton.textContent
      expect(onAppend).toBeCalledWith(value)
    })
    
    const operationButtons = screen.getAllByTestId('operation-button')
    operationButtons.forEach(operationButton => {
      fireEvent.click(operationButton)
      const value = operationButton.textContent
      expect(onAppend).toBeCalledWith(value)
    })
  })
  it('calls calculate when a equal button is clicked', () => {
    setup()
    const equalButton = screen.getByTestId('equal-button')
    fireEvent.click(equalButton)
    expect(onCalculate).toBeCalled()
  })
})