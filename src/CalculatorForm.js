const CalculatorForm = ({
  onAppend
}) => {
  const numberArray = []
  for (let i = 0; i <= 9; i++) {
    numberArray.push(i.toString())
  }
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