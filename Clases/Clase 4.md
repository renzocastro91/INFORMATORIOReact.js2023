Scope
"Es el contexto actual de ejecución. El contexto en el que los valores y las expresiones son "visibles" o pueden ser referenciados." 
En otras palabras podemos decir que determina el conjunto de variables que podemos acceder desde cierta linea de código.

Dependiendo del contexto actual de ejecución, el mismo identificador, en este caso car puede significar cosas distintas.

function buyCar() {
  var car = 'Peugeot 404'
  console.log(`Me voy a comprar un ${car}`)
}

function washCar() {
  var car = 'Toyota Corolla'
  console.log(`Me voy a lavar mi ${car}`)
}
Anteriormente mencionamos contexto y contexto de ejecución. Suena similar pero conceptualmente son muy distintas. Por contexto nos referimos 
al valor que tiene la palabra reservada this en el momentó de la ejecución. this hace referencia al objeto que está ejecutando una función. 
(lo vemos en el archivo siguiente :D) Cuando hablamos de scope nos referimos al contexto de ejecución que es lo que definimos en la primera línea 😉. 
Es importante que sepas que el contexto de ejecucion ademas del scope almacena otras cosas

Tipos de Scope
Global Scope
Nuestras variables o funciones pueden ser accedidas desde cualquier parte de nuestro programa. Son aquellas que declaramos fuera de toda función o bloque de código. 
Y no importa si fue declarada con var, let o const

var name = 'Ivan'
const age = 34
let country = 'Argentina'

function myFunction() {...}
Local Scope
Nuestras variables o funciones solo se pueden acceder desde una parte de nuestro programa.

Existen 2 tipos:

Function Scope
Podemos acceder a nuestras variables dentro de toda la función pero no fuera de ella. ⚠️ cuidado cuando declaramos las variables con var, todas van a tener scope de función sin importar donde la declaremos

function buy() {
  var car = 'Fitito'
  var isMillionaire = true
  if (isMillionaire) {
    var car = 'Ferrari'
  }

  console.log(`Me voy a comprar un ${car}`) // Ferrari
}
buy()
console.log(car)
Block Scope
Un bloque es todo aquello que encontramos entre {}. Podremos acceder a ellas dentro de todo el bloque pero no fuera del mismo. Para ello es necesario que declaremos nuestras variables con let o const

function buy() {
  var car = 'Fitito'
  var isMillionaire = true
  if (isMillionaire) {
    let car = 'Ferrari'
  }

  console.log(`Me voy a comprar un ${car}`) // Fitito
}
buy()
console.log(car)
ℹ️ Pro-tip: declaren las variables con el scope más reducido posible

Ejercicio para fortalacer los conocimientos
Crea una función llamada suma que tome dos parámetros, a y b, y devuelva la suma de ambos.

Crea una función llamada calculadora que tome dos parámetros, x e y, y realice las siguientes operaciones utilizando la función suma:

Suma x e y y almacena el resultado en una variable llamada sumaTotal.

Multiplica x e y y almacena el resultado en una variable llamada productoTotal.

Imprime el valor de sumaTotal.

Imprime el valor de productoTotal.

Define una variable globalVariable en el scope global y asígnale un valor.

Dentro de la función calculadora, define una variable sumaTotal y asígnale un valor.

Dentro de la función calculadora, define una función llamada resta que tome dos parámetros, c y d, y devuelva la resta de ambos.

Desde dentro de la función calculadora, llama a la función resta y almacena el resultado en una variable llamada restaTotal.

Imprime el valor de globalVariable desde dentro de la función calculadora.

Intenta imprimir el valor de sumaTotal desde fuera de la función calculadora.

Intenta imprimir el valor de restaTotal desde fuera de la función calculadora.

Solución:

let globalVariable = "Hola, soy una variable global";

function suma(a, b) {
  return a + b;
}

function calculadora(x, y) {
  let sumaTotal = suma(x, y);
  let productoTotal = x * y;

  function resta(c, d) {
    return c - d;
  }

  let restaTotal = resta(x, y);

  console.log(globalVariable);
  console.log(sumaTotal);
  console.log(productoTotal);
  console.log(restaTotal);
}

calculadora(3, 4);
// Imprime:
// Hola, soy una variable global
// 7
// 12
// -1

console.log(sumaTotal); // Genera un error, ya que sumaTotal está dentro del scope de la función calculadora
console.log(restaTotal); // Genera un error, ya que restaTotal está dentro del scope de la función calculadora
Links útiles:

https://developer.mozilla.org/es/docs/Glossary/Scope



this keyword
Para repasar... como vimos en el archivo anterior, por contexto nos referimos al valor que tiene la palabra reservada this en el momentó de la ejecución. 
this hace referencia al objeto que está ejecutando una función.

// Que imprime esto? --> lo que me pase por parámetro
function eatFruit(fruit) {
  console.log(`Voy a comer una ${fruit}`)
}


