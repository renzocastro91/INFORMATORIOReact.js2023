//Condicionales 
const age = 39
if (age >= 18){
  console.log("Puede votar")
} else {
  console.log("No puede votar")
}

const total = 150
let discount = 0

//if (total >= 100 && tptañ < 200){
  //dicount = 10;
//} else if ()

  
// Loops bucles
//For  
const students = ['carlos', 'cristina','Eugenia','Marcelo']

for (let i = 0; i < students.length; i++){
  console.log('i en este momento vale ' + i)
  console.log(students[i])
}
//For of
for (let student of students){
  
  console.log(student)
}

//For in
const person = {name: "Renzo", apellido: "Castro"}
for (let property in person){
  console.log(property+":" +" "+ person[property])
}

let c = 0
console.log(`El valor de c es ${c}`)

//while
while(students.length) {
  const student = students.pop()
  console.log('hola '+student)
}

//While do se ejecuta una vez aunque sea
do {
  number= prompt("Ingresa un numero entre 1 y 10")
} while (number < 1 || number > 10)

//Procedimientos 

function logger(string){
  console.log(string)
}

logger('Hola como estas')

//Funciones

function add(a,b){
  return a + b
}

logger(add(12,4))

const result = add(122,4)
logger(result)

//Arrow functions paréntesis van los parámetros

const myFunction = () => {
  return false
}

1. Definir una función "addFavoriteMovie()", que reciba un parámetro llamado "movieName".

2. Si lo que se recibió no es un string, mostrar por consola un error indicando que solo se aceptan cadenas de texto. 

3. Si el nombre de la película que se recibe no contiene la palabra 'Gran', agregarlo a un array llamado "favoriteMovies"
  Ayuda: Investigá estos metodos 😉
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

4. Definir una función llamada "showFavoritesMovies" que no reciba parametros

5. "showFavoriteMovies" debería mostrar por consola un mensaje similar a este: "Existen X películas en la lista de favoritos", 
donde X es la cantidad de películas que existen en favoritos. Y por último recorrer el array para imprimir por consola cada película favorita.


Resultado 

const favoriteMovies = [];

function addFavoriteMovie(movieName) {
  if (typeof movieName !== 'string') {
    console.error('Error: Solo se aceptan cadenas de texto');
    return;
  }

   if (!movieName.includes('El') && !movieName.includes('La')) {
    favoriteMovies.push(movieName);
  }
}

function showFavoriteMovies() {
    console.log(`Existen ${favoriteMovies.length} películas en la lista de favoritos:`);
  for (let movie of favoriteMovies){  
  console.log(movie)
}
  }


addFavoriteMovie("Saw 1")
addFavoriteMovie("Saw 2")
addFavoriteMovie("El gran")
addFavoriteMovie("La la land")
addFavoriteMovie("Gran Torino")
addFavoriteMovie("Gran S")
addFavoriteMovie("Torino")
addFavoriteMovie("X Files")
addFavoriteMovie("n")

showFavoriteMovies()

null es un tipo de datos primitivos pero se comporta extraño
function es un subtipo del tipo objeto
array es un subtipo del tipo objeto 

En JavaScript las variables no tienen tipos. Los  valores similar

Algos casos raros:
typeof null 
typeof function  --> fucntion  
typeof array  --> object  se pueden saber si array.isArray()

const arreglo = [1,5]

console.log(Array.isArray(arreglo))

NaN (Not a Valid Number?)
Number.isNaN(bla)

const person = {age: 23}
const bla = person/4

Coersion "25" * 4  --> 100
console.log(bla)  --> NaN 
typeof NaN --> Number 

coersion --> convertir de un tipo de dato a otro 
"23" + 4 --> 234 --> Coersion implícita 
cons bla3 = Number("23")
typeof bla3 

!true !false 
Boolean("Hola")
!!("Hola")
* valores falsy 
!!""
!!0
!!null 
!!NaN 
!!false 
!!undefined

* valores truthy todo lo que no es falsy 


Loose equality == (Chequea el valor)
Strict equality === (Chequea el valor y el tipo) 

Realmente pasa::
Loose equality == (Permite la coersion) --> 5 == "5" --> True 
Strict equality === (No permite la coersion) --> 5 === "5" --> False 


1) Escribir una función llamada contarVocales que reciba una cadena de texto como argumento y devuelva el número de vocales en la cadena. Puedes utilizar el método split() para convertir la cadena en un array de caracteres y luego recorrer el array utilizando un bucle for...of. Recuerden que operador usabamos para validar que el argumento sea una cadena antes de procesarlo en la función.
2) Escribir una función llamada encontrarNumero que reciba un array de números y un número objetivo como argumentos, y devuelva true si el número objetivo se encuentra en el array, o false en caso contrario. Recuerden que bucle usabamos para recorrer el array
3) Escribir una función llamada numerosPares que reciba un array de números como argumento y devuelva un nuevo array con sólo los números pares del array original. Si el argumento no es un array o si no hay números pares en el array, la función debe devolver un mensaje de error. 
4) Escribir una función llamada esIgual que reciba dos argumentos y devuelva un booleano indicando si son iguales. Piensen que operador de igualdad les conviene usar (== o ===) teniendo en cuenta la coerción de tipos.
5) Escribir una función llamada convertirNumero que reciba un argumento y devuelva ese argumento convertido a número. Si no es posible convertir el argumento a número, la función debe devolver un mensaje de error.
6) Escribir una función llamada compararTipos que reciba dos argumentos y devuelva un booleano indicando si son del mismo tipo. Una ayuda: La función debe utilizar el operador typeof para determinar el tipo de datos de los argumentos, y piensen que tipo de operador de igualdad les conviene usar (== o ===)