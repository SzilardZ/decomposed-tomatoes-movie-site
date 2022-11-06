export interface ActorType {
  id: string;
  name: string;
}

export interface ActorDetailedType {
  id: string;
  name: string;
  birthDate: string;
  bio: string;
  imgUrl: string;
  movieIds: string[];
  bioFull: string;
}
