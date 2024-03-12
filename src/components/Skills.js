import React from 'react';
import styles from './Skills.module.css'; 

const Skills = ({ skills }) => {
  return (
    <section className={styles.skills}>
      <h2>Skills and Experience</h2>
      <table>
        <thead>
          <tr>
            <th>Skill</th>
            <th>Proficiency Level</th>
            <th>Expertise</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill, index) => (
            <tr key={index}>
              <td>{skill.name}</td>
              <td>{skill.proficiency}</td>
              <td>{skill.expertise}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Skills;
