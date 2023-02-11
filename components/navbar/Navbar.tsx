import Logo from '../ui/Logo';
import styles from './Navbar.module.css';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

const Navbar = () => {
  return (
    <div>
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default Navbar;
