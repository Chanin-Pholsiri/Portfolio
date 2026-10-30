import { ExternalLink, Lock } from "lucide-react";
import { GitHubIcon } from "./Icons";
import Section from "./Section";
import CodeWindow from "./CodeWindow";

const projects = [
  {
    title: "Financial Crime Prevention API System",
    description:
      "Confidential enterprise backend built under Thailand's Technology Crime Prevention and Suppression Act (B.E. 2566), Sections 6 & 7. As the sole engineer, I own every Spring Boot API — fund suspension of mule accounts, conditional release, and bank warrant / legal hold processing — integrated with all banks and non-bank financial institutions in Thailand and handling 300–600 enforcement cases per day. Built with strict security controls, audit logging, and high-availability deployment.",
    tags: ["Spring Boot", "Java", "Angular", "Jenkins", "Rancher", "Harbor", "PostgreSQL"],
    highlight: "Fintech · Confidential",
    status: "Production",
    github: null,
    demo: null,
    isPrivate: true,
  },
  {
    title: "Enterprise Web Application Suite",
    description:
      "Full-stack enterprise applications for G-Able's clients — covering responsive Angular frontends, Node.js/Python APIs, and multi-environment Docker deployments. Led UI architecture and API validation.",
    tags: ["Angular", "TypeScript", "Node.js", ".NET Core", "Python", "Docker", "Bootstrap"],
    highlight: "Enterprise",
    status: "Production",
    github: null,
    demo: null,
    isPrivate: true,
  },
  {
    title: "Portfolio Website",
    description:
      "This site. Built with the Next.js App Router and Tailwind CSS v4, server-rendered, responsive and keyboard accessible.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlight: "Open Source",
    status: "Live",
    github: "https://github.com/chanin-pholsiri",
    demo: "#hero",
    isPrivate: false,
  },
  {
    title: "Pixcore",
    description:
      "E-commerce platform for premium mechanical keyboards engineered for developers. Features product configurator (switches, plate material, case color), QMK/VIA firmware support, hot-swap PCB listings, and a full shopping cart — priced in Thai Baht.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    highlight: "E-Commerce",
    status: "Live",
    github: "https://github.com/Chanin-Pholsiri/pixcore",
    demo: "https://pixcore-seven.vercel.app/",
    isPrivate: false,
  },
];

const linkClass = "inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      {/* Cards pin under the navbar and stack on top of each other while scrolling. */}
      <ul className="flex flex-col gap-6 max-w-3xl mx-auto">
        {projects.map((project) => (
          <li key={project.title} className="lg:sticky lg:top-24 shadow-[0_0_30px] shadow-slate-950/60 rounded-xl">
            <CodeWindow
              title={project.title}
              name="project"
              entries={{
                name: project.title,
                type: project.highlight,
                status: project.status,
                stack: project.tags,
                description: project.description,
              }}
            >
              <div className="flex flex-wrap items-center gap-5 text-sm">
                {project.isPrivate ? (
                  <span className="inline-flex items-center gap-1.5 text-slate-500">
                    <Lock size={14} aria-hidden />
                    Private / enterprise
                  </span>
                ) : (
                  <>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Source code for ${project.title}`}
                        className={linkClass}
                      >
                        <GitHubIcon size={14} />
                        Source
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target={project.demo.startsWith("#") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        aria-label={`Live site for ${project.title}`}
                        className={linkClass}
                      >
                        <ExternalLink size={14} aria-hidden />
                        Live site
                      </a>
                    )}
                  </>
                )}
              </div>
            </CodeWindow>
          </li>
        ))}
      </ul>

      <div className="text-center mt-10">
        <a href="https://github.com/chanin-pholsiri" target="_blank" rel="noopener noreferrer" className={`${linkClass} text-sm`}>
          <GitHubIcon size={15} />
          More on GitHub
        </a>
      </div>
    </Section>
  );
}
