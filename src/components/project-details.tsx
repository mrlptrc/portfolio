"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import type { Project } from "@/content/projects";
import { localizeProject, ui } from "@/content/i18n";
import { usePreferences } from "@/components/site-preferences";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export function ProjectDetails({ project }: { project: Project }) {
  const { locale } = usePreferences();
  const content = localizeProject(project, locale);
  const copy = ui[locale];
  return <>
    <SiteHeader />
    <main className="mx-auto max-w-6xl px-5 sm:px-8">
      <section className="py-16 sm:py-24">
        <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-brand transition-colors hover:text-brand-strong"><ArrowLeft size={15} /> {copy.allProjects}</Link>
        <div className="mt-16 grid gap-10 md:grid-cols-[1.35fr_.65fr]">
          <div><p className="font-mono text-xs uppercase tracking-[.15em] text-brand">{content.eyebrow} · {content.year}</p><h1 className="mt-5 text-5xl tracking-[-.05em] text-zinc-100 sm:text-7xl">{content.title}</h1><p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">{content.description}</p></div>
          <div className="flex items-end"><Button asChild><a href={content.github} target="_blank" rel="noreferrer"><Github size={15} /> {copy.viewCode}</a></Button></div>
        </div>
      </section>
      <Image className="w-full border border-white/10 bg-zinc-900" src={content.image} alt={content.imageAlt} width={1440} height={960} priority />
    </main>
    <article className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-16 md:grid-cols-[.65fr_1.35fr]"><SectionHeading index="01" title={copy.context} className="mb-0" /><p className="max-w-2xl text-xl leading-8 text-zinc-300">{content.overview}</p></div>
      <div className="mt-20 grid gap-16 md:grid-cols-[.65fr_1.35fr]"><SectionHeading index="02" title={copy.problem} className="mb-0" /><p className="max-w-2xl text-lg leading-8 text-zinc-400">{content.problem}</p></div>
      <div className="mt-20 grid gap-16 md:grid-cols-[.65fr_1.35fr]"><SectionHeading index="03" title={copy.approach} className="mb-0" /><p className="max-w-2xl text-lg leading-8 text-zinc-400">{content.solution}</p></div>
      <div className="mt-20 grid gap-16 md:grid-cols-[.65fr_1.35fr]"><SectionHeading index="04" title={copy.decisions} className="mb-0" /><ul className="space-y-4">{content.decisions.map((decision, index) => <li key={decision} className="flex gap-5 border-t border-white/10 pt-4 text-zinc-400"><span className="font-mono text-xs text-brand">{String(index + 1).padStart(2, "0")}</span><span className="leading-6">{decision}</span></li>)}</ul></div>
      <div className="mt-20 grid gap-16 md:grid-cols-[.65fr_1.35fr]"><SectionHeading index="05" title={copy.stackScope} className="mb-0" /><div><div className="flex flex-wrap gap-2">{content.stack.map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-300">{item}</span>)}</div><dl className="mt-10 grid grid-cols-2 gap-4">{content.metrics.map((metric) => <div key={metric.label} className="border-t border-white/10 pt-3"><dd className="text-xl text-zinc-100">{metric.value}</dd><dt className="mt-1 text-sm text-zinc-500">{metric.label}</dt></div>)}</dl></div></div>
    </article>
    <SiteFooter />
  </>;
}
