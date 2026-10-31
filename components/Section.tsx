"use client";

import { motion, useReducedMotion } from "framer-motion";

// "center": title in a pill between two rules above the content.
// "side": title on a vertical tab along the right edge (large screens only).
export default function Section({
  id,
  title,
  variant = "center",
  children,
}: {
  id: string;
  title: string;
  variant?: "center" | "side";
  children: React.ReactNode;
}) {
  // Content fades up once as the section scrolls into view; reduced motion keeps only the fade.
  const reduce = useReducedMotion();
  const pill = "px-5 py-2 rounded-md border border-slate-800 bg-slate-900 text-sm font-semibold uppercase tracking-wider text-slate-200";

  return (
    <section id={id} className="relative px-6 py-20 md:py-24 border-t border-slate-800/80">
      <h2 className="sr-only">{title}</h2>
      <motion.div
        className="max-w-6xl mx-auto relative"
        initial={{ opacity: 0, transform: reduce ? "none" : "translateY(16px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0px)" }}
        viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      >
        <div aria-hidden className={`flex items-center justify-center mb-12 ${variant === "side" ? "lg:hidden" : ""}`}>
          <span className="h-px w-12 sm:w-24 bg-slate-800" />
          <span className={pill}>{title}</span>
          <span className="h-px w-12 sm:w-24 bg-slate-800" />
        </div>

        {variant === "side" && (
          <div aria-hidden className="hidden lg:flex flex-col items-center absolute top-16 right-0">
            <span className={`${pill} rotate-90 whitespace-nowrap`}>{title}</span>
            <span className="h-36 w-px bg-slate-800 mt-12" />
          </div>
        )}

        {variant === "side" ? <div className="lg:pr-28">{children}</div> : children}
      </motion.div>
    </section>
  );
}
