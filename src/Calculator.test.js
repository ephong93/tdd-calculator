import Calculator from './Calculator'

describe('Calculator', () => {
  it('has default value of 0', () => {
    const calculator = new Calculator()
    expect(calculator.value).toBe('0')
  })
  it('distinguish number and operation', () => {
    const calculator = new Calculator()
    expect(calculator.isNumber('1')).toBe(true)
    expect(calculator.isNumber('+')).toBe(false)
    expect(calculator.isOperation('1')).toBe(false)
    expect(calculator.isOperation('+')).toBe(true)
    expect(calculator.isOperation('#')).toBe(false)
  })
  it('update value for number initially', () => {
    const calculator = new Calculator()
    calculator.append('1')
    expect(calculator.value).toBe('1')
  })
  it('does not update for zero', () => {
    const calculator = new Calculator()
    calculator.append('0')
    expect(calculator.value).toBe('0')
    calculator.append('0')
    expect(calculator.value).toBe('0')
  })
  it('add sign', () => {
    const calculator = new Calculator()
    calculator.append('+')
    expect(calculator.value).toBe('0')
    calculator.append('-')
    expect(calculator.value).toBe('-0')
    calculator.append('+')
    expect(calculator.value).toBe('0')
  })
})