"use client";
import { Star, Languages, Code2, Server, Smartphone, Database, Cloud, Zap } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const skills = [
  { label: "Frontend", value: "Angular 15+, Next.js, React, Shopify CMS, WordPress, Wix", icon: "Code2", level: 90 },
  { label: "Backend", value: "Java (Spring Boot), Python (Django, Falcon), Node.js, Electron", icon: "Server", level: 85 },
  { label: "Mobile", value: "Java (Android), Ionic, Flutter, React Native", icon: "Smartphone", level: 75 },
  { label: "Databases", value: "MySQL, MongoDB, Amazon RDS, DynamoDB", icon: "Database", level: 80 },
  { label: "DevOps & Cloud", value: "AWS, Azure, Firebase, GitHub/GitLab/CodeCommit", icon: "Cloud", level: 70 },
  { label: "Other", value: "Email Campaign Tools, REST APIs, Firebase Services", icon: "Zap", level: 60 }
];

const attributes = [
  "Strong leadership and collaboration skills",
  "Fast learner with problem-solving mindset",
  "Excellent communication and time management",
  "Thrive in high-pressure, fast-paced environments"
];

const languages = ["English", "Malayalam", "Hindi", "Tamil"];

export default function ExpertiseSection() {
  // Icon map for skill categories
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-5 h-5 text-pink-400" />,
    Server: <Server className="w-5 h-5 text-blue-400" />,
    Smartphone: <Smartphone className="w-5 h-5 text-green-400" />,
    Database: <Database className="w-5 h-5 text-yellow-400" />,
    Cloud: <Cloud className="w-5 h-5 text-cyan-400" />,
    Zap: <Zap className="w-5 h-5 text-purple-400" />,
  };

  return (
    <motion.section
      className="w-full py-16 rounded-2xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      style={{
        background: "rgba(30, 41, 59, 0.7)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 8px 32px 0 rgba(31,38,135,0.18)",
        border: "1.5px solid rgba(255,255,255,0.08)",
      }}
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-10 text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Expertise
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Technical Skills */}
        <motion.div
          className="rounded-2xl p-6 shadow-lg border border-zinc-700 bg-white/10 backdrop-blur-md relative group overflow-hidden"
          whileHover={{ scale: 1.03, boxShadow: "0 0 32px 0 #38bdf8" }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
        >
          <div className="flex items-center gap-2 mb-4 text-blue-200 font-semibold text-lg">
            <Star className="w-6 h-6 text-blue-400 animate-spin-slow" /> Technical Skills
          </div>
          <ul className="space-y-4">
            {skills.map((s, i) => (
              <motion.li
                key={i}
                className="flex flex-col gap-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              >
                <div className="flex items-center gap-2">
                  {iconMap[s.icon]}
                  <span className="font-bold text-white text-sm">{s.label}:</span>
                  <span className="text-blue-100 text-xs">{s.value}</span>
                </div>
                {/* Progress Bar */}
                <div className="w-full h-2 bg-blue-900 rounded-full overflow-hidden mt-1">
                  <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.08 }}
                  />
                </div>
              </motion.li>
            ))}
          </ul>
          {/* Sparkle effect */}
          <span className="absolute right-4 top-4 w-4 h-4 bg-blue-400 rounded-full opacity-30 blur-sm group-hover:animate-ping pointer-events-none" />
        </motion.div>
        {/* Key Attributes */}
        <motion.div
          className="rounded-2xl p-6 shadow-lg border border-zinc-700 bg-white/10 backdrop-blur-md relative group overflow-hidden"
          whileHover={{ scale: 1.03, boxShadow: "0 0 32px 0 #a78bfa" }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
        >
          <div className="flex items-center gap-2 mb-4 text-blue-200 font-semibold text-lg">
            <Star className="w-6 h-6 text-purple-400 animate-bounce" /> Key Attributes
          </div>
          <ul className="space-y-3">
            {attributes.map((a, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-2 text-blue-100 text-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              >
                <span className="w-2 h-2 rounded-full bg-purple-400 inline-block animate-pulse" />
                {a}
              </motion.li>
            ))}
          </ul>
          {/* Sparkle effect */}
          <span className="absolute left-4 bottom-4 w-4 h-4 bg-purple-400 rounded-full opacity-30 blur-sm group-hover:animate-ping pointer-events-none" />
        </motion.div>
      </div>
      {/* Languages */}
      <motion.div
        className="flex flex-col items-center mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="flex items-center gap-2 mb-2 text-blue-200 font-semibold text-lg">
          <Languages className="w-6 h-6 text-blue-400 animate-wiggle" /> Languages
        </div>
        <div className="flex flex-wrap gap-2">
          {languages.map((l, i) => (
            <motion.span
              key={i}
              className="px-3 py-1 rounded-full bg-blue-900 text-blue-100 text-xs font-semibold border border-blue-700 shadow hover:scale-110 hover:bg-blue-700 transition-all duration-200 cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              whileHover={{ scale: 1.15, boxShadow: "0 0 12px #38bdf8" }}
            >
              {l}
            </motion.span>
          ))}
        </div>
      </motion.div>
      {/* Custom keyframes for icons */}
      <style>{`
        @keyframes animate-spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .animate-spin-slow { animation: animate-spin-slow 6s linear infinite; }
        @keyframes animate-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-bounce { animation: animate-bounce 1.6s infinite; }
        @keyframes animate-wiggle { 0%, 100% { transform: rotate(-8deg); } 50% { transform: rotate(8deg); } }
        .animate-wiggle { animation: animate-wiggle 2.2s ease-in-out infinite; }
      `}</style>
    </motion.section>
  );
} 