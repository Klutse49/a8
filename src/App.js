import React from 'react';
import './App.css';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Skills from './components/Skills';
import WeatherAndQuote from './components/WeatherAndQuote';
import Contact from './components/Contact';
import { personalInfo, education, skills } from './data/data';

function App() {

  const { theme } = useTheme();

  return (
    <ThemeProvider>
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
      </div>
      <div id="contact">
        <Contact />
      </div>
      
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
