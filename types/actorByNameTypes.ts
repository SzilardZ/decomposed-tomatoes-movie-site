export interface Result {
  results: Results;
}

export interface Results {
  imdb_id: string;
  name: string;
  image_url: string;
  type: string;
  birth_date: Date;
  birth_place: string;
  partial_bio: string;
  height: string;
  star_sign: string;
}
