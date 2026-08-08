"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { Briefcase, Code2, Building2, Rocket } from "lucide-react";

const stats = [
  { icon: Briefcase, value: 4, suffix: "+", label: "Years Experience" },
  { icon: Building2, value: 3, suffix: "", label: "Companies" },
  { icon: Code2, value: 15, suffix: "+", label: "Technologies" },
  { icon: Rocket, value: 100, suffix: "%", label: "Agile / Scrum" },
];

function CountUp({ to, suffix, inView }: { to: number; suffix: string; inView: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration: 1.6, ease: "easeOut" });
    return controls.stop;
  }, [inView, to, count]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${v}${suffix}`;
    });
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ icon: Icon, value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-5 text-center group hover:scale-105 transition-transform duration-300"
            >
              <Icon size={20} className="text-cyan-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-cyan-400 mb-1">
                <CountUp to={value} suffix={suffix} inView={inView} />
              </div>
              <p className="text-slate-500 text-xs">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
