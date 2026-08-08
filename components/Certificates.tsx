"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Star } from "lucide-react";

// Featured role certs — the most relevant credentials to show at a glance.
// Full list (26 certs across languages, frontend, database, DevOps, AWS,
// etc.) is one click away via the profile links below.
const featured = [
  {
    name: "Software Engineer",
    url: "https://www.hackerrank.com/certificates/f81195877e7d",
    topics: "Problem Solving · SQL · REST API",
    desc: "Comprehensive role-based certification validating full software engineering skills.",
  },
  {
    name: "Software Engineer Intern",
    url: "https://www.hackerrank.com/certificates/dbc04c586bc1",
    topics: "Problem Solving · SQL",
    desc: "Entry-level role certification covering core engineering fundamentals.",
  },
];

const stats = [
  { value: "17", label: "HackerRank" },
  { value: "9", label: "FutureSkill" },
  { value: "26", label: "Total Certs" },
  { value: "2", label: "Role Certs" },
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
      <div className="max-w-4xl mx-auto">

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
          <p className="text-slate-500 max-w-lg mx-auto text-sm leading-relaxed">
            26 certificates across languages, frameworks, databases, and cloud —
            role certifications highlighted below, full list on my HackerRank profile.
          </p>
        </motion.div>

        {/* Featured Role Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <Star size={14} className="text-cyan-400" />
            <span className="text-xs font-bold tracking-widest uppercase text-cyan-400">
              Role Certificates
            </span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {featured.map((cert, i) => (
              <motion.a
                key={cert.url}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.1 }}
                className="relative glass rounded-2xl p-5 border border-cyan-400/20 group
                  hover:border-cyan-400/40 hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                style={{ boxShadow: "0 0 30px rgba(6,182,212,0.08)" }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00EA64]/10 border border-[#00EA64]/20
                    flex items-center justify-center shrink-0 text-[#00EA64]">
                    <HackerRankLogo size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-slate-100 font-bold text-base">{cert.name}</span>
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium border text-cyan-400 bg-cyan-400/10 border-cyan-400/30">
                        Role
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs mb-2">{cert.topics}</p>
                    <p className="text-slate-600 text-xs leading-relaxed">{cert.desc}</p>
                  </div>
                  <ExternalLink size={13} className="text-slate-700 group-hover:text-cyan-400 transition-colors shrink-0 mt-1" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass rounded-2xl p-5 flex flex-wrap justify-center gap-8"
        >
          {stats.map(({ value, label }) => (
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
          transition={{ duration: 0.5, delay: 0.4 }}
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
