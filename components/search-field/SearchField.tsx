import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import styles from './SearchField.module.css';
import Button from '../ui/Button';

interface SearchFieldProps {
  type: string;
}

const SearchField = ({ type }: SearchFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const submitSearchHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const userInput = inputRef.current!.value;
    if (userInput.length > 1) {
      type === 'movie'
        ? router.push(`/searched-movies/${userInput}`)
        : router.push(`/searched-actors/${userInput}`);
    } else {
      alert('Please type at least 2 characters!');
    }
  };

  return (
    <div>
      <form onSubmit={submitSearchHandler} className={styles['search-bar']}>
        {/* <label htmlFor='search-movie'>Search Movie</label> */}
        <div className={styles.input}>
          <input
            type='text'
            id='search-movie'
            ref={inputRef}
            placeholder='type here'
          />
          <Button buttonText='Search now' />
        </div>
      </form>
    </div>
  );
};

export default SearchField;
