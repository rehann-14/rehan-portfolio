import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * InteractiveHoverButton
 * A button with a sweeping fill animation on hover.
 *
 * Props:
 *   children    — button label
 *   onClick     — click handler
 *   href        — if set, renders as <a> tag
 *   target      — anchor target
 *   rel         — anchor rel
 *   variant     — 'dark' (default) | 'light' | 'accent'
 *   showArrow   — show arrow icon on hover (default: true)
 *   className   — extra class
 *   style       — extra style
 */
const InteractiveHoverButton = ({
  children,
  onClick,
  href,
  target,
  rel,
  variant = 'dark',
  showArrow = true,
  className = '',
  style = {},
}) => {
  const variants = {
    dark: {
      bg: 'transparent',
      border: '1.5px solid rgba(255,255,255,0.15)',
      color: '#FFFFFF',
      fillBg: '#FFFFFF',
      fillColor: '#050816',
    },
    light: {
      bg: '#FFFFFF',
      border: '1.5px solid #FFFFFF',
      color: '#050816',
      fillBg: '#050816',
      fillColor: '#FFFFFF',
    },
    accent: {
      bg: 'transparent',
      border: '1.5px solid rgba(124,58,237,0.5)',
      color: '#C4B5FD',
      fillBg: '#7C3AED',
      fillColor: '#FFFFFF',
    },
  };

  const v = variants[variant] || variants.dark;

  const baseStyle = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '13px 28px',
    borderRadius: '100px',
    fontFamily: 'Inter, system-ui, sans-serif',
    fontWeight: '600',
    fontSize: '15px',
    letterSpacing: '-0.1px',
    background: v.bg,
    color: v.color,
    border: v.border,
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'color 0.35s ease, border-color 0.35s ease',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    ...style,
  };

  const content = (
    <>
      {/* Sweeping fill layer */}
      <span
        className="ihb-fill"
        style={{
          position: 'absolute',
          inset: 0,
          background: v.fillBg,
          borderRadius: 'inherit',
          transform: 'translateX(-105%)',
          transition: 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
          zIndex: 0,
        }}
      />

      {/* Label */}
      <span
        className="ihb-label"
        style={{
          position: 'relative',
          zIndex: 1,
          transition: 'color 0.35s ease',
        }}
      >
        {children}
      </span>

      {/* Arrow */}
      {showArrow && (
        <span
          className="ihb-arrow"
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'inline-flex',
            alignItems: 'center',
            opacity: 0,
            transform: 'translateX(-8px)',
            transition: 'opacity 0.25s ease, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <ArrowRight size={15} />
        </span>
      )}

      <style>{`
        .ihb-btn:hover .ihb-fill {
          transform: translateX(0) !important;
        }
        .ihb-btn:hover .ihb-label {
          color: ${v.fillColor} !important;
        }
        .ihb-btn:hover .ihb-arrow {
          opacity: 1 !important;
          transform: translateX(0) !important;
          color: ${v.fillColor} !important;
        }
        .ihb-btn:active {
          transform: scale(0.98) !important;
        }
      `}</style>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`ihb-btn ${className}`}
        style={baseStyle}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`ihb-btn ${className}`}
      style={baseStyle}
    >
      {content}
    </button>
  );
};

export default InteractiveHoverButton;
