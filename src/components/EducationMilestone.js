import React from 'react';
import styles from '../styles/EducationalMilestone.module.css'; 

const EducationalMilestone = ({ milestone }) => {
  return (
    <div className={styles.milestone}>
      <h3>{milestone.institution}</h3>
      <p>{milestone.degree}, {milestone.fieldOfStudy}</p>
      <p>{milestone.startYear} - {milestone.endYear}</p>
      
    </div>
  );
};

export default EducationalMilestone;
