"use client";

import { useLang, type Locale } from "@/lib/i18n/context";

const LOCALES: { code: Locale; label: string; shortLabel: string }[] = [
  { code: "en", label: "English", shortLabel: "EN" },
  { code: "bn", label: "বাংলা", shortLabel: "বাংলা" },
];

interface LanguageSwitcherProps {
  /** "light" = on dark backgrounds (Hero, PageHero, Footer). "dark" = on light backgrounds. */
  variant?: "light" | "dark";
}

export function LanguageSwitcher({ variant = "light" }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLang();

  const inactiveClass =
    variant === "light"
      ? "text-primary-foreground/50 hover:text-primary-foreground/90"
      : "text-ink-soft/60 hover:text-ink-soft";

  const activeClass =
    variant === "light"
      ? "text-primary-foreground font-semibold"
      : "text-deep font-semibold";

  const dividerClass =
    variant === "light" ? "text-primary-foreground/30" : "text-ink-soft/30";

  return (
    <div className="flex items-center gap-1 text-xs tracking-wider uppercase select-none">
      {LOCALES.map((loc, i) => (
        <span key={loc.code} className="flex items-center gap-1">
          {i > 0 && <span className={dividerClass}>·</span>}
          <button
            onClick={() => setLocale(loc.code)}
            aria-label={`Switch to ${loc.label}`}
            aria-pressed={locale === loc.code}
            className={`transition-colors cursor-pointer px-0.5 ${
              locale === loc.code ? activeClass : inactiveClass
            }`}
          >
            {loc.shortLabel}
          </button>
        </span>
      ))}
    </div>
  );
}
