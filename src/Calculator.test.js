import Calculator from './Calculator'

describe('Calculator', () => {
  it('has default value of 0', () => {
    const calculator = new Calculator()
    expect(calculator.value).toBe('0')
  })
})