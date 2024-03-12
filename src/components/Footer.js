import React from 'react';
import styles from '../styles/Footer.module.css'; 

const Footer = () => (
  <footer className={styles.footer}>
    <div>
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
