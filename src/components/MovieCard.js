import React from 'react';
import {IMG_POSTER} from '../utils/constants';


const MovieCard = ({posterPath}) => {

    
    if (!posterPath) return null;
    
    return (
      <div className="w-36 pr-2">
        <img alt="MovieCard" src={IMG_POSTER + posterPath} />
      </div>
    );

  
  
}

export default MovieCard
