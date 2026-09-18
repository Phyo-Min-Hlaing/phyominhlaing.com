import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/portfolio/CaseStudy";
import { PROJECTS } from "@/data/projects";
import { SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) return { title: "Case study not found" };
  return {
    title: `${project.name} — Case Study`,
    description: project.summary,
    alternates: { canonical: `/cases/${project.id}` },
    openGraph: {
      title: `${project.name} — Case Study`,
      description: project.summary,
      url: `${SITE_URL}/cases/${project.id}`,
      type: "article",
    },
  };
}

export default async function CasePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.summary,
    url: `${SITE_URL}/cases/${project.id}`,
    creator: {
      "@type": "Person",
      name: "Phyo Min Hlaing",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CaseStudy project={project} />
    </>
  );
}
