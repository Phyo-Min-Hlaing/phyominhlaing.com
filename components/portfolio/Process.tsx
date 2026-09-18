"use client";

import { useEffect, useRef, useState } from "react";
import { PROCESS_STEPS } from "@/data/process";
import { Artwork } from "@/lib/portfolio/artwork";
import { Reveal } from "@/components/portfolio/Reveal";
import { cn } from "@/lib/utils";

/** Horizontal process strip with scroll-linked progress line. */
export function ProcessStrip() {
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLElement>(null);
  // Active step is React state (rendered as `is-on`), never toggled via
  // direct DOM manipulation — that breaks hydration reconciliation.
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const max = track.scrollWidth - track.clientWidth;
      const p = max > 0 ? track.scrollLeft / max : 0;
      if (fillRef.current) fillRef.current.style.transform = `scaleX(${p})`;
      const steps = Array.from(track.querySelectorAll(".proc__step"));
      const center = track.scrollLeft + track.clientWidth / 2;
      let next = 0;
      steps.forEach((step, i) => {
        if ((step as HTMLElement).offsetLeft < center) next = i;
      });
      setActive((prev) => (prev === next ? prev : next));
    };
    onScroll();
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div className="proc__line" aria-hidden="true">
        <i ref={fillRef as React.RefObject<HTMLElement>} />
      </div>
      <div className="proc__track" ref={trackRef}>
        {PROCESS_STEPS.map((s, i) => (
          <div key={s.title} className={cn("proc__step", i <= active && "is-on")} data-step={i}>
            <div className="proc__dot" />
            <span className="mono">{String(i + 1).padStart(2, "0")}</span>
            <h4>{s.title}</h4>
            <p>{s.description}</p>
            <ul className="proc__acts">
              {s.activities.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Full process page blocks (mirrors template: all steps except Explore). */
export function ProcessBlocks() {
  const steps = PROCESS_STEPS.filter((s) => s.title !== "Explore");
  return (
    <div id="processSteps">
      {steps.map((s, i) => (
        <div key={s.title} className="step-block">
          <Reveal>
            <div className="step-block__no">
              STEP {String(i + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
            </div>
            <h3>{s.title}</h3>
            <p className="body-copy">{s.description}</p>
            <div className="chips">
              {s.activities.map((a) => (
                <span key={a} className="tag">
                  {a}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal className="step-block__art">
            <Artwork kind={s.art} />
          </Reveal>
        </div>
      ))}
    </div>
  );
}
