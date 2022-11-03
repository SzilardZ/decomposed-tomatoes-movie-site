import { GetServerSideProps } from 'next';
import ActorsList from '../../components/actor/ActorsList';
import { ResultElement } from '../../types/actorByIdTypes';
import { ActorType } from '../../types/actorTypes';

// interface SearchActorProps {
//   actors: ActorType[];
// }

const DUMMY_ACTORS = [
  {
    name: 'Leonardo DiCaprio',
    id: 'a1',
    imgUrl:
      'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco,dpr_1/v1488562834/v0s71rbz7eqwh9qabxq0.png',
  },
  {
    name: 'Tom Hanks',
    id: 'a2',
    imgUrl:
      'https://cachedimages.podchaser.com/256x256/aHR0cHM6Ly9jcmVhdG9yLWltYWdlcy5wb2RjaGFzZXIuY29tLzVkYzIzYzZjOTQ1OWU2NTE1YzFjY2M3YjFjY2Q1YjI0LmpwZWc%3D/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D',
  },
  {
    name: 'Julia Roberts',
    id: 'a3',
    imgUrl:
      'https://www.stylist.co.uk/images/app/uploads/2019/01/22111709/julia-roberts-crop-1548155835-1093x1093.jpg?w=256&h=256&fit=max&auto=format%2Ccompress',
  },
];

const SearchedActor = () => {
  return <ActorsList actors={DUMMY_ACTORS} />;
};

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_MOVIE_API_KEY!,
//     'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com',
//   },
// };

// export const getServerSideProps: GetServerSideProps = async context => {
//   const actorName = context.params!.actorName;
//   const response = await fetch(
//     `https://moviesminidatabase.p.rapidapi.com/actor/imdb_id_byName/${actorName}/`,
//     options
//   );
//   const { results } = await response.json();

//   const actorIdArr = results
//     .map((actor: ResultElement) => actor.imdb_id)
//     .filter((id: string) => id.slice(0, 2) === 'nm');

//   const actors: ActorType[] = [];

//   for (const actorId of actorIdArr) {
//     const response = await fetch(
//       `https://moviesminidatabase.p.rapidapi.com/actor/id/${actorId}/`,
//       options
//     );
//     const { results } = await response.json();
//     actors.push({
//       name: results.name,
//       id: results.imdb_id,
//       imgUrl: results.image_url,
//     });
//   }

//   console.log('actors: ', actors);

//   return {
//     props: {
//       actors: actors,
//     },
//   };
// };

export default SearchedActor;
