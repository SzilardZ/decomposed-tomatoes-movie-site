import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimpleMovieModel } from '../../models/movie';

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
    removeMovie(state, action: PayloadAction<SimpleMovieModel>) {
      state.favMovies.filter(
        (movie: SimpleMovieModel) => movie.id !== action.payload.id
      );
    },
  },
});

export const { addMovie, removeMovie } = favMoviesSlice.actions;
export default favMoviesSlice.reducer;
