import { urlBuilderForMultipleMovies } from '../util/urlBuilder';
import { API_KEY, API_HOST_MOVIE_DB } from '../constants/contants';

export const sendHttpGetRequest = async (
  URL: string,
  apiKey: string,
  apiHost: string
) => {
  const response = await fetch(URL, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': apiHost,
    },
  });
  const { results } = await response.json();
  return results;
};

export const getSelectedMovies = async () => {
  const movieIds = [
    'tt8721424',
    'tt3783958',
    'tt6966692',
    'tt6155172',
    'tt11214590',
    'tt1160419',
    'tt4975722',
    'tt10366460',
    'tt2582802',
    'tt2278388',
  ];

  const url = urlBuilderForMultipleMovies(movieIds);

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST_MOVIE_DB,
    },
  });
  const { results } = await response.json();
  return results;
};

export const getUpcomingMovies = async () => {
  const response = await fetch(
    'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST_MOVIE_DB,
      },
    }
  );
  const { results } = await response.json();
  return results;
};
