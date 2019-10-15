import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const renderGenres = genreArr => {
    return (
      < ul >
        { genreArr.map(genre => < li key={ genre }>{ genre }</ li >) }
      </ ul >
    )
  }

  const renderMovies = () => {
    return movies.map(movie => {
      return (
        < div key={ movie.title }>
          { movie.title }
          { movie.time }
          { renderGenres(movie.genres) }
        </ div >
      )
    })
  }

  return (
    <div>
        < h1 >Movies Page</ h1 >
        { renderMovies() }
    </div>
  );
};

export default Movies;
