import { useMemo } from "react"

const CalculatorForm = ({
  onAppend
}) => {
  const numberArray = useMemo(() => {
    return ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
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