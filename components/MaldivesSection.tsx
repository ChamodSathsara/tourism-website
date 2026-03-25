"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRightIcon, CheckCircle2Icon } from "lucide-react";
import img1 from "../assest/maldives/1.jpg";

export function MaldivesSection() {
  return (
    <section
      id="maldives"
      className="py-20 lg:py-28 bg-[#080e1c] relative overflow-hidden"
    >
      {/* Subtle glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0BAADC]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1761A0]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[600px] border border-white/5">
              <Image
                src={img1}
                alt="Maldives Overwater Villa"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060d1a]/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-white">
                  <p className="font-serif text-2xl font-bold mb-2">
                    Twin Center Holidays
                  </p>
                  <p className="text-white/60 text-sm">
                    The perfect combination of Sri Lankan culture and Maldivian
                    relaxation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-[#0BAADC] font-semibold tracking-wider uppercase text-sm mb-4 block">
              Premium Extension
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Maldives Luxury Escapes
            </h2>
            <p className="text-lg text-white/50 mb-8 leading-relaxed">
              Just a 90-minute flight from Colombo lies paradise. Enhance your
              Sri Lankan adventure with a luxurious stay in the Maldives.
              Crystal clear waters, overwater villas, and world-class snorkeling
              await.
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  title: "3-Night Quick Escape",
                  desc: "Perfect add-on after a busy cultural tour. Includes speedboat transfers and half-board dining.",
                },
                {
                  title: "5-Night Romantic Retreat",
                  desc: "Overwater villa experience with seaplane transfers, spa treatments, and sunset cruises.",
                },
                {
                  title: "7-Night Ultimate Luxury",
                  desc: "All-inclusive premium resort stay with private butler, underwater dining, and diving excursions.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="mt-1 bg-[#0BAADC]/10 p-2 rounded-full text-[#0BAADC] border border-[#0BAADC]/20 shrink-0">
                    <CheckCircle2Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">
                      {item.title}
                    </h4>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-[#1761A0] to-[#0BAADC] hover:from-[#0d4f8a] hover:to-[#099bbf] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(11,170,220,0.3)] hover:shadow-[0_0_50px_rgba(11,170,220,0.5)] flex items-center gap-2 group">
              Explore Maldives Packages
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
