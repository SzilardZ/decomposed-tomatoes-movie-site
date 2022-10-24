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
  releaseYear: ReleaseYear;
  releaseDate: ReleaseDate;
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
  __typename: ReleaseDateTypename;
}

export enum ReleaseDateTypename {
  ReleaseDate = 'ReleaseDate',
}

export interface ReleaseYear {
  year: number;
  endYear: null;
  __typename: ReleaseYearTypename;
}

export enum ReleaseYearTypename {
  YearRange = 'YearRange',
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
  categories?: Category[];
  canHaveEpisodes?: boolean;
  __typename: TitleTypeTypename;
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
