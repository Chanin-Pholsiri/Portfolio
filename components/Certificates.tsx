import { ExternalLink } from "lucide-react";
import Section from "./Section";

// Role certificates are shown in full; the remaining 24 skill certificates
// live on the profile pages linked below.
const featured = [
  {
    name: "Software Engineer",
    issuer: "HackerRank",
    url: "https://www.hackerrank.com/certificates/f81195877e7d",
    topics: "Problem solving, SQL, REST API",
  },
  {
    name: "Software Engineer Intern",
    issuer: "HackerRank",
    url: "https://www.hackerrank.com/certificates/dbc04c586bc1",
    topics: "Problem solving, SQL",
  },
];

const profiles = [
  { label: "HackerRank profile", count: 17, href: "https://www.hackerrank.com/profile/chaninpholsiri" },
  { label: "FutureSkill profile", count: 9, href: "https://app.futureskill.co" },
];

const linkClass = "inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors";

export default function Certificates() {
  return (
    <Section id="certificates" title="Certifications">
      <p className="text-slate-400 leading-relaxed max-w-2xl mb-8">
        Role certifications from HackerRank. Additional skill certificates are listed on my
        profiles.
      </p>

      <ul className="divide-y divide-slate-800 border-y border-slate-800 mb-8">
        {featured.map((cert) => (
          <li key={cert.url} className="py-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <div>
              <a href={cert.url} target="_blank" rel="noopener noreferrer" className={`${linkClass} font-medium text-slate-100`}>
                {cert.name}
                <ExternalLink size={13} aria-hidden />
              </a>
              <p className="text-sm text-slate-500">{cert.topics}</p>
            </div>
            <p className="text-sm text-slate-500">{cert.issuer}</p>
          </li>
        ))}
      </ul>

      <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
        {profiles.map(({ label, count, href }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {label} ({count})
              <ExternalLink size={13} aria-hidden />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
