class Calculator {
  constructor () {
    this.value = '0'
  }

  isNumber(value) {
    return !isNaN(value)
  }

  isOperation(value) {
    return ['-', '+', '*', '/'].includes(value)
  }
}

export default Calculator