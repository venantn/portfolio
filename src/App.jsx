import React from 'react';
import { Routes, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

import './App.css';

const App = () => {
  return (
    <Router>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Hero /></>}></Route>
          <Route path="/about" element={<><About /></>}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        
      </main>
    </Router>
  );
};

export default App;
