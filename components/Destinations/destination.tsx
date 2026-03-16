"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPinIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  ArrowLeftIcon,
  PhoneIcon,
  MailIcon,
  CheckIcon,
  SunIcon,
  CloudIcon,
  CalendarIcon,
  CameraIcon,
} from "lucide-react";
import Link from "next/link";

import type { Destination as DestinationDetail } from "../../dataConfig/types";
import { destinations as listofDestinations } from "@/dataConfig/dtaConfig";
import { GallerySlide } from "../../dataConfig/types";
import { li } from "framer-motion/client";

// ─── Cinematic Autoplay Gallery ───────────────────────────────────────────────

function CinematicGallery({ slides }: { slides: GallerySlide[] }) {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const thumbsRef = useRef<HTMLDivElement>(null);
  //   const AUTOPLAY_MS = 4500;

  const goTo = useCallback(
    (index: number) => {
      if (animating || index === active) return;
      setAnimating(true);
      setActive(index);
      setTimeout(() => setAnimating(false), 700);
      if (thumbsRef.current) {
        const thumb = thumbsRef.current.children[index] as HTMLElement;
        if (thumb)
          thumb.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
      }
    },
    [active, animating],
  );

  const next = useCallback(
    () => goTo((active + 1) % slides.length),
    [active, goTo, slides.length],
  );
  const prev = useCallback(
    () => goTo((active - 1 + slides.length) % slides.length),
    [active, goTo, slides.length],
  );

  //   useEffect(() => {
  //     const t = setInterval(next, AUTOPLAY_MS);
  //     return () => clearInterval(t);
  //   }, [next]);

  const current = slides[active];

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden bg-black"
      style={{ height: "500px" }}
    >
      {/* Progress bar */}
      {/* <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/10 z-20">
        <motion.div
          key={active}
          className="h-full bg-amber-400/80"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
        />
      </div> */}

      {/* Background image */}
      <AnimatePresence mode="sync">
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.85, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={current?.image}
            alt={current?.title}
            fill
            className="object-cover"
            style={{ filter: "brightness(1.25) saturate(1.1)" }}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/15"
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/15"
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>

      {/* Bottom layout */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end gap-6 px-6 pb-5">
        {/* Left — slide info */}
        <div className="flex-1 min-w-0 max-w-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={active + "-info"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <CameraIcon className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">
                  {active + 1} / {slides.length}
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-1.5">
                {current?.title}
              </h3>
              <p className="text-white/65 text-sm leading-relaxed line-clamp-2">
                {current?.description}
              </p>
            </motion.div>
          </AnimatePresence>
          {/* Dots */}
          <div className="flex gap-1.5 mt-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1 rounded-full transition-all duration-500 ${i === active ? "w-7 bg-amber-400" : "w-2 bg-white/30 hover:bg-white/50"}`}
              />
            ))}
          </div>
        </div>

        {/* Right — thumbnails */}
        <div
          ref={thumbsRef}
          className="flex gap-2.5 overflow-x-auto pb-0.5 max-w-[52%] shrink-0"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{ scrollSnapAlign: "start" }}
              className={`relative shrink-0 w-32 h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                i === active
                  ? "border-amber-400 shadow-lg shadow-amber-500/30 opacity-100 scale-100"
                  : "border-white/10 opacity-55 hover:opacity-90 hover:border-white/30 scale-95 hover:scale-100"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                sizes="128px"
              />
              <div
                className={`absolute inset-0 transition-colors duration-300 ${i === active ? "bg-black/10" : "bg-black/45"}`}
              />
              <div className="absolute bottom-0 left-0 right-0 p-1.5">
                <p className="text-white text-[10px] font-semibold leading-tight line-clamp-2 text-left drop-shadow">
                  {slide.title}
                </p>
              </div>
              {i === active && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Destination Detail Page ──────────────────────────────────────────────────

export default function DestinationDetailPage({
  params,
}: {
  params: { id: any };
}) {
  console.log("DestinationDetailPage params:", params);
  const [destinations, setDestinations] = useState<DestinationDetail[]>([]);

  // useEffect(() => {
  //   console.log("Fetching destinations data...");
  //   listofDestinations.forEach((d) => {
  //     if (d.id === params.id) {
  //       console.log("Found destination:", d.name);
  //       setDestinations([d]);
  //     }
  //   });

  //   // Simulate fetching data (replace with actual fetch if needed)
  //   setDestinations(listofDestinations);
  // }, []);

  useEffect(() => {
    console.log("Fetching destinations data...");
    // Simulate fetching data (replace with actual fetch if needed)
    setDestinations(listofDestinations);
  }, []);
  const dest = destinations.find((d) => d.id === params.id) ?? destinations[0];
  console.log(dest, params.id);
  return (
    <div className="min-h-screen bg-stone-50">
      {/* ── Hero — same pattern as other pages ── */}
      <div className="relative h-[60vh] min-h-[440px] overflow-hidden">
        <Image
          src={
            dest?.gallery && dest?.gallery.length > 0
              ? dest.gallery[0].image
              : "/default-image.jpg"
          }
          alt={dest?.name}
          fill
          priority
          className="object-cover scale-105"
          style={{ filter: "brightness(0.45) saturate(1.15)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-transparent" />

        {/* Back */}
        <div className="absolute top-6 left-6 z-20">
          <Link
            href="/destinations"
            className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Destinations
          </Link>
        </div>

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {dest?.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-3 drop-shadow-2xl">
                {dest?.name}
              </h1>
              <p className="text-amber-300 text-sm font-semibold mb-4 tracking-wide">
                {dest?.region}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                  <MapPinIcon className="w-4 h-4 text-amber-400" />
                  {dest?.region}
                </div>
                <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                  <SunIcon className="w-4 h-4 text-amber-400" />
                  Best: {dest?.bestTime}
                </div>
                <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                  <CloudIcon className="w-4 h-4 text-amber-400" />
                  {dest?.climate}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left — main */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-amber-500" />
                <span className="text-xs uppercase tracking-widest text-amber-600 font-bold">
                  Overview
                </span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                About {dest?.name}
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                {dest?.longDescription}
              </p>
            </motion.div>

            {/* Cinematic Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-amber-500" />
                <span className="text-xs uppercase tracking-widest text-amber-600 font-bold">
                  Gallery
                </span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Highlights & Scenery
              </h2>
              <CinematicGallery slides={dest?.gallery ?? []} />
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-amber-500" />
                <span className="text-xs uppercase tracking-widest text-amber-600 font-bold">
                  Top Experiences
                </span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Must-Do Highlights
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {dest?.highlights?.map((h, i) => (
                  <motion.div
                    key={h}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3 bg-white border border-stone-100 rounded-xl p-4"
                  >
                    <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <CheckIcon className="w-3.5 h-3.5 text-amber-600" />
                    </div>
                    <span className="text-sm text-gray-700 leading-relaxed">
                      {h}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Travel Tips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-amber-500" />
                <span className="text-xs uppercase tracking-widest text-amber-600 font-bold">
                  Insider Tips
                </span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Travel Tips
              </h2>
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 space-y-3">
                {dest?.travelTips?.map((tip, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-sm text-amber-900"
                  >
                    <span className="shrink-0 w-5 h-5 bg-amber-500 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    {tip}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — sticky sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {/* Quick info card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6"
              >
                <h4 className="font-serif font-bold text-gray-900 mb-4 text-lg">
                  Quick Info
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm">
                    <MapPinIcon className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">
                        Region
                      </div>
                      <div className="text-gray-700 font-medium">
                        {dest?.region}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <CalendarIcon className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">
                        Best Time to Visit
                      </div>
                      <div className="text-gray-700 font-medium">
                        {dest?.bestTime}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <SunIcon className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">
                        Climate
                      </div>
                      <div className="text-gray-700 font-medium">
                        {dest?.climate}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-100">
                  <div className="flex flex-wrap gap-1.5">
                    {dest?.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Book CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6"
              >
                <h4 className="font-serif font-bold text-gray-900 mb-2">
                  Visit {dest?.name}?
                </h4>
                <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                  Let us build a personalised tour that includes {dest?.name}{" "}
                  and other Sri Lanka highlights.
                </p>
                <Link
                  href="/packages"
                  className="w-full py-3.5 px-6 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-200/50 mb-3"
                >
                  See Packages
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full py-3 px-6 border border-amber-200 text-amber-700 font-medium rounded-xl transition-colors flex items-center justify-center gap-2 hover:bg-amber-700 hover:text-white hover:border-amber-700 duration-300"
                >
                  Plan Custom Tour
                </Link>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6"
              >
                <h4 className="font-serif font-bold text-gray-900 mb-4">
                  Need Help?
                </h4>
                <a
                  href="tel:+94000000000"
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-amber-700 transition-colors mb-3 group"
                >
                  <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-amber-100 transition-colors">
                    <PhoneIcon className="w-4 h-4 text-amber-600" />
                  </div>
                  +94 000 000 000
                </a>
                <a
                  href="mailto:info@magicalparadise.com"
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-amber-700 transition-colors group"
                >
                  <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-amber-100 transition-colors">
                    <MailIcon className="w-4 h-4 text-amber-600" />
                  </div>
                  info@magicalparadise.com
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
