import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home';  // Create this component if you don't have it yet
import './Component/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import Footer from './Component/Footer';




function App() {
  return (
    <Router>
      <div className="containerfluid">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {/* <Hero />
      <Skills />
      <Projects />
      <Experience />
       <Education /> 
      <Testimonials />
      <Blog />
      <ContactHome /> */}
      <Footer />
    </Router>
  );
}

export default App;
