"use client";

import Link from "next/link";
import { ArrowUpRight, Ship, MapPin, ShoppingBag, ShieldCheck, Smartphone, Compass, Cloud, LayoutDashboard, Headphones, ClipboardList } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/lib/i18n/context";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Marquee />
      <Pillars />
      <Showcase />
      <AppFeatures />
      {/* <Numbers /> */}
      <Workflow />
      <CTA />
      <MapSection />
      <Footer />
    </main>
  );
}

/* ------------------------------- HERO ------------------------------- */
function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section className="relative min-h-screen overflow-hidden bg-deep text-primary-foreground">
      <img
        src="/assets/hero-ships.jpg"
        alt="Aerial view of bulkhead lighter ships at sunrise on a Bangladesh river"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-deep/85 via-deep/40 to-deep/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep/90 via-deep/40 to-transparent" />

      <Nav />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-40 pb-24 md:pt-52 md:pb-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — text content */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.18em]">
              <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" />
              {h.badge}
            </div>
            <h1 className="mt-7 font-display text-5xl md:text-7xl lg:text-7xl leading-[0.95] text-balance">
              {h.headline1} <span className="italic text-ember">{h.headlineAccent}</span>,{" "}
              {h.headline2}
            </h1>
            <p className="mt-7 max-w-xl text-lg text-primary-foreground/75 leading-relaxed">
              {h.subheadline}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=jahaji.ltd.app"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-ember px-7 py-4 text-deep font-medium hover:brightness-105 transition"
              >
                {h.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-7 py-4 text-sm hover:bg-primary-foreground/10 transition"
              >
                {h.ctaSecondary}
              </Link>
            </div>
          </motion.div>

          {/* Right — Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
            className="relative mx-auto w-full max-w-[320px] lg:max-w-[360px] hidden lg:block"
          >
            {/* Glow blobs */}
            <div className="absolute -z-10 top-20 -right-12 w-24 h-24 bg-tide rounded-full blur-2xl opacity-50" />
            <div className="absolute -z-10 bottom-20 -left-12 w-32 h-32 bg-ember rounded-full blur-2xl opacity-20" />

            {/* Phone frame */}
            <div className="relative w-full aspect-[1/2.1] bg-slate-800 rounded-[3rem] p-3 shadow-2xl shadow-black/50 border-4 border-slate-700/50">
              {/* Screen */}
              <div
                className="relative w-full h-full rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center"
                style={{ background: "oklch(0.22 0.08 255)" }}
              >
                {/* Notch */}
                <div className="absolute top-0 w-1/2 h-7 bg-slate-800 rounded-b-3xl z-20" />

                {/* App UI */}
                <div className="absolute inset-0 flex flex-col items-center justify-start pt-10 p-6">
                  {/* Logo */}
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-5 mt-2"
                  >
                    <Image
                      src="/logo.png"
                      alt="Jahaji"
                      width={90}
                      height={36}
                      className="h-9 w-auto brightness-0 invert"
                    />
                  </motion.div>
                  {/* Spinning wheel */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="relative w-32 h-32 mb-8"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-full h-full text-white opacity-20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-8 h-8 rounded-full" style={{ background: "oklch(0.74 0.16 60)" }} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Feature pills */}
                  <div className="w-full space-y-3 relative z-10">
                    {[
                      { labelKey: "booking" as const, icon: Ship },
                      { labelKey: "tracking" as const, icon: MapPin },
                      { labelKey: "purchasing" as const, icon: ShoppingBag },
                      { labelKey: "trading" as const, icon: Compass },
                    ].map(({ labelKey, icon: Icon }, i) => (
                      <motion.div
                        key={labelKey}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + i * 0.12 }}
                        className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3.5 flex items-center justify-between shadow-lg"
                      >
                        <span className="text-white font-semibold text-sm">{h.appPills[labelKey]}</span>
                        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                          <Icon className="h-3.5 w-3.5 text-white" strokeWidth={2} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating live-badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute -left-12 top-1/3 bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-4 py-3 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-ember animate-pulse" />
                <span className="text-xs text-white/70 uppercase tracking-widest">Live</span>
              </div>
              <p className="mt-1 text-white font-display text-sm">MV Padma · 14 kn</p>
              <p className="text-white/50 text-xs">{h.liveRoute}</p>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom meta strip */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-primary-foreground/10 backdrop-blur-sm bg-deep/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.18em] text-primary-foreground/65">
          <span>{h.metaEst}</span>
          <span className="hidden md:inline">{h.metaPricing}</span>
          <span>{h.metaPlay}</span>
          <span className="hidden md:inline">{h.metaLang}</span>
        </div>
      </div>
    </section>
  );
}



