"use client";

import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Playground experiments ported from the template:
 * gradient study, type specimen, button states, shape & palette.
 */
export function Playground() {
  return (
    <div className="play">
      <GradientStudy />
      <TypeSpecimen />
      <ButtonLab />
      <ShapePalette />
    </div>
  );
}

function Experiment({
  title,
  sub,
  hint,
  children,
}: {
  title: string;
  sub: string;
  hint: string;
  children: React.ReactNode;
}) {
  return (
    <div className="exp">
      <div className="exp__stage">{children}</div>
      <div className="exp__bar">
        <span>
          <b>{title}</b>
          {sub}
        </span>
        <span className="exp__hint">{hint}</span>
      </div>
    </div>
  );
}

function GradientStudy() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [a, setA] = useState("—");
  const [b, setB] = useState("—");
  const [angle, setAngle] = useState("0°");

  const paint = useCallback((clientX: number) => {
    const box = boxRef.current;
    if (!box) return;
    const r = box.getBoundingClientRect();
    const px = (clientX - r.left) / r.width;
    const ang = Math.round(px * 360);
    const c1 = getComputedStyle(document.documentElement).getPropertyValue("--c1").trim() || "#8B5CF6";
    const c2 = getComputedStyle(document.documentElement).getPropertyValue("--c2").trim() || "#FF5A67";
    box.style.background = `linear-gradient(${ang}deg, ${c1}, ${c2})`;
    setA(c1.toUpperCase());
    setB(c2.toUpperCase());
    setAngle(`${ang}°`);
  }, []);

  return (
    <Experiment title="Gradient study" sub="Two stops, one angle" hint="Move / arrows">
      <div style={{ width: "100%" }}>
        <div
          className="gradbox"
          ref={boxRef}
          tabIndex={0}
          role="application"
          aria-label="Gradient study. Move the pointer or use arrow keys to change the blend angle."
          onMouseMove={(e) => paint(e.clientX)}
          onKeyDown={(e) => {
            const box = boxRef.current;
            if (!box) return;
            const r = box.getBoundingClientRect();
            if (e.key === "ArrowRight") paint(r.left + r.width * 0.75);
            if (e.key === "ArrowLeft") paint(r.left + r.width * 0.25);
          }}
        />
        <div className="gradbox__hex">
          <span>{a}</span>
          <span>{b}</span>
          <span>{angle}</span>
        </div>
      </div>
    </Experiment>
  );
}

function TypeSpecimen() {
  const [weight, setWeight] = useState(700);
  return (
    <Experiment title="Type specimen" sub="Weight as expression" hint="Drag">
      <div className="typo-play">
        <b style={{ ["--w" as string]: weight }}>Design</b>
        <label className="visually-hidden" htmlFor="typoRange">
          Type weight
        </label>
        <input
          id="typoRange"
          type="range"
          min={300}
          max={800}
          value={weight}
          step={10}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
        <div className="mono" style={{ marginTop: 10 }}>
          WEIGHT {weight} / TRACKING -0.04em
        </div>
      </div>
    </Experiment>
  );
}

function ButtonLab() {
  const [state, setState] = useState("default");
  const [go, setGo] = useState(false);

  const click = () => {
    setGo(true);
    setState("working");
    window.setTimeout(() => setState("done"), 650);
    window.setTimeout(() => {
      setGo(false);
      setState("default");
    }, 2200);
  };

  return (
    <Experiment title="Button states" sub="Confirmation you can feel" hint="Click">
      <div className="btn-lab">
        <button className={cn("lab-btn", go && "is-go")} onClick={click}>
          <i aria-hidden="true" />
          <span>{state === "done" ? "Added ✓" : state === "working" ? "Adding…" : "Add to project"}</span>
        </button>
        <p className="mono" style={{ textAlign: "center" }}>
          STATE: <span>{state}</span>
        </p>
      </div>
    </Experiment>
  );
}

const SWATCH_VARS = ["--c1", "--c2", "--c3", "--c4", "--c5"];

function ShapePalette() {
  const [alt, setAlt] = useState(false);
  const [flash, setFlash] = useState<string | null>(null);

  return (
    <Experiment title="Shape & palette" sub="Organic ↔ geometric" hint="Tap">
      <div style={{ display: "grid", gap: 26, justifyItems: "center", width: "100%" }}>
        <div
          className={cn("morph", alt && "alt")}
          role="button"
          tabIndex={0}
          aria-label="Toggle shape between organic and geometric"
          style={flash ? { background: flash } : undefined}
          onClick={() => setAlt((v) => !v)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setAlt((v) => !v);
            }
          }}
        />
        <div className="swatches">
          {SWATCH_VARS.map((v) => (
            <button
              key={v}
              className="swatch"
              style={{ background: `var(${v})` }}
              aria-label={`Accent ${v.replace("--", "")}`}
              onClick={(e) => {
                const bgv = getComputedStyle(e.currentTarget).backgroundColor;
                setFlash(bgv);
                window.setTimeout(() => setFlash(null), 1400);
              }}
            >
              <b>{v.replace("--", "").toUpperCase()}</b>
            </button>
          ))}
        </div>
      </div>
    </Experiment>
  );
}
