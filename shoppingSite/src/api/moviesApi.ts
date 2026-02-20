import { createAsyncThunk } from "@reduxjs/toolkit";
import { setGenres, setMovies } from "../components/MoviesApp/MovieSlice";
import axios from "axios";
// const baseUrl = "https://jsonfakery.com/movies/paginated";
const baseUrl = "http://localhost:4000/api/movies";

// getMovies= action creator function and dispatch is a thunk function
export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (_, { dispatch }) => {
    try {
      const response = await axios(baseUrl);
      const data = response.data;
      // console.log("movies data: ", data?.data);

      // Dispatch the action to update the store
      dispatch(setMovies(data?.data));

      return data.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
);

export const getMoviesBySearch = createAsyncThunk(
  "movies/getMoviesBySearch",
  async (query: string, { dispatch }) => {
    try {
      const url = baseUrl + "/search?query=" + query;
      // console.log("url", url);
      const response = await axios.get(url);
      const data = response.data;
      console.log("movies by search", data?.data);

      // Dispatch the action to update the store
      dispatch(setMovies(data?.data));

      return data.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
);

export const getMoviesByGenres = createAsyncThunk(
  "movies/getMoviesByGenre",
  async (query: string, { dispatch }) => {
    try {
      const url = baseUrl + "/genre?query=" + query;
      const response = await axios.get(url);
      const data = response.data;
      console.log("movies by genre", data?.data);

      // Dispatch the action to update the store
      dispatch(setMovies(data?.data));

      return data.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
);

export const getAllGenres = createAsyncThunk(
  "movies/getAllGenres",
  async (_, { dispatch }) => {
    try {
      const response = await axios.get(baseUrl + "/getAllGenres");
      const data = response.data;
      // console.log("genres", data);

      dispatch(setGenres(data?.data));

      return data.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);
