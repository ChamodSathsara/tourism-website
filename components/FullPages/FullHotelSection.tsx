"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { MapPinIcon, ChevronRightIcon, BedDoubleIcon } from "lucide-react";
import img1 from "../../assest/Packages/1.jpg";
import img2 from "../../assest/Packages/2.jpg";
import img3 from "../../assest/Packages/3.jpg";
import img4 from "../../assest/Packages/4.jpg";
import img5 from "../../assest/Packages/5.jpg";
import img6 from "../../assest/Packages/6.jpg";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Accommodation {
  id: string;
  name: string;
  location: string;
  description: string;
  image: StaticImageData;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const accommodations: Accommodation[] = [
  {
    id: "acc-1",
    name: "Lake Lodge – Colombo",
    location: "Colombo",
    description:
      "Nyne Hotels Lake Lodge is a beautiful boutique hotel tucked away in the city. Located in Colombo, it offers a peaceful retreat with a quiet location, modern and clean rooms, and a nice restaurant.",
    image: img1,
  },
  {
    id: "acc-2",
    name: "Langdale by Amaya",
    location: "Nuwara Eliya",
    description:
      "A luxury boutique hotel nestled amidst breathtaking landscapes and lush tea plantations in the Nuwara Eliya Hills. It offers a tranquil retreat with colonial charm, elegant rooms, and an outdoor heated infinity pool.",
    image: img3,
  },
  {
    id: "acc-3",
    name: "Arika Villa",
    location: "Dambulla",
    description:
      "A luxury boutique hotel nestled in a peaceful setting with lush tropical gardens. It offers comfortable rooms with air conditioning and private terraces, an outdoor swimming pool, and a restaurant serving Sri Lankan and Western cuisine.",
    image: img2,
  },
  {
    id: "acc-4",
    name: "Amaya Hills Kandy",
    location: "Kandy",
    description:
      "A luxury hotel nestled in the hills of Kandy, offering a peaceful retreat with traditional Sri Lankan architecture, a scenic outdoor pool, and breathtaking panoramic views of the city and surrounding mountains.",
    image: img5,
  },
  {
    id: "acc-5",
    name: "Villa Hundira",
    location: "Negombo",
    description:
      "A tranquil boutique villa set amidst lush tropical gardens overlooking the serene Negombo Lagoon. This peaceful retreat features two outdoor pools and an in-house spa, offering a perfect blend of relaxation and luxury.",
    image: img4,
  },
  {
    id: "acc-6",
    name: "The Grand Hotel",
    location: "Nuwara Eliya",
    description:
      "A historic four-star hotel built in the style of an Elizabethan-era manor house, offering a blend of old-world charm and modern comforts. Features a spa, heated indoor pool, multiple restaurants, and is near the Nuwara Eliya Golf Club.",
    image: img6,
  },
  {
    id: "acc-7",
    name: "Nest Wood Bungalow",
    location: "Kalawana",
    description:
      "A charming cabin near the Sinharaja Forest Reserve, offering an intimate escape into nature. Features a pool and restaurant — ideal for those seeking wilderness and tranquility within Sri Lanka's lush rainforest belt.",
    image: img1,
  },
  {
    id: "acc-8",
    name: "Corbet's Bungalow",
    location: "Meemure",
    description:
      "An eco-resort nestled in Meemure with a breathtaking view of the Knuckles Mountain Range. A hidden gem for nature lovers seeking remote, unspoiled highland beauty and authentic Sri Lankan countryside living.",
    image: img2,
  },
  {
    id: "acc-9",
    name: "Mountain Heavens",
    location: "Ella",
    description:
      "A serene hotel in Ella with a pool and on-site restaurant, offering peaceful retreats and panoramic views of the Ella Gap and surrounding mountains — the perfect base for exploring the island's stunning hill country.",
    image: img3,
  },
  {
    id: "acc-10",
    name: "Galway Heights Hotel",
    location: "Nuwara Eliya",
    description:
      "A luxurious hotel offering a blend of modern and colonial charm, located near Galway Land National Park. Features an Irish-themed pub, elegant dining, and sweeping highland views in Sri Lanka's most British-influenced hill town.",
    image: img4,
  },
  {
    id: "acc-11",
    name: "Rajarata Hotel",
    location: "Anuradhapura",
    description:
      "A luxurious hotel blending modern and traditional Sri Lankan charm in the heart of the ancient capital. Offers an outdoor pool, restaurant, and is situated close to Anuradhapura's extraordinary historical and archaeological sites.",
    image: img5,
  },
  {
    id: "acc-12",
    name: "Taru Villas Riva",
    location: "Negombo",
    description:
      "A luxurious boutique hotel set in a refurbished Walauwwa (manor house), featuring an outdoor pool, lush garden, and BBQ facilities. A serene, characterful escape just minutes from Negombo's beaches and the international airport.",
    image: img6,
  },
  {
    id: "acc-13",
    name: "W15 Weligama",
    location: "Weligama",
    description:
      "A stylish hotel with a beach club offering an outdoor pool, stunning sea views, and free WiFi. The perfect beachfront escape along the south coast, ideal for surfers, beach lovers, and those seeking a relaxed coastal vibe.",
    image: img1,
  },
  {
    id: "acc-14",
    name: "Waasala Eco Luxury Heaven",
    location: "Anuradhapura",
    description:
      "An eco-friendly hotel offering a unique blend of nature and comfort near ancient Anuradhapura's historical sites. Features an outdoor pool, a restaurant, and sustainable design that connects guests to the natural environment.",
    image: img2,
  },
  {
    id: "acc-15",
    name: "Marino Beach Colombo",
    location: "Colombo",
    description:
      "A luxurious hotel offering a blend of modernity and elegance in the heart of Colombo. Features a stunning rooftop infinity pool, a full-service spa, and diverse dining options with sweeping views of the Indian Ocean.",
    image: img3,
  },
  {
    id: "acc-16",
    name: "Cinnamon Citadel Kandy",
    location: "Kandy",
    description:
      "A serene four-star hotel nestled on the banks of the Mahaweli River. Offers a peaceful escape with a pool, spa, and views of the surrounding hills — a refined base for exploring Sri Lanka's cultural capital.",
    image: img4,
  },
  {
    id: "acc-17",
    name: "The Capoe House",
    location: "Haputale",
    description:
      "A secluded luxury bungalow nestled in the Haputale mountains with stunning views of the surrounding peaks and an organic tea estate. Focuses on tranquility, comfort, and a deeply personal connection with highland nature.",
    image: img5,
  },
  {
    id: "acc-18",
    name: "C Beyond Nilaveli",
    location: "Nilaveli",
    description:
      "A charming beachfront boutique hotel located where the lagoon meets the sea. Features an outdoor pool and offers a serene and intimate atmosphere along the unspoiled northeast coast — far from the tourist crowds.",
    image: img6,
  },
];

// ─── Accommodation Card ───────────────────────────────────────────────────────

function AccommodationCard({
  accommodation,
  index,
}: {
  accommodation: Accommodation;
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
          src={accommodation.image}
          alt={accommodation.name}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Location pill — top right */}
        <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-xs font-semibold text-gray-800 shadow-sm">
          <MapPinIcon className="w-3.5 h-3.5 text-amber-500" />
          {accommodation.location}
        </div>
        {/* Stay badge — top left */}
        <div className="absolute top-4 left-4 z-20 flex gap-1.5">
          <span className="px-2.5 py-0.5 bg-black/40 backdrop-blur-sm text-white text-xs font-medium rounded-full">
            Accommodation
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-gray-900 leading-tight mb-3">
          {accommodation.name}
        </h3>
        <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm">
          {accommodation.description}
        </p>
        <button className="w-full py-3 px-4 border border-amber-200 rounded-lg text-amber-700 font-medium flex items-center justify-center gap-2 group-hover:bg-amber-700 group-hover:text-white group-hover:border-amber-700 transition-colors duration-300">
          Read More
          <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

// ─── Accommodations Section ───────────────────────────────────────────────────

export function FullHotelSection() {
  return (
    <section className="bg-stone-50">
      {/* ── Hero Banner ── */}
      <div className="relative h-[58vh] min-h-[420px] overflow-hidden">
        <Image
          src={img5}
          alt="Sri Lanka Accommodations"
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
                <BedDoubleIcon className="w-10 h-10 text-white/25" />
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
                  Where You'll Stay
                </span>
              </div> */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.05] mb-6 drop-shadow-2xl">
                Accommodations
              </h1>
              <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-xl">
                From colonial-era grand hotels and misty hill country bungalows
                to beachfront boutique villas and eco-retreats in the jungle —
                Sri Lanka offers stays as diverse and extraordinary as the
                island itself. Every property is{" "}
                <span className="text-amber-300 font-semibold">
                  handpicked for quality
                </span>
                ,{" "}
                <span className="text-amber-300 font-semibold">
                  character, and location
                </span>{" "}
                to make every night as memorable as every day.
              </p>

              {/* <div className="flex gap-10 mt-8">
                {(
                  [
                    ["18+", "Properties"],
                    ["4.8★", "Avg. Rating"],
                    ["Island-Wide", "Coverage"],
                  ] as [string, string][]
                ).map(([val, label]) => (
                  <div key={label}>
                    <div className="text-2xl font-bold text-white">{val}</div>
                    <div className="text-xs text-white/50 uppercase tracking-wider mt-0.5">
                      {label}
                    </div>
                  </div>
                ))}
              </div> */}
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
                All Properties
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900">
              Your Perfect Stay Awaits
            </h2>
          </div>
          <p className="hidden md:block text-gray-400 text-sm">
            {accommodations.length} handpicked properties
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <AccommodationCard
              key={accommodation.id}
              accommodation={accommodation}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
