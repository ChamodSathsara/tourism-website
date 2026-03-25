"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
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
import type {
  Destination as DestinationDetail,
  GallerySlide,
} from "../../dataConfig/types";
import { destinations as listofDestinations } from "@/dataConfig/dtaConfig";

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
    <div
      className="relative w-full rounded-2xl overflow-hidden bg-[#060d1a] border border-white/5"
      style={{ height: "500px" }}
    >
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
            style={{ filter: "brightness(1.15) saturate(1.1)" }}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 hover:bg-[#0BAADC]/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all border border-white/15"
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 hover:bg-[#0BAADC]/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all border border-white/15"
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
              <div className="flex items-center gap-2 mb-1.5">
                <CameraIcon className="w-3.5 h-3.5 text-[#0BAADC]" />
                <span className="text-[#0BAADC] text-xs font-semibold uppercase tracking-widest">
                  {active + 1} / {slides.length}
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-1.5">
                {current?.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed line-clamp-2">
                {current?.description}
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
          className="flex gap-2.5 overflow-x-auto pb-0.5 max-w-[52%] shrink-0"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
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
                className={`absolute inset-0 transition-colors ${i === active ? "bg-black/10" : "bg-black/50"}`}
              />
              <div className="absolute bottom-0 left-0 right-0 p-1.5">
                <p className="text-white text-[10px] font-semibold leading-tight line-clamp-2 drop-shadow">
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
  );
}

export default function DestinationDetailPage({
  params,
}: {
  params: { id: any };
}) {
  const [destinations, setDestinations] = useState<DestinationDetail[]>([]);
  useEffect(() => {
    setDestinations(listofDestinations);
  }, []);
  const dest = destinations.find((d) => d.id === params.id) ?? destinations[0];

  return (
    <div className="min-h-screen bg-[#060d1a]">
      {/* Hero */}
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
          style={{ filter: "brightness(0.35) saturate(1.15)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060d1a]/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060d1a] via-transparent to-transparent" />

        <div className="absolute top-6 left-6 z-20">
          <Link
            href="/destinations"
            className="flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors bg-white/8 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full"
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
                    className="px-3 py-1 bg-[#0BAADC]/20 border border-[#0BAADC]/30 text-[#0BAADC] text-xs font-bold rounded-full uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-3 drop-shadow-2xl">
                {dest?.name}
              </h1>
              <p className="text-[#0BAADC] text-sm font-semibold mb-4 tracking-wide">
                {dest?.region}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {[
                  { icon: MapPinIcon, text: dest?.region },
                  { icon: SunIcon, text: `Best: ${dest?.bestTime}` },
                  { icon: CloudIcon, text: dest?.climate },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-1.5 bg-white/8 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-white text-sm font-medium"
                  >
                    <Icon className="w-4 h-4 text-[#0BAADC]" />
                    {text}
                  </div>
                ))}
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
                About {dest?.name}
              </h2>
              <p className="text-white/50 leading-relaxed text-base">
                {dest?.longDescription}
              </p>
            </motion.div>

            {/* Gallery */}
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
                <div className="w-6 h-px bg-[#0BAADC]" />
                <span className="text-xs uppercase tracking-widest text-[#0BAADC] font-bold">
                  Top Experiences
                </span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-white mb-6">
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
                    className="flex items-start gap-3 bg-[#0d1424] border border-white/5 rounded-xl p-4 hover:border-[#0BAADC]/20 transition-colors"
                  >
                    <div className="w-6 h-6 bg-[#0BAADC]/10 border border-[#0BAADC]/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <CheckIcon className="w-3.5 h-3.5 text-[#0BAADC]" />
                    </div>
                    <span className="text-sm text-white/60 leading-relaxed">
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
                <div className="w-6 h-px bg-[#0BAADC]" />
                <span className="text-xs uppercase tracking-widest text-[#0BAADC] font-bold">
                  Insider Tips
                </span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-white mb-6">
                Travel Tips
              </h2>
              <div className="bg-[#0BAADC]/5 border border-[#0BAADC]/15 rounded-2xl p-6 space-y-3">
                {dest?.travelTips?.map((tip, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-sm text-white/60"
                  >
                    <span className="shrink-0 w-5 h-5 bg-gradient-to-br from-[#1761A0] to-[#0BAADC] text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    {tip}
                  </div>
                ))}
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
                <h4 className="font-serif font-bold text-white mb-4 text-lg">
                  Quick Info
                </h4>
                <div className="space-y-3">
                  {[
                    { icon: MapPinIcon, label: "Region", value: dest?.region },
                    {
                      icon: CalendarIcon,
                      label: "Best Time to Visit",
                      value: dest?.bestTime,
                    },
                    { icon: SunIcon, label: "Climate", value: dest?.climate },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3 text-sm">
                      <Icon className="w-4 h-4 text-[#0BAADC] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-white/30 text-xs uppercase tracking-wider mb-0.5">
                          {label}
                        </div>
                        <div className="text-white/70 font-medium">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {dest?.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-white/5 border border-white/10 text-white/50 text-xs font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="bg-[#0d1424] rounded-2xl border border-white/5 p-6"
              >
                <h4 className="font-serif font-bold text-white mb-2">
                  Visit {dest?.name}?
                </h4>
                <p className="text-sm text-white/40 mb-5 leading-relaxed">
                  Let us build a personalised tour that includes {dest?.name}{" "}
                  and other Sri Lanka highlights.
                </p>
                <Link
                  href="/packages"
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-[#1761A0] to-[#0BAADC] text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(11,170,220,0.3)] mb-3"
                >
                  See Packages
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full py-3 px-6 border border-white/10 text-white/50 font-medium rounded-xl flex items-center justify-center gap-2 hover:border-[#0BAADC]/30 hover:text-[#0BAADC] transition-colors duration-300"
                >
                  Plan Custom Tour
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
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
                    className="flex items-center gap-3 text-sm text-white/40 hover:text-[#0BAADC] transition-colors mb-3 group"
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
