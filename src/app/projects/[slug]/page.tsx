import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject } from "@/content/projects";
import { ProjectDetails } from "@/components/project-details";
import { cookies } from "next/headers";
import { localizeProject, type Locale } from "@/content/i18n";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  const savedLocale = (await cookies()).get("portfolio-locale")?.value;
  const locale: Locale = savedLocale === "en" || savedLocale === "es" ? savedLocale : "pt";
  const content = localizeProject(project, locale);
  return { title: content.title, description: content.description, openGraph: { title: content.title, description: content.description, images: [content.image] } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return <ProjectDetails project={project} />;
}
