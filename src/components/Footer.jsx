import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Mail } from 'lucide-react';

const socials = [
  { icon: <FaLinkedin size={17} />, href: 'https://linkedin.com/in/rehanshaikh1410', label: 'LinkedIn', color: '#0A66C2' },
  { icon: <FaGithub size={17} />,   href: 'https://github.com',                       label: 'GitHub',   color: '#FFFFFF' },
  { icon: <Mail size={17} />,        href: 'mailto:rehanjw999@gmail.com',              label: 'Email',    color: '#7C3AED' },
];

const navItems = [
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#figma' },
  { label: 'Journey',      href: '#experience' },
  { label: 'Certificates', href: '#certifications' },
  { label: 'Resume',       href: '#resume' },
  { label: 'Contact',      href: '#contact' },
];

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const h = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const goto = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      padding: '60px 0 36px',
    }}>
      <div className="container">
        {/* Top row */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: '40px',
          marginBottom: '48px',
        }} className="footer-top">

          {/* Brand */}
          <div>
            <div style={{ fontWeight: '800', fontSize: '20px', color: 'var(--text)', letterSpacing: '-0.5px', marginBottom: '8px' }}>
              Rehan<span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.65', maxWidth: '280px', marginBottom: '20px' }}>
              Digital Marketing Intern &amp; BCA graduate. Building digital experiences that drive growth.
            </p>
            {/* Socials */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    width: '36px', height: '36px', borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'var(--skill-pill-bg)', border: '1px solid var(--border)',
                    color: 'var(--text-muted)', transition: 'color 0.2s ease, border-color 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = s.color; e.currentTarget.style.borderColor = `${s.color}40`; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px' }}>
              Navigate
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {navItems.map(item => (
                <button
                  key={item.label}
                  onClick={() => goto(item.href)}
                  style={{
                    padding: '6px 12px', borderRadius: '8px',
                    fontFamily: 'Inter, sans-serif', fontWeight: '500', fontSize: '14px',
                    color: 'var(--text-muted)', background: 'none', border: 'none',
                    cursor: 'pointer', transition: 'color 0.2s ease, background 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'var(--skill-pill-bg)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'none'; }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div style={{ height: '1px', background: 'var(--border)', marginBottom: '24px' }} />

        {/* Bottom row */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px',
        }}>
          <p style={{ fontSize: '13px', color: 'var(--text-subtle)', display: 'flex', alignItems: 'center', gap: '5px' }}>
            © {new Date().getFullYear()} Rehan Shaikh · Crafted with <Heart size={12} style={{ color: '#EF4444', fill: '#EF4444' }} />
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {['React', 'Vite', 'Framer Motion', 'Vercel'].map((t, i) => (
              <React.Fragment key={t}>
                {i > 0 && <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'var(--border)' }} />}
                <span style={{ fontSize: '12px', color: 'var(--text-subtle)', fontWeight: '500' }}>{t}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            whileHover={{ y: -3 }}
            style={{
              position: 'fixed', bottom: '28px', right: '28px', zIndex: 50,
              width: '42px', height: '42px', borderRadius: '12px',
              background: 'var(--card)', border: '1px solid var(--border)',
              color: 'var(--text-muted)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              transition: 'color 0.2s ease, border-color 0.2s ease',
            }}
            title="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      <style>{`
        @media(min-width:640px){ .footer-top{ flex-direction: row !important; justify-content: space-between; } }
      `}</style>
    </footer>
  );
};

export default Footer;
