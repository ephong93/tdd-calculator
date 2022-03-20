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
    if (isOperation(a[a.length - 1]) && isOperation(b)) {
      return a.substring(0, a.length - 1) + b
    }
    return a + b
  }

  const onAppend = (newValue) => {
    setValue(update(value, newValue))
  }

  return (
    <div>
      <div data-testid='panel'>{value}</div>
      <CalculatorForm onAppend={onAppend} />
    </div>
  )
}

export default CalculatorApp