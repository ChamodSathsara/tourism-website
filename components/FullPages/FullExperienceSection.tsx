"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { SparklesIcon, ChevronRightIcon } from "lucide-react";
import img1 from "../../assest/Packages/1.jpg";
import img2 from "../../assest/Packages/2.jpg";
import img3 from "../../assest/Packages/3.jpg";
import img4 from "../../assest/Packages/4.jpg";
import img5 from "../../assest/Packages/5.jpg";
import img6 from "../../assest/Packages/6.jpg";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Experience {
  id: string;
  name: string;
  description: string;
  tags: string[];
  image: StaticImageData;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const experiences: Experience[] = [
  {
    id: "exp-1",
    name: "Yoga & Meditation",
    description:
      "Sri Lanka offers authentic yoga and meditation experiences influenced by ancient Vedic traditions and Buddhist mindfulness practices. Sessions take place in serene settings — hill country retreats, beachside pavilions, or jungle ashrams — combining asanas, pranayama, guided meditation, and mindfulness walks amid tea estates or ocean views.",
    tags: ["Wellness", "Spiritual"],
    image: img3,
  },
  {
    id: "exp-2",
    name: "Weddings in the Sun",
    description:
      "Sri Lanka ranks among the world's most exotic wedding destinations — ceremonies on golden beaches under palm trees, in lush jungle clearings, colonial villas, or atop misty hills. Options include traditional Kandyan rituals with drummers and dancers, barefoot beach vows, or intimate Ayurveda-inspired wellness weddings.",
    tags: ["Romantic", "Luxury"],
    image: img5,
  },
  {
    id: "exp-3",
    name: "Ayurveda & Spa Therapy",
    description:
      "With credentials dating back thousands of years, Sri Lankan Ayurveda blends ancient Indian principles with indigenous herbal knowledge. Treatments include Shirodhara, herbal steam baths, body wraps, massages, and personalized dosha-balancing programs — renowned for detoxification, rejuvenation, and stress reduction.",
    tags: ["Wellness", "Healing"],
    image: img2,
  },
  {
    id: "exp-4",
    name: "Shopping Sprees",
    description:
      "Sri Lanka delights shoppers with precious gemstones (world-famous Ceylon sapphires and rubies), hand-blocked batiks, vibrant textiles, intricate Buddha statues, aromatic spices, pure Ceylon tea, and eco-friendly handicrafts. Markets in Colombo, Galle Fort boutiques, and roadside stalls offer bargains and authentic souvenirs.",
    tags: ["Shopping", "Markets"],
    image: img4,
  },
  {
    id: "exp-5",
    name: "Delish Culinary",
    description:
      "Sri Lankan cuisine bursts with exotic, aromatic flavors influenced by Southeast Asian, Indian, and Dutch elements. Rice and curry, hoppers, kottu roti, fresh seafood, lamprais, and street food await. Cooking classes, spice garden visits, and farm-to-table experiences let you taste the island's bold spiced, coconut-rich authenticity.",
    tags: ["Culinary", "Local Cuisine"],
    image: img6,
  },
  {
    id: "exp-6",
    name: "Traditional Arts & Crafts",
    description:
      "Rooted in one of the world's oldest civilizations, Sri Lankan arts and crafts showcase intricate skills passed through generations — mask carving, Kandyan dance, batik printing, Dumbara mat weaving, silver filigree jewelry, and temple murals. Visit artisan villages, watch live demonstrations, or join hands-on workshops.",
    tags: ["Cultural", "Workshops"],
    image: img1,
  },
  {
    id: "exp-7",
    name: "Sporting Breaks",
    description:
      "Sri Lanka's diverse terrain sets the stage for thrilling sports year-round — surfing the south and east coasts, white-water rafting at Kitulgala, hiking Ella Rock or Adam's Peak, mountain biking, scuba diving, golf on colonial courses, and adventure sports like zip-lining or canyoning. Suits all levels.",
    tags: ["Adventure", "Sports"],
    image: img4,
  },
  {
    id: "exp-8",
    name: "Colourful Culture",
    description:
      "Steeped in Buddhism since the 3rd century BC, Sri Lankan culture blends ancient rituals, festivals, and daily life. Experience temple poojas, Kandyan dance and drumming, elephant processions (Perahera festival), vesak lanterns, and multicultural vibrancy — immersive insights into harmony, devotion, and living heritage.",
    tags: ["Cultural", "Festivals"],
    image: img1,
  },
  {
    id: "exp-9",
    name: "Exhilarating Adventures",
    description:
      "Dense jungles, towering mountains, giant rock fortresses, balmy oceans, and rolling hills create a paradise for adrenaline seekers. Wildlife safaris (leopards in Yala, elephants in Udawalawe), hot air ballooning over ancient cities, whale watching, kayaking lagoons, and multi-day treks combine thrills with breathtaking natural beauty.",
    tags: ["Adventure", "Nature"],
    image: img5,
  },
];

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
