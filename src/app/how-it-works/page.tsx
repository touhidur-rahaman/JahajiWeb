"use client";

import { PageHero } from "@/components/site/PageHero";
import { Footer } from "@/components/site/Footer";
import { useLang } from "@/lib/i18n/context";

export default function HowItWorksPage() {
  const { t } = useLang();
  const h = t.howItWorks;

  return (
    <main className="bg-background text-foreground">
      <PageHero
        kicker={h.kicker}
        title={<>{h.title1}{h.title1 ? " " : ""}<em className="text-ember">{h.titleAccent}</em>{h.title2}</>}
        subtitle={h.subtitle}
      />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <ol className="space-y-px bg-border rounded-3xl overflow-hidden border-hairline">
            {h.steps.map((s, i) => (
              <li key={s.n} className="bg-background p-10 md:p-14 grid md:grid-cols-12 gap-8">
                <div className="md:col-span-3">
                  <span className="font-display text-6xl text-ember">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-display text-3xl md:text-4xl">{s.t}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed text-lg max-w-2xl">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <Footer />
    </main>
  );
}
