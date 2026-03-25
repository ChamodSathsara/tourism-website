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
import img6 from "../../assest/Packages/6.jpg";
import { useRouter } from "next/navigation";
import {
  dayPackages,
  couplePackages,
  morePackages,
  maldivesPackages,
  specialPackages,
} from "../../dataConfig/dtaConfig";

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

const allPackages: Package[] = [
  ...specialPackages,
  ...dayPackages,
  ...couplePackages,
  ...morePackages,
  ...maldivesPackages,
].map((pkg, i) => ({ ...pkg, id: `all-${i}` }));

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

// Dark-themed color config
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
    tabActive: "bg-amber-500/20 text-amber-300 border border-amber-500/30",
    tabShadow: "shadow-amber-500/20",
    price: "text-amber-400",
    btn: "border-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500",
    badge: "bg-amber-500/20 text-amber-300 border border-amber-500/30",
  },
  rose: {
    tabActive: "bg-rose-500/20 text-rose-300 border border-rose-500/30",
    tabShadow: "shadow-rose-500/20",
    price: "text-rose-400",
    btn: "border-rose-500/20 text-rose-400 group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500",
    badge: "bg-rose-500/20 text-rose-300 border border-rose-500/30",
  },
  emerald: {
    tabActive:
      "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
    tabShadow: "shadow-emerald-500/20",
    price: "text-emerald-400",
    btn: "border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500",
    badge: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
  },
  sky: {
    tabActive: "bg-sky-500/20 text-sky-300 border border-sky-500/30",
    tabShadow: "shadow-sky-500/20",
    price: "text-sky-400",
    btn: "border-sky-500/20 text-sky-400 group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500",
    badge: "bg-sky-500/20 text-sky-300 border border-sky-500/30",
  },
  violet: {
    tabActive: "bg-[#1761A0]/30 text-[#0BAADC] border border-[#0BAADC]/30",
    tabShadow: "shadow-[#0BAADC]/20",
    price: "text-[#0BAADC]",
    btn: "border-[#0BAADC]/20 text-[#0BAADC] group-hover:bg-gradient-to-r group-hover:from-[#1761A0] group-hover:to-[#0BAADC] group-hover:text-white group-hover:border-transparent",
    badge: "bg-[#0BAADC]/20 text-[#0BAADC] border border-[#0BAADC]/30",
  },
};

function PackageCard({
  pkg,
  index,
  accentColor,
}: {
  pkg: Package;
  index: number;
  accentColor: AccentColor;
}) {
  const c = colorConfig[accentColor];
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group bg-[#0d1424] rounded-2xl overflow-hidden border border-white/5 hover:border-[#0BAADC]/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(11,170,220,0.12)] flex flex-col"
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold text-white shadow-sm">
          <ClockIcon className="w-4 h-4 text-[#0BAADC]" />
          {pkg.duration}
        </div>
        {pkg.badge && (
          <div
            className={`absolute top-4 left-4 z-20 px-2.5 py-0.5 rounded-full text-xs font-bold ${c.badge}`}
          >
            {pkg.badge}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-serif font-bold text-white leading-tight pr-4">
            {pkg.title}
          </h3>
          <div className="text-right shrink-0">
            <span className="block text-xs text-white/30 uppercase tracking-wider">
              From
            </span>
            <span className={`text-lg font-bold ${c.price}`}>{pkg.price}</span>
          </div>
        </div>
        <p className="text-white/40 mb-6 flex-grow leading-relaxed text-sm">
          {pkg.description}
        </p>
        <button
          onClick={() => router.push(`/packages/${pkg.id}`)}
          className={`w-full py-3 px-4 border rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 ${c.btn}`}
        >
          View Itinerary
          <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

export default function PackagesPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const currentTab = tabs.find((t) => t.key === activeTab) as Tab;

  return (
    <div className="min-h-screen bg-[#060d1a]">
      {/* Hero */}
      <div className="relative h-[62vh] min-h-[440px] flex items-center justify-center overflow-hidden">
        <Image
          src={img1}
          alt="Sri Lanka Travel"
          fill
          priority
          className="object-cover scale-105"
          style={{ filter: "brightness(0.3) saturate(1.2)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-[#060d1a]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPinIcon className="w-5 h-5 text-[#0BAADC]" />
            <span className="text-[#0BAADC] text-sm font-semibold uppercase tracking-[0.2em]">
              Sri Lanka & Maldives
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 leading-tight drop-shadow-2xl">
            Travel Packages
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
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
                <div className="text-xs text-white/40 uppercase tracking-wider mt-0.5">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Sticky Tab Nav */}
      <div className="sticky top-0 z-30 bg-[#080e1c]/95 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
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
                      : "text-white/40 hover:text-white/80 hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full ${isActive ? "bg-white/15 text-white" : "bg-white/8 text-white/40"}`}
                  >
                    {tab.data.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
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
                  return <Icon className="w-5 h-5 text-white/30" />;
                })()}
                <span className="text-xs uppercase tracking-widest text-white/30 font-semibold">
                  {currentTab.label}
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white">
                {currentTab.heading}
              </h2>
            </div>
            <p className="hidden md:block text-white/30 text-sm text-right">
              {currentTab.data.length} curated packages
            </p>
          </motion.div>
        </AnimatePresence>

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

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 relative rounded-3xl overflow-hidden min-h-[280px] border border-white/5"
        >
          <Image
            src={img6}
            alt="Custom Tour"
            fill
            className="object-cover"
            style={{ filter: "brightness(0.25) saturate(1.1)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060d1a]/60 via-transparent to-transparent" />
          <div className="relative z-10 py-16 px-8 text-center">
            <StarIcon className="w-8 h-8 text-[#0BAADC] mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Can't find your perfect trip?
            </h3>
            <p className="text-white/50 text-lg max-w-lg mx-auto mb-8">
              We craft fully bespoke itineraries tailored to your dates, budget,
              and travel dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-8 py-3.5 bg-gradient-to-r from-[#1761A0] to-[#0BAADC] text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(11,170,220,0.3)]">
                Build a Custom Tour
              </button>
              <button className="px-8 py-3.5 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-xl transition-colors">
                Talk to an Expert
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
