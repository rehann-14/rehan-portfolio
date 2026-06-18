import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import FigmaProjects from './components/FigmaProjects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SmoothCursor from './components/SmoothCursor';
import ScrollProgress from './components/ScrollProgress';
import Lenis from 'lenis';

/* ── Loading Screen ── */
const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(timer); setTimeout(onComplete, 300); return 100; }
        return prev + (100 - prev) * 0.12 + 0.8;
      });
    }, 25);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: 'var(--bg)' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div style={{
          width: '52px', height: '52px', borderRadius: '14px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 20px',
          background: 'rgba(124,58,237,0.12)',
          border: '1px solid rgba(124,58,237,0.25)',
          fontSize: '22px', fontWeight: '800', color: '#7C3AED',
          fontFamily: 'Inter, sans-serif',
        }}>R</div>

        <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text)', letterSpacing: '-0.3px', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>
          Rehan Naik Shaikh
        </div>
        <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'Inter, sans-serif', fontWeight: '500', marginBottom: '28px' }}>
          Digital Marketing · UI/UX
        </div>

        <div style={{ width: '140px', height: '2px', background: 'var(--border)', borderRadius: '100px', overflow: 'hidden', margin: '0 auto' }}>
          <motion.div style={{
            height: '100%',
            background: 'linear-gradient(90deg, #7C3AED, #3B82F6)',
            borderRadius: '100px',
            width: `${Math.min(100, progress)}%`,
          }} />
        </div>
      </motion.div>
    </motion.div>
  );
};

function AppInner() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smooth: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <ScrollProgress />
      <SmoothCursor />

      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <FigmaProjects />
            <Experience />
            <Certifications />
            <Resume />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}

export default App;
