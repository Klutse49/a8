import React from 'react';
import styles from '../styles/Skills.module.css'; 

const Skills = ({ skills }) => {
  return (
    <section className={styles.skills}>
      <h2>Skills and Experience</h2>
      <table className={styles.skillsTable}> 
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
              <td>{skill.details.join(', ')}</td> 
              <td>{skill.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Skills;
