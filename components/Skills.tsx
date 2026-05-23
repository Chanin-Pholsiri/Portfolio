"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Server, Container, Database, Wrench } from "lucide-react";

const skillGroups = [
  {
    icon: Monitor,
    category: "Frontend",
    accentClass: "text-cyan-400",
    glowColor: "rgba(6,182,212,0.12)",
    borderColor: "border-cyan-400/20",
    badgeHover: "hover:border-cyan-400/50 hover:text-cyan-300 hover:bg-cyan-400/10",
    skills: [
      { name: "React", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "Angular", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "Vue.js", level: "Proficient" },
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Bootstrap", level: "Proficient" },
      { name: "HTML5 / CSS3", level: "Expert" },
    ],
  },
  {
    icon: Server,
    category: "Backend",
    accentClass: "text-violet-400",
    glowColor: "rgba(139,92,246,0.12)",
    borderColor: "border-violet-400/20",
    badgeHover: "hover:border-violet-400/50 hover:text-violet-300 hover:bg-violet-400/10",
    skills: [
      { name: "ASP.NET Core", level: "Expert" },
      { name: "Spring Boot", level: "Proficient" },
      { name: "Node.js / Express", level: "Expert" },
      { name: "Python", level: "Proficient" },
      { name: "C# / .NET", level: "Expert" },
      { name: "RESTful API Design", level: "Expert" },
      { name: "JWT Authentication", level: "Proficient" },
      { name: "SOLID Principles", level: "Proficient" },
    ],
  },
  {
    icon: Container,
    category: "DevOps & Infra",
    accentClass: "text-emerald-400",
    glowColor: "rgba(16,185,129,0.12)",
    borderColor: "border-emerald-400/20",
    badgeHover: "hover:border-emerald-400/50 hover:text-emerald-300 hover:bg-emerald-400/10",
    skills: [
      { name: "Docker", level: "Expert" },
      { name: "Kubernetes", level: "Proficient" },
      { name: "Nginx", level: "Proficient" },
      { name: "CI/CD Pipelines", level: "Proficient" },
      { name: "On-Premise Deployment", level: "Proficient" },
      { name: "Linux / macOS", level: "Expert" },
      { name: "SSL / Load Balancing", level: "Proficient" },
    ],
  },
  {
    icon: Database,
    category: "Databases",
    accentClass: "text-orange-400",
    glowColor: "rgba(249,115,22,0.12)",
    borderColor: "border-orange-400/20",
    badgeHover: "hover:border-orange-400/50 hover:text-orange-300 hover:bg-orange-400/10",
    skills: [
      { name: "PostgreSQL", level: "Proficient" },
      { name: "MySQL", level: "Proficient" },
      { name: "SQL Server", level: "Proficient" },
      { name: "MongoDB", level: "Familiar" },
    ],
  },
];

const tools = [
  "Git", "GitHub", "GitLab", "Jira", "Postman",
  "VS Code", "IntelliJ IDEA", "Adobe XD",
];

const levelConfig: Record<string, { label: string; dotClass: string }> = {
  Expert:    { label: "Expert",     dotClass: "bg-cyan-400" },
  Proficient:{ label: "Proficient", dotClass: "bg-violet-400" },
  Familiar:  { label: "Familiar",   dotClass: "bg-slate-500" },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative py-28 px-6 bg-slate-950/40" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Technical Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Core Competencies
          </h2>
          {/* Legend */}
          <div className="flex items-center justify-center gap-5 mt-4">
            {Object.entries(levelConfig).map(([, { label, dotClass }]) => (
              <div key={label} className="flex items-center gap-1.5 text-xs text-slate-500">
                <span className={`w-2 h-2 rounded-full ${dotClass}`} />
                {label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + gi * 0.1 }}
              className={`glass rounded-2xl p-6 border ${group.borderColor}`}
              style={{ boxShadow: `0 0 30px ${group.glowColor}` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-5">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center`}
                  style={{ background: group.glowColor.replace("0.12", "0.2") }}>
                  <group.icon size={16} className={group.accentClass} />
                </div>
                <h3 className={`text-sm font-bold tracking-widest uppercase ${group.accentClass}`}>
                  {group.category}
                </h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => {
                  const cfg = levelConfig[skill.level];
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.2 + gi * 0.08 + si * 0.04 }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                        bg-slate-800/60 text-slate-300 border border-slate-700/50
                        ${group.badgeHover} transition-all duration-200 cursor-default`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${cfg.dotClass}`} />
                      {skill.name}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass rounded-2xl p-6"
        >
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg bg-slate-700/40 flex items-center justify-center">
              <Wrench size={15} className="text-slate-400" />
            </div>
            <h3 className="text-sm font-bold tracking-widest uppercase text-slate-400">
              Tools & Workflow
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.55 + i * 0.04 }}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-400
                  border border-slate-700/50 hover:border-slate-500 hover:text-slate-200
                  transition-all duration-200 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
