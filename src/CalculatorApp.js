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

  const removeSuffixOperations = (aValue) => {
    if (isOperation(aValue[aValue.length - 1])) return removeSuffixOperations(aValue.substring(0, aValue.length - 1))
    return aValue
  }
  
  const calculateMulDiv = (aValue) => {
    for (let i = aValue.length - 1; i >= 0; i--) {
      if (aValue[i] === '*') {
        return calculateMulDiv(aValue.substring(0, i)) * calculateMulDiv(aValue.substring(i+1, aValue.length))
      }
      if (aValue[i] === '/') {
        const a = calculateMulDiv(aValue.substring(0, i))
        const b = calculateMulDiv(aValue.substring(i+1, aValue.length))
        if (b === 0) throw Error('Divided by zero!')
        return a / b
      }
    }
    return parseFloat(aValue)
  }

  const calculate = (aValue) => {
    aValue = removeSuffixOperations(aValue)
    for (let i = aValue.length - 1; i >= 1; i--) {
      if (aValue[i] === '+') {
        return calculate(aValue.substring(0, i)) + calculate(aValue.substring(i+1, aValue.length))
      }
      if (aValue[i] === '-') {
        return calculate(aValue.substring(0, i)) - calculate(aValue.substring(i+1, aValue.length))
      }
    }
    return calculateMulDiv(aValue)
  }

  const onCalculate = () => {
    setValue(value => {
      try {
        return calculate(value)
      } catch {
        return 'ERROR'
      }
    })
  }

  const onClear = () => {
    setValue('0')
  }

  return (
    <div>
      <div data-testid='panel'>{value}</div>
      <CalculatorForm
        onAppend={onAppend}
        onCalculate={onCalculate}
        onClear={onClear}
      />
    </div>
  )
}

export default CalculatorApp