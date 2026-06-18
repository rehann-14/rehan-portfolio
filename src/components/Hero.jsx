import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import AIGradientBorder from './AIGradientBorder';
import InteractiveHoverButton from './InteractiveHoverButton';
import { useTheme } from './ThemeContext';

/* ── Animated number counter ── */
const Counter = ({ to, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const isNum = !isNaN(Number(to));

  useEffect(() => {
    if (!started || !isNum) return;
    const end = Number(to);
    const duration = 1200;
    const startTime = performance.now();
    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, to, isNum]);

  return (
    <motion.span
      onViewportEnter={() => setStarted(true)}
      viewport={{ once: true }}
      style={{ fontVariantNumeric: 'tabular-nums' }}
    >
      {isNum ? count : to}{suffix}
    </motion.span>
  );
};

/* ── Word-by-word reveal for headings ── */
const RevealWords = ({ text, className, style, delay = 0 }) => {
  const words = text.split(' ');
  return (
    <span className={className} style={{ ...style, display: 'inline' }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
          <motion.span
            display="inline-block"
            initial={{ y: '105%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 0.55,
              delay: delay + i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ display: 'inline-block', marginRight: '0.28em' }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

/* ── Stagger container variants ── */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stats = [
  { value: '1',   suffix: '',   label: 'Internship'   },
  { value: '10',  suffix: '+',  label: 'Certificates' },
  { value: 'BCA', suffix: '',   label: 'Degree 2026'  },
];

const Hero = () => {
  const { theme } = useTheme();
  const goto = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        background: 'var(--bg)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '120px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        style={{
          position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)',
          width: '800px', height: '500px',
          background: 'radial-gradient(ellipse, var(--accent-glow) 0%, transparent 68%)',
          pointerEvents: 'none', zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ display: 'grid', gap: '64px', alignItems: 'center' }} className="hero-grid">

          {/* ── Left ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
          >

            {/* Available badge */}
            <motion.div variants={fadeUp}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '6px 14px', borderRadius: '100px', marginBottom: '28px',
                background: 'rgba(16,185,129,0.08)',
                border: '1px solid rgba(16,185,129,0.2)',
              }}
            >
              <span style={{
                width: '7px', height: '7px', borderRadius: '50%',
                background: 'var(--success)', flexShrink: 0,
                boxShadow: '0 0 8px rgba(16,185,129,0.7)',
                animation: 'hpulse 2s ease-in-out infinite',
              }} />
              <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--success)', letterSpacing: '0.5px' }}>
                Available for opportunities
              </span>
            </motion.div>

            {/* H1 — word reveal */}
            <motion.h1 variants={fadeUp} className="text-h1" style={{ marginBottom: '24px', lineHeight: '1.05' }}>
              <RevealWords text="Building digital" delay={0.15} /><br />
              <RevealWords text="experiences that" delay={0.3} /><br />
              <span className="text-gradient" style={{ display: 'block' }}>
                <RevealWords text="drive growth." delay={0.45} />
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p variants={fadeUp}
              style={{ fontSize: '17px', lineHeight: '1.75', color: 'var(--text-muted)', maxWidth: '440px', marginBottom: '20px' }}
            >
              I'm <strong style={{ color: 'var(--text)', fontWeight: '600' }}>Rehan Naik Shaikh</strong> — a Digital Marketing Intern & BCA graduate combining analytical thinking with creative execution.
            </motion.p>

            {/* Location */}
            <motion.div variants={fadeUp}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '36px', color: 'var(--text-subtle)', fontSize: '14px', fontWeight: '500' }}
            >
              <MapPin size={14} />
              <span>Vasco, Goa, India</span>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp}
              style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}
            >
              <InteractiveHoverButton variant={theme === 'dark' ? 'light' : 'dark'} onClick={() => goto('figma')}>
                View Projects
              </InteractiveHoverButton>
              <InteractiveHoverButton variant="accent" onClick={() => goto('resume')} showArrow={false}>
                Resume
              </InteractiveHoverButton>
              <motion.a
                href="https://www.linkedin.com/in/rehanshaikh1410"
                target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: '46px', height: '46px', borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--skill-pill-bg)', border: '1px solid var(--border)',
                  color: 'var(--text-muted)', transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(10,102,194,0.12)'; e.currentTarget.style.color = '#0A66C2'; e.currentTarget.style.borderColor = 'rgba(10,102,194,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--skill-pill-bg)'; e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                <FaLinkedin size={18} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── Right: Profile Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <AIGradientBorder duration={5} className="rounded-3xl" style={{ maxWidth: '380px', width: '100%' }}>
              <div style={{
                background: 'var(--card)', borderRadius: 'inherit',
                padding: '32px', display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: '24px',
              }}>
                {/* Photo */}
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    width: '140px', height: '140px', borderRadius: '50%',
                    overflow: 'hidden', border: '2px solid rgba(124,58,237,0.3)',
                  }}
                >
                  <img src="/profile.png" alt="Rehan Naik Shaikh"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </motion.div>

                {/* Name */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: '700', fontSize: '19px', color: 'var(--text)', letterSpacing: '-0.3px', marginBottom: '4px' }}>
                    Rehan Naik Shaikh
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '500' }}>
                    Digital Marketing Intern
                  </div>
                </div>

                <div style={{ width: '100%', height: '1px', background: 'var(--border)' }} />

                {/* Animated stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', width: '100%', textAlign: 'center' }}>
                  {stats.map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div style={{ fontWeight: '800', fontSize: '20px', color: 'var(--text)', letterSpacing: '-0.5px', marginBottom: '3px' }}>
                        <Counter to={s.value} suffix={s.suffix} />
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--text-subtle)', fontWeight: '500' }}>{s.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AIGradientBorder>
          </motion.div>

        </div>
      </div>

      <style>{`
        @keyframes hpulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @media(min-width:1024px){ .hero-grid{ grid-template-columns: 1.1fr 1fr !important; } }
      `}</style>
    </section>
  );
};

export default Hero;
