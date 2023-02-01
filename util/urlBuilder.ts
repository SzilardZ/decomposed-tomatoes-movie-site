// for endpoint GET /titles/x/titles-by-ids
export const urlBuilderForMultipleMovies = (movieIds: string[]) => {
  let baseUrl = `https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList=`;

  for (const [i, id] of Object.entries(movieIds)) {
    baseUrl = baseUrl.concat(`${id}%2C`);
  }

  //remove last three character: %2C
  const formattedUrl = baseUrl.slice(0, -3);

  return formattedUrl;
};
