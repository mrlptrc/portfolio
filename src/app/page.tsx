"use client";

import { ArrowDown, ArrowUpRight, Github } from "lucide-react";
import { usePreferences } from "@/components/site-preferences";
import { projects } from "@/content/projects";
import { experience } from "@/content/experience";
import { localizeExperience, ui } from "@/content/i18n";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { locale } = usePreferences();
  const copy = ui[locale];
  const localizedExperience = experience.map((item) => localizeExperience(item, locale));
  const professionals = localizedExperience.slice(0, 3);
  const personal = localizedExperience[3];
  const education = localizedExperience[4];
  const stackGroups = [
    { label: copy.frontend, items: ["TypeScript", "React", "Next.js"] },
    { label: copy.backend, items: ["Node.js", "Java", "Spring Boot"] },
    { label: copy.dataInfrastructure, items: ["PostgreSQL", "Supabase", "Redis", "RabbitMQ", "Docker"] },
    { label: copy.automation, items: ["n8n", "APIs", "Webhooks"] },
  ];
  const flow = [copy.flowInput, "APIs", copy.flowProcesses, copy.flowIntegrations, copy.flowOutput];

  return <>
    <SiteHeader />
    <main>
      <section className="hero-grid mx-auto max-w-6xl px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-24">
        <div className="flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-xl font-semibold uppercase tracking-[-.02em] text-zinc-100">{copy.name}</p>
          <p className="font-mono text-xs uppercase tracking-[.16em] text-zinc-500">{copy.location}</p>
        </div>
        <div className="mt-12 grid gap-14 lg:grid-cols-[1fr_17rem] lg:items-end">
          <div>
            <h1 className="animate-enter max-w-4xl text-5xl font-medium leading-[.94] tracking-[-.06em] text-zinc-100 sm:text-7xl lg:text-[6.2rem]">{copy.heroBefore} <span className="font-display italic font-normal text-brand">{copy.heroAccent}</span> {copy.heroAfter}</h1>
            <p className="animate-enter animate-enter-delay mt-8 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">{copy.intro}</p>
            <p className="animate-enter animate-enter-delay-2 mt-4 max-w-xl text-sm leading-6 text-zinc-500">{copy.current}</p>
          </div>
          <div aria-label="System flow" className="border-y border-white/10 font-mono text-[11px] uppercase tracking-[.12em] text-zinc-500">
            {flow.map((item, index) => <div key={item} className="grid grid-cols-[1.5rem_1fr_auto] items-center gap-3 border-t border-white/10 py-3 first:border-0"><span className="text-brand">{String(index + 1).padStart(2, "0")}</span><span>{item}</span><span aria-hidden="true" className="text-zinc-600">{index < flow.length - 1 ? "↓" : "●"}</span></div>)}
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-8 border-t border-white/10 pt-5">
          <div className="flex flex-wrap gap-3"><Button asChild><a href="#work">{copy.viewProjects} <ArrowDown size={15} /></a></Button><a href="https://github.com/mrlptrc" target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center rounded-full px-5 text-sm text-zinc-300 transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">GitHub <ArrowUpRight size={15} /></a></div>
          <a href="#work" className="flex items-center gap-2 text-xs text-zinc-500 transition-colors hover:text-brand">{copy.explore} <ArrowDown size={14} /></a>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading index="01" title={copy.selectedProjects} />
        <p className="mb-10 max-w-xl text-base leading-7 text-zinc-400">{copy.projectsIntro}</p>
        <ProjectCard project={projects[0]} featured />
        <div className="grid gap-x-8 md:grid-cols-2">{projects.slice(1).map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading index="02" title={copy.professionalExperience} />
        <p className="mb-10 max-w-xl text-base leading-7 text-zinc-400">{copy.experienceIntro}</p>
        <ol>{professionals.map((item) => <li key={item.company} className="grid gap-2 border-t border-white/10 py-6 md:grid-cols-[1fr_1.25fr_.75fr] md:gap-8"><h3 className="text-lg text-zinc-200">{item.company}</h3><div><p className="text-sm text-brand">{item.role}</p><p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">{item.description}</p></div><p className="font-mono text-xs text-zinc-500 md:text-right">{item.period}</p></li>)}</ol>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {[{ label: copy.education, item: education }, { label: copy.personalProjects, item: personal }].map(({ label, item }) => <div key={label} className="border-t border-white/10 pt-4"><p className="font-mono text-xs uppercase tracking-[.15em] text-brand">{label}</p><h3 className="mt-5 text-lg text-zinc-200">{item.company}</h3><p className="mt-1 text-sm text-zinc-400">{item.role}</p><p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">{item.description}</p><p className="mt-4 font-mono text-xs text-zinc-500">{item.period}</p></div>)}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-36">
        <SectionHeading index="03" title={copy.about} />
        <div className="grid gap-12 md:grid-cols-[1.35fr_.65fr] md:items-end">
          <p className="font-display max-w-4xl text-5xl leading-[.95] tracking-[-.035em] text-zinc-100 sm:text-7xl lg:text-8xl">{copy.aboutTitle}</p>
          <div className="space-y-6 text-base leading-7 text-zinc-400"><p>{copy.aboutText}</p><p>{copy.aboutFocus}</p><a href="https://github.com/mrlptrc" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-brand transition-colors hover:text-brand-strong">{copy.seeCode} <ArrowUpRight size={15} /></a></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading index="04" title={copy.stack} />
        <p className="mb-10 max-w-xl text-base leading-7 text-zinc-400">{copy.stackIntro}</p>
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">{stackGroups.map((group) => <div key={group.label} className="border-t border-white/10 pt-4"><h3 className="font-mono text-xs uppercase tracking-[.14em] text-brand">{group.label}</h3><ul className="mt-5 space-y-3">{group.items.map((item) => <li key={item} className="text-sm text-zinc-300">{item}</li>)}</ul></div>)}</div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"><SectionHeading index="05" title={copy.contact} /><div className="flex flex-col justify-between gap-12 border-b border-white/10 pb-20 md:flex-row"><h2 className="font-display max-w-2xl text-5xl leading-[.95] tracking-tight text-zinc-100 sm:text-7xl">{copy.contactBefore} <span className="italic text-brand">{copy.contactAccent}</span> {copy.contactAfter}</h2><div className="flex flex-col items-start gap-7 md:pt-3"><p className="max-w-xs text-sm leading-6 text-zinc-400">{copy.contactText}</p><Button asChild><a href="https://github.com/mrlptrc" target="_blank" rel="noreferrer"><Github size={15} /> github.com/mrlptrc</a></Button></div></div></section>
    </main>
    <SiteFooter />
  </>;
}
