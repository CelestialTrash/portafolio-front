import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`${styles.footer} ${isDarkMode ? styles.dark : styles.light}`}>
      <div className={styles.madeWithSection}>
        <span className={styles.line}></span> {/* Línea delgada */}
        <span className={styles.madeWithText}>
          Made with React, MongoDB, CSS Modules {/* Lista de tecnologías */}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
