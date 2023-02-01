export interface MovieModel {
  id: string;
  title: string;
  releaseYear: string;
  imageUrl: string;
  rating: string;
  numVotes: string;
  descripiton: string;
  cast: Role[];
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

// Cast by Movie Id Type
export interface CastResults {
  roles: Role[];
}

export interface Role {
  role: string;
  actor: Actor;
}

export interface Actor {
  imdb_id: string;
  name: string;
}
