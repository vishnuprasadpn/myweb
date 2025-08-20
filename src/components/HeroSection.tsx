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
              <a href="tel:+919995517171" className="hover:text-accent transition-all duration-300 hover:scale-110">+91 999-XX-XXXX</a>
              <span className="text-accent">|</span>
              <a href="mailto:vishnuprasad1990@gmail.com" className="hover:text-accent transition-all duration-300 hover:scale-110">vishnuprasad1990@gmail.com</a>
              <a href="https://vishnuprasadpn.dev" className="hover:text-accent transition-all duration-300 hover:scale-110">vishnuprasadpn.dev</a>
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
            <a href="#about" className="text-accent hover:text-accent-hover transition-all duration-300 flex items-center justify-center lg:justify-start hover:scale-105">
              Learn more ↓
            </a>
            
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
                      currentSlide === slide ? 'bg-accent scale-125' : 'bg-secondary hover:bg-accent'
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