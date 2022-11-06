import { GetServerSideProps } from 'next';
import ActorDetails from '../../components/actors/ActorDetails';
import { ResultElement } from '../../types/actorByIdTypes';
import { ActorDetailedType } from '../../types/actorTypes';
import { Results } from '../../types/movieByIdTypes';

interface ActorPageProps {
  actor: ActorDetailedType;
}

const ActorPage = (props: ActorPageProps) => {
  return <ActorDetails actor={props.actor} />;
};

const sendHttpRequest = async (URL: string, apiHost: string) => {
  const response = await fetch(URL, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_MOVIE_API_KEY!,
      'X-RapidAPI-Host': apiHost,
    },
  });
  const { results } = await response.json();
  return results;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const actorId = context.params!.actorId;

  const actorData = await sendHttpRequest(
    `https://moviesminidatabase.p.rapidapi.com/actor/id/${actorId}/`,
    'moviesminidatabase.p.rapidapi.com'
  );

  const actorRolesData = await sendHttpRequest(
    `https://moviesminidatabase.p.rapidapi.com/actor/id/${actorId}/all_roles/?page_size=20&page=1`,
    'moviesminidatabase.p.rapidapi.com'
  );

  const actorBio = await sendHttpRequest(
    `https://moviesminidatabase.p.rapidapi.com/actor/id/${actorId}/bio/`,
    'moviesminidatabase.p.rapidapi.com'
  );

  const actorMovieIdArr = actorRolesData.flatMap(
    (movie: ResultElement[]) => movie[0].imdb_id
  );

  let url = `https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?`;

  for (const [i, id] of Object.entries(actorMovieIdArr)) {
    url = url.concat(`idsList%5B${i}%5D=${id}&`);
  }

  const urlFormatted = url.slice(0, -1);

  const moviesData = await sendHttpRequest(
    urlFormatted,
    'moviesdatabase.p.rapidapi.com'
  );

  const movies = await moviesData.map((movie: Results) => {
    return {
      id: movie.id,
      imageUrl: movie.primaryImage.url,
    };
  });

  const actor = {
    id: actorData.imdb_id,
    name: actorData.name,
    birthDate: actorData.birth_date,
    bio: actorData.partial_bio,
    imgUrl: actorData.image_url,
    movies: movies,
    bioFull: actorBio.biography?.bio,
  };

  return {
    props: {
      actor: actor,
    },
  };
};

export default ActorPage;
