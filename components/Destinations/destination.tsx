"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPinIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  ArrowLeftIcon,
  PhoneIcon,
  MailIcon,
  CheckIcon,
  SunIcon,
  CloudIcon,
  CalendarIcon,
  CameraIcon,
} from "lucide-react";
import Link from "next/link";
import img1 from "../../assest/Packages/1.jpg";
import img2 from "../../assest/Packages/2.jpg";
import img3 from "../../assest/Packages/3.jpg";
import img4 from "../../assest/Packages/4.jpg";
import img5 from "../../assest/Packages/5.jpg";
import img6 from "../../assest/Packages/6.jpg";

// ─── Types ────────────────────────────────────────────────────────────────────

interface GallerySlide {
  image: StaticImageData;
  title: string;
  description: string;
}

interface DestinationDetail {
  id: string;
  name: string;
  tags: string[];
  region: string;
  bestTime: string;
  climate: string;
  description: string;
  longDescription: string;
  highlights: string[];
  travelTips: string[];
  gallery: GallerySlide[];
}

// ─── Destination Data ─────────────────────────────────────────────────────────

const destinations: DestinationDetail[] = [
  {
    id: "dest-1",
    name: "Sigiriya",
    tags: ["Cultural Triangle", "Iconic"],
    region: "North Central Province",
    bestTime: "January – April",
    climate: "Tropical, 27–32°C",
    description:
      "The legendary rock fortress (5th century AD), a 200m monolithic rock rising from jungle — often called the Eighth Wonder of the World.",
    longDescription:
      "Sigiriya, or Lion Rock, is a UNESCO World Heritage Site and one of Sri Lanka's most iconic landmarks. This ancient rock fortress rises 200 metres above the surrounding jungle and was the royal capital of King Kashyapa I (477–495 AD). The climb takes you past magnificent frescoes of celestial maidens painted on the rock face, the famous Mirror Wall inscribed with ancient graffiti, and the colossal Lion Paws carved in stone. At the summit, the ruins of the royal palace offer breathtaking 360° panoramic views of the surrounding jungle and reservoirs. The water gardens and boulder gardens at the base are considered masterpieces of ancient landscape architecture.",
    highlights: [
      "Climb the 1,200-step ascent to the summit palace ruins",
      "Marvel at the ancient Sigiriya frescoes (celestial damsels)",
      "Walk the famous Mirror Wall with ancient inscriptions",
      "Explore the Lion Paws gate and rock-cut moat",
      "Visit the ornamental water gardens — 5th-century engineering marvels",
      "Panoramic jungle and reservoir views from the summit",
    ],
    travelTips: [
      "Start your climb early morning (6–8am) to avoid heat and crowds",
      "Wear comfortable, non-slip shoes for the steep steps",
      "Combine with Pidurangala Rock for the best Sigiriya photo angle",
      "Entry fee: approx. USD 30 for foreign visitors",
      "Pair with Dambulla Cave Temple, only 17 km away",
    ],
    gallery: [
      {
        image: img1,
        title: "The Lion Rock Summit",
        description:
          "Rising 200 metres above the jungle, Sigiriya's flat-topped summit holds the ruins of King Kashyapa's 5th-century royal palace.",
      },
      {
        image: img2,
        title: "Ancient Frescoes",
        description:
          "The famous Sigiriya frescoes — vivid paintings of celestial maidens preserved on the rock face for over 1,500 years.",
      },
      {
        image: img3,
        title: "Water Gardens",
        description:
          "The symmetrical water gardens at Sigiriya's base are among the oldest landscaped gardens in the world, fed by an ingenious hydraulic system.",
      },
      {
        image: img4,
        title: "The Lion Paws",
        description:
          "Two enormous carved lion paws mark the final ascent — all that remains of the colossal lion statue that once guarded the summit stairway.",
      },
      {
        image: img5,
        title: "Jungle Panorama",
        description:
          "From the summit, an unbroken sea of green jungle stretches to the horizon, punctuated by ancient reservoirs shimmering in the sun.",
      },
      {
        image: img6,
        title: "Sunrise at Sigiriya",
        description:
          "Dawn at Sigiriya is magical — mist clings to the jungle canopy as golden light slowly illuminates the ancient fortress above.",
      },
    ],
  },
  {
    id: "dest-2",
    name: "Mirissa",
    tags: ["South Coast", "Beach"],
    region: "Southern Province",
    bestTime: "November – April",
    climate: "Tropical, 28–34°C",
    description:
      "The jewel of southern Sri Lanka's coast, offering world-class whale watching, golden beaches, surfing and fresh seafood.",
    longDescription:
      "Mirissa is a stunning crescent-shaped bay on Sri Lanka's southern coast, celebrated for its laid-back tropical atmosphere and world-class marine encounters. It's the best place in the world to spot blue whales — the largest animals on earth — along with sperm whales, fin whales, and pods of spinner dolphins. The beach itself is framed by coconut palms and gentle surf, ideal for swimming and beginner surfing. At night, the beachfront transforms into a buzzing strip of seafood restaurants and beach bars. Nearby you can visit the iconic stilt fishermen of Weligama, Parrot Rock, and the historic Galle Fort.",
    highlights: [
      "World-class blue whale and sperm whale watching (Dec–Apr)",
      "Spinner dolphin encounters on morning boat trips",
      "Beautiful crescent beach with golden sand and gentle surf",
      "Fresh seafood dining right on the beach",
      "Surfing, snorkelling, and stand-up paddleboarding",
      "Visit nearby Parrot Rock for sunset views",
    ],
    travelTips: [
      "Book whale watching boats directly from the harbor — depart at 6:30am",
      "Best whale season: December to April (peak Jan–Mar)",
      "Parrot Rock is a short swim or kayak from the main beach",
      "Avoid plastic — Mirissa has active marine conservation efforts",
      "Combine with Galle Fort (35 km) and Weligama stilt fishermen",
    ],
    gallery: [
      {
        image: img2,
        title: "Mirissa Crescent Bay",
        description:
          "The iconic crescent bay of Mirissa — a perfect arc of golden sand lined with coconut palms and lapped by warm turquoise Indian Ocean waters.",
      },
      {
        image: img3,
        title: "Blue Whale Watching",
        description:
          "Mirissa is one of the best places on earth to witness the blue whale — the largest animal to have ever lived — in its natural oceanic habitat.",
      },
      {
        image: img4,
        title: "Parrot Rock",
        description:
          "The famous Parrot Rock rises from the surf at the western end of the beach, offering a rocky perch for sunset views across the Indian Ocean.",
      },
      {
        image: img5,
        title: "Tropical Sunsets",
        description:
          "Mirissa's sunsets are legendary — fiery skies reflecting off calm waters while beach bars fill with travellers watching the sun melt into the ocean.",
      },
      {
        image: img6,
        title: "Stilt Fishermen",
        description:
          "A short drive brings you to Weligama's iconic stilt fishermen — a centuries-old tradition of fishing balanced on wooden poles driven into the shallows.",
      },
      {
        image: img1,
        title: "Spinner Dolphins",
        description:
          "Pods of hundreds of spinner dolphins frequently escort whale-watching boats, leaping and spinning in an acrobatic morning display.",
      },
    ],
  },
  {
    id: "dest-3",
    name: "Ella",
    tags: ["Hill Country", "Scenic Views"],
    region: "Uva Province",
    bestTime: "December – March",
    climate: "Cool & Misty, 18–26°C",
    description:
      "A misty highland village surrounded by jaw-dropping panoramic views of mountains, valleys, waterfalls, and endless tea plantations.",
    longDescription:
      "Ella is a charming highland village perched at 1,041 metres in Sri Lanka's hill country, offering some of the island's most dramatic scenery. The village sits in a natural gap in the mountains — Ella Gap — through which sweeping views of the southern lowlands unfold. The iconic Nine Arch Bridge, a colonial-era masterpiece, sees trains curve through it against a backdrop of jungle and tea estates. Hikers tackle Ella Rock for panoramic summit views, or trek to Little Adam's Peak for sunrise. Ravana Falls cascades nearby, and the surrounding tea estates are open for tours and fresh-brew tastings. The village's cafes, yoga studios, and slow pace make it a beloved backpacker haven.",
    highlights: [
      "Photograph the iconic Nine Arch Bridge with passing trains",
      "Hike Ella Rock for sweeping 360° highland views",
      "Walk to Little Adam's Peak for sunrise panoramas",
      "Visit Ravana Falls and Rawana Cave nearby",
      "Tour a working tea estate and taste fresh Ceylon tea",
      "Arrive by scenic Kandy–Ella train — one of the world's great rail journeys",
    ],
    travelTips: [
      "The Kandy–Ella train is legendary — book 2nd class seats in advance",
      "Nine Arch Bridge: walk from Ella town (20 min) for the classic shot",
      "Start Ella Rock hike early — full day trek, take a guide",
      "Cool nights — bring a light jacket or layer",
      "Ella is easily combined with Nuwara Eliya and Horton Plains",
    ],
    gallery: [
      {
        image: img3,
        title: "Nine Arch Bridge",
        description:
          "Ella's most photographed landmark — a colonial-era stone viaduct where trains curve gracefully through nine arches set against lush jungle and tea estate hills.",
      },
      {
        image: img4,
        title: "Ella Gap View",
        description:
          "The famous Ella Gap — a dramatic natural break in the mountains framing an endless view of misty valleys, lowland jungle and distant southern plains.",
      },
      {
        image: img5,
        title: "Tea Estate Trails",
        description:
          "Rolling hills carpeted in emerald tea bushes surround Ella — stroll through the estates, meet the tea pluckers, and taste fresh-brewed high-grown Ceylon tea.",
      },
      {
        image: img6,
        title: "Ravana Falls",
        description:
          "One of the widest waterfalls in Sri Lanka, Ravana Falls plunges in broad cascades down a rocky cliff face, surrounded by dense tropical forest.",
      },
      {
        image: img1,
        title: "Scenic Train Journey",
        description:
          "The Kandy–Ella train ride is rated one of the world's most beautiful rail journeys, winding through cloud forests, waterfalls, tea estates and tunnels.",
      },
      {
        image: img2,
        title: "Little Adam's Peak Sunrise",
        description:
          "An easy 30-minute hike from Ella town brings you to Little Adam's Peak — a grassy summit offering panoramic sunrise views across the entire Ella valley.",
      },
    ],
  },
  {
    id: "dest-4",
    name: "Yala",
    tags: ["Wildlife", "Safari"],
    region: "Southern & Uva Province",
    bestTime: "February – July",
    climate: "Hot & Dry, 27–36°C",
    description:
      "Sri Lanka's most popular national park, home to the world's highest leopard density plus elephants, crocodiles, and hundreds of bird species.",
    longDescription:
      "Yala National Park is Sri Lanka's most visited and second-largest national park, covering over 1,000 square kilometres of diverse ecosystems — from dense jungle and grassland plains to coastal lagoons, beaches, and rocky outcrops. It is globally renowned for having one of the highest leopard-to-area densities in the world, making it one of the best places on earth to see wild leopards. Alongside leopards, Yala shelters large herds of Sri Lankan elephants, sloth bears, crocodiles, jackals, spotted deer, and over 200 bird species. The park also contains ancient Buddhist ruins and temples within its boundaries, adding cultural depth to every safari.",
    highlights: [
      "World-class leopard spotting — highest density in the world",
      "Large herds of wild Sri Lankan elephants in open grasslands",
      "Sloth bear sightings in scrubland and rocky terrain",
      "Estuarine crocodiles, water monitors, and sea turtles",
      "Over 200 bird species including painted storks and flamingos",
      "Ancient Buddhist ruins of Sithulpawwa within the park",
    ],
    travelTips: [
      "Morning (6–10am) and evening (3–6pm) safaris offer the best sightings",
      "Book a reputable jeep safari through your hotel or Magical Paradise",
      "February–July is best; avoid Oct–Nov when Block 1 closes",
      "Bring binoculars, sunscreen, and a hat — it gets very hot",
      "Combine Yala with Udawalawe for a full wildlife circuit",
    ],
    gallery: [
      {
        image: img4,
        title: "Sri Lankan Leopard",
        description:
          "Yala holds the world's highest density of wild leopards — sightings are frequent, especially at dawn when they patrol the rocky outcrops and forest edges.",
      },
      {
        image: img5,
        title: "Elephant Herds",
        description:
          "Large family herds of Sri Lankan elephants roam Yala's open grasslands, gathering at waterholes and lake edges in the golden hours of morning and dusk.",
      },
      {
        image: img6,
        title: "Coastal Lagoons",
        description:
          "Yala's southern boundary meets the Indian Ocean — vast coastal lagoons attract flamingos, painted storks, crocodiles, and sea turtles nesting on the beach.",
      },
      {
        image: img1,
        title: "Jeep Safari at Sunrise",
        description:
          "Open-top jeep safaris at first light are the definitive Yala experience — mist rising over the grasslands as the park awakens around you.",
      },
      {
        image: img2,
        title: "Sloth Bear Country",
        description:
          "Yala is one of the few places in the world where you can reliably spot wild sloth bears foraging in the rocky scrubland and termite mounds.",
      },
      {
        image: img3,
        title: "Ancient Sithulpawwa Temple",
        description:
          "Deep inside the park stands the 2,000-year-old Sithulpawwa rock temple — a monastic complex with dagobas and caves still visited by Buddhist pilgrims.",
      },
    ],
  },
  {
    id: "dest-5",
    name: "Galle",
    tags: ["South Coast", "Historical"],
    region: "Southern Province",
    bestTime: "November – April",
    climate: "Tropical, 27–32°C",
    description:
      "Sri Lanka's historic maritime gem and UNESCO World Heritage Site — a 16th-century fort with ramparts, cobblestone streets, and ocean views.",
    longDescription:
      "Galle Fort is one of the best-preserved examples of a European fortified city in Asia, built by the Portuguese in 1588 and extensively developed by the Dutch East India Company from 1649 onwards. Today it is a living, breathing town where colonial Dutch architecture, ancient mosques, Buddhist temples, and boutique hotels coexist within the same massive rampart walls. Strolling the fort's ramparts at sunset — with the Indian Ocean crashing below — is one of Sri Lanka's truly unmissable experiences. The fort's streets are lined with art galleries, gem shops, spice stores, and some of the island's finest restaurants. Beyond the fort, Galle's Unawatuna beach and the surrounding surf spots add coastal colour.",
    highlights: [
      "Walk the full circuit of the ocean-front Dutch fortification walls",
      "Explore cobblestone streets of the UNESCO-listed old town",
      "Visit the Dutch Reformed Church (1755) and Groote Kerk",
      "Browse boutique galleries, gem stores, and spice shops",
      "Sunset on the ramparts — the iconic Galle experience",
      "Day trip to Unawatuna beach and Jungle Beach",
    ],
    travelTips: [
      "The fort is best explored on foot — hire a local guide for history",
      "Visit the Galle Fort Museum for Dutch colonial artefacts",
      "Cricket fans: watch a match at the scenic Galle International Cricket Stadium",
      "The fort is compact — a full walk takes 2–3 hours comfortably",
      "Combine with Mirissa (35 km) and Unawatuna beach (5 km)",
    ],
    gallery: [
      {
        image: img5,
        title: "The Fort Ramparts",
        description:
          "The 17th-century Dutch ramparts curve around the ocean-facing perimeter of Galle Fort — a legendary sunset walk with crashing waves below.",
      },
      {
        image: img6,
        title: "Cobblestone Old Town",
        description:
          "The fort's interior is a maze of cobblestone streets lined with colonial-era Dutch architecture, boutique hotels, art galleries, and spice shops.",
      },
      {
        image: img1,
        title: "Dutch Reformed Church",
        description:
          "The Groote Kerk — built in 1755 — stands at the heart of the fort, its whitewashed walls and gravestones telling the story of Galle's colonial past.",
      },
      {
        image: img2,
        title: "Lighthouse at Sunset",
        description:
          "The Galle Lighthouse — Sri Lanka's oldest — stands at the fort's southern tip, casting its beam across the Indian Ocean as the sun melts into the horizon.",
      },
      {
        image: img3,
        title: "Galle Cricket Stadium",
        description:
          "One of the world's most picturesque cricket grounds, the Galle International Cricket Stadium sits inside the fort walls with the ocean as its backdrop.",
      },
      {
        image: img4,
        title: "Fort Gateway",
        description:
          "The grand main gate bears the Dutch VOC monogram above its arch — the entry point into a World Heritage living town that has changed little in 300 years.",
      },
    ],
  },
  {
    id: "dest-6",
    name: "Kandy",
    tags: ["Hill Country", "Cultural"],
    region: "Central Province",
    bestTime: "January – April, July–Aug",
    climate: "Warm & Humid, 20–30°C",
    description:
      "Sri Lanka's sacred cultural capital in the hills, home to the iconic Temple of the Tooth Relic and vibrant Kandyan cultural traditions.",
    longDescription:
      "Kandy is the cultural heart and spiritual capital of Sri Lanka, a UNESCO World Heritage City nestled in the hills at 465 metres above sea level. The city is dominated by Kandy Lake and the revered Sri Dalada Maligawa — the Temple of the Sacred Tooth Relic — one of Buddhism's holiest shrines, said to house a tooth of the Buddha himself. The annual Esala Perahera festival (July–August) is one of Asia's grandest pageants: 10 nights of fire dancers, drummers, and over 100 adorned elephants parading through the streets. Surrounding the city are the magnificent Royal Botanical Gardens of Peradeniya, spice and gem markets, and the gateway to the hill country's tea estates and train journeys.",
    highlights: [
      "Visit the Sacred Temple of the Tooth Relic (Sri Dalada Maligawa)",
      "Watch traditional Kandyan cultural dance performances",
      "Stroll around beautiful Kandy Lake at dusk",
      "Explore the Royal Botanical Gardens of Peradeniya",
      "Experience the Esala Perahera elephant procession (Jul–Aug)",
      "Take the scenic train from Kandy to Ella",
    ],
    travelTips: [
      "Dress modestly for the Temple of the Tooth (cover shoulders and knees)",
      "Perahera festival tickets sell out fast — book months ahead",
      "Kandy market (Pettah area) is great for spices, gems, and batik",
      "The train to Ella departs Kandy station — book 2nd class in advance",
      "Combine with Dambulla Cave Temple and Sigiriya (90 min drive)",
    ],
    gallery: [
      {
        image: img6,
        title: "Temple of the Tooth",
        description:
          "The golden-roofed Sri Dalada Maligawa houses the sacred tooth relic of the Buddha — Buddhism's most important and revered shrine in Sri Lanka.",
      },
      {
        image: img1,
        title: "Kandy Lake",
        description:
          "The serene Kandy Lake at the heart of the city was built by the last king of Kandy in 1807 — a peaceful setting for evening walks with temple views.",
      },
      {
        image: img2,
        title: "Esala Perahera Procession",
        description:
          "Asia's grandest festival — ten nights of fire dancers, traditional drummers, whip crackers, and over 100 magnificently adorned elephants parading through Kandy.",
      },
      {
        image: img3,
        title: "Kandyan Dance",
        description:
          "Kandyan classical dance — a UNESCO-listed art form featuring elaborate costumes, acrobatic fire-eating, and complex rhythmic percussion unique to the hill country.",
      },
      {
        image: img4,
        title: "Royal Botanical Gardens",
        description:
          "The Peradeniya Botanical Gardens span 147 acres and contain over 4,000 plant species including a famous avenue of royal palms and a 2-acre orchid house.",
      },
      {
        image: img5,
        title: "Kandy Cityscape",
        description:
          "Kandy is cradled by forested hills on all sides — the city's red-roofed buildings, temples, and the shimmering lake form a postcard-perfect highland panorama.",
      },
    ],
  },
  // Add the remaining 14 destinations following the same structure...
  // dest-7 through dest-20 can reuse the gallery images with different titles and descriptions
  {
    id: "dest-7",
    name: "Nuwara Eliya",
    tags: ["Hill Country", "Colonial/Tea"],
    region: "Central Province",
    bestTime: "December – March",
    climate: "Cool & Misty, 10–22°C",
    description:
      "Known as 'Little England,' this cool highland hill station features rolling hills, colonial buildings, rose gardens, and world-famous tea estates.",
    longDescription:
      "Nuwara Eliya — pronounced 'Noo-relia' — sits at 1,868 metres, making it the highest and coolest town in Sri Lanka. The British colonial era left an indelible imprint: Tudor-style hotels, manicured rose gardens, a racecourse, a golf course, and a post office that looks lifted from a Cotswolds village. The surrounding highlands are blanketed in some of the world's finest tea estates producing Ceylon's famous high-grown teas. Gregory Lake offers boating, and Horton Plains National Park — an hour away — features dramatic World's End cliff drops and Baker's Falls. Visit during April's Sinhala and Tamil New Year for horse racing and flower festivals.",
    highlights: [
      "Tour a tea factory and taste world-famous high-grown Ceylon tea",
      "Boating and relaxing at Gregory Lake",
      "Walk through colonial-era Victoria Park gardens",
      "Visit nearby Horton Plains and the dramatic World's End cliff",
      "Explore the old Hill Club — a classic British colonial members' club",
      "Horse racing at the Nuwara Eliya Racecourse (April festival season)",
    ],
    travelTips: [
      "Bring warm clothing — nights drop to 8–12°C even in summer",
      "Pedro Tea Estate and Mackwoods Labookellie are the best factory tours",
      "Horton Plains: start before 8am to beat clouds at World's End",
      "April is peak Sinhala/Tamil New Year — expect crowds and festivities",
      "The scenic train from Nanu Oya station is a memorable leg of the hill country journey",
    ],
    gallery: [
      {
        image: img1,
        title: "Tea Estates at Sunrise",
        description:
          "The rolling hills surrounding Nuwara Eliya are carpeted in manicured tea bushes — an emerald sea of green that glows in the early morning light.",
      },
      {
        image: img2,
        title: "Gregory Lake",
        description:
          "The calm waters of Gregory Lake reflect the surrounding green hills and colonial architecture — a peaceful spot for boating and lakeside strolls.",
      },
      {
        image: img3,
        title: "Victoria Park",
        description:
          "Nuwara Eliya's Victoria Park is a beautifully maintained colonial-era garden with rose beds, flowering trees, and a tranquil stream running through it.",
      },
      {
        image: img4,
        title: "World's End — Horton Plains",
        description:
          "A dramatic 880-metre sheer cliff drop at the edge of the Horton Plains plateau, offering views across the southern plains on clear mornings.",
      },
      {
        image: img5,
        title: "Colonial Architecture",
        description:
          "Tudor-style bungalows, a grand post office, and the famous Hill Club give Nuwara Eliya the look and feel of a quintessential English hill station.",
      },
      {
        image: img6,
        title: "Tea Factory Tour",
        description:
          "Watch the fascinating journey from freshly plucked tea leaf to finished Ceylon tea — withering, rolling, fermenting, firing — and taste the result.",
      },
    ],
  },
  {
    id: "dest-8",
    name: "Arugam Bay",
    tags: ["East Coast", "Surfing"],
    region: "Eastern Province",
    bestTime: "May – September",
    climate: "Hot & Sunny, 28–34°C",
    description:
      "The undisputed surf capital of Sri Lanka — a picturesque bay with world-class point breaks, yoga retreats, and nearby national parks.",
    longDescription:
      "Arugam Bay is a crescent-shaped bay on Sri Lanka's southeast coast, internationally acclaimed as one of the top 10 surf destinations in the world. The Main Point break delivers long, consistent right-handers from May to September, attracting surfers from beginner to professional level. Beyond surfing, the bay has an infectious laid-back vibe — beach shacks serve fresh-caught tuna, yoga studios offer morning sessions, and tuk-tuks ferry travellers to the nearby Kumana National Park for bird watching and leopard safaris. Whisky Point and Pottuvil Point are further breaks worth exploring, while Elephant Rock and the ancient Muhudu Maha Viharaya temple add cultural depth.",
    highlights: [
      "World-class right-hand point surf break at Main Point",
      "Whisky Point and Pottuvil Point for varied surf conditions",
      "Day trips to Kumana National Park — bird watching and safaris",
      "Yoga retreats and wellness centres right on the beach",
      "Fresh seafood beach shacks and sunset beach bars",
      "Elephant Rock and ancient Muhudu Maha Viharaya temple",
    ],
    travelTips: [
      "Best surf: May–September (east monsoon season brings clean swells)",
      "Beginner lessons available from many surf schools at the bay",
      "Avoid October–April when the bay faces strong southwesterly swells",
      "Book accommodation early in peak surf season (June–August)",
      "Combine with Yala National Park — roughly 3 hours' drive south",
    ],
    gallery: [
      {
        image: img2,
        title: "Main Point Surf Break",
        description:
          "Arugam Bay's legendary Main Point delivers long, peeling right-hand waves from May to September — a mecca for surfers from around the world.",
      },
      {
        image: img3,
        title: "Arugam Bay Beach",
        description:
          "A gentle crescent of golden sand backed by palms and beach shacks, the bay exudes a relaxed, sun-soaked atmosphere that draws travellers back year after year.",
      },
      {
        image: img4,
        title: "Kumana Bird Watching",
        description:
          "The nearby Kumana National Park is home to vast flocks of migratory birds — painted storks, spoonbills, ibis, and herons nesting in its ancient tank and forest.",
      },
      {
        image: img5,
        title: "Sunset at Pottuvil Point",
        description:
          "Pottuvil Point is famous for both its surf and its sunsets — the sky turns molten gold as surfers ride the last waves of the evening.",
      },
      {
        image: img6,
        title: "Beach Yoga at Dawn",
        description:
          "The quiet early morning beach at Arugam Bay is a favourite setting for yoga sessions — the sound of the waves a natural soundtrack to morning practice.",
      },
      {
        image: img1,
        title: "Elephant Rock",
        description:
          "A short tuk-tuk ride from the bay, Elephant Rock is a favourite wild elephant gathering spot — herds regularly visit to bathe and graze in the surrounding scrubland.",
      },
    ],
  },
  {
    id: "dest-9",
    name: "Anuradhapura",
    tags: ["Cultural Triangle", "Ancient"],
    region: "North Central Province",
    bestTime: "May – September",
    climate: "Hot & Dry, 27–35°C",
    description:
      "The first ancient capital of Sri Lanka — a UNESCO sacred city with massive stupas, the sacred Bo Tree, palaces, and monasteries.",
    longDescription:
      "Anuradhapura was the first capital of Sri Lanka, continuously inhabited from the 4th century BC to the 11th century AD — making it one of the longest-standing capitals in human history. Today it is a UNESCO World Heritage Sacred City, preserving the most extensive collection of ancient Buddhist architecture in Asia. The site's crown jewels include the Ruwanwelisaya stupa (140m wide at its base), the Sri Maha Bodhi — a sacred fig tree grown from a cutting of the original Bodhi Tree under which the Buddha attained enlightenment (said to be the oldest historically documented tree in the world) — and the giant Jetavanarama stupa, once the third tallest structure in the ancient world. The city remains an active pilgrimage destination for Buddhists.",
    highlights: [
      "Sri Maha Bodhi — the oldest historically documented tree in the world",
      "Ruwanwelisaya Dagoba — the Great Stupa (140m base circumference)",
      "Jetavanarama Stupa — once the third tallest structure on earth",
      "Thuparamaya — Sri Lanka's first dagoba, built 3rd century BC",
      "Ancient royal pleasure gardens of Isurumuniya",
      "Museum of the Anuradhapura ruins and artefacts",
    ],
    travelTips: [
      "Hire a bicycle — the sacred city spreads over 40 sq km, cycling is ideal",
      "Dress modestly (white is preferred by pilgrims) and remove shoes at temples",
      "Best visited early morning when light is soft and crowds are smaller",
      "Combine with Mihintale — the cradle of Buddhism in Sri Lanka, 13 km away",
      "Guided tours available to understand the historical and religious context",
    ],
    gallery: [
      {
        image: img3,
        title: "Ruwanwelisaya Stupa",
        description:
          "The great white dome of Ruwanwelisaya — built by King Dutugamunu in 140 BC — rises 103 metres and remains a living sacred site for Buddhist pilgrims.",
      },
      {
        image: img4,
        title: "Sri Maha Bodhi",
        description:
          "The sacred Bo Tree of Anuradhapura — grown from a cutting of the original Bodhi Tree under which Buddha attained enlightenment — is over 2,300 years old.",
      },
      {
        image: img5,
        title: "Jetavanarama Ruins",
        description:
          "The immense brick base of Jetavanarama Stupa — once the world's third tallest structure — still dominates the skyline of the ancient city.",
      },
      {
        image: img6,
        title: "Isurumuniya Rock Temple",
        description:
          "Carved into a granite boulder, the Isurumuniya rock temple holds the famous 'Lovers' bas-relief carving and reflects in an ancient lotus pond below.",
      },
      {
        image: img1,
        title: "Ancient Moonstone",
        description:
          "Perfectly carved semicircular moonstones at the entrances to ancient palaces depict elephants, lions, horses and geese in elaborate concentric bands.",
      },
      {
        image: img2,
        title: "Moonlight over the Dagobas",
        description:
          "As the sun sets over Anuradhapura, the white stupas glow in the golden light — an otherworldly sight that connects the present to 2,000 years of history.",
      },
    ],
  },
  {
    id: "dest-10",
    name: "Bentota",
    tags: ["South Coast", "Beach"],
    region: "Western Province",
    bestTime: "November – April",
    climate: "Tropical, 27–32°C",
    description:
      "The jewel of Sri Lanka's southwest coast, boasting pristine golden beaches, a biodiverse lagoon, water sports, and Ayurveda spas.",
    longDescription:
      "Bentota is Sri Lanka's most refined beach resort town, strung along a gorgeous stretch of the southwest coast where a large tidal lagoon meets the Indian Ocean. The town is divided by the Bentota River — on one side is the ocean beach, on the other the calm lagoon waters ideal for water sports. Bentota is famous for its Ayurveda spas and wellness retreats, drawing visitors seeking traditional Sri Lankan herbal treatments. The lagoon is a haven for water sports — jet skiing, windsurfing, boat rides, and river safaris spotting monitor lizards, kingfishers, and crocodiles. Nearby turtle hatcheries at Kosgoda protect sea turtle nesting sites, and the Brief Garden — a legendary colonial-era tropical garden — is a short drive inland.",
    highlights: [
      "Wide golden beach stretching for kilometres along the southwest coast",
      "Bentota Lagoon water sports — jet skiing, windsurfing, kayaking",
      "Ayurveda spa and traditional herbal wellness retreats",
      "River safari — monitor lizards, crocodiles, and kingfishers",
      "Turtle hatchery at Kosgoda — watch turtle releases at night",
      "Brief Garden — a legendary tropical private garden",
    ],
    travelTips: [
      "Best for couples and families seeking a relaxing, upscale beach holiday",
      "Ayurveda packages range from day treatments to 7–21 day residential programs",
      "Turtle hatchery visits: late evening (8–10pm) for best chance of seeing a release",
      "Water sports are best booked through your hotel or the lagoon boat jetty",
      "Combine with Galle Fort (45 km south) and Colombo (65 km north)",
    ],
    gallery: [
      {
        image: img4,
        title: "Bentota Beach",
        description:
          "One of Sri Lanka's finest beaches — a long, golden arc of sand washed by clear Indian Ocean waters and lined with swaying coconut palms.",
      },
      {
        image: img5,
        title: "Bentota Lagoon Water Sports",
        description:
          "The calm backwaters of the Bentota Lagoon are perfect for jet skiing, windsurfing, banana boating, and leisurely boat safaris spotting wildlife.",
      },
      {
        image: img6,
        title: "Ayurveda Wellness",
        description:
          "Bentota is Sri Lanka's Ayurveda capital — traditional herbal oil treatments, yoga, and meditation in lush garden settings overlooking the ocean.",
      },
      {
        image: img1,
        title: "Kosgoda Turtle Hatchery",
        description:
          "The Kosgoda turtle hatchery protects nests of five species of sea turtle — visitors can watch hatchlings released into the ocean under moonlight.",
      },
      {
        image: img2,
        title: "Brief Garden",
        description:
          "Brief Garden is the extraordinary creation of Bevis Bawa — a lush, romantic private estate of tropical trees, sculptures, and secret garden rooms.",
      },
      {
        image: img3,
        title: "River Safari",
        description:
          "A slow boat safari up the Bentota River reveals a hidden world of mangroves, monitor lizards basking on banks, and kingfishers darting through the reeds.",
      },
    ],
  },
  {
    id: "dest-11",
    name: "Polonnaruwa",
    tags: ["Cultural Triangle", "Historical"],
    region: "North Central Province",
    bestTime: "May – September",
    climate: "Hot & Dry, 28–35°C",
    description:
      "A well-preserved UNESCO medieval capital with royal palaces, monumental Buddha statues, and vast irrigation tanks.",
    longDescription:
      "Polonnaruwa served as Sri Lanka's second capital from the 10th to 13th centuries and is one of Asia's best-preserved ancient cities. The compact ruins are spectacular — royal palace complexes, Hindu temples, monastic gardens, and the magnificent Gal Vihara rock temple, where four colossal Buddha figures are carved directly from a single granite face. Unlike Anuradhapura's sprawling sacred city, Polonnaruwa is ideal for cycling — a flat, well-signed circuit takes in all the major ruins in half a day. The city's ancient irrigation network, including the vast Parakrama Samudra reservoir (built 12th century), demonstrates remarkable engineering sophistication. Troops of toque macaques inhabit the ruins.",
    highlights: [
      "Gal Vihara — four colossal Buddha figures carved from a single granite face",
      "Rankoth Vehera — the largest stupa in Polonnaruwa (175ft high)",
      "Royal Palace complex of King Parakramabahu I",
      "Parakrama Samudra — a vast 12th-century irrigation reservoir",
      "Ancient Hindu Shiva Devale temples",
      "Cycle the entire ancient city circuit in half a day",
    ],
    travelTips: [
      "Hire bicycles from shops near the entrance — the circuit is ideal for cycling",
      "Best visited in the morning before 10am to avoid heat",
      "The combined Cultural Triangle ticket covers Sigiriya, Anuradhapura, and Polonnaruwa",
      "Watch for toque macaques — they are wild and may steal food",
      "Habarana (30 km) is a convenient base for exploring the Cultural Triangle",
    ],
    gallery: [
      {
        image: img5,
        title: "Gal Vihara Rock Temple",
        description:
          "The crowning glory of Polonnaruwa — four magnificent Buddha figures including a 15-metre reclining Buddha carved from a single massive granite outcrop.",
      },
      {
        image: img6,
        title: "Royal Palace Ruins",
        description:
          "The seven-storey royal palace of King Parakramabahu I once stood 31 metres high — its massive brick walls and cisterns still dominate the central ruins.",
      },
      {
        image: img1,
        title: "Rankoth Vehera Stupa",
        description:
          "The great brick stupa of Rankoth Vehera rises 54 metres above the ruins — the largest in Polonnaruwa, modelled on the great stupas of Anuradhapura.",
      },
      {
        image: img2,
        title: "Parakrama Samudra",
        description:
          "The Sea of Parakrama — a vast artificial reservoir built in the 12th century — still irrigates the surrounding farmland today, 800 years after its construction.",
      },
      {
        image: img3,
        title: "Cycling the Ruins",
        description:
          "The flat ancient city is perfectly sized for cycling — a well-signed circuit winds past palaces, temples, and stupas under a canopy of ancient trees.",
      },
      {
        image: img4,
        title: "Monkeys in the Ruins",
        description:
          "Troops of toque macaques — endemic to Sri Lanka — have made the ancient ruins of Polonnaruwa their home, scampering across stone walls and palace terraces.",
      },
    ],
  },
  {
    id: "dest-12",
    name: "Kitulgala",
    tags: ["Adventure", "Nature"],
    region: "Sabaragamuwa Province",
    bestTime: "December – April",
    climate: "Warm & Wet, 25–32°C",
    description:
      "Sri Lanka's premier adventure hub on the Kelani River — famous for white-water rafting, canyoning, and jungle trekking.",
    longDescription:
      "Kitulgala is Sri Lanka's adventure capital, set in a dramatic valley where the fast-flowing Kelani River cuts through dense rainforest. It is the premier destination for white-water rafting in the country, offering Grade 3–4 rapids on a thrilling 4-kilometre stretch. The surrounding jungle is also the filming location of David Lean's Oscar-winning 'The Bridge on the River Kwai' (1957). Beyond rafting, Kitulgala offers canyoning, waterfall abseiling, mountain biking, multi-pitch rock climbing, jungle canopy walks, and birdwatching for rare endemic species. The dense forests harbour fascinating wildlife including 23 species of endemic birds.",
    highlights: [
      "White-water rafting on Grade 3–4 Kelani River rapids",
      "Canyoning and waterfall abseiling through jungle gorges",
      "Canopy walkways through the rainforest",
      "Birdwatching — 23 endemic bird species in the area",
      "Visit the Bridge on the River Kwai film location",
      "Multi-pitch rock climbing and mountain biking trails",
    ],
    travelTips: [
      "Book rafting through a safety-certified operator — Kitulgala Adventures is well-regarded",
      "Wear clothes you don't mind getting wet — waterproof bags for cameras",
      "The best rafting season is December to April (higher water levels)",
      "Combine with a day trip from Colombo or as part of a hill country loop",
      "Jungle trekking and birdwatching are best in early morning",
    ],
    gallery: [
      {
        image: img6,
        title: "White-Water Rafting",
        description:
          "The Kelani River's Grade 3–4 rapids provide an adrenaline-pumping rafting adventure through dramatic gorges and dense rainforest — Sri Lanka's best white water.",
      },
      {
        image: img1,
        title: "Jungle Canyoning",
        description:
          "Rappel down waterfall-laced canyon walls, swim through crystal pools, and scramble through ancient rock formations deep in Kitulgala's untouched rainforest.",
      },
      {
        image: img2,
        title: "Kelani River Valley",
        description:
          "The lush Kelani River valley cuts through some of Sri Lanka's most dramatic rainforest scenery — an emerald gorge of towering trees and mist-hung ridgelines.",
      },
      {
        image: img3,
        title: "Canopy Walkways",
        description:
          "Suspended walkways through the rainforest canopy offer an aerial perspective on Kitulgala's extraordinary biodiversity — birds, butterflies, and tree-dwelling creatures.",
      },
      {
        image: img4,
        title: "Endemic Birdwatching",
        description:
          "Kitulgala is a top birding destination — 23 endemic Sri Lankan birds including the Sri Lanka blue magpie, Ceylon hanging parrot, and red-faced malkoha.",
      },
      {
        image: img5,
        title: "River Kwai Film Site",
        description:
          "The actual filming location of David Lean's 1957 masterpiece 'The Bridge on the River Kwai' — pillars of the original film-set bridge still stand in the Kelani River.",
      },
    ],
  },
  {
    id: "dest-13",
    name: "Jaffna",
    tags: ["Northern", "Cultural"],
    region: "Northern Province",
    bestTime: "January – March, July–September",
    climate: "Hot & Dry, 27–36°C",
    description:
      "Sri Lanka's northernmost peninsula and cultural heart of Tamil heritage, with ancient temples, Dutch Fort, and island adventures.",
    longDescription:
      "Jaffna is the cultural capital of Sri Lanka's Tamil-speaking north — a city with a distinct identity, language, cuisine, and centuries of Hindu heritage. After years of conflict, Jaffna has reemerged as one of Sri Lanka's most fascinating and authentic travel destinations. The Jaffna Fort — built by the Portuguese and expanded by the Dutch — is the largest Dutch fort in Asia outside the Netherlands. The city's kovils (Hindu temples) are vivid with colour and devotion. The surrounding Jaffna Peninsula and its islands — accessible by causeway and ferry — reveal pristine beaches, ancient temples on stilts above the lagoon, and the wild Delft Island with its feral ponies descended from Portuguese horses.",
    highlights: [
      "Jaffna Fort — the largest Dutch fort in Asia outside the Netherlands",
      "Nallur Kandaswamy Kovil — a magnificent 13th-century Hindu temple",
      "Casuarina Beach — the finest beach on the Jaffna peninsula",
      "Delft Island — feral ponies, ancient baobab trees, and coral walls",
      "Kayts Island and the pilgrimage temple of Nainativu",
      "Jaffna cuisine — uniquely spiced, the hottest in Sri Lanka",
    ],
    travelTips: [
      "Fly Colombo–Jaffna (45 min) or take the Yal Devi express train (6–7 hours)",
      "Hire a tuk-tuk or bicycle to explore the peninsula and island causeways",
      "Nallur Kovil is most spectacular during the July–August festival season",
      "Try jaffna crab curry, thosai, and string hoppers at local restaurants",
      "Delft Island: catch the morning ferry from Kurikadduwan jetty",
    ],
    gallery: [
      {
        image: img1,
        title: "Jaffna Fort",
        description:
          "The vast star-shaped Dutch fortification dominates the Jaffna waterfront — a reminder of centuries of Portuguese and Dutch colonial presence in the north.",
      },
      {
        image: img2,
        title: "Nallur Kovil",
        description:
          "The golden towers and vivid colours of the Nallur Kandaswamy Kovil rise above Jaffna — a magnificent Hindu temple complex founded in the 13th century.",
      },
      {
        image: img3,
        title: "Delft Island Wild Ponies",
        description:
          "Descendants of Portuguese horses, the feral ponies of Delft Island roam freely across an ancient coral-walled landscape unlike anywhere else in Sri Lanka.",
      },
      {
        image: img4,
        title: "Casuarina Beach",
        description:
          "A long, uncrowded beach of silver-white sand shaded by casuarina pines — the finest beach on the Jaffna peninsula and a peaceful escape from the city.",
      },
      {
        image: img5,
        title: "Nainativu Temple",
        description:
          "Perched on a tiny island in the Palk Strait, the Naga Pooshani Ambal Kovil is a revered Hindu pilgrimage site accessible only by a short boat journey.",
      },
      {
        image: img6,
        title: "Jaffna Cuisine",
        description:
          "Jaffna's cuisine is the spiciest and most distinctive in Sri Lanka — fiery crab curry, kothu rotti, thosai, and palm-toddy are unmissable local experiences.",
      },
    ],
  },
  {
    id: "dest-14",
    name: "Negombo",
    tags: ["West Coast", "Gateway"],
    region: "Western Province",
    bestTime: "November – April",
    climate: "Tropical, 27–32°C",
    description:
      "A lively coastal town just minutes from the airport — wide sandy beaches, Dutch canals, and a famous fish market.",
    longDescription:
      "Negombo is the perfect introduction to Sri Lanka — a relaxed coastal town situated just 10 kilometres from Bandaranayake International Airport, making it the natural first or last stop of any Sri Lanka itinerary. The town has a distinctive Portuguese and Dutch colonial heritage reflected in its Catholic churches, Dutch canal system, and old fort remnants. The Negombo fish market — one of the most active in Sri Lanka — is a daily spectacle of colour, chaos, and commerce, best visited at dawn when the outrigger fishing boats return. A wide, sandy beach stretches north for kilometres, backed by beach hotels and seafood restaurants.",
    highlights: [
      "Negombo fish market — visit at dawn when boats return with the catch",
      "Cycling along the Dutch canal system",
      "St. Mary's Church — one of the finest examples of Portuguese Catholic heritage",
      "Muthurajawela Wetlands boat safari — mangroves and bird watching",
      "Long sandy beach perfect for swimming and evening walks",
      "Browse Negombo bazaar for batik, spices, and handicrafts",
    ],
    travelTips: [
      "Ideal as a first/last night — removes pressure of airport transfers",
      "Fish market: arrive by 6am for the most dramatic activity",
      "Hire a bicycle or tuk-tuk to explore the Dutch canals and old town",
      "Muthurajawela boat safaris depart from the bridge on the Hamilton Canal",
      "Beach safety: the sea can have strong currents — check conditions before swimming",
    ],
    gallery: [
      {
        image: img2,
        title: "Negombo Fish Market",
        description:
          "Negombo's fish market at dawn is one of Sri Lanka's most vivid spectacles — outrigger fishing boats unload their catch as traders haggle in the early morning light.",
      },
      {
        image: img3,
        title: "Negombo Beach",
        description:
          "A long stretch of golden sand curves north from the town centre — palm-shaded, relatively uncrowded, and backed by beach hotels and fresh seafood restaurants.",
      },
      {
        image: img4,
        title: "Dutch Canal System",
        description:
          "Negombo's network of Dutch-era canals extends along the coast — explore by bicycle or boat, passing through backwater villages, mangroves, and old colonial bridges.",
      },
      {
        image: img5,
        title: "St. Mary's Church",
        description:
          "One of the finest Portuguese colonial churches in Sri Lanka, St. Mary's interior ceiling is covered with remarkable painted murals depicting the life of Christ.",
      },
      {
        image: img6,
        title: "Muthurajawela Wetlands",
        description:
          "The Muthurajawela marshes form Sri Lanka's largest mangrove wetland — a boat safari reveals purple herons, crocodiles, and over 100 migratory bird species.",
      },
      {
        image: img1,
        title: "Outrigger Fishing Boats",
        description:
          "Negombo's oruwa outrigger canoes are a symbol of the town's seafaring heritage — colourfully painted and sailed by multi-generational Catholic fishing families.",
      },
    ],
  },
  {
    id: "dest-15",
    name: "Wilpattu",
    tags: ["Wildlife", "Safari"],
    region: "North Western Province",
    bestTime: "February – October",
    climate: "Hot & Dry, 27–36°C",
    description:
      "Sri Lanka's largest and oldest national park, renowned for natural lakes that attract leopards, elephants, and sloth bears.",
    longDescription:
      "Wilpattu is Sri Lanka's largest national park and one of its oldest — covering over 1,300 square kilometres of dry zone forest interspersed with its defining feature: villus, natural circular lakes of crystal-clear water surrounded by white sand that attract an extraordinary concentration of wildlife. Wilpattu is Sri Lanka's best-kept secret for safari — less visited than Yala, it offers equally impressive wildlife encounters in a far more pristine and uncrowded environment. Leopards are regularly spotted in the dense jungle, sloth bears forage along the lake edges at dusk, and large elephant herds wade through the villus. Over 200 bird species inhabit the park.",
    highlights: [
      "Leopard spotting in dense, uncrowded jungle environment",
      "Natural 'villu' lakes — crystal-clear white-sand water holes",
      "Sloth bear sightings at dusk along lake margins",
      "Large herds of Sri Lankan elephants at the villus",
      "Over 200 bird species including painted storks and fish eagles",
      "Far fewer tourists than Yala — a more authentic safari experience",
    ],
    travelTips: [
      "Wilpattu sees far fewer visitors than Yala — book ahead for peak months",
      "Best sightings: early morning (6–10am) and late afternoon (3–6pm) safaris",
      "Nearest town is Nochchiyagama — combine with Anuradhapura (30 km)",
      "The park entrance road is rough — 4WD jeeps are essential",
      "A half-day and a full-day safari together give the best wildlife coverage",
    ],
    gallery: [
      {
        image: img3,
        title: "The Villu Lakes",
        description:
          "Wilpattu's iconic villus — natural circular lakes with blindingly white sand margins — are the heart of the park and the focal point for all wildlife activity.",
      },
      {
        image: img4,
        title: "Leopard in Wilpattu",
        description:
          "Wilpattu's thick jungle gives its leopard population excellent cover — sightings require patience but are deeply rewarding in this quiet, uncrowded park.",
      },
      {
        image: img5,
        title: "Sloth Bear at Dusk",
        description:
          "As the light fades, sloth bears emerge to forage along Wilpattu's lake edges — an intimate encounter with one of Asia's most elusive and rarely seen mammals.",
      },
      {
        image: img6,
        title: "Elephant at the Villu",
        description:
          "Herds of Sri Lankan elephants wade through the shallow villu lakes in the golden afternoon light — a scene of breathtaking wild Africa-like beauty.",
      },
      {
        image: img1,
        title: "Bird Life",
        description:
          "Painted storks, spoonbills, grey herons, and white-bellied sea eagles are among the 200+ bird species that make Wilpattu's lakes and forest their home.",
      },
      {
        image: img2,
        title: "Pristine Jungle Tracks",
        description:
          "Wilpattu's narrow, overgrown tracks wind through ancient dry-zone forest — a deeply immersive safari experience with almost no other vehicles in sight.",
      },
    ],
  },
  {
    id: "dest-16",
    name: "Haputale",
    tags: ["Hill Country", "Scenic"],
    region: "Uva Province",
    bestTime: "December – March",
    climate: "Cool & Misty, 14–24°C",
    description:
      "A hidden mountainous town perched at the southern edge of hill country with sweeping valley views and misty tea estate treks.",
    longDescription:
      "Haputale is one of Sri Lanka's most dramatically situated towns — perched at 1,431 metres on a narrow ridge at the southern edge of the central highlands, with the misty valleys and lowland plains of the south stretching infinitely below on clear days. Far less visited than nearby Ella, Haputale rewards travellers with genuine highland solitude. Lipton's Seat — a spectacular mountaintop viewpoint at the edge of the Dambatenne tea estate — is reachable by a beautiful walk through the estate. The Adisham Bungalow is a 1930s English country house perched amid the mist, now a Benedictine monastery. The scenic train journey through Haputale station is considered one of the finest on the island.",
    highlights: [
      "Lipton's Seat — sweeping highland panorama from the estate mountaintop",
      "Tea estate walk through Dambatenne — one of Sri Lanka's finest",
      "Adisham Bungalow — a 1930s English country house monastery",
      "Scenic train journey through Haputale station",
      "Misty forest treks and dramatic cliff-edge walks",
      "Idalgashinna — a nearby hillside village with spectacular valley views",
    ],
    travelTips: [
      "Visit Lipton's Seat early morning for clear views before clouds roll in",
      "Walk up through the tea estate (2–3 hours each way) or take a tuk-tuk",
      "Adisham Bungalow is open to visitors on weekends (9am–12pm, 1:30–4pm)",
      "The train through Haputale from Ella is spectacular — sit on the left side",
      "Combine with Ella (35 km by train) and Nuwara Eliya (50 km north)",
    ],
    gallery: [
      {
        image: img4,
        title: "Lipton's Seat View",
        description:
          "Sir Thomas Lipton himself surveyed his tea empire from this mountaintop vantage point — a 360° panorama of endless rolling tea estates disappearing into morning mist.",
      },
      {
        image: img5,
        title: "Dambatenne Tea Estate",
        description:
          "The Dambatenne estate — founded by Sir Thomas Lipton in 1890 — is one of Sri Lanka's most beautiful and historically significant tea-growing landscapes.",
      },
      {
        image: img6,
        title: "Adisham Bungalow",
        description:
          "This 1930s Tudor-style country house built for a British planter now serves as a quiet Benedictine monastery, perched amid misty gardens above the southern plains.",
      },
      {
        image: img1,
        title: "Haputale Ridge at Sunrise",
        description:
          "The narrow ridge on which Haputale sits offers sunrise views simultaneously across the highland north and the misty lowland south — a uniquely dramatic location.",
      },
      {
        image: img2,
        title: "Train Through Hill Country",
        description:
          "Haputale station sits on one of the most beautiful sections of the Sri Lanka railway — cloud-shrouded tunnels, viaducts, and vertiginous valley views at every curve.",
      },
      {
        image: img3,
        title: "Misty Tea Valleys",
        description:
          "The southern slopes below Haputale are carpeted in tea bushes disappearing into low cloud — a landscape of extraordinary moody beauty on overcast highland mornings.",
      },
    ],
  },
  {
    id: "dest-17",
    name: "Weligama",
    tags: ["South Coast", "Surfing"],
    region: "Southern Province",
    bestTime: "November – April",
    climate: "Tropical, 28–33°C",
    description:
      "A vast crescent bay with calm, beginner-friendly surf, whale watching, yoga retreats, and the iconic stilt fishermen.",
    longDescription:
      "Weligama — meaning 'sandy village' — boasts one of the largest and most sheltered bays on Sri Lanka's south coast. Its wide, gently curving beach is divided into distinct sections: the left side shelters a calm beginner surf zone with numerous surf schools, while the right side offers more powerful breaks for intermediate surfers. Weligama Bay is also the home of Sri Lanka's iconic stilt fishermen, who perch on slim wooden poles driven into the shallows to fish using traditional rods. The bay faces south, giving it excellent access to whale watching season (December–April). The town itself has a relaxed, authentic character with fewer tourist traps than nearby Mirissa.",
    highlights: [
      "Iconic stilt fishermen perched on poles in the bay",
      "Beginner-friendly surf with numerous surf schools",
      "Whale and dolphin watching (December–April)",
      "Long, uncrowded bay beach with calm swimming areas",
      "Yoga and wellness retreats along the beachfront",
      "Taprobane Island — a private island estate just offshore",
    ],
    travelTips: [
      "Best for beginner and intermediate surfers — many affordable surf schools",
      "Stilt fishermen are most active in the early morning and late afternoon",
      "Whale watching boats depart from Mirissa harbor (5 km east)",
      "Taprobane Island can be viewed from the shore or rented for a splurge",
      "Combine Weligama with Mirissa (5 km) and Galle Fort (28 km)",
    ],
    gallery: [
      {
        image: img5,
        title: "Stilt Fishermen of Weligama",
        description:
          "Weligama's iconic stilt fishermen balance on slender poles in the bay — a centuries-old fishing tradition and one of Sri Lanka's most photographed images.",
      },
      {
        image: img6,
        title: "Weligama Bay",
        description:
          "The vast crescent of Weligama Bay sweeps in a gentle arc — a wide, golden beach with calm sections ideal for swimming and gentle surf perfect for beginners.",
      },
      {
        image: img1,
        title: "Beginner Surf Lessons",
        description:
          "Weligama's gentle, consistent waves make it Sri Lanka's best beginner surf destination — surf schools line the beach offering lessons from qualified instructors.",
      },
      {
        image: img2,
        title: "Taprobane Island",
        description:
          "Just 150 metres offshore, Taprobane is a private island covered in a lush tropical garden and an exclusive colonial-era villa — one of Sri Lanka's most unique escapes.",
      },
      {
        image: img3,
        title: "Beach Yoga at Weligama",
        description:
          "The flat stretch of Weligama's beach is a popular setting for morning yoga sessions — the bay is calm, the air warm, and the backdrop spectacularly tropical.",
      },
      {
        image: img4,
        title: "Sunset at Weligama",
        description:
          "Weligama's south-facing beach captures the last golden light of day beautifully — surfers riding the final sets silhouetted against a blazing tropical sunset.",
      },
    ],
  },
  {
    id: "dest-18",
    name: "Dambulla",
    tags: ["Cultural Triangle", "Spiritual"],
    region: "North Central Province",
    bestTime: "April – September",
    climate: "Hot & Dry, 27–34°C",
    description:
      "Home to the magnificent Golden Temple — a UNESCO-listed cave complex with 150 Buddha statues and ancient murals.",
    longDescription:
      "The Dambulla Cave Temple — Sri Lanka's largest and best-preserved cave temple complex — was established as a royal rock temple by King Valagamba in the 1st century BC and has been in continuous use for over 2,000 years. It was designated a UNESCO World Heritage Site in 1991. Five caves cut into a massive granite outcrop contain 153 Buddha statues, 3 statues of Sri Lankan kings, and 4 statues of gods, all surrounded by extraordinarily detailed murals covering 2,100 square metres of cave walls and ceilings. The views from the rock temple's terrace over the surrounding jungle and the distant Sigiriya rock (17 km away) are magnificent. The golden statue of the Buddha at the foot of the rock is visible for kilometres.",
    highlights: [
      "Five UNESCO-listed cave temples with 153 ancient Buddha statues",
      "2,100 sq metres of intricate cave murals covering walls and ceilings",
      "View of Sigiriya Rock from the cave temple terrace",
      "Massive golden standing Buddha statue at the base of the rock",
      "Continuous religious use for over 2,000 years",
      "Combine with Sigiriya Rock (17 km) and Pidurangala",
    ],
    travelTips: [
      "Remove shoes before entering the cave temples (mandatory)",
      "Dress modestly — cover shoulders and legs; white clothing preferred",
      "Visit early morning (7–9am) to avoid heat and tour groups",
      "Beware of monkeys — they will take food and bags if you're not careful",
      "The climb to the cave entrance takes about 20 minutes — take it slow",
    ],
    gallery: [
      {
        image: img6,
        title: "The Golden Temple",
        description:
          "The gleaming 30-metre golden Buddha statue at the base of Dambulla Rock is visible for kilometres — a modern landmark complementing the ancient caves above.",
      },
      {
        image: img1,
        title: "Cave Temple Interiors",
        description:
          "Inside Dambulla's caves, golden Buddha statues of every size fill every surface — reclining, seated, and standing — surrounded by vivid ancient painted murals.",
      },
      {
        image: img2,
        title: "Ancient Cave Murals",
        description:
          "Over 2,100 square metres of intricate painted murals cover the cave walls and ceilings — depicting scenes from the Jataka tales and the life of the Buddha.",
      },
      {
        image: img3,
        title: "View from the Rock Terrace",
        description:
          "From the cave temple terrace, the surrounding jungle spreads to the horizon — and on clear days, Sigiriya's flat-topped rock is visible 17 km to the northeast.",
      },
      {
        image: img4,
        title: "Reclining Buddha",
        description:
          "The 15-metre reclining Parinirvana Buddha in Cave III is one of the finest and most serene representations of the Buddha's final enlightenment in all of Asia.",
      },
      {
        image: img5,
        title: "Monkeys at Dambulla",
        description:
          "Troops of toque macaques inhabit the Dambulla rock — entertaining but mischievous companions as you make the 350-step ascent to the ancient cave entrance.",
      },
    ],
  },
  {
    id: "dest-19",
    name: "Hatton",
    tags: ["Hill Country", "Tea Estates"],
    region: "Central Province",
    bestTime: "December – April",
    climate: "Cool & Misty, 14–22°C",
    description:
      "An emerald-green gateway to tea country — a base for Adam's Peak pilgrimages, Horton Plains hikes, and scenic train rides.",
    longDescription:
      "Hatton is a small highland town deep in the heart of Sri Lanka's tea country, serving as the gateway to some of the island's most spectacular highland experiences. The surrounding landscape is a sea of rolling tea estates, thundering waterfalls, and cloud-capped mountains. Hatton is the starting point for the famous Adam's Peak (Sri Pada) pilgrimage — a sacred mountain at 2,243 metres considered holy by Buddhists, Hindus, Muslims, and Christians alike. The pilgrimage season runs December to May, with thousands climbing through the night to witness the spectacular sunrise from the summit. Nearby, the Devon and St. Clair Falls are Sri Lanka's widest and most beautiful waterfalls.",
    highlights: [
      "Adam's Peak (Sri Pada) — sacred summit pilgrimage climb",
      "Sunrise from the summit of Adam's Peak — a life-changing experience",
      "Devon Falls and St. Clair Falls — Sri Lanka's most beautiful waterfalls",
      "Tea estate walks and factory tours around Hatton",
      "Scenic train journey from Colombo to Hatton through tea country",
      "Horton Plains National Park and World's End (40 km from Hatton)",
    ],
    travelTips: [
      "Adam's Peak season: December–May; the night climb takes 3–4 hours",
      "Start the Adam's Peak climb at 2am to reach the summit by sunrise",
      "Wear layers — summit temperatures can drop to 5–10°C at night",
      "Devon and St. Clair Falls are a short tuk-tuk ride from Hatton town",
      "The train from Colombo Fort to Hatton (6 hours) is scenic and highly recommended",
    ],
    gallery: [
      {
        image: img1,
        title: "Adam's Peak Summit",
        description:
          "Sri Pada — Adam's Peak — is Sri Lanka's most sacred mountain, a 2,243-metre pilgrimage peak revered by four religions and climbed by millions each year.",
      },
      {
        image: img2,
        title: "Sunrise from the Summit",
        description:
          "The triangular shadow cast by Adam's Peak onto the clouds below at sunrise is one of the most extraordinary natural phenomena in all of Asia.",
      },
      {
        image: img3,
        title: "St. Clair Falls",
        description:
          "Known as the Little Niagara of Sri Lanka, St. Clair Falls plunges in two spectacular curtains across a wide granite face surrounded by tea estate hills.",
      },
      {
        image: img4,
        title: "Devon Falls",
        description:
          "Plunging 97 metres into a densely forested gorge, Devon Falls is one of Sri Lanka's most dramatic waterfalls — glimpsed from the Colombo–Hatton train.",
      },
      {
        image: img5,
        title: "Tea Estate Landscape",
        description:
          "The Hatton area is blanketed in some of the world's finest tea-growing terrain — rolling green hills, low cloud, and the scent of fresh tea on the highland breeze.",
      },
      {
        image: img6,
        title: "Night Pilgrimage Climb",
        description:
          "Thousands of pilgrims make the lantern-lit night ascent of Adam's Peak each week during the season — a moving, communal, and deeply spiritual experience.",
      },
    ],
  },
  {
    id: "dest-20",
    name: "Colombo",
    tags: ["West Coast", "City"],
    region: "Western Province",
    bestTime: "December – April",
    climate: "Hot & Humid, 26–32°C",
    description:
      "The bustling seaside capital blending colonial architecture, modern skyscrapers, temples, mosques, and vibrant Pettah market.",
    longDescription:
      "Colombo is Sri Lanka's commercial capital and largest city — a dynamic, cosmopolitan port city where colonial Dutch and British architecture sits beside gleaming glass towers, ancient Buddhist temples, Hindu kovils, and Portuguese-era mosques. The Pettah bazaar district is a sensory overload of colour and commerce. Galle Face Green is an iconic oceanfront esplanade perfect for evening strolls. The Gangaramaya Buddhist temple complex is a treasure trove of artistic offerings from around the world. The National Museum houses Sri Lanka's most important historical artefacts. A booming restaurant scene spans everything from street-food kothu rotti stalls to world-class fine dining.",
    highlights: [
      "Galle Face Green — iconic oceanfront promenade and kite-flying spot",
      "Gangaramaya Temple — a fascinating Buddhist complex of global offerings",
      "Pettah Bazaar — Sri Lanka's most vibrant and chaotic market district",
      "Dutch and British colonial architecture in the Fort district",
      "Beira Lake and the Seema Malaka floating temple",
      "National Museum — Sri Lanka's foremost historical collection",
    ],
    travelTips: [
      "Colombo's rush hour (7–9am, 5–7pm) is severe — allow extra travel time",
      "Pettah market is best visited mid-morning on weekdays",
      "Use PickMe or Uber — reliable and affordable compared to negotiating tuk-tuks",
      "Gangaramaya Temple is open daily; dress modestly",
      "Colombo 3 (Kollupitiya) and Colombo 7 (Cinnamon Gardens) have the best cafes and restaurants",
    ],
    gallery: [
      {
        image: img2,
        title: "Galle Face Green",
        description:
          "Colombo's iconic oceanfront esplanade stretches along the seafront — kite flyers, street food vendors, and evening strollers gather as the sun sets over the Indian Ocean.",
      },
      {
        image: img3,
        title: "Gangaramaya Temple",
        description:
          "Colombo's most atmospheric Buddhist temple is a remarkable collection of sculptures, paintings, and religious offerings gifted from Buddhist countries around the world.",
      },
      {
        image: img4,
        title: "Pettah Bazaar",
        description:
          "The Pettah is Colombo's oldest and most chaotic market district — a maze of streets crammed with spice sellers, fabric merchants, gem dealers, and street food stalls.",
      },
      {
        image: img5,
        title: "Colonial Fort District",
        description:
          "The old Fort district preserves Colombo's Dutch and British colonial heritage — grand white buildings, the old lighthouse, and the clock tower remain from the imperial era.",
      },
      {
        image: img6,
        title: "Seema Malaka Floating Temple",
        description:
          "Designed by Geoffrey Bawa, this extraordinary floating temple sits on Beira Lake in the heart of the city — a serene island of Buddha statues amid the urban chaos.",
      },
      {
        image: img1,
        title: "Colombo City Skyline",
        description:
          "Colombo's modern skyline of glass towers rises beside the Indian Ocean waterfront — the port city is transforming rapidly into one of South Asia's most dynamic capitals.",
      },
    ],
  },
];

