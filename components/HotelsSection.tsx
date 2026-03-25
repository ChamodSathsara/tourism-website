// ── HotelsSection.tsx (dark theme) ──────────────────────────────────────────
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MapPinIcon, StarIcon } from "lucide-react";
import { Accommodation } from "../dataConfig/types";
import { accommodations } from "../dataConfig/dtaConfig";
import { motion } from "framer-motion";

export function HotelsSection() {
  const [hotels, setHotels] = useState<Accommodation[]>([]);
  useEffect(() => {
    setHotels(accommodations.slice(0, 8));
  }, []);

  return (
    <section id="hotels" className="py-20 lg:py-28 bg-[#080e1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              Handpicked Luxury Hotels
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1761A0] to-[#0BAADC] rounded-full" />
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hotels.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0d1424] rounded-2xl overflow-hidden border border-white/5 hover:border-[#0BAADC]/20 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(11,170,220,0.1)] flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md flex gap-0.5 border border-white/10">
                  {[...Array(hotel.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-3.5 h-3.5 fill-[#0BAADC] text-[#0BAADC]"
                    />
                  ))}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1 text-[#0BAADC] text-sm font-medium mb-2">
                  <MapPinIcon className="w-4 h-4" />
                  {hotel.location}
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  {hotel.name}
                </h3>
                <p className="text-white/40 text-sm mb-6 flex-grow">
                  {hotel.tagline}
                </p>
                <button className="w-full py-2.5 border border-white/10 rounded-lg text-white/50 font-semibold hover:border-[#0BAADC]/50 hover:text-[#0BAADC] transition-colors">
                  View Hotel
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
