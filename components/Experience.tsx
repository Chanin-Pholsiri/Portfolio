import Section from "./Section";

const stats = [
  { value: "5+", label: "Years in production" },
  { value: "300–600", label: "Enforcement cases per day" },
  { value: "100%", label: "Thai banks & non-banks integrated" },
];

const experiences = [
  {
    title: "Software Developer",
    company: "Sirisoft Public Company Limited",
    period: "Jun 2025 – Present",
    tags: ["React", "Next.js", "Angular", "ASP.NET Core", "Spring Boot", "Docker", "Nginx"],
    bullets: [
      "Sole engineer owning every Spring Boot API of a national financial enforcement system integrated with all banks and non-bank institutions in Thailand, processing 300–600 cases per day: mule account fund suspension, conditional release, and bank warrant / legal hold requests",
      "Lead frontend architecture across React, Next.js and Angular with strict TypeScript and shared component patterns",
      "Design RESTful APIs in ASP.NET Core using clean architecture, with secure authentication and authorization for sensitive financial operations",
      "Introduced server-side rendering and performance optimizations that improved page load speed",
      "Run containerized deployments with Docker and Nginx (routing, SSL, caching, load balancing) across development, staging and production",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "G-Able Public Company Limited",
    period: "Dec 2023 – May 2025",
    tags: ["Angular", "TypeScript", "Node.js", ".NET Core", "Docker", "Bootstrap"],
    bullets: [
      "Developed enterprise-level front-end applications using Angular and TypeScript",
      "Built backend services using Node.js, Python, C#, and .NET Core",
      "Deployed applications using Docker containers across multiple environments",
      "Validated APIs and tested releases to keep production systems reliable",
    ],
  },
  {
    title: "Senior Programmer",
    company: "INTELLIGIST COMPANY LIMITED",
    period: "Jun 2021 – Nov 2023",
    tags: ["Vue.js", "Angular", "Docker", "Adobe XD"],
    bullets: [
      "Developed web applications using Vue.js and Angular",
      "Mentored junior developers and led knowledge-sharing sessions",
      "Designed UI/UX prototypes in Adobe XD and owned Docker-based deployments",
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="grid lg:grid-cols-[16rem_1fr] gap-8 lg:gap-16 items-start">
        <dl className="grid grid-cols-3 lg:grid-cols-1 gap-4 lg:sticky lg:top-28">
          {stats.map(({ value, label }) => (
            <div key={label} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <dt className="text-xs uppercase tracking-wider text-slate-500 mb-2">{label}</dt>
              <dd className="text-xl sm:text-3xl font-semibold tracking-tight text-slate-100 tabular-nums">{value}</dd>
            </div>
          ))}
        </dl>

        <ol className="space-y-6">
          {experiences.map((exp) => (
            <li key={exp.company} className="rounded-xl border border-slate-800 bg-slate-900 p-6 md:p-8">
              <p className="text-sm text-cyan-400 tabular-nums mb-2">{exp.period}</p>
              <h3 className="text-lg font-semibold uppercase tracking-wide text-slate-100">{exp.title}</h3>
              <p className="text-slate-300 mb-5">{exp.company}</p>

              <ul className="list-disc pl-5 space-y-1.5 text-slate-400 leading-relaxed marker:text-slate-600 mb-5">
                {exp.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <p className="font-mono text-xs text-slate-500">{exp.tags.join(" · ")}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