// ─── Cinematic Autoplay Gallery ───────────────────────────────────────────────

function CinematicGallery({ slides }: { slides: GallerySlide[] }) {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const thumbsRef = useRef<HTMLDivElement>(null);
  //   const AUTOPLAY_MS = 4500;

  const goTo = useCallback(
    (index: number) => {
      if (animating || index === active) return;
      setAnimating(true);
      setActive(index);
      setTimeout(() => setAnimating(false), 700);
      if (thumbsRef.current) {
        const thumb = thumbsRef.current.children[index] as HTMLElement;
        if (thumb)
          thumb.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
      }
    },
    [active, animating],
  );

  const next = useCallback(
    () => goTo((active + 1) % slides.length),
    [active, goTo, slides.length],
  );
  const prev = useCallback(
    () => goTo((active - 1 + slides.length) % slides.length),
    [active, goTo, slides.length],
  );

  //   useEffect(() => {
  //     const t = setInterval(next, AUTOPLAY_MS);
  //     return () => clearInterval(t);
  //   }, [next]);

  const current = slides[active];

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden bg-black"
      style={{ height: "500px" }}
    >
      {/* Progress bar */}
      {/* <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/10 z-20">
        <motion.div
          key={active}
          className="h-full bg-amber-400/80"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
        />
      </div> */}

      {/* Background image */}
      <AnimatePresence mode="sync">
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.85, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={current.image}
            alt={current.title}
            fill
            className="object-cover"
            style={{ filter: "brightness(1.25) saturate(1.1)" }}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/15"
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/15"
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>

      {/* Bottom layout */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end gap-6 px-6 pb-5">
        {/* Left — slide info */}
        <div className="flex-1 min-w-0 max-w-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={active + "-info"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <CameraIcon className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">
                  {active + 1} / {slides.length}
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-1.5">
                {current.title}
              </h3>
              <p className="text-white/65 text-sm leading-relaxed line-clamp-2">
                {current.description}
              </p>
            </motion.div>
          </AnimatePresence>
          {/* Dots */}
          <div className="flex gap-1.5 mt-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1 rounded-full transition-all duration-500 ${i === active ? "w-7 bg-amber-400" : "w-2 bg-white/30 hover:bg-white/50"}`}
              />
            ))}
          </div>
        </div>

        {/* Right — thumbnails */}
        <div
          ref={thumbsRef}
          className="flex gap-2.5 overflow-x-auto pb-0.5 max-w-[52%] shrink-0"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{ scrollSnapAlign: "start" }}
              className={`relative shrink-0 w-32 h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                i === active
                  ? "border-amber-400 shadow-lg shadow-amber-500/30 opacity-100 scale-100"
                  : "border-white/10 opacity-55 hover:opacity-90 hover:border-white/30 scale-95 hover:scale-100"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                sizes="128px"
              />
              <div
                className={`absolute inset-0 transition-colors duration-300 ${i === active ? "bg-black/10" : "bg-black/45"}`}
              />
              <div className="absolute bottom-0 left-0 right-0 p-1.5">
                <p className="text-white text-[10px] font-semibold leading-tight line-clamp-2 text-left drop-shadow">
                  {slide.title}
                </p>
              </div>
              {i === active && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Destination Detail Page ──────────────────────────────────────────────────

export default function DestinationDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const dest = destinations.find((d) => d.id === params.id) ?? destinations[0];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* ── Hero — same pattern as other pages ── */}
      <div className="relative h-[60vh] min-h-[440px] overflow-hidden">
        <Image
          src={dest.gallery[0].image}
          alt={dest.name}
          fill
          priority
          className="object-cover scale-105"
          style={{ filter: "brightness(0.45) saturate(1.15)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-transparent" />

        {/* Back */}
        <div className="absolute top-6 left-6 z-20">
          <Link
            href="/destinations"
            className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Destinations
          </Link>
        </div>

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {dest.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-3 drop-shadow-2xl">
                {dest.name}
              </h1>
              <p className="text-amber-300 text-sm font-semibold mb-4 tracking-wide">
                {dest.region}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                  <MapPinIcon className="w-4 h-4 text-amber-400" />
                  {dest.region}
                </div>
                <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                  <SunIcon className="w-4 h-4 text-amber-400" />
                  Best: {dest.bestTime}
                </div>
                <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                  <CloudIcon className="w-4 h-4 text-amber-400" />
                  {dest.climate}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left — main */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-amber-500" />
                <span className="text-xs uppercase tracking-widest text-amber-600 font-bold">
                  Overview
                </span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                About {dest.name}
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                {dest.longDescription}
              </p>
            </motion.div>

            {/* Cinematic Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-amber-500" />
                <span className="text-xs uppercase tracking-widest text-amber-600 font-bold">
                  Gallery
                </span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Highlights & Scenery
              </h2>
              <CinematicGallery slides={dest.gallery} />
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-amber-500" />
                <span className="text-xs uppercase tracking-widest text-amber-600 font-bold">
                  Top Experiences
                </span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Must-Do Highlights
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {dest.highlights.map((h, i) => (
                  <motion.div
                    key={h}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3 bg-white border border-stone-100 rounded-xl p-4"
                  >
                    <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <CheckIcon className="w-3.5 h-3.5 text-amber-600" />
                    </div>
                    <span className="text-sm text-gray-700 leading-relaxed">
                      {h}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Travel Tips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-amber-500" />
                <span className="text-xs uppercase tracking-widest text-amber-600 font-bold">
                  Insider Tips
                </span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Travel Tips
              </h2>
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 space-y-3">
                {dest.travelTips.map((tip, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-sm text-amber-900"
                  >
                    <span className="shrink-0 w-5 h-5 bg-amber-500 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    {tip}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — sticky sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {/* Quick info card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6"
              >
                <h4 className="font-serif font-bold text-gray-900 mb-4 text-lg">
                  Quick Info
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm">
                    <MapPinIcon className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">
                        Region
                      </div>
                      <div className="text-gray-700 font-medium">
                        {dest.region}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <CalendarIcon className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">
                        Best Time to Visit
                      </div>
                      <div className="text-gray-700 font-medium">
                        {dest.bestTime}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <SunIcon className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">
                        Climate
                      </div>
                      <div className="text-gray-700 font-medium">
                        {dest.climate}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-100">
                  <div className="flex flex-wrap gap-1.5">
                    {dest.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Book CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6"
              >
                <h4 className="font-serif font-bold text-gray-900 mb-2">
                  Visit {dest.name}?
                </h4>
                <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                  Let us build a personalised tour that includes {dest.name} and
                  other Sri Lanka highlights.
                </p>
                <Link
                  href="/packages"
                  className="w-full py-3.5 px-6 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-200/50 mb-3"
                >
                  See Packages
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full py-3 px-6 border border-amber-200 text-amber-700 font-medium rounded-xl transition-colors flex items-center justify-center gap-2 hover:bg-amber-700 hover:text-white hover:border-amber-700 duration-300"
                >
                  Plan Custom Tour
                </Link>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6"
              >
                <h4 className="font-serif font-bold text-gray-900 mb-4">
                  Need Help?
                </h4>
                <a
                  href="tel:+94000000000"
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-amber-700 transition-colors mb-3 group"
                >
                  <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-amber-100 transition-colors">
                    <PhoneIcon className="w-4 h-4 text-amber-600" />
                  </div>
                  +94 000 000 000
                </a>
                <a
                  href="mailto:info@magicalparadise.com"
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-amber-700 transition-colors group"
                >
                  <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-amber-100 transition-colors">
                    <MailIcon className="w-4 h-4 text-amber-600" />
                  </div>
                  info@magicalparadise.com
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
