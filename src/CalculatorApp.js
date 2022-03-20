import CalculatorForm from './CalculatorForm'
import { update, calculate } from './calculate'
import { useCallback, useState } from 'react'

const CalculatorApp = () => {
  const [value, setValue] = useState('0')

  const onAppend = useCallback((newValue) => {
    setValue(value => update(value, newValue))
  }, [])

  const onCalculate = useCallback(() => {
    setValue(value => {
      try {
        return calculate(value)
      } catch {
        return 'ERROR'
      }
    })
  }, [])

  const onClear = useCallback(() => {
    setValue('0')
  }, [])

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