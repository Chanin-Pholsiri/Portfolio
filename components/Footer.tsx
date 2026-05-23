"use client";

import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/60 py-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Chanin Pholsiri. Built with Next.js & Tailwind CSS.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/chaninpholsiri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon size={16} />
          </a>
          <a
            href="https://linkedin.com/in/chaninpholsiri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={16} />
          </a>
          <a
            href="mailto:chaninpholsiri@gmail.com"
            className="text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
