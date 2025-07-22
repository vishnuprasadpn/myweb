"use client";
import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full py-16 bg-zinc-900 rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Contact Me</h2>
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-3 text-lg text-blue-100">
          <button
            onClick={() => window.location.href = 'mailto:your.email@example.com'}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow transition-all duration-200"
            aria-label="Mail Me"
          >
            <Mail className="text-white" />
            Mail Me
          </button>
        </div>
        <div className="flex items-center gap-3 text-lg text-blue-100">
          <Phone className="text-green-400" />
          <a href="tel:+1234567890" className="hover:underline text-blue-200">+1 234 567 890</a>
        </div>
        <p className="text-sm text-blue-300 mt-2">Please contact only if it&apos;s not spam 🙏</p>
      </div>
    </section>
  );
} 