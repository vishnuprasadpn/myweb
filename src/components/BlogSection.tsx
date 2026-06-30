import Image from "next/image";

const articles = [
  { id: 1, date: "Apr 2019", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80", title: "Getting Started with Static Sites — Jekyll & Beyond" },
  { id: 2, date: "Mar 2019", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=800&q=80", title: "WordPress at Scale — Managing Growth Without Chaos" },
  { id: 3, date: "Feb 2019", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80", title: "Picking the Right Design System for Your Stack" },
];

export default function BlogSection() {
  return (
    <section id="blog">
      <div className="wrap">

        <div className="section-header">
          <span className="section-num">004</span>
          <span className="section-name">Writing</span>
        </div>

        <div style={{ padding: '48px 0 40px' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
            fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1,
            textTransform: 'uppercase', marginBottom: 36,
          }}>
            Latest<br />
            <span style={{ WebkitTextStroke: '1.5px var(--dimmer)', color: 'transparent' }}>Articles</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 1, background: 'var(--rule)' }}>
            {articles.map(a => (
              <article
                key={a.id}
                style={{
                  background: 'var(--black)', padding: 0, cursor: 'pointer',
                  display: 'flex', flexDirection: 'column',
                }}
              >
                <div style={{ position: 'relative', height: 180, overflow: 'hidden' }}>
                  <Image
                    src={a.image} alt={a.title} fill
                    className="object-cover"
                    style={{ transition: 'transform 0.5s ease' }}
                  />
                </div>
                <div style={{ padding: '20px 24px 24px', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <span style={{ fontSize: '0.62rem', fontFamily: 'var(--mono)', letterSpacing: '0.14em', color: 'var(--lime)' }}>
                    {a.date}
                  </span>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, lineHeight: 1.4, color: 'var(--white)' }}>
                    {a.title}
                  </h3>
                  <a href="#" style={{
                    fontSize: '0.68rem', fontFamily: 'var(--mono)', letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: 'var(--dimmer)', textDecoration: 'none',
                    marginTop: 'auto',
                  }}>
                    Read →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
