import React from 'react';
import styles from '../styles/Education.module.css'; 

const Education = ({ education }) => {
  return (
    <section className={styles.education}>
      <h2>Educational Background</h2>
      <ol>
        {education.map((edu, index) => (
          <li key={index}>
            <strong>Institution:</strong> {edu.institution}<br/>
            <strong>Degree:</strong> {edu.degree}<br/>
            <strong>Field of Study:</strong> {edu.fieldOfStudy}<br/>
            <strong>Years:</strong> {edu.startYear} - {edu.endYear}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Education;
