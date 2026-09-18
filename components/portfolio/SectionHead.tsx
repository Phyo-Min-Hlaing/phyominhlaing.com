import type { ReactNode } from "react";
import { Reveal } from "@/components/portfolio/Reveal";

export function SectionHead({
  tick,
  title,
  meta,
}: {
  tick: string;
  title: ReactNode;
  meta?: ReactNode;
}) {
  return (
    <div className="head">
      <div>
        <span className="tick">{tick}</span>
        <h2 className="head__title mask" style={{ marginTop: 14 }}>
          <span>{title}</span>
        </h2>
      </div>
      {meta ? <div className="head__meta">{meta}</div> : null}
    </div>
  );
}

export function RevealSection({
  tick,
  title,
  meta,
  children,
  id,
}: {
  tick: string;
  title: ReactNode;
  meta?: ReactNode;
  children: ReactNode;
  id?: string;
}) {
  return (
    <Reveal as="section" className="section" id={id}>
      <div className="shell">
        <SectionHead tick={tick} title={title} meta={meta} />
        {children}
      </div>
    </Reveal>
  );
}
