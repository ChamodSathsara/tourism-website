"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClockIcon,
  ChevronRightIcon,
  SunIcon,
  HeartIcon,
  MapPinIcon,
  StarIcon,
  SparklesIcon,
  type LucideIcon,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type AccentColor = "amber" | "rose" | "emerald";

interface Package {
  id: string;
  title: string;
  duration: string;
  price: string;
  badge: string | null;
  tags: string[];
  description: string;
  image: string;
}

interface Tab {
  key: string;
  label: string;
  icon: LucideIcon;
  data: Package[];
  color: AccentColor;
}

interface PackageCardProps {
  pkg: Package;
  index: number;
  accentColor: AccentColor;
}

// ─── Package Data ────────────────────────────────────────────────────────────

const dayPackages = [
  {
    id: "d1",
    title: "Sigiriya & Dambulla Day Tour",
    duration: "1 Day",
    price: "$89",
    badge: "Most Popular",
    tags: ["Culture", "History"],
    description:
      "Climb the legendary Lion Rock fortress and explore the stunning Dambulla Cave Temple in a single epic day.",
    image: "/assest/packages/1.jpg",
  },
  {
    id: "d2",
    title: "Kandy City & Temple Tour",
    duration: "1 Day",
    price: "$69",
    badge: null,
    tags: ["Culture", "Spiritual"],
    description:
      "Visit the sacred Temple of the Tooth Relic, Kandy Lake, and the botanical gardens in Sri Lanka's hill capital.",
    image: "/assest/packages/3.jpg",
  },
  {
    id: "d3",
    title: "Colombo City Explorer",
    duration: "1 Day",
    price: "$55",
    badge: null,
    tags: ["City", "Shopping"],
    description:
      "Discover colonial architecture, vibrant markets, seaside promenades, and the best street food in Colombo.",
    image: "/assest/packages/2.jpg",
  },
  {
    id: "d4",
    title: "Yala Half-Day Safari",
    duration: "1 Day",
    price: "$120",
    badge: "Thrill Seeker",
    tags: ["Wildlife", "Nature"],
    description:
      "Track leopards, elephants, and exotic birds in Yala National Park on an exhilarating early morning safari.",
    image: "/assest/packages/4.jpg",
  },
  {
    id: "d5",
    title: "Ella Hike & Nine Arches",
    duration: "1 Day",
    price: "$75",
    badge: null,
    tags: ["Adventure", "Scenic"],
    description:
      "Hike Little Adam's Peak, photograph the iconic Nine Arch Bridge, and sip fresh tea at a hilltop estate.",
    image: "/assest/packages/5.jpg",
  },
  {
    id: "d6",
    title: "Mirissa Whale Watching",
    duration: "1 Day",
    price: "$95",
    badge: "Seasonal",
    tags: ["Ocean", "Wildlife"],
    description:
      "Set sail at dawn to witness majestic blue whales and playful dolphins off Sri Lanka's southern coast.",
    image: "/assest/packages/6.jpg",
  },
  {
    id: "d7",
    title: "Galle Fort Heritage Walk",
    duration: "1 Day",
    price: "$60",
    badge: null,
    tags: ["History", "Culture"],
    description:
      "Wander through cobblestone streets of the UNESCO-listed Dutch Galle Fort and its charming boutiques.",
    image: "/assest/packages/1.jpg",
  },
  {
    id: "d8",
    title: "Nuwara Eliya Tea Country",
    duration: "1 Day",
    price: "$80",
    badge: "Scenic",
    tags: ["Nature", "Tea"],
    description:
      "Tour a working tea factory, stroll through emerald green estates, and enjoy high tea at a colonial bungalow.",
    image: "/assest/packages/3.jpg",
  },
];

const couplePackages = [
  {
    id: "c1",
    title: "Romantic Honeymoon Escape",
    duration: "8 Days",
    price: "$1,299",
    badge: "Best Value",
    tags: ["Luxury", "Honeymoon"],
    description:
      "Luxury boutique hotels, private candlelit dinners, and unforgettable couples experiences across the island.",
    image: "/assest/packages/5.jpg",
  },
  {
    id: "c2",
    title: "Sunset Coast Getaway",
    duration: "4 Days",
    price: "$649",
    badge: null,
    tags: ["Beach", "Romance"],
    description:
      "Private beach dinners, sunset catamaran cruises, and couple spa rituals along the golden southern coast.",
    image: "/assest/packages/2.jpg",
  },
  {
    id: "c3",
    title: "Hill Country Love Trail",
    duration: "5 Days",
    price: "$749",
    badge: null,
    tags: ["Scenic", "Adventure"],
    description:
      "Misty mountains, scenic train rides, and cozy heritage bungalows — romance woven into every moment.",
    image: "/assest/packages/3.jpg",
  },
  {
    id: "c4",
    title: "Culture & Candlelight Tour",
    duration: "6 Days",
    price: "$899",
    badge: "Curated",
    tags: ["Culture", "Luxury"],
    description:
      "Ancient temples by day, rooftop dining and infinity pool evenings in boutique heritage hotels by night.",
    image: "/assest/packages/1.jpg",
  },
  {
    id: "c5",
    title: "Luxury Villa Retreat",
    duration: "7 Days",
    price: "$1,599",
    badge: "Premium",
    tags: ["Luxury", "Private"],
    description:
      "Exclusive private villa with pool, personal chef, couples yoga, and custom island excursions on demand.",
    image: "/assest/packages/6.jpg",
  },
  {
    id: "c6",
    title: "Whale Watch & Beach Bliss",
    duration: "3 Days",
    price: "$499",
    badge: null,
    tags: ["Ocean", "Romance"],
    description:
      "Sail with whales at sunrise, snorkel coral gardens, and unwind at a beachfront couples resort.",
    image: "/assest/packages/4.jpg",
  },
];

