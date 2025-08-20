'use client';

import { useEffect, useState } from 'react';

export default function ServicesSection() {
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

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Frontend Development",
      projects: "Angular, React, Next.js",
      description: "Crafting intuitive frontend experiences using modern frameworks"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Backend Development",
      projects: "Spring Boot, Node.js, Python",
      description: "Building robust and scalable backend services"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Mobile Development",
      projects: "Android, Ionic, Flutter",
      description: "Creating native and cross-platform mobile applications"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "DevOps & Cloud",
      projects: "AWS, Azure, CI/CD",
      description: "Managing cloud infrastructure and deployment pipelines"
    }
  ];

  const stats = [
    { number: "10 +", label: "Years of Experience", icon: "⭐" },
    { number: "50 +", label: "Projects Delivered", icon: "🚀" },
    { number: "15 +", label: "Technologies Mastered", icon: "🛠️" },
    { number: "5 +", label: "Companies Worked", icon: "🏢" }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <div className={`section-subtitle ${isVisible ? 'loading' : ''}`}>EXPERTISE</div>
        <h2 className={`section-title ${isVisible ? 'loading' : ''}`}>What I Am Great At</h2>
        <p className={`section-description ${isVisible ? 'loading' : ''}`}>
          With over a decade of experience in full-stack development, I specialize in building scalable web applications, 
          crafting intuitive user experiences, and leading technical teams to deliver impactful solutions.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card ${isVisible ? 'stagger-animation' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon text-accent">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-secondary mb-3">{service.projects}</p>
              <p className="text-sm text-secondary opacity-80">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`service-card ${isVisible ? 'stagger-animation' : ''}`}
              style={{ animationDelay: `${(index + 4) * 0.1}s` }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
              <p className="text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 