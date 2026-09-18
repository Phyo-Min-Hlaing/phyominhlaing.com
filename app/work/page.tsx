import type { Metadata } from "next";
import { Reveal } from "@/components/portfolio/Reveal";
import { WorkArchive } from "@/components/portfolio/WorkArchive";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "A collection of product experiences, interfaces and design explorations — travel and mobility platforms, mobile apps, admin tools and brand-side visual work.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <div className="shell page-head">
        <div className="page-head__row">
          <div>
            <span className="tick">Archive</span>
            <Reveal as="h1" className="mask" style={{ marginTop: 16 }}>
              <span>Selected work</span>
            </Reveal>
          </div>
          <Reveal as="p" className="body-copy" style={{ fontSize: 16 }}>
            A collection of product experiences, interfaces and design explorations — travel and
            mobility platforms, mobile apps, admin tools and brand-side visual work.
          </Reveal>
        </div>
      </div>
      <div className="shell">
        <WorkArchive />
      </div>
    </>
  );
}
