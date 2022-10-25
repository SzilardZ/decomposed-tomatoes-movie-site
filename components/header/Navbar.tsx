import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles['main-nav']}>
      <Link href='/'>
        <div className={styles.logo}>THE "THE MOVIE APP"</div>
      </Link>
      <nav className={styles['main-nav']}>
        <ul className={styles['main-nav-list']}>
          <li className={styles.menu__link}>
            <Link href='/upcoming-movies' className={styles.menu__link}>
              Upcoming
            </Link>
            <svg
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              x='0px'
              y='0px'
              viewBox='0 0 152.9 43.4'
              xmlSpace='preserve'>
              <path d='M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4' />
            </svg>
          </li>
          <li className={styles.menu__link}>
            <Link href='#' className={styles.menu__link}>
              Our Favorites
            </Link>
            <svg
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              x='0px'
              y='0px'
              viewBox='0 0 152.9 43.4'
              xmlSpace='preserve'>
              <path d='M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4' />
            </svg>
          </li>
          <li className={styles.menu__link}>
            <Link href='/favorite-movies' className={styles.menu__link}>
              Your Favorites
            </Link>
            <svg
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              x='0px'
              y='0px'
              viewBox='0 0 152.9 43.4'
              xmlSpace='preserve'>
              <path d='M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4' />
            </svg>
          </li>
          <li className={styles.menu__link}>
            <Link href='/contact' className={styles.menu__link}>
              Contact Us
            </Link>
            <svg
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              x='0px'
              y='0px'
              viewBox='0 0 152.9 43.4'
              xmlSpace='preserve'>
              <path d='M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4' />
            </svg>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
