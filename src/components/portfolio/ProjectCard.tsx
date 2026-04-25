import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../../types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-preview">
        {project.image ? (
          <img src={project.image} alt={`${project.title} preview`} />
        ) : (
          <div className="project-placeholder" aria-hidden="true">
            <span>{project.title.slice(0, 2).toUpperCase()}</span>
          </div>
        )}
        <span className="project-status">{project.status}</span>
      </div>

      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="project-actions">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              <ExternalLink />
              Live
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <Github />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
