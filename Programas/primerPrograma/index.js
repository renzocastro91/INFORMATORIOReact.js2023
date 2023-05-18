const API_URL = 'https://rickandmortyapi.com/api/character'
    //especie.classList.add("especie")

const app = document.getElementById('app')
const request = fetch(API_URL)

function onImageClick(){
    console.log('hola que tal')
}

function changeColor(event){
    if (event.target.className == 'red'){
        event.target.className = 'titulo'
    }else {
        event.target.className = 'red'
    }
    
}
function delCharacter(nodoHijo){
 //const container = event.target.parentNode;
  //container.remove();
  nodoHijo.parentNode.removeChild(nodoHijo)
}

request
    .then((res) => res.json())
    .then((characters) => {
        characters.results.forEach((character) => {
           const container = document.createElement('div')
           container.classList.add('container')
           const name = document.createElement('h2')
           name.textContent = character.name
           name.classList.add('name')
           name.addEventListener('click',changeColor)

           const image = document.createElement('img')
            image.src = character.image
            image.classList.add('image')
            image.addEventListener('click', onImageClick) 
           const species = document.createElement('p')
           species.textContent = 'Especie: ' + character.species
           species.classList.add('species')
            //event.stopPropagation() para la propagación y el evento queda en el lugar
            const boton = document.createElement('button')
            boton.textContent = 'Eliminar'
           //boton.addEventListener('click', delCharacter)
            boton.addEventListener('click', () => delCharacter(container))
           app.appendChild(container)
           container.appendChild(name)
           container.appendChild(image)
           container.appendChild(species)
          container.appendChild(boton)

        })
    })




