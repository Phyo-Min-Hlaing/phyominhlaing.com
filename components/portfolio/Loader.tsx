"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const STORAGE_KEY = "pmh-intro";

// Layout effect on the client (no-op on the server) so a returning visitor
// never flashes the intro. Crucially, NOTHING browser-specific is read during
// render — doing so (e.g. useState(() => sessionStorage…)) makes the first
// client render differ from SSR HTML and breaks hydration on repeat visits.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** Intro loader — mirrors the template: plays once per session. */
export function Loader() {
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      /* ignore */
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) {
      // Pre-paint hide: no flash, no extra render, SSR HTML still matches.
      ref.current?.setAttribute("hidden", "");
      return;
    }
    document.body.classList.add("is-locked");
    const t = window.setTimeout(() => {
      setDone(true);
      document.body.classList.remove("is-locked");
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
    }, 1250);
    return () => {
      window.clearTimeout(t);
      document.body.classList.remove("is-locked");
    };
  }, []);

  if (done) return null;

  return (
    <div id="loader" ref={ref} aria-hidden="true">
      <div className="loader__mark">
        <svg className="loader__ring" viewBox="0 0 200 200" fill="none" aria-hidden="true">
          <circle cx="100" cy="100" r="86" stroke="var(--line)" strokeWidth="1" />
          <circle
            cx="100"
            cy="100"
            r="86"
            stroke="var(--c1)"
            strokeWidth="1.5"
            strokeDasharray="30 510"
            strokeLinecap="round"
          />
          <circle cx="186" cy="100" r="4" fill="var(--c2)" />
        </svg>
        <div className="loader__coords" aria-hidden="true">
          <i>X 000</i>
          <i>Y 000</i>
          <i>W 1440</i>
          <i>H 900</i>
        </div>
        <div className="loader__letters">
          <span>P</span>
          <span>M</span>
          <span>H</span>
        </div>
        <div className="loader__bar">
          <i />
        </div>
      </div>
    </div>
  );
}
