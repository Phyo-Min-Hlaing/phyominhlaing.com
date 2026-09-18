"use client";

import { useState } from "react";
import { PROJECTS, type Project } from "@/data/projects";
import { FILTERS } from "@/data/site";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { cn } from "@/lib/utils";

const PATTERN: Array<Project["span"]> = [
  "wide",
  "tall",
  "half",
  "half",
  "full",
  "half",
  "half",
  "wide",
  "tall",
  "half",
  "half",
  "full",
];

export function WorkArchive() {
  const [filter, setFilter] = useState<string>("all");
  const count =
    filter === "all"
      ? PROJECTS.length
      : PROJECTS.filter((p) => (p.tags as readonly string[]).includes(filter)).length;

  return (
    <>
      <div className="filters" role="group" aria-label="Filter work">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            className="filter"
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <p className="count-note" aria-live="polite">
        {String(count).padStart(2, "0")} PROJECTS — FILTER: {filter.toUpperCase()}
      </p>
      <div className="archive">
        {PROJECTS.map((p, i) => {
          const show = filter === "all" || (p.tags as readonly string[]).includes(filter);
          return (
            <ProjectCard
              key={p.id}
              project={p}
              span={PATTERN[i % PATTERN.length]}
              className={cn(!show && "is-out")}
              hidden={!show}
            />
          );
        })}
      </div>
    </>
  );
}
