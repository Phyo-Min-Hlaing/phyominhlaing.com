import type { Metadata } from "next";
import { ProcessBlocks } from "@/components/portfolio/Process";
import { Reveal } from "@/components/portfolio/Reveal";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Seven steps, each with its own artefacts and its own way of being wrong early. The point isn't ceremony — it's reducing the cost of finding out.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <div className="shell page-head">
        <div className="page-head__row">
          <div>
            <span className="tick">Process</span>
            <Reveal as="h1" className="mask" style={{ marginTop: 16 }}>
              <span>
                How a product
                <br />
                gets designed
              </span>
            </Reveal>
          </div>
          <Reveal as="p" className="body-copy" style={{ fontSize: 16 }}>
            Seven steps, each with its own artefacts and its own way of being wrong early. The
            point isn&apos;t ceremony — it&apos;s reducing the cost of finding out.
          </Reveal>
        </div>
      </div>
      <div className="shell">
        <ProcessBlocks />
      </div>
    </>
  );
}
