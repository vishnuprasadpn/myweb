export default function BlogSection() {
  const articles = [
    {
      id: 1,
      date: "08 Apr 2019",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1016&q=80",
      title: "Welcome to Jekyll! Go ahead and edit",
      excerpt: "",
      isLarge: true
    },
    {
      id: 2,
      date: "10 Mar 2019",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1058&q=80",
      title: "WordPress hostin manage your growth Nullam",
      excerpt: "",
      isLarge: true
    },
    {
      id: 3,
      date: "09 Mar 2019",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "html5 Static Site Generator For...",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      isLarge: false
    },
    {
      id: 4,
      date: "09 Feb 2019",
      image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Just Trying And Enjoying magna...",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      isLarge: false
    },
    {
      id: 5,
      date: "09 Feb 2019",
      image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Easily choose from thousan of...",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      isLarge: false
    }
  ];

  const largeArticles = articles.filter(article => article.isLarge);
  const smallArticles = articles.filter(article => !article.isLarge);

  return (
    <section id="blog" className="section">
      <div className="container">
        <div className="section-subtitle">LATEST NEWS</div>
        <h2 className="section-title">My Latest Articles</h2>
        <p className="section-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Large Articles */}
          <div className="lg:col-span-2 space-y-8">
            {largeArticles.map((article) => (
              <div key={article.id} className="article-card">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="article-image"
                />
                <div className="article-content">
                  <div className="article-date">{article.date}</div>
                  <h3 className="article-title">{article.title}</h3>
                  <a href="#" className="text-accent hover:text-accent-hover transition-colors">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Small Articles */}
          <div className="space-y-6">
            {smallArticles.map((article) => (
              <div key={article.id} className="article-card">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="article-image"
                />
                <div className="article-content">
                  <div className="article-date">{article.date}</div>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{article.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 