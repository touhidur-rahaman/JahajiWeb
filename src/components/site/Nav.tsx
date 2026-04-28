"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/i18n/context";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Nav() {
  const { t } = useLang();

  const links = [
    { to: "/services", label: t.nav.services },
    { to: "/how-it-works", label: t.nav.howItWorks },
    { to: "/press", label: t.nav.press },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Jahaji — Shaping Your Shipping"
            width={120}
            height={48}
            priority
            className="h-12 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-9 text-sm text-primary-foreground/85">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className="hover:text-primary-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSwitcher variant="light" />
          <a
            href="https://play.google.com/store/apps/details?id=jahaji.ltd.app"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-medium text-deep hover:brightness-105 transition"
          >
            {t.nav.downloadApp}
          </a>
        </div>
      </div>
    </header>
  );
}
