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
  const pill = "px-5 py-2 rounded-md border border-slate-800 bg-slate-900 text-sm font-semibold uppercase tracking-wider text-slate-200";

  return (
    <section id={id} className="relative px-6 py-20 md:py-24 border-t border-slate-800/80">
      <h2 className="sr-only">{title}</h2>
      <div className="max-w-6xl mx-auto relative">
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
      </div>
    </section>
  );
}
