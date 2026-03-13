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

      {/* Fallback image (shown before video loads) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1586613835341-c2e0a4f10da4?w=1920")',
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-black/35" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
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
          className="text-lg md:text-2xl text-sand-50 mb-10 max-w-3xl mx-auto font-light drop-shadow-md"
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
            className="group flex items-center gap-2 bg-tropical-600 hover:bg-tropical-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(21,128,61,0.4)] hover:shadow-[0_0_30px_rgba(21,128,61,0.6)] hover:-translate-y-1"
          >
            <SearchIcon className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            Start Planning
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:-translate-y-1"
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
        className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/90 to-transparent hidden lg:block pt-20 pb-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 divide-x divide-white/20">
            <div className="text-center px-4">
              <AwardIcon className="w-8 h-8 text-sand-400 mx-auto mb-2" />
              <p className="text-3xl font-serif font-bold text-white mb-1">
                15+
              </p>
              <p className="text-sm text-sand-100 uppercase tracking-wider">
                Years Experience
              </p>
            </div>
            <div className="text-center px-4">
              <UsersIcon className="w-8 h-8 text-sand-400 mx-auto mb-2" />
              <p className="text-3xl font-serif font-bold text-white mb-1">
                5000+
              </p>
              <p className="text-sm text-sand-100 uppercase tracking-wider">
                Happy Travelers
              </p>
            </div>
            <div className="text-center px-4">
              <MapIcon className="w-8 h-8 text-sand-400 mx-auto mb-2" />
              <p className="text-3xl font-serif font-bold text-white mb-1">
                200+
              </p>
              <p className="text-sm text-sand-100 uppercase tracking-wider">
                Curated Tours
              </p>
            </div>
            <div className="text-center px-4">
              <StarIcon className="w-8 h-8 text-sand-400 mx-auto mb-2 fill-current" />
              <p className="text-3xl font-serif font-bold text-white mb-1">
                4.9
              </p>
              <p className="text-sm text-sand-100 uppercase tracking-wider">
                TripAdvisor Rating
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
