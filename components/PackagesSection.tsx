"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ClockIcon, ChevronRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { specialPackages } from "../dataConfig/dtaConfig";
import type { Package } from "../dataConfig/types";
import { useState, useEffect } from "react";

export function PackagesSection() {
  const route = useRouter();
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    setPackages(specialPackages.slice(0, 6));
  }, []);

  const clickbtn = (id: string) => () => {
    route.push(`/packages/${id}`);
  };

  return (
    <section id="packages" className="py-20 lg:py-28 bg-[#080e1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            Curated Travel Packages
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1761A0] to-[#0BAADC] mx-auto mb-6 rounded-full" />
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Handcrafted itineraries designed to showcase the very best of Sri
            Lanka, tailored for unforgettable memories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#0d1424] border border-white/5 rounded-2xl overflow-hidden hover:border-[#0BAADC]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(11,170,220,0.15)] flex flex-col"
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
                <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold text-white border border-white/10">
                  <ClockIcon className="w-4 h-4 text-[#0BAADC]" />
                  {pkg.duration}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif font-bold text-white leading-tight pr-4">
                    {pkg.title}
                  </h3>
                  <div className="text-right shrink-0">
                    <span className="block text-xs text-white/40 uppercase tracking-wider">
                      From
                    </span>
                    <span className="text-lg font-bold text-[#0BAADC]">
                      {pkg.price}
                    </span>
                  </div>
                </div>

                <p className="text-white/50 mb-6 flex-grow text-sm leading-relaxed">
                  {pkg.description}
                </p>

                <button
                  onClick={clickbtn(pkg.id)}
                  className="w-full py-3 px-4 border border-white/10 rounded-lg text-white/70 font-medium flex items-center justify-center gap-2 group-hover:bg-gradient-to-r group-hover:from-[#1761A0] group-hover:to-[#0BAADC] group-hover:text-white group-hover:border-transparent transition-all duration-300"
                >
                  View Itinerary
                  <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
