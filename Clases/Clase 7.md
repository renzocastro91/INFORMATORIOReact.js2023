//Ultima clase de JS 

//Utilizar el método fetch() del navegador para realizar una solicitud a la API https://rickandmortyapi.com/api/character.
Utilicen la función then() para manejar la respuesta de la promesa y realizar las acciones que necesiten con los datos obtenidos. Recorrer el array de results para mostrar por consola el nombre de los personajes. 
Utilicen la función catch() para manejar los errores de la promesa y mostrar un mensaje de error en caso de que haya ocurrido algún problema con la solicitud. 


const API_URL = 'https://rickandmortyapi.com/api/character';

const request = fetch(API_URL);
request
.then((response) => response.json())
.then((data) =>
data.results.forEach((character) => {
console.log(character.name);
})
)
.catch((error) => console.error(error.message));



//Async await es una sugar syntax de lo que ya dimos con promesas 

se utilizan funciones 

const API_URL = 'https://rickandmortyapi.com/api/character';

async function fetchData(urlApi){
  const request = await fetch(urlApi)
  const data = await request.json()
  
  return data
}

async function getCharacters(){
  try {
  const characters = await fetchData(API_URL)
  characters.results.forEach((character) => { console.log(character.name)})  
  }
  catch(error) {
    console.error(error.message)
  }
  
}

getCharacters()

//Metodos para Arrays

mutabilidad e inmutabilidad 

mutable 
const numeros = [1,2,3]
numeros[0]  = 4
console.log(numeros)

inmutable
const persona = {nombre: 'renzo'}
const persona2 = {nombre: 'renzo'}

persona.nombre = 'juan'
console.log(persona)
console.log(persona2)


//Map 
const numeros = [1, 2, 3, 4, 5]
const nuevosNumeros = numeros.map((numero) => {
  return numero * 2 
})

console.log(numerosNumeros)

Con ForEach

const API_URL = 'https://rickandmortyapi.com/api/character';

async function fetchData(apiUrl) {
  const request = await fetch(apiUrl);
  const data = await request.json();
  return data;
}

async function getCharacters() {
  try {
    const { results } = await fetchData(API_URL);
    results.forEach(character => {
      const { id, name } = character;
      const emoji = id % 2 === 0 ? '🥑' : '😝';
      console.log(`${name} ${emoji}`);
    });
  } catch (error) {
    console.error(error.message);
  }
}

getCharacters();

Con Map
const API_URL = 'https://rickandmortyapi.com/api/character';

async function fetchData(apiUrl) {
  const request = await fetch(apiUrl);
  const data = await request.json();
  return data;
}

async function getCharacters() {
  try {
    const { results } = await fetchData(API_URL);
    const characters = results.map(character => {
      const { id, name } = character;
      const emoji = id % 2 === 0 ? '🥑' : '😝';
      return `${name} ${emoji}`;
    });
    console.log(characters);
  } catch (error) {
    console.error(error.message);
  }
}

getCharacters();

//SOlución del profesor
const API_URL = 'https://rickandmortyapi.com/api/character';

async function fetchData(apiUrl) {
  const request = await fetch(apiUrl);
  const data = await request.json();
  return data;
}

async function getCharacters() {
  try {
    const { results } = await fetchData(API_URL);
    const namesWhitEmojis = results.map((character) => {
      if (character.id % 2 === 0) {
        return character.name +'🥑'
      } else {
        return character.name + '😝'
      }
    })
    console.log(namesWhitEmojis)
  } catch (error) {
    console.error(error.message);
  }
}

getCharacters();


//Filter  --> también devuelve un nuevo array, con elementos que cumplan con una condición

const numeros = [0, 3, 4, 5, 7]
const numerosPares = numeros.filter((numero) => numero % 2 === 0)

console.log(numerosPares)

Solución: Personajes que aparecieron en mas de 10 episodios  
const API_URL = 'https://rickandmortyapi.com/api/character';

async function fetchData(apiUrl) {
  const request = await fetch(apiUrl);
  const data = await request.json();
  return data;
}

async function getCharacters() {
  try {
    const { results } = await fetchData(API_URL);
    const muchasApariciones = results.filter(character => character.episode.length > 10);
    const names = muchasApariciones.map(character => character.name);
    console.log(names);
  } catch (error) {
    console.error(error.message);
  }
}

getCharacters();

Todos los métodos para los arrays
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array