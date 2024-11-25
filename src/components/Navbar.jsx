import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  return (
    <>
      <nav className={`${styles.navbar} ${isDarkMode ? styles.dark : styles.light}`}>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {isDarkMode ? 'Celestial Mode' : 'Data Mode'}
        </button>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}><Link to="/">Home</Link></li>
          <li className={styles.navbarItem}><Link to="/dev">Dev</Link></li>
          <li className={styles.navbarItem}><Link to="/music">Music</Link></li>
          <li className={styles.navbarItem}><Link to="/sound-design">Sound Design</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

