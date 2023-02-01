export interface Result {
  results: ActorElement[];
}

export interface ActorElement {
  imdb_id: string;
  name: string;
}

// export interface Result {
//   links: Links;
//   count: number;
//   results: ResultElement[];
// }

export interface Links {
  next: null;
  previous: null;
}

export interface ResultElement {
  imdb_id?: string;
  title?: string;
  role?: string;
  actor?: Actor;
}

export interface Actor {
  imdb_id: string;
  name: string;
}
