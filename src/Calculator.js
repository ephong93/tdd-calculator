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
      if (this.isNumber(value)) {
        this.value = value
      } else if (value === '-') {
        this.value = '-0'
      }
    } else if (this.value === '-0') {
      if (value === '+') {
        this.value = '0'
      }
    }
  }
}

export default Calculator