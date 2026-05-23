"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Award, Star, BookOpen } from "lucide-react";

const levelColor: Record<string, { text: string; bg: string; border: string; dot: string }> = {
  Basic:        { text: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/30", dot: "bg-emerald-400" },
  Intermediate: { text: "text-cyan-400",    bg: "bg-cyan-400/10",    border: "border-cyan-400/30",    dot: "bg-cyan-400"    },
  Advanced:     { text: "text-violet-400",  bg: "bg-violet-400/10",  border: "border-violet-400/30",  dot: "bg-violet-400"  },
  Role:         { text: "text-amber-400",   bg: "bg-amber-400/10",   border: "border-amber-400/30",   dot: "bg-amber-400"   },
};

// Featured role certs shown at the top
const featured = [
  {
    name: "Software Engineer",
    level: "Role",
    url: "https://www.hackerrank.com/certificates/f81195877e7d",
    topics: "Problem Solving · SQL · REST API",
    desc: "Comprehensive role-based certification validating full software engineering skills.",
  },
  {
    name: "Software Engineer Intern",
    level: "Role",
    url: "https://www.hackerrank.com/certificates/dbc04c586bc1",
    topics: "Problem Solving · SQL",
    desc: "Entry-level role certification covering core engineering fundamentals.",
  },
];

const groups = [
  {
    category: "Languages",
    certs: [
      { name: "Python",     level: "Basic",        url: "https://www.hackerrank.com/certificates/08fd950d41d6", topics: "Scalar Types · Control Flow · Collections · Classes" },
      { name: "JavaScript", level: "Basic",        url: "https://www.hackerrank.com/certificates/0ea5d24fb58b", topics: "Functions · Hoisting · Scope · Inheritance · Events" },
      { name: "JavaScript", level: "Intermediate", url: "https://www.hackerrank.com/certificates/b9b1c65e9f4d", topics: "Design Patterns · Memory Management · Concurrency · Event Loop" },
      { name: "Java",       level: "Basic",        url: "https://www.hackerrank.com/certificates/8b2c03089ace", topics: "Classes · Data Structures · Inheritance · Exception Handling" },
      { name: "C#",         level: "Basic",        url: "https://www.hackerrank.com/certificates/ea3458ac0203", topics: "Types · Basic OOP · Properties · Collections · Exception Handling" },
    ],
  },
  {
    category: "Frontend",
    certs: [
      { name: "React",   level: "Basic",        url: "https://www.hackerrank.com/certificates/a8a6180219be", topics: "Routing · Rendering · State Management · Events · Form Validation" },
      { name: "Angular", level: "Basic",        url: "https://www.hackerrank.com/certificates/ea395d195121", topics: "Components · TypeScript · Two-Way Binding · Form Validation" },
      { name: "Angular", level: "Intermediate", url: "https://www.hackerrank.com/certificates/50ac4a95a1bc", topics: "Routing · NgModules · Observables · Dependency Injection · APIs" },
      { name: "CSS",     level: "Basic",        url: "https://www.hackerrank.com/certificates/e4e34399d5a0", topics: "Cascading · Inheritance · Text Styling · Layouts · Box Model" },
    ],
  },
  {
    category: "Database",
    certs: [
      { name: "SQL", level: "Basic",        url: "https://www.hackerrank.com/certificates/3c286e7f0520", topics: "Simple Queries · Relationships · Aggregators" },
      { name: "SQL", level: "Intermediate", url: "https://www.hackerrank.com/certificates/a306bc61fea6", topics: "Complex Joins · Unions · Sub-queries" },
      { name: "SQL", level: "Advanced",     url: "https://www.hackerrank.com/certificates/34fa6a778098", topics: "Query Optimization · Indexing · Window Functions · Pivots" },
    ],
  },
  {
    category: "Problem Solving & API",
    certs: [
      { name: "Problem Solving", level: "Basic",        url: "https://www.hackerrank.com/certificates/0af3e11fd84d", topics: "Arrays · Strings · Sorting · Searching" },
      { name: "Problem Solving", level: "Intermediate", url: "https://www.hackerrank.com/certificates/d607c04bca0e", topics: "HashMaps · Stacks · Queues · Optimal Solutions" },
      { name: "REST API",        level: "Intermediate", url: "https://www.hackerrank.com/certificates/3191ac268947", topics: "API Data Retrieval · Parameters · Pagination" },
    ],
  },
];

function FutureSkillLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path d="M8 20 L20 8 L32 20 L20 32 Z" fill="url(#fs-grad)" />
      <defs>
        <linearGradient id="fs-grad" x1="8" y1="8" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function HackerRankLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="currentColor">
      <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm19.7 64.5c-.3.8-1 1.4-1.9 1.6-.5.1-1 .1-1.5-.1-.5-.2-.9-.5-1.2-.9l-5.8-9.4H39.7l-5.8 9.4c-.3.5-.8.8-1.3.9-.5.1-1 .1-1.5-.1-.9-.3-1.5-.9-1.9-1.6-.3-.8-.3-1.7.1-2.4l14.2-23.1v-6.9h-4.3c-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7h14.1c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7h-4.3V39l14.2 23.1c.5.7.5 1.6.2 2.4zM50 43.1l4.7 7.7h-9.4L50 43.1z"/>
    </svg>
  );
}

