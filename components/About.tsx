import Image from "next/image";
import Section from "./Section";

const focus = [
  {
    title: "Frontend",
    desc: "TypeScript-first UIs in React, Next.js and Angular, with server rendering and reusable component patterns.",
  },
  {
    title: "Backend",
    desc: "REST APIs in ASP.NET Core, Spring Boot and Node.js, built on clean architecture and secure authentication.",
  },
  {
    title: "Delivery",
    desc: "Docker, Kubernetes, Nginx and CI/CD pipelines across development, staging and production.",
  },
  {
    title: "Teamwork",
    desc: "Scrum ceremonies, code reviews, technical design discussions and mentoring junior developers.",
  },
];

const strengths = [
  "TypeScript-first", "Clean Architecture", "Financial Domain",
  "Performance Optimization", "Team Leadership", "Agile/Scrum",
];

export default function About() {
  return (
    <Section id="about" title="About me" variant="side">
      <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start">
        <div className="text-slate-400 leading-relaxed max-w-2xl">
          <p className="text-cyan-400 font-medium uppercase tracking-wider mb-5">Who I am</p>
          <p className="text-slate-300 text-lg mb-5">
            I&apos;m a{" "}
            <span className="text-cyan-400 font-semibold">Full-Stack Software Engineer</span>{" "}
            based in Bangkok, Thailand, with 5+ years turning complex requirements into
            scalable, maintainable software — across fintech, enterprise, and startup environments.
          </p>
          <p className="mb-5">
            I work comfortably across the entire stack: architecting TypeScript-driven UIs in
            React and Angular, building financial-grade APIs with ASP.NET Core and Spring Boot,
            and shipping to production via Docker and Nginx. I care deeply about code quality,
            security, and performance.
          </p>
          <p className="mb-7">
            Currently at{" "}
            <span className="text-slate-200 font-semibold">Sirisoft Public Company Limited</span>,
            where I lead frontend architecture and build backend services for sensitive financial
            enforcement workflows — including fund suspension, account release APIs, and bank
            warrant processing systems.
          </p>

          <ul className="flex flex-wrap gap-2">
            {strengths.map((tag) => (
              <li
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <figure className="justify-self-center lg:justify-self-end">
          <div className="relative w-64 h-72 rounded-lg overflow-hidden border border-slate-800 bg-slate-900">
            <Image
              src="/profile.jpg"
              alt="Portrait of Chanin Pholsiri"
              fill
              sizes="256px"
              preload
              className="object-cover object-top"
            />
          </div>
        </figure>
      </div>

      <dl className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
        {focus.map(({ title, desc }) => (
          <div key={title} className="border-t border-slate-800 pt-4">
            <dt className="text-slate-100 font-medium mb-1">{title}</dt>
            <dd className="text-sm text-slate-400 leading-relaxed">{desc}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
