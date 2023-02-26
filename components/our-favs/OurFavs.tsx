import { Fragment } from 'react';
import Navbar from '.././navbar/Navbar';

import styles from './OurFavs.module.css';

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
