"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClockIcon,
  ChevronRightIcon,
  SunIcon,
  HeartIcon,
  MapPinIcon,
  StarIcon,
  SparklesIcon,
  LayoutGridIcon,
  WavesIcon,
  type LucideIcon,
} from "lucide-react";
import img1 from "../../assest/Packages/1.jpg";
import img2 from "../../assest/Packages/2.jpg";
import img3 from "../../assest/Packages/3.jpg";
import img4 from "../../assest/Packages/4.jpg";
import img5 from "../../assest/Packages/5.jpg";
import img6 from "../../assest/Packages/6.jpg";
import { useRouter, usePathname } from "next/navigation";

// ─── Types ────────────────────────────────────────────────────────────────────

type AccentColor = "amber" | "rose" | "emerald" | "sky" | "violet";

interface Package {
  id: string;
  title: string;
  duration: string;
  price: string;
  badge: string | null;
  tags: string[];
  description: string;
  image: StaticImageData;
}

interface Tab {
  key: string;
  label: string;
  icon: LucideIcon;
  data: Package[];
  color: AccentColor;
  heading: string;
}

interface PackageCardProps {
  pkg: Package;
  index: number;
  accentColor: AccentColor;
}

// ─── Package Data ─────────────────────────────────────────────────────────────

const dayPackages: Package[] = [
  {
    id: "d1",
    title: "Sigiriya & Dambulla Day Tour",
    duration: "1 Day",
    price: "$89",
    badge: "Most Popular",
    tags: ["Culture", "History"],
    description:
      "Climb the legendary Lion Rock fortress and explore the stunning Dambulla Cave Temple in a single epic day.",
    image: img1,
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
    image: img3,
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
    image: img2,
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
    image: img4,
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
    image: img5,
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
    image: img6,
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
    image: img1,
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
    image: img3,
  },
];

const couplePackages: Package[] = [
  {
    id: "c1",
    title: "Romantic Honeymoon Escape",
    duration: "8 Days",
    price: "$1,299",
    badge: "Best Value",
    tags: ["Luxury", "Honeymoon"],
    description:
      "Luxury boutique hotels, private candlelit dinners, and unforgettable couples experiences across the island.",
    image: img5,
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
    image: img2,
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
    image: img3,
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
    image: img1,
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
    image: img6,
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
    image: img4,
  },
];

const morePackages: Package[] = [
  {
    id: "m1",
    title: "Cultural Triangle Explorer",
    duration: "7 Days",
    price: "$899",
    badge: "Classic",
    tags: ["Culture", "Heritage"],
    description:
      "Discover ancient kingdoms, majestic stupas, and the iconic Sigiriya Rock Fortress on this heritage circuit.",
    image: img1,
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
    image: img2,
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
    image: img4,
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
    image: img6,
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
    image: img5,
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
    image: img3,
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
    image: img1,
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
    image: img2,
  },
];

const maldivesPackages: Package[] = [
  {
    id: "mv1",
    title: "Maldives Overwater Bliss",
    duration: "5 Days",
    price: "$2,199",
    badge: "Best Seller",
    tags: ["Luxury", "Overwater"],
    description:
      "Wake up above the turquoise lagoon in a stunning overwater bungalow with private deck and direct ocean access.",
    image: img2,
  },
  {
    id: "mv2",
    title: "Maldives Diving & Snorkel",
    duration: "7 Days",
    price: "$1,899",
    badge: null,
    tags: ["Diving", "Marine Life"],
    description:
      "Explore vibrant coral reefs, swim with manta rays and whale sharks across some of the world's clearest waters.",
    image: img4,
  },
  {
    id: "mv3",
    title: "Romantic Maldives Escape",
    duration: "6 Days",
    price: "$2,599",
    badge: "Honeymoon",
    tags: ["Romance", "Luxury"],
    description:
      "Private candlelit dinners on the beach, couple spa treatments, and sunset cruises on a traditional dhoni.",
    image: img5,
  },
  {
    id: "mv4",
    title: "Maldives Family Resort",
    duration: "7 Days",
    price: "$2,999",
    badge: "Family",
    tags: ["Family", "Resort"],
    description:
      "All-inclusive family resort with kids clubs, dolphin watching, glass-bottom kayaking, and beachside fun.",
    image: img6,
  },
  {
    id: "mv5",
    title: "Sri Lanka & Maldives Combo",
    duration: "12 Days",
    price: "$3,299",
    badge: "Popular",
    tags: ["Combo", "Epic"],
    description:
      "The ultimate dual-destination journey: explore Sri Lanka's cultural gems, then unwind in Maldivian paradise.",
    image: img1,
  },
  {
    id: "mv6",
    title: "Maldives Budget Getaway",
    duration: "4 Days",
    price: "$899",
    badge: "Budget",
    tags: ["Budget", "Beach"],
    description:
      "Experience the magic of the Maldives without breaking the bank — local guesthouses, snorkeling, and sandbanks.",
    image: img3,
  },
  {
    id: "mv7",
    title: "Maldives Liveaboard Cruise",
    duration: "8 Days",
    price: "$2,499",
    badge: "Adventure",
    tags: ["Cruise", "Diving"],
    description:
      "Sail through remote atolls, dive unexplored reefs, and sleep under a sky full of stars on a luxury liveaboard.",
    image: img2,
  },
  {
    id: "mv8",
    title: "Private Island Retreat",
    duration: "5 Days",
    price: "$4,499",
    badge: "Ultra Luxury",
    tags: ["Private", "Exclusive"],
    description:
      "Exclusive buyout of a private island resort — your own piece of paradise with a personal butler and chef.",
    image: img5,
  },
];

