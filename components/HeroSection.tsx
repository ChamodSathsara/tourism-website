"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SearchIcon,
  MessageCircleIcon,
  StarIcon,
  UsersIcon,
  MapIcon,
  AwardIcon,
} from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        src="/videos/1.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Fallback image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1586613835341-c2e0a4f10da4?w=1920")',
        }}
      />

      {/* Dark Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-black/55" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#060d1a] via-black/20 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#060d1a]/40 via-transparent to-[#060d1a]/40" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-white/80 text-sm font-medium mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#0BAADC] animate-pulse" />
          Sri Lanka's Premier Luxury Tour Operator
        </motion.div> */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg"
        >
          Discover the Magic <br className="hidden md:block" /> of Sri Lanka
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-white/70 mb-10 max-w-3xl mx-auto font-light drop-shadow-md"
        >
          Luxury journeys through ancient kingdoms, pristine beaches, and misty
          highlands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#packages"
            className="group flex items-center gap-2 bg-gradient-to-r from-[#1761A0] to-[#0BAADC] hover:from-[#0d4f8a] hover:to-[#099bbf] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(11,170,220,0.4)] hover:shadow-[0_0_50px_rgba(11,170,220,0.6)] hover:-translate-y-1"
          >
            <SearchIcon className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            Start Planning
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:-translate-y-1"
          >
            <MessageCircleIcon className="w-5 h-5" />
            WhatsApp Us
          </a>
        </motion.div>
      </div>

      {/* Floating Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 z-30 hidden lg:block"
      >
        <div className="bg-white/5 backdrop-blur-xl border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-4 gap-6 divide-x divide-white/10">
              {[
                { icon: AwardIcon, value: "15+", label: "Years Experience" },
                { icon: UsersIcon, value: "5000+", label: "Happy Travelers" },
                { icon: MapIcon, value: "200+", label: "Curated Tours" },
                { icon: StarIcon, value: "4.9", label: "TripAdvisor Rating" },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center px-4">
                  <Icon className="w-7 h-7 text-[#0BAADC] mx-auto mb-2" />
                  <p className="text-2xl font-serif font-bold text-white mb-0.5">
                    {value}
                  </p>
                  <p className="text-xs text-white/50 uppercase tracking-wider">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
