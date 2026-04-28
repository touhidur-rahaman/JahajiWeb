"use client";

import { Ship, MapPin, ShoppingBag, FileText, Users, Wallet } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Footer } from "@/components/site/Footer";
import { useLang } from "@/lib/i18n/context";

const iconMap = [Ship, MapPin, ShoppingBag, FileText, Users, Wallet];

export default function ServicesPage() {
  const { t } = useLang();
  const s = t.services;

  return (
    <main className="bg-background text-foreground">
      <PageHero
        kicker={s.kicker}
        title={<>{s.title1} <em className="text-ember">{s.titleAccent}</em></>}
        subtitle={s.subtitle}
      />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {s.items.map((item, idx) => {
            const Icon = iconMap[idx];
            return (
              <article key={item.title} className="rounded-3xl bg-card border-hairline p-8 shadow-soft hover:shadow-elevated transition">
                <span className="h-12 w-12 rounded-2xl bg-sand flex items-center justify-center">
                  <Icon className="h-5 w-5 text-deep" strokeWidth={1.75} />
                </span>
                <h3 className="mt-8 font-display text-2xl">{item.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{item.body}</p>
              </article>
            );
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
}
