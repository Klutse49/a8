import React from 'react';
import styles from './Education.module.css'; 

const Education = ({ education }) => {
  return (
    <section className={styles.education}>
      <h2>Educational Background</h2>
      <ol>
        {education.map((edu, index) => (
          <li key={index}>{edu}</li>
        ))}
      </ol>
    </section>
  );
};

export default Education;
