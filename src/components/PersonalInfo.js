import React from 'react';
import styles from '..styles/PersonalInfo.module.css'; 

const PersonalInfo = ({ personalInfo }) => {
  return (
    <section className={styles.personalInfo}>
      <h2>Personal Information</h2>
      <img src={personalInfo.profilePicture} alt="Profile Picture" className={styles.profilePicture} />
      <p>Date of Birth: {personalInfo.dob}</p>
      <p>Hometown: {personalInfo.hometown}</p>
      <h3>Hobbies and Interests</h3>
      <ul>
        {personalInfo.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </section>
  );
};

export default PersonalInfo;

