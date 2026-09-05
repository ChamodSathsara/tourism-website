"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, XIcon, ChevronDownIcon, GlobeIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLanguage, type Locale } from "../contexts/LanguageContext";
import { usePathname } from "next/navigation";
import logo from "../assest/logo.png";

const languages: { code: Locale; flag: string; name: string }[] = [
  { code: "en", flag: "🇬🇧", name: "English" },
  { code: "fr", flag: "🇫🇷", name: "Français" },
  { code: "de", flag: "🇩🇪", name: "Deutsch" },
  { code: "ja", flag: "🇯🇵", name: "日本語" },
];

export function Navbar() {
  const t = useTranslations("nav");
  const { locale, setLocale, isPending } = useLanguage();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const activePath = usePathname();

  const activeLang = languages.find((l) => l.code === locale) ?? languages[0];

  const navLinks = [
    { name: t("home"), href: "/home" },
    { name: t("packages"), href: "/packages" },
    { name: t("destinations"), href: "/destinations" },
    { name: t("experiences"), href: "/experiences" },
    { name: t("hotels"), href: "/hotels" },
    { name: t("about"), href: "/about" },
    { name: "Corporate", href: "/corporate" },
    { name: "Partner", href: "/partnership" },
    { name: "Contact", href: "/contactUs" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLangSelect = (lang: (typeof languages)[0]) => {
    setLocale(lang.code);
    setLangOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -112, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0f1a]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-20 lg:h-28">
            {/* Logo */}
            <a
              href="/home"
              aria-label="Magical Paradise home"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-2 lg:translate-y-0 z-10"
            >
              <div className="relative h-12 w-40">
                <Image
                  src={logo}
                  alt="Magical Paradise"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex absolute bottom-1 left-1/2 -translate-x-1/2 items-center justify-center gap-0.5 whitespace-nowrap">
              {navLinks.map((link) => {
                const isActive = activePath === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 group ${
                      isActive
                        ? "text-white"
                        : "text-white/70 hover:text-white hover:bg-white/8"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-gradient-to-r from-[#1761A0] to-[#0BAADC] transition-all duration-300 ${
                        isActive ? "w-4/5" : "w-0 group-hover:w-4/5"
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* Right Controls */}
            <div className="hidden lg:flex absolute right-0 top-3 items-center gap-3">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  onBlur={() => setTimeout(() => setLangOpen(false), 150)}
                  disabled={isPending}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-200 text-sm text-white/80 hover:text-white disabled:opacity-50"
                >
                  <span className="text-base leading-none">
                    {activeLang.flag}
                  </span>
                  <span className="font-medium tracking-wide uppercase">
                    {activeLang.code}
                  </span>
                  <ChevronDownIcon
                    className={`w-3.5 h-3.5 text-white/50 transition-transform duration-200 ${
                      langOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full right-0 mt-2 w-44 bg-[#0d1424]/98 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLangSelect(lang)}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                            locale === lang.code
                              ? "bg-[#0BAADC]/15 text-[#0BAADC]"
                              : "text-white/60 hover:text-white hover:bg-white/8"
                          }`}
                        >
                          <span className="text-base">{lang.flag}</span>
                          <span className="font-medium">{lang.name}</span>
                          {locale === lang.code && (
                            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#0BAADC]" />
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              {mobileOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#060d1a]/98 backdrop-blur-xl flex flex-col pt-24 px-6 pb-10 overflow-y-auto"
          >
            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-1 mb-8">
              {navLinks.map((link, i) => {
                const isActive = activePath === link.href;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className={`flex items-center justify-between py-4 text-xl font-medium border-b transition-colors ${
                      isActive
                        ? "text-[#0BAADC] border-[#0BAADC]/20"
                        : "text-white/70 hover:text-white border-white/8"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#1761A0] to-[#0BAADC]" />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile Language Switcher */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-3 flex items-center gap-2">
                <GlobeIcon className="w-3.5 h-3.5" />
                {t("language")}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLangSelect(lang)}
                    disabled={isPending}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 disabled:opacity-50 ${
                      locale === lang.code
                        ? "bg-[#0BAADC]/15 border-[#0BAADC]/30 text-[#0BAADC]"
                        : "bg-white/5 border-white/8 text-white/50 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span className="text-base">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
