"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Footer } from "@/components/site/Footer";
import { useLang } from "@/lib/i18n/context";

export default function ContactPage() {
  const { t } = useLang();
  const c = t.contact;

  const channels = [
    { icon: Mail, label: c.emailLabel, value: c.email, href: `mailto:${c.email}` },
    { icon: Phone, label: c.phoneLabel, value: c.phone, href: `tel:${c.phone.replace(/-/g, "")}` },
    { icon: MapPin, label: c.addressLabel, value: c.address, href: "#" },
  ];

  return (
    <main className="bg-background text-foreground">
      <PageHero
        kicker={c.kicker}
        title={<>{c.title1} <em className="text-ember">{c.titleAccent}</em></>}
        subtitle={c.subtitle}
      />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-6">
            {channels.map((ch) => (
              <a key={ch.label} href={ch.href} className="flex items-start gap-5 rounded-3xl bg-card border-hairline p-7 shadow-soft hover:shadow-elevated transition">
                <span className="h-12 w-12 rounded-2xl bg-sand flex items-center justify-center shrink-0">
                  <ch.icon className="h-5 w-5 text-deep" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{ch.label}</p>
                  <p className="mt-2 font-display text-2xl">{ch.value}</p>
                </div>
              </a>
            ))}
          </div>
          <form className="lg:col-span-7 rounded-3xl bg-sand p-8 md:p-12 border-hairline" onSubmit={(e) => e.preventDefault()}>
            <h2 className="font-display text-3xl">{c.form.heading}</h2>
            <p className="mt-2 text-muted-foreground">{c.form.subheading}</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Field label={c.form.nameLabel} type="text" placeholder={c.form.namePlaceholder} />
              <Field label={c.form.emailLabel} type="email" placeholder={c.form.emailPlaceholder} />
              <Field label={c.form.companyLabel} type="text" placeholder={c.form.companyPlaceholder} className="md:col-span-2" />
              <div className="md:col-span-2">
                <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{c.form.messageLabel}</label>
                <textarea rows={5} placeholder={c.form.messagePlaceholder} className="mt-2 w-full rounded-2xl bg-background border border-border px-5 py-4 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ember/40 transition" />
              </div>
            </div>
            <button type="submit" className="mt-8 inline-flex items-center gap-2 rounded-full bg-deep px-7 py-4 text-primary-foreground font-medium hover:brightness-110 transition">
              {c.form.submit}
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Field({ label, className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className={className}>
      <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</label>
      <input {...props} className="mt-2 w-full rounded-2xl bg-background border border-border px-5 py-4 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ember/40 transition" />
    </div>
  );
}
