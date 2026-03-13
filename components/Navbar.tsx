"use client";

import React, { useEffect, useState } from "react";
import { MenuIcon, XIcon, GlobeIcon, ChevronDownIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Packages", href: "/packages" },
    { name: "Destinations", href: "/destinations" },
    { name: "Experiences", href: "/experiences" },
    { name: "Hotels", href: "/hotels" },
    { name: "About", href: "/about" },
  ];

  const languages = [
    { code: "EN", flag: "🇬🇧", name: "English" },
    { code: "FR", flag: "🇫🇷", name: "Français" },
    { code: "DE", flag: "🇩🇪", name: "Deutsch" },
    { code: "JP", flag: "🇯🇵", name: "日本語" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 z-50">
            <span
              className={`font-serif text-2xl font-bold tracking-tight transition-colors ${
                isScrolled ? "text-tropical-900" : "text-white"
              }`}
            >
              Magical Paradise
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-sand-400 ${
                  isScrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                <GlobeIcon className="w-4 h-4" />
                <span>{currentLang}</span>
                <ChevronDownIcon className="w-3 h-3" />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl py-2 border border-gray-100"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang.code);
                          setIsLangOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-sand-50 hover:text-tropical-700 flex items-center gap-2"
                      >
                        <span>{lang.flag}</span> {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#contact"
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl ${
                isScrolled
                  ? "bg-tropical-700 text-white hover:bg-tropical-800"
                  : "bg-white text-tropical-900 hover:bg-sand-50"
              }`}
            >
              Start Planning
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden z-50 p-2 rounded-md ${
              isScrolled || isMobileMenuOpen
                ? "text-tropical-900"
                : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-white z-40 lg:hidden pt-24 px-6"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-tropical-900 border-b border-gray-100 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6 flex flex-col gap-4">
                <div className="flex gap-4">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-2xl ${
                        currentLang === lang.code ? "opacity-100" : "opacity-50"
                      }`}
                    >
                      {lang.flag}
                    </button>
                  ))}
                </div>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center bg-tropical-700 text-white py-4 rounded-full font-semibold text-lg mt-4"
                >
                  Start Planning
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
