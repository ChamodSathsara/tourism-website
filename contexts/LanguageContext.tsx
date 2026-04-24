"use client";

import React, { createContext, useContext, useState, useEffect, useTransition } from "react";

export const locales = ["en", "fr", "de", "ja"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isPending: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: defaultLocale,
  setLocale: () => {},
  isPending: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [isPending, startTransition] = useTransition();

  // Read locale from cookie on mount
  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("locale="))
      ?.split("=")[1];

    if (cookieLocale && locales.includes(cookieLocale as Locale)) {
      setLocaleState(cookieLocale as Locale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    startTransition(() => {
      // Set cookie (1 year expiry)
      document.cookie = `locale=${newLocale};path=/;max-age=31536000;SameSite=Lax`;
      setLocaleState(newLocale);
      // Reload to re-render server components with new locale
      window.location.reload();
    });
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, isPending }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}