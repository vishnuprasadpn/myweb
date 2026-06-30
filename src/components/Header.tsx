'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap">
        <div className="site-header__inner">
          <a href="#home" className="wordmark">Vishnuprasad&nbsp;PN</a>

          <nav className="site-nav hidden md:flex">
            {links.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="/VISHNUPRASAD-PN.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-border"
              style={{ padding: '8px 16px', fontSize: '0.68rem' }}
            >
              Resume ↗
            </a>
            <a href="#contact" className="header-cta">Hire Me</a>
          </div>

          {/* mobile burger */}
          <button
            className="md:hidden"
            style={{ background: 'none', border: 'none', color: 'var(--white)', cursor: 'pointer', padding: 4 }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open
              ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/></svg>
              : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
            }
          </button>
        </div>

        {open && (
          <div style={{ borderTop: '1px solid var(--rule)', paddingBottom: 24 }}>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    padding: '14px 0',
                    borderBottom: '1px solid var(--rule)',
                    fontSize: '0.78rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--dim)',
                    textDecoration: 'none',
                  }}
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              <a href="/VISHNUPRASAD-PN.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-border" style={{ flex: 1, justifyContent: 'center' }}>Resume</a>
              <a href="#contact" className="header-cta" style={{ flex: 1, textAlign: 'center' }} onClick={() => setOpen(false)}>Hire Me</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
