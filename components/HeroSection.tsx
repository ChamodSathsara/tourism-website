"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SearchIcon,
  MessageCircleIcon,
  StarIcon,
  UsersIcon,
  MapIcon,
  AwardIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import hero1 from "../assest/hero/1.jpg";
import hero2 from "../assest/hero/2.jpg";
import hero3 from "../assest/hero/3.jpg";

export function HeroSection() {
  const t = useTranslations("hero");
  const [currentImage, setCurrentImage] = useState(0);
  const images = [hero1, hero2, hero3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Auto-rotating background images */}
      {/* Auto-rotating background images - slide from left */}
      {/* Auto-rotating background images - slide from left WITHOUT blank */}
      
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImage}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${images[currentImage].src})`,
          }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 z-10 bg-black/55" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#060d1a] via-black/2 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#060d1a]/20 via-transparent to-[#060d1a]/40" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16 mb-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg"
        >
          {t("title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-white/70 mb-10 max-w-3xl mx-auto font-light drop-shadow-md"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a // ✅ Added <a opening tag
            href="#packages"
            className="group flex items-center gap-2 bg-gradient-to-r from-[#1761A0] to-[#0BAADC] hover:from-[#0d4f8a] hover:to-[#099bbf] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(11,170,220,0.4)] hover:shadow-[0_0_50px_rgba(11,170,220,0.6)] hover:-translate-y-1"
          >
            <SearchIcon className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            {t("cta")}
          </a>

          <a // ✅ Added <a opening tag
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:-translate-y-1"
          >
            <MessageCircleIcon className="w-5 h-5" />
            {t("ctaWhatsapp")}
          </a>
        </motion.div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-24 lg:bottom-32 left-1/2 -translate-x-1/2 z-30 flex gap-2 pt-96">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={` w-2 h-2 rounded-full transition-all duration-300 ${
              currentImage === index
                ? "bg-white w-8"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
