"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { en } from "@/lib/i18n/en";
import { bn } from "@/lib/i18n/bn";
import type { Dictionary } from "@/lib/i18n/en";

export type Locale = "en" | "bn";

const DICTIONARIES: Record<Locale, Dictionary> = { en, bn };
const STORAGE_KEY = "jahaji-locale";
const DEFAULT_LOCALE: Locale = "en";

interface LangContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dictionary;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && stored in DICTIONARIES) {
      setLocaleState(stored);
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem(STORAGE_KEY, l);
    // Update <html lang> attribute
    document.documentElement.lang = l === "bn" ? "bn" : "en";
  }, []);

  // Set initial html lang once mounted
  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = locale === "bn" ? "bn" : "en";
    }
  }, [mounted, locale]);

  const t = DICTIONARIES[locale];

  // Prevent flash by not rendering until mounted
  if (!mounted) {
    return (
      <LangContext.Provider value={{ locale: DEFAULT_LOCALE, setLocale, t: DICTIONARIES[DEFAULT_LOCALE] }}>
        {children}
      </LangContext.Provider>
    );
  }

  return (
    <LangContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
