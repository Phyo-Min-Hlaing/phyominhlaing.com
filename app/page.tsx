import type { Metadata } from "next";
import Link from "next/link";
import { Capabilities } from "@/components/portfolio/Capabilities";
import { HeroOrbit } from "@/components/portfolio/HeroOrbit";
import {
  BigCta,
  Counters,
  Experience,
  Principles,
} from "@/components/portfolio/HomeSections";
import { Marquee } from "@/components/portfolio/Marquee";
import { Playground } from "@/components/portfolio/Playground";
import { ProcessStrip } from "@/components/portfolio/Process";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionHead } from "@/components/portfolio/SectionHead";
import { PROJECTS } from "@/data/projects";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Phyo Min Hlaing — Senior Product UI/UX Designer",
  description: SITE.description,
  alternates: { canonical: "/" },
};

const HOME_SPANS = ["wide", "tall", "full", "half", "half", "closer"] as const;

export default function HomePage() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <div className="hero">
        <div className="hero__grid" aria-hidden="true" />
        <div className="shell hero__inner">
          <div className="hero__copywrap">
            <p className="hero__status">
              <b aria-hidden="true" />
              Available for selected opportunities
            </p>
            <Reveal as="h1" className="hero__name">
              <span className="mask">
                <span className="ln">Phyo</span>
              </span>
              <span className="mask mask--d1">
                <span className="ln">Min</span>
              </span>
              <span className="mask mask--d2">
                <span className="ln">Hlaing</span>
              </span>
            </Reveal>
            <Reveal className="hero__role">
              <h2>Senior Product UI/UX Designer</h2>
              <span aria-hidden="true" />
              <span className="mono">7+ YRS</span>
            </Reveal>
            <Reveal as="p" className="hero__claim">
              I design digital experiences that make complexity feel simple.
            </Reveal>
            <Reveal as="p" className="hero__copy">
              Product designer combining UX thinking, interaction design, visual craft and system
              thinking to build useful, memorable digital products — across mobile apps and web
              platforms.
            </Reveal>
            <Reveal className="hero__cta">
              <Link href="/work" className="btn btn--primary" data-magnetic>
                <span>Explore my work</span>
              </Link>
              <Link href="/contact" className="btn btn--ghost" data-magnetic>
                <span>Let&apos;s talk</span>
              </Link>
            </Reveal>
            <div className="hero__scroll" aria-hidden="true">
              <i />
              Scroll to explore
            </div>
          </div>
          <HeroOrbit />
        </div>
      </div>

      {/* Statement */}
      <Reveal as="section" className="section statement">
        <div className="shell statement__grid">
          <h2 className="statement__text">
            <span className="mask">
              <span className="ln ln--a">Design is not decoration.</span>
            </span>
            <span className="mask mask--d1">
              <span className="ln">It is how a product</span>
            </span>
            <span className="mask mask--d2">
              <span className="ln">
                <em>thinks</em>, behaves,
              </span>
            </span>
            <span className="mask mask--d3">
              <span className="ln">and communicates.</span>
            </span>
          </h2>
          <Reveal>
            <p className="body-copy">
              Every screen is the visible part of a decision: what the product understands about a
              person, what it asks of them, and what it does on their behalf. My work sits in that
              space — shaping flows, interaction models and systems before shaping pixels, then
              making the pixels earn their place.
            </p>
          </Reveal>
        </div>
      </Reveal>

      {/* Selected work */}
      <Reveal as="section" className="section" id="work-anchor">
        <div className="shell">
          <SectionHead
            tick="Selected work"
            title={
              <>
                Products, interfaces
                <br />
                and systems
              </>
            }
            meta={
              <>
                <p className="body-copy" style={{ fontSize: 15 }}>
                  Six projects from travel, mobility, fintech and loyalty products — booking flows,
                  native apps, admin platforms and the design systems holding them together.
                </p>
                <Link
                  href="/work"
                  className="btn btn--ghost btn--sm"
                  style={{ marginTop: 18 }}
                  data-magnetic
                >
                  <span>View full archive</span>
                </Link>
              </>
            }
          />
          <div className="work-gallery">
            {featured.map((p, i) => (
              <ProjectCard key={p.id} project={p} span={HOME_SPANS[i % HOME_SPANS.length]} />
            ))}
          </div>
        </div>
      </Reveal>

      {/* Capabilities */}
      <Reveal as="section" className="section">
        <div className="shell">
          <SectionHead
            tick="What I do"
            title={
              <>
                Ten ways I move
                <br />a product forward
              </>
            }
            meta={<span className="mono">HOVER OR FOCUS A CAPABILITY — 01 / 10</span>}
          />
          <Capabilities />
        </div>
      </Reveal>

      {/* Process strip */}
      <Reveal as="section" className="section proc" id="procSection">
        <div className="shell">
          <SectionHead
            tick="How I work"
            title="A loop, not a line"
            meta={
              <>
                <p className="body-copy" style={{ fontSize: 15 }}>
                  Eight stages that repeat at different speeds depending on risk. Small features
                  skip ahead; new products earn every step.
                </p>
                <Link
                  href="/process"
                  className="btn btn--ghost btn--sm"
                  style={{ marginTop: 18 }}
                  data-magnetic
                >
                  <span>See the full process</span>
                </Link>
              </>
            }
          />
          <ProcessStrip />
        </div>
      </Reveal>

      <Marquee />

      {/* Playground */}
      <Reveal as="section" className="section">
        <div className="shell">
          <SectionHead
            tick="Experiments / Playground"
            title="Off-brief, on purpose"
            meta={
              <p className="body-copy" style={{ fontSize: 15 }}>
                Small studies in colour, type, motion and state. Not client work — the place where
                craft gets practised.
              </p>
            }
          />
          <Playground />
        </div>
      </Reveal>

      {/* Experience */}
      <Reveal as="section" className="section">
        <div className="shell">
          <SectionHead
            tick="Experience"
            title="Where the work happened"
            meta={<span className="mono">2018 — PRESENT / PRODUCT DESIGN</span>}
          />
          <Experience />
        </div>
      </Reveal>

      {/* Numbers */}
      <Reveal as="section" className="section section--tight">
        <div className="shell">
          <Counters />
        </div>
      </Reveal>

      {/* Principles */}
      <Reveal as="section" className="section">
        <div className="shell">
          <SectionHead tick="Principles" title="Four things I hold to" />
          <Principles />
        </div>
      </Reveal>

      <BigCta />
    </>
  );
}
