"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Developer",
    company: "Sirisoft Public Company Limited",
    period: "Jun 2025 – Present",
    current: true,
    tags: ["React", "Next.js", "Angular", "ASP.NET Core", "Spring Boot", "Docker", "Nginx"],
    bullets: [
      "Architect and develop scalable full-stack applications using React, Next.js, Angular, TypeScript, and ASP.NET Core",
      "Design and implement RESTful APIs using .NET with clean architecture and SOLID principles",
      "Develop and maintain backend services for financial enforcement workflows using Spring Boot, including APIs for fund suspension (account freezing) related to mule accounts, account unsuspension and conditional release handling, and bank warrant / legal hold request processing",
      "Lead front-end architecture using TypeScript-first design, enforcing strict typing and reusable component patterns",
      "Implement SSR and performance optimization strategies, improving application load speed and user experience",
      "Containerize applications using Docker for development, staging, and production environments",
      "Configure and optimize Nginx reverse proxy, managing routing, SSL, caching, and load balancing",
      "Ensure secure API authentication, authorization, and production stability for sensitive financial operations",
      "Participate in sprint planning, backlog grooming, and Agile ceremonies via Jira",
      "Conduct code reviews and contribute to technical design discussions",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "G-Able Public Company Limited",
    period: "Dec 2023 – May 2025",
    current: false,
    tags: ["Angular", "TypeScript", "Node.js", ".NET Core", "Docker", "Bootstrap"],
    bullets: [
      "Developed enterprise-level front-end applications using Angular and TypeScript",
      "Built backend services using Node.js, Python, C#, and .NET Core",
      "Designed responsive UI with Bootstrap and Tailwind CSS",
      "Deployed applications using Docker containers across multiple environments",
      "Collaborated with cross-functional teams to ensure timely feature delivery",
      "Performed manual testing and API validation to ensure system reliability",
    ],
  },
  {
    title: "Programmer",
    company: "INTELLIGIST COMPANY LIMITED",
    period: "Jun 2021 – Nov 2023",
    current: false,
    tags: ["Vue.js", "Angular", "Docker", "Adobe XD"],
    bullets: [
      "Developed web applications using Vue.js and Angular",
      "Designed UI/UX prototypes using Adobe XD",
      "Managed deployment processes using Docker",
      "Provided mentoring and knowledge sharing for junior developers",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="relative py-28 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Career
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            Professional Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-cyan-400/20 to-transparent" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
                className="relative pl-14 md:pl-20"
              >
                {/* Dot */}
                <div
                  className={`absolute left-[18px] md:left-[26px] top-1.5 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    exp.current
                      ? "border-cyan-400 bg-cyan-400/20 animate-pulse-glow"
                      : "border-slate-600 bg-slate-800"
                  }`}
                >
                  {exp.current && (
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  )}
                </div>

                <div className="glass rounded-2xl p-6 glow-hover transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <Briefcase size={15} className="text-cyan-400 shrink-0" />
                        <h3 className="text-slate-100 font-bold text-lg leading-tight">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-cyan-400/15 text-cyan-400 border border-cyan-400/30">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-slate-400 text-sm mt-0.5 ml-5">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs shrink-0">
                      <Calendar size={13} />
                      {exp.period}
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-1.5 mb-4">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2 text-sm text-slate-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500/60 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/80 text-slate-400 border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
