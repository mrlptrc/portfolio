"use client";

import Link from "next/link";
import { SiteControls, usePreferences } from "@/components/site-preferences";
import { ui } from "@/content/i18n";

export function SiteHeader() {
  const { locale } = usePreferences();
  const copy = ui[locale];
  const links = [
    { href: "/#work", label: copy.projectsNav },
    { href: "/#experience", label: copy.experienceNav },
    { href: "/#about", label: copy.aboutNav },
    { href: "/#contact", label: copy.contactNav },
  ];
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/90 backdrop-blur">
    <nav aria-label={copy.navigation} className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
      <Link href="/" className="shrink-0 text-sm font-semibold tracking-tight text-brand transition-colors hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">MP/</Link>
      <div className="flex items-center gap-2 text-xs sm:gap-5 sm:text-sm">
        <div className="hidden gap-3 sm:flex sm:gap-5">
          {links.map((link) => <Link key={link.href} href={link.href} className="text-zinc-400 transition-colors hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300">{link.label}</Link>)}
        </div>
        <SiteControls />
      </div>
    </nav>
  </header>;
}
