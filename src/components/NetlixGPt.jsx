import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'

const NetlixGPt = () => {
  return (
    <div>
      <div className='absolute bg-gradient-to-b from-black -z-20' >

        <img alt='logo' src='https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg' />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />

    </div>
  )
}

export default NetlixGPt
