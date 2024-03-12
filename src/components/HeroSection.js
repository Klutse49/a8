import React from 'react';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => (
  <section id="hero" className={styles.hero}>
    <div className={styles.heroContent}>
      <h1>Welcome to My Profile!</h1>
      <p>Passionate Developer | Lifelong Learner | Soccer Enthusiast</p>
    </div>
  </section>
);

export default HeroSection;
