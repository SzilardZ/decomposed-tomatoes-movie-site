import Link from 'next/link';
import { useState } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

import Logo from '../ui/Logo';
import styles from './MobileNavigation.module.css';

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <IoMdMenu
      className={styles.hamburger}
      size='40px'
      color='#fff'
      onClick={() => setOpen(prevState => !prevState)}
    />
  );

  const closeIcon = (
    <IoMdClose
      className={styles.hamburger}
      size='40px'
      color='#fff'
      onClick={() => setOpen(prevState => !prevState)}
    />
  );

  return (
    <nav className={styles['mobile-navigation']}>
      {/* {!open && <Logo />} */}
      <Logo />
      {open ? closeIcon : hamburgerIcon}
      {open && (
        <ul className={styles['navbar-links']}>
          <li>
            <Link href='/upcoming-movies'>Upcoming</Link>
          </li>
          <li>
            <Link href='/our-favorites'>Our Favorites</Link>
          </li>
          <li>
            <Link href='/favorite-movies'>Your Favorites</Link>
          </li>
          <li>
            <Link href='/contact'>Contact Us</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default MobileNavigation;
