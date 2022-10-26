export interface MovieModel {
  id: string;
  title: string;
  releaseYear: string;
  imageUrl: string;
  rating: string;
  numVotes: string;
}

export interface SimpleMovieModel {
  id: string;
  imageUrl: string;
}

export interface SelectedMovieModel {
  movieId: string;
  movieImage: string;
}

export interface UpcomingMovieModel {
  id: string;
  title: string;
  imageUrl: string;
  releaseYear: string;
}
