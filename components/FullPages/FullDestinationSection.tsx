"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { MapPinIcon, ChevronRightIcon, GlobeIcon } from "lucide-react";
import img1 from "../../assest/Packages/1.jpg";
import img2 from "../../assest/Packages/2.jpg";
import img3 from "../../assest/Packages/3.jpg";
import img4 from "../../assest/Packages/4.jpg";
import img5 from "../../assest/Packages/5.jpg";
import img6 from "../../assest/Packages/6.jpg";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Destination {
  id: string;
  name: string;
  description: string;
  tags: string[];
  image: StaticImageData;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const destinations: Destination[] = [
  {
    id: "dest-1",
    name: "Sigiriya",
    description:
      "The legendary rock fortress (5th century AD), a 200m monolithic rock rising from jungle — often called the Eighth Wonder of the World. Climb past ancient frescoes, mirror wall, lion paws, and water gardens to summit ruins with panoramic views.",
    tags: ["Cultural Triangle", "Iconic"],
    image: img1,
  },
  {
    id: "dest-2",
    name: "Mirissa",
    description:
      "The jewel of southern Sri Lanka's coast, offering world-class whale watching (blue whales Dec–Apr), excellent surfing, golden beaches, and stilt fishermen views. Fresh seafood and sunset cocktails make it perfect for beach lovers.",
    tags: ["South Coast", "Beach"],
    image: img2,
  },
  {
    id: "dest-3",
    name: "Ella",
    description:
      "A misty highland village surrounded by jaw-dropping panoramic views of mountains, valleys, waterfalls, and endless tea plantations. Highlights include the iconic Nine Arch Bridge, Ella Rock hike, and Ravana Falls.",
    tags: ["Hill Country", "Scenic Views"],
    image: img3,
  },
  {
    id: "dest-4",
    name: "Yala",
    description:
      "Sri Lanka's most popular national park (over 1,000 sq km), home to the world's highest leopard density plus elephants, crocodiles, sloth bears, and hundreds of bird species. A must for big cat and elephant spotting.",
    tags: ["Wildlife", "Safari"],
    image: img4,
  },
  {
    id: "dest-5",
    name: "Galle",
    description:
      "Sri Lanka's historic maritime gem and UNESCO World Heritage Site. The 16th-century Galle Fort features ramparts, cobblestone streets, boutique shops, cafes, and stunning ocean views — stroll the walls at sunset for pure magic.",
    tags: ["South Coast", "Historical"],
    image: img5,
  },
  {
    id: "dest-6",
    name: "Kandy",
    description:
      "Sri Lanka's sacred cultural capital in the hills, home to the iconic Temple of the Tooth Relic. Surrounds include Kandy Lake, botanical gardens, cultural dance shows, and vibrant markets — the gateway to hill country.",
    tags: ["Hill Country", "Cultural"],
    image: img6,
  },
  {
    id: "dest-7",
    name: "Nuwara Eliya",
    description:
      "Known as 'Little England,' this cool highland hill station features rolling hills, colonial buildings, rose gardens, and world-famous tea estates. Gregory Lake boating, tea tastings, and misty walks await.",
    tags: ["Hill Country", "Colonial/Tea"],
    image: img1,
  },
  {
    id: "dest-8",
    name: "Arugam Bay",
    description:
      "The undisputed surf capital of Sri Lanka — a picturesque bay on the southeast coast with world-class point breaks, yoga retreats, laid-back beach shacks, and nearby national parks. Best May–Sep for east coast swells.",
    tags: ["East Coast", "Surfing"],
    image: img2,
  },
  {
    id: "dest-9",
    name: "Anuradhapura",
    description:
      "The first ancient capital of Sri Lanka (from 4th century BC) — a UNESCO sacred city with massive stupas, the sacred Bo Tree, ancient tanks, palaces, and monasteries. Profound history and spiritual serenity.",
    tags: ["Cultural Triangle", "Ancient"],
    image: img3,
  },
  {
    id: "dest-10",
    name: "Bentota",
    description:
      "The jewel of Sri Lanka's southwest coast, boasting pristine golden beaches backed by coconut palms and a wide biodiverse lagoon. Popular for water sports, river safaris, turtle hatcheries, and Ayurveda spas.",
    tags: ["South Coast", "Beach"],
    image: img4,
  },
  {
    id: "dest-11",
    name: "Polonnaruwa",
    description:
      "A well-preserved UNESCO medieval capital with royal palaces, monumental Buddha statues (Gal Vihara rock carvings), and vast irrigation tanks. Cycle or explore ruins amid monkeys and birds.",
    tags: ["Cultural Triangle", "Historical"],
    image: img5,
  },
  {
    id: "dest-12",
    name: "Kitulgala",
    description:
      "Sri Lanka's premier adventure hub nestled in thick jungles along the Kelani River. Famous for white-water rafting (Grade 3–4), canyoning, waterfall abseiling, mountain biking, and canopy walks.",
    tags: ["Adventure", "Nature"],
    image: img6,
  },
  {
    id: "dest-13",
    name: "Jaffna",
    description:
      "Sri Lanka's northernmost peninsula and cultural heart of Tamil heritage. Explore ancient Hindu temples, the Dutch Fort, colorful markets, and nearby islands like Delft with wild ponies. Spicy cuisine and unique culture.",
    tags: ["Northern", "Cultural"],
    image: img1,
  },
  {
    id: "dest-14",
    name: "Negombo",
    description:
      "A lively coastal town just minutes from the airport — perfect as a first or last stop. Wide sandy beaches, a Dutch canal system, a famous fish market, and colonial fort remnants make it a relaxed introduction.",
    tags: ["West Coast", "Gateway"],
    image: img2,
  },
  {
    id: "dest-15",
    name: "Wilpattu",
    description:
      "Sri Lanka's largest and oldest national park (over 1,300 sq km), renowned for unique natural lakes ('villus') that attract leopards, elephants, sloth bears, crocodiles, and over 200 bird species in an uncrowded setting.",
    tags: ["Wildlife", "Safari"],
    image: img3,
  },
  {
    id: "dest-16",
    name: "Haputale",
    description:
      "A hidden mountainous town perched at the southern edge of hill country with sweeping valley views. Lipton's Seat tea estate lookout, Adisham Bungalow colonial mansion, and misty treks — less crowded than Ella.",
    tags: ["Hill Country", "Scenic"],
    image: img4,
  },
  {
    id: "dest-17",
    name: "Weligama",
    description:
      "Weligama — 'sandy village' — boasts one of the south coast's largest crescent bays with calm, beginner-friendly coves. The ultimate surf mecca with consistent waves, whale watching, yoga retreats, and relaxed beach cafes.",
    tags: ["South Coast", "Surfing"],
    image: img5,
  },
  {
    id: "dest-18",
    name: "Dambulla",
    description:
      "Home to the magnificent Golden Temple — a UNESCO-listed cave complex with over 150 Buddha statues, intricate murals, and centuries-old golden statues. Blends spiritual depth with natural beauty; often paired with Sigiriya.",
    tags: ["Cultural Triangle", "Spiritual"],
    image: img6,
  },
  {
    id: "dest-19",
    name: "Hatton",
    description:
      "An emerald-green gateway to tea country, blanketed in rolling plantations, dense forests, and thundering waterfalls. A base for Adam's Peak pilgrimages, Horton Plains hikes, scenic train rides, and fresh high-grown tea tastings.",
    tags: ["Hill Country", "Tea Estates"],
    image: img1,
  },
  {
    id: "dest-20",
    name: "Colombo",
    description:
      "The bustling seaside capital blending colonial architecture, modern skyscrapers, temples, mosques, and vibrant Pettah market. Stroll Galle Face Green, visit Gangaramaya Temple, and explore street food and nightlife.",
    tags: ["West Coast", "City"],
    image: img2,
  },
];

// ─── Destination Card ─────────────────────────────────────────────────────────

function DestinationCard({
  destination,
  index,
}: {
  destination: Destination;
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
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Tags */}
        <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-1.5">
          {destination.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 bg-black/40 backdrop-blur-sm text-white text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Location pin */}
        <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-xs font-semibold text-gray-800 shadow-sm">
          <MapPinIcon className="w-3.5 h-3.5 text-amber-500" />
          Sri Lanka
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-gray-900 leading-tight mb-3">
          {destination.name}
        </h3>

        <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm">
          {destination.description}
        </p>

        <button className="w-full py-3 px-4 border border-amber-200 rounded-lg text-amber-700 font-medium flex items-center justify-center gap-2 group-hover:bg-amber-700 group-hover:text-white group-hover:border-amber-700 transition-colors duration-300">
          Explore Destination
          <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

// ─── Destinations Section ─────────────────────────────────────────────────────

export function FullDestinationsSection() {
  return (
    <section className="bg-stone-50">
      {/* ── Hero Banner ── */}
      <div className="relative h-[80vh] min-h-[420px] overflow-hidden">
        <Image
          src={img3}
          alt="Sri Lanka Destinations"
          fill
          priority
          className="object-cover scale-105"
          style={{ filter: "brightness(0.45) saturate(1.15)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-transparent" />

        {/* Decorative rings — right side */}
        <div className="absolute top-1/2 right-16 -translate-y-1/2 hidden lg:block pointer-events-none">
          <div className="w-52 h-52 rounded-full border border-white/10 flex items-center justify-center">
            <div className="w-38 h-38 rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border border-white/15 flex items-center justify-center">
                <GlobeIcon className="w-10 h-10 text-white/25" />
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
                  Explore the Island
                </span>
              </div> */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.05] mb-6 drop-shadow-2xl">
                Destinations
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
                    ["20+", "Destinations"],
                    ["8", "UNESCO Sites"],
                    ["15", "National Parks"],
                  ] as [string, string][]
                ).map(([val, label]) => (
                  <div key={label}>
                    <div className="text-2xl font-bold text-white">{val}</div>
                    <div className="text-xs text-white/50 font-bold uppercase tracking-wider mt-0.5">
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
                All Destinations
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900">
              Where Will You Go?
            </h2>
          </div>
          <p className="hidden md:block text-gray-400 text-sm">
            {destinations.length} destinations to explore
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
