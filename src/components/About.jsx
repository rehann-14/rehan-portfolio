import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, MapPin, Globe } from 'lucide-react';
import AIGradientBorder from './AIGradientBorder';

/* ── Animation variants ── */
const sectionEntry = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

const slideLeft = {
  initial: { opacity: 0, x: -32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const slideRight = {
  initial: { opacity: 0, x: 32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
};

const cardStagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  viewport: { once: true, margin: '-60px' },
};

const cardItem = {
  initial: { opacity: 0, y: 20, scale: 0.97 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const infoCards = [
  { icon: <GraduationCap size={18} />, label: 'Education',  value: 'BCA — MES College',     sub: 'Graduating 2026',    color: '#7C3AED' },
  { icon: <Briefcase size={18} />,     label: 'Experience', value: 'DM Intern @ Sanctify',   sub: 'May 2026 – Present', color: '#10B981' },
  { icon: <MapPin size={18} />,        label: 'Location',   value: 'Vasco, Goa',             sub: 'India',              color: '#3B82F6' },
  { icon: <Globe size={18} />,         label: 'Languages',  value: 'English · Hindi',        sub: 'Konkani',            color: '#F59E0B' },
];

const About = () => (
  <section id="about" className="section-padding"
    style={{ background: 'var(--section-alt)', borderTop: '1px solid var(--border)' }}>
    <div className="container">

      {/* Header */}
      <motion.div {...sectionEntry} style={{ marginBottom: '64px' }}>
        <div className="section-overline">About</div>
        <h2 className="text-h2">
          The person behind<br />
          <span className="text-gradient">the work.</span>
        </h2>
      </motion.div>

      {/* 2-col: text + photo */}
      <div style={{ display: 'grid', gap: '80px', alignItems: 'center', marginBottom: '80px' }} className="about-grid">

        {/* Left slides in from left */}
        <motion.div {...slideLeft}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
            <p style={{ fontSize: '17px', lineHeight: '1.8', color: 'var(--text-muted)' }}>
              I'm a detail-oriented BCA graduate with foundational experience in digital marketing through an internship at{' '}
              <strong style={{ color: 'var(--text)', fontWeight: '600' }}>Sanctify Digital Marketing Agency</strong>.
              Skilled in marketing strategy, Canva, AI tools, MS Office, and cross-functional communication.
            </p>
            <p style={{ fontSize: '17px', lineHeight: '1.8', color: 'var(--text-muted)' }}>
              I'm passionate about helping businesses grow through modern digital strategies while leveraging my technical and analytical skills to ensure precision and scale.
            </p>
            <p style={{ fontSize: '17px', lineHeight: '1.8', color: 'var(--text-muted)' }}>
              Actively seeking opportunities in{' '}
              <strong style={{ color: 'var(--text)', fontWeight: '600' }}>Digital Marketing</strong>, where I can build, optimize, and iterate on high-quality digital products.
            </p>
          </div>

          {/* Objective */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              padding: '24px 28px',
              borderLeft: '2px solid var(--accent)',
              background: 'var(--objective-bg)',
              borderRadius: '0 12px 12px 0',
            }}
          >
            <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '2px', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '10px' }}>
              Career Objective
            </div>
            <p style={{ fontSize: '15px', lineHeight: '1.75', color: 'var(--text-muted)', fontStyle: 'italic' }}>
              "To secure an entry-level position in Digital Marketing or related technology-driven roles where I can apply my technical knowledge, creativity, and communication skills to drive organizational growth."
            </p>
          </motion.div>
        </motion.div>

        {/* Right: photo slides in from right */}
        <motion.div {...slideRight} style={{ display: 'flex', justifyContent: 'center' }}>
          <motion.div
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            style={{
              width: '280px', height: '340px', borderRadius: '20px',
              overflow: 'hidden', border: '1px solid var(--border)',
              position: 'relative',
            }}
          >
            <img src="/profile.png" alt="Rehan Naik Shaikh"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.3))',
            }} />
          </motion.div>
        </motion.div>
      </div>

      {/* 4 info cards — staggered */}
      <motion.div
        variants={cardStagger}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: '-60px' }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}
      >
        {infoCards.map((card, i) => {
          const isHighlight = i === 0;
          const cardInner = (
            <motion.div
              variants={cardItem}
              style={{
                background: 'var(--card)', borderRadius: isHighlight ? 'inherit' : '14px',
                padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px',
                border: isHighlight ? 'none' : '1px solid var(--border)',
                height: '100%',
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div style={{
                width: '36px', height: '36px', borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: `${card.color}15`, color: card.color, flexShrink: 0,
              }}>
                {card.icon}
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '6px' }}>
                  {card.label}
                </div>
                <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text)', marginBottom: '2px' }}>{card.value}</div>
                <div style={{ fontSize: '13px', color: 'var(--text-subtle)' }}>{card.sub}</div>
              </div>
            </motion.div>
          );

          return isHighlight ? (
            <div key={card.label}>
              <AIGradientBorder duration={5} className="rounded-[14px] h-full">
                {cardInner}
              </AIGradientBorder>
            </div>
          ) : (
            <div key={card.label}>{cardInner}</div>
          );
        })}
      </motion.div>
    </div>

    <style>{`
      @media(min-width:768px){ .about-grid{ grid-template-columns: 1.3fr 1fr !important; } }
    `}</style>
  </section>
);

export default About;
