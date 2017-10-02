var movieList = [
  { title: "Star Wars: Return of the Jedi", year: "1977", length: 125, rating: "8.4", genre: "sci-fi" },
  { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
  { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" },
  { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
  { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },
  { title: "The Matrix Reloaded”, year: “2003", length: 138, rating: "7.2", genre: "sci-fi" },
  { title: "The Cronicoles of Narnia”, year: “2005", length: 150, rating: "8.0", genre: "adventure" },
  { title: "Ghost Ship”, year: “2009", length: 138, rating: "7.2", genre: "horror" }

];

function getMovieTitle( index ){
  //add code
  return movieList[index].title;
}

console.log(getMovieTitle(3));
console.log(getMovieTitle(0));
console.log(getMovieTitle(1));

function addMovie( movie ){
  //add code
 movieList.push(movie);
 return movieList;

}

var newMovie = {tittle:"Grudge”, year: “2011", length: 138, rating: "7.8", genre: "horror"};
console.log(addMovie(newMovie));

function movieByRating(){
  //add code
}

console.log(movieByRating());

function findByTitle( title ){
  //add code
}

console.log(findByTitle("matrix"));
