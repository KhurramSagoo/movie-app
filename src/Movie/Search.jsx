import React, { useState } from 'react';

const Search = ({ movies, searchMovies }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(query);
    setQuery('');
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <form onSubmit={handleSearch}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && (
        <div>
          <h3>Search Results:</h3>
          {movies.map((movie, index) => (
            <p key={index}>
              <strong>Name:</strong> {movie.name}, <strong>Rating:</strong> {movie.rating},{' '}
              <strong>Duration:</strong> {movie.duration}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
