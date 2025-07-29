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
  // Typewriter effect
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState(roles[0]);
  const [typing, setTyping] = useState(true);
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (typing) {
      if (displayed.length < roles[roleIdx].length) {
        timeout = setTimeout(() => {
          setDisplayed(roles[roleIdx].slice(0, displayed.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      timeout = setTimeout(() => {
        setTyping(true);
        setDisplayed("");
        setRoleIdx((i) => (i + 1) % roles.length);
      }, 700);
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  // Parallax effect
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setParallax({ x, y });
  };
  const handleMouseLeave = () => setParallax({ x: 0, y: 0 });

  return (
    <section
      className="w-full flex flex-col items-center justify-center min-h-[60vh] py-16 relative overflow-hidden"
      aria-label="Hero Section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, #23233a 0%, #181824 100%)",
          backgroundSize: "cover",
          filter: "blur(0.5px)",
          transform: `scale(1.04) translateX(${parallax.x}px) translateY(${parallax.y}px)`,
          transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        aria-hidden="true"
      />
      {/* Floating Avatar */}
      <motion.div
        className="relative z-10 mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: [0, -8, 0], opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        style={{ width: 104, height: 104 }}
      >
        <img
          src="/window.svg"
          alt="Avatar"
          className="rounded-full border-4 border-blue-500 shadow-lg w-full h-full object-cover bg-zinc-900"
          draggable={false}
        />
      </motion.div>
      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-4xl font-semibold text-center mb-3 text-white tracking-tight"
        >
          {displayed}
          <span className="text-blue-400">|</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="text-blue-100 text-center max-w-xl mb-8 text-base md:text-lg"
        >
          Hi, I&apos;m Vishnuprasad. I help startups and teams build scalable, high-performance web and mobile applications. With 8+ years of experience across the stack, I focus on delivering robust solutions and great user experiences.
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <motion.a
            href="mailto:vishnuprasad1990@gmail.com"
            className="inline-block px-7 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-base shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all relative overflow-hidden"
            whileHover={{ scale: 1.06, boxShadow: "0 0 24px 4px #6366f1" }}
            whileTap={{ scale: 0.97 }}
            tabIndex={0}
          >
            <span className="relative z-10">Contact Me</span>
            <motion.span
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-xl z-0"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            />
          </motion.a>
          {/* <motion.a
            href="#projects"
            className="inline-block px-7 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold text-base shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all relative overflow-hidden"
            whileHover={{ scale: 1.06, boxShadow: "0 0 24px 4px #38bdf8" }}
            whileTap={{ scale: 0.97 }}
            tabIndex={0}
          >
            <span className="relative z-10">View Projects</span>
            <motion.span
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-30 blur-xl z-0"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true" 
            />
          </motion.a> */}
        </div>
      </div>
    </section>
  );
} 