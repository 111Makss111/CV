import {
  Download,
  Github,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { profile } from "../../data/profile";

const contactIcons = {
  email: Mail,
  phone: Phone,
  location: MapPin,
  languages: Languages,
} as const;

type ProfileCardProps = {
  activeAccent: string;
  onToggleAccent: () => void;
};

export function ProfileCard({ activeAccent, onToggleAccent }: ProfileCardProps) {
  return (
    <aside className="profile-card" aria-label="Profile summary">
      <button
        className="theme-toggle"
        type="button"
        onClick={onToggleAccent}
        aria-label={`Change accent color. Current theme: ${activeAccent}`}
        title={`Accent: ${activeAccent}`}
      >
        <Sparkles />
      </button>

      <section className="identity">
        <div className="avatar">
          <img src={profile.avatar} alt="Maksym profile" />
        </div>
        <h1>{profile.name}</h1>
        <p>{profile.title}</p>
        <a className="cv-button" href={profile.cvUrl} download>
          <Download />
          Download CV
        </a>
      </section>

      <section className="contact-list" aria-label="Contact details">
        {profile.contacts.map((contact) => {
          const Icon = contactIcons[contact.type];

          return (
            <ContactItem
              icon={<Icon />}
              key={contact.label}
              label={contact.label}
              value={contact.value}
              href={"href" in contact ? contact.href : undefined}
            />
          );
        })}
      </section>

      <nav className="social-links" aria-label="Social profiles">
        <a
          href={profile.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin />
        </a>
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <Github />
        </a>
        <a
          href={profile.socials.telegram}
          target="_blank"
          rel="noreferrer"
          aria-label="Telegram"
        >
          <Send />
        </a>
      </nav>
    </aside>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <article>
      <span className="contact-icon">{icon}</span>
      <div>
        <small>{label}</small>
        {href ? <a href={href}>{value}</a> : <span>{value}</span>}
      </div>
    </article>
  );
}