export default function Certificates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certificates" className="relative py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Certifications
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            HackerRank Certificates
          </h2>
          <div className="flex items-center justify-center gap-5 mt-4">
            {Object.entries(levelColor).map(([level, cfg]) => (
              <div key={level} className="flex items-center gap-1.5 text-xs text-slate-500">
                <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
                {level}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Featured Role Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Star size={14} className="text-amber-400" />
            <span className="text-xs font-bold tracking-widest uppercase text-amber-400">
              Role Certificates
            </span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {featured.map((cert, i) => {
              const cfg = levelColor[cert.level];
              return (
                <motion.a
                  key={cert.url}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.1 }}
                  className="relative glass rounded-2xl p-5 border border-amber-400/20 group
                    hover:border-amber-400/40 hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                  style={{ boxShadow: "0 0 30px rgba(251,191,36,0.08)" }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00EA64]/10 border border-[#00EA64]/20
                      flex items-center justify-center shrink-0 text-[#00EA64]">
                      <HackerRankLogo size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-slate-100 font-bold text-base">{cert.name}</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${cfg.text} ${cfg.bg} ${cfg.border}`}>
                          {cert.level}
                        </span>
                      </div>
                      <p className="text-slate-500 text-xs mb-2">{cert.topics}</p>
                      <p className="text-slate-600 text-xs leading-relaxed">{cert.desc}</p>
                    </div>
                    <ExternalLink size={13} className="text-slate-700 group-hover:text-amber-400 transition-colors shrink-0 mt-1" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Skill Certificates grouped */}
        <div className="grid md:grid-cols-2 gap-5">
          {groups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + gi * 0.1 }}
              className="glass rounded-2xl p-5"
            >
              <div className="flex items-center gap-2 mb-4">
                <Award size={14} className="text-slate-500" />
                <h3 className="text-xs font-bold tracking-widest uppercase text-slate-500">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-col gap-2.5">
                {group.certs.map((cert, ci) => {
                  const cfg = levelColor[cert.level];
                  return (
                    <motion.a
                      key={cert.url}
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.35, delay: 0.3 + gi * 0.08 + ci * 0.06 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-700/40
                        hover:border-slate-600/60 hover:bg-slate-800/70 transition-all duration-200 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#00EA64]/10 border border-[#00EA64]/20
                        flex items-center justify-center shrink-0 text-[#00EA64]">
                        <HackerRankLogo size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-slate-200 font-semibold text-sm">{cert.name}</span>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium border shrink-0 ${cfg.text} ${cfg.bg} ${cfg.border}`}>
                            {cert.level}
                          </span>
                        </div>
                        <p className="text-slate-600 text-xs mt-0.5 truncate">{cert.topics}</p>
                      </div>
                      <ExternalLink size={12} className="text-slate-700 group-hover:text-cyan-400 transition-colors shrink-0" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FutureSkill Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10"
        >
          <div className="flex items-center gap-2 mb-5">
            <BookOpen size={14} className="text-violet-400" />
            <span className="text-xs font-bold tracking-widest uppercase text-violet-400">
              FutureSkill — Completion Certificates
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Docker */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.65 }}
              className="glass rounded-2xl p-5 border border-cyan-400/15"
            >
              <p className="text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3">Docker</p>
              {[
                { name: "Docker Hands-On Step-by-Step (2 hrs)", date: "08/09/2024", url: "https://app.futureskill.co/api/certificate?courseId=29&userId=206945" },
              ].map((c) => (
                <a key={c.url} href={c.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-700/40
                    hover:border-cyan-400/40 hover:bg-slate-800/70 transition-all duration-200 group">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                    <FutureSkillLogo size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-200 font-semibold text-sm">{c.name}</p>
                    <p className="text-slate-600 text-xs mt-0.5">{c.date}</p>
                  </div>
                  <ExternalLink size={12} className="text-slate-700 group-hover:text-cyan-400 transition-colors shrink-0" />
                </a>
              ))}
            </motion.div>

            {/* DevOps */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.72 }}
              className="glass rounded-2xl p-5 border border-emerald-400/15"
            >
              <p className="text-xs font-bold tracking-widest uppercase text-emerald-400 mb-3">DevOps</p>
              <div className="flex flex-col gap-2">
                {[
                  { name: "Getting Started with DevOps",              date: "14/09/2024", url: "https://app.futureskill.co/api/certificate?courseId=490&userId=206945" },
                  { name: "Hands-On DevOps",                          date: "15/09/2024", url: "https://app.futureskill.co/api/certificate?courseId=500&userId=206945" },
                  { name: "Monitoring & Logging for DevOps",          date: "31/10/2024", url: "https://app.futureskill.co/api/certificate?courseId=501&userId=206945" },
                  { name: "Advance Topics Beyond DevOps",             date: "31/10/2024", url: "https://app.futureskill.co/api/certificate?courseId=502&userId=206945" },
                ].map((c) => (
                  <a key={c.url} href={c.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-700/40
                      hover:border-emerald-400/40 hover:bg-slate-800/70 transition-all duration-200 group">
                    <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                      <FutureSkillLogo size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-200 font-semibold text-sm leading-tight">{c.name}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{c.date}</p>
                    </div>
                    <ExternalLink size={12} className="text-slate-700 group-hover:text-emerald-400 transition-colors shrink-0" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* AWS Cloud — spans full width */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.8 }}
              className="glass rounded-2xl p-5 border border-orange-400/15 md:col-span-2"
            >
              <p className="text-xs font-bold tracking-widest uppercase text-orange-400 mb-3">AWS Cloud</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  { name: "Getting Started with Cloud & AWS Cloud",     date: "06/12/2024", url: "https://app.futureskill.co/api/certificate?courseId=275&userId=206945" },
                  { name: "Introduction to AWS Core Services",           date: "05/12/2024", url: "https://app.futureskill.co/api/certificate?courseId=277&userId=206945" },
                  { name: "AWS Network, Security & Management Services", date: "05/12/2024", url: "https://app.futureskill.co/api/certificate?courseId=278&userId=206945" },
                  { name: "Workshop: Deploy Web App on EC2 (AWS)",       date: "31/10/2024", url: "https://app.futureskill.co/api/certificate?courseId=279&userId=206945" },
                ].map((c) => (
                  <a key={c.url} href={c.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-700/40
                      hover:border-orange-400/40 hover:bg-slate-800/70 transition-all duration-200 group">
                    <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                      <FutureSkillLogo size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-200 font-semibold text-sm leading-tight">{c.name}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{c.date}</p>
                    </div>
                    <ExternalLink size={12} className="text-slate-700 group-hover:text-orange-400 transition-colors shrink-0" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.88 }}
          className="mt-8 glass rounded-2xl p-5 flex flex-wrap justify-center gap-8"
        >
          {[
            { value: "17", label: "HackerRank" },
            { value: "9",  label: "FutureSkill" },
            { value: "26", label: "Total Certs" },
            { value: "2",  label: "Role Certs" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold gradient-text">{value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Profile links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.95 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          <a
            href="https://www.hackerrank.com/profile/chaninpholsiri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium
              text-[#00EA64] glass border border-[#00EA64]/30 hover:bg-[#00EA64]/10 transition-all duration-200"
          >
            <HackerRankLogo size={15} />
            HackerRank Profile
          </a>
          <a
            href="https://app.futureskill.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium
              text-violet-400 glass border border-violet-400/30 hover:bg-violet-400/10 transition-all duration-200"
          >
            <FutureSkillLogo size={15} />
            FutureSkill Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
