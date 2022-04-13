import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MoviesList = ({ movies, textFilter }) => {
  return (
    <div>
      MoviesList
      {movies
        .filter((movie, i) =>
          movie.title.toLowerCase().includes(textFilter.toLowerCase())
        )
        .map((movie, i) => (
          <MovieCard movie={movie} />
        ))}
    </div>
  );
};

export default MoviesList;
