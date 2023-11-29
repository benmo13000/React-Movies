import React from 'react';
import ActorCard from './ActorCard'; // Assuming ActorCard is in the same directory

export default function ActorsListPage({ movies }) {
  const uniqueActorsSet = new Set();

  movies.forEach((movie) => {
    movie.cast.forEach((actor) => {
      uniqueActorsSet.add(actor);
    });
  });

  const uniqueActorsArray = Array.from(uniqueActorsSet);

  return (
    <div>
      <h1>Actors List</h1>
      <div>
        {uniqueActorsArray.map((actor, index) => (
          <ActorCard key={index} actor={actor} />
        ))}
      </div>
    </div>
  );
}
