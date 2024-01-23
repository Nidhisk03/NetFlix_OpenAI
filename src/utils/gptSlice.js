import {createSlice} from '@reduxjs/toolkit'

const gptSlice = createSlice({
     name:'gpt',
     initialState:{
        showgptsearch:false,
        movieName:null,
        movieResults:null,
     },
     reducers : {
        toggleGptSearch: (state ,action) =>{
             state.showgptsearch = !state.showgptsearch;
        },
        addGptMovieresult:(state,action)=>{
                  const {movieName,movieResults} = action.payload;
                state.movieName = movieName;
                state.movieResults = movieResults;
        }
    ,

     }
})

export const {toggleGptSearch,addGptMovieresult} = gptSlice.actions;
export default gptSlice.reducer;