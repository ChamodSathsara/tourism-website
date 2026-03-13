"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BabyIcon,
  ThermometerIcon,
  ShirtIcon,
  CoffeeIcon,
  LeafIcon,
  PlaneIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const services: {
  id: number;
  name: string;
  desc: string;
  icon: LucideIcon;
  image: string;
}[] = [
  {
    id: 1,
    name: "Baby Car Seats",
    desc: "Safe and comfortable travel for your little ones.",
    icon: BabyIcon,
    image:
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&q=80",
  },
  {
    id: 2,
    name: "Cool Boxes",
    desc: "Keep your beverages chilled during long drives.",
    icon: ThermometerIcon,
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&q=80",
  },
  {
    id: 3,
    name: "Branded T-Shirts",
    desc: "Complimentary Magical Paradise apparel.",
    icon: ShirtIcon,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
  },
  {
    id: 4,
    name: "Ceylon Tea",
    desc: "Premium tea purchases directly from estates.",
    icon: CoffeeIcon,
    image:
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80",
  },
  {
    id: 5,
    name: "Spices & Cinnamon",
    desc: "Authentic Sri Lankan spices to take home.",
    icon: LeafIcon,
    image:
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=800&q=80",
  },
  {
    id: 6,
    name: "Airport Transfers",
    desc: "Seamless VIP meet and greet at the airport.",
    icon: PlaneIcon,
    image:
      "https://images.unsplash.com/photo-1577720643272-265f1f5c1bfb?w=800&q=80",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-tropical-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-serif font-bold text-tropical-950 mb-4"
          >
            Extra Services & Amenities
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            It&apos;s the little details that make a journey truly luxurious. We
            provide these complimentary and add-on services for your comfort.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-tropical-100"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full p-6 flex flex-col items-center text-center min-h-[200px] justify-end">
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm text-tropical-700 rounded-full flex items-center justify-center shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <service.icon className="w-6 h-6" />
                </div>

                <h3 className="font-bold text-white mb-2 text-sm drop-shadow-lg">
                  {service.name}
                </h3>
                <p className="text-xs text-white/90 leading-relaxed drop-shadow-md">
                  {service.desc}
                </p>

                {/* Hover Overlay with additional info */}
                <div className="absolute inset-0 bg-tropical-800/90 backdrop-blur-sm flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <service.icon className="w-8 h-8 text-sand-300 mx-auto mb-2" />
                    <p className="text-xs text-white/90 font-medium">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
