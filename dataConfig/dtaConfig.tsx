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

import type { Package } from "./types";
import type { Destination } from "./types";




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
  },
  {
    id: "dest-2",
    name: "Mirissa",
    description:
      "The jewel of southern Sri Lanka's coast, offering world-class whale watching (blue whales Dec–Apr), excellent surfing, golden beaches, and stilt fishermen views. Fresh seafood and sunset cocktails make it perfect for beach lovers.",
    tags: ["South Coast", "Beach"],
    image: Timg2,
  },
  {
    id: "dest-3",
    name: "Ella",
    description:
      "A misty highland village surrounded by jaw-dropping panoramic views of mountains, valleys, waterfalls, and endless tea plantations. Highlights include the iconic Nine Arch Bridge, Ella Rock hike, and Ravana Falls.",
    tags: ["Hill Country", "Scenic Views"],
    image: Timg3,
  },
  {
    id: "dest-4",
    name: "Yala",
    description:
      "Sri Lanka's most popular national park (over 1,000 sq km), home to the world's highest leopard density plus elephants, crocodiles, sloth bears, and hundreds of bird species. A must for big cat and elephant spotting.",
    tags: ["Wildlife", "Safari"],
    image:  Timg4,
  },
  {
    id: "dest-5",
    name: "Galle",
    description:
      "Sri Lanka's historic maritime gem and UNESCO World Heritage Site. The 16th-century Galle Fort features ramparts, cobblestone streets, boutique shops, cafes, and stunning ocean views — stroll the walls at sunset for pure magic.",
    tags: ["South Coast", "Historical"],
    image: Timg5,
  },
  {
    id: "dest-6",
    name: "Kandy",
    description:
      "Sri Lanka's sacred cultural capital in the hills, home to the iconic Temple of the Tooth Relic. Surrounds include Kandy Lake, botanical gardens, cultural dance shows, and vibrant markets — the gateway to hill country.",
    tags: ["Hill Country", "Cultural"],
    image: Timg6,
  },
  {
    id: "dest-7",
    name: "Nuwara Eliya",
    description:
      "Known as 'Little England,' this cool highland hill station features rolling hills, colonial buildings, rose gardens, and world-famous tea estates. Gregory Lake boating, tea tastings, and misty walks await.",
    tags: ["Hill Country", "Colonial/Tea"],
    image: Timg7,
  },
  {
    id: "dest-8",
    name: "Arugam Bay",
    description:
      "The undisputed surf capital of Sri Lanka — a picturesque bay on the southeast coast with world-class point breaks, yoga retreats, laid-back beach shacks, and nearby national parks. Best May–Sep for east coast swells.",
    tags: ["East Coast", "Surfing"],
    image: Timg2,
  },
  {
    id: "dest-9",
    name: "Anuradhapura",
    description:
      "The first ancient capital of Sri Lanka (from 4th century BC) — a UNESCO sacred city with massive stupas, the sacred Bo Tree, ancient tanks, palaces, and monasteries. Profound history and spiritual serenity.",
    tags: ["Cultural Triangle", "Ancient"],
    image: Timg3,
  },
  {
    id: "dest-10",
    name: "Bentota",
    description:
      "The jewel of Sri Lanka's southwest coast, boasting pristine golden beaches backed by coconut palms and a wide biodiverse lagoon. Popular for water sports, river safaris, turtle hatcheries, and Ayurveda spas.",
    tags: ["South Coast", "Beach"],
    image: Timg7,
  },
  {
    id: "dest-11",
    name: "Polonnaruwa",
    description:
      "A well-preserved UNESCO medieval capital with royal palaces, monumental Buddha statues (Gal Vihara rock carvings), and vast irrigation tanks. Cycle or explore ruins amid monkeys and birds.",
    tags: ["Cultural Triangle", "Historical"],
    image: Timg5,
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
    image: Timg4,
  },
  {
    id: "dest-17",
    name: "Weligama",
    description:
      "Weligama — 'sandy village' — boasts one of the south coast's largest crescent bays with calm, beginner-friendly coves. The ultimate surf mecca with consistent waves, whale watching, yoga retreats, and relaxed beach cafes.",
    tags: ["South Coast", "Surfing"],
    image: Timg5,
  },
  {
    id: "dest-18",
    name: "Dambulla",
    description:
      "Home to the magnificent Golden Temple — a UNESCO-listed cave complex with over 150 Buddha statues, intricate murals, and centuries-old golden statues. Blends spiritual depth with natural beauty; often paired with Sigiriya.",
    tags: ["Cultural Triangle", "Spiritual"],
    image: Timg6,
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
    image: Timg2,
  },
];
