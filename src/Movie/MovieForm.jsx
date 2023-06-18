import React, { useState } from 'react';

const MovieForm = ({ addMovie }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [duration, setDuration] = useState('');
  const [nameError, setNameError] = useState('');
  const [ratingError, setRatingError] = useState('');
  const [durationError, setDurationError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    setRatingError('');
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
    setDurationError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setNameError('Movie name cannot be empty');
      return;
    }

    if (!rating.trim()) {
      setRatingError('Movie rating cannot be empty');
      return;
    }

    if (isNaN(rating) || rating < 0 || rating > 100) {
      setRating('');
      setRatingError('Movie rating must be a number between 0 and 100');
      return;
    }

    if (!duration.trim() || !/^(\d+)\s*(hrs|mins)$/i.test(duration)) {
      setDuration('');
      setDurationError('Invalid movie duration. Please use the format: "number hours" or "number minutes"');
      return;
    }

    const movie = {
      name,
      rating: Number(rating),
      duration
    };

    addMovie(movie);

    setName('');
    setRating('');
    setDuration('');
    setNameError('');
    setRatingError('');
    setDurationError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Movie Name:
        <input type="text" value={name} onChange={handleNameChange} />
        {nameError && <p className="error">{nameError}</p>}
      </label>
      <br />
      <label>
        Movie Rating (0-100):
        <input type="number" min="0" max="100" value={rating} onChange={handleRatingChange} />
        {ratingError && <p className="error">{ratingError}</p>}
      </label>
      <br />
      <label>
        Movie Duration:
        <input type="text" value={duration} onChange={handleDurationChange} />
        {durationError && <p className="error">{durationError}</p>}
      </label>
      <br />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;
