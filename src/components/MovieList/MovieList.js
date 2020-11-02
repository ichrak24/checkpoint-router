import React from 'react';
import MovieCard from "../MovieCard/MovieCard";
import PropTypes from 'prop-types';
import '../MovieList/MovieList.css';
function MovieList({list,filterText,rate,showCard}) {
    return (
        <div className="liste">
             {list.filter(el=>el.title.toLowerCase().includes(filterText.toLowerCase()) && el.rate>=rate).map((el, i) => (
              <MovieCard 
              key={el.id} 
              title={el.title}
              description={el.description}
              posterUrl={el.posterUrl}
             trailerSrc={el.trailerSrc}
              rate={el.rate}
              showCard={showCard}

              // movie={el}
              />
            ))}
        </div>
    )
}

export default MovieList;
MovieList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};
