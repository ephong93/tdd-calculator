import CalculatorApp from './CalculatorApp'
import { render, screen, fireEvent } from '@testing-library/react'

const getButton = (value) => {
  return screen.getByRole('button', { name: value })
}

const getPanel = () => {
  return screen.getByTestId('panel')
}

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
    expect(getPanel()).toBeTruthy()
    expect(getPanel().textContent).toBe('0')
  })
})

describe('update to zero', () => {
  it('initially updates value in panel when clicking a button', () => {
    render(<CalculatorApp />)
    const numberButton = screen.getByRole('button', { name: '1'})
    fireEvent.click(numberButton)
    expect(getPanel().textContent).toBe('1')
  })
  
  it('does not update value when initially clicking 0', () => {
    render(<CalculatorApp />)
    const numberButton0 = screen.getByRole('button', { name: '0'})
    fireEvent.click(numberButton0)
    expect(getPanel().textContent).toBe('0')
    fireEvent.click(numberButton0)
    expect(getPanel().textContent).toBe('0')
  })
  it('adds sign properly', () => {
    render(<CalculatorApp />)
    const plusSignButton = screen.getByRole('button', { name: '+' })
    fireEvent.click(plusSignButton)
    expect(getPanel().textContent).toBe('0')
    const minusSignButton = screen.getByRole('button', { name: '-' })
    fireEvent.click(minusSignButton)
    expect(getPanel().textContent).toBe('-0')
  })
  it('append to negative zero', () => {
    render(<CalculatorApp />)
    const minusSignButton = screen.getByRole('button', { name: '-' })
    fireEvent.click(minusSignButton)
    const numberButton1 = screen.getByRole('button', { name: '1' })
    fireEvent.click(numberButton1)
    expect(getPanel().textContent).toBe('-1')
  })
})

describe('append number', () => {
  it('appends value in panel when clicking number buttons sequentially', () => {
    render(<CalculatorApp />)
    const numberButton1 = screen.getByRole('button', { name: '1'})
    fireEvent.click(numberButton1)
    const numberButton2 = screen.getByRole('button', { name: '2' })
    fireEvent.click(numberButton2)
    expect(getPanel().textContent).toBe('12')
  })
  it('appends value to negative number in panel when clicking number buttons sequentially', () => {
    render(<CalculatorApp />)
    const minusSignButton = screen.getByRole('button', { name: '-' })
    fireEvent.click(minusSignButton)
    const numberButton1 = screen.getByRole('button', { name: '1' })
    fireEvent.click(numberButton1)
    fireEvent.click(numberButton1)
    expect(getPanel().textContent).toBe('-11')
  })
})