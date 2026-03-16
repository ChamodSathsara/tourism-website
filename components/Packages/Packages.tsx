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
  ArrowLeftIcon,
  PhoneIcon,
  MailIcon,
  CheckIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import img1 from "../../assest/Packages/1.jpg";
import img2 from "../../assest/Packages/2.jpg";
import img3 from "../../assest/Packages/3.jpg";
import img4 from "../../assest/Packages/4.jpg";
import img5 from "../../assest/Packages/5.jpg";
import img6 from "../../assest/Packages/6.jpg";
import { useRouter } from "next/navigation";

// ─── Types ────────────────────────────────────────────────────────────────────

interface DayItinerary {
  day: number;
  title: string;
  locations: string;
  description: string;
  highlights: string[];
}

interface GallerySlide {
  image: StaticImageData;
  title: string;
  description: string;
}

interface PackageDetail {
  id: string;
  name: string;
  duration: string;
  price: string;
  badge: string | null;
  tagline: string;
  description: string;
  highlights: string[];
  includes: string[];
  excludes: string[];
  images: StaticImageData[];
  gallery: GallerySlide[];
  itinerary: DayItinerary[];
}

// ─── Package Data ─────────────────────────────────────────────────────────────

const packages: PackageDetail[] = [
  {
    id: "magical-big-five",
    name: "Magical Big Five",
    duration: "7 Days",
    price: "$899",
    badge: "Wildlife",
    tagline: "Asian Elephant · Leopard · Sloth Bear · Blue Whale · Sperm Whale",
    description:
      "The Magical Big Five tour package centers around wildlife and the awe inspiring mammals of the open seas encircling Sri Lanka. The Magical Big Five gives prominence to observing the Asian Elephant, Leopard, Sloth Bear, Blue Whale, and Sperm Whale in their natural habitat.",
    highlights: [
      "Elephant safari at Udawalawe National Park",
      "Visit the Elephant Transit Home feeding sessions",
      "Trek through UNESCO Sinharaja Rainforest",
      "Leopard spotting at Yala National Park",
      "Whale & dolphin watching at Mirissa harbor",
      "Optional turtle hatchery & Galle Fort visit",
    ],
    includes: [
      "Airport transfers",
      "6 nights accommodation",
      "Daily breakfast",
      "All safaris & park entry fees",
      "Expert wildlife guide",
      "Whale watching boat trip",
      "Sinharaja forest trek",
    ],
    excludes: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Lunch & dinner",
      "Optional activities",
    ],
    // Hero image (original unchanged)
    images: [img4, img1, img2, img3, img5, img6],
    // Autoplay gallery section — each slide has its own title + description
    gallery: [
      {
        image: img4,
        title: "Yala National Park",
        description:
          "Home to the world's highest leopard density, Yala's coastal lagoons and scrublands make every safari a breathtaking adventure.",
      },
      {
        image: img1,
        title: "Sigiriya Rock Fortress",
        description:
          "Rise to the summit of this 5th-century citadel surrounded by ancient frescoes, water gardens, and panoramic jungle views.",
      },
      {
        image: img2,
        title: "Mirissa Beach",
        description:
          "Sri Lanka's most picturesque crescent bay — the gateway to blue whale watching, dolphins, and unforgettable Indian Ocean sunsets.",
      },
      {
        image: img3,
        title: "Ella Highlands",
        description:
          "Misty mountains, emerald tea estates, and the iconic Nine Arch Bridge — hill country that captures every traveller's heart.",
      },
      {
        image: img5,
        title: "Udawalawe Safari",
        description:
          "Witness herds of wild elephants in open grasslands that rival Africa's great savannah reserves.",
      },
      {
        image: img6,
        title: "Sinharaja Rainforest",
        description:
          "Explore Sri Lanka's UNESCO World Heritage rainforest on foot, guided through trails teeming with rare birds and endemic plants.",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Airport → Negombo",
        locations: "Airport | Negombo",
        description:
          "A warm welcome to Sri Lankan hospitality! On arrival at the Bandaranayake International Airport (BIA), you will be met by a Magical Paradise tour coordinator for a quick formality before proceeding to the historically important beach town of Negombo, ten kilometers away from the airport.",
        highlights: [
          "Airport welcome & meet-greet",
          "Transfer to Negombo (10 km)",
          "Sightseeing & shopping in Negombo town",
          "Overnight stay in Negombo",
        ],
      },
      {
        day: 2,
        title: "Kithulgala → Udawalawe",
        locations: "Kithulgala | Udawalawe",
        description:
          "Engage in thrilling water sports and proceed to the Udawalawe national park. With herds of elephants, wild buffalo, sambar deer, and leopards, Uda Walawe national park is the Sri Lankan national park that best rivals the savannah reserves of Africa.",
        highlights: [
          "Thrilling water sports at Kithulgala",
          "Drive to Udawalawe National Park",
          "Evening elephant safari",
          "Wild buffalo, sambar deer & leopard spotting",
          "Overnight stay in Udawalawe",
        ],
      },
      {
        day: 3,
        title: "Udawalawe → Sinharaja",
        locations: "Udawalawe | Sinharaja",
        description:
          "After breakfast, visit the Elephant Transit Home (ETH) at Udawalawe. This provides a wonderful opportunity to see the orphans being fed and cared for while also observing wild elephants in a stunning setting. Afterward, proceed to the Sinharaja rainforest — a UNESCO World Heritage Site.",
        highlights: [
          "Elephant Transit Home visit (feeding at 9am, 12pm, 3pm, 6pm)",
          "Watch orphan elephants from viewing platform",
          "Drive to Sinharaja Rainforest",
          "UNESCO World Heritage & Biosphere Reserve",
          "Overnight stay in Sinharaja",
        ],
      },
      {
        day: 4,
        title: "Sinharaja → Yala",
        locations: "Sinharaja | Yala",
        description:
          "After Sinharaja rainforest trekking in the morning, proceed to Yala National Park — the most visited and second largest national park in Sri Lanka. Yala harbours 215 bird species and is home to one of the highest leopard densities in the world.",
        highlights: [
          "Morning trek through Sinharaja rainforest",
          "Drive to Yala National Park",
          "215 bird species including 6 endemics",
          "World's highest leopard density spotting",
          "Overnight stay in Yala",
        ],
      },
      {
        day: 5,
        title: "Yala → Mirissa",
        locations: "Yala | Mirissa",
        description:
          "Do the morning safari at Yala and proceed towards Mirissa — one of the most picture-postcard perfect beaches on the south coast. This secluded crescent-shaped beach is perfect for relaxing overlooking the Indian Ocean.",
        highlights: [
          "Morning wildlife safari at Yala",
          "Drive to Mirissa south coast",
          "Crescent beach relaxation",
          "Optional surfing, temple & snake farm visits",
          "Overnight stay in Mirissa",
        ],
      },
      {
        day: 6,
        title: "Mirissa — Whale Watching",
        locations: "Mirissa",
        description:
          "Be at the harbor at 7 am to go for whale and dolphin watching. In the warm Indian Ocean you can see Blue whales, Sperm whales, Fin whales, Killer whales (on occasion), and dolphins including Bottlenose, Spinner, and Striped varieties.",
        highlights: [
          "7am harbor departure for whale watching",
          "Blue whale & sperm whale sightings",
          "Bottlenose, spinner & striped dolphins",
          "Possible turtle & flying fish sightings",
          "Afternoon beach relaxation",
          "Overnight stay in Mirissa",
        ],
      },
      {
        day: 7,
        title: "Mirissa → Airport",
        locations: "Mirissa | Airport",
        description:
          "As your holiday in Sri Lanka winds down, proceed with happy memories back to the airport. En-route, optional visits include turtle hatcheries and the historic Galle Dutch Fort — a UNESCO architectural heritage monument.",
        highlights: [
          "Optional turtle hatchery visit & turtle release",
          "Optional Galle Dutch Fort walk",
          "Transfer to Bandaranayake International Airport",
          "Depart with unforgettable memories",
        ],
      },
    ],
  },
];

