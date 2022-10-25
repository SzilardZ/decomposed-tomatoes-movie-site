import { createSlice } from '@reduxjs/toolkit';
import SelectedMovieModel from '../../models/selectedMovie';

interface InitialState {
  favMovies: SelectedMovieModel[];
}

const initialState: InitialState = {
  favMovies: [],
};

const favMoviesSlice = createSlice({
  name: 'favMovies',
  initialState: initialState,
  reducers: {
    addMovie(state, action) {
      state.favMovies.push(action.payload);
    },
    removeMovie(state, action) {
      state.favMovies.filter(
        (movie: SelectedMovieModel) => movie.movieId !== action.payload.id
      );
    },
  },
});

export const { addMovie, removeMovie } = favMoviesSlice.actions;
export default favMoviesSlice.reducer;
