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
