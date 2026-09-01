"use client";

import Link from "next/link";
import { usePreferences } from "@/components/site-preferences";
import { ui } from "@/content/i18n";

export function SiteFooter() {
  const { locale } = usePreferences();
  const copy = ui[locale];
  return <footer className="border-t border-white/10">
    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <p>© {new Date().getFullYear()} Murilo Patrício. {copy.rights}</p>
      <Link href="https://github.com/mrlptrc" className="transition-colors hover:text-zinc-200">GitHub</Link>
    </div>
  </footer>;
}
