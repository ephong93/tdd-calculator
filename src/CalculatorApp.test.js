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
  it('1 -> 1', () => {
    render(<CalculatorApp />)
    fireEvent.click(getButton('1'))
    expect(getPanel().textContent).toBe('1')
  })
  
  it('00 -> 0', () => {
    render(<CalculatorApp />)
    fireEvent.click(getButton('0'))
    expect(getPanel().textContent).toBe('0')
    fireEvent.click(getButton('0'))
    expect(getPanel().textContent).toBe('0')
  })
  it('+-0 -> -0', () => {
    render(<CalculatorApp />)
    fireEvent.click(getButton('+'))
    expect(getPanel().textContent).toBe('0')
    fireEvent.click(getButton('-'))
    expect(getPanel().textContent).toBe('-0')
  })
  it('-1 -> -1', () => {
    render(<CalculatorApp />)
    fireEvent.click(getButton('-'))
    fireEvent.click(getButton('1'))
    expect(getPanel().textContent).toBe('-1')
  })
  it('1+01 -> 1+1', () => {
    render(<CalculatorApp />)
    fireEvent.click(getButton('1'))
    fireEvent.click(getButton('+'))
    fireEvent.click(getButton('0'))
    fireEvent.click(getButton('1'))
    expect(getPanel().textContent).toBe('1+1')
  })
})

describe('append number', () => {
  it('12 -> 12', () => {
    render(<CalculatorApp />)
    fireEvent.click(getButton('1'))
    fireEvent.click(getButton('2'))
    expect(getPanel().textContent).toBe('12')
  })
  it('-11 -> -11', () => {
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
  it('-1-- -> -1-', () => {
    render(<CalculatorApp />)
    fireEvent.click(getButton('-'))
    fireEvent.click(getButton('1'))
    fireEvent.click(getButton('-'))
    fireEvent.click(getButton('-'))
    expect(getPanel().textContent).toBe('-1-')
  })
})

describe('calculate', () => {
  it('1 = 1', () => {
    render(<CalculatorApp />)
    fireEvent.click(getButton('1'))
    fireEvent.click(getButton('='))
    expect(getPanel().textContent).toBe('1')
  })
  it('1+1 = 2', () => {
    render(<CalculatorApp />)
    fireEvent.click(getButton('1'))
    fireEvent.click(getButton('+'))
    fireEvent.click(getButton('1'))
    fireEvent.click(getButton('='))
    expect(getPanel().textContent).toBe('2')
  })
  it('1-1 = 0', () => {
    render(<CalculatorApp />)
    fireEvent.click(getButton('1'))
    fireEvent.click(getButton('-'))
    fireEvent.click(getButton('1'))
    fireEvent.click(getButton('='))
    expect(getPanel().textContent).toBe('0')
  })
  it('1-2 = -1', () => {
    render(<CalculatorApp />)
    fireEvent.click(getButton('1'))
    fireEvent.click(getButton('-'))
    fireEvent.click(getButton('2'))
    fireEvent.click(getButton('='))
    expect(getPanel().textContent).toBe('-1')
  })
  it('1+2*3 = 7', () => {
    render(<CalculatorApp />)
    fireEvent.click(getButton('1'))
    fireEvent.click(getButton('+'))
    fireEvent.click(getButton('2'))
    fireEvent.click(getButton('*'))
    fireEvent.click(getButton('3'))
    fireEvent.click(getButton('='))
    expect(getPanel().textContent).toBe('7')
  })
})