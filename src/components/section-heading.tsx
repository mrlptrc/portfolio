import { cn } from "@/lib/utils";

export function SectionHeading({ index, title, className }: { index: string; title: string; className?: string }) {
  return <div className={cn("mb-10 flex items-baseline justify-between border-t border-white/10 pt-4", className)}><span className="font-mono text-xs text-brand">{index}</span><h2 className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-400">{title}</h2></div>;
}
