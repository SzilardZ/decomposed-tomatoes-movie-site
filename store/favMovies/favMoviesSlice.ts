import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimpleMovieModel } from '../../types/movieTypes';

interface InitialState {
  favMovies: SimpleMovieModel[];
}

const initialState: InitialState = {
  favMovies: [],
};

const favMoviesSlice = createSlice({
  name: 'favMovies',
  initialState: initialState,
  reducers: {
    addMovie(state, action: PayloadAction<SimpleMovieModel>) {
      state.favMovies.push(action.payload);
    },
    removeMovie(state, action: PayloadAction<string>) {
      state.favMovies = state.favMovies.filter(
        (movie: SimpleMovieModel) => movie.id !== action.payload
      );
    },
  },
});

export const { addMovie, removeMovie } = favMoviesSlice.actions;
export default favMoviesSlice.reducer;
