"use client";

import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import CodeWindow from "./CodeWindow";

const socials = [
  { icon: GitHubIcon,   href: "https://github.com/chanin-pholsiri",          label: "GitHub"   },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/chanin-pholsiri", label: "LinkedIn" },
  { icon: Mail,         href: "mailto:chaninpholsiri@gmail.com",              label: "Email"    },
];

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const buttonBase =
  "inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium uppercase tracking-wider press focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-28 md:pt-32 pb-16 px-6">
      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="lg:pt-8">
          <motion.h1
            {...rise(0)}
            className="text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold leading-tight lg:leading-[3.4rem] text-slate-100"
          >
            Hi, I&apos;m <span className="text-cyan-400">Chanin Pholsiri</span>.
          </motion.h1>
          <motion.p {...rise(0.04)} className="mt-5 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl">
            Full-stack engineer building web apps and enterprise systems, from business websites
            to secure fintech platforms. 5+ years with React, Next.js, Angular, Spring Boot and .NET.
          </motion.p>

          <motion.ul {...rise(0.08)} className="flex items-center gap-5 my-10">
            {socials.map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex text-slate-400 hover:text-cyan-400 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-300"
                >
                  <Icon size={26} />
                </a>
              </li>
            ))}
          </motion.ul>

          <motion.div {...rise(0.16)} className="flex flex-wrap items-center gap-3">
            <a href="#contact" className={`${buttonBase} text-slate-200 border border-slate-700 hover:border-slate-500 hover:bg-slate-800/50`}>
              Contact me
              <Mail size={16} aria-hidden />
            </a>
            <a href="/Chanin_Pholsiri_Resume.pdf" download className={`${buttonBase} text-slate-950 bg-cyan-400 hover:bg-cyan-300`}>
              Get resume
              <Download size={16} aria-hidden />
            </a>
          </motion.div>
        </div>

        <motion.div {...rise(0.12)}>
          <CodeWindow
            title="chanin.ts"
            name="coder"
            entries={{
              name: "Chanin Pholsiri",
              skills: ["React", "Next.js", "TypeScript", "Angular", "ASP.NET Core", "Spring Boot", "Docker", "Nginx", "PostgreSQL"],
              experience: "5+ years",
              domain: ["Web Apps", "Enterprise Systems", "Fintech"],
              location: "Bangkok, Thailand",
              openTo: ["Remote", "Relocation"],
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
