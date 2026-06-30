"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const roles = ["Full Stack Engineer", "Product Builder", "Tech Lead", "Frontend Specialist"];
const stats = [
  { num: "10", label: "Years Experience" },
  { num: "50", label: "Projects Shipped" },
  { num: "15", label: "Technologies" },
  { num: "5",  label: "Companies" },
];

export default function HeroSection() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [fwd, setFwd] = useState(true);

  useEffect(() => {
    const target = roles[idx];
    let t: ReturnType<typeof setTimeout>;
    if (fwd) {
      if (text.length < target.length) {
        t = setTimeout(() => setText(target.slice(0, text.length + 1)), 55);
      } else {
        t = setTimeout(() => setFwd(false), 2400);
      }
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(text.slice(0, -1)), 22);
      } else {
        setIdx(i => (i + 1) % roles.length);
        setFwd(true);
      }
    }
    return () => clearTimeout(t);
  }, [text, fwd, idx]);

  return (
    <section id="home" className="hero">
      <div style={{ maxWidth: 1440, width: '100%', margin: '0 auto', padding: '0 clamp(20px, 4vw, 48px)', display: 'flex', flexDirection: 'column', flex: 1 }}>

        {/* ── Meta strip ── */}
        <div className="hero__meta">
          <span>© 2026 — Vishnuprasad PN</span>
          <span className="hero__meta-location">Bangalore, India</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#4ade80', display: 'inline-block',
              boxShadow: '0 0 6px #4ade80',
            }} />
            Looking for opportunity
          </span>
        </div>

        {/* ── Two-column body ── */}
        <div className="hero__body">

          {/* Left — text */}
          <div className="hero__left">

            {/* Name */}
            <div>
              <h1 className="hero__name au au-1">
                VISHNUPRASAD<br />
                <span className="hero__name-accent">PN.</span>
            </h1>
            </div>

            {/* Role + description */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }} className="au au-2">
              <div className="hero__role-label">— Current focus</div>
              <div className="hero__role-text">
                {text}<span style={{ color: 'var(--lime)' }}>_</span>
              </div>
              <p className="hero__desc" style={{ marginBottom: 8 }}>
                10+ years building scalable products across startups and enterprises.
                Specialized in Angular, React &amp; Shopify — from concept to production.
                Actively integrating AI tooling and agentic workflows into the development process.
              </p>
            </div>

            {/* CTAs + socials */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }} className="au au-3">
              <div className="hero__ctas">
                <a href="#contact" className="btn btn-lime">Start a project</a>
                <a href="#portfolio" className="btn btn-border">See work</a>
              </div>
              <div style={{ display: 'flex', gap: 24 }}>
                {[
                  { label: 'LinkedIn', href: 'https://linkedin.com/in/vishnuprasadpn' },
                  { label: 'GitHub',   href: 'https://github.com/vishnuprasadpn' },
                ].map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    style={{
                      fontSize: '0.65rem', fontFamily: 'var(--mono)',
                      letterSpacing: '0.14em', textTransform: 'uppercase',
                      color: 'var(--dimmer)', textDecoration: 'none', transition: 'color 0.15s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--lime)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--dimmer)')}
                  >
                    {label} ↗
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right — photo */}
          <div className="hero__right au au-2">
            <Image
              src="/myprofilepic.jpeg"
              alt="Vishnuprasad PN"
              fill
              priority
              className="object-cover object-[center_18%]"
            />
            <div className="hero__photo-label">
              <span>Full Stack Engineer</span>
              <span>Bangalore · 2026</span>
            </div>
          </div>

        </div>

        {/* ── Stats strip ── */}
        <div className="hero__stats au au-4">
          {stats.map(({ num, label }) => (
            <div key={label} className="hero__stat">
              <span className="hero__stat-num">{num}<em>+</em></span>
              <span className="hero__stat-label">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
