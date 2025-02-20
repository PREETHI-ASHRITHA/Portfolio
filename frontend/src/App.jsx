import React from "react";
import Header from './components/Header.jsx';
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Certificates from "./components/certificates.jsx";
import Contact from "./components/contact.jsx";
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <section id="home" className="section-padding">
          <div className="container">
            <Home />
          </div>
        </section>
        
        <section id="about" className="section-padding">
          <div className="container">
            <About />
          </div>
        </section>
        
        <section id="skills" className="section-padding">
          <div className="container">
            <Skills />
          </div>
        </section>
        
        <section id="projects" className="section-padding">
          <div className="container">
            <Projects />
          </div>
        </section>
        
        <section id="certificates" className="section-padding">
          <div className="container">
            <Certificates />
          </div>
        </section>
        
        <section id="contact" className="section-padding">
          <div className="container">
            <Contact />
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;