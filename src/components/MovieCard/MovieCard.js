import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <h1> {movie.title} </h1>
      <img src={movie.img} alt="" />
    </div>
  );
};

export default MovieCard;
