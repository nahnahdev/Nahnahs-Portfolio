import React from 'react';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Projects from './Projects';
import Experience from './Experience';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import './input.css';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Homepage />
      <Projects />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
