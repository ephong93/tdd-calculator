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
  
  const calculateMulDiv = (aValue) => {
    let i = aValue.length - 1
    while (i >= 0) {
      if (aValue[i] === '*') {
        return calculateMulDiv(aValue.substring(0, i)) * calculateMulDiv(aValue.substring(i+1, aValue.length))
      }
      if (aValue[i] === '/') {
        return calculateMulDiv(aValue.substring(0, i)) / calculateMulDiv(aValue.substring(i+1, aValue.length))
      }
      i -= 1
    }
    return parseFloat(aValue)
  }

  const calculate = (aValue) => {
    let i = aValue.length - 1
    while (i >= 0) {
      if (aValue[i] === '+') {
        return calculate(aValue.substring(0, i)) + calculate(aValue.substring(i+1, aValue.length))
      }
      if (aValue[i] === '-') {
        return calculate(aValue.substring(0, i)) - calculate(aValue.substring(i+1, aValue.length))
      }
      i -= 1
    }
    return calculateMulDiv(aValue)
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