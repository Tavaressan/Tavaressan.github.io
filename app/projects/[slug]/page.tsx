import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail/project-detail";
import { allProjects, getCaseStudy } from "@/content/projects";

// Apenas projetos com estudo de caso (8 projetos: 3 selecionados + 5 acadêmicos)
export const dynamicParams = false;

export function generateStaticParams() {
  return allProjects.filter((p) => p.caseStudy).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getCaseStudy(slug);
  return p ? { title: `${p.title} · Vitor Tavares Chaves`, description: p.summary } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}

