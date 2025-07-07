import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Education from './components/Education';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import ThemeProvider from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-black text-white font-mono transition-colors duration-300">
          <Navbar />
          <main className="relative">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <BackToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;