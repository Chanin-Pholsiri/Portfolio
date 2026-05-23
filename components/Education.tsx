"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="relative py-28 px-6 bg-slate-950/40" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass rounded-2xl p-8 glow"
          style={{ boxShadow: "0 0 40px rgba(6,182,212,0.1)" }}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/20 flex items-center justify-center shrink-0">
              <GraduationCap size={30} className="text-cyan-400" />
            </div>

            <div className="flex-1">
              <h3 className="text-slate-100 font-bold text-xl mb-1">
                Bachelor of Engineering in Computer Engineering
              </h3>
              <p className="text-cyan-400 font-medium mb-1">
                The University of The Thai Chamber of Commerce
              </p>
              <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                <Calendar size={14} />
                2018 – 2021
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end gap-2">
              <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                Computer Engineering
              </span>
              <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-400 border border-slate-700/50">
                Bangkok, Thailand
              </span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-800/60">
            <p className="text-slate-400 text-sm leading-relaxed">
              Studied foundational and advanced computer engineering principles — covering data structures,
              algorithms, software engineering, networking, and systems design.
              The degree provided a strong technical foundation that directly supports
              my full-stack development career.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
