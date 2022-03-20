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

  const operationArray = useMemo(() => {
    return ['+', '-', '*', '/']
  }, [])

  return (
    <div>
      { numberArray.map(number =>
        <button
          data-testid='number-button'
          key={number}
          onClick={() => onAppend(number)}
        >
          {number}
        </button>
      )})
      { operationArray.map(operation =>
        <button
          data-testid='operation-button'
          key={operation}
          onClick={() => onAppend(operation)}
        >
          {operation}
        </button>
      )})
      <button>=</button>
    </div>
  )
}

export default CalculatorForm