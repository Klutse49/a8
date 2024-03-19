import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Skills from './components/Skills';
import WeatherAndQuote from './components/WeatherAndQuote';
import WeatherWidget from './components/WeatherWidget';
import Contact from './components/Contact';
import { personalInfo, education, skills } from './data/data';

function App() {
  
  return (
    <div className="App">
      <Header />

      <div id="hero">
        <HeroSection />
      </div>
      
      <div id="personal-info">
        <PersonalInfo personalInfo={personalInfo} />
      </div>
      
      <div id="education">
        <Education education={education} />
      </div>
      
      <div id="skills">
        <Skills skills={skills} />
      </div>
   
      <div id="weatherandquote">
        <WeatherAndQuote />
        <WeatherWidget city="Maple Shade" /> 
      </div>
      <div id="contact">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
