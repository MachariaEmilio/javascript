let movie = {
  genre: "Horror",
  producer: "Ming Jing",
  starring: "Anabell",
  year_of_prod: 2014,
};

function value(movie_obj) {
  console.log(Object.values(movie_obj));
}

value(movie);
