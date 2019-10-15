import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const renderMovies = movieArr => {
    return (
      < ul >
        { movieArr.map(movie => < li key={ movie }>{ movie }</ li >) }
      </ ul >
    )
  }

  const renderActors = () => {
    return actors.map(actor => {
      return (
        < div key={ actor.name }>
          { actor.name }
          { renderMovies(actor.movies) }
        </ div >
      )
    })
  }

  return (
    <div>
      < h1 >Actors Page</ h1 >
      { renderActors() }
    </div>
  );
};

export default Actors;
