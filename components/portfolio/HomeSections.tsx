"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { PRINCIPLES } from "@/data/principles";
import { Reveal } from "@/components/portfolio/Reveal";

const PSYM = [
  '<svg width="72" height="72" viewBox="0 0 72 72" fill="none"><circle cx="36" cy="26" r="13" stroke="var(--c1)" stroke-width="2"/><path d="M12 62c0-13 11-21 24-21s24 8 24 21" stroke="var(--c2)" stroke-width="2" stroke-linecap="round"/></svg>',
  '<svg width="72" height="72" viewBox="0 0 72 72" fill="none"><path d="M8 20h56M8 36h36M8 52h16" stroke="var(--c1)" stroke-width="2" stroke-linecap="round"/><circle cx="58" cy="52" r="8" fill="var(--c3)"/></svg>',
  '<svg width="72" height="72" viewBox="0 0 72 72" fill="none"><rect x="8" y="8" width="24" height="24" rx="4" stroke="var(--c1)" stroke-width="2"/><rect x="40" y="8" width="24" height="24" rx="12" fill="var(--c2)"/><rect x="8" y="40" width="24" height="24" rx="12" fill="var(--c3)"/><rect x="40" y="40" width="24" height="24" rx="4" stroke="var(--c4)" stroke-width="2"/></svg>',
  '<svg width="72" height="72" viewBox="0 0 72 72" fill="none"><circle cx="36" cy="36" r="26" stroke="var(--line-strong)" stroke-width="1" stroke-dasharray="3 5"/><circle cx="36" cy="36" r="13" stroke="var(--c1)" stroke-width="2"/><circle cx="36" cy="36" r="4" fill="var(--c2)"/><path d="M36 4v8M36 60v8M4 36h8M60 36h8" stroke="var(--c3)" stroke-width="2" stroke-linecap="round"/></svg>',
];

export const EXPERIENCE = [
  {
    period: ["Feb 2021", "— Present"],
    role: "Senior Product UI/UX Designer",
    company: "Oway Travel · Full-time",
    points: [
      "Own design libraries and design systems, held to product branding requirements.",
      "Oversee the development and delivery of effective user interfaces.",
      "Manage a team of junior UI designers, providing training and support.",
      "Work with digital analytics to assess the impact of UI and usability changes.",
      "Support research, interviews, surveys and usability studies, turning findings into wireframes and prototypes.",
    ],
  },
  {
    period: ["Aug 2019", "— Sep 2020"],
    role: "Product UI/UX Designer",
    company: "Flymya Travel · Full-time",
    points: [
      "Gathered and evaluated user requirements with product managers and engineers.",
      "Illustrated ideas through storyboards, process flows and sitemaps.",
      "Designed interface elements, navigation and search patterns.",
      "Built mockups and prototypes showing how products look and behave.",
      "Presented drafts to internal teams and stakeholders, adjusting layouts from feedback.",
    ],
  },
  {
    period: ["Feb 2018", "— Jul 2019"],
    role: "Product UI/UX Designer",
    company: "Oway Travel · Full-time",
    points: [
      "Interface design across Oway Travel, Oway Ride and Mini Oway — flights, hotels, tours, express bus, visa and car rental.",
      "iOS and Android interface design for all products and services.",
      "Responsive design from web to mobile, with redlined UI documentation.",
      "Prototyping for all products and services; logo and icon work for web and mobile builds.",
    ],
  },
] as const;

export function Experience() {
  return (
    <Reveal className="xp stagger">
      {EXPERIENCE.map((xp) => (
        <div key={xp.role + xp.company} className="xp__row">
          <div className="xp__year">
            <b />
            {xp.period[0]}
            <br />
            {xp.period[1]}
          </div>
          <div>
            <h3 className="xp__role">{xp.role}</h3>
            <p className="xp__co">{xp.company}</p>
          </div>
          <div className="xp__body">
            <ul>
              {xp.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </Reveal>
  );
}

function Count({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      const t = setTimeout(() => setValue(target), 0);
      return () => clearTimeout(t);
    }
    let raf = 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.disconnect();
          if (reduce) {
            setValue(target);
            continue;
          }
          const start = performance.now();
          const dur = 1200;
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / dur);
            setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target]);

  return (
    <span ref={ref} data-count={target}>
      {value}
    </span>
  );
}

export function Counters() {
  return (
    <Reveal className="nums stagger">
      <div className="num">
        <b>
          <Count target={7} />+
        </b>
        <span>Years designing digital products end to end</span>
      </div>
      <div className="num">
        <b>
          <Count target={14} />+
        </b>
        <span>Years across visual, graphic and digital design</span>
      </div>
      <div className="num">
        <b style={{ fontSize: "var(--step-3)", lineHeight: 1.05 }}>
          Mobile
          <br />+ Web
        </b>
        <span>Native apps, responsive platforms and admin tools</span>
      </div>
    </Reveal>
  );
}

export function Principles() {
  return (
    <Reveal className="prin stagger" id="principles">
      {PRINCIPLES.map((p, i) => (
        <div key={p.title} className="prin__item">
          <span dangerouslySetInnerHTML={{ __html: PSYM[i] }} />
          <em>{p.n}</em>
          <h4>{p.title}</h4>
          <p>{p.description}</p>
        </div>
      ))}
    </Reveal>
  );
}

export function BigCta() {
  return (
    <section className="bigcta">
      <div className="bigcta__blob" aria-hidden="true" />
      <Reveal className="shell bigcta__in">
        <h2>
          <span className="mask">
            <span className="ln">Have a product</span>
          </span>
          <span className="mask mask--d1">
            <span className="ln">worth improving?</span>
          </span>
          <span className="mask mask--d2">
            <span className="ln">Let&apos;s design it together.</span>
          </span>
        </h2>
        <Link href="/contact" className="btn btn--primary" data-magnetic>
          <span>Start a conversation</span>
        </Link>
      </Reveal>
    </section>
  );
}
