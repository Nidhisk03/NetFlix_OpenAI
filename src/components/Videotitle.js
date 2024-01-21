import React from 'react'

const Videotitle = ({ title, overview }) => {
  
  return (
    <div className='w-screen aspect-video pt-[25%] px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='text-lg w-1/2'>{overview}</p>
      <div className='pt-4'>
        <button className='p-2 w-32 mr-3 text-lg text-black bg-white rounded-lg  hover:bg-opacity-25'>
          <i class="fa-solid fa-play">
          </i>   Play
        </button>
        <button className='p-2 w-32 text-white text-lg bg-slate-500 rounded-lg bg-opacity-50'>
        <i class="fa-solid fa-circle-info"></i>  More Info</button>
      </div>

    </div>
  )
}

export default Videotitle
