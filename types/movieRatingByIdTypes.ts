export interface RatingResult {
  results: Results;
}

export interface Results {
  tconst: string;
  averageRating: number;
  numVotes: number;
}
