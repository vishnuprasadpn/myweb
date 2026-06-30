'use client';

import { useState, useEffect } from 'react';

const tech = ['Angular','React','Next.js','TypeScript','Spring Boot','Node.js','Python','Flutter','AWS','Docker','PostgreSQL','Shopify','Ionic','Azure'];

export default function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...tech, ...tech].map((t, i) => (
            <span key={i} className="marquee-item">
              {t}<span className="marquee-dot">●</span>
            </span>
          ))}
        </div>
      </div>

      <footer className="site-footer wrap">
        <span>© {new Date().getFullYear()} Vishnuprasad PN</span>
        <span style={{ color: 'var(--lime)' }}>Full Stack Engineer</span>
        <span>Bangalore, India</span>
      </footer>

      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="scroll-top-btn"
          aria-label="Back to top"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
          </svg>
        </button>
      )}
    </>
  );
}
