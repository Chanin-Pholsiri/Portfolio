"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const nearBottom =
        window.scrollY + window.innerHeight >= document.body.scrollHeight - 80;
      if (nearBottom) {
        setActive("#contact");
        return;
      }

      const sections = links.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    // Run once on mount: after a refresh the browser restores the scroll
    // position without firing a scroll event, so the nav would stay transparent.
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled || open ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-mono text-sm text-slate-200 hover:text-cyan-400 transition-colors">
          chanin<span className="text-cyan-400">.</span>dev
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 ml-auto mr-4">
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`px-3 py-1.5 text-sm transition-colors ${
                    isActive ? "text-slate-100" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Resume download */}
        <a
          href="/Chanin_Pholsiri_Resume.pdf"
          download
          className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-cyan-400
            border border-cyan-400/40 rounded-lg hover:bg-cyan-400/10 press"
        >
          <Download size={13} />
          Resume
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-cyan-400 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-nav border-t border-slate-800 transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] starting:opacity-0 starting:-translate-y-1.5">
          <ul className="px-6 py-4 flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block text-sm py-1 transition-colors ${
                    active === link.href ? "text-slate-100" : "text-slate-400 hover:text-slate-200"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-1">
              <a
                href="/Chanin_Pholsiri_Resume.pdf"
                download
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-cyan-400
                  border border-cyan-400/40 rounded-lg hover:bg-cyan-400/10 press"
              >
                <Download size={13} />
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
