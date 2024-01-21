import {createSlice} from '@reduxjs/toolkit'

const gptSlice = createSlice({
     name:'gpt',
     initialState:{
        showgptsearch:false
     },
     reducers : {
        toggleGptSearch: (state ,action) =>{
             state.showgptsearch = !state.showgptsearch;
        },
    

     }
})

export const {toggleGptSearch} = gptSlice.actions;
export default gptSlice.reducer;