// Y esto??? --> windows
function eatFruit() {
  console.log(`Voy a comer una ${this.fruitName}`)
}
this vale --> window (es como el global)
// Y ahora??
const fruit = {
  fruitName: 'Manzana',
  price: 999,
  eat: function() {
    console.log(`Voy a comer una ${this.fruitName}`)
  }
}
const manzana = {
  fruitName: 'Manzana',
  price: 999,
  eat: function() {
    console.log(`Voy a comer una ${this.fruitName}`)
  }
const pera = {
  fruitName: 'Peras',
  price: 999,
  eat: function() {
    console.log(`Voy a comer una ${this.fruitName}`)
  }
}

manzana.eat() --> Voy a comer una Manzana 
pera.eat() --> Voy a comer una Peras 
}
pero si hacemos fruit.eat() --> this vale el objeto fruit 


ℹ️ Para entender que valor tiene this, es importante entender quien está ejecutando la función. O dicho de forma más técnica, como dijimos anteriormente, en que contexto se 
está ejecutando la función en un momento específico. Y acordate de no confundirlo con contexto de ejecución que vimos anteriormente.

const fruit = {
  fruitName: 'Manzana',
  price: 999,
  eat: function() {
    console.log(`Voy a comer una ${this.fruitName}`)
  }
}

fruit.eat()

// Pero que pasa si guardo el método en una varible? Algo similar sucede cuando queremos trabajar con eventos del navegador

const eat = fruit.eat
eat()
Como se ve existen casos donde necesitamos hacer un binding explicito. Binding no es mas que asignar que valor va a tener this al momento de ejecutar la función

Tipos de Bindings
Es importante tener en cuenta que el orden en que JavaScript aplica el tipo de binding es tal cual se detalla abajo

Lexical binding (Arrow functions)
Ocurre al escribir arrow functions. Esto ocurre porque las arrow functions se ejecutan en el mismo momento que fueron creadas

const fruit = {
  fruitName: 'Manzana',
  price: 999,
  eat: function() {
      const obtenerPrecio = () => { --> con esto se soluciona el tema del contexto del price, y toma el price del objeto fruit (Porque se ejecuta en el momento por la arrow function y la función tradicional no se ejecuta al momento de crearse)
      console.log(`Precio: ${this.price}`)
    }
    console.log(`Voy a comer una ${this.fruitName}`) // el valor de this es el objeto que ejecuta la función
    obtenerPrecio()
  }
}

fruit.eat()


New binding (Instanciar objetos)
Este te prometo que lo vemos la clase que viene. Antes debemos explicar prototipos y clases!! 🙏
(Prototipos y Clases Averiguar)
new Fruta()

Explicit binding (Invocacion indirecta)
Nos sirve para establecer de forma explicita que valor queremos que tome this en el momento de ejecutar la función. Esto lo hacemos a través de métodos que todas las funciones traen

El método call nos permite invocar la función cambiando su contexto. El nuevo contexto se lo pasaremos por parametro

const apple = {
  fruitName: 'Manzana',
  price: 999,
  eat: function() {
    console.log(`Voy a comer una ${this.fruitName}`) // el valor de this es el objeto le pasamos al método call
  }
}

const banana = {
  fruitName: 'Banana'
}

apple.eat.call(banana)
El método bind nos retorna una nueva función con el contexto que le pasemos por parametro

const fruit = {
  fruitName: 'Manzana',
  price: 999,
  eat: function() {
    console.log(`Voy a comer una ${this.fruitName}`)
  }
}

const eat = fruit.eat.bind(fruit)
eat()


Implicit binding (Invocacion de metodo)
Ocurre al invocar el metodo de un objeto

const fruit = {
  fruitName: 'Manzana',
  price: 999,
  eat: function() {
    console.log(`Voy a comer una ${this.fruitName}`) // el valor de this es el objeto que ejecuta la función
  }
}

fruit.eat()  --> this vale lo que vale el objeto que lo llamó 

const fruit = {
  fruitName: 'Manzana',
  price: 999,
  eat: function() {
    function obtenerPrecio() {
      console.log(`Precio: ${this.price}`)
    }
    console.log(`Voy a comer una ${this.fruitName}`) // el valor de this es el objeto que ejecuta la función
    obtenerPrecio()
  }
}

fruit.eat()
Default binding (Invocacion directa)
function queTieneThis() {
  console.log(this) // objeto global (en los navegadores se llama window), o undefined. depende la version de js que estén usando 
}

queTieneThis()
Links útiles:

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind


Crea una función `imprimirNombre` que tome un objeto con una propiedad `nombre` y un método `saludar`. El método `saludar` debe imprimir en la consola 
"Hola, soy X" utilizando `this`. La función `imprimirNombre` debe llamar al método `saludar` del objeto que recibe como argumento. Luego, llama a la función 
`imprimirNombre` pasándole un objeto con una propiedad `nombre`.

const persona = {
nacionalidad: 'Argentina',
saludar: function () {
console.log(`Hola soy ${this.nombre}`);
},
};

const eliseo = {
nombre: 'Eliseo',
};

const ivan = {
nombre: 'Ivan',
};

function imprimirNombre(obj) {
persona.saludar.call(obj);
}

imprimirNombre(eliseo);
imprimirNombre(ivan);