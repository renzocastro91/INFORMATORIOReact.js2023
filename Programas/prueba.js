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
