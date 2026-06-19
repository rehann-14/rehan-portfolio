import React from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Layout, PenTool, ExternalLink } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
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

const designServices = [
  {
    id: 1,
    title: 'Instagram & Social Media',
    description: 'Eye-catching posts, stories, and carousel designs that boost engagement and elevate brand aesthetics.',
    icon: <FaInstagram size={28} color="var(--text-muted)" />,
    color: '#E1306C',
    tags: ['Posts', 'Stories', 'Carousels']
  },
  {
    id: 2,
    title: 'Pinterest Graphics',
    description: 'High-converting, aesthetic pins designed specifically to drive traffic and captivate your target audience.',
    icon: <Layout size={28} color="var(--text-muted)" />,
    color: '#E60023',
    tags: ['Pins', 'Traffic', 'Aesthetic']
  },
  {
    id: 3,
    title: 'Local Business Branding',
    description: 'Custom visuals, banners, and promotional material tailored for local businesses and specific events.',
    icon: <ImageIcon size={28} color="var(--text-muted)" />,
    color: '#3B82F6',
    tags: ['Banners', 'Promotions', 'Flyers']
  },
  {
    id: 4,
    title: 'Custom Creations',
    description: 'Have a specific requirement? I can craft unique designs and creative images tailored exactly to your needs.',
    icon: <PenTool size={28} color="var(--text-muted)" />,
    color: '#10B981',
    tags: ['Custom', 'Unique', 'Creative']
  }
];

const ServiceCard = ({ service }) => {
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
      <motion.div
        style={{
          height: '160px', background: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', overflow: 'hidden',
        }}
        whileHover={{ scale: 1.0 }}
      >
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse at center, ${service.color}18, transparent 70%)`,
        }} />
        <motion.div
          whileHover={{ scale: 1.12, rotate: 3, transition: { duration: 0.35 } }}
          style={{
            width: '64px', height: '64px', borderRadius: '16px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'var(--card)', border: '1px solid var(--border)',
            position: 'relative', zIndex: 1,
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          }}
        >
          {service.icon}
        </motion.div>
      </motion.div>

      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
        <div>
          <h3 style={{ fontWeight: '700', fontSize: '17px', color: 'var(--text)', letterSpacing: '-0.3px', marginBottom: '8px', lineHeight: '1.3' }}>
            {service.title}
          </h3>
          <p style={{ fontSize: '14px', lineHeight: '1.65', color: 'var(--text-muted)' }}>
            {service.description}
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
          {service.tags.map(tag => (
            <span key={tag} style={{
              padding: '4px 10px', borderRadius: '100px', fontSize: '12px', fontWeight: '500',
              background: 'var(--skill-pill-bg)', border: '1px solid var(--border)', color: 'var(--text-muted)',
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const GraphicDesign = () => (
  <section id="design" className="section-padding"
    style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
    <div className="container">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px' }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: '540px' }}
        >
          <div className="section-overline">Graphic Design</div>
          <h2 className="text-h2">
            Creative visuals for<br />
            <span className="text-gradient">every need.</span>
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--text-muted)', marginTop: '16px' }}>
            I offer diverse image design services tailored to your requirements. From striking social media content to branding for local businesses, I can bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <InteractiveHoverButton
            href="https://www.instagram.com/rehandigitalgoa?igsh=MTluMnhjb3EyZDFlOQ==" 
            target="_blank" rel="noopener noreferrer"
            variant="accent"
            style={{ borderRadius: '12px', padding: '12px 24px', fontSize: '14px' }}
          >
            <FaInstagram size={16} /> View My Work on Instagram
          </InteractiveHoverButton>
          <div style={{ marginTop: '10px', fontSize: '13px', color: 'var(--text-subtle)', textAlign: 'center', fontWeight: '500' }}>
            @rehandigitalgoa
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={gridStagger}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: '-60px' }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}
      >
        {designServices.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default GraphicDesign;
