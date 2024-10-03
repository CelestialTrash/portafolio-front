// src/components/Navbar.jsx
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import CustomCursor from './CustomCursor'; // Asegúrate de importar el CustomCursor

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Función para alternar entre los modos
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.className = isDarkMode ? styles.light : styles.dark;
  };

  return (
    <>
      <nav className={`${styles.navbar} ${isDarkMode ? styles.dark : styles.light}`}>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {isDarkMode ? 'Angel Mode' : 'Demon Mode'}
        </button>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}><a href="/">Home</a></li>
          <li className={styles.navbarItem}><a href="/projects">Dev</a></li>
          <li className={styles.navbarItem}><a href="/music">Music</a></li>
          <li className={styles.navbarItem}><a href="/sound-design">Sound Design</a></li>
        </ul>
      </nav>

      {/* Pasar el estado isDarkMode como prop al CustomCursor */}
      <CustomCursor isDarkMode={isDarkMode} />
    </>
  );
};

export default Navbar;

