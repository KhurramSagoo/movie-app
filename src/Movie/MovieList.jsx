import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <div>
      <h2>Movie List</h2>
      {movies.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              <strong>Name:</strong> {movie.name}, <strong>Rating:</strong> {movie.rating},{' '}
              <strong>Duration:</strong> {movie.duration}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieList;
