import React from "react";
import { getMovies } from "../services/movieService";
import { getGenres } from "../services/genreService";

const MovieItem = props => {
  const { id } = props.match.params;
  const movie = getMovies().find(m => m.id == id);
  const genre = getGenres().find(g => g.id == movie.genreId);
  console.log(movie);
  return (
    <div>
      <img src={movie.image} alt="Not Found" className="movieImage" />
      <br />
      <p>Title: {movie.title}</p>
      <p>Description: {movie.description}</p>
      <p>Genre: {genre.title}</p>
      <p>Rate: {movie.rate}</p>
    </div>
  );
};

export default MovieItem;
