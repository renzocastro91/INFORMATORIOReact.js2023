Prototipos y Clases JavaScript

las clases no existen como tal, sino que existe algo denominado delegación de objetos a traves de prototipos

// crear 3 objetos usuarios (Usuario1, usuario2, usuario3). Con 2 propiedades, nombre y puntos. Y con un metodo 
que se llame sumarPuntos, el cual recibe por parámetro la cantidad de puntos a sumar, y actualiza los puntos del usuario.

const usuario1 = {
  nombre:'Renzo',
  puntos: 4,
  sumarPuntos: (puntosASumar) => {
    if(typeof puntosASumar === "number" && puntosASumar > 0){
      usuario1.puntos += puntosASumar  
    }
    
  }
}

console.log(usuario1.puntos);
usuario1.sumarPuntos(3);
console.log(usuario1.puntos)

// Ahora crear una función constructora para crear cada usuario  

function creadorDeUsuarios(nombre, puntos){
  const user = {}
  user.nombre = nombre
  user.puntos = puntos
  user.sumarPuntos = function (puntos) {
    if (typeof puntos === "number" && puntos > 0){
      user.puntos = user.puntos + puntos
    }
  }
  return user
}

const user1 = creadorDeUsuarios("Renzo", 10)

console.log(user1.puntos);
user1.sumarPuntos(3);
console.log(user1.puntos)

ahora con prototipos 

const userFunctions = {
  sumarPuntos : function (puntos) {
    if (typeof puntos === "number" && puntos > 0){
      this.puntos = this.puntos + puntos
    }
  }
}

function creadorDeUsuarios(nombre, puntos){
  const user = Object.create(userFunctions)
  user.nombre = nombre
  user.puntos = puntos  
  return user
}

const user1 = creadorDeUsuarios("Renzo", 10)

console.log(user1.puntos);
user1.sumarPuntos(3);
console.log(user1.puntos)


user --> userFunctions --> object --> null

// La forma de hacer mas estándar es atraves del new

const userFunctions = {
  sumarPuntos : function (puntos) {
    if (typeof puntos === "number" && puntos > 0){
      this.puntos = this.puntos + puntos
    }
  }
}

function creadorDeUsuarios(nombre, puntos){
  this.nombre = nombre
  this.puntos = puntos  
}

//la funcion creadorDeUsuarios es un objeto, y de esta manera agregamos un método nuevo a este objeto
creadorDeUsuarios.prototype.sumarPuntos = function (puntos) {
    if (typeof puntos === "number" && puntos > 0){
      this.puntos = this.puntos + puntos
    }
}

const user1 = new creadorDeUsuarios("Renzo", 10)

console.log(user1.nombre);
console.log(user1.puntos);
user1.sumarPuntos(3);
console.log(user1.puntos)

// Desde el 2015 ahora se usan en clases (Syntax sugar)

class User{
  constructor(nombre, puntos){
    this.nombre = nombre
    this.puntos = puntos
  }
  sumarPuntos = function (puntos) {
    if (typeof puntos === "number" && puntos > 0){
      this.puntos = this.puntos + puntos
    } 
  }
}

const user1 = new User("Renzo", 10)

console.log(user1.nombre);
console.log(user1.puntos);
user1.sumarPuntos(3);
console.log(user1.puntos)


//FUNCIONES 
//Crear una funcion que por parámetro reciba un array 
//a los items del array los multiplique por 2
// retorne ese nuevo array

function multiplicarPorDos(array) {
  const newArray = [];
  for (const num of array) {
    newArray.push(num * 2);
  }
  return newArray;
}


const arrayOriginal = [1, 2, 3, 4, 5];
const arrayMultiplicado = multiplicarPorDos(arrayOriginal);
console.log(arrayMultiplicado); // [2, 4, 6, 8, 10]


//Funciones de orden superior 

//Crear una funcion que por parámetro reciba un array 
//a los items del array los multiplique por 2
// retorne ese nuevo array
function funcionDoble(arr, operacion){
    const newArr = []
    for (let i = 0; i < arr.length; i++){
        newArr.push(operacion(arr[i]))
    }
    return newArr
}

function multiplicarPor2(valor){
    return valor * 2
}

function dividirPor2(valor){
  return valor / 2
}

function sumarDos(valor){
  return valor + 2
}

function restarDos(valor){
  return valor - 2
}

console.log(funcionDoble([2,3,4,5], multiplicarPor2))
console.log(funcionDoble([2,3,4,5], dividirPor2))
console.log(funcionDoble([2,3,4,5], sumarDos))
console.log(funcionDoble([2,3,4,5], restarDos))


//CON OTROS PARAMETROS 
function funcionDoble(arr, operacion, x = 4){
    const newArr = []
    for (let i = 0; i < arr.length; i++){
        newArr.push(operacion(arr[i],x))
    }
    return newArr
}

function multiplicar(valor1, valor2){
    return valor1 * valor2
}

function dividir(valor1,valor2){
  return valor1 / valor2
}

function sumar(valor1, valor2){
  return valor1 + valor2
}

function restar(valor1, valor2){
  return valor1 - valor2
}

console.log(funcionDoble([2,3,4,5], multiplicar, 4))
console.log(funcionDoble([2,3,4,5], dividir, 4444))
console.log(funcionDoble([2,3,4,5], sumar, 3))
console.log(funcionDoble([2,3,4,5], restar, 2))

//Reciba un array, reciba cb
// retorne el array nuevo, ejecutando el callback

function miMap(arr, callback){
  const newArr = []
  for (let dato of arr) {
    newArr.push(callback(dato))
  }
  return newArr
}

const array1 = [1, 4 , 9 , 16]
//Map normal
const map1 = array1.map(x => x * 2)
console.log(map1)
//Map creado 
const map2 = miMap(array1, x=> x *2)
console.log(map2)


//Hacer una función similar al foreach

function miForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

const array = [1, 2, 3, 4, 5];

miForEach(array, (item) => {
  console.log(item);
});

// Crear el método miFilter(), el cual hace lo siguiente: crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
//miFilter recibe un array y una función que retorna true o false

function miFilter(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i], i, array);
    if (result) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}



const array = [1, 2, 3, 4, 5];

const arrayFiltrado = miFilter(array, (item) => {
  return item > 2;
});

console.log(arrayFiltrado); // [3, 4, 5]


// Crear el metodo miFind() el cual hace lo siguiente: retorna el primer valor que cumpla con una condición dada
//miFind recibe un array y una función que retorna true o false

function miFind(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
  return undefined;
}

const array = [5, 4, 25, 15, 45];

const elementoEncontrado = miFind(array, (item) => {
  return item > 10;
});

console.log(elementoEncontrado); // 25
