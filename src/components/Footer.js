import React from 'react';
import styles from '../styles/Footer.module.css'; 

const Footer = () => (
  <footer className={styles.footer}>
    <ul className={styles.footerNav}>
      <li className={styles.navItem}><a href="#hero" className={styles.navLink}>Home</a></li>
      <li className={styles.navItem}><a href="#personal-info" className={styles.navLink}>Personal Info</a></li>
      <li className={styles.navItem}><a href="#education" className={styles.navLink}>Education</a></li>
      <li className={styles.navItem}><a href="#skills" className={styles.navLink}>Skills</a></li>
      <li className={styles.navItem}><a href="#weatherandquote" className={styles.navLink}>Weather Data</a></li>
      <li className={styles.navItem}><a href="#contact" className={styles.navLink}>Contact</a></li>
    </ul>
    <div className={styles.contactInfo}>
      <h2>Contact Information</h2>
      <p>Email: cyrilklutse@gmail.com</p>
      <p>Phone: +1(908)-963-3628</p>
      <div className={styles.socialLinks}>
        <a href="https://twitter.com/cyrilklutse">Twitter</a>
        <a href="https://www.linkedin.com/in/cyril-klutse-991b76113/">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default Footer;
