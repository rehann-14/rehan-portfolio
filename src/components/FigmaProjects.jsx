import React from 'react';
import { motion } from 'framer-motion';
import { figmaProjects } from '../data/projects.js';
import { Layers, ExternalLink } from 'lucide-react';
import InteractiveHoverButton from './InteractiveHoverButton';

const gridStagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  viewport: { once: true, margin: '-60px' },
};

const cardVariant = {
  initial: { opacity: 0, y: 32, scale: 0.96 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const roleEmoji = { 'Teacher': '👩‍🏫', 'Student': '🎓', 'Admin': '⚙️' };
const getRole = (title) => {
  if (title.includes('Teacher')) return 'Teacher';
  if (title.includes('Student')) return 'Student';
  if (title.includes('Admin'))   return 'Admin';
  return null;
};

const realProjects = figmaProjects.filter(p => p.category !== 'Upcoming');

const ProjectCard = ({ project }) => {
  const role = getRole(project.title);

  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      style={{
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: '20px', overflow: 'hidden',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Visual area with subtle parallax-like scale on hover */}
      <motion.div
        style={{
          height: '200px', background: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', overflow: 'hidden',
        }}
        whileHover={{ scale: 1.0 }}
      >
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse at center, ${project.color}18, transparent 70%)`,
        }} />
        <motion.div
          whileHover={{ scale: 1.12, rotate: 3, transition: { duration: 0.35 } }}
          style={{
            width: '72px', height: '72px', borderRadius: '20px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '32px',
            background: 'var(--card)', border: '1px solid var(--border)',
            position: 'relative', zIndex: 1,
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          }}
        >
          {role ? roleEmoji[role] : <Layers size={28} color="var(--text-muted)" />}
        </motion.div>
      </motion.div>

      {/* Content */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
        <div>
          <h3 style={{ fontWeight: '700', fontSize: '17px', color: 'var(--text)', letterSpacing: '-0.3px', marginBottom: '8px', lineHeight: '1.3' }}>
            {project.title.replace(' — Teacher Portal', '').replace(' — Student Portal', '').replace(' — Admin Panel', '')}
            {role && <span style={{ color: 'var(--text-muted)', fontWeight: '500' }}> — {role}</span>}
          </h3>
          <p style={{ fontSize: '14px', lineHeight: '1.65', color: 'var(--text-muted)' }}>
            {project.description.length > 120 ? project.description.slice(0, 120) + '…' : project.description}
          </p>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {['Figma', 'UI/UX', 'Prototype'].map(tag => (
            <span key={tag} style={{
              padding: '4px 10px', borderRadius: '100px', fontSize: '12px', fontWeight: '500',
              background: 'var(--skill-pill-bg)', border: '1px solid var(--border)', color: 'var(--text-muted)',
            }}>{tag}</span>
          ))}
        </div>

        <div style={{ marginTop: 'auto', paddingTop: '8px' }}>
          <InteractiveHoverButton
            href={project.figmaLink} target="_blank" rel="noopener noreferrer"
            variant="accent"
            style={{ width: '100%', justifyContent: 'center', borderRadius: '12px', padding: '11px 20px', fontSize: '13px' }}
          >
            <ExternalLink size={14} /> View Prototype
          </InteractiveHoverButton>
        </div>
      </div>
    </motion.div>
  );
};

const FigmaProjects = () => (
  <section id="figma" className="section-padding"
    style={{ background: 'var(--section-alt)', borderTop: '1px solid var(--border)' }}>
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginBottom: '64px' }}
      >
        <div className="section-overline">Projects</div>
        <h2 className="text-h2">
          Design work<br />
          <span className="text-gradient">I'm proud of.</span>
        </h2>
        <p style={{ fontSize: '17px', color: 'var(--text-muted)', maxWidth: '480px', marginTop: '16px' }}>
          High-fidelity UI/UX prototypes for a School Management System — built collaboratively as a BCA academic project.
        </p>
      </motion.div>

      <motion.div
        variants={gridStagger}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: '-60px' }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}
      >
        {realProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default FigmaProjects;
