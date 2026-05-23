"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "chaninpholsiri@gmail.com",
    href: "mailto:chaninpholsiri@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+66-90-720-3797",
    href: "tel:+66907203797",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangkok, Thailand",
    href: null,
  },
];

const socials = [
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "Chanin Pholsiri",
    href: "https://github.com/chanin-pholsiri",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "Chanin Pholsiri",
    href: "https://www.linkedin.com/in/chanin-pholsiri",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative py-28 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Let's Work Together
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Open to new opportunities, collaborations, and interesting projects.
            Feel free to reach out — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-slate-200 font-semibold text-lg mb-1">Contact Info</h3>
            {contacts.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="glass rounded-xl p-4 flex items-center gap-4 glow-hover transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-slate-200 text-sm hover:text-cyan-400 transition-colors font-medium"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-slate-200 text-sm font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Social + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-slate-200 font-semibold text-lg mb-1">Social Profiles</h3>
            {socials.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-4 flex items-center gap-4 glow-hover transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center shrink-0 group-hover:bg-cyan-400/20 transition-colors">
                  <Icon size={18} className="text-cyan-400" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500 mb-0.5">{label}</p>
                  <p className="text-slate-200 text-sm font-medium group-hover:text-cyan-400 transition-colors">
                    {value}
                  </p>
                </div>
                <ExternalLink size={14} className="text-slate-600 group-hover:text-cyan-400 transition-colors" />
              </a>
            ))}

            {/* Email CTA */}
            <motion.a
              href="mailto:chaninpholsiri@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-2 flex items-center justify-center gap-2 p-4 rounded-xl font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-400/20"
            >
              <Mail size={18} />
              Send Me an Email
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
