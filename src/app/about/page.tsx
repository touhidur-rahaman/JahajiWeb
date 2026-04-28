"use client";

import { PageHero } from "@/components/site/PageHero";
import { Footer } from "@/components/site/Footer";
import { useLang } from "@/lib/i18n/context";

export default function AboutPage() {
  const { t } = useLang();
  const a = t.about;

  return (
    <main className="bg-background text-foreground">
      <PageHero
        kicker={a.kicker}
        title={<>{a.title1} <em className="text-ember">{a.titleAccent}</em>{a.title2}</>}
        subtitle={a.subtitle}
      />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 space-y-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">{a.story.heading}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{a.story.body}</p>
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl">{a.mission.heading}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{a.mission.body}</p>
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl">{a.believe.heading}</h2>
            <ul className="mt-4 space-y-3 text-muted-foreground leading-relaxed list-disc pl-5">
              {a.believe.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
