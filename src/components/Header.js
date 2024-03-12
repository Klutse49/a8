import React from 'react';
import styles from '../styles/Header.module.css'; 

const Header = () => (
  <header className={styles.header}>
    <h1>Cyril Klutse</h1>
    <nav>
      <ul className={styles.navUl}>
        <li className={styles.navItem}><a href="#hero" className={styles.navLink}>Home</a></li>
        <li className={styles.navItem}><a href="#personal-info" className={styles.navLink}>Personal Info</a></li>
        <li className={styles.navItem}><a href="#education" className={styles.navLink}>Education</a></li>
        <li className={styles.navItem}><a href="#skills" className={styles.navLink}>Skills</a></li>
        <li className={styles.navItem}><a href="#real-time-data" className={styles.navLink}>Real Time Data</a></li>
        <li className={styles.navItem}><a href="#contact" className={styles.navLink}>Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
