"use client";

import { ChevronDown, Moon, Sun } from "lucide-react";
import { createContext, useContext, useEffect, useState } from "react";
import { ui, type Locale } from "@/content/i18n";

type Theme = "dark" | "light";
type Preferences = { locale: Locale; theme: Theme; setLocale: (locale: Locale) => void; toggleTheme: () => void };

const PreferencesContext = createContext<Preferences | null>(null);

export function PreferencesProvider({ children, initialLocale = "pt" }: { children: React.ReactNode; initialLocale?: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [theme, setTheme] = useState<Theme>(() => typeof document === "undefined" ? "dark" : (document.documentElement.dataset.theme as Theme || "dark"));
  useEffect(() => {
    const savedLocale = localStorage.getItem("portfolio-locale") as Locale | null;
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme | null;
    if (savedLocale && ["pt", "en", "es"].includes(savedLocale)) setLocale(savedLocale);
    if (savedTheme && ["dark", "light"].includes(savedTheme)) setTheme(savedTheme);
  }, []);
  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : locale;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-locale", locale);
    localStorage.setItem("portfolio-theme", theme);
    document.cookie = `portfolio-locale=${locale}; path=/; max-age=31536000; samesite=lax`;
  }, [locale, theme]);
  return <PreferencesContext.Provider value={{ locale, theme, setLocale, toggleTheme: () => setTheme((value) => value === "dark" ? "light" : "dark") }}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
  const preferences = useContext(PreferencesContext);
  if (!preferences) throw new Error("usePreferences must be used within PreferencesProvider");
  return preferences;
}

export function SiteControls() {
  const { locale, setLocale, theme, toggleTheme } = usePreferences();
  const copy = ui[locale];
  return <div className="flex items-center gap-1.5">
    <div className="relative">
      <label htmlFor="site-language" className="sr-only">{copy.language}</label>
      <select id="site-language" value={locale} onChange={(event) => setLocale(event.target.value as Locale)} className="h-8 appearance-none rounded-full border border-white/10 bg-transparent pl-3 pr-8 text-xs text-zinc-300 outline-none transition-colors hover:bg-white/10 hover:text-zinc-100 focus-visible:ring-2 focus-visible:ring-zinc-300">
        <option value="pt">🇧🇷 Português</option>
        <option value="en">🇺🇸 English</option>
        <option value="es">🇪🇸 Español</option>
      </select>
      <ChevronDown aria-hidden="true" size={13} className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500" />
    </div>
    <button type="button" onClick={toggleTheme} aria-label={copy.theme} className="inline-flex size-8 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:bg-white/10 hover:text-brand">
      {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  </div>;
}
