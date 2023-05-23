const app = document.getElementById('app')
const artist = React.createElement('h2',{},'Justin Bieber')
const artist2 = React.createElement('h2',{},'Dua Lipa')
const artist3 = React.createElement('h2',{},'Dillom')

function Artist(props){
   return React.createElement('div',{className:'container'},[
    React.createElement('h2',null,  props.name),
    React.createElement('p',{className:'song'},  props.song),
   ]) 
}

function App(){
    return React.createElement(
        "main", 
        null,
    [
        React.createElement('h1',{className:'title'},'Music App'),
        React.createElement(Artist, {name:  'Justin Bieber', song: 'Sorry'}),
        React.createElement(Artist, {name:  'Dua Lipa', song:'Laviatiing'}),
        React.createElement(Artist, {name:  'Dillom', song:'SS'}),
    ]
    )
}
//title.textContent = 'Music App'
//title.classList = 'title'

//se inserta con react-dom
const root = ReactDOM.createRoot(app)
root.render(React.createElement(App))
//app.appendChild(title)


//Inslan node
//npm create vite@latest my-music-app -- --template react-ts
//cd my-music-app
//npm install
//npm run dev