"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { SparklesIcon, ChevronRightIcon } from "lucide-react";

import img6 from "../../assest/Packages/6.jpg";
import { Experience } from "@/dataConfig/types";
import { experiencesList as experiences } from "@/dataConfig/dtaConfig";



// ─── Experience Card ──────────────────────────────────────────────────────────

function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
        <Image
          src={experience.image}
          alt={experience.name}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Tags */}
        <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-1.5">
          {experience.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 bg-black/40 backdrop-blur-sm text-white text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Experience badge */}
        <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-xs font-semibold text-gray-800 shadow-sm">
          <SparklesIcon className="w-3.5 h-3.5 text-amber-500" />
          Experience
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-gray-900 leading-tight mb-3">
          {experience.name}
        </h3>
        <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm">
          {experience.description}
        </p>
        <button className="w-full py-3 px-4 border border-amber-200 rounded-lg text-amber-700 font-medium flex items-center justify-center gap-2 group-hover:bg-amber-700 group-hover:text-white group-hover:border-amber-700 transition-colors duration-300">
          Discover More
          <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

// ─── Full Experience Section ──────────────────────────────────────────────────

export function FullExperienceSection() {
  return (
    <section className="bg-stone-50">
      {/* ── Hero Banner ── */}
      <div className="relative h-[78vh] min-h-[420px] overflow-hidden">
        <Image
          src={img6}
          alt="Sri Lanka Experiences"
          fill
          priority
          className="object-cover scale-105"
          style={{ filter: "brightness(0.45) saturate(1.15)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-transparent" />

        {/* Decorative rings */}
        <div className="absolute top-1/2 right-16 -translate-y-1/2 hidden lg:block pointer-events-none">
          <div className="w-52 h-52 rounded-full border border-white/10 flex items-center justify-center">
            <div className="w-36 h-36 rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border border-white/15 flex items-center justify-center">
                <SparklesIcon className="w-10 h-10 text-white/25" />
              </div>
            </div>
          </div>
        </div>

        {/* Hero text */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              {/* <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-amber-400" />
                <span className="text-amber-400 text-sm font-semibold uppercase tracking-[0.25em]">
                  Discover the Island
                </span>
              </div> */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.05] mb-6 drop-shadow-2xl">
                Experiences
              </h1>
              <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-xl">
                Sri Lanka is one of the most exotic getaways in the world.
                Surrounded by the azure Indian Ocean, this island paradise has
                contrasting landscapes, stretches of golden sandy beaches and a
                wealth of wildlife and culture to discover. It is home to{" "}
                <span className="text-amber-300 font-semibold">
                  8 UNESCO World Heritage Sites
                </span>
                ,{" "}
                <span className="text-amber-300 font-semibold">
                  15 national parks
                </span>{" "}
                showcasing spectacular wildlife and nearly{" "}
                <span className="text-amber-300 font-semibold">
                  500,000 acres
                </span>{" "}
                of lush tea estates.
              </p>

              <div className="flex gap-10 mt-8">
                {(
                  [
                    ["9+", "Experiences"],
                    ["4.9★", "Rating"],
                    ["2,000+", "Happy Guests"],
                  ] as [string, string][]
                ).map(([val, label]) => (
                  <div key={label}>
                    <div className="text-2xl font-bold text-white">{val}</div>
                    <div className="text-xs text-white/50 uppercase tracking-wider mt-0.5">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Card Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-px bg-amber-500" />
              <span className="text-xs uppercase tracking-widest text-amber-600 font-bold">
                All Experiences
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900">
              What Will You Experience?
            </h2>
          </div>
          <p className="hidden md:block text-gray-400 text-sm">
            {experiences.length} unique experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