const morePackages = [
  {
    id: "m1",
    title: "Cultural Triangle Explorer",
    duration: "7 Days",
    price: "$899",
    badge: "Classic",
    tags: ["Culture", "Heritage"],
    description:
      "Discover ancient kingdoms, majestic stupas, and the iconic Sigiriya Rock Fortress on this heritage circuit.",
    image: "/assest/packages/1.jpg",
  },
  {
    id: "m2",
    title: "Coastal Paradise",
    duration: "5 Days",
    price: "$649",
    badge: null,
    tags: ["Beach", "Surf"],
    description:
      "Relax on pristine southern beaches, surf in Weligama, and explore historic Galle Fort.",
    image: "/assest/packages/2.jpg",
  },
  {
    id: "m3",
    title: "Wildlife Safari Adventure",
    duration: "6 Days",
    price: "$799",
    badge: "Adventure",
    tags: ["Wildlife", "Safari"],
    description:
      "Spot elusive leopards in Yala, elephants in Minneriya, and diverse birdlife across national parks.",
    image: "/assest/packages/4.jpg",
  },
  {
    id: "m4",
    title: "Complete Sri Lanka",
    duration: "14 Days",
    price: "$1,899",
    badge: "Grand Tour",
    tags: ["All-inclusive", "Epic"],
    description:
      "The ultimate grand tour covering culture, nature, wildlife, and beaches in one unforgettable journey.",
    image: "/assest/packages/6.jpg",
  },
  {
    id: "m5",
    title: "Family Fun Island",
    duration: "10 Days",
    price: "$1,199",
    badge: "Family",
    tags: ["Family", "Kids"],
    description:
      "Kid-friendly safaris, ancient forts, beach days, and cultural workshops designed for the whole family.",
    image: "/assest/packages/5.jpg",
  },
  {
    id: "m6",
    title: "Ayurveda & Wellness",
    duration: "7 Days",
    price: "$999",
    badge: "Wellness",
    tags: ["Wellness", "Spa"],
    description:
      "Rejuvenate with authentic Ayurvedic treatments, meditation retreats, and organic cuisine at serene wellness centers.",
    image: "/assest/packages/3.jpg",
  },
  {
    id: "m7",
    title: "Backpacker Budget Tour",
    duration: "10 Days",
    price: "$449",
    badge: "Budget",
    tags: ["Budget", "Adventure"],
    description:
      "Experience the real Sri Lanka on a budget — hostels, tuk-tuks, local food, and off-the-beaten-path gems.",
    image: "/assest/packages/1.jpg",
  },
  {
    id: "m8",
    title: "Photography & Landscapes",
    duration: "8 Days",
    price: "$849",
    badge: null,
    tags: ["Photography", "Scenic"],
    description:
      "Golden hour safaris, mist-soaked highlands, ancient ruins — a landscape photographer's dream itinerary.",
    image: "/assest/packages/2.jpg",
  },
];

// ─── Tab Config ───────────────────────────────────────────────────────────────

const tabs: Tab[] = [
  {
    key: "day",
    label: "Day Packages",
    icon: SunIcon,
    data: dayPackages,
    color: "amber",
  },
  {
    key: "couple",
    label: "Couple Packages",
    icon: HeartIcon,
    data: couplePackages,
    color: "rose",
  },
  {
    key: "more",
    label: "More Packages",
    icon: SparklesIcon,
    data: morePackages,
    color: "emerald",
  },
];

// ─── Package Card ─────────────────────────────────────────────────────────────

