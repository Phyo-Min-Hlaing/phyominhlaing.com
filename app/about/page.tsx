import type { Metadata } from "next";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionHead } from "@/components/portfolio/SectionHead";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior Product UI/UX Designer with 7+ years designing digital products that are visually engaging and deeply user-centered.",
  alternates: { canonical: "/about" },
};

const LADDER = [
  {
    n: "01",
    t: "Visual design",
    d: "Diploma of Computer Arts, Graphic Design — typography, composition, colour and print craft.",
  },
  {
    n: "02",
    t: "Digital design",
    d: "Moving the same craft onto screens: layout systems, iconography, brand-side digital work.",
  },
  {
    n: "03",
    t: "UI/UX design",
    d: "Interface design across web and mobile products, responsive behaviour and redlined specs.",
  },
  {
    n: "04",
    t: "Product design",
    d: "Requirements, flows, research and prototypes — owning problems rather than screens.",
  },
  {
    n: "05",
    t: "Senior product design",
    d: "Design systems, team mentoring, stakeholder alignment and delivery quality.",
  },
];

const SKILLS: Array<{ h: string; items: string[] }> = [
  { h: "Product", items: ["Product thinking", "Feature design", "User flows", "Concept development", "Requirements translation"] },
  { h: "UX", items: ["User research", "Information architecture", "Usability testing", "Journey mapping", "Personas"] },
  { h: "UI", items: ["Visual design", "Typography", "Responsive design", "Interaction design", "Iconography"] },
  { h: "Systems", items: ["Design systems", "Components", "Tokens", "Documentation", "Redlines & handoff"] },
  { h: "Leadership", items: ["Mentoring designers", "Design reviews", "Stakeholder management", "Cross-functional collaboration", "Project management"] },
  { h: "Tools", items: ["Figma", "Sketch", "Adobe CC", "Adobe XD", "Jira"] },
];

const EDUCATION = [
  { when: "Apr — Jun 2020", what: "User Research", where: "IxDF — The Interaction Design Foundation" },
  { when: "Apr — Jun 2020", what: "Mobile User Experience", where: "IxDF — The Interaction Design Foundation" },
  { when: "2003 — 2005", what: "Diploma of Computer Arts, Graphic Design", where: "(Kumudra) Forever Group" },
  { when: "2001 — 2005", what: "Bachelor of Science", where: "University of East Yangon" },
];

const INTERESTS = [
  { h: "Photography", p: "Capturing moments that inspire creativity." },
  { h: "Sketching", p: "Pen and paper concepts before digital execution." },
  { h: "Traveling", p: "Exploring cultures and landscapes to fuel design ideas." },
];

