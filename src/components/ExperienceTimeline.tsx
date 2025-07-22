"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const experiences = [
  {
    title: "Full Stack Engineer",
    company: "Neuromorphic Machines Pvt Ltd",
    date: "Nov 2019 – Present | Bangalore, India",
    logo: "/window.svg",
    responsibilities: [
      "Designed and developed scalable web platforms using Angular, Django, and AWS.",
      "Led full-cycle project development from requirement gathering to deployment.",
      "Integrated cloud services and DevOps practices to improve CI/CD efficiency."
    ],
    color: "from-blue-500 via-purple-500 to-blue-400"
  },
  {
    title: "Full Stack Developer",
    company: "Fabric Monde Pvt Ltd",
    date: "Dec 2018 – Oct 2019 | Bangalore, India",
    logo: "/globe.svg",
    responsibilities: [
      "Built and maintained a full-featured ERP system for sales and vendor management.",
      "Developed Angular-based web interfaces and Android applications.",
      "Implemented automation tools for marketing campaigns."
    ],
    color: "from-pink-500 via-yellow-400 to-pink-400"
  },
  {
    title: "CTO & Co-founder",
    company: "Pi Revolutions Pvt Ltd",
    date: "Sept 2016 – Dec 2018 | Bangalore, India",
    logo: "/vercel.svg",
    responsibilities: [
      "Spearheaded the development of Qlez Smart Store, a futuristic retail billing system using IoT.",
      "Oversaw team operations, product roadmap, and investor presentations.",
      "Qlez video demo: https://youtu.be/XZ09WQhQ3qk"
    ],
    color: "from-green-400 via-blue-400 to-purple-400"
  },
  {
    title: "Junior Programmer",
    company: "Gravity Technologies",
    date: "Dec 2014 – Jan 2016 | Thrissur, Kerala",
    logo: "/window.svg",
    responsibilities: [
      "Worked on Java-based desktop and web applications.",
      "Gained foundational experience in software development and debugging."
    ],
    color: "from-blue-400 via-purple-400 to-blue-500"
  }
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40, scale: 0.96 },
  onscreen: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, bounce: 0.18, duration: 0.7 } }
};

export default function ExperienceTimeline() {
  return (
    <section className="w-full py-32 px-2 md:px-0 relative overflow-x-clip" aria-label="Experience">
      <h2 className="text-4xl font-extrabold text-center mb-14 tracking-tight text-white relative z-10">Experience</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-6xl mx-auto relative z-10">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.title + exp.company}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            className="relative group rounded-3xl shadow-2xl overflow-visible bg-zinc-900 min-h-[420px] flex flex-col items-center justify-between transition-transform hover:scale-[1.04] hover:shadow-blue-500/30"
          >
            {/* No glass overlay */}
            {/* Floating logo with glow, never cut off */}
            <span className="absolute left-1/2 -translate-x-1/2 -top-14 z-20 overflow-visible">
              <span className="w-24 h-24 rounded-full bg-white/90 border-4 border-blue-400 shadow-2xl flex items-center justify-center relative after:content-[''] after:absolute after:inset-0 after:rounded-full after:bg-blue-400/30 after:blur-xl after:opacity-70 group-hover:after:opacity-100 group-hover:after:scale-110 transition-all">
                <Image src={exp.logo} alt={exp.company} width={72} height={72} className="rounded-full z-10" />
              </span>
            </span>
            <div className="relative z-10 flex flex-col items-center pt-20 pb-10 px-7 w-full h-full">
              <div className="flex flex-col items-center gap-1 mb-3">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full border border-blue-700 shadow mb-2">{exp.date}</span>
                <span className="font-extrabold text-white text-xl text-center drop-shadow mb-1">{exp.title}</span>
                <span className="text-blue-100 font-semibold text-center text-lg mb-2">{exp.company}</span>
              </div>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 rounded-full opacity-40 mb-4" />
              <ul className="space-y-3 w-full">
                {exp.responsibilities.map((item, i) => (
                  item.startsWith('Qlez video demo:') ? (
                    <li key={`video-demo-${i}`} className="flex items-center gap-2 justify-center">
                      <a href="https://youtu.be/XZ09WQhQ3qk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-900 text-blue-100 text-xs font-semibold border border-blue-700 hover:bg-blue-800 transition">
                        <CheckCircle className="w-4 h-4 text-blue-400" /> Qlez video demo
                      </a>
                    </li>
                  ) : (
                    <li key={i} className="flex items-start gap-3 text-blue-100 text-base">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900/60 border border-blue-400"><CheckCircle className="w-4 h-4 text-blue-400" /></span>
                      <span>{item}</span>
                    </li>
                  )
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 