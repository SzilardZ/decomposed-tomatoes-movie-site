import styles from './MovieSelectionList.module.css';
import MovieItem from './MovieItem';
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
        breakpoints={{
          // 400: {
          //   // width: 400,
          //   slidesPerView: 1,
          // },
          576: {
            // width: 576,
            slidesPerView: 2,
          },
          768: {
            // width: 768,
            slidesPerView: 3,
          },
          1200: {
            // width: 1200,
            slidesPerView: 4,
          },
          1500: {
            // width: 1400,
            slidesPerView: 5,
          },
        }}
        spaceBetween={6}
        // slidesPerView={4}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className='mySwiper'>
        {selectedMovies.map(movie => (
          <SwiperSlide key={movie.movieId}>
            <ul>
              <MovieItem id={movie.movieId} image={movie.movieImage} />
            </ul>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSelectionList;
