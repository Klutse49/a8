import React from 'react';
import './App.css';

import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Skills from './components/Skills';
import RealTimeData from './components/RealTimeData';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
      <PersonalInfo />
      <Education />
      <Skills />
      <RealTimeData />
      <Contact />
    </div>
  );
}

export default App;
