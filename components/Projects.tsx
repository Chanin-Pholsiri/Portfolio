"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Lock, Layers } from "lucide-react";
import { GitHubIcon } from "./Icons";

const projects = [
  {
    title: "Financial Crime Prevention API System",
    description:
      "Confidential enterprise backend system developed under Thailand's Technology Crime Prevention and Suppression Act (B.E. 2566), Sections 6 & 7. Built Spring Boot microservices for Phase 2 — covering fund suspension APIs for mule account detection, conditional unsuspension workflows, and bank warrant / legal hold request processing. Designed with strict security controls, audit logging, and high-availability deployment for sensitive financial operations.",
    tags: ["Spring Boot", "Java", "Angular", "Jenkins", "Rancher", "Harbor", "PostgreSQL"],
    highlight: "Fintech · Confidential",
    highlightColor: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
    status: "Production",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
    github: null,
    demo: null,
    isPrivate: true,
    gradient: "from-cyan-500/10 to-blue-500/10",
    border: "border-cyan-400/20",
  },
  {
    title: "Enterprise Web Application Suite",
    description:
      "Full-stack enterprise applications for G-Able's clients — covering responsive Angular frontends, Node.js/Python APIs, and multi-environment Docker deployments. Led UI architecture and API validation.",
    tags: ["Angular", "TypeScript", "Node.js", ".NET Core", "Python", "Docker", "Bootstrap"],
    highlight: "Enterprise",
    highlightColor: "text-violet-400 border-violet-400/30 bg-violet-400/10",
    status: "Enterprise",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
    github: null,
    demo: null,
    isPrivate: true,
    gradient: "from-violet-500/10 to-purple-500/10",
    border: "border-violet-400/20",
  },
  {
    title: "Portfolio Website",
    description:
      "This very portfolio — built with Next.js App Router, Tailwind CSS v4, and Framer Motion. Features scroll-triggered animations, glassmorphism design, responsive layout, and optimized performance with SSR.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlight: "Open Source",
    highlightColor: "text-orange-400 border-orange-400/30 bg-orange-400/10",
    status: "Live",
    statusColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
    github: "https://github.com/chanin-pholsiri",
    demo: "#hero",
    isPrivate: false,
    gradient: "from-orange-500/10 to-amber-500/10",
    border: "border-orange-400/20",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="relative py-28 px-6 bg-slate-950/40" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
            A selection of projects I've architected and shipped across fintech,
            enterprise, and personal domains.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
              className={`relative glass rounded-2xl overflow-hidden border ${project.border} group hover:scale-[1.01] transition-transform duration-300`}
            >
              {/* Gradient accent top bar */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${project.gradient.replace("/10", "/60")}`} />

              {/* Gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} pointer-events-none`} />

              <div className="relative p-7">
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} border ${project.border} flex items-center justify-center shrink-0`}>
                    <Layers size={22} className="text-slate-300" />
                  </div>

                  <div className="flex-1">
                    {/* Title row */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-slate-100 font-bold text-xl">{project.title}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${project.highlightColor}`}>
                        {project.highlight}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${project.statusColor}`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3">
                      {project.isPrivate ? (
                        <div className="flex items-center gap-1.5 text-slate-600 text-xs">
                          <Lock size={13} />
                          <span>Private / Enterprise</span>
                        </div>
                      ) : (
                        <>
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
                            >
                              <GitHubIcon size={14} />
                              Source
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
                            >
                              <ExternalLink size={13} />
                              Live Demo
                            </a>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/chanin-pholsiri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-slate-300 glass border border-slate-700/50 hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-200"
          >
            <GitHubIcon size={15} />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