// ─── Cinematic Autoplay Gallery ───────────────────────────────────────────────

function CinematicGallery({ slides }: { slides: GallerySlide[] }) {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const thumbsRef = useRef<HTMLDivElement>(null);
  //   const AUTOPLAY_MS = 4000;

  const goTo = useCallback(
    (index: number) => {
      if (animating || index === active) return;
      setAnimating(true);
      setActive(index);
      setTimeout(() => setAnimating(false), 700);
      if (thumbsRef.current) {
        const thumb = thumbsRef.current.children[index] as HTMLElement;
        if (thumb) {
          thumb.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Section label */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-6 h-px bg-amber-500" />
        <span className="text-xs uppercase tracking-widest text-amber-600 font-bold">
          Gallery
        </span>
      </div>
      <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
        Highlights & Scenery
      </h2>

      {/* Cinematic panel */}
      <div
        className="relative w-full rounded-2xl overflow-hidden bg-black"
        style={{ height: "480px" }}
      >
        {/* Autoplay progress bar */}
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
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover"
              style={{ filter: "brightness(1.25) saturate(1.1)" }}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Prev / Next arrows */}
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

        {/* Bottom: left text + right thumbnails */}
        <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end gap-6 px-6 pb-5">
          {/* Left — active slide info */}
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
                <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="flex gap-1.5 mt-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === active
                      ? "w-7 bg-amber-400"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right — thumbnail strip */}
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
                className={`relative shrink-0 w-32 h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  i === active
                    ? "border-amber-400 shadow-lg shadow-amber-500/30 opacity-100 scale-100"
                    : "border-white/10 opacity-60 hover:opacity-90 hover:border-white/30 scale-95 hover:scale-100"
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
                  className={`absolute inset-0 transition-colors duration-300 ${
                    i === active ? "bg-black/15" : "bg-black/40"
                  }`}
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
    </motion.div>
  );
}

// ─── Day Card ─────────────────────────────────────────────────────────────────

function DayCard({ day, index }: { day: DayItinerary; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="border border-stone-200 rounded-2xl overflow-hidden bg-white"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 px-6 py-4 hover:bg-stone-50 transition-colors text-left"
      >
        <div className="shrink-0 w-12 h-12 bg-amber-500 rounded-xl flex flex-col items-center justify-center">
          <span className="text-white text-[10px] font-bold uppercase tracking-wider leading-none">
            Day
          </span>
          <span className="text-white text-lg font-bold leading-none">
            {day.day}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <MapPinIcon className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="text-xs text-amber-600 font-semibold truncate">
              {day.locations}
            </span>
          </div>
          <h4 className="text-base font-serif font-bold text-gray-900">
            {day.title}
          </h4>
        </div>
        <ChevronDownIcon
          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0 border-t border-stone-100">
              <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-4">
                {day.description}
              </p>
              <ul className="space-y-2">
                {day.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <CheckIcon className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PackageDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const pkg = packages.find((p) => p.id === params.id) ?? packages[0];
  const router = useRouter();
  const clickBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* ── Hero — ORIGINAL UNCHANGED ── */}
      <div className="relative h-[60vh] min-h-[440px] overflow-hidden">
        <Image
          src={pkg.images[0]}
          alt={pkg.name}
          fill
          priority
          className="object-cover scale-105"
          style={{ filter: "brightness(0.45) saturate(1.15)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-transparent" />

        {/* Back button */}
        {/* <div
          className="absolute top-6 left-6 z-20"
          onClick={() => {
            clickBack();
          }}
        >
          <div className="cursor-pointer flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Packages
          </div>
        </div> */}

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {pkg.badge && (
                <span className="inline-block mb-3 px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  {pkg.badge}
                </span>
              )}
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-3 drop-shadow-2xl">
                {pkg.name}
              </h1>
              <p className="text-amber-300 text-sm font-semibold mb-4 tracking-wide">
                {pkg.tagline}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                  <ClockIcon className="w-4 h-4 text-amber-400" />
                  {pkg.duration}
                </div>
                <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                  <CalendarIcon className="w-4 h-4 text-amber-400" />
                  {pkg.itinerary.length} Day Itinerary
                </div>
                <div className="bg-amber-500 px-4 py-2 rounded-full text-white text-sm font-bold">
                  From {pkg.price}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left — main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* 1. Overview */}
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
                About This Package
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                {pkg.description}
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-2.5">
                {pkg.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <CheckIcon className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                    {h}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 2. Cinematic Gallery — NEW SECTION */}
            <CinematicGallery slides={pkg.gallery} />

            {/* 3. Itinerary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-amber-500" />
                <span className="text-xs uppercase tracking-widest text-amber-600 font-bold">
                  Itinerary
                </span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Day by Day
              </h2>
              <div className="space-y-3">
                {pkg.itinerary.map((day, i) => (
                  <DayCard key={day.day} day={day} index={i} />
                ))}
              </div>
            </motion.div>

            {/* 4. Includes / Excludes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-amber-500" />
                <span className="text-xs uppercase tracking-widest text-amber-600 font-bold">
                  What's Included
                </span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Includes & Excludes
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
                  <h4 className="font-serif font-bold text-emerald-800 mb-4 text-lg">
                    ✓ Included
                  </h4>
                  <ul className="space-y-2.5">
                    {pkg.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-emerald-700"
                      >
                        <CheckIcon className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-rose-50 border border-rose-100 rounded-2xl p-6">
                  <h4 className="font-serif font-bold text-rose-800 mb-4 text-lg">
                    ✕ Not Included
                  </h4>
                  <ul className="space-y-2.5">
                    {pkg.excludes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-rose-700"
                      >
                        <XIcon className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — sticky booking card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6"
              >
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                  Starting from
                </div>
                <div className="text-4xl font-bold text-amber-600 mb-1">
                  {pkg.price}
                </div>
                <div className="text-sm text-gray-400 mb-6">per person</div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-600 bg-stone-50 rounded-xl px-4 py-3">
                    <ClockIcon className="w-4 h-4 text-amber-500 shrink-0" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600 bg-stone-50 rounded-xl px-4 py-3">
                    <CalendarIcon className="w-4 h-4 text-amber-500 shrink-0" />
                    {pkg.itinerary.length}-day itinerary
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600 bg-stone-50 rounded-xl px-4 py-3">
                    <MapPinIcon className="w-4 h-4 text-amber-500 shrink-0" />
                    {pkg.itinerary.length} destinations
                  </div>
                </div>
                <Link
                  href="/contactUs"
                  className="w-full py-3.5 px-6 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-200/50"
                >
                  Book This Package
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
                <Link
                  href="/contactUs"
                  className="w-full mt-3 py-3 px-6 border border-amber-200 text-amber-700 font-medium rounded-xl transition-colors flex items-center justify-center gap-2 hover:bg-amber-700 hover:text-white hover:border-amber-700 duration-300"
                >
                  Enquire Now
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
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
