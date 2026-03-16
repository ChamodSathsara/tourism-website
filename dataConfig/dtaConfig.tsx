import img1 from "../assest/Packages/1.jpg";
import img2 from "../assest/Packages/2.jpg";
import img3 from "../assest/Packages/3.jpg";
import img4 from "../assest/Packages/4.jpg";
import img5 from "../assest/Packages/5.jpg";
import img6 from "../assest/Packages/6.jpg";

import Timg1 from "../assest/DayTours/1.jpg";
import Timg2 from "../assest/DayTours/2.jpg";
import Timg3 from "../assest/DayTours/3.jpg";
import Timg4 from "../assest/DayTours/4.jpg";
import Timg5 from "../assest/DayTours/5.jpg";
import Timg6 from "../assest/DayTours/6.jpg";
import Timg7 from "../assest/DayTours/7.jpg";

import Eimg1 from "../assest/experiences/1.jpg";
import Eimg2 from "../assest/experiences/2.jpg";
import Eimg3 from "../assest/experiences/3.jpg";
import Eimg4 from "../assest/experiences/4.jpg";
import Eimg5 from "../assest/experiences/5.jpg";
import Eimg6 from "../assest/experiences/6.jpg";

import Himg1 from "../assest/hotels/1.jpg";
import Himg2 from "../assest/hotels/2.jpg";
import Himg3 from "../assest/hotels/3.jpg";
import Himg4 from "../assest/hotels/4.jpg";

import {
  CameraIcon,
  LeafIcon,
  ShipIcon,
  CastleIcon,
  SparklesIcon,
  UtensilsIcon,
} from "lucide-react";

import type { Accommodation, Package } from "./types";
import type { Destination } from "./types";
import type { Experience } from "./types";

export const dayPackages: Package[] = [
  {
    id: "d1",
    title: "Sigiriya & Dambulla Day Tour",
    duration: "1 Day",
    price: "$89",
    badge: "Most Popular",
    tags: ["Culture", "History"],
    description:
      "Climb the legendary Lion Rock fortress and explore the stunning Dambulla Cave Temple in a single epic day.",
    image: img1,
  },
  {
    id: "d2",
    title: "Kandy City & Temple Tour",
    duration: "1 Day",
    price: "$69",
    badge: null,
    tags: ["Culture", "Spiritual"],
    description:
      "Visit the sacred Temple of the Tooth Relic, Kandy Lake, and the botanical gardens in Sri Lanka's hill capital.",
    image: img3,
  },
  {
    id: "d3",
    title: "Colombo City Explorer",
    duration: "1 Day",
    price: "$55",
    badge: null,
    tags: ["City", "Shopping"],
    description:
      "Discover colonial architecture, vibrant markets, seaside promenades, and the best street food in Colombo.",
    image: img2,
  },
  {
    id: "d4",
    title: "Yala Half-Day Safari",
    duration: "1 Day",
    price: "$120",
    badge: "Thrill Seeker",
    tags: ["Wildlife", "Nature"],
    description:
      "Track leopards, elephants, and exotic birds in Yala National Park on an exhilarating early morning safari.",
    image: img4,
  },
  {
    id: "d5",
    title: "Ella Hike & Nine Arches",
    duration: "1 Day",
    price: "$75",
    badge: null,
    tags: ["Adventure", "Scenic"],
    description:
      "Hike Little Adam's Peak, photograph the iconic Nine Arch Bridge, and sip fresh tea at a hilltop estate.",
    image: img5,
  },
  {
    id: "d6",
    title: "Mirissa Whale Watching",
    duration: "1 Day",
    price: "$95",
    badge: "Seasonal",
    tags: ["Ocean", "Wildlife"],
    description:
      "Set sail at dawn to witness majestic blue whales and playful dolphins off Sri Lanka's southern coast.",
    image: img6,
  },
  {
    id: "d7",
    title: "Galle Fort Heritage Walk",
    duration: "1 Day",
    price: "$60",
    badge: null,
    tags: ["History", "Culture"],
    description:
      "Wander through cobblestone streets of the UNESCO-listed Dutch Galle Fort and its charming boutiques.",
    image: img1,
  },
  {
    id: "d8",
    title: "Nuwara Eliya Tea Country",
    duration: "1 Day",
    price: "$80",
    badge: "Scenic",
    tags: ["Nature", "Tea"],
    description:
      "Tour a working tea factory, stroll through emerald green estates, and enjoy high tea at a colonial bungalow.",
    image: img3,
  },
];

