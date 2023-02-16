import MovieItem from './MovieItem';
import styles from './MovieSelectionList.module.css';
import { SelectedMovieModel } from '../../types/movieTypes';

// SWIPER imports
// import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay } from 'swiper';

interface MovieSelectionListProps {
  selectedMovies: SelectedMovieModel[];
}

const MovieSelectionList = ({ selectedMovies }: MovieSelectionListProps) => {
  return (
    <div className={styles['swiper-container']}>
      <Swiper
        spaceBetween={1}
        slidesPerView={4}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className='mySwiper'>
        {selectedMovies.map(movie => (
          <SwiperSlide key={movie.movieId}>
            <MovieItem id={movie.movieId} image={movie.movieImage} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSelectionList;
