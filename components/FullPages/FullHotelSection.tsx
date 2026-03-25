"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPinIcon, ChevronRightIcon, BedDoubleIcon } from "lucide-react";
import img5 from "../../assest/Packages/5.jpg";
import type { Accommodation } from "@/dataConfig/types";
import { accommodations } from "@/dataConfig/dtaConfig";

function AccommodationCard({
  accommodation,
  index,
}: {
  accommodation: Accommodation;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group bg-[#0d1424] rounded-2xl overflow-hidden border border-white/5 hover:border-[#0BAADC]/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(11,170,220,0.12)] flex flex-col"
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
        <Image
          src={accommodation.image}
          alt={accommodation.name}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full flex items-center gap-1 text-xs font-semibold text-white shadow-sm">
          <MapPinIcon className="w-3.5 h-3.5 text-[#0BAADC]" />
          {accommodation.location}
        </div>
        <div className="absolute top-4 left-4 z-20">
          <span className="px-2.5 py-0.5 bg-black/50 backdrop-blur-sm border border-white/10 text-white text-xs font-medium rounded-full">
            Accommodation
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-white leading-tight mb-3">
          {accommodation.name}
        </h3>
        <p className="text-white/40 mb-6 flex-grow leading-relaxed text-sm">
          {accommodation.description}
        </p>
        <button className="w-full py-3 px-4 border border-white/10 rounded-lg text-white/60 font-medium flex items-center justify-center gap-2 group-hover:bg-gradient-to-r group-hover:from-[#1761A0] group-hover:to-[#0BAADC] group-hover:text-white group-hover:border-transparent transition-all duration-300">
          Read More
          <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

export function FullHotelSection() {
  return (
    <section className="bg-[#060d1a]">
      {/* Hero */}
      <div className="relative h-[58vh] min-h-[420px] overflow-hidden">
        <Image
          src={img5}
          alt="Sri Lanka Accommodations"
          fill
          priority
          className="object-cover scale-105"
          style={{ filter: "brightness(0.35) saturate(1.15)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060d1a]/80 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060d1a] via-transparent to-transparent" />

        <div className="absolute top-1/2 right-16 -translate-y-1/2 hidden lg:block pointer-events-none">
          <div className="w-52 h-52 rounded-full border border-white/8 flex items-center justify-center">
            <div className="w-36 h-36 rounded-full border border-white/8 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border border-[#0BAADC]/15 flex items-center justify-center">
                <BedDoubleIcon className="w-10 h-10 text-[#0BAADC]/30" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.05] mb-6 drop-shadow-2xl">
                Accommodations
              </h1>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl">
                From colonial-era grand hotels to beachfront boutique villas —
                every property is{" "}
                <span className="text-[#0BAADC] font-semibold">
                  handpicked for quality
                </span>
                ,{" "}
                <span className="text-[#0BAADC] font-semibold">
                  character, and location
                </span>
                .
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-px bg-[#0BAADC]" />
              <span className="text-xs uppercase tracking-widest text-[#0BAADC] font-bold">
                All Properties
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white">
              Your Perfect Stay Awaits
            </h2>
          </div>
          <p className="hidden md:block text-white/30 text-sm">
            {accommodations.length} handpicked properties
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <AccommodationCard
              key={accommodation.id}
              accommodation={accommodation}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
