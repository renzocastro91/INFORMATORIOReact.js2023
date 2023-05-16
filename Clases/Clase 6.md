//Asincronísmo 

Recordatorio de callback 

function sumar(a,b) {
  return a + b
}
function restar(a,b) {
  return a - b
}

function calculoEntre2Numeros(a,b, callback){
  return callback(a,b)
}

console.log(calculoEntre2Numeros(3,5, sumar))
console.log(calculoEntre2Numeros(3,5, restar))

// se puede hacer un programa asíncrono con callback's

//Web APIs 

document. -> acceder a las funcionalidades del dom 
fetch -> http request 
setTimeout -> setear un timer 

function saludar (name){
  console.log('Hola '+ name)
}

setTimeout(saludar, 2000)

En 2 segundos se ejecuta el setTimeout

function saludar (name){
  console.log('Hola '+ name)
}

setTimeout(saludar, 2000, "Renzo") --> forma de pasar argumentos 

function saludar (name){
  console.log('Hola '+ name)
}

setTimeout(saludar, 2000, "Renzo")
console.log("Me ejecuto primero yo") --> se ejecuta esto primero porque el navegador se encuentra con el timer y lo deja en segundo en plano y sigue ejecutando 

//Event Loop 

Callback Queue

function saludar (name){
  console.log('Hola '+ name)
}

setTimeout(saludar, 2000, "Renzo")
setTimeout(saludar, 2000, "Ned")
console.log("Me ejecuto primero yo")

// Promesas 
Estados: 
// - Pending ✋
// - Fulfilled 👍
// - Rejected 🙅‍♂️


const API_URL = 'https://rickandmortyapi.com/api'

const data = fetch(API_URL)
data 
 .then((data) => data.json())
 .then((data) => console.log(data.characters))
 .catch((error) => console.log(error.message))

 Para listar los personajes 

 const API_URL = 'https://rickandmortyapi.com/api'

const data = fetch(API_URL)
data 
 .then((data) => data.json())
 .then((data) => fetch(data.characters))
 .then((response) => response.json())
 .then((characters) => console.log(characters.results))
 .catch((error) => console.log(error.message))