// Creo los elementos HTML para la calculadora
const calculadora = document.createElement('div');
calculadora.classList.add('calculadora', 'container');

const salida = document.createElement('div');
salida.classList.add('output');
salida.textContent = '0';
calculadora.appendChild(salida);


//Creo los botones
const botones = ['C', 'CE', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=', '!'];
//Inserto botones a calculadora y defino las clases para los diferentes botones
botones.forEach(button => {
  const btn = document.createElement('button');
  btn.textContent = button;
  btn.addEventListener('click', hacerClick);
  if (button === '=' || button === 'C' || button === 'CE') {
    btn.classList.add('specialButton');
  }else if (button === "%" || button === "/" || button === "*" || button === "-" || button === "+" || button === '!'){
    btn.classList.add('operator')
  }
  calculadora.appendChild(btn);
});

// Agrego la calculadora a "app"
const app = document.getElementById('app');
app.appendChild(calculadora);

let operacionActual = '';

// Crear el nuevo botón
const switchThemeBtn = document.createElement('button');
switchThemeBtn.textContent = 'B/W';
switchThemeBtn.addEventListener('click', cambiarTema);
switchThemeBtn.classList.add('switchThemeBtn');

// Agregar el nuevo botón a la calculadora
calculadora.appendChild(switchThemeBtn);

function cambiarTema() {
  document.body.classList.toggle('modo-oscuro');
  calculadora.classList.toggle('modo-oscuro');
}


// Función para manejar los eventos de click en los botones
function hacerClick(event) {
  const value = event.target.textContent;

  switch (value) {
    case '=':
      guardarResultado();
      calcular();
      break;
    case 'C':
      limpiarSalida();
      break;
    case 'CE':
      limpiarEntrada();
      break;
    case '!':
      factorial();
      break;
    default:
      actualizarSalida(value);
      break;
  }
}

//Con esta función guardo la salida de una operación para poder utilizarla si se quiere en una siguiente operación
function guardarResultado() {
  const resultado = salida.textContent;
  salida.textContent = '0';
  operacionActual = resultado;
}


//Función para resolver el factorial
function factorial(){
  try {
    const num = parseInt(salida.textContent);
    let factorial = 1;

    if (num < 0) {
      salida.textContent = 'Error';
      return;
    }

    for (let i = 2; i <= num; i++) {
      factorial *= i;
    }

    salida.textContent = factorial;
  } catch (error) {
    salida.textContent = 'Error';
  }

  operacionActual = '';
}


// Con esto actualizamos la salida de la calculadora
function actualizarSalida(value) {
  const actualSalida = salida.textContent;

  if (actualSalida === '0') {
    salida.textContent = value;
  } else {
    salida.textContent += value;
  }

  operacionActual += value;
}

// Función para realizar el cálculo utilizando la función eval()
function calcular() {
  try {
    const result = eval(operacionActual);
    salida.textContent = result;
  } catch (error) {
    salida.textContent = 'Error';
  }

  operacionActual = '';
}

// Función para borrar la salida "C"
function limpiarSalida() {
  salida.textContent = '0';
  operacionActual = '';
}

// Función para borrar el último carácter de la salida "CE"
function limpiarEntrada() {
  const actualSalida = salida.textContent;
  salida.textContent = actualSalida.slice(0, -1);
  operacionActual = operacionActual.slice(0, -1);
}
