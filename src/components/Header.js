import React from 'react';
import styles from '../styles/Header.module.css'; 

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Cyril Klutse</h1>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="#hero" className={styles.navLink}>Home</a></li>
          <li className={styles.navItem}><a href="#personal-info" className={styles.navLink}>Personal Info</a></li>
          <li className={styles.navItem}><a href="#education" className={styles.navLink}>Education</a></li>
          <li className={styles.navItem}><a href="#skills" className={styles.navLink}>Skills</a></li>
          <li className={styles.navItem}><a href="#weatherandquote" className={styles.navLink}>Weather Data</a></li>
          <li className={styles.navItem}><a href="#contact" className={styles.navLink}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

