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
    fireEvent.click(getButton('1'))
    expect(getPanel().textContent).toBe('1')
  })
  
  it('does not update value when initially clicking 0', () => {
    render(<CalculatorApp />)
    fireEvent.click(getButton('0'))
    expect(getPanel().textContent).toBe('0')
    fireEvent.click(getButton('0'))
    expect(getPanel().textContent).toBe('0')
  })
  it('adds sign properly', () => {
    render(<CalculatorApp />)
    fireEvent.click(getButton('+'))
    expect(getPanel().textContent).toBe('0')
    fireEvent.click(getButton('-'))
    expect(getPanel().textContent).toBe('-0')
  })
  it('append to negative zero', () => {
    render(<CalculatorApp />)
    fireEvent.click(getButton('-'))
    fireEvent.click(getButton('1'))
    expect(getPanel().textContent).toBe('-1')
  })
})

describe('append number', () => {
  it('appends value in panel when clicking number buttons sequentially', () => {
    render(<CalculatorApp />)
    fireEvent.click(getButton('1'))
    fireEvent.click(getButton('2'))
    expect(getPanel().textContent).toBe('12')
  })
  it('appends value to negative number in panel when clicking number buttons sequentially', () => {
    render(<CalculatorApp />)
    fireEvent.click(getButton('-'))
    fireEvent.click(getButton('1'))
    fireEvent.click(getButton('1'))
    expect(getPanel().textContent).toBe('-11')
  })
})

describe('append operations', () => {
  it('-1-1', () => {
    render(<CalculatorApp />)
    fireEvent.click(getButton('-'))
    fireEvent.click(getButton('1'))
    fireEvent.click(getButton('-'))
    expect(getPanel().textContent).toBe('-1-')
    fireEvent.click(getButton('1'))
    expect(getPanel().textContent).toBe('-1-1')
  })
})