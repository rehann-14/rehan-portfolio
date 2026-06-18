import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: 'May 2026',
    type: 'Internship',
    title: 'Digital Marketing Intern',
    company: 'Sanctify Digital Marketing Agency',
    description: 'Executing end-to-end digital marketing campaigns, content scheduling, and creative work for client accounts.',
    color: '#7C3AED',
  },
  {
    year: '2024',
    type: 'Internship',
    title: 'AI Scholar Intern',
    company: 'BharatCares® — Lenovo Leap NextGen',
    description: 'Completed 60-hour AI internship exploring machine learning concepts, AI productivity tools, and business applications.',
    color: '#10B981',
  },
  {
    year: '2024 – 2025',
    type: 'Project',
    title: 'School Management System',
    company: 'MES Vasant Joshi College',
    description: 'Designed complete UI/UX for a multi-role School Management System — Teacher, Student, and Admin portals — using Figma.',
    color: '#3B82F6',
  },
  {
    year: '2023 – 2026',
    type: 'Education',
    title: 'Bachelor of Computer Applications',
    company: 'MES Vasant Joshi College, Vasco, Goa',
    description: 'Pursuing BCA with focus on technology, software, and digital skills. Completed 10+ certifications alongside academics.',
    color: '#F59E0B',
  },
];

const Experience = () => (
  <section id="experience" className="section-padding"
    style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginBottom: '64px' }}
      >
        <div className="section-overline">Journey</div>
        <h2 className="text-h2">
          Experience &amp;<br />
          <span className="text-gradient">education.</span>
        </h2>
      </motion.div>

      <div style={{ maxWidth: '680px', position: 'relative' }}>
        {/* Animated vertical line — grows in length on scroll */}
        <motion.div
          initial={{ scaleY: 0, originY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'absolute', left: '0', top: '12px', bottom: '0',
            width: '1px', background: 'var(--timeline-line)',
            transformOrigin: 'top',
          }}
        />

        {milestones.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative', paddingLeft: '32px', marginBottom: i < milestones.length - 1 ? '48px' : 0 }}
          >
            {/* Animated dot pops in */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 + 0.2, type: 'spring', stiffness: 400, damping: 18 }}
              style={{
                position: 'absolute', left: '-4px', top: '6px',
                width: '9px', height: '9px', borderRadius: '50%',
                background: m.color, boxShadow: `0 0 10px ${m.color}60`,
              }}
            />

            {/* Year + type badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ fontSize: '12px', fontWeight: '600', color: m.color, letterSpacing: '0.3px' }}>
                {m.year}
              </span>
              <span style={{
                fontSize: '10px', fontWeight: '600', color: 'var(--text-subtle)',
                textTransform: 'uppercase', letterSpacing: '1.5px',
                padding: '2px 8px', borderRadius: '100px',
                background: 'var(--skill-pill-bg)', border: '1px solid var(--border)',
              }}>{m.type}</span>
            </div>

            <h3 style={{ fontWeight: '700', fontSize: '18px', color: 'var(--text)', letterSpacing: '-0.3px', marginBottom: '4px' }}>
              {m.title}
            </h3>
            <div style={{ fontSize: '14px', fontWeight: '500', color: 'var(--accent)', marginBottom: '10px' }}>
              {m.company}
            </div>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-muted)' }}>
              {m.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
