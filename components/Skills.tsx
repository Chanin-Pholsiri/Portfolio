import Image from "next/image";
import Section from "./Section";

// Logos live in /public/skills (said7388/developer-portfolio and Devicon, both MIT).
const skills: { name: string; icon?: string }[] = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Angular", icon: "angular" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "ASP.NET Core", icon: "dotnetcore" },
  { name: "C#", icon: "csharp" },
  { name: "Java", icon: "java" },
  { name: "Spring Boot", icon: "spring" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Python", icon: "python" },
  { name: "Docker", icon: "docker" },
  { name: "Kubernetes", icon: "kubernetes" },
  { name: "Nginx", icon: "nginx" },
  { name: "Vercel", icon: "vercel" },
  { name: "Linux", icon: "linux" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MySQL", icon: "mysql" },
  { name: "SQL Server", icon: "sqlserver" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Git", icon: "git" },
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 gap-4 pr-4">
      {skills.map(({ name, icon }) => (
        <li
          key={name}
          className="w-36 h-32 flex flex-col items-center justify-center gap-3 rounded-lg border border-slate-800 bg-slate-900 px-4"
        >
          {icon && <Image src={`/skills/${icon}.svg`} alt="" width={40} height={40} className="h-10 w-10 object-contain" />}
          <span className="text-sm text-slate-200 text-center">{name}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      {/* Two identical rows translate by -50% for a seamless loop; the copy is hidden from screen readers. */}
      <div className="marquee overflow-hidden">
        <div className="marquee-track flex w-max">
          <Row />
          <Row hidden />
        </div>
      </div>
    </Section>
  );
}
