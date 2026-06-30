'use client';

import { useState, useEffect } from 'react';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'var(--black)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
      }}>
        {/* Spinner */}
        <div style={{
          width: 40,
          height: 40,
          border: '2px solid var(--rule)',
          borderTopColor: 'var(--lime)',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }} />

        {/* Name */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--dim)',
            marginBottom: 6,
          }}>
            Vishnuprasad PN
          </p>
          <p style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--dimmer)',
          }}>
            Loading portfolio<span style={{ color: 'var(--lime)' }}>_</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
