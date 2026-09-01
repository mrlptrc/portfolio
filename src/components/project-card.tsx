"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { usePreferences } from "@/components/site-preferences";
import { localizeProject, ui } from "@/content/i18n";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const { locale } = usePreferences();
  const content = localizeProject(project, locale);
  const copy = ui[locale];
  return <article className={cn("group border-t border-white/10 py-7", featured && "md:grid md:grid-cols-[1.45fr_.55fr] md:gap-12 md:py-10")}>
    <Link href={`/projects/${content.slug}`} className="block overflow-hidden border border-white/10 bg-zinc-900 transition-colors hover:border-brand/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
      <Image src={content.image} alt={content.imageAlt} width={featured ? 1200 : 960} height={featured ? 760 : 640} className={cn("w-full object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.015]", featured ? "aspect-[16/9]" : "aspect-[3/2]")} />
    </Link>
    <div className={cn("flex flex-col pt-5", featured && "md:pt-1")}>
      <div className="mb-6 flex items-center justify-between font-mono text-xs"><span className="text-brand">{content.eyebrow}</span><span className="text-zinc-500">{content.year}</span></div>
      <h3 className={cn("tracking-tight text-zinc-100", featured ? "text-4xl" : "text-2xl")}><Link className="transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand" href={`/projects/${content.slug}`}>{content.title}</Link></h3>
      <p className="mt-3 max-w-md text-sm leading-6 text-zinc-400">{content.description}</p>
      <Link href={`/projects/${content.slug}`} className="mt-auto flex w-fit items-center gap-2 pt-7 text-sm text-brand transition-colors hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">{copy.viewCase} <ArrowUpRight size={15} /></Link>
    </div>
  </article>;
}
