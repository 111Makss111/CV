import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BriefcaseBusiness,
  Code2,
  Download,
  Gauge,
  Github,
  GitBranch,
  GraduationCap,
  Languages,
  LayoutDashboard,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Quote,
  X,
  Send,
  Sparkles,
} from "lucide-react";
import avatarImage from "./i.png";
import boyAvatar from "./boy.png";
import girlAvatar from "./girl.png";
import girlAvatarAlt from "./girl1.png";
import "./styles.css";

type TabId = "about" | "resume" | "portfolio" | "blog";
type AccentTheme = "gold" | "sky" | "mint" | "coral" | "violet";

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type TimelineItem = {
  date: string;
  title: string;
  description: string;
};

type Project = {
  previewClass: string;
  title: string;
  description: string;
  tags: string[];
};

type Recommendation = {
  avatar: string;
  name: string;
  role: string;
  date: string;
  dateTime: string;
  text: string;
};

const tabs: Array<{ id: TabId; label: string }> = [
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "portfolio", label: "Portfolio" },
  { id: "blog", label: "Blog" },
];

const accentThemes: Array<{ id: AccentTheme; label: string }> = [
  { id: "gold", label: "Gold" },
  { id: "sky", label: "Sky" },
  { id: "mint", label: "Mint" },
  { id: "coral", label: "Coral" },
  { id: "violet", label: "Violet" },
];

const services: Service[] = [
  {
    icon: <Code2 />,
    title: "Frontend Foundation",
    description:
      "I build responsive pages with HTML, CSS, TypeScript and React, focusing on clean structure.",
  },
  {
    icon: <LayoutDashboard />,
    title: "Visual Attention",
    description:
      "I care about spacing, contrast, typography and small details that make an interface feel finished.",
  },
  {
    icon: <GitBranch />,
    title: "Project Discipline",
    description:
      "I keep code organized, use Git consciously and prepare repositories so they are easy to review.",
  },
  {
    icon: <Gauge />,
    title: "Growth Mindset",
    description:
      "I learn quickly, ask better questions with each project and turn feedback into visible improvements.",
  },
];

const education: TimelineItem[] = [
  {
    date: "2024 - 2026",
    title: "Frontend Development",
    description:
      "HTML, CSS, JavaScript, TypeScript, React basics, responsive layouts and Git workflow.",
  },
  {
    date: "Ongoing",
    title: "Self-Directed Practice",
    description:
      "Portfolio projects, UI recreation, code cleanup and English tech vocabulary.",
  },
];

const experience: TimelineItem[] = [
  {
    date: "Now",
    title: "Portfolio Builder",
    description:
      "Creating public proof of work: CV website, GitHub repositories and LinkedIn profile.",
  },
  {
    date: "Next step",
    title: "Junior Frontend Role",
    description:
      "Looking for real team experience where consistency and curiosity matter.",
  },
];

const projects: Project[] = [
  {
    previewClass: "portfolio-preview",
    title: "Personal CV Website",
    description:
      "A clean React + TypeScript portfolio page inspired by a profile dashboard layout.",
    tags: ["React", "TS", "CSS"],
  },
  {
    previewClass: "github-preview",
    title: "GitHub Profile Cleanup",
    description:
      "Repository presentation, README structure and pinned project strategy.",
    tags: ["Git", "Docs"],
  },
  {
    previewClass: "linkedin-preview",
    title: "LinkedIn Refresh",
    description:
      "Headline, About text and featured links prepared for recruiter scanning.",
    tags: ["Branding", "CV"],
  },
];

