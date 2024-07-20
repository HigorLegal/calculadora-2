let displayValue = '0';
let operand = null;
let operator = null;
let waitingForOperand = false;

function appendToDisplay(val) {
  if (waitingForOperand) {
    displayValue = val;
    waitingForOperand = false;
  } else {
    displayValue = displayValue === '0' ? val : displayValue + val;
  }
  updateDisplay();
}
//limpar o display
function clearDisplay() {
  displayValue = '0';
  operand = null;
  operator = null;
  waitingForOperand = false;
  updateDisplay();
}
//ve se da para calcular
function operation(op) {
  if (operator !== null) {
    calculate();
  }
  operand = parseFloat(displayValue);
  operator = op;
  waitingForOperand = true;
}
//calcula todas as opçoes de operador  
function calculate() {
  const secondOperand = parseFloat(displayValue);
  let result = 0;
  switch (operator) {
    case '+':
      result = operand + secondOperand;
      break;
    case '-':
      result = operand - secondOperand;
      break;
    case '*':
      result = operand * secondOperand;
      break;
    case '/':
      result = operand / secondOperand;
      break;
  }
  //mostrar o resultadofyi
  displayValue = result.toString();
  operator = null;
  waitingForOperand = true;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').textContent = displayValue;
}