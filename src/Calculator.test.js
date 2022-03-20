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
  })
})