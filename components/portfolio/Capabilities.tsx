"use client";

import { useState } from "react";
import { CAPABILITIES } from "@/data/capabilities";
import { Artwork } from "@/lib/portfolio/artwork";
import { cn } from "@/lib/utils";

export function Capabilities() {
  const [active, setActive] = useState(0);
  const current = CAPABILITIES[active];

  return (
    <>
      <div className="caps">
        <div className="caps__list" aria-label="Capabilities">
          {CAPABILITIES.map((c, i) => (
            <button
              key={c.title}
              className={cn("caps__item", i === active && "is-on")}
              aria-pressed={i === active}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              <em>{String(i + 1).padStart(2, "0")}</em>
              <b>{c.title}</b>
            </button>
          ))}
        </div>
        <div className="caps__panel" aria-live="polite">
          <div className="caps__fade" key={current.title}>
            <span className="mono">{String(active + 1).padStart(2, "0")} / 10</span>
            <h3>{current.title}</h3>
            <p>{current.description}</p>
            <div className="caps__tags">
              {current.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            <div className="caps__fig">
              <div
                style={{
                  aspectRatio: "16/9",
                  borderRadius: "var(--r-md)",
                  overflow: "hidden",
                  border: "1px solid var(--line)",
                  position: "relative",
                }}
              >
                <Artwork kind={current.fig} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="caps__acc">
        {CAPABILITIES.map((c, i) => (
          <details
            key={c.title}
            className="caps__accitem"
            style={{ borderBottom: "1px solid var(--line)", padding: "14px 0" }}
          >
            <summary
              style={{
                cursor: "pointer",
                display: "flex",
                gap: 12,
                alignItems: "baseline",
                fontFamily: "var(--font-display)",
                fontWeight: "var(--display-weight)",
                fontSize: "var(--step-1)",
                letterSpacing: "var(--display-tracking)",
              }}
            >
              <em className="mono" style={{ fontStyle: "normal", color: "var(--c1)" }}>
                {String(i + 1).padStart(2, "0")}
              </em>
              {c.title}
            </summary>
            <p style={{ color: "var(--text-2)", fontSize: 14.5, marginTop: 10 }}>{c.description}</p>
            <div className="caps__tags" style={{ marginTop: 12 }}>
              {c.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </details>
        ))}
      </div>
    </>
  );
}
