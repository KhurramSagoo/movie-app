import React, { useState } from 'react';
import MovieForm from './Movie/MovieForm';
import MovieList from './Movie/MovieList';
import Search from './Movie/Search';

const App = () => {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const searchMovies = (query) => {
    // Perform search logic based on the query
    // Update search results if necessary
  };

  return (
    <div>
      <MovieForm addMovie={addMovie} />
      <Search movies={movies} searchMovies={searchMovies} />
      {/* <MovieList movies={movies} /> */}
    </div>
  );
};

export default App;
