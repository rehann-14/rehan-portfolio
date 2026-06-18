import { animate, motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

/**
 * AIGradientBorder — spinning conic-gradient border with inner glow spill.
 * Requires .ai-glow-spill-mask CSS class in index.css.
 *
 * Props:
 *   children   — content inside the border
 *   className  — extra classes for the outer wrapper
 *   duration   — rotation speed in seconds (default 3)
 *   colors     — override gradient colors (optional)
 */
const AIGradientBorder = ({
  children,
  className,
  duration = 4,
}) => {
  const turn = useMotionValue(0);

  useEffect(() => {
    animate(turn, 1, {
      ease: 'linear',
      duration,
      repeat: Infinity,
    });
  }, [duration, turn]);

  // Violet → Blue palette tuned to match the portfolio accent colors
  const gradient = useMotionTemplate`conic-gradient(
    from ${turn}turn,
    transparent 0%,
    #7C3AED00 4%,
    #7C3AED 9%,
    #6366F1 16%,
    #3B82F6 24%,
    #06B6D4 32%,
    #10B981 38%,
    #10B98100 44%,
    transparent 48%
  )`;

  return (
    <div className={twMerge('relative p-px', className)}>
      {/* Spinning border layer */}
      <motion.div
        style={{ backgroundImage: gradient }}
        className="absolute inset-0 rounded-[inherit]"
      />

      {/* Content + inner glow */}
      <div className="relative rounded-[inherit] overflow-hidden">
        <div className="relative">{children}</div>

        {/* Inner glow spill — masked so only edges glow */}
        <motion.div
          style={{ backgroundImage: gradient }}
          className="ai-glow-spill-mask opacity-60 blur-2xl pointer-events-none absolute inset-[-40%] z-10 overflow-hidden"
        />
      </div>
    </div>
  );
};

export default AIGradientBorder;
