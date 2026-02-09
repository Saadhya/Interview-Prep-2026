import { createSlice } from "@reduxjs/toolkit";
import { getMovies } from "../../api/movies";

const initialState = {
  movies: [],
  loading: false,
  error: null as string | null,
};

const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export const { setMovies } = MovieSlice.actions;
export default MovieSlice.reducer;
