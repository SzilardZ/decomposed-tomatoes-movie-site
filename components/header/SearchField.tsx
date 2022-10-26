import { useRouter } from 'next/router';
import React, { useRef } from 'react';

import styles from './SearchField.module.css';

import Button from '../ui/Button';

const SearchField = () => {
  const inputMovieRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const submitSearchMovieHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMovieRef.current!.value.length > 1) {
      router.push(`/searched-movie/${inputMovieRef.current!.value}`);
    } else {
      alert('Please type at least 2 characters!');
    }
  };

  return (
    <form onSubmit={submitSearchMovieHandler} className={styles['search-bar']}>
      {/* <label htmlFor='search-movie'>Search Movie</label> */}
      <div className={styles.input}>
        <input
          type='text'
          id='search-movie'
          ref={inputMovieRef}
          placeholder='movie title'
        />
        <Button buttonText='Search now' />
      </div>
    </form>
  );
};

export default SearchField;