function PackageCard({ pkg, index, accentColor }: PackageCardProps) {
  const colorMap: Record<
    AccentColor,
    { badge: string; btn: string; price: string }
  > = {
    amber: {
      badge: "bg-amber-100 text-amber-800",
      btn: "border-amber-300 text-amber-800 hover:bg-amber-700",
      price: "text-amber-700",
    },
    rose: {
      badge: "bg-rose-100 text-rose-800",
      btn: "border-rose-300 text-rose-800 hover:bg-rose-700",
      price: "text-rose-700",
    },
    emerald: {
      badge: "bg-emerald-100 text-emerald-800",
      btn: "border-emerald-300 text-emerald-800 hover:bg-emerald-700",
      price: "text-emerald-700",
    },
  };
  const c = colorMap[accentColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-10 group-hover:from-black/30 transition-all" />
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        {/* Duration pill */}
        <div className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-xs font-semibold text-gray-800 shadow">
          <ClockIcon className="w-3 h-3" />
          {pkg.duration}
        </div>
        {/* Badge */}
        {pkg.badge && (
          <div
            className={`absolute top-3 left-3 z-20 px-2 py-0.5 rounded-full text-xs font-bold ${c.badge}`}
          >
            {pkg.badge}
          </div>
        )}
        {/* Tags at bottom of image */}
        <div className="absolute bottom-3 left-3 z-20 flex gap-1.5">
          {pkg.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-black/40 backdrop-blur-sm text-white text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3 gap-2">
          <h3 className="text-base font-bold text-gray-900 leading-snug">
            {pkg.title}
          </h3>
          <div className="text-right shrink-0">
            <span className="block text-[10px] text-gray-400 uppercase tracking-wider">
              From
            </span>
            <span className={`text-base font-extrabold ${c.price}`}>
              {pkg.price}
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-5 flex-grow leading-relaxed">
          {pkg.description}
        </p>
        <button
          className={`w-full py-2.5 px-4 border rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 group-hover:text-white ${c.btn}`}
        >
          View Itinerary
          <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function PackagesPage() {
  const [activeTab, setActiveTab] = useState<string>("day");

  const currentTab = tabs.find((t) => t.key === activeTab) as Tab;

  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      {/* ── Hero Section ── */}
      <div className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src="/assest/packages/1.jpg"
          alt="Sri Lanka"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          style={{ filter: "brightness(0.45) saturate(1.2)" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-stone-50" />

        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPinIcon className="w-5 h-5 text-amber-400" />
            <span className="text-amber-300 text-sm font-semibold uppercase tracking-[0.2em]">
              Sri Lanka
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 leading-tight drop-shadow-2xl">
            Travel Packages
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto leading-relaxed">
            Handcrafted itineraries for every kind of traveller — from
            sunrise-to-sunset day trips to grand island escapes.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mt-8">
            {[
              ["50+", "Packages"],
              ["4.9★", "Rating"],
              ["2000+", "Happy Guests"],
            ].map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold text-white">{val}</div>
                <div className="text-xs text-white/60 uppercase tracking-wider">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Tab Navigation ── */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 py-2 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              const activeColors: Record<AccentColor, string> = {
                amber: "bg-amber-600 text-white shadow-amber-200",
                rose: "bg-rose-600 text-white shadow-rose-200",
                emerald: "bg-emerald-600 text-white shadow-emerald-200",
              };
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? `${activeColors[tab.color]} shadow-lg`
                      : "text-gray-500 hover:text-gray-800 hover:bg-stone-100"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full ${isActive ? "bg-white/20" : "bg-stone-200 text-gray-600"}`}
                  >
                    {tab.data.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Package Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Section header */}
        <motion.div
          key={activeTab + "-header"}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              {(() => {
                const Icon = currentTab.icon;
                return <Icon className="w-5 h-5 text-gray-400" />;
              })()}
              <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                {currentTab.label}
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900">
              {activeTab === "day" && "Perfect Single-Day Adventures"}
              {activeTab === "couple" && "Romantic Escapes for Two"}
              {activeTab === "more" && "Extended Island Experiences"}
            </h2>
          </div>
          <p className="hidden md:block text-gray-400 text-sm text-right max-w-xs">
            {currentTab.data.length} curated packages available
          </p>
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {currentTab.data.map((pkg, index) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                index={index}
                accentColor={currentTab.color}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 relative rounded-3xl overflow-hidden"
        >
          <img
            src="/assest/packages/6.jpg"
            alt="Custom Tour"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.35) saturate(1.1)" }}
          />
          <div className="relative z-10 py-16 px-8 text-center">
            <StarIcon className="w-8 h-8 text-amber-400 mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Can't find your perfect trip?
            </h3>
            <p className="text-white/70 text-lg max-w-lg mx-auto mb-8">
              We craft fully bespoke itineraries tailored to your dates, budget,
              and travel dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-xl transition-colors shadow-lg">
                Build a Custom Tour
              </button>
              <button className="px-8 py-3.5 border border-white/40 hover:bg-white/10 text-white font-semibold rounded-xl transition-colors">
                Talk to an Expert
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
