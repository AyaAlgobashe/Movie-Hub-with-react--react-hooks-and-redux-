
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE={
    favirot:[],
    movie_item:[]
}

const favirotSlice =createSlice({
  name: "favirot",
  initialState: INITIAL_STATE,
  reducers: {
  
    addToMovieWatch: (state, action) => {
       state.favirot.push(action.payload);
    },
    removeMovie:(state,action)=>{
        state.favirot = state.favirot.filter(movie => movie.id !== action.payload.id);

    }
   
  },



})

export const {
   
      addToMovieWatch,
      removeMovie
  } = favirotSlice.actions;
  
  export default favirotSlice.reducer;