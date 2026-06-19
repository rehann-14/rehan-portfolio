import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import AnimatedThemeToggler from './AnimatedThemeToggler';
import { useTheme } from './ThemeContext';

const navLinks = [
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#figma' },
  { label: 'Design',       href: '#design' },
  { label: 'Journey',      href: '#experience' },
  { label: 'Certificates', href: '#certifications' },
  { label: 'Resume',       href: '#resume' },
  { label: 'Contact',      href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled]           = useState(false);
  const [menuOpen, setMenuOpen]           = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = ['home', 'about', 'skills', 'figma', 'design', 'experience', 'certifications', 'resume', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 160) { setActiveSection(sections[i]); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goto = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          paddingTop: scrolled ? '10px' : '18px',
          paddingBottom: scrolled ? '10px' : '18px',
          transition: 'padding 0.3s ease',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 20px',
              borderRadius: '16px',
              background: scrolled ? 'var(--nav-bg)' : 'transparent',
              backdropFilter: scrolled ? 'blur(24px)' : 'none',
              WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
              border: `1px solid ${scrolled ? 'var(--nav-border)' : 'transparent'}`,
              transition: 'all 0.3s ease',
            }}
          >
            {/* Logo */}
            <button
              onClick={() => goto('#home')}
              style={{
                fontFamily: 'Inter, sans-serif', fontWeight: '800', fontSize: '18px',
                color: 'var(--text)', letterSpacing: '-0.5px',
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              }}
            >
              Rehan<span style={{ color: 'var(--accent)' }}>.</span>
            </button>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center" style={{ gap: '28px' }}>
              {navLinks.map(link => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <button
                    key={link.label}
                    onClick={() => goto(link.href)}
                    style={{
                      fontFamily: 'Inter, sans-serif', fontWeight: '500', fontSize: '14px',
                      color: isActive ? 'var(--text)' : 'var(--text-muted)',
                      background: 'none', border: 'none', cursor: 'pointer',
                      padding: '4px 0', position: 'relative',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        style={{
                          position: 'absolute', bottom: '-2px', left: 0, right: 0,
                          height: '1.5px', background: 'var(--accent)', borderRadius: '100px',
                        }}
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right: Toggler + CTA + Hamburger */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <AnimatedThemeToggler />

              <button
                onClick={() => goto('#contact')}
                className="btn-accent hidden sm:flex"
                style={{ padding: '8px 18px', fontSize: '13px' }}
              >
                Hire Me
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden"
                style={{
                  width: '36px', height: '36px', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  borderRadius: '10px',
                  background: 'var(--skill-pill-bg)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)', cursor: 'pointer',
                }}
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed', zIndex: 40,
              top: '80px', left: '16px', right: '16px',
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '16px', padding: '14px',
            }}
            className="lg:hidden"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '10px' }}>
              {navLinks.map(link => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <button
                    key={link.label}
                    onClick={() => goto(link.href)}
                    style={{
                      textAlign: 'left', padding: '10px 14px', borderRadius: '10px',
                      fontFamily: 'Inter, sans-serif', fontWeight: '500', fontSize: '15px',
                      color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                      background: isActive ? 'var(--accent-glow)' : 'transparent',
                      border: 'none', cursor: 'pointer', transition: 'all 0.2s ease',
                    }}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => goto('#contact')}
              className="btn-accent w-full"
              style={{ justifyContent: 'center', borderRadius: '12px', padding: '12px' }}
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
