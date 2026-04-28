"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/i18n/context";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer className="bg-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Jahaji — Shaping Your Shipping"
                width={140}
                height={56}
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-5 max-w-md text-sm text-primary-foreground/70 leading-relaxed">
              {f.tagline}
            </p>
            <div className="mt-6">
              <LanguageSwitcher variant="light" />
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50">{f.company}</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-ember transition">{f.links.about}</Link></li>
              <li><Link href="/services" className="hover:text-ember transition">{f.links.services}</Link></li>
              <li><Link href="/how-it-works" className="hover:text-ember transition">{f.links.howItWorks}</Link></li>
              <li><Link href="/press" className="hover:text-ember transition">{f.links.press}</Link></li>
              <li><Link href="/contact" className="hover:text-ember transition">{f.links.contact}</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50">{f.legal}</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link href="/terms" className="hover:text-ember transition">{f.links.terms}</Link></li>
              <li><Link href="/privacy" className="hover:text-ember transition">{f.links.privacy}</Link></li>
              <li><Link href="/delivery" className="hover:text-ember transition">{f.links.delivery}</Link></li>
              <li><Link href="/refund" className="hover:text-ember transition">{f.links.refund}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="rounded-xl bg-primary-foreground/5 p-5 md:p-6 flex items-center justify-center">
            <img
              src="/assets/sslcommerz-pay-with.png"
              alt="Pay with Visa, Mastercard, American Express, bKash, Rocket, Nagad and more — verified by SSLCommerz"
              className="w-full max-w-4xl h-auto"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} {f.copyright}</p>
          <p className="font-display italic">{f.cities}</p>
        </div>
      </div>
    </footer>
  );
}
