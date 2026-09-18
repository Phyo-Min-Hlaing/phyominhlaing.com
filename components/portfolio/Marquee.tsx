import { Fragment } from "react";
import { MARQUEE_WORDS } from "@/data/site";

export function Marquee() {
  const doubled = [...MARQUEE_WORDS, ...MARQUEE_WORDS];
  return (
    <div className="marq" aria-hidden="true">
      <div className="marq__track">
        {doubled.map((w, i) => (
          <Fragment key={i}>
            <i />
            <span>{w}</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
