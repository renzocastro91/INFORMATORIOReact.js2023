console.log(eval('8+9'))
// Crear elementos HTML para la calculadora
const calculator = document.createElement('div');
calculator.classList.add('calculator');

const output = document.createElement('div');
output.classList.add('output');
output.textContent = '0';
calculator.appendChild(output);

const buttons = [
  'C', 'CE', '%', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '='
];

buttons.forEach(button => {
  const btn = document.createElement('button');
  btn.textContent = button;
  btn.addEventListener('click', handleClick);
  calculator.appendChild(btn);
});

// Agregar la calculadora al elemento con id "app"
const app = document.getElementById('app')
app.appendChild(calculator);

// Función para manejar los eventos de clic en los botones
function handleClick(event) {
  const value = event.target.textContent;
  
  switch (value) {
    case '=':
      calculate();
      break;
    case 'C':
      clearOutput();
      break;
    case 'CE':
      clearEntry();
      break;
    default:
      updateOutput(value);
      break;
  }
}

// Función para actualizar la salida de la calculadora
function updateOutput(value) {
  const currentOutput = output.textContent;

  if (currentOutput === '0') {
    output.textContent = value;
  } else {
    output.textContent += value;
  }
}

// Función para realizar el cálculo utilizando la función eval() que recibe el string (currentOutput) 
//que contiene la operación en forma de string por ejemplo "8+2", y luego con eval(currentOutput)
//realizamos la operación, y luego por último actualizamos el output con el valor del resultado 
function calculate() {
  const currentOutput = output.textContent;

  try {
    const result = eval(currentOutput);
    output.textContent = result;
  } catch (error) {
    output.textContent = 'Error';
  }
}

// Función para borrar la salida "C"
function clearOutput() {
  output.textContent = '0';
}

// Función para borrar el último carácter de la salida "CE"
function clearEntry() {
  const currentOutput = output.textContent;
  output.textContent = currentOutput.slice(0, -1);
}
