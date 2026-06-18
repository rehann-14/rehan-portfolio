import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeContext';

/**
 * AnimatedThemeToggler
 * A pill-shaped toggle that morphs between sun ☀️ and moon 🌙.
 * No external dependencies — pure Framer Motion.
 */

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2"  x2="12" y2="5"  />
    <line x1="12" y1="19" x2="12" y2="22" />
    <line x1="4.22"  y1="4.22"  x2="6.34"  y2="6.34"  />
    <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
    <line x1="2"  y1="12" x2="5"  y2="12" />
    <line x1="19" y1="12" x2="22" y2="12" />
    <line x1="4.22"  y1="19.78" x2="6.34"  y2="17.66" />
    <line x1="17.66" y1="6.34"  x2="19.78" y2="4.22"  />
  </svg>
);

const MoonIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const AnimatedThemeToggler = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      whileTap={{ scale: 0.92 }}
      style={{
        position: 'relative',
        width: '52px',
        height: '28px',
        borderRadius: '100px',
        border: isDark
          ? '1px solid rgba(255,255,255,0.12)'
          : '1px solid rgba(0,0,0,0.12)',
        background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        padding: '3px',
        flexShrink: 0,
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
      className={className}
    >
      {/* Sliding knob */}
      <motion.div
        layout
        animate={{ x: isDark ? 0 : 24 }}
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
        style={{
          width: '22px',
          height: '22px',
          borderRadius: '50%',
          background: isDark
            ? 'linear-gradient(135deg, #7C3AED, #3B82F6)'
            : 'linear-gradient(135deg, #F59E0B, #FBBF24)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: isDark
            ? '0 2px 8px rgba(124,58,237,0.5)'
            : '0 2px 8px rgba(245,158,11,0.4)',
          flexShrink: 0,
          color: '#FFFFFF',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={theme}
            initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {isDark ? <MoonIcon /> : <SunIcon />}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
};

export default AnimatedThemeToggler;
