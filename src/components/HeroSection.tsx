"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "Product Builder",
  "Tech Lead",
  "Team Player"
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section pt-32 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Column - Name and Social Links */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 float-animation">
              VISHNUPRASAD PN.
            </h1>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-secondary">
              <a href="https://linkedin.com/in/vishnuprasadpn" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300 hover:scale-110 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/vishnuprasadpn" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300 hover:scale-110 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
            <a href="#contact" className="btn-primary pulse-animation">
              CONTACT ME
            </a>
          </div>

          {/* Center Column - Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-card-bg border-2 border-accent flex items-center justify-center overflow-hidden float-animation">
                <div className="w-72 h-72 rounded-full overflow-hidden relative">
                  <img 
                    src="/vishnuprasadpn.jpeg" 
                    alt="Vishnuprasad PN" 
                    className="w-full h-full object-cover"
                  />
                  {/* Glowing overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-accent opacity-20"></div>
                </div>
              </div>
              {/* Floating elements around the image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Right Column - Introduction */}
          <div className="text-center lg:text-left">
            <div className="text-accent text-sm uppercase tracking-wider mb-2 float-animation">
              INTRODUCTION
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              FULL STACK ENGINEER
            </h2>
            <p className="text-secondary mb-6 leading-relaxed">
              Creative and detail-oriented Full Stack Engineer with 10+ years of experience building scalable, performant web applications. Specialized in crafting intuitive frontend experiences using Angular, React, and Shopify. Adept in both startup and enterprise environments, collaborating cross-functionally to deliver impactful, user-centric solutions.
            </p>
            <button 
              onClick={scrollToServices}
              className="text-accent hover:text-accent-hover transition-all duration-300 flex items-center justify-center lg:justify-start hover:scale-105 cursor-pointer"
            >
              Learn more ↓
            </button>
            
            {/* Enhanced Pagination */}
            <div className="flex items-center justify-center lg:justify-start mt-8 space-x-4">
              <button 
                className="text-secondary hover:text-accent transition-all duration-300 hover:scale-110"
                onClick={() => setCurrentSlide((prev) => (prev - 1 + 3) % 3)}
              >
                ←
              </button>
              <div className="flex space-x-2">
                {[0, 1, 2].map((slide) => (
                  <button
                    key={slide}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === slide ? 'bg-accent scale-110' : 'bg-secondary hover:bg-accent'
                    }`}
                    onClick={() => setCurrentSlide(slide)}
                  />
                ))}
              </div>
              <button 
                className="text-secondary hover:text-accent transition-all duration-300 hover:scale-110"
                onClick={() => setCurrentSlide((prev) => (prev + 1) % 3)}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
} 