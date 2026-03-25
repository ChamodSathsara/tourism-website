"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClockIcon,
  MapPinIcon,
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  PhoneIcon,
  MailIcon,
  CheckIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import img1 from "../../assest/Packages/1.jpg";
import { useRouter } from "next/navigation";
import { specialPackages as packages } from "@/dataConfig/dtaConfig";
import type {
  Package as PackageDetail,
  GallerySlide,
  DayItinerary,
} from "@/dataConfig/types";

function CinematicGallery({ slides }: { slides: GallerySlide[] }) {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const thumbsRef = useRef<HTMLDivElement>(null);

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
  const current = slides[active];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-6 h-px bg-[#0BAADC]" />
        <span className="text-xs uppercase tracking-widest text-[#0BAADC] font-bold">
          Gallery
        </span>
      </div>
      <h2 className="text-3xl font-serif font-bold text-white mb-6">
        Highlights & Scenery
      </h2>
      <div
        className="relative w-full rounded-2xl overflow-hidden bg-[#060d1a] border border-white/5"
        style={{ height: "480px" }}
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover"
              style={{ filter: "brightness(1.15) saturate(1.1)" }}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 hover:bg-[#0BAADC]/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/15"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 hover:bg-[#0BAADC]/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/15"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>

        <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end gap-6 px-6 pb-5">
          <div className="flex-1 min-w-0 max-w-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={active + "-info"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-xl font-serif font-bold text-white mb-1.5">
                  {current.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed line-clamp-2">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="flex gap-1.5 mt-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1 rounded-full transition-all duration-500 ${i === active ? "w-7 bg-[#0BAADC]" : "w-2 bg-white/20 hover:bg-white/40"}`}
                />
              ))}
            </div>
          </div>
          <div
            ref={thumbsRef}
            className="flex gap-2.5 overflow-x-auto scrollbar-hide pb-0.5 max-w-[55%] shrink-0"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{ scrollSnapAlign: "start" }}
                className={`relative shrink-0 w-32 h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${i === active ? "border-[#0BAADC] shadow-lg shadow-[#0BAADC]/30 opacity-100 scale-100" : "border-white/10 opacity-55 hover:opacity-90 hover:border-white/30 scale-95 hover:scale-100"}`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
                <div
                  className={`absolute inset-0 transition-colors duration-300 ${i === active ? "bg-black/10" : "bg-black/50"}`}
                />
                <div className="absolute bottom-0 left-0 right-0 p-1.5">
                  <p className="text-white text-[10px] font-semibold leading-tight line-clamp-2 text-left drop-shadow">
                    {slide.title}
                  </p>
                </div>
                {i === active && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0BAADC]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function DayCard({ day, index }: { day: DayItinerary; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="border border-white/8 rounded-2xl overflow-hidden bg-[#0d1424] hover:border-[#0BAADC]/20 transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 px-6 py-4 hover:bg-white/5 transition-colors text-left"
      >
        <div className="shrink-0 w-12 h-12 bg-gradient-to-br from-[#1761A0] to-[#0BAADC] rounded-xl flex flex-col items-center justify-center">
          <span className="text-white text-[10px] font-bold uppercase tracking-wider leading-none">
            Day
          </span>
          <span className="text-white text-lg font-bold leading-none">
            {day.day}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <MapPinIcon className="w-3.5 h-3.5 text-[#0BAADC] shrink-0" />
            <span className="text-xs text-[#0BAADC] font-semibold truncate">
              {day.locations}
            </span>
          </div>
          <h4 className="text-base font-serif font-bold text-white">
            {day.title}
          </h4>
        </div>
        <ChevronDownIcon
          className={`w-5 h-5 text-white/30 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0 border-t border-white/5">
              <p className="text-white/50 text-sm leading-relaxed mt-4 mb-4">
                {day.description}
              </p>
              <ul className="space-y-2">
                {day.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-white/60"
                  >
                    <CheckIcon className="w-4 h-4 text-[#0BAADC] mt-0.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function PackageDetailPage({ params }: { params: { id: any } }) {
  const pkg = packages.find((p) => p.id === params.id) ?? packages[0];
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#060d1a]">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[440px] overflow-hidden">
        <Image
          src={pkg?.images?.[0] ?? img1}
          alt={pkg?.title}
          fill
          priority
          className="object-cover scale-105"
          style={{ filter: "brightness(0.35) saturate(1.15)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060d1a]/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060d1a] via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {pkg.badge && (
                <span className="inline-block mb-3 px-3 py-1 bg-[#0BAADC]/20 border border-[#0BAADC]/30 text-[#0BAADC] text-xs font-bold rounded-full uppercase tracking-wider">
                  {pkg.badge}
                </span>
              )}
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-3 drop-shadow-2xl">
                {pkg.title}
              </h1>
              <p className="text-[#0BAADC] text-sm font-semibold mb-4 tracking-wide">
                {pkg.tags}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-white text-sm font-medium">
                  <ClockIcon className="w-4 h-4 text-[#0BAADC]" />
                  {pkg.duration}
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-white text-sm font-medium">
                  <CalendarIcon className="w-4 h-4 text-[#0BAADC]" />
                  {pkg?.itinerary?.length ?? 0} Day Itinerary
                </div>
                <div className="bg-gradient-to-r from-[#1761A0] to-[#0BAADC] px-4 py-2 rounded-full text-white text-sm font-bold shadow-[0_0_15px_rgba(11,170,220,0.4)]">
                  From {pkg.price}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-[#0BAADC]" />
                <span className="text-xs uppercase tracking-widest text-[#0BAADC] font-bold">
                  Overview
                </span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-white mb-4">
                About This Package
              </h2>
              <p className="text-white/50 leading-relaxed text-base">
                {pkg.description}
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-2.5">
                {pkg?.highlights?.map((h) => (
                  <div
                    key={h}
                    className="flex items-start gap-2 text-sm text-white/60"
                  >
                    <CheckIcon className="w-4 h-4 text-[#0BAADC] mt-0.5 shrink-0" />
                    {h}
                  </div>
                ))}
              </div>
            </motion.div>

            <CinematicGallery slides={pkg?.gallery ?? []} />

            {/* Itinerary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-[#0BAADC]" />
                <span className="text-xs uppercase tracking-widest text-[#0BAADC] font-bold">
                  Itinerary
                </span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-white mb-6">
                Day by Day
              </h2>
              <div className="space-y-3">
                {pkg?.itinerary?.map((day, i) => (
                  <DayCard key={day.day} day={day} index={i} />
                ))}
              </div>
            </motion.div>

            {/* Includes/Excludes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-[#0BAADC]" />
                <span className="text-xs uppercase tracking-widest text-[#0BAADC] font-bold">
                  What's Included
                </span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-white mb-6">
                Includes & Excludes
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6">
                  <h4 className="font-serif font-bold text-emerald-400 mb-4 text-lg">
                    ✓ Included
                  </h4>
                  <ul className="space-y-2.5">
                    {pkg?.includes?.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-emerald-400/80"
                      >
                        <CheckIcon className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-rose-500/5 border border-rose-500/20 rounded-2xl p-6">
                  <h4 className="font-serif font-bold text-rose-400 mb-4 text-lg">
                    ✕ Not Included
                  </h4>
                  <ul className="space-y-2.5">
                    {pkg?.excludes?.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-rose-400/80"
                      >
                        <XIcon className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-[#0d1424] rounded-2xl border border-white/5 p-6"
              >
                <div className="text-xs text-white/30 uppercase tracking-wider mb-1">
                  Starting from
                </div>
                <div className="text-4xl font-bold text-[#0BAADC] mb-1">
                  {pkg.price}
                </div>
                <div className="text-sm text-white/30 mb-6">per person</div>
                <div className="space-y-3 mb-6">
                  {[
                    { icon: ClockIcon, text: pkg.duration },
                    {
                      icon: CalendarIcon,
                      text: `${pkg?.itinerary?.length ?? 0}-day itinerary`,
                    },
                    {
                      icon: MapPinIcon,
                      text: `${pkg?.itinerary?.length ?? 0} destinations`,
                    },
                  ].map(({ icon: Icon, text }) => (
                    <div
                      key={text}
                      className="flex items-center gap-3 text-sm text-white/50 bg-white/5 border border-white/5 rounded-xl px-4 py-3"
                    >
                      <Icon className="w-4 h-4 text-[#0BAADC] shrink-0" />
                      {text}
                    </div>
                  ))}
                </div>
                <Link
                  href="/contactUs"
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-[#1761A0] to-[#0BAADC] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(11,170,220,0.3)] hover:shadow-[0_0_30px_rgba(11,170,220,0.5)]"
                >
                  Book This Package
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
                <Link
                  href="/contactUs"
                  className="w-full mt-3 py-3 px-6 border border-white/10 text-white/60 font-medium rounded-xl transition-colors flex items-center justify-center gap-2 hover:border-[#0BAADC]/30 hover:text-[#0BAADC] duration-300"
                >
                  Enquire Now
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="bg-[#0d1424] rounded-2xl border border-white/5 p-6"
              >
                <h4 className="font-serif font-bold text-white mb-4">
                  Need Help?
                </h4>
                {[
                  {
                    icon: PhoneIcon,
                    href: "tel:+94000000000",
                    text: "+94 000 000 000",
                  },
                  {
                    icon: MailIcon,
                    href: "mailto:info@magicalparadise.com",
                    text: "info@magicalparadise.com",
                  },
                ].map(({ icon: Icon, href, text }) => (
                  <a
                    key={text}
                    href={href}
                    className="flex items-center gap-3 text-sm text-white/50 hover:text-[#0BAADC] transition-colors mb-3 group"
                  >
                    <div className="w-9 h-9 bg-[#0BAADC]/10 border border-[#0BAADC]/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#0BAADC]/20 transition-colors">
                      <Icon className="w-4 h-4 text-[#0BAADC]" />
                    </div>
                    {text}
                  </a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ded
