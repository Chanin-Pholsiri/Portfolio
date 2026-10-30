import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-lg font-semibold text-slate-100">
            Bachelor of Engineering in Computer Engineering
          </h3>
          <p className="text-sm text-slate-500 tabular-nums">2018 – 2021</p>
        </div>
        <p className="text-slate-300 mb-4">University of the Thai Chamber of Commerce, Bangkok</p>
        <p className="text-slate-400 leading-relaxed max-w-3xl">
          Coursework in data structures, algorithms, software engineering, computer networks and
          systems design.
        </p>
      </div>
    </Section>
  );
}
