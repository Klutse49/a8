import React from 'react';
import EducationalMilestone from './EducationalMilestone';
import styles from '../styles/Timeline.module.css'; // Create and import your CSS module

const Timeline = ({ education }) => {
  return (
    <div className={styles.timeline}>
      {education.map((milestone, index) => (
        <EducationalMilestone key={index} milestone={milestone} />
      ))}
    </div>
  );
};

export default Timeline;
