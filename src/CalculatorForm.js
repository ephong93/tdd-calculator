import { useMemo } from "react"

const CalculatorForm = ({
  onAppend
}) => {
  const numberArray = useMemo(() => {
    const result = []
    for (let i = 0; i <= 9; i++) {
      result.push(i.toString())
    }
    return result
  }, [])
  return (
    <div>
      { numberArray.map(number => <button data-testid='number-button' key={number} onClick={() => onAppend(number)}>{number}</button>) })
      <button data-testid='operation-button' onClick={() => onAppend('+')}>+</button>
      <button data-testid='operation-button' onClick={() => onAppend('-')}>-</button>
      <button data-testid='operation-button' onClick={() => onAppend('*')}>*</button>
      <button data-testid='operation-button' onClick={() => onAppend('/')}>/</button>
      <button>=</button>
    </div>
  )
}

export default CalculatorForm