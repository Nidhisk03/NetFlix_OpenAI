import React from 'react'
import Header from './Header'
import useNowPlaying from '../customHooks/useNowPlaying'
import usePopularMovies from '../customHooks/usePopularMovies';
import useTopRatedMovies from '../customHooks/useTopRatedMovies';
import useUpcomingMovies from '../customHooks/useUpcomingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { UseSelector, useSelector } from 'react-redux';
import NetlixGPt from './NetlixGPt';


const Browse = () => {

  const showgpt = useSelector(store => store.gpt.showgptsearch)


  useNowPlaying();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();



  return (
    <div>
      <Header />
      {showgpt===true ?  <NetlixGPt />: <>
      <MainContainer />
      <SecondaryContainer />
      </>
      }
    </div>
  )
}

export default Browse
