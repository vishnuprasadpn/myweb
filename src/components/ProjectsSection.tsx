'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, useCallback } from 'react';

const projects = [
  {
    num: '01',
    title: 'Neuromorphic Machines SaaS',
    cat: 'SaaS Product',
    year: '2023',
    tags: ['Angular', 'React', 'Shopify'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
  },
  {
    num: '02',
    title: 'Fabric Monde ERP',
    cat: 'Enterprise Software',
    year: '2022',
    tags: ['Spring Boot', 'Angular', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
  },
  {
    num: '03',
    title: 'QLEZ Smart Store Platform',
    cat: 'IoT + Mobile',
    year: '2021',
    tags: ['Ionic', 'Node.js', 'IoT'],
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=600&q=80',
  },
  {
    num: '04',
    title: 'Marketing Automation Suite',
    cat: 'Internal Tooling',
    year: '2020',
    tags: ['React', 'Python', 'AWS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
  },
];

export default function ProjectsSection() {
  const [vis, setVis] = useState(false);
  const [thumb, setThumb] = useState<{ src: string; x: number; y: number } | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.05 }
    );
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent, src: string) => {
    setThumb({ src, x: e.clientX + 20, y: e.clientY - 75 });
  }, []);

  const handleMouseLeave = useCallback(() => setThumb(null), []);

  return (
    <section id="portfolio" ref={ref}>
      <div className="wrap">

        <div className="section-header">
          <span className="section-num">002</span>
          <span className="section-name">Selected Work</span>
        </div>

        <div style={{
          padding: '48px 0 32px',
          borderBottom: '1px solid var(--rule)',
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap',
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
            fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1,
            textTransform: 'uppercase',
          }}>
            Projects<br />
            <span style={{ WebkitTextStroke: '1.5px var(--dimmer)', color: 'transparent' }}>Shipped</span>
          </h2>
          <a
            href="/VISHNUPRASAD-PN.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-border"
            style={{ alignSelf: 'flex-end' }}
          >
            Full Resume ↗
          </a>
        </div>

        <div className="projects-list">
          {projects.map((p, i) => (
            <div
              key={p.num}
              className={`project-row ${vis ? `au au-${Math.min(i + 1, 5)}` : ''}`}
              style={{ opacity: vis ? undefined : 0 }}
              onMouseMove={e => handleMouseMove(e, p.image)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="proj-num">{p.num}</span>

              <div>
                <div className="proj-title">{p.title}</div>
                <div style={{ fontSize: '0.68rem', fontFamily: 'var(--mono)', color: 'var(--dimmer)', marginTop: 4, letterSpacing: '0.08em' }}>
                  {p.cat} · {p.year}
                </div>
              </div>

              <div className="proj-right">
                <div className="proj-tags">
                  {p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Global floating thumbnail */}
      {thumb && (
        <div
          className="proj-thumb visible"
          style={{ left: thumb.x, top: thumb.y }}
        >
          <Image src={thumb.src} alt="" fill className="object-cover" />
        </div>
      )}
    </section>
  );
}
