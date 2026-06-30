"use client";

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="wrap">

        <div className="section-header">
          <span className="section-num">003</span>
          <span className="section-name">Contact</span>
        </div>

        <div className="contact-section">
          <h2 className="contact-headline">
            START A<br />
            <em>PROJECT.</em>
          </h2>

          <div className="contact-bottom">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p style={{ fontSize: '0.82rem', color: 'var(--dim)', maxWidth: 380, lineHeight: 1.8 }}>
                Open to new opportunities, product collaborations, and
                interesting engineering challenges. I respond within 24 hours.
              </p>
              <a href="mailto:vishnuprasad1990@gmail.com" className="contact-email-link">
                vishnuprasad1990@gmail.com ↗
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { label: 'Location', value: 'Bangalore, India' },
                { label: 'Availability', value: 'Full-time & Freelance' },
                { label: 'Response', value: 'Within 24 hours' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div style={{
                    fontSize: '0.6rem', fontFamily: 'var(--mono)',
                    letterSpacing: '0.16em', textTransform: 'uppercase',
                    color: 'var(--dimmer)', marginBottom: 3,
                  }}>{label}</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--white)' }}>{value}</div>
                </div>
              ))}

              <div style={{ display: 'flex', gap: 20, paddingTop: 8, borderTop: '1px solid var(--rule)' }}>
                {[
                  { label: 'LinkedIn', href: 'https://linkedin.com/in/vishnuprasadpn' },
                  { label: 'GitHub',   href: 'https://github.com/vishnuprasadpn' },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.68rem', fontFamily: 'var(--mono)',
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
        </div>

      </div>
    </section>
  );
}
