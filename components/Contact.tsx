import { Mail, MapPin, Globe } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import Section from "./Section";

const contacts = [
  { icon: Mail, value: "chaninpholsiri@gmail.com", href: "mailto:chaninpholsiri@gmail.com" },
  { icon: MapPin, value: "Bangkok, Thailand (UTC+7)", href: null },
  { icon: Globe, value: "Open to remote and relocation · requires visa sponsorship", href: null },
];

const socials = [
  { icon: GitHubIcon, label: "GitHub", href: "https://github.com/chanin-pholsiri" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/chanin-pholsiri" },
];

const circle = "inline-flex items-center justify-center rounded-full bg-slate-800 text-slate-300 shrink-0";

export default function Contact() {
  return (
    <Section id="contact" title="Contact" variant="side">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <p className="text-cyan-400 font-medium uppercase tracking-wider mb-5">Get in touch</p>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            I am open to new roles and collaborations. If you have a position or project in mind,
            email is the best way to reach me.
          </p>
          <a
            href="mailto:chaninpholsiri@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium uppercase tracking-wider text-slate-950 bg-cyan-400
              hover:bg-cyan-300 press focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            <Mail size={16} aria-hidden />
            Send an email
          </a>
        </div>

        <div>
          <ul className="flex flex-col gap-6">
            {contacts.map(({ icon: Icon, value, href }) => (
              <li key={value} className="flex items-center gap-4 text-slate-200 md:text-lg">
                <span className={`${circle} w-10 h-10`}>
                  <Icon size={18} aria-hidden />
                </span>
                {href ? (
                  <a href={href} className="hover:text-cyan-400 transition-colors break-all">
                    {value}
                  </a>
                ) : (
                  value
                )}
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-5 mt-10">
            {socials.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`${circle} w-12 h-12 hover:bg-cyan-400 hover:text-slate-950 press`}
                >
                  <Icon size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