/* ------------------------------- MARQUEE ------------------------------- */
function Marquee() {
  const { t } = useLang();
  const items = t.marquee;
  return (
    <div className="bg-sand border-y border-hairline overflow-hidden">
      <div className="flex gap-16 py-5 whitespace-nowrap animate-drift font-display text-2xl text-ink-soft/70 italic">
        {[...items, ...items, ...items].map((text, i) => (
          <span key={i} className="flex items-center gap-16">
            {text} <span className="text-ember">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------- PILLARS ------------------------------- */
function Pillars() {
  const { t } = useLang();
  const p = t.pillars;
  const iconMap = [Ship, MapPin, ShoppingBag];

  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-ember mb-5">{p.kicker}</p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight text-balance">
              {p.headline} <em className="text-deep/80">{p.headlineAccent}</em> {p.headline2}
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground leading-relaxed">
            {p.subheadline}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {p.items.map((item, idx) => {
            const Icon = iconMap[idx];
            return (
              <article
                key={item.title}
                className="group relative rounded-3xl bg-card border-hairline p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-sm text-ember tracking-widest">{item.kicker}</span>
                  <span className="h-12 w-12 rounded-2xl bg-sand flex items-center justify-center group-hover:bg-ember/15 transition-colors">
                    <Icon className="h-5 w-5 text-deep" strokeWidth={1.75} />
                  </span>
                </div>
                <h3 className="mt-10 font-display text-3xl leading-tight">{item.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{item.body}</p>
                <div className="mt-10 pt-6 border-t border-hairline flex items-center justify-between text-sm">
                  <span className="text-ink-soft">{p.learnMore}</span>
                  <ArrowUpRight className="h-4 w-4 text-ember transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- SHOWCASE ------------------------------- */
function Showcase() {
  const { t } = useLang();
  const s = t.showcase;
  const featureIcons = [Smartphone, ShieldCheck, Compass, MapPin];

  return (
    <section className="relative py-28 md:py-36 bg-sand">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-16 lg:grid-cols-12 items-center">
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-[2rem] overflow-hidden shadow-elevated">
            <img
              src="/assets/ship-side.jpg"
              alt="Bulkhead lighter ship at dusk"
              loading="lazy"
              width={1280}
              height={1280}
              className="w-full h-[560px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-deep/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-8 -right-4 md:right-8 bg-card border-hairline rounded-2xl p-5 shadow-elevated w-64 animate-float-slow">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-ember animate-pulse" />
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Live</span>
            </div>
            <p className="mt-2 font-display text-2xl">MV Padma · 14 kn</p>
            <p className="text-sm text-muted-foreground mt-1">Chattogram → Narayanganj</p>
            <div className="mt-3 h-1.5 w-full rounded-full bg-muted overflow-hidden">
              <div className="h-full w-2/3 bg-gradient-ember rounded-full" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:pl-8">
          <p className="text-xs uppercase tracking-[0.22em] text-ember">{s.kicker}</p>
          <h2 className="mt-5 font-display text-4xl md:text-6xl leading-[1.05] text-balance">
            {s.headline1} <em>{s.headlineAccent}</em>{s.headline2}
          </h2>
          <p className="mt-7 text-lg text-muted-foreground leading-relaxed max-w-lg">
            {s.body}
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {s.features.map((feature, idx) => {
              const Icon = featureIcons[idx];
              return (
                <li key={feature} className="flex items-start gap-3">
                  <span className="h-9 w-9 rounded-xl bg-card border-hairline flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-deep" strokeWidth={1.75} />
                  </span>
                  <span className="text-sm text-ink-soft pt-1.5">{feature}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- APP FEATURES ------------------------------- */
function AppFeatures() {
  const { t } = useLang();
  const af = t.appFeatures;
  const icons = [Cloud, LayoutDashboard, Smartphone, ClipboardList];

  return (
    <section className="py-24 md:py-32 overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl mb-4 text-deep">{af.headline}</h2>
          <p className="text-muted-foreground uppercase tracking-widest text-sm">{af.kicker}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Features */}
          <div className="space-y-16 lg:text-right order-2 lg:order-1">
            {af.items.slice(0, 2).map((item, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col lg:items-end group"
                >
                  <div className="h-12 w-12 rounded-2xl bg-ember/10 flex items-center justify-center mb-6 group-hover:bg-ember/20 transition-colors">
                    <Icon className="h-6 w-6 text-ember" />
                  </div>
                  <h3 className="font-display text-2xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-balance">
                    {item.body}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Center Phone */}
          <div className="relative flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[280px] aspect-[1/2.1] bg-slate-900 rounded-[3rem] p-2.5 shadow-2xl border-4 border-slate-800"
            >
              {/* Screen */}
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-deep">
                {/* Logo & Wheel background */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-20">
                   <Ship className="w-32 h-32 text-white" strokeWidth={1} />
                </div>
                
                {/* App UI Overlay */}
                <div className="relative h-full flex flex-col items-center pt-12 p-4">
                  <div className="w-24 h-6 bg-white/10 rounded-full mb-8 flex items-center justify-center text-[10px] text-white/50">
                    English | Bangla
                  </div>
                  
                  <div className="w-full space-y-3">
                    {["Booking", "Tracking", "Purchasing", "Trading"].map((label, i) => (
                      <div key={label} className="w-full bg-white/10 border border-white/10 rounded-xl p-3 flex items-center justify-between">
                        <span className="text-xs text-white font-medium">{label}</span>
                        <div className="w-5 h-5 rounded-full bg-white/10" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative blobs */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-ember/10 rounded-full blur-3xl" />
          </div>

          {/* Right Features */}
          <div className="space-y-16 order-3">
            {af.items.slice(2, 4).map((item, i) => {
              const Icon = icons[i + 2];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i + 2) * 0.1 }}
                  className="group"
                >
                  <div className="h-12 w-12 rounded-2xl bg-ember/10 flex items-center justify-center mb-6 group-hover:bg-ember/20 transition-colors">
                    <Icon className="h-6 w-6 text-ember" />
                  </div>
                  <h3 className="font-display text-2xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-balance">
                    {item.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- NUMBERS ------------------------------- */
function Numbers() {
  const { t } = useLang();
  return (
    <section className="py-28 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border-hairline">
          {t.numbers.map((s) => (
            <div key={s.l} className="bg-background p-10 lg:p-12">
              <p className="font-display text-5xl md:text-6xl text-deep">{s.v}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- WORKFLOW ------------------------------- */
function Workflow() {
  const { t } = useLang();
  const w = t.workflow;

  return (
    <section className="py-28 md:py-36 bg-deep text-primary-foreground relative overflow-hidden">
      <img
        src="/assets/river-network.jpg"
        alt=""
        loading="lazy"
        width={1600}
        height={1000}
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-ember">{w.kicker}</p>
          <h2 className="mt-5 font-display text-4xl md:text-6xl leading-tight text-balance">
            {w.headline1}{w.headline1 ? " " : ""}<em>{w.headlineAccent}</em>{w.headline2}
          </h2>
        </div>
        <ol className="mt-16 grid gap-px bg-primary-foreground/10 md:grid-cols-2 lg:grid-cols-4 rounded-3xl overflow-hidden border border-primary-foreground/10">
          {w.steps.map((s) => (
            <li key={s.n} className="bg-deep p-8 lg:p-10 min-h-64 flex flex-col">
              <span className="font-display text-sm tracking-widest text-ember">{s.n}</span>
              <h3 className="mt-8 font-display text-2xl leading-snug">{s.t}</h3>
              <p className="mt-3 text-sm text-primary-foreground/65 leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------- CTA ------------------------------- */
function CTA() {
  const { t } = useLang();
  const c = t.cta;

  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative rounded-[2.5rem] bg-gradient-ember px-8 md:px-16 py-20 md:py-28 overflow-hidden">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-deep/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-deep/70">{c.kicker}</p>
            <h2 className="mt-5 font-display text-4xl md:text-6xl text-deep leading-[1.05] text-balance">
              {c.headline1} <em>{c.headlineAccent}</em>
            </h2>
            <p className="mt-6 text-deep/80 max-w-lg text-lg leading-relaxed">
              {c.body}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=jahaji.ltd.app"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-deep px-7 py-4 text-primary-foreground font-medium hover:brightness-110 transition"
              >
                {c.primary}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-deep/30 px-7 py-4 text-sm text-deep hover:bg-deep/5 transition">
                {c.secondary}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- MAP ------------------------------- */
function MapSection() {
  const { t } = useLang();
  const m = t.map;

  return (
    <section className="py-24 md:py-32 text-foreground relative overflow-hidden" style={{ backgroundColor: "lab(95.4091% 1.08859 6.82088)" }}>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.22em] text-ember mb-4">{m.kicker}</p>
          <h2 className="font-display text-4xl md:text-5xl text-deep">{m.title}</h2>
          <p className="mt-4 text-muted-foreground">{m.address}</p>
        </div>
        
        <div className="relative w-full h-[450px] rounded-[2.5rem] overflow-hidden border-hairline shadow-elevated">
          <iframe
            src="https://maps.google.com/maps?q=Jahaji+Limited+Khulna&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jahaji Limited Location"
            className="contrast-115"
          />
        </div>
      </div>
    </section>
  );
}
