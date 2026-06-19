import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import InteractiveHoverButton from './InteractiveHoverButton';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const contactRows = [
  { icon: <FaLinkedin size={18} />, label: 'LinkedIn', value: 'linkedin.com/in/rehanshaikh1410', href: 'https://www.linkedin.com/in/rehanshaikh1410', color: '#0A66C2' },
  { icon: <FaInstagram size={18} />, label: 'Instagram', value: '@rehandigitalgoa', href: 'https://www.instagram.com/rehandigitalgoa?igsh=MTluMnhjb3EyZDFlOQ==', color: '#E1306C' },
  { icon: <Mail size={18} />,       label: 'Email',    value: 'rehanjw999@gmail.com',            href: 'mailto:rehanjw999@gmail.com',                color: '#7C3AED' },
  { icon: <Phone size={18} />,      label: 'Phone',    value: '+91 73857 86094',                 href: 'tel:+917385786094',                          color: '#10B981' },
  { icon: <MapPin size={18} />,     label: 'Location', value: 'Vasco, Goa, India',               href: 'https://maps.google.com/?q=Vasco,Goa',       color: '#3B82F6' },
];

const Contact = () => (
  <section id="contact" className="section-padding"
    style={{ background: 'var(--section-alt)', borderTop: '1px solid var(--border)' }}>
    <div className="container">
      <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>

        {/* Availability */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: '24px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 16px', borderRadius: '100px',
            background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)',
          }}>
            <span style={{
              width: '7px', height: '7px', borderRadius: '50%',
              background: 'var(--success)',
              boxShadow: '0 0 8px rgba(16,185,129,0.7)',
              animation: 'cpulse 2s ease-in-out infinite',
            }} />
            <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--success)' }}>
              Open to internships &amp; full-time roles
            </span>
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.1)} style={{ marginBottom: '56px' }}>
          <div className="section-overline" style={{ justifyContent: 'center' }}>Contact</div>
          <h2 className="text-h2">
            Let's work<br />
            <span className="text-gradient">together.</span>
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--text-muted)', marginTop: '16px' }}>
            Reach out through any channel below — I respond within 24 hours.
          </p>
        </motion.div>

        {/* Contact rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {contactRows.map((row, i) => (
            <motion.a
              key={row.label}
              href={row.href}
              target={row.href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ x: 6, borderColor: 'var(--border-hover)', transition: { duration: 0.2 } }}
              style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                padding: '16px 20px', borderRadius: '14px',
                background: 'var(--card)', border: '1px solid var(--border)',
                textDecoration: 'none', transition: 'all 0.2s ease',
                textAlign: 'left',
              }}
            >
              <div style={{
                width: '40px', height: '40px', borderRadius: '12px', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: `${row.color}14`, color: row.color,
              }}>
                {row.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '2px' }}>
                  {row.label}
                </div>
                <div style={{ fontSize: '15px', fontWeight: '500', color: 'var(--text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {row.value}
                </div>
              </div>
              <div style={{ color: 'var(--text-subtle)', flexShrink: 0, fontSize: '18px' }}>→</div>
            </motion.a>
          ))}
        </div>

        {/* Primary CTA */}
        <motion.div {...fadeUp(0.5)} style={{ display: 'flex', justifyContent: 'center' }}>
          <InteractiveHoverButton
            href="mailto:rehanjw999@gmail.com"
            variant="accent"
            style={{ padding: '14px 36px', fontSize: '15px', borderRadius: '14px' }}
          >
            <Mail size={16} /> Send an Email
          </InteractiveHoverButton>
        </motion.div>
      </div>
    </div>

    <style>{`
      @keyframes cpulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
    `}</style>
  </section>
);

export default Contact;