export const couplePackages: Package[] = [
  {
    id: "c1",
    title: "Romantic Honeymoon Escape",
    duration: "8 Days",
    price: "$1,299",
    badge: "Best Value",
    tags: ["Luxury", "Honeymoon"],
    description:
      "Luxury boutique hotels, private candlelit dinners, and unforgettable couples experiences across the island.",
    image: img5,
  },
  {
    id: "c2",
    title: "Sunset Coast Getaway",
    duration: "4 Days",
    price: "$649",
    badge: null,
    tags: ["Beach", "Romance"],
    description:
      "Private beach dinners, sunset catamaran cruises, and couple spa rituals along the golden southern coast.",
    image: img2,
  },
  {
    id: "c3",
    title: "Hill Country Love Trail",
    duration: "5 Days",
    price: "$749",
    badge: null,
    tags: ["Scenic", "Adventure"],
    description:
      "Misty mountains, scenic train rides, and cozy heritage bungalows — romance woven into every moment.",
    image: img3,
  },
  {
    id: "c4",
    title: "Culture & Candlelight Tour",
    duration: "6 Days",
    price: "$899",
    badge: "Curated",
    tags: ["Culture", "Luxury"],
    description:
      "Ancient temples by day, rooftop dining and infinity pool evenings in boutique heritage hotels by night.",
    image: img1,
  },
  {
    id: "c5",
    title: "Luxury Villa Retreat",
    duration: "7 Days",
    price: "$1,599",
    badge: "Premium",
    tags: ["Luxury", "Private"],
    description:
      "Exclusive private villa with pool, personal chef, couples yoga, and custom island excursions on demand.",
    image: img6,
  },
  {
    id: "c6",
    title: "Whale Watch & Beach Bliss",
    duration: "3 Days",
    price: "$499",
    badge: null,
    tags: ["Ocean", "Romance"],
    description:
      "Sail with whales at sunrise, snorkel coral gardens, and unwind at a beachfront couples resort.",
    image: img4,
  },
];

export const morePackages: Package[] = [
  {
    id: "m1",
    title: "Cultural Triangle Explorer",
    duration: "7 Days",
    price: "$899",
    badge: "Classic",
    tags: ["Culture", "Heritage"],
    description:
      "Discover ancient kingdoms, majestic stupas, and the iconic Sigiriya Rock Fortress on this heritage circuit.",
    image: img1,
  },
  {
    id: "m2",
    title: "Coastal Paradise",
    duration: "5 Days",
    price: "$649",
    badge: null,
    tags: ["Beach", "Surf"],
    description:
      "Relax on pristine southern beaches, surf in Weligama, and explore historic Galle Fort.",
    image: img2,
  },
  {
    id: "m3",
    title: "Wildlife Safari Adventure",
    duration: "6 Days",
    price: "$799",
    badge: "Adventure",
    tags: ["Wildlife", "Safari"],
    description:
      "Spot elusive leopards in Yala, elephants in Minneriya, and diverse birdlife across national parks.",
    image: img4,
  },
  {
    id: "m4",
    title: "Complete Sri Lanka",
    duration: "14 Days",
    price: "$1,899",
    badge: "Grand Tour",
    tags: ["All-inclusive", "Epic"],
    description:
      "The ultimate grand tour covering culture, nature, wildlife, and beaches in one unforgettable journey.",
    image: img6,
  },
  {
    id: "m5",
    title: "Family Fun Island",
    duration: "10 Days",
    price: "$1,199",
    badge: "Family",
    tags: ["Family", "Kids"],
    description:
      "Kid-friendly safaris, ancient forts, beach days, and cultural workshops designed for the whole family.",
    image: img5,
  },
  {
    id: "m6",
    title: "Ayurveda & Wellness",
    duration: "7 Days",
    price: "$999",
    badge: "Wellness",
    tags: ["Wellness", "Spa"],
    description:
      "Rejuvenate with authentic Ayurvedic treatments, meditation retreats, and organic cuisine at serene wellness centers.",
    image: img3,
  },
  {
    id: "m7",
    title: "Backpacker Budget Tour",
    duration: "10 Days",
    price: "$449",
    badge: "Budget",
    tags: ["Budget", "Adventure"],
    description:
      "Experience the real Sri Lanka on a budget — hostels, tuk-tuks, local food, and off-the-beaten-path gems.",
    image: img1,
  },
  {
    id: "m8",
    title: "Photography & Landscapes",
    duration: "8 Days",
    price: "$849",
    badge: null,
    tags: ["Photography", "Scenic"],
    description:
      "Golden hour safaris, mist-soaked highlands, ancient ruins — a landscape photographer's dream itinerary.",
    image: img2,
  },
];

