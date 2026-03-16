"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPinIcon, StarIcon } from "lucide-react";

import { Accommodation } from "../dataConfig/types";
import { accommodations } from "../dataConfig/dtaConfig";

export function HotelsSection() {
  const [hotels, setHotels] = useState<Accommodation[]>([]);

  useEffect(() => {
    // Simulate fetching data from an API or data source
    setHotels(accommodations.slice(0, 8)); // Get the first 8 hotels for display
  }, []);
  return (
    <section id="hotels" className="py-20 lg:py-28 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-tropical-950 mb-4">
              Handpicked Luxury Hotels
            </h2>
            <div className="w-24 h-1 bg-sand-400 rounded-full mb-4 md:mb-0" />
          </div>
          <p className="text-lg text-gray-600 max-w-md">
            Rest in unparalleled comfort. We partner with Sri Lanka's finest
            properties to ensure your stay is as magical as the journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hotels.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex gap-0.5">
                  {[...Array(hotel.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-3.5 h-3.5 fill-sand-500 text-sand-500"
                    />
                  ))}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1 text-tropical-600 text-sm font-medium mb-2">
                  <MapPinIcon className="w-4 h-4" />
                  {hotel.location}
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  {hotel.name}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {hotel.tagline}
                </p>

                <button className="w-full py-2.5 border-2 border-gray-100 rounded-lg text-gray-700 font-semibold hover:border-tropical-600 hover:text-tropical-700 transition-colors">
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
