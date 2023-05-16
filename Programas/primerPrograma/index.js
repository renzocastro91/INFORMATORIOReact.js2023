const API_URL = 'https://rickandmortyapi.com/api/character'
    //especie.classList.add("especie")

const app = document.getElementById('app')
const request = fetch(API_URL)

request
    .then((res) => res.json())
    .then((characters) => {
        characters.results.forEach((character) => {
           const container = document.createElement('div')
           container.classList.add('container')
           const name = document.createElement('h2')
           name.textContent = character.name
           name.classList.add('name')
           const image = document.createElement('img')
            image.src = character.image
            image.classList.add('image') 
           const species = document.createElement('p')
           species.textContent = character.species
           species.classList.add('species')

           app.appendChild(container)
           container.appendChild(name)
           container.appendChild(image)
           container.appendChild(species)

        })
    })




