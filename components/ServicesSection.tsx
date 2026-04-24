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
import { useTranslations } from "next-intl";

export function ServicesSection() {
  const t = useTranslations("services");

  const services: {
    id: number;
    nameKey: string;
    descKey: string;
    icon: LucideIcon;
    image: string;
  }[] = [
    {
      id: 1,
      nameKey: "s1Name",
      descKey: "s1Desc",
      icon: BabyIcon,
      image:
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&q=80",
    },
    {
      id: 2,
      nameKey: "s2Name",
      descKey: "s2Desc",
      icon: ThermometerIcon,
      image:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&q=80",
    },
    {
      id: 3,
      nameKey: "s3Name",
      descKey: "s3Desc",
      icon: ShirtIcon,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    },
    {
      id: 4,
      nameKey: "s4Name",
      descKey: "s4Desc",
      icon: CoffeeIcon,
      image:
        "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80",
    },
    {
      id: 5,
      nameKey: "s5Name",
      descKey: "s5Desc",
      icon: LeafIcon,
      image:
        "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=800&q=80",
    },
    {
      id: 6,
      nameKey: "s6Name",
      descKey: "s6Desc",
      icon: PlaneIcon,
      image:
        "https://images.unsplash.com/photo-1577720643272-265f1f5c1bfb?w=800&q=80",
    },
  ];

  return (
    <section className="py-20 bg-[#060d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4"
          >
            {t("title")}
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1761A0] to-[#0BAADC] mx-auto mb-4 rounded-full" />
          <p className="text-white/40 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-[#0d1424] rounded-2xl overflow-hidden border border-white/5 hover:border-[#0BAADC]/30 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(11,170,220,0.15)]"
            >
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={t(service.nameKey as any)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              <div className="relative h-full p-6 flex flex-col items-center text-center min-h-[200px] justify-end">
                <div className="absolute top-4 left-4 w-12 h-12 bg-[#0BAADC]/20 backdrop-blur-sm text-[#0BAADC] rounded-full flex items-center justify-center border border-[#0BAADC]/30 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm drop-shadow-lg">
                  {t(service.nameKey as any)}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed drop-shadow-md">
                  {t(service.descKey as any)}
                </p>
                <div className="absolute inset-0 bg-[#0d1424]/95 backdrop-blur-sm flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <service.icon className="w-8 h-8 text-[#0BAADC] mx-auto mb-2" />
                    <p className="text-xs text-white/70 font-medium">
                      {t(service.descKey as any)}
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
