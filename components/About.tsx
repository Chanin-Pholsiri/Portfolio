"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Container, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Architecture",
    desc: "TypeScript-first design with React, Next.js & Angular — SSR, component systems, and pixel-perfect UIs.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    desc: "Production APIs with ASP.NET Core, Spring Boot & Node.js. Clean architecture, SOLID, secure auth.",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
  {
    icon: Container,
    title: "DevOps & Deployment",
    desc: "Docker, Kubernetes, Nginx, CI/CD — comfortable taking features from code to production reliably.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Users,
    title: "Agile Collaboration",
    desc: "Scrum ceremonies, code reviews, cross-functional teams, and mentoring junior developers.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-14">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-5">
              I'm a{" "}
              <span className="text-cyan-400 font-semibold">Mid-Level Full-Stack Software Engineer</span>{" "}
              based in Bangkok, Thailand, with 4+ years turning complex requirements into
              scalable, maintainable software — across fintech, enterprise, and startup environments.
            </p>
            <p className="text-slate-400 leading-relaxed mb-5">
              I work comfortably across the entire stack: architecting TypeScript-driven UIs in
              React and Angular, building financial-grade APIs with ASP.NET Core and Spring Boot,
              and shipping to production via Docker and Nginx. I care deeply about code quality,
              security, and performance.
            </p>
            <p className="text-slate-400 leading-relaxed mb-7">
              Currently at{" "}
              <span className="text-slate-200 font-semibold">Sirisoft Public Company Limited</span>,
              where I lead frontend architecture and build backend services for sensitive financial
              enforcement workflows — including fund suspension, account release APIs, and bank
              warrant processing systems.
            </p>

            {/* Key strengths */}
            <div className="flex flex-wrap gap-2">
              {[
                "TypeScript-first", "Clean Architecture", "Financial Domain",
                "Performance Optimization", "Team Leadership", "Agile/Scrum",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Code snippet */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="glass rounded-2xl overflow-hidden" style={{ boxShadow: "0 0 40px rgba(6,182,212,0.1)" }}>
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/60 border-b border-slate-700/40">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs text-slate-500 font-mono">chanin.profile.ts</span>
              </div>
              {/* Code body */}
              <div className="p-5 font-mono text-sm leading-relaxed">
                <div>
                  <span className="text-purple-400">const </span>
                  <span className="text-cyan-300">chanin</span>
                  <span className="text-slate-400"> = </span>
                  <span className="text-slate-300">{"{"}</span>
                </div>
                {[
                  { key: "name",        val: '"Chanin Pholsiri"',       valClass: "text-green-300" },
                  { key: "role",        val: '"Full-Stack Engineer"',    valClass: "text-green-300" },
                  { key: "experience",  val: '"4+ years"',              valClass: "text-green-300" },
                  { key: "domain",      val: '"Fintech & Enterprise"',  valClass: "text-green-300" },
                  { key: "location",    val: '"Bangkok 🇹🇭"',            valClass: "text-green-300" },
                  { key: "openToWork",  val: 'true',                    valClass: "text-cyan-300"  },
                ].map(({ key, val, valClass }) => (
                  <div key={key} className="pl-5">
                    <span className="text-blue-300">{key}</span>
                    <span className="text-slate-400">: </span>
                    <span className={valClass}>{val}</span>
                    <span className="text-slate-400">,</span>
                  </div>
                ))}
                <div><span className="text-slate-300">{"}"}</span><span className="text-slate-400">;</span></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map(({ icon: Icon, title, desc, color, bg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
              className="glass rounded-xl p-5 group hover:scale-[1.02] transition-all duration-300 cursor-default"
            >
              <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <Icon size={20} className={color} />
              </div>
              <h3 className="text-slate-100 font-semibold text-sm mb-2">{title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
