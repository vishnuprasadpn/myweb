"use client";
import { GraduationCap } from "lucide-react";

const education = [
  { degree: "Master of Computer Applications (MCA)", status: "Pursuing" },
  { degree: "Bachelor of Computer Applications (BCA)", status: "Completed" }
];

export default function ProjectsSection() {
  return (
    <section className="w-full py-16 bg-zinc-900 rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-8 text-white mt-20">Education</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {education.map((e, i) => (
          <div key={i} className="bg-zinc-900 rounded-xl shadow-lg p-6 border border-zinc-700 flex items-center gap-4">
            <GraduationCap className="w-8 h-8 text-blue-400" />
            <div>
              <div className="font-bold text-white text-lg">{e.degree}</div>
              <div className="text-blue-100 text-sm">{e.status}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 