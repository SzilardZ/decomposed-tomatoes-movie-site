import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles['main-nav']}>
      <Link href='/'>
        <div className={styles.logo}>MOVIE APP</div>
      </Link>
      <nav className={styles['main-nav']}>
        <ul className={styles['main-nav-list']}>
          <li>
            <Link href='/upcoming-movies'>Upcoming</Link>
          </li>
          <li>
            <Link href='#'>Our Favorites</Link>
          </li>
          <li>
            <Link href='#'>Your Favorites</Link>
          </li>
          <li>
            <Link href='/contact'>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
