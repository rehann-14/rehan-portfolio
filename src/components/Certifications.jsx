import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificates } from '../data/certificates.js';
import { Award, X, Download, ExternalLink } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ── Lightbox ── */
const Lightbox = ({ cert, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    style={{
      position: 'fixed', inset: 0, zIndex: 200,
      background: 'rgba(5,8,22,0.85)', backdropFilter: 'blur(12px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '24px',
    }}
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.94, y: 20, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ scale: 0.94, y: 20, opacity: 0 }}
      transition={{ type: 'spring', damping: 26, stiffness: 300 }}
      onClick={e => e.stopPropagation()}
      style={{
        position: 'relative', maxWidth: '860px', width: '100%',
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: '24px', overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
      }}
      className="cert-lightbox"
    >
      {/* Close */}
      <button onClick={onClose} style={{
        position: 'absolute', top: '16px', right: '16px', zIndex: 10,
        width: '36px', height: '36px', borderRadius: '10px',
        background: 'var(--skill-pill-bg)', border: '1px solid var(--border)',
        color: 'var(--text)', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}><X size={18} /></button>

      <div style={{ display: 'flex', flexDirection: 'column' }} className="cert-lightbox-inner">
        {/* Preview */}
        <div style={{
          background: 'var(--bg-secondary)', minHeight: '280px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(ellipse at center, ${cert.color}20, transparent 70%)`,
          }} />
          {cert.pdfLink ? (
            <iframe src={cert.pdfLink} title={cert.title}
              style={{ width: '100%', minHeight: '360px', border: 'none', position: 'relative', zIndex: 1 }} />
          ) : cert.image ? (
            <img src={cert.image} alt={cert.title}
              style={{ maxHeight: '320px', objectFit: 'contain', padding: '32px', position: 'relative', zIndex: 1 }} />
          ) : (
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <Award size={64} color={cert.color} style={{ margin: '0 auto 12px' }} />
              <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Preview not available</p>
            </div>
          )}
        </div>

        {/* Info */}
        <div style={{ padding: '28px' }}>
          <h3 style={{ fontWeight: '700', fontSize: '20px', color: 'var(--text)', letterSpacing: '-0.3px', marginBottom: '6px' }}>
            {cert.title}
          </h3>
          <p style={{ fontSize: '14px', fontWeight: '600', color: cert.color, marginBottom: '16px' }}>
            {cert.issuer}
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '24px' }}>
            {cert.description}
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {cert.pdfLink && (
              <a href={cert.pdfLink} download style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '10px 20px', borderRadius: '10px', fontSize: '14px', fontWeight: '600',
                background: 'var(--accent)', color: '#FFFFFF', textDecoration: 'none',
                transition: 'opacity 0.2s ease',
              }}>
                <Download size={15} /> Download PDF
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

/* ── Certificate Card ── */
const CertCard = ({ cert, index, onView }) => (
  <motion.div
    initial={{ opacity: 0, y: 24, scale: 0.94 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -5, scale: 1.03, transition: { duration: 0.2 } }}
    onClick={() => onView(cert)}
    style={{
      background: 'var(--card)', border: '1px solid var(--border)',
      borderRadius: '16px', overflow: 'hidden', cursor: 'pointer',
      transition: 'border-color 0.3s ease',
      display: 'flex', flexDirection: 'column',
    }}
  >
    {/* Color bar top */}
    <div style={{ height: '3px', background: cert.color }} />

    {/* Icon area */}
    <div style={{
      height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--bg-secondary)', position: 'relative',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse at center, ${cert.color}15, transparent 65%)`,
      }} />
      <div style={{
        width: '56px', height: '56px', borderRadius: '16px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: `${cert.color}18`,
        border: `1px solid ${cert.color}30`,
        position: 'relative', zIndex: 1,
        color: cert.color,
      }}>
        <Award size={24} />
      </div>
    </div>

    {/* Text */}
    <div style={{ padding: '16px 18px 18px' }}>
      <h3 style={{ fontWeight: '600', fontSize: '14px', color: 'var(--text)', letterSpacing: '-0.1px', marginBottom: '4px', lineHeight: '1.4' }}>
        {cert.title}
      </h3>
      <p style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '500' }}>
        {cert.issuer}
      </p>
    </div>
  </motion.div>
);

const Certifications = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="certifications" className="section-padding"
        style={{ background: 'var(--section-alt)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <motion.div {...fadeUp(0)} style={{ marginBottom: '64px' }}>
            <div className="section-overline">Certificates</div>
            <h2 className="text-h2">
              Credentials &amp;<br />
              <span className="text-gradient">achievements.</span>
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--text-muted)', maxWidth: '420px', marginTop: '16px' }}>
              {certificates.length} industry-recognized certificates earned through continuous learning.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
            {certificates.map((cert, index) => (
              <CertCard key={cert.id} cert={cert} index={index} onView={setSelected} />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && <Lightbox cert={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>

      <style>{`
        @media(min-width:768px){ .cert-lightbox-inner{ flex-direction: row !important; } }
        @media(min-width:768px){ .cert-lightbox-inner > div:first-child{ width: 60%; min-height: 400px; } }
        @media(min-width:768px){ .cert-lightbox-inner > div:last-child{ width: 40%; } }
      `}</style>
    </>
  );
};

export default Certifications;
