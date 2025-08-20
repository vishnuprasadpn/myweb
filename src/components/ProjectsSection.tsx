'use client';

import { useState, useEffect } from 'react';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('portfolio');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const categories = ['ALL', 'SaaS PRODUCTS', 'ERP SYSTEMS', 'MOBILE APPS', 'WEB APPLICATIONS'];

  const portfolioItems = [
    {
      id: 1,
      category: 'SaaS PRODUCTS',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80',
      title: 'Neuromorphic Machines SaaS',
      description: 'Core SaaS product with Angular, React, and Shopify integration'
    },
    {
      id: 2,
      category: 'ERP SYSTEMS',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Fabric Monde ERP System',
      description: 'Full-fledged ERP for sales, inventory, and vendor operations'
    },
    {
      id: 3,
      category: 'MOBILE APPS',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'QLEZ Smart Store Platform',
      description: 'IoT-based retail automation platform processing 1000+ products/min'
    },
    {
      id: 4,
      category: 'WEB APPLICATIONS',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Marketing Automation Tools',
      description: 'Internal tools for automating marketing campaigns'
    }
  ];

  const filteredItems = activeFilter === 'ALL' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className={`section-subtitle ${isVisible ? 'loading' : ''}`}>WORK EXPERIENCE</div>
        <h2 className={`section-title ${isVisible ? 'loading' : ''}`}>My Professional Journey</h2>
        <p className={`section-description ${isVisible ? 'loading' : ''}`}>
          Over 10+ years of experience building scalable applications, leading technical teams, and delivering 
          impactful solutions across various industries and technologies.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-semibold ${
                activeFilter === category
                  ? 'bg-accent text-background shadow-lg scale-105'
                  : 'text-secondary hover:text-accent hover:bg-accent hover:bg-opacity-10'
              } ${isVisible ? 'stagger-animation' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`portfolio-item ${isVisible ? 'stagger-animation' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="overlay">
                <div className="text-white text-center p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm mb-4 opacity-90">{item.description}</p>
                  <p className="text-xs bg-accent text-background px-3 py-1 rounded-full inline-block">
                    {item.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="btn-primary px-8 py-3 text-lg">
            View Full Resume
          </button>
        </div>
      </div>
    </section>
  );
} 