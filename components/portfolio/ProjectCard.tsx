import Link from "next/link";
import type { Project } from "@/data/projects";
import { Artwork } from "@/lib/portfolio/artwork";
import { cn } from "@/lib/utils";

const SPAN_CLASS: Record<Project["span"], string> = {
  wide: "pcard--wide",
  tall: "pcard--tall",
  full: "pcard--full",
  half: "pcard--half",
  closer: "pcard--closer",
};

export function ProjectCard({
  project,
  span,
  className,
  hidden,
}: {
  project: Project;
  span?: Project["span"];
  className?: string;
  hidden?: boolean;
}) {
  const spanClass = SPAN_CLASS[span ?? project.span];
  return (
    <Link
      href={`/cases/${project.id}`}
      className={cn("pcard", spanClass, className)}
      aria-label={`Open case study: ${project.name}`}
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
    >
      <div className="pcard__media" data-media>
        <div className="pcard__art">
          <Artwork kind={project.art} />
        </div>
        <div className="pcard__veil" aria-hidden="true" />
        <span className="pcard__no">
          {project.no} / {project.category.toUpperCase()}
        </span>
      </div>
      <div className="pcard__bar">
        <div>
          <h3 className="pcard__title">{project.name}</h3>
          <div className="pcard__meta">
            <span>{project.role}</span>
            <span>{project.platform}</span>
            {project.year && project.year !== "—" ? <span>{project.year}</span> : null}
          </div>
          <p className="pcard__sum">{project.summary}</p>
        </div>
        <span className="pcard__go">
          View case study
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M3 11L11 3M11 3H5M11 3v6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