const specialPackages: Package[] = [
  {
    id: "d1",
    title: "Magical Romance",
    duration: "14 Day",
    price: "$89",
    badge: "Most Popular",
    tags: ["Romance", "Luxury"],
    description:
      "Magical Paradise takes pride in carefully selecting the most romantic and charming locations possible for the Magical Romance tour itinerary in Sri Lanka. A day by day itinerary highlight is given below.",
    image: img1,
  },
  {
    id: "d2",
    title: "Wild and Wooly",
    duration: "13 Day",
    price: "$85",
    badge: "Adventure",
    tags: ["Wildlife", "Adventure"],
    description:
      "Careful consideration has been given to including the best possible locations for a 13 day tour that will help heighten the ‘Wild and Wooly’ spark for adventurous travelers and provide a wonderful learning experience about what Sri Lanka offers the intrepid traveller.",
    image: img2,
  },
  {
    id: "d3",
    title: "A Walk of Life",
    duration: "14 Day",
    price: "$82",
    badge: "Cultural",
    tags: ["Culture", "Heritage"],
    description:
      "A Walk of Life tour package offers a unique opportunity to explore the cultural richness, traditions, and historical beauty of Sri Lanka with a carefully designed day by day itinerary.",
    image: img3,
  },
  {
    id: "d4",
    title: "Shades of Blue",
    duration: "14 Day",
    price: "$88",
    badge: "Beach Escape",
    tags: ["Beach", "Relax"],
    description:
      "The Shades of Blue tour package is carefully designed to cover many of the must see coastal and natural wonders in Sri Lanka while enjoying the island’s beautiful beaches and ocean views.",
    image: img4,
  },
  {
    id: "d5",
    title: "Magical Big Five",
    duration: "7 Day",
    price: "$79",
    badge: "Wildlife",
    tags: ["Safari", "Nature"],
    description:
      "The Magical Big Five tour package centers around wildlife and the awe inspiring mammals of the open seas encircling Sri Lanka. It highlights observing the Asian Elephant, Leopard, Sloth Bear, Blue Whale, and Sperm Whale in their natural habitat.",
    image: img5,
  },
  {
    id: "d6",
    title: "Magical Highlights",
    duration: "8 Day",
    price: "$75",
    badge: "Best Value",
    tags: ["History", "Nature"],
    description:
      "The Magical Highlights tour package is carefully designed to cover many of the must see historical and natural wonders in Sri Lanka within a short time frame.",
    image: img6,
  },
  {
    id: "d7",
    title: "Magical Sri Lanka",
    duration: "14 Day",
    price: "$90",
    badge: "Top Tour",
    tags: ["Culture", "Nature"],
    description:
      "The Magical Sri Lanka tour package is carefully designed to cover many of the must see historical and natural wonders in Sri Lanka with a detailed day by day itinerary.",
    image: img1,
  },
];

const allPackages: Package[] = [
  ...specialPackages,
  ...dayPackages,
  ...couplePackages,
  ...morePackages,
  ...maldivesPackages,
].map((pkg, i) => ({ ...pkg, id: `all-${i}` }));

// ─── Tab Config ───────────────────────────────────────────────────────────────

const tabs: Tab[] = [
  {
    key: "all",
    label: "All Packages",
    icon: LayoutGridIcon,
    data: allPackages,
    color: "violet",
    heading: "Every Experience We Offer",
  },
  {
    key: "special",
    label: "Special Offers",
    icon: StarIcon,
    data: specialPackages,
    color: "violet",
    heading: "Every Experience We Offer",
  },
  {
    key: "day",
    label: "Day Packages",
    icon: SunIcon,
    data: dayPackages,
    color: "amber",
    heading: "Perfect Single-Day Adventures",
  },
  {
    key: "couple",
    label: "Couple Packages",
    icon: HeartIcon,
    data: couplePackages,
    color: "rose",
    heading: "Romantic Escapes for Two",
  },
  {
    key: "more",
    label: "More Packages",
    icon: SparklesIcon,
    data: morePackages,
    color: "emerald",
    heading: "Extended Island Experiences",
  },
  {
    key: "maldives",
    label: "Maldives",
    icon: WavesIcon,
    data: maldivesPackages,
    color: "sky",
    heading: "Maldives Paradise Escapes",
  },
];

// ─── Color Config ─────────────────────────────────────────────────────────────

const colorConfig: Record<
  AccentColor,
  {
    tabActive: string;
    tabShadow: string;
    price: string;
    btn: string;
    badge: string;
  }
