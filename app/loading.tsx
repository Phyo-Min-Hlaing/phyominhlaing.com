import { Reveal } from "@/components/portfolio/Reveal";

export default function Loading() {
  return (
    <div className="shell page-head" aria-busy="true" aria-label="Loading">
      <span className="tick">Loading</span>
      <Reveal as="h1" className="mask" style={{ marginTop: 16 }}>
        <span>Setting up the grid…</span>
      </Reveal>
    </div>
  );
}
