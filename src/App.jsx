import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
