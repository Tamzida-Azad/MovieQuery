var movieList = [
  { title: "Star Wars: Return of the Jedi", year: "1977", length: 125, rating: "8.4", genre: "sci-fi" },
  { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
  { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" },
  { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
  { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },
  { title: "The Matrix Reloaded”, year: “2003", length: 138, rating: "7.2", genre: "sci-fi" },
  { title: "Cronicles of Narnia", year: "2006", length: 168, rating: "9.4", genre: "adventure"}
];

function getMovieTitle( index ){
  return movieList[index].title;
  //add code
}
console.log("\nMovie Titles of the given index: \n\n");
console.log(getMovieTitle(3));
console.log(getMovieTitle(5));

function addMovie( movie ){
  //add code
movieList.push(movie);
return movieList;
}

var newMovie = {title: "Grudge", year: "2010", length: 148, rating: "8.8", genre: "horror"};
console.log("\n\nNew movie Grudge added: \n\n");
console.log(addMovie(newMovie));

function movieByRating(){
   var init = [];
   for(var i=0; i<movieList.length; i++){
     for(var j=i; j<movieList.length-1; j++){
       if(movieList[j].rating<movieList[j+1].rating){
         init=movieList[j];
         movieList[j]=movieList[j+1];
         movieList[j+1]=init;
       }
     }
   }
   movieList.sort(function(a, b){
     return (b.rating)-(a.rating);
   });
    return movieList;
  }
  
  console.log("\n\nMovies were sorted by ratings in descending order: \n\n");
  console.log(movieByRating());


function findByTitle( title ){
  //add code
  var list = [];
  movieList.map(function(v,i){
    if(v.title.toLowerCase().includes(title)) list.push(v);
  });
  return list;
}
console.log("\n\nMovie found by title: \n\n");
console.log(findByTitle("matrix"));