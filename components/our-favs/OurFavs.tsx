import { Fragment } from 'react';

import styles from './OurFavs.module.css';
import Navbar from '.././navbar/Navbar';

const OurFavs = () => {
  return (
    <Fragment>
      <Navbar />
      <div className={styles.container}>
        <h2 className={styles.text}>{`Sorry. We don't like movies.`}</h2>
      </div>
    </Fragment>
  );
};

export default OurFavs;
