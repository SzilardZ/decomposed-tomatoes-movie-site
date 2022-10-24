export interface Result {
  page: string;
  next: string;
  entries: number;
  results: ResultElement[];
}

export interface ResultElement {
  id: string;
  primaryImage: PrimaryImage | null;
  titleType: TitleType;
  titleText: TitleText;
  releaseYear: ReleaseYear | null;
  releaseDate: ReleaseDate | null;
}

export interface PrimaryImage {
  id: string;
  width: number;
  height: number;
  url: string;
  caption: Caption;
  __typename: string;
}

export interface Caption {
  plainText: string;
  __typename: string;
}

export interface ReleaseDate {
  day: number;
  month: number;
  year: number;
  __typename: string;
}

export interface ReleaseYear {
  year: number;
  endYear: null;
  __typename: string;
}

export interface TitleText {
  text: string;
  __typename: TitleTextTypename;
}

export enum TitleTextTypename {
  TitleText = 'TitleText',
}

export interface TitleType {
  text: Text;
  id: ID;
  isSeries: boolean;
  isEpisode: boolean;
  __typename: TitleTypeTypename;
  categories?: Category[];
  canHaveEpisodes?: boolean;
}

export enum TitleTypeTypename {
  TitleType = 'TitleType',
}

export interface Category {
  value: ID;
  __typename: string;
}

export enum ID {
  Movie = 'movie',
}

export enum Text {
  Movie = 'Movie',
}