> = {
  amber: {
    tabActive: "bg-amber-600 text-white",
    tabShadow: "shadow-amber-200",
    price: "text-amber-700",
    btn: "border-amber-200 text-amber-700 hover:bg-amber-700 hover:text-white hover:border-amber-700",
    badge: "bg-amber-100 text-amber-800",
  },
  rose: {
    tabActive: "bg-rose-600 text-white",
    tabShadow: "shadow-rose-200",
    price: "text-rose-700",
    btn: "border-rose-200 text-rose-700 hover:bg-rose-700 hover:text-white hover:border-rose-700",
    badge: "bg-rose-100 text-rose-800",
  },
  emerald: {
    tabActive: "bg-emerald-600 text-white",
    tabShadow: "shadow-emerald-200",
    price: "text-emerald-700",
    btn: "border-emerald-200 text-emerald-700 hover:bg-emerald-700 hover:text-white hover:border-emerald-700",
    badge: "bg-emerald-100 text-emerald-800",
  },
  sky: {
    tabActive: "bg-sky-600 text-white",
    tabShadow: "shadow-sky-200",
    price: "text-sky-700",
    btn: "border-sky-200 text-sky-700 hover:bg-sky-700 hover:text-white hover:border-sky-700",
    badge: "bg-sky-100 text-sky-800",
  },
  violet: {
    tabActive: "bg-violet-600 text-white",
    tabShadow: "shadow-violet-200",
    price: "text-violet-700",
    btn: "border-violet-200 text-violet-700 hover:bg-violet-700 hover:text-white hover:border-violet-700",
    badge: "bg-violet-100 text-violet-800",
  },
};

// ─── Package Card ─────────────────────────────────────────────────────────────

function PackageCard({ pkg, index, accentColor }: PackageCardProps) {
  const c = colorConfig[accentColor];
  const router = useRouter();

  const clickButton = (id: string) => () => {
    alert(`Clicked on package with id: ${id}`);
    router.push(`/packages/${id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Duration pill */}
        <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold text-gray-800 shadow-sm">
          <ClockIcon className="w-4 h-4" />
          {pkg.duration}
        </div>
        {/* Badge */}
        {pkg.badge && (
          <div
            className={`absolute top-4 left-4 z-20 px-2.5 py-0.5 rounded-full text-xs font-bold ${c.badge}`}
          >
            {pkg.badge}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-serif font-bold text-gray-900 leading-tight pr-4">
            {pkg.title}
          </h3>
          <div className="text-right shrink-0">
            <span className="block text-xs text-gray-500 uppercase tracking-wider">
              From
            </span>
            <span className={`text-lg font-bold ${c.price}`}>{pkg.price}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
          {pkg.description}
        </p>

        <button
          className={`w-full py-3 px-4 border rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-300 ${c.btn}`}
          onClick={clickButton(pkg.id)}
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
  const [activeTab, setActiveTab] = useState<string>("all");

  const currentTab = tabs.find((t) => t.key === activeTab) as Tab;

  return (
    <div className="min-h-screen bg-stone-50">
      {/* ── Hero ── */}
      <div className="relative h-[62vh] min-h-[440px] flex items-center justify-center overflow-hidden">
        <Image
          src={img1}
          alt="Sri Lanka Travel"
          fill
          priority
          className="object-cover scale-105"
          style={{ filter: "brightness(0.42) saturate(1.2)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-stone-50" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPinIcon className="w-5 h-5 text-amber-400" />
            <span className="text-amber-300 text-sm font-semibold uppercase tracking-[0.2em]">
              Sri Lanka & Maldives
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 leading-tight drop-shadow-2xl">
            Travel Packages
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Handcrafted itineraries for every kind of traveller — from
            sunrise-to-sunset day trips to grand island escapes.
          </p>

          <div className="flex items-center justify-center gap-10 mt-10">
            {(
              [
                ["50+", "Packages"],
                ["4.9★", "Rating"],
                ["2,000+", "Happy Guests"],
              ] as [string, string][]
            ).map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold text-white">{val}</div>
                <div className="text-xs text-white/60 uppercase tracking-wider mt-0.5">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Sticky Tab Nav ── */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 py-2 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              const cc = colorConfig[tab.color];
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? `${cc.tabActive} shadow-lg ${cc.tabShadow}`
                      : "text-gray-500 hover:text-gray-800 hover:bg-stone-100"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? "bg-white/25 text-white"
                        : "bg-stone-200 text-gray-600"
                    }`}
                  >
                    {tab.data.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Grid Section ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Section heading */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + "-heading"}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.35 }}
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
                {currentTab.heading}
              </h2>
            </div>
            <p className="hidden md:block text-gray-400 text-sm text-right">
              {currentTab.data.length} curated packages
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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

        {/* ── CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 relative rounded-3xl overflow-hidden min-h-[280px]"
        >
          <Image
            src={img6}
            alt="Custom Tour"
            fill
            className="object-cover"
            style={{ filter: "brightness(0.32) saturate(1.1)" }}
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
