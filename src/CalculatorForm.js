const CalculatorForm = ({
  onAppend
}) => {
  return (
    <div>
      <button data-testid='number-button' onClick={() => onAppend('0')}>0</button>
      <button data-testid='number-button' onClick={() => onAppend('1')}>1</button>
      <button data-testid='number-button' onClick={() => onAppend('2')}>2</button>
      <button data-testid='number-button' onClick={() => onAppend('3')}>3</button>
      <button data-testid='number-button' onClick={() => onAppend('4')}>4</button>
      <button data-testid='number-button' onClick={() => onAppend('5')}>5</button>
      <button data-testid='number-button' onClick={() => onAppend('6')}>6</button>
      <button data-testid='number-button' onClick={() => onAppend('7')}>7</button>
      <button data-testid='number-button' onClick={() => onAppend('8')}>8</button>
      <button data-testid='number-button' onClick={() => onAppend('9')}>9</button>
      <button data-testid='operation-button' onClick={() => onAppend('+')}>+</button>
      <button data-testid='operation-button' onClick={() => onAppend('-')}>-</button>
      <button data-testid='operation-button' onClick={() => onAppend('*')}>*</button>
      <button data-testid='operation-button' onClick={() => onAppend('/')}>/</button>
      <button>=</button>
    </div>
  )
}

export default CalculatorForm