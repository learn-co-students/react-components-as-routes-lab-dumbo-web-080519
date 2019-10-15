import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const renderMovies = movieArr => {
    return (
      < ul >
        { movieArr.map(movie => < li key={ movie }>{ movie }</ li >) }
      </ ul >
    )
  }

  const renderDirectors = () => {
    return directors.map(director => {
      return (
        < div key={ director.name }>
          { director.name }
          { renderMovies(director.movies) }
        </ div >
      )
    })
  }

  return (
    <div>
      < h1 >Directors Page</ h1 >
      { renderDirectors() }
    </div>
  );
}

export default Directors
