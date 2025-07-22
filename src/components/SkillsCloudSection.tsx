"use client";
import React, { useEffect, useRef, useState } from "react";
import cloud, { Word } from "d3-cloud";

const skills = [
  { text: "JavaScript", value: 90 },
  { text: "Styled-Components", value: 40 },
  { text: "Next.JS", value: 38 },
  { text: "Angular", value: 36 },
  { text: "Azure", value: 34 },
  { text: "React", value: 32 },
  { text: "Git", value: 32 },
  { text: "Node", value: 30 },
  { text: "GraphSQL", value: 28 },
  { text: "API", value: 28 },
  { text: "PHP", value: 26 },
  { text: "Java", value: 26 },
  { text: "Python", value: 22 },
  { text: "SQL", value: 22 },
  { text: "Django", value: 20 },
  { text: "HTML", value: 20 },
  { text: "CSS", value: 20 },
  { text: "Type Script", value: 20 },
  { text: "Figma", value: 18 },
  { text: "Photoshop", value: 18 },
  { text: "Visual Studio", value: 16 },
];

const WIDTH = 540;
const HEIGHT = 420;

export default function SkillsCloudSection() {
  const svgRef = useRef<SVGSVGElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; text: string } | null>(null);
  const [modal, setModal] = useState<{ text: string } | null>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  // Intersection Observer for entrance animation
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Parallax effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setParallax({ x, y });
  };
  const handleMouseLeave = () => setParallax({ x: 0, y: 0 });

  useEffect(() => {
    const layout = cloud()
      .size([WIDTH, HEIGHT])
      .words(skills.map((d) => ({ ...d })))
      .padding(28)
      .rotate(() => 0)
      .font("sans-serif")
      .fontWeight("bold")
      .fontSize((d: Word) => 6 + ((d as { value: number }).value) * 0.5)
      .on("end", (words: Word[]) => {
        const svg = svgRef.current;
        if (!svg) return;
        while (svg.firstChild) svg.removeChild(svg.firstChild);
        // Enhanced animation style
        const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
        style.textContent = `
          @keyframes fadeFloatScale {
            0% { opacity: 0; transform: translateY(24px) scale(0.7); }
            40% { opacity: 1; transform: translateY(-8px) scale(1.08); }
            60% { opacity: 1; transform: translateY(4px) scale(0.98); }
            80% { opacity: 1; transform: translateY(-2px) scale(1.04); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          text.word-cloud-anim {
            opacity: 0;
            transition: fill 0.3s, filter 0.3s, transform 0.3s;
            animation: fadeFloatScale 1.2s cubic-bezier(0.4,0,0.2,1) forwards;
            cursor: pointer;
          }
          text.word-cloud-anim:hover {
            filter: drop-shadow(0 0 8px #38bdf8);
            fill: url(#cloud-gradient);
            transform: scale(1.22) translateY(-6px);
          }
        `;
        svg.appendChild(style);
        // Add a gradient definition for hover effect
        const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        defs.innerHTML = `
          <linearGradient id="cloud-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#38bdf8"/>
            <stop offset="100%" stop-color="#6366f1"/>
          </linearGradient>
        `;
        svg.appendChild(defs);
        // Draw words with animation and interactivity
        words.forEach((word: Word, i: number) => {
          const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
          text.setAttribute("x", ((word.x ?? 0) + WIDTH / 2).toString());
          text.setAttribute("y", ((word.y ?? 0) + HEIGHT / 2).toString());
          text.setAttribute("font-size", `${word.size ?? 6}`);
          text.setAttribute("font-family", "sans-serif");
          text.setAttribute("font-weight", "bold");
          text.setAttribute("fill", "#fff");
          text.setAttribute("opacity", (0.7 + 0.3 * ((word.size ?? 18) / 60)).toString());
          text.setAttribute("text-anchor", "middle");
          text.setAttribute("style", `user-select:none; pointer-events:none; animation-delay:${i * 0.07}s;`);
          text.setAttribute("class", "word-cloud-anim");
          text.innerHTML = word.text ?? "";
          svg.appendChild(text);
        });
      });
    layout.start();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full py-24 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{
        background: "linear-gradient(120deg, #181824 60%, #23233a 100%)",
        boxShadow: visible ? "0 8px 32px 0 rgba(31, 38, 135, 0.37)" : undefined,
        borderRadius: 32,
        position: "relative",
        overflow: "visible",
        transition: "box-shadow 0.4s, background 0.4s, opacity 0.6s, transform 0.6s",
      }}
      tabIndex={0}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
        {/* Left Side */}
        <div className="md:w-1/2 w-full flex flex-col items-start justify-center mb-10 md:mb-0 group">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-300 group-hover:text-blue-400 group-hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #38bdf8 0%, #6366f1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              transition: "background 0.4s, color 0.4s, transform 0.3s",
            }}
          >
            Skills & Technologies
          </h2>
          <p className="text-blue-100 text-lg max-w-lg transition-all duration-300 group-hover:text-blue-300 group-hover:scale-105">
            Here are some of the technologies, frameworks, and tools I&apos;ve worked with over the years—spanning frontend, backend, cloud, and design.
          </p>
          <button
            className="mt-6 px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow-lg hover:scale-105 hover:from-blue-400 hover:to-indigo-400 transition-all duration-300"
            onClick={() => setModal({ text: "Download Resume coming soon!" })}
          >
            Download Resume
          </button>
        </div>
        {/* Right Side: D3 Word Cloud */}
        <div
          className="md:w-1/2 w-full flex items-center justify-center min-h-[420px] h-[420px] md:h-[520px] overflow-visible relative"
          style={{
            perspective: 800,
            transform: `rotateY(${parallax.x}deg) rotateX(${-parallax.y}deg)`,
            transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
          }}
        >
          <div className="relative w-full max-w-[540px] h-[420px] md:h-[520px] flex items-center justify-center mx-auto">
            <svg ref={svgRef} width={WIDTH} height={HEIGHT} className="w-full h-full block mx-auto" style={{ display: 'block' }} />
          </div>
        </div>
      </div>
    </section>
  );
} 