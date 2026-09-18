import type { Metadata } from "next";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Reveal } from "@/components/portfolio/Reveal";
import { PROJECTS, type Project } from "@/data/projects";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Longer-form write-ups: the problem, the research, the decisions and what I would do differently.",
  alternates: { canonical: "/cases" },
};

const ORDER: Array<Project["span"]> = ["wide", "tall", "full", "half", "half", "closer"];

export default function CasesPage() {
  const cases = PROJECTS.slice(0, 6);
  return (
    <>
      <div className="shell page-head">
        <div className="page-head__row">
          <div>
            <span className="tick">In depth</span>
            <Reveal as="h1" className="mask" style={{ marginTop: 16 }}>
              <span>Case studies</span>
            </Reveal>
          </div>
          <Reveal as="p" className="body-copy" style={{ fontSize: 16 }}>
            Longer-form write-ups: the problem, the research, the decisions and what I would do
            differently. Open one to read the full story.
          </Reveal>
        </div>
      </div>
      <div className="shell">
        <div className="work-gallery">
          {cases.map((p, i) => (
            <ProjectCard key={p.id} project={p} span={ORDER[i % ORDER.length]} />
          ))}
        </div>
      </div>
    </>
  );
}
