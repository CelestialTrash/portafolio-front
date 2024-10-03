// src/components/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.madeWithSection}>
        <span className={styles.line}></span> {/* Línea delgada */}
        <span className={styles.madeWithText}>
          Made with React, Sanity, CSS Modules {/* Lista de tecnologías */}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
