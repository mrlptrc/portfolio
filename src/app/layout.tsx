import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { PreferencesProvider } from "@/components/site-preferences";
import { cookies } from "next/headers";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-serif" });
export async function generateMetadata(): Promise<Metadata> {
  const savedLocale = (await cookies()).get("portfolio-locale")?.value;
  const locale = savedLocale === "en" || savedLocale === "es" ? savedLocale : "pt";
  const description = locale === "en" ? "Portfolio of Murilo Patrício, a full-stack developer based in São Paulo." : locale === "es" ? "Portafolio de Murilo Patrício, desarrollador full stack en São Paulo." : "Portfólio de Murilo Patrício, desenvolvedor full stack em São Paulo.";
  const socialDescription = locale === "en" ? "Web products, automations, and systems that work in practice." : locale === "es" ? "Productos web, automatizaciones y sistemas que funcionan de verdad." : "Produtos web, automações e sistemas que funcionam de verdade.";
  return { title: { default: "Murilo Patrício — Full stack developer", template: "%s — Murilo Patrício" }, description, metadataBase: new URL("https://github.com/mrlptrc"), openGraph: { title: "Murilo Patrício — Full stack developer", description: socialDescription, type: "website", url: "/" }, robots: { index: true, follow: true } };
}
const preferenceScript = `(function(){try{document.documentElement.dataset.theme=localStorage.getItem('portfolio-theme')||'dark';}catch(e){}})();`;
export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const savedLocale = (await cookies()).get("portfolio-locale")?.value;
  const locale = savedLocale === "en" || savedLocale === "es" ? savedLocale : "pt";
  return <html lang={locale === "pt" ? "pt-BR" : locale} data-theme="dark" suppressHydrationWarning className={`${sans.variable} ${serif.variable}`}><head><script dangerouslySetInnerHTML={{ __html: preferenceScript }} /></head><body><PreferencesProvider initialLocale={locale}>{children}</PreferencesProvider></body></html>;
}
