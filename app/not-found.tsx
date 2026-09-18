import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/portfolio/Reveal";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="shell page-head">
      <span className="tick">404</span>
      <Reveal as="h1" className="mask" style={{ marginTop: 16 }}>
        <span>
          This page drifted
          <br />
          off the grid.
        </span>
      </Reveal>
      <Reveal as="p" className="body-copy" style={{ fontSize: 16, marginTop: 24 }}>
        The link may be old, or the page may have moved. The work archive is a good place to
        restart.
      </Reveal>
      <div className="hero__cta" style={{ marginTop: 32 }}>
        <Link href="/" className="btn btn--primary" data-magnetic>
          <span>Back home</span>
        </Link>
        <Link href="/work" className="btn btn--ghost" data-magnetic>
          <span>View work</span>
        </Link>
      </div>
    </div>
  );
}
