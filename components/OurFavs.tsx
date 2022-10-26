import { Fragment } from 'react';
import Navbar from './header/Navbar';

import styles from './OurFavs.module.css';

const OurFavs = () => {
  return (
    <Fragment>
      <Navbar />
      <h2 className={styles.text}>Sorry. We don't like movies.</h2>
    </Fragment>
  );
};

export default OurFavs;
