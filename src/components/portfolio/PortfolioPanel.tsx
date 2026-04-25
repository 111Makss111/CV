import { projects } from "../../data/projects";
import { SectionHeading } from "../common/SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function PortfolioPanel() {
  return (
    <article className="panel">
      <SectionHeading title="Portfolio" />

      <div className="portfolio-intro">
        <p>
          A growing collection of projects, experiments and profile-ready work.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </article>
  );
}
