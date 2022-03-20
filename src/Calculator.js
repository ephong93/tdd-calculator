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

  append(value) {
    if (this.value === '0') {
      this.value = value
    }
  }
}

export default Calculator