const recommendations: Recommendation[] = [
  {
    avatar: girlAvatar,
    name: "Olena Koval",
    role: "Frontend Developer (HTML5, CSS3, JavaScript)",
    date: "April 5, 2025",
    dateTime: "2024-04-05",
    text: "I worked with Maksym during a team learning project where we built a responsive website using HTML, CSS and JavaScript. He was attentive to details, checked layout behavior carefully and helped keep the team focused when tasks became unclear. Maksym showed himself as a reliable teammate who is ready to ask questions, explain his decisions and improve the result until the interface looks finished.",
  },
  {
    avatar: boyAvatar,
    name: "Andrii Melnyk",
    role: "Frontend Developer (HTML5, CSS3, JavaScript, React)",
    date: "April 21, 2025",
    dateTime: "2024-04-21",
    text: "I would recommend Maksym as a developer who combines patience with real curiosity. During our practice work he paid attention not only to whether the code worked, but also to readability, spacing and how the page felt for a user. He communicated clearly, reacted well to feedback and was always willing to improve a component instead of leaving it at the first working version.",
  },
  {
    avatar: girlAvatarAlt,
    name: "Kateryna Shevchenko",
    role: "Fullstack Student (HTML5, CSS3, JavaScript, React, Node)",
    date: "March 3, 2025",
    dateTime: "2024-03-03",
    text: "Maksym stood out to me because he treated our study project like something that should be presented, not only submitted. He kept an organized Git workflow, listened carefully during review and made visible improvements after each discussion. His strongest qualities are responsibility, consistency and a calm approach to solving frontend problems step by step.",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState<TabId>("about");
  const [accentIndex, setAccentIndex] = useState(0);
  const activeAccent = accentThemes[accentIndex];

  const handleAccentChange = () => {
    setAccentIndex((currentIndex) => (currentIndex + 1) % accentThemes.length);
  };

  return (
    <main className="portfolio-stage" data-accent={activeAccent.id}>
      <div className="workspace">
        <ProfileCard
          activeAccent={activeAccent.label}
          onToggleAccent={handleAccentChange}
        />

        <section className="content-shell">
          <nav className="tabs" aria-label="Portfolio sections">
            {tabs.map((tab) => (
              <button
                className={`tab ${activeTab === tab.id ? "is-active" : ""}`}
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {activeTab === "about" && <AboutPanel />}
          {activeTab === "resume" && <ResumePanel />}
          {activeTab === "portfolio" && <PortfolioPanel />}
          {activeTab === "blog" && <BlogPanel />}
        </section>
      </div>
    </main>
  );
}

function ProfileCard({
  activeAccent,
  onToggleAccent,
}: {
  activeAccent: string;
  onToggleAccent: () => void;
}) {
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
          <img src={avatarImage} alt="Maksym profile" />
        </div>
        <h1>Maksym Yaropovets</h1>
        <p>Frontend Developer</p>
        <a className="cv-button" href="./README.md" download>
          <Download />
          Download CV
        </a>
      </section>

      <section className="contact-list" aria-label="Contact details">
        <ContactItem
          icon={<Mail />}
          label="Email"
          value="777docmax777@gmail.com"
          href="mailto:777docmax777@gmail.com"
        />
        <ContactItem
          icon={<Phone />}
          label="Phone"
          value="+48 793-528-147"
          href="tel:+48793528-147"
        />
        <ContactItem icon={<MapPin />} label="Location" value="Lodz, Poland" />
        <ContactItem
          icon={<Languages />}
          label="Languages"
          value="UA, PL, EN"
        />
      </section>

      <nav className="social-links" aria-label="Social profiles">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <Github />
        </a>
        <a
          href="https://t.me/"
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

function SectionHeading({ title }: { title: string }) {
  return (
    <header className="section-heading">
      <h2>{title}</h2>
      <span />
    </header>
  );
}

function AboutPanel() {
  const [selectedRecommendation, setSelectedRecommendation] =
    useState<Recommendation | null>(null);

  return (
    <>
      <article className="panel">
        <SectionHeading title="About Me" />

        <div className="intro-copy">
          <p>
            I am a front-end developer from Zhytomyr, Ukraine, specializing in
            creating clean, interactive, and user-friendly web applications. I
            enjoy turning ideas into real products — from simple, elegant
            interfaces to more complex systems with well-structured logic. I pay
            close attention to details, because for me, a great product is not
            only about functionality, but also how the user perceives it.
          </p>{" "}
          <p>
            I completed a Full Stack Development training at GoIT, where I
            gained practical experience with modern technologies such as HTML5,
            CSS3, JavaScript, React, Redux, Node.js, and MongoDB. My main
            strengths are: Creating responsive interfaces Writing clean and
            user-friendly code Creating smooth UI interactions and animations
            Structuring applications in a scalable way I am constantly improving
            my skills by working on real-world projects and solving practical
            problems. My goal is simple: every project I create should be better
            than the last.
          </p>
          <p>
            I am currently open to new opportunities where I can grow as a
            developer and create products that bring real value.
          </p>
        </div>

        <section className="services" aria-labelledby="services-title">
          <h3 id="services-title">Why Work With Me</h3>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                {service.icon}
                <div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="recommendations"
          aria-labelledby="recommendations-title"
        >
          <h3 id="recommendations-title">Recommendation</h3>
          <div className="recommendation-grid">
            {recommendations.map((recommendation) => (
              <button
                className="recommendation-card"
                key={recommendation.name}
                type="button"
                onClick={() => setSelectedRecommendation(recommendation)}
                aria-label={`Open recommendation from ${recommendation.name}`}
              >
                <div className="recommendation-person">
                  <img src={recommendation.avatar} alt="" aria-hidden="true" />
                  <div>
                    <strong>{recommendation.name}</strong>
                    <span>{recommendation.role}</span>
                  </div>
                </div>
                <time dateTime={recommendation.dateTime}>
                  {recommendation.date}
                </time>
                <p>{recommendation.text}</p>
              </button>
            ))}
          </div>
        </section>
      </article>

      {selectedRecommendation && (
        <RecommendationModal
          recommendation={selectedRecommendation}
          onClose={() => setSelectedRecommendation(null)}
        />
      )}
    </>
  );
}

function RecommendationModal({
  recommendation,
  onClose,
}: {
  recommendation: Recommendation;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="recommendation-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="recommendation-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close recommendation"
        >
          <X />
        </button>

        <div className="modal-person">
          <img src={recommendation.avatar} alt="" aria-hidden="true" />
          <div>
            <h3 id="recommendation-modal-title">{recommendation.name}</h3>
            <p>{recommendation.role}</p>
            <time dateTime={recommendation.dateTime}>
              {recommendation.date}
            </time>
          </div>
        </div>

        <Quote className="modal-quote-icon" aria-hidden="true" />
        <p className="modal-quote">{recommendation.text}</p>
      </section>
    </div>
  );
}

function ResumePanel() {
  return (
    <article className="panel">
      <SectionHeading title="Resume" />

      <div className="timeline">
        <TimelineSection
          icon={<GraduationCap />}
          title="Education"
          items={education}
        />
        <TimelineSection
          icon={<BriefcaseBusiness />}
          title="Experience"
          items={experience}
        />
      </div>

      <section className="skills" aria-label="Technical skills">
        {[
          "HTML5",
          "CSS3",
          "JavaScript",
          "TypeScript",
          "React",
          "Git",
          "Figma",
          "Responsive Design",
        ].map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </section>
    </article>
  );
}

function TimelineSection({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: TimelineItem[];
}) {
  return (
    <section>
      <h3>
        {icon}
        {title}
      </h3>
      {items.map((item) => (
        <article className="timeline-item" key={item.title}>
          <span>{item.date}</span>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </article>
      ))}
    </section>
  );
}

function PortfolioPanel() {
  return (
    <article className="panel">
      <SectionHeading title="Portfolio" />

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className={`project-preview ${project.previewClass}`} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </article>
  );
}

function BlogPanel() {
  return (
    <article className="panel">
      <SectionHeading title="Blog" />

      <div className="blog-list">
        <article>
          <time dateTime="2026-04-24">April 24, 2026</time>
          <h3>How I Am Rebuilding My Developer Profile</h3>
          <p>
            A short note about turning CV, LinkedIn, GitHub and portfolio into
            one coherent story.
          </p>
        </article>
        <article>
          <time dateTime="2026-04-24">April 24, 2026</time>
          <h3>What Makes a Junior Portfolio Feel Trustworthy</h3>
          <p>
            Readable project cards, screenshots, honest scope and clean source
            code.
          </p>
        </article>
      </div>
    </article>
  );
}

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
