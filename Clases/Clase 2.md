//Ejercicios para afianzar conocimientos en valores:
//Crea una variable numérica y muestra su valor por consola.
let num = 9
console.log(num)
//Crea una variable string y muestra su valor por consola.
let cad = "Hola mundo"
console.log(cad)
//Crea una variable booleana y muestra su valor por consola.
let booleano = true
console.log(booleano)
//Crea un objeto con dos propiedades y muestra su valor por consola.
let persona1 = {name: "Renzo", apellido: "Castro"}
console.log(persona1)
//Crea un array con varios elementos y muestra su valor por consola.
let listaNum = [1,3,5,6,7,8,2]
console.log(listaNum)

//Ejercicios para afianzar conocimientos en operaciones:
//Crea dos variables numéricas y realiza la suma, resta, multiplicación y división de ambos números. Muestra el resultado de cada operación por consola.
let n1 = 8
let n2 = 9
console.log(n1 + n2)
console.log(n1 * n2)
console.log(n1 / n2)
console.log(n1 - n2)
//Crea una variable numérica y otra variable string y realiza la concatenación de ambos valores. Muestra el resultado por consola.
let n3 = 9
let s1 = "Hola"
console.log(n3 + s1)
//Crea una variable numérica y otra variable string que contenga un número. Realiza la suma de ambas variables. Muestra el resultado por consola.
let n4 = 9
let s2 = "9"
console.log(n3 + s1)
//Crea un objeto con dos propiedades numéricas y realiza la suma de ambas propiedades. Muestra el resultado por consola.
let o1 = {n1: 4, n2: 6}
console.log(o1.n1 + o1.n2)
//Crea un array con varios elementos numéricos y realiza la suma de todos los elementos. Muestra el resultado por consola.
let ar1 = [1,4,5,6,7]
let suma = 0;
ar1.forEach(elemento => {
  suma += elemento;
});
console.log(suma)

//Otra forma de hacer
let resultado = 0
let array = [1,4,5,7]

for (let i of array) {
  resultado += i
}
console.log(resultado)

//Ejercicios para afianzar conocimientos en tipos de datos:
//Crea una variable numérica y muestra su tipo de dato por consola.
let n5 = 9
console.log(typeof n5)
//Crea una variable string y muestra su tipo de dato por consola.
let m3 = "Hola"
console.log(typeof m3)
//Crea una variable booleana y muestra su tipo de dato por consola.
let b1 = true
console.log(typeof b1)
//Crea un objeto con dos propiedades: nombre (string) y edad (numérica). Muestra el tipo de dato de cada propiedad por consola.
let o2 = {n1: 9, m5: "d"}
console.log(typeof o2.n1)
console.log(typeof o2.m5)
//Crea un array con varios elementos y muestra el tipo de dato del primer elemento por consola.
let a6 = [1,5,6,7,8]
console.log(typeof a6[0])