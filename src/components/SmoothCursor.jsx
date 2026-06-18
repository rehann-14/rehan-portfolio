import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeContext';

const SmoothCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  // Main cursor spring — snappy
  const springX = useSpring(cursorX, { damping: 22, stiffness: 500, mass: 0.5 });
  const springY = useSpring(cursorY, { damping: 22, stiffness: 500, mass: 0.5 });

  // Trailing dot — slower
  const trailX = useSpring(cursorX, { damping: 36, stiffness: 200, mass: 0.8 });
  const trailY = useSpring(cursorY, { damping: 36, stiffness: 200, mass: 0.8 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const hide  = () => setVisible(false);
    const show  = () => setVisible(true);
    const down  = () => setClicked(true);
    const up    = () => setClicked(false);
    const over  = (e) => {
      const t = e.target.closest('a, button, [role="button"], input, textarea, select, label, [tabindex]');
      setHovered(!!t);
    };

    window.addEventListener('mousemove', move,    { passive: true });
    window.addEventListener('mouseleave', hide);
    window.addEventListener('mouseenter', show);
    window.addEventListener('mousedown',  down);
    window.addEventListener('mouseup',    up);
    document.addEventListener('mouseover', over);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseleave', hide);
      window.removeEventListener('mouseenter', show);
      window.removeEventListener('mousedown',  down);
      window.removeEventListener('mouseup',    up);
      document.removeEventListener('mouseover', over);
    };
  }, [cursorX, cursorY, visible]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) return null;

  // ── Theme-aware colors ──
  const ringColor      = isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.45)';
  const ringHoverColor = 'rgba(124, 58, 237, 0.85)';
  const dotColor       = isDark ? '#FFFFFF' : '#0F172A';
  const ringHoverBg    = 'rgba(124, 58, 237, 0.08)';

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          *, *::before, *::after { cursor: none !important; }
        }
      `}</style>

      {/* ── Main cursor ring ── */}
      <motion.div
        style={{
          x: springX, y: springY,
          position: 'fixed', top: 0, left: 0,
          translateX: '-50%', translateY: '-50%',
          pointerEvents: 'none', zIndex: 99999,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
      >
        <motion.div
          animate={{
            scale:           clicked ? 0.7  : hovered ? 1.6  : 1,
            borderColor:     hovered ? ringHoverColor : ringColor,
            backgroundColor: hovered ? ringHoverBg   : 'transparent',
          }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          style={{
            width: '32px', height: '32px', borderRadius: '50%',
            border: `1.5px solid ${ringColor}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {/* Inner dot */}
          <motion.div
            animate={{
              scale:           clicked ? 1.6  : hovered ? 0   : 1,
              backgroundColor: hovered ? '#7C3AED' : dotColor,
            }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            style={{
              width: '5px', height: '5px', borderRadius: '50%',
              background: dotColor,
            }}
          />
        </motion.div>
      </motion.div>

      {/* ── Trailing glow ── */}
      <motion.div
        style={{
          x: trailX, y: trailY,
          position: 'fixed', top: 0, left: 0,
          translateX: '-50%', translateY: '-50%',
          pointerEvents: 'none', zIndex: 99998,
          opacity: visible ? (isDark ? 0.35 : 0.25) : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <motion.div
          animate={{ scale: hovered ? 2 : 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: `radial-gradient(circle, ${isDark ? '#7C3AED' : '#7C3AED'} 0%, transparent 70%)`,
            filter: 'blur(2px)',
          }}
        />
      </motion.div>
    </>
  );
};

export default SmoothCursor;
