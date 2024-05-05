/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import './App.css';
import React from 'react';
// import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Proficiency from './components/Proficiency/Proficiency';
import Project from './components/Projects/Project';
import Hire from './components/Hire/Hire';
import Footer from './components/Footer/Footer';
import CopyRight from './components/CopyRight/CopyRight';
import Certifications from './components/Certifications/Certifications';
import NavMain from './components/NavMain/NavMain';
import './App.css';
// import 'animate.css/animate.min.css';
// import '../../sheharzad-portfolio-6/src/components/About/About.scss'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile />
      <About />
      <Skills />
      <Proficiency/>
      {/* <Project/> */}
      <Certifications/>
      <Hire />
      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
