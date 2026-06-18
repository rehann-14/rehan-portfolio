import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ZoomIn, X, FileText } from 'lucide-react';
import InteractiveHoverButton from './InteractiveHoverButton';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const Resume = () => {
  const [lightbox, setLightbox] = useState(false);
  const resumePDF = '/resume.pdf';
  const resumeImg = '/resume-preview.png';

  return (
    <>
      <section id="resume" className="section-padding"
        style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <motion.div {...fadeUp(0)} style={{ marginBottom: '56px' }}>
            <div className="section-overline">Resume</div>
            <h2 className="text-h2">
              Professional<br />
              <span className="text-gradient">resume.</span>
            </h2>
          </motion.div>

          <motion.div {...fadeUp(0.1)}
            style={{
              display: 'grid', gap: '0', alignItems: 'stretch',
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: '20px', overflow: 'hidden', maxWidth: '900px',
            }}
            className="resume-grid"
          >
            {/* Preview */}
            <div
              style={{
                background: 'var(--bg-secondary)', position: 'relative',
                minHeight: '380px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', cursor: 'zoom-in',
                borderBottom: '1px solid var(--border)',
                overflow: 'hidden',
              }}
              onClick={() => setLightbox(true)}
            >
              {/* Grid pattern */}
              <div style={{
                position: 'absolute', inset: 0, opacity: 0.4,
                backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }} />

              {/* Zoom hint */}
              <div style={{
                position: 'absolute', top: '16px', right: '16px', zIndex: 10,
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '6px 12px', borderRadius: '100px',
                background: 'var(--card)', border: '1px solid var(--border)',
                fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)',
              }}>
                <ZoomIn size={13} /> Click to zoom
              </div>

              <img
                src={resumeImg}
                alt="Rehan Resume"
                style={{
                  maxWidth: '85%', maxHeight: '340px', objectFit: 'contain',
                  borderRadius: '8px', boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  border: '1px solid var(--border)', position: 'relative', zIndex: 1,
                  transition: 'transform 0.3s ease',
                }}
                onError={e => e.target.style.display = 'none'}
              />
            </div>

            {/* Info panel */}
            <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(124,58,237,0.1)', color: 'var(--accent)',
                  }}>
                    <FileText size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '16px', color: 'var(--text)' }}>Rehan Naik Shaikh</div>
                    <div style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>Digital Marketing Intern</div>
                  </div>
                </div>
                <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                  BCA Graduate · Digital Marketing · AI Tools Enthusiast · Based in Vasco, Goa
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button onClick={() => setLightbox(true)} className="btn-ghost" style={{ justifyContent: 'center', borderRadius: '12px' }}>
                  <ZoomIn size={16} /> Preview
                </button>
                <InteractiveHoverButton
                  href={resumePDF}
                  rel="noopener noreferrer"
                  variant="accent"
                  style={{ justifyContent: 'center', borderRadius: '12px', padding: '12px 20px' }}
                >
                  <Download size={15} /> Download PDF
                </InteractiveHoverButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
            style={{
              position: 'fixed', inset: 0, zIndex: 200,
              background: 'rgba(5,8,22,0.9)', backdropFilter: 'blur(16px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px',
            }}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: 'spring', damping: 26, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              style={{ position: 'relative', maxWidth: '860px', width: '100%' }}
            >
              <button onClick={() => setLightbox(false)} style={{
                position: 'absolute', top: '-48px', right: 0,
                width: '36px', height: '36px', borderRadius: '10px',
                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)',
                color: '#FFFFFF', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}><X size={18} /></button>
              <img src={resumeImg} alt="Resume"
                style={{
                  width: '100%', height: 'auto', maxHeight: '85vh',
                  objectFit: 'contain', borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.1)',
                }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media(min-width:768px){ .resume-grid{ grid-template-columns: 1.2fr 1fr !important; } }
        @media(min-width:768px){ .resume-grid > div:first-child{ border-bottom: none !important; border-right: 1px solid var(--border) !important; } }
      `}</style>
    </>
  );
};

export default Resume;
