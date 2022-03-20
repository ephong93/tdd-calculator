import CalculatorForm from './CalculatorForm'
import { useState } from 'react'

const CalculatorApp = () => {
  const [value, setValue] = useState('0')
  const update = (a, b) => {
    if (a === '0') {
      return b
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