export default function AboutPage() {
  return (
    <>
      <div className="shell page-head">
        <div className="about-open">
          <div>
            <span className="tick">About</span>
            <Reveal as="h1" style={{ marginTop: 16, fontSize: "var(--step-4)" }}>
              <span className="mask">
                <span className="ln">Designer by craft.</span>
              </span>
              <span className="mask mask--d1">
                <span className="ln">Problem solver by nature.</span>
              </span>
            </Reveal>
            <Reveal as="p" className="lede" style={{ marginTop: 26 }}>
              Senior Product UI/UX Designer with 7+ years designing digital products that are
              visually engaging and deeply user-centered.
            </Reveal>
          </div>
          <Reveal className="portrait" data-parallax="0.04">
            <svg
              viewBox="0 0 400 500"
              width="100%"
              height="100%"
              role="img"
              aria-label="Abstract portrait composition built from grid lines, type and colour"
            >
              <defs>
                <linearGradient id="pg1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="var(--c1)" />
                  <stop offset="1" stopColor="var(--c2)" />
                </linearGradient>
              </defs>
              <g stroke="var(--line)" strokeWidth="1" opacity=".7">
                <line x1="0" y1="125" x2="400" y2="125" />
                <line x1="0" y1="250" x2="400" y2="250" />
                <line x1="0" y1="375" x2="400" y2="375" />
                <line x1="100" y1="0" x2="100" y2="500" />
                <line x1="200" y1="0" x2="200" y2="500" />
                <line x1="300" y1="0" x2="300" y2="500" />
              </g>
              <circle cx="200" cy="215" r="112" fill="url(#pg1)" opacity=".5" />
              <circle cx="200" cy="215" r="112" stroke="var(--line-strong)" fill="none" />
              <path
                d="M60,410 C140,330 250,470 350,360"
                stroke="var(--c3)"
                strokeWidth="2"
                fill="none"
                className="dash-march"
              />
              <rect x="60" y="60" width="26" height="26" fill="var(--c4)" rx="2" />
              <text x="60" y="466" fontFamily="ui-monospace,monospace" fontSize="11" fill="var(--text-3)" letterSpacing="2">
                YANGON · MYANMAR
              </text>
              <text x="340" y="466" textAnchor="end" fontFamily="ui-monospace,monospace" fontSize="11" fill="var(--text-3)" letterSpacing="2">
                PMH
              </text>
            </svg>
          </Reveal>
        </div>
      </div>

      <Reveal as="section" className="section section--tight">
        <div
          className="shell"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,.34fr) minmax(0,1fr)",
            gap: "clamp(20px,4vw,64px)",
          }}
        >
          <span className="tick">The story</span>
          <div>
            <p className="body-copy">
              I specialise in turning complex problems into elegant, intuitive interfaces that
              support business results and user satisfaction. My process is grounded in research,
              strategy and collaboration. I&apos;ve led cross-functional design initiatives in
              fast-paced tech environments, from startups to enterprise platforms — from wireframes
              to high-fidelity prototypes, user journeys to interaction design, making sure every
              detail aligns with both user needs and product goals.
            </p>
            <p className="body-copy" style={{ marginTop: 20 }}>
              I work in Figma, Sketch and Adobe CC alongside user-testing tools, and I care about
              accessibility, design systems and keeping current with how interface patterns evolve.
              My route into product design started in visual and graphic design, and that
              foundation still shows up in how I treat type, colour and composition.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <div className="shell">
          <SectionHead
            tick="Career progression"
            title="From craft to system"
            meta={<span className="mono">2003 → PRESENT</span>}
          />
          <Reveal className="ladder stagger">
            {LADDER.map((s) => (
              <div key={s.n} className="ladder__step">
                <div className="ladder__node">{s.n}</div>
                <div>
                  <h4>{s.t}</h4>
                  <p>{s.d}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <div className="shell">
          <SectionHead
            tick="Skills"
            title="Grouped, not graded"
            meta={
              <p className="body-copy" style={{ fontSize: 15 }}>
                No invented percentages. These are the areas I&apos;m accountable for day to day.
              </p>
            }
          />
          <Reveal className="skillgrid stagger">
            {SKILLS.map((s) => (
              <div key={s.h} className="skillset">
                <h4>{s.h}</h4>
                <ul>
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <div className="shell">
          <SectionHead tick="Education" title="Learning, on record" />
          <Reveal className="stagger">
            {EDUCATION.map((e) => (
              <div key={e.what} className="edu__row">
                <b>{e.when}</b>
                <div>
                  <b>{e.what}</b>
                  <p>{e.where}</p>
                </div>
              </div>
            ))}
          </Reveal>
          <div className="head" style={{ marginTop: "var(--rhythm)" }}>
            <div>
              <span className="tick">Outside the file</span>
              <h2 className="head__title mask" style={{ marginTop: 14 }}>
                <span>Interests</span>
              </h2>
            </div>
          </div>
          <Reveal className="case-cols--3 case-cols stagger">
            {INTERESTS.map((item) => (
              <div key={item.h} className="card-lite">
                <h5>{item.h}</h5>
                <p>{item.p}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Reveal>
    </>
  );
}
