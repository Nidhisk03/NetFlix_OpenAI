import React, { useRef } from 'react'
import lang from "../utils/LanguageConstants";
import { useDispatch, useSelector } from "react-redux"
import openai from "../utils/openai";
import { API_OPTIONS } from '../utils/constants';
import {addGptMovieresult} from "../utils/gptSlice"

const GptSearchBar = () => {
    const searchText = useRef(null);
    const dispatch =  useDispatch();
    const langKey = useSelector(store => store.config.lang);
    const movieSearch = async (movie) =>{
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);

        const json = await data.json();
        return json.results;



    }
    const handleGptSearch = async () => {

           
    const getQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " +  searchText.current.value +"only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: getQuery }],
            model: 'gpt-3.5-turbo',
        });
        console.log(gptResults.choices[0].message.content);
        const gptMovies = gptResults.choices[0].message.content.split(",");

        const promiseArray = gptMovies.map(movie => movieSearch(movie));
        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults);
        dispatch(addGptMovieresult({ movieName:gptMovies, movieResults: tmdbResults}));


    }

    return (
        <div className='pt-[8%] px-12 flex justify-center items-center '>
            <form className='bg-black h-24 py-6 w-[800px] ' onSubmit={(e) => e.preventDefault()}>

                <input
                    ref={searchText}
                    type='text' className='md:w-[75%] w-[35%] ml-5 p-2 mx-3 md:mt-0 mt-8   rounded-lg'
                    placeholder={lang[langKey].gptSearchplaceholder}
                />

                <button onClick={handleGptSearch} className=' p-2 w-32  mr-3 text-lg text-white rounded-lg  hover:bg-opacity-25 bg-red-600'>
                    {lang[langKey].search}

                </button>

            </form>
        </div>
    )
}

export default GptSearchBar
