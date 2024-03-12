import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Skills from './components/Skills';
import RealTimeData from './components/RealTimeData';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import WeatherAndQuote from './components/WeatherAndQuote';
import { personalInfo, education, skills } from './data/data';


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <h1>Cyril Klutse</h1>
        <nav>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#personal-info">Personal Info</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#real-time-data">Real Time Data</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <PersonalInfo personalInfo={personalInfo} />
        <Education education={education} />
        <Skills skills={skills} />
        <RealTimeData />
        <Contact />
        <ContactForm />
        <WeatherAndQuote />
      </main>
      
      <footer>
        <div>
          <h2>Contact Information</h2>
          <p>Email: cyrilklutse@gmail.com</p>
          <p>Phone: +1(908)-963-3628</p>
          <div className="social-links">
            <a href="https://twitter.com/cyrilklutse">Twitter</a>
            <a href="https://www.linkedin.com/in/cyril-klutse-991b76113/">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