export const maldivesPackages: Package[] = [
  {
    id: "mv1",
    title: "Maldives Overwater Bliss",
    duration: "5 Days",
    price: "$2,199",
    badge: "Best Seller",
    tags: ["Luxury", "Overwater"],
    description:
      "Wake up above the turquoise lagoon in a stunning overwater bungalow with private deck and direct ocean access.",
    image: img2,
  },
  {
    id: "mv2",
    title: "Maldives Diving & Snorkel",
    duration: "7 Days",
    price: "$1,899",
    badge: null,
    tags: ["Diving", "Marine Life"],
    description:
      "Explore vibrant coral reefs, swim with manta rays and whale sharks across some of the world's clearest waters.",
    image: img4,
  },
  {
    id: "mv3",
    title: "Romantic Maldives Escape",
    duration: "6 Days",
    price: "$2,599",
    badge: "Honeymoon",
    tags: ["Romance", "Luxury"],
    description:
      "Private candlelit dinners on the beach, couple spa treatments, and sunset cruises on a traditional dhoni.",
    image: img5,
  },
  {
    id: "mv4",
    title: "Maldives Family Resort",
    duration: "7 Days",
    price: "$2,999",
    badge: "Family",
    tags: ["Family", "Resort"],
    description:
      "All-inclusive family resort with kids clubs, dolphin watching, glass-bottom kayaking, and beachside fun.",
    image: img6,
  },
  {
    id: "mv5",
    title: "Sri Lanka & Maldives Combo",
    duration: "12 Days",
    price: "$3,299",
    badge: "Popular",
    tags: ["Combo", "Epic"],
    description:
      "The ultimate dual-destination journey: explore Sri Lanka's cultural gems, then unwind in Maldivian paradise.",
    image: img1,
  },
  {
    id: "mv6",
    title: "Maldives Budget Getaway",
    duration: "4 Days",
    price: "$899",
    badge: "Budget",
    tags: ["Budget", "Beach"],
    description:
      "Experience the magic of the Maldives without breaking the bank — local guesthouses, snorkeling, and sandbanks.",
    image: img3,
  },
  {
    id: "mv7",
    title: "Maldives Liveaboard Cruise",
    duration: "8 Days",
    price: "$2,499",
    badge: "Adventure",
    tags: ["Cruise", "Diving"],
    description:
      "Sail through remote atolls, dive unexplored reefs, and sleep under a sky full of stars on a luxury liveaboard.",
    image: img2,
  },
  {
    id: "mv8",
    title: "Private Island Retreat",
    duration: "5 Days",
    price: "$4,499",
    badge: "Ultra Luxury",
    tags: ["Private", "Exclusive"],
    description:
      "Exclusive buyout of a private island resort — your own piece of paradise with a personal butler and chef.",
    image: img5,
  },
];

export const specialPackages: Package[] = [
  {
    id: "d1",
    title: "Magical Romance",
    duration: "14 Day",
    price: "$89",
    badge: "Most Popular",
    tags: ["Romance", "Luxury"],
    description:
      "Magical Paradise takes pride in carefully selecting the most romantic and charming locations possible for the Magical Romance tour itinerary in Sri Lanka. A day by day itinerary highlight is given below.",
    image: img1,
  },
  {
    id: "d2",
    title: "Wild and Wooly",
    duration: "13 Day",
    price: "$85",
    badge: "Adventure",
    tags: ["Wildlife", "Adventure"],
    description:
      "Careful consideration has been given to including the best possible locations for a 13 day tour that will help heighten the ‘Wild and Wooly’ spark for adventurous travelers and provide a wonderful learning experience about what Sri Lanka offers the intrepid traveller.",
    image: img2,
  },
  {
    id: "d3",
    title: "A Walk of Life",
    duration: "14 Day",
    price: "$82",
    badge: "Cultural",
    tags: ["Culture", "Heritage"],
    description:
      "A Walk of Life tour package offers a unique opportunity to explore the cultural richness, traditions, and historical beauty of Sri Lanka with a carefully designed day by day itinerary.",
    image: img3,
  },
  {
    id: "d4",
    title: "Shades of Blue",
    duration: "14 Day",
    price: "$88",
    badge: "Beach Escape",
    tags: ["Beach", "Relax"],
    description:
      "The Shades of Blue tour package is carefully designed to cover many of the must see coastal and natural wonders in Sri Lanka while enjoying the island’s beautiful beaches and ocean views.",
    image: img4,
  },
  {
    id: "d5",
    title: "Magical Big Five",
    duration: "7 Day",
    price: "$79",
    badge: "Wildlife",
    tags: ["Safari", "Nature"],
    description:
      "The Magical Big Five tour package centers around wildlife and the awe inspiring mammals of the open seas encircling Sri Lanka. It highlights observing the Asian Elephant, Leopard, Sloth Bear, Blue Whale, and Sperm Whale in their natural habitat.",
    image: img5,
  },
  {
    id: "d6",
    title: "Magical Highlights",
    duration: "8 Day",
    price: "$75",
    badge: "Best Value",
    tags: ["History", "Nature"],
    description:
      "The Magical Highlights tour package is carefully designed to cover many of the must see historical and natural wonders in Sri Lanka within a short time frame.",
    image: img6,
  },
  {
    id: "d7",
    title: "Magical Sri Lanka",
    duration: "14 Day",
    price: "$90",
    badge: "Top Tour",
    tags: ["Culture", "Nature"],
    description:
      "The Magical Sri Lanka tour package is carefully designed to cover many of the must see historical and natural wonders in Sri Lanka with a detailed day by day itinerary.",
    image: img1,
  },
];

