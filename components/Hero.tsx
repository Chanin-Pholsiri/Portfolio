"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowDown, Sparkles } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";

const socials = [
  { icon: GitHubIcon,   href: "https://github.com/chanin-pholsiri",              label: "GitHub"   },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/chanin-pholsiri",     label: "LinkedIn" },
  { icon: Mail,         href: "mailto:chaninpholsiri@gmail.com",                  label: "Email"    },
];

const tags = ["React", "Next.js", "TypeScript", "ASP.NET Core", "Spring Boot", "Docker"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center grid-bg overflow-hidden"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(6,182,212,0.09) 0%, transparent 70%)" }}
      />
      {/* Orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)", animation: "float 7s ease-in-out infinite" }} />
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 70%)", animation: "float 5s ease-in-out infinite reverse" }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center text-center">

        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 blur-xl opacity-30 scale-125" />
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-[3px] bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
              <Image
                src="/profile.jpg"
                alt="Chanin Pholsiri"
                width={160}
                height={160}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
          </div>
          {/* Online dot */}
          <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#080c14] animate-pulse" />
        </motion.div>

        {/* Open to work badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center gap-2 px-4 py-2 mb-5 rounded-full text-xs font-semibold
            bg-emerald-400/10 border border-emerald-400/30 text-emerald-400"
        >
          <Sparkles size={12} />
          Open to new opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-slate-100 mb-3"
        >
          Chanin <span className="gradient-text">Pholsiri</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35 }}
          className="text-lg md:text-xl text-slate-400 mb-2"
        >
          Full-Stack Software Engineer
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.45 }}
          className="text-slate-500 text-sm max-w-lg mx-auto mb-2 leading-relaxed"
        >
          Building scalable web applications end-to-end — from TypeScript-driven UIs to
          high-security financial APIs. 4+ years shipping production-grade products.
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.52 }}
          className="flex items-center justify-center gap-1.5 text-slate-600 text-xs mb-8"
        >
          <MapPin size={12} className="text-cyan-500" />
          Bangkok, Thailand
        </motion.div>

        {/* Tech tags */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.58 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.06 }}
              className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60
                hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-200 cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href="#contact"
            className="px-7 py-3 rounded-xl font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300
              transition-all duration-200 shadow-lg shadow-cyan-400/25 hover:shadow-cyan-400/40 hover:scale-105"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-7 py-3 rounded-xl font-semibold text-slate-300 glass border border-slate-600/40
              hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-200"
          >
            View Projects
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex items-center justify-center gap-4"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 rounded-xl glass border border-slate-700/40 text-slate-400
                hover:text-cyan-400 hover:border-cyan-400/30 hover:scale-110 transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
