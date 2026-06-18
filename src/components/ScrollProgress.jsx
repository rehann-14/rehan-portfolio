import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * ScrollProgress — thin accent-colored line at top of viewport
 * that fills as the user scrolls down the page.
 * Inspired by Linear, Vercel, and Stripe docs.
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, #7C3AED, #3B82F6)',
        transformOrigin: '0%',
        scaleX,
        zIndex: 99999,
      }}
    />
  );
};

export default ScrollProgress;
