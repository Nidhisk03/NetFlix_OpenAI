import React from 'react'
import {useSelector } from "react-redux";
import MovieList from "./MovieList";


const GptMovieSuggestion = () => {
  const {movieName,movieResults}  = useSelector(store => store.gpt);
  if(!movieName)return null;


  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-75'>

    {  movieName.map((movieNames,index) =>
    <MovieList key={movieNames} title={movieNames} movies={movieResults[index]} /> 
    
    )}
       
    </div>
  )
}

export default GptMovieSuggestion
