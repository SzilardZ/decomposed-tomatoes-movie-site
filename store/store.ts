import { configureStore } from '@reduxjs/toolkit';
import favMoviesSlice from './favMovies/favMoviesSlice';

const store = configureStore({
  reducer: {
    favMovies: favMoviesSlice,
  },
});

export default store;
