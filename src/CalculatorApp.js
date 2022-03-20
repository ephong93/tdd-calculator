import CalculatorForm from './CalculatorForm'
import { useState } from 'react'

const CalculatorApp = () => {
  const [value, setValue] = useState('0')
  const onAppend = (newValue) => {
    setValue(prevValue => {
      if (prevValue === '0') {
        setValue(newValue)
      } else {
        setValue(prevValue + newValue)
      }
    })
  }
  return (
    <div>
      <div data-testid='panel'>{value}</div>
      <CalculatorForm onAppend={onAppend} />
    </div>
  )
}

export default CalculatorApp