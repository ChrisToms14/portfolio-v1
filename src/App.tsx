import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeProvider from './components/ThemeProvider';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence>
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <>
            <Navbar />
            <main className="overflow-x-hidden">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Certifications />
              <Experience />
              <Achievements />
              <Contact />
            </main>
            <Footer />
            <ScrollToTop />
          </>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
