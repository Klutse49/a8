import React from 'react';
import styles from '../styles/Contact.module.css'; 

const Contact = () => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    alert('Form submitted!'); 
  };

  return (
    <section className={styles.contact}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </section>
  );
};

export default Contact;
