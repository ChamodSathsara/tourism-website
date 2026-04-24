"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SearchIcon, MessageCircleIcon, ChevronDownIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import hero1 from "../assest/Hero/1.jpg";
import hero2 from "../assest/Hero/2.jpg";
import hero3 from "../assest/Hero/3.jpg";

export function HeroSection() {
  const t = useTranslations("hero");
  const [currentImage, setCurrentImage] = useState(0);
  const [prevImage, setPrevImage] = useState<number | null>(null);
  // Track which images have fully loaded so transitions only fire when ready
  const [loadedImages, setLoadedImages] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const images = [hero1, hero2, hero3];

  const handleImageLoad = useCallback((index: number) => {
    setLoadedImages((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
  }, []);

  useEffect(() => {
    // Don't start the slideshow until the first image is loaded
    if (!loadedImages[0]) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        const next = (prev + 1) % images.length;
        // Only advance if the next image is already loaded
        if (!loadedImages[next]) return prev;
        setPrevImage(prev);
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length, loadedImages]);

  const handleDotClick = (index: number) => {
    if (index === currentImage || !loadedImages[index]) return;
    setPrevImage(currentImage);
    setCurrentImage(index);
  };

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
    { value: t("stat4Value"), label: t("stat4Label") },
  ];

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Preload all images off-screen so they're ready when needed */}
      <div className="sr-only" aria-hidden="true">
        {images.map((img, index) => (
          // Only eagerly load the first image; lazy-load the rest
          <Image
            key={index}
            src={img}
            alt=""
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            onLoad={() => handleImageLoad(index)}
            sizes="1px"
          />
        ))}
      </div>

      {/* Background layer: previous image (stays static underneath) */}
      {prevImage !== null && (
        <div className="absolute inset-0 z-0">
          <Image
            src={images[prevImage]}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      )}

      {/* Background layer: current image slides in on top */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImage}
          initial={{ x: "-100%" }}
          animate={{ x: loadedImages[currentImage] ? 0 : "-100%" }}
          transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1] }}
          className="absolute inset-0 z-[1]"
        >
          <Image
            src={images[currentImage]}
            alt={`Sri Lanka hero image ${currentImage + 1}`}
            fill
            // First image loads eagerly (above the fold); others are lazy
            priority={currentImage === 0}
            loading={currentImage === 0 ? "eager" : "lazy"}
            sizes="100vw"
            className="object-cover object-center"
            onLoad={() => handleImageLoad(currentImage)}
          />

          {/* Skeleton shimmer shown until the image loads */}
          {!loadedImages[currentImage] && (
            <div className="absolute inset-0 bg-[#060d1a] animate-pulse" />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 z-[2] bg-black/50" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#060d1a]/90 via-transparent to-transparent" />

      {/* Main content */}
      <div className="relative  z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-16">
        {/* Badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0BAADC] animate-pulse" />
          Trusted by 5,000+ travellers worldwide
        </motion.div> */}

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="pt-8 text-5xl md:text-7xl font-serif font-bold text-white mb-5 drop-shadow-lg leading-tight"
        >
          {t("title")}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/70 mb-7 max-w-2xl font-light"
        >
          {t("subtitle")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#packages"
            className="group flex items-center gap-2 bg-gradient-to-r from-[#1761A0] to-[#0BAADC] hover:from-[#0d4f8a] hover:to-[#099bbf] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(11,170,220,0.4)] hover:shadow-[0_0_50px_rgba(11,170,220,0.6)] hover:-translate-y-1"
          >
            <SearchIcon className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            {t("cta")}
          </a>

          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:-translate-y-1"
          >
            <MessageCircleIcon className="w-5 h-5" />
            {t("ctaWhatsapp")}
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
          className=" w-full max-w-2xl grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden backdrop-blur-md border border-white/10"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center py-4 px-3 bg-white/5 hover:bg-white/10 transition-colors duration-200"
            >
              <span className="text-2xl font-bold text-white leading-none mb-1">
                {stat.value}
              </span>
              <span className="text-xs text-white/55 font-medium tracking-wide text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Image indicator dots */}
      <div className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 z-20  gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentImage === index
                ? "bg-white w-8"
                : "bg-white/35 hover:bg-white/55 w-2"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#packages"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 right-8 z-20 hidden lg:flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors duration-200"
      >
        <span className="text-[10px] font-medium tracking-widest uppercase rotate-90 mb-2">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDownIcon className="w-4 h-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}
