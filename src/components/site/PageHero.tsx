import { Nav } from "./Nav";

export function PageHero({ kicker, title, subtitle }: { kicker: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <section className="relative bg-deep text-primary-foreground overflow-hidden">
      <Nav />
      <div className="absolute inset-0 bg-gradient-deep opacity-90" />
      <div className="absolute -top-32 -right-20 h-96 w-96 rounded-full bg-ember/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-40 pb-24 md:pt-48 md:pb-32">
        <p className="text-xs uppercase tracking-[0.22em] text-ember">{kicker}</p>
        <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[0.95] text-balance max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-7 max-w-2xl text-lg text-primary-foreground/75 leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
