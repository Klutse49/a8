import React from 'react';
import './App.css';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Skills from './components/Skills';
import WeatherAndQuote from './components/WeatherAndQuote';
import Contact from './components/Contact';
import { personalInfo, education, skills } from './data/data';

function App() {
  return (
    <div className="App">
      <Header /> 
      
      <main>
        <PersonalInfo personalInfo={personalInfo} />
        <Education education={education} />
        <Skills skills={skills} />
        <WeatherAndQuote />
        <Contact />
      </main>
      
      <Footer /> 
    </div>
  );
}

export default App;
