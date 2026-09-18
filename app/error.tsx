"use client";

import Link from "next/link";
import { Reveal } from "@/components/portfolio/Reveal";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="shell page-head">
      <span className="tick">Something went wrong</span>
      <Reveal as="h1" className="mask" style={{ marginTop: 16 }}>
        <span>
          A render hiccup.
          <br />
          Nothing lost.
        </span>
      </Reveal>
      <p className="body-copy" style={{ fontSize: 16, marginTop: 24 }}>
        Try again, or head back home and keep exploring.
      </p>
      <div className="hero__cta" style={{ marginTop: 32 }}>
        <button className="btn btn--primary" onClick={() => reset()}>
          <span>Try again</span>
        </button>
        <Link href="/" className="btn btn--ghost">
          <span>Back home</span>
        </Link>
      </div>
    </div>
  );
}
