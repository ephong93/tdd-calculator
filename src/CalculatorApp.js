import CalculatorForm from './CalculatorForm'
import { useState } from 'react'

const CalculatorApp = () => {
  const [value, setValue] = useState('0')
  return (
    <div>
      <div data-testid='panel'>{value}</div>
      <CalculatorForm />
    </div>
  )
}

export default CalculatorApp