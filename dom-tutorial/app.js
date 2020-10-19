console.log('Hello from app.js')

const movies = [
  'Inception',
  'The GodFather',
  'Fury',
  'Lord of the rings',
  'Shawsank Redemption'
]


for (const movieTitle of movies){
  const movieElement = document.createElement('li');
  movieElement.textContent = movieTitle


  document.getElementById('movie-list').appendChild(movieElement);

  movieElement.onclick = function(){
    console.log(movieElement.textContent)
  }
}