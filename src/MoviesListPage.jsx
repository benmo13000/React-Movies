import React from 'react';
import MovieCard from './MovieCard';
import { movies } from "./data.jsx";



const MoviesListPage = () => {
  const movieCards=movies.map((movie, index) => 
    <MovieCard key={index} movie={movie} />)
  return (
    <div>
      <h1>Movies List</h1>
      <div>
        {movieCards}
      </div>
    </div>
  );
};

export default MoviesListPage;