// Destinations
export const destinations: Destination[] = [
  {
    id: "dest-1",
    name: "Sigiriya",
    description:
      "The legendary rock fortress (5th century AD), a 200m monolithic rock rising from jungle — often called the Eighth Wonder of the World. Climb past ancient frescoes, mirror wall, lion paws, and water gardens to summit ruins with panoramic views.",
    tags: ["Cultural Triangle", "Iconic"],
    image: Timg1,

    region: "Southern Province",
    bestTime: "November – April",
    climate: "Tropical, 28–34°C",

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
    description:
      "The jewel of southern Sri Lanka's coast, offering world-class whale watching (blue whales Dec–Apr), excellent surfing, golden beaches, and stilt fishermen views. Fresh seafood and sunset cocktails make it perfect for beach lovers.",
    tags: ["South Coast", "Beach"],
    image: Timg2,

    region: "North Central Province",
    bestTime: "January – April",
    climate: "Tropical, 27–32°C",
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
    id: "dest-3",
    name: "Ella",
    description:
      "A misty highland village surrounded by jaw-dropping panoramic views of mountains, valleys, waterfalls, and endless tea plantations. Highlights include the iconic Nine Arch Bridge, Ella Rock hike, and Ravana Falls.",
    tags: ["Hill Country", "Scenic Views"],
    image: Timg3,

    region: "Uva Province",
    bestTime: "December – March",
    climate: "Cool & Misty, 18–26°C",
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
    id: "dest-4",
    name: "Yala",
    description:
      "Sri Lanka's most popular national park (over 1,000 sq km), home to the world's highest leopard density plus elephants, crocodiles, sloth bears, and hundreds of bird species. A must for big cat and elephant spotting.",
    tags: ["Wildlife", "Safari"],
    image: Timg4,

    region: "Uva Province",
    bestTime: "December – March",
    climate: "Cool & Misty, 18–26°C",
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
    description:
      "Sri Lanka's historic maritime gem and UNESCO World Heritage Site. The 16th-century Galle Fort features ramparts, cobblestone streets, boutique shops, cafes, and stunning ocean views — stroll the walls at sunset for pure magic.",
    tags: ["South Coast", "Historical"],
    image: Timg5,

    region: "Uva Province",
    bestTime: "December – March",
    climate: "Cool & Misty, 18–26°C",
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
    id: "dest-6",
    name: "Kandy",
    description:
      "Sri Lanka's sacred cultural capital in the hills, home to the iconic Temple of the Tooth Relic. Surrounds include Kandy Lake, botanical gardens, cultural dance shows, and vibrant markets — the gateway to hill country.",
    tags: ["Hill Country", "Cultural"],
    image: Timg6,

    region: "Uva Province",
    bestTime: "December – March",
    climate: "Cool & Misty, 18–26°C",
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
    id: "dest-7",
    name: "Nuwara Eliya",
    description:
      "Known as 'Little England,' this cool highland hill station features rolling hills, colonial buildings, rose gardens, and world-famous tea estates. Gregory Lake boating, tea tastings, and misty walks await.",
    tags: ["Hill Country", "Colonial/Tea"],
    image: Timg7,

    region: "Uva Province",
    bestTime: "December – March",
    climate: "Cool & Misty, 18–26°C",
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
    id: "dest-8",
    name: "Arugam Bay",
    description:
      "The undisputed surf capital of Sri Lanka — a picturesque bay on the southeast coast with world-class point breaks, yoga retreats, laid-back beach shacks, and nearby national parks. Best May–Sep for east coast swells.",
    tags: ["East Coast", "Surfing"],
    image: Timg2,

    region: "Uva Province",
    bestTime: "December – March",
    climate: "Cool & Misty, 18–26°C",
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
    id: "dest-9",
    name: "Anuradhapura",
    description:
      "The first ancient capital of Sri Lanka (from 4th century BC) — a UNESCO sacred city with massive stupas, the sacred Bo Tree, ancient tanks, palaces, and monasteries. Profound history and spiritual serenity.",
    tags: ["Cultural Triangle", "Ancient"],
    image: Timg3,

    region: "Uva Province",
    bestTime: "December – March",
    climate: "Cool & Misty, 18–26°C",
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
    id: "dest-10",
    name: "Bentota",
    description:
      "The jewel of Sri Lanka's southwest coast, boasting pristine golden beaches backed by coconut palms and a wide biodiverse lagoon. Popular for water sports, river safaris, turtle hatcheries, and Ayurveda spas.",
    tags: ["South Coast", "Beach"],
    image: Timg7,

    region: "Uva Province",
    bestTime: "December – March",
    climate: "Cool & Misty, 18–26°C",
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
    id: "dest-11",
    name: "Polonnaruwa",
    description:
      "A well-preserved UNESCO medieval capital with royal palaces, monumental Buddha statues (Gal Vihara rock carvings), and vast irrigation tanks. Cycle or explore ruins amid monkeys and birds.",
    tags: ["Cultural Triangle", "Historical"],
    image: Timg5,

    region: "Uva Province",
    bestTime: "December – March",
    climate: "Cool & Misty, 18–26°C",
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
    id: "dest-12",
    name: "Kitulgala",
    description:
      "Sri Lanka's premier adventure hub nestled in thick jungles along the Kelani River. Famous for white-water rafting (Grade 3–4), canyoning, waterfall abseiling, mountain biking, and canopy walks.",
    tags: ["Adventure", "Nature"],
    image: img6,

    region: "Uva Province",
    bestTime: "December – March",
    climate: "Cool & Misty, 18–26°C",
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
    id: "dest-13",
    name: "Jaffna",
    description:
      "Sri Lanka's northernmost peninsula and cultural heart of Tamil heritage. Explore ancient Hindu temples, the Dutch Fort, colorful markets, and nearby islands like Delft with wild ponies. Spicy cuisine and unique culture.",
    tags: ["Northern", "Cultural"],
    image: img1,

    region: "Uva Province",
    bestTime: "December – March",
    climate: "Cool & Misty, 18–26°C",
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
    id: "dest-14",
    name: "Negombo",
    description:
      "A lively coastal town just minutes from the airport — perfect as a first or last stop. Wide sandy beaches, a Dutch canal system, a famous fish market, and colonial fort remnants make it a relaxed introduction.",
    tags: ["West Coast", "Gateway"],
    image: img2,

    region: "Uva Province",
    bestTime: "December – March",
    climate: "Cool & Misty, 18–26°C",
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
    id: "dest-15",
    name: "Wilpattu",
    description:
      "Sri Lanka's largest and oldest national park (over 1,300 sq km), renowned for unique natural lakes ('villus') that attract leopards, elephants, sloth bears, crocodiles, and over 200 bird species in an uncrowded setting.",
    tags: ["Wildlife", "Safari"],
    image: img3,

    region: "Uva Province",
    bestTime: "December – March",
    climate: "Cool & Misty, 18–26°C",
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
    id: "dest-16",
    name: "Haputale",
    description:
      "A hidden mountainous town perched at the southern edge of hill country with sweeping valley views. Lipton's Seat tea estate lookout, Adisham Bungalow colonial mansion, and misty treks — less crowded than Ella.",
    tags: ["Hill Country", "Scenic"],
    image: Timg4,

    region: "Uva Province",
    bestTime: "December – March",
    climate: "Cool & Misty, 18–26°C",
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
    id: "dest-17",
    name: "Weligama",
    description:
      "Weligama — 'sandy village' — boasts one of the south coast's largest crescent bays with calm, beginner-friendly coves. The ultimate surf mecca with consistent waves, whale watching, yoga retreats, and relaxed beach cafes.",
    tags: ["South Coast", "Surfing"],
    image: Timg5,

    region: "Uva Province",
    bestTime: "December – March",
    climate: "Cool & Misty, 18–26°C",
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
    id: "dest-18",
    name: "Dambulla",
    description:
      "Home to the magnificent Golden Temple — a UNESCO-listed cave complex with over 150 Buddha statues, intricate murals, and centuries-old golden statues. Blends spiritual depth with natural beauty; often paired with Sigiriya.",
    tags: ["Cultural Triangle", "Spiritual"],
    image: Timg6,

    region: "Uva Province",
    bestTime: "December – March",
    climate: "Cool & Misty, 18–26°C",
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
    id: "dest-19",
    name: "Hatton",
    description:
      "An emerald-green gateway to tea country, blanketed in rolling plantations, dense forests, and thundering waterfalls. A base for Adam's Peak pilgrimages, Horton Plains hikes, scenic train rides, and fresh high-grown tea tastings.",
    tags: ["Hill Country", "Tea Estates"],
    image: img1,

    region: "Uva Province",
    bestTime: "December – March",
    climate: "Cool & Misty, 18–26°C",
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
    id: "dest-20",
    name: "Colombo",
    description:
      "The bustling seaside capital blending colonial architecture, modern skyscrapers, temples, mosques, and vibrant Pettah market. Stroll Galle Face Green, visit Gangaramaya Temple, and explore street food and nightlife.",
    tags: ["West Coast", "City"],
    image: Timg2,

    region: "Uva Province",
    bestTime: "December – March",
    climate: "Cool & Misty, 18–26°C",
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
];

// Experience
export const experiencesList: Experience[] = [
  {
    id: "exp-1",
    name: "Yoga & Meditation",
    description:
      "Sri Lanka offers authentic yoga and meditation experiences influenced by ancient Vedic traditions and Buddhist mindfulness practices. Sessions take place in serene settings — hill country retreats, beachside pavilions, or jungle ashrams — combining asanas, pranayama, guided meditation, and mindfulness walks amid tea estates or ocean views.",
    tags: ["Wellness", "Spiritual"],
    image: img3,
    icon: CameraIcon,
  },
  {
    id: "exp-2",
    name: "Weddings in the Sun",
    description:
      "Sri Lanka ranks among the world's most exotic wedding destinations — ceremonies on golden beaches under palm trees, in lush jungle clearings, colonial villas, or atop misty hills. Options include traditional Kandyan rituals with drummers and dancers, barefoot beach vows, or intimate Ayurveda-inspired wellness weddings.",
    tags: ["Romantic", "Luxury"],
    image: img5,
    icon: ShipIcon,
  },
  {
    id: "exp-3",
    name: "Ayurveda & Spa Therapy",
    description:
      "With credentials dating back thousands of years, Sri Lankan Ayurveda blends ancient Indian principles with indigenous herbal knowledge. Treatments include Shirodhara, herbal steam baths, body wraps, massages, and personalized dosha-balancing programs — renowned for detoxification, rejuvenation, and stress reduction.",
    tags: ["Wellness", "Healing"],
    image: img2,
    icon: LeafIcon,
  },
  {
    id: "exp-4",
    name: "Shopping Sprees",
    description:
      "Sri Lanka delights shoppers with precious gemstones (world-famous Ceylon sapphires and rubies), hand-blocked batiks, vibrant textiles, intricate Buddha statues, aromatic spices, pure Ceylon tea, and eco-friendly handicrafts. Markets in Colombo, Galle Fort boutiques, and roadside stalls offer bargains and authentic souvenirs.",
    tags: ["Shopping", "Markets"],
    image: img4,
    icon: CastleIcon,
  },
  {
    id: "exp-5",
    name: "Delish Culinary",
    description:
      "Sri Lankan cuisine bursts with exotic, aromatic flavors influenced by Southeast Asian, Indian, and Dutch elements. Rice and curry, hoppers, kottu roti, fresh seafood, lamprais, and street food await. Cooking classes, spice garden visits, and farm-to-table experiences let you taste the island's bold spiced, coconut-rich authenticity.",
    tags: ["Culinary", "Local Cuisine"],
    image: img6,
    icon: SparklesIcon,
  },
  {
    id: "exp-6",
    name: "Traditional Arts & Crafts",
    description:
      "Rooted in one of the world's oldest civilizations, Sri Lankan arts and crafts showcase intricate skills passed through generations — mask carving, Kandyan dance, batik printing, Dumbara mat weaving, silver filigree jewelry, and temple murals. Visit artisan villages, watch live demonstrations, or join hands-on workshops.",
    tags: ["Cultural", "Workshops"],
    image: img1,
    icon: UtensilsIcon,
  },
  {
    id: "exp-7",
    name: "Sporting Breaks",
    description:
      "Sri Lanka's diverse terrain sets the stage for thrilling sports year-round — surfing the south and east coasts, white-water rafting at Kitulgala, hiking Ella Rock or Adam's Peak, mountain biking, scuba diving, golf on colonial courses, and adventure sports like zip-lining or canyoning. Suits all levels.",
    tags: ["Adventure", "Sports"],
    image: img4,
    icon: LeafIcon,
  },
  {
    id: "exp-8",
    name: "Colourful Culture",
    description:
      "Steeped in Buddhism since the 3rd century BC, Sri Lankan culture blends ancient rituals, festivals, and daily life. Experience temple poojas, Kandyan dance and drumming, elephant processions (Perahera festival), vesak lanterns, and multicultural vibrancy — immersive insights into harmony, devotion, and living heritage.",
    tags: ["Cultural", "Festivals"],
    image: img1,
    icon: CastleIcon,
  },
  {
    id: "exp-9",
    name: "Exhilarating Adventures",
    description:
      "Dense jungles, towering mountains, giant rock fortresses, balmy oceans, and rolling hills create a paradise for adrenaline seekers. Wildlife safaris (leopards in Yala, elephants in Udawalawe), hot air ballooning over ancient cities, whale watching, kayaking lagoons, and multi-day treks combine thrills with breathtaking natural beauty.",
    tags: ["Adventure", "Nature"],
    image: img5,
    icon: LeafIcon,
  },
];

export const accommodations: Accommodation[] = [
  {
    id: "acc-1",
    name: "Lake Lodge – Colombo",
    location: "Colombo",
    description:
      "Nyne Hotels Lake Lodge is a beautiful boutique hotel tucked away in the city. Located in Colombo, it offers a peaceful retreat with a quiet location, modern and clean rooms, and a nice restaurant.",
    image: Himg1,
    rating: 5,
    tagline: "Eco-luxury masterpiece by Geoffrey Bawa",
  },
  {
    id: "acc-2",
    name: "Langdale by Amaya",
    location: "Nuwara Eliya",
    description:
      "A luxury boutique hotel nestled amidst breathtaking landscapes and lush tea plantations in the Nuwara Eliya Hills. It offers a tranquil retreat with colonial charm, elegant rooms, and an outdoor heated infinity pool.",
    image: Himg3,
    rating: 5,
    tagline: "Cliff-top luxury overlooking the Indian Ocean",
  },
  {
    id: "acc-3",
    name: "Arika Villa",
    location: "Dambulla",
    description:
      "A luxury boutique hotel nestled in a peaceful setting with lush tropical gardens. It offers comfortable rooms with air conditioning and private terraces, an outdoor swimming pool, and a restaurant serving Sri Lankan and Western cuisine.",
    image: Himg2,
    rating: 5,
    tagline: "Historic grandeur within 17th-century walls",
  },
  {
    id: "acc-4",
    name: "Amaya Hills Kandy",
    location: "Kandy",
    description:
      "A luxury hotel nestled in the hills of Kandy, offering a peaceful retreat with traditional Sri Lankan architecture, a scenic outdoor pool, and breathtaking panoramic views of the city and surrounding mountains.",
    image: img5,
    rating: 4,
    tagline: "Boutique chalets amidst scenic tea estates",
  },
  {
    id: "acc-5",
    name: "Villa Hundira",
    location: "Negombo",
    description:
      "A tranquil boutique villa set amidst lush tropical gardens overlooking the serene Negombo Lagoon. This peaceful retreat features two outdoor pools and an in-house spa, offering a perfect blend of relaxation and luxury.",
    image: Himg4,
    rating: 4,
    tagline: "Boutique chalets amidst scenic tea estates",
  },
  {
    id: "acc-6",
    name: "The Grand Hotel",
    location: "Nuwara Eliya",
    description:
      "A historic four-star hotel built in the style of an Elizabethan-era manor house, offering a blend of old-world charm and modern comforts. Features a spa, heated indoor pool, multiple restaurants, and is near the Nuwara Eliya Golf Club.",
    image: img6,
    rating: 5,
    tagline: "Historic grandeur within 17th-century walls",
  },
  {
    id: "acc-7",
    name: "Nest Wood Bungalow",
    location: "Kalawana",
    description:
      "A charming cabin near the Sinharaja Forest Reserve, offering an intimate escape into nature. Features a pool and restaurant — ideal for those seeking wilderness and tranquility within Sri Lanka's lush rainforest belt.",
    image: img1,
    rating: 5,
    tagline: "Historic grandeur within 17th-century walls",
  },
  {
    id: "acc-8",
    name: "Corbet's Bungalow",
    location: "Meemure",
    description:
      "An eco-resort nestled in Meemure with a breathtaking view of the Knuckles Mountain Range. A hidden gem for nature lovers seeking remote, unspoiled highland beauty and authentic Sri Lankan countryside living.",
    image: img2,
    rating: 5,
    tagline: "Historic grandeur within 17th-century walls",
  },
  {
    id: "acc-9",
    name: "Mountain Heavens",
    location: "Ella",
    description:
      "A serene hotel in Ella with a pool and on-site restaurant, offering peaceful retreats and panoramic views of the Ella Gap and surrounding mountains — the perfect base for exploring the island's stunning hill country.",
    image: img3,
    rating: 5,
    tagline: "Historic grandeur within 17th-century walls",
  },
  {
    id: "acc-10",
    name: "Galway Heights Hotel",
    location: "Nuwara Eliya",
    description:
      "A luxurious hotel offering a blend of modern and colonial charm, located near Galway Land National Park. Features an Irish-themed pub, elegant dining, and sweeping highland views in Sri Lanka's most British-influenced hill town.",
    image: img4,
    rating: 5,
    tagline: "Historic grandeur within 17th-century walls",
  },
  {
    id: "acc-11",
    name: "Rajarata Hotel",
    location: "Anuradhapura",
    description:
      "A luxurious hotel blending modern and traditional Sri Lankan charm in the heart of the ancient capital. Offers an outdoor pool, restaurant, and is situated close to Anuradhapura's extraordinary historical and archaeological sites.",
    image: img5,
    rating: 5,
    tagline: "Historic grandeur within 17th-century walls",
  },
  {
    id: "acc-12",
    name: "Taru Villas Riva",
    location: "Negombo",
    description:
      "A luxurious boutique hotel set in a refurbished Walauwwa (manor house), featuring an outdoor pool, lush garden, and BBQ facilities. A serene, characterful escape just minutes from Negombo's beaches and the international airport.",
    image: img6,
    rating: 5,
    tagline: "Historic grandeur within 17th-century walls",
  },
  {
    id: "acc-13",
    name: "W15 Weligama",
    location: "Weligama",
    description:
      "A stylish hotel with a beach club offering an outdoor pool, stunning sea views, and free WiFi. The perfect beachfront escape along the south coast, ideal for surfers, beach lovers, and those seeking a relaxed coastal vibe.",
    image: img1,
    rating: 5,
    tagline: "Historic grandeur within 17th-century walls",
  },
  {
    id: "acc-14",
    name: "Waasala Eco Luxury Heaven",
    location: "Anuradhapura",
    description:
      "An eco-friendly hotel offering a unique blend of nature and comfort near ancient Anuradhapura's historical sites. Features an outdoor pool, a restaurant, and sustainable design that connects guests to the natural environment.",
    image: img2,
    rating: 5,
    tagline: "Historic grandeur within 17th-century walls",
  },
  {
    id: "acc-15",
    name: "Marino Beach Colombo",
    location: "Colombo",
    description:
      "A luxurious hotel offering a blend of modernity and elegance in the heart of Colombo. Features a stunning rooftop infinity pool, a full-service spa, and diverse dining options with sweeping views of the Indian Ocean.",
    image: img3,
    rating: 5,
    tagline: "Historic grandeur within 17th-century walls",
  },
  {
    id: "acc-16",
    name: "Cinnamon Citadel Kandy",
    location: "Kandy",
    description:
      "A serene four-star hotel nestled on the banks of the Mahaweli River. Offers a peaceful escape with a pool, spa, and views of the surrounding hills — a refined base for exploring Sri Lanka's cultural capital.",
    image: img4,
    rating: 5,
    tagline: "Historic grandeur within 17th-century walls",
  },
  {
    id: "acc-17",
    name: "The Capoe House",
    location: "Haputale",
    description:
      "A secluded luxury bungalow nestled in the Haputale mountains with stunning views of the surrounding peaks and an organic tea estate. Focuses on tranquility, comfort, and a deeply personal connection with highland nature.",
    image: img5,
    rating: 5,
    tagline: "Historic grandeur within 17th-century walls",
  },
  {
    id: "acc-18",
    name: "C Beyond Nilaveli",
    location: "Nilaveli",
    description:
      "A charming beachfront boutique hotel located where the lagoon meets the sea. Features an outdoor pool and offers a serene and intimate atmosphere along the unspoiled northeast coast — far from the tourist crowds.",
    image: img6,
    rating: 5,
    tagline: "Historic grandeur within 17th-century walls",
  },
];
