import Link from "next/link";
import type { Project } from "@/data/projects";
import { PROJECTS } from "@/data/projects";
import { Artwork } from "@/lib/portfolio/artwork";
import { Reveal } from "@/components/portfolio/Reveal";

function CaseSection({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="case-sec">
      <div className="shell case-sec__grid">
        <div className="case-sec__label">
          <em>{label}</em>
          <h3>{title}</h3>
        </div>
        <div className="case-sec__body">{children}</div>
      </div>
    </section>
  );
}

function Lite({ t, d }: { t: string; d: string }) {
  return (
    <div className="card-lite">
      <h5>{t}</h5>
      <p>{d}</p>
    </div>
  );
}

/**
 * Full case-study narrative — same 11-section structure as the template.
 * Sections marked `.editable` are structured placeholders written for
 * replacement with real project documentation.
 */
export function CaseStudy({ project }: { project: Project }) {
  const idx = PROJECTS.findIndex((p) => p.id === project.id);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <article>
      <Reveal className="shell case-head">
        <Link href="/work" className="case-back">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M11 3L3 11M3 11h6M3 11V5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          All work
        </Link>
        <span className="mono">
          CASE {project.no} — {project.category.toUpperCase()}
        </span>
        <h1 className="case-title mask" style={{ marginTop: 14 }}>
          <span>{project.name}</span>
        </h1>
        <Reveal as="p" className="lede" style={{ maxWidth: "46ch" }}>
          {project.summary}
        </Reveal>
        <Reveal className="case-hero" style={{ marginTop: 44 }}>
          <Artwork kind={project.art} />
        </Reveal>
        <Reveal className="case-facts stagger">
          <div className="case-fact">
            <em>My role</em>
            <b>{project.role}</b>
          </div>
          <div className="case-fact">
            <em>Timeline</em>
            <b>{project.year === "—" ? "Not published" : project.year}</b>
          </div>
          <div className="case-fact">
            <em>Platform</em>
            <b>{project.platform}</b>
          </div>
          <div className="case-fact">
            <em>Team</em>
            <b>{project.team || "Cross-functional product team"}</b>
          </div>
          <div className="case-fact">
            <em>Discipline</em>
            <b>{project.tags.map((t) => t.toUpperCase()).join(" · ")}</b>
          </div>
        </Reveal>
      </Reveal>

      <CaseSection label="01" title="Overview">
        <p>{project.summary}</p>
        <p>{project.business}</p>
        <div className="case-cols" style={{ marginTop: 26 }}>
          <Lite
            t="What I owned"
            d={`${project.role} — end-to-end interface and interaction design, working with product and engineering through delivery.`}
          />
          <Lite
            t="What it runs on"
            d={`${project.platform}. Design decisions were made against the real constraints of that surface.`}
          />
        </div>
      </CaseSection>

      <CaseSection label="02" title="Problem">
        <p>{project.problem}</p>
        <h4>User context</h4>
        <div className="editable">
          <p>
            People arrive at this product with a task already in mind and limited tolerance for
            exploration. The interface has to confirm they are in the right place, show the
            shortest path to the outcome, and stay predictable when conditions are poor. Replace
            this paragraph with observations from your own research notes.
          </p>
        </div>
      </CaseSection>

      <CaseSection label="03" title="Research">
        <p>
          Research combined stakeholder conversations, a review of the existing product, and
          usability sessions with people representative of the primary audience. Findings were
          translated directly into wireframes rather than stopping at a report.
        </p>
        <div className="case-cols--3 case-cols" style={{ marginTop: 26 }}>
          <Lite
            t="Stakeholder interviews"
            d="Product, operations and engineering — what the business needs the flow to do."
          />
          <Lite
            t="Product review"
            d="A pass over the current experience, cataloguing friction, inconsistency and dead ends."
          />
          <Lite
            t="Usability sessions"
            d="Watching people attempt the core task, noting hesitation rather than opinion."
          />
        </div>
        <h4>Insights</h4>
        <div className="editable">
          <p>
            Insight 01 — the decisive information appears too late in the flow.
            <br />
            Insight 02 — people re-check the same detail more than once, so it belongs on screen
            permanently.
            <br />
            Insight 03 — the error path is more common than assumed and was not designed.
            <br />
            Replace with the specific findings from this project.
          </p>
        </div>
      </CaseSection>

      <CaseSection label="04" title="Structure">
        <p>
          Information architecture and flow came before any visual decision. The goal was a
          structure that could absorb new features later without a redesign.
        </p>
        <div
          style={{
            marginTop: 24,
            border: "1px solid var(--line)",
            borderRadius: "var(--card-radius)",
            overflow: "hidden",
            aspectRatio: "16/9",
            position: "relative",
          }}
        >
          <Artwork kind="flow" />
        </div>
        <h4>Journey</h4>
        <div className="case-cols--3 case-cols">
          <Lite
            t="Before"
            d="Intent, comparison and doubt — what the person needs to feel confident enough to start."
          />
          <Lite t="During" d="The core task, with state, progress and cost visible at all times." />
          <Lite t="After" d="Confirmation, recovery and the next reasonable action." />
        </div>
      </CaseSection>

      <CaseSection label="05" title="Exploration">
        <p>
          Wireframes stayed deliberately rough for as long as possible so that layout arguments did
          not turn into colour arguments. Several structural directions were tested against the
          same content before committing.
        </p>
        <div
          style={{
            marginTop: 24,
            border: "1px solid var(--line)",
            borderRadius: "var(--card-radius)",
            overflow: "hidden",
            aspectRatio: "16/9",
            position: "relative",
          }}
        >
          <Artwork kind="grid" />
        </div>
      </CaseSection>

      <CaseSection label="06" title="UI direction">
        <p>
          The visual direction was set from the product family it belongs to: type scale, spacing
          rhythm and colour roles first, decoration last. Every component had to survive the
          densest screen in the product.
        </p>
        <div className="case-cols" style={{ marginTop: 26 }}>
          <div>
            <div className="palette-strip" style={{ marginBottom: 14 }}>
              <i style={{ background: "var(--c1)" }} />
              <i style={{ background: "var(--c2)" }} />
              <i style={{ background: "var(--c3)" }} />
              <i style={{ background: "var(--c4)" }} />
              <i style={{ background: "var(--bg-2)" }} />
            </div>
            <p style={{ fontSize: 14 }}>
              Colour carries role, not mood: one action colour, one attention colour, one positive
              state, and a neutral scale doing most of the work.
            </p>
          </div>
          <div className="spec">
            <div className="spec__row">
              <b style={{ fontSize: 30 }}>Display</b>
              <em>40 / 1.05</em>
            </div>
            <div className="spec__row">
              <b style={{ fontSize: 21 }}>Heading</b>
              <em>24 / 1.25</em>
            </div>
            <div className="spec__row">
              <b style={{ fontSize: 16 }}>Body</b>
              <em>16 / 1.6</em>
            </div>
            <div className="spec__row">
              <b style={{ fontSize: 13 }}>Caption</b>
              <em>13 / 1.4</em>
            </div>
          </div>
        </div>
      </CaseSection>

      <CaseSection label="07" title="Interaction & states">
        <p>
          Each component was specified across its full state range — including the ones nobody
          demos. Loading, empty, partial and error states were designed alongside the happy path,
          not after it.
        </p>
        <div
          style={{
            marginTop: 24,
            border: "1px solid var(--line)",
            borderRadius: "var(--card-radius)",
            overflow: "hidden",
            aspectRatio: "16/9",
            position: "relative",
          }}
        >
          <Artwork kind="states" />
        </div>
      </CaseSection>

      <CaseSection label="08" title="Design system">
        <p>
          Patterns that appeared more than twice were promoted into the shared library with
          tokens, usage notes and redlines, so engineering could build without interpreting.
        </p>
        <div
          style={{
            marginTop: 24,
            border: "1px solid var(--line)",
            borderRadius: "var(--card-radius)",
            overflow: "hidden",
            aspectRatio: "16/9",
            position: "relative",
          }}
        >
          <Artwork kind="system" />
        </div>
      </CaseSection>

      <CaseSection label="09" title="Final screens">
        <p>The delivered interface, shown across the surfaces it actually ships on.</p>
        <div className="mockrow" style={{ marginTop: 26 }}>
          <div className="phone">
            <div className="phone__screen">
              <Artwork kind={project.art === "app" ? "app" : "app2"} />
            </div>
          </div>
          <div className="browser">
            <div className="browser__bar">
              <i />
              <i />
              <i />
              <u />
            </div>
            <div className="browser__screen">
              <Artwork kind="screen" />
            </div>
          </div>
        </div>
      </CaseSection>

      <CaseSection label="10" title="Testing & iteration">
        <p>
          Prototypes were put in front of people before build. Where someone hesitated, the design
          changed — not the explanation.
        </p>
        <div className="editable">
          <p>
            Round 01 — what was tested, with whom, and what changed as a result.
            <br />
            Round 02 — the follow-up pass and remaining open questions.
            <br />
            Replace with the real testing record for this project.
          </p>
        </div>
      </CaseSection>

      <CaseSection label="11" title="Outcome & reflection">
        <div className="editable">
          <p>
            Outcome — describe what shipped and what it changed for users and the business. No
            numbers are claimed here; add verified figures if you have them.
          </p>
        </div>
        <h4>What I would do differently</h4>
        <p>
          Structure earlier and decorate later. The strongest gains on this project came from
          fixing the order of information, not from any single visual decision — and that work
          could have started a week sooner.
        </p>
      </CaseSection>

      <div className="shell">
        <Link href={`/cases/${next.id}`} className="next-project">
          <span>
            <span className="mono">NEXT PROJECT — {next.no}</span>
            <b>{next.name}</b>
          </span>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
            <circle cx="17" cy="17" r="16" stroke="var(--line-strong)" />
            <path
              d="M13 21l8-8M21 13h-6M21 13v6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
