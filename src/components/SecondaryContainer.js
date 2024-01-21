import React from 'react'
import MovieList from "./MovieList";
import {useSelector} from "react-redux";

const SecondaryContainer = () => {
 const movies = useSelector(store => store.movies);



  return (
    <div className='bg-black px-4'>
      <div className='-mt-60 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
    
 
      <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />

      <MovieList title={"Upcoming movies"} movies={movies.upcomingMovies} />
      <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer;
