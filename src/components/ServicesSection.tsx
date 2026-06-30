'use client';

import { useEffect, useRef, useState } from 'react';

const services = [
  {
    num: '01',
    title: 'Frontend Development',
    desc: 'Pixel-perfect UIs built with Angular, React, and Next.js. Design systems, performance optimisation, micro-interactions.',
    stack: 'Angular · React · Next.js · TypeScript · CSS',
  },
  {
    num: '02',
    title: 'Backend & APIs',
    desc: 'Scalable microservices and REST/GraphQL APIs with Spring Boot, Node.js, and Python. Built for production.',
    stack: 'Spring Boot · Node.js · Python · PostgreSQL',
  },
  {
    num: '03',
    title: 'Mobile Applications',
    desc: 'Cross-platform apps using Ionic and Flutter, plus native Android. Offline-first, hardware-integrated, real-world tested.',
    stack: 'Ionic · Flutter · Android · Capacitor',
  },
  {
    num: '04',
    title: 'DevOps & Cloud',
    desc: 'Working knowledge of CI/CD pipelines, Docker, and cloud platforms. Comfortable with deployments, environment setup, and collaborating with DevOps teams.',
    stack: 'AWS · Docker · CI/CD · GitHub Actions',
  },
  {
    num: '05',
    title: 'AI-Assisted Development',
    desc: 'Integrating LLMs and agentic AI workflows into the development process — from code generation and review to building AI-powered product features.',
    stack: 'Claude · OpenAI · LLM APIs · Prompt Engineering · Agentic Workflows',
  },
];

export default function ServicesSection() {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.05 }
    );
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  return (
    <section id="services" ref={ref}>
      <div className="wrap">

        <div className="section-header">
          <span className="section-num">001</span>
          <span className="section-name">Services</span>
        </div>

        {/* Giant section label */}
        <div style={{
          padding: '48px 0 32px',
          borderBottom: '1px solid var(--rule)',
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap',
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
            fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1,
            textTransform: 'uppercase',
          }}>
            What I<br />
            <span style={{ WebkitTextStroke: '1.5px var(--dimmer)', color: 'transparent' }}>Build</span>
          </h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--dim)', maxWidth: 320, lineHeight: 1.8 }}>
            A decade of experience across the full product stack —
            from pixel to pipeline, prototype to production.
          </p>
        </div>

        {/* Service rows */}
        <div className="services-list">
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`service-row ${vis ? `au au-${i + 1}` : ''}`}
              style={{ opacity: vis ? undefined : 0 }}
            >
              <span className="srv-num">{s.num}</span>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div className="srv-title">{s.title}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--dim)', marginTop: 6, lineHeight: 1.7, maxWidth: 560 }}>
                  {s.desc}
                </div>
              </div>

              <div className="srv-meta">
                <span className="srv-stack">{s.stack}</span>
                <span className="srv-arrow">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
