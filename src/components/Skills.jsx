import React from 'react';
import { motion } from 'framer-motion';

/* ── Stagger variants ── */
const gridStagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  viewport: { once: true, margin: '-60px' },
};

const cardItem = {
  initial: { opacity: 0, y: 24, scale: 0.96 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

const pillStagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.04, delayChildren: 0.15 } },
  viewport: { once: true },
};

const pillItem = {
  initial: { opacity: 0, scale: 0.85 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
};

const categories = [
  { title: 'Digital Marketing', emoji: '📈', color: '#7C3AED',
    skills: ['Digital Marketing', 'SEO', 'Social Media', 'Content Creation', 'Campaign Execution', 'Email Marketing', 'Analytics', 'Keyword Research'] },
  { title: 'Design Tools',       emoji: '🎨', color: '#3B82F6',
    skills: ['Canva', 'Figma', 'AI Image Tools'] },
  { title: 'Technical Skills',  emoji: '💻', color: '#10B981',
    skills: ['Microsoft Word', 'Excel', 'PowerPoint', 'Customer Service', 'Team Collaboration'] },
  { title: 'AI Tools',           emoji: '🤖', color: '#F59E0B',
    skills: ['ChatGPT', 'Claude', 'Gemini', 'AI Content Tools', 'Prompt Engineering'] },
];

const Skills = () => (
  <section id="skills" className="section-padding"
    style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginBottom: '64px' }}
      >
        <div className="section-overline">Skills</div>
        <h2 className="text-h2">
          Capabilities &amp;<br />
          <span className="text-gradient">tools I use.</span>
        </h2>
      </motion.div>

      {/* Staggered card grid */}
      <motion.div
        variants={gridStagger}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: '-60px' }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.title}
            variants={cardItem}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: '16px', padding: '28px',
              transition: 'border-color 0.3s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <motion.div
                whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
                style={{
                  width: '38px', height: '38px', borderRadius: '10px', fontSize: '18px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `${cat.color}12`, flexShrink: 0,
                }}
              >{cat.emoji}</motion.div>
              <div>
                <div style={{ fontWeight: '700', fontSize: '15px', color: 'var(--text)', letterSpacing: '-0.2px' }}>{cat.title}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-subtle)', marginTop: '1px' }}>{cat.skills.length} skills</div>
              </div>
            </div>

            {/* Staggered pills */}
            <motion.div
              variants={pillStagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}
            >
              {cat.skills.map(skill => (
                <motion.span key={skill} variants={pillItem} className="skill-pill">
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;
