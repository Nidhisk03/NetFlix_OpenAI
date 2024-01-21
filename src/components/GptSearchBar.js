import React from 'react'
import lang from "../utils/LanguageConstants";
import {useSelector} from "react-redux"

const GptSearchBar = () => {

    const langKey = useSelector(store => store.config.lang);

    return (
        <div className='pt-[8%] px-12 flex justify-center items-center '>
            <form className='bg-black h-24 py-6 w-[800px] '>
                
                <input
                    type='text' className='w-[75%] ml-5 p-2 mx-3 rounded-lg' 
                    placeholder={lang[langKey].gptSearchplaceholder}
                />

                <button className=' p-2 w-32  mr-3 text-lg text-white rounded-lg  hover:bg-opacity-25 bg-red-600'>
                {lang[langKey].search}
                </button>
                
            </form>
        </div>
    )
}

export default GptSearchBar
