"use client";

import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Footer } from "@/components/site/Footer";
import { useLang } from "@/lib/i18n/context";

const pressItems = [
  { outlet: "The Daily Star", date: "Mar 2024", title: "How a Dhaka startup is digitising the country's busiest waterways" },
  { outlet: "Prothom Alo", date: "Nov 2023", title: "Jahaji brings live tracking to Bangladesh's lighter-ship fleet" },
  { outlet: "Bdnews24", date: "Jul 2023", title: "Inland shipping enters the smartphone era" },
  { outlet: "TBS", date: "Feb 2023", title: "Cargo, captains and code: inside the river economy's new operating system" },
];

export default function PressPage() {
  const { t } = useLang();
  const p = t.press;

  return (
    <main className="bg-background text-foreground">
      <PageHero
        kicker={p.kicker}
        title={<>{p.title1} <em className="text-ember">{p.titleAccent}</em>{p.title2}</>}
        subtitle={p.subtitle}
      />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <ul className="divide-y divide-border border-y border-border">
            {pressItems.map((it) => (
              <li key={it.title}>
                <a href="#" className="group flex flex-col md:flex-row md:items-center justify-between gap-4 py-8 hover:bg-sand/60 transition px-2">
                  <div className="flex items-baseline gap-6">
                    <span className="font-display text-sm uppercase tracking-[0.18em] text-ember w-32 shrink-0">{it.outlet}</span>
                    <span className="font-display text-2xl md:text-3xl leading-snug">{it.title}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{it.date}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-16 rounded-3xl bg-sand p-10 md:p-14 border-hairline">
            <p className="text-xs uppercase tracking-[0.22em] text-ember">{p.contactHeading}</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">{p.contactBody}</h2>
            <a href={`mailto:${p.contactEmail}`} className="mt-6 inline-flex items-center gap-2 rounded-full bg-deep px-6 py-3 text-primary-foreground text-sm font-medium hover:brightness-110 transition">
              {p.contactEmail}
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
