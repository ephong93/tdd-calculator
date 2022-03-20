import CalculatorForm from './CalculatorForm'
import { useState } from 'react'

const CalculatorApp = () => {
  const [value, setValue] = useState('0')

  const isNumber = (aValue) => {
    return !isNaN(aValue)
  }

  const isOperation = (aValue) => {
    return ['+', '-', '*', '/'].includes(aValue)
  }

  const update = (a, b) => {
    if (a === '0') {
      if (b === '+') return '0'
      if (b === '-') return '-0'
      if (isNumber(b)) return b
      return b
    }
    if (a === '-0') {
      if (isNumber(b)) return '-' + b
    }
    if (a.length >= 2 && a[a.length - 1] === '0' && isOperation(a[a.length - 2]) && isNumber(b)) {
      return a.substring(0, a.length - 1) + b
    }
    if (isOperation(a[a.length - 1]) && isOperation(b)) {
      return a.substring(0, a.length - 1) + b
    }
    return a + b
  }

  const onAppend = (newValue) => {
    setValue(update(value, newValue))
  }

  const parse = (aValue) => {
    return [aValue]
  }

  const calculate = (aValue) => {
    const tokens = parse(aValue)
    if (tokens.length === 1) {
      return tokens[0]
    }
  }

  const onCalculate = () => {
    setValue(calculate(value))
  }

  return (
    <div>
      <div data-testid='panel'>{value}</div>
      <CalculatorForm onAppend={onAppend} onCalculate={onCalculate} />
    </div>
  )
}

export default CalculatorApp