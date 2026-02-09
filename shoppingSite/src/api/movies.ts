import { createAsyncThunk } from '@reduxjs/toolkit';
import { setMovies } from '../components/MoviesApp/MovieSlice';
import axios from 'axios';

// getMovies= action creator function and dispatch is a thunk function
export const getMovies = createAsyncThunk('movies/getMovies', async (_, { dispatch }) => {
  const url = "https://jsonfakery.com/movies/paginated";

  try {
    const response = await axios(url);
    const data = response.data;
    // console.log("movies data: ", data?.data);
    
    // Dispatch the action to update the store
    dispatch(setMovies(data?.data));
    
    return data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});
