"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPinIcon, ArrowRightIcon, CompassIcon } from "lucide-react";
import dynamic from "next/dynamic";
import { useMap } from "react-leaflet";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false },
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false },
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false },
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

import "leaflet/dist/leaflet.css";

const createCustomIcon = (isActive: boolean, color: string) => {
  if (typeof window === "undefined") return null;
  const L = require("leaflet");
  return L.divIcon({
    className: "custom-marker",
    html: `<div style="width:${isActive ? "32px" : "24px"};height:${isActive ? "32px" : "24px"};background:${color};border:3px solid rgba(255,255,255,0.9);border-radius:50%;box-shadow:0 4px 20px rgba(0,0,0,0.5),0 0 0 4px ${color}33;transition:all 0.2s ease;cursor:pointer;${isActive ? "transform:scale(1.1);" : ""}"></div>`,
    iconSize: [isActive ? 32 : 24, isActive ? 32 : 24],
    iconAnchor: [isActive ? 16 : 12, isActive ? 16 : 12],
    popupAnchor: [0, -16],
  });
};

function LockMapToSriLanka() {
  const map = useMap();
  useEffect(() => {
    if (typeof window === "undefined" || !map) return;
    const L = require("leaflet");
    const southWest = L.latLng(5.7, 79.5);
    const northEast = L.latLng(9.9, 81.9);
    const bounds = L.latLngBounds(southWest, northEast);
    map.setMaxBounds(bounds);
    map.fitBounds(bounds, { padding: [50, 50] });
    map.setMinZoom(6.5);
    map.setMaxZoom(6.5);
    if (map.zoomControl) map.zoomControl.remove();
    map.scrollWheelZoom.disable();
    map.doubleClickZoom.disable();
    map.boxZoom.disable();
    map.keyboard.disable();
    map.on("drag", () => {
      if (!bounds.contains(map.getCenter()))
        map.panInsideBounds(bounds, { animate: true });
    });
  }, [map]);
  return null;
}

const destinations = [
  {
    id: "jaffna",
    name: "Jaffna",
    position: [9.6615, 80.0255] as [number, number],
    desc: "The proud Tamil cultural capital of the north — Nallur Kandaswamy temple, colonial forts, and an extraordinary cuisine scene unlike anywhere else on the island.",
    image:
      "https://images.unsplash.com/photo-1586613835341-c2e0a4f10da4?w=800&q=80",
    highlights: ["Culture", "Temples", "Cuisine"],
    tag: "Culture",
  },
  {
    id: "trincomalee",
    name: "Trincomalee",
    position: [8.5874, 81.2152] as [number, number],
    desc: "One of the world's finest natural deep-water harbours — pristine white-sand beaches, world-class diving, and ancient temples perched on the headland.",
    image:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&q=80",
    highlights: ["Beaches", "Diving", "Temples"],
    tag: "Beach",
  },
  {
    id: "sigiriya",
    name: "Sigiriya",
    position: [7.957, 80.7603] as [number, number],
    desc: "A UNESCO World Heritage rock fortress rising 200 m above the jungle, featuring 5th-century frescoes, mirror-wall inscriptions, and elaborate water gardens.",
    image:
      "https://images.unsplash.com/photo-1567227280257-f8cee6e5c1d3?w=800&q=80",
    highlights: ["Heritage", "History", "Views"],
    tag: "Heritage",
  },
  {
    id: "kandy",
    name: "Kandy",
    position: [7.2906, 80.6337] as [number, number],
    desc: "The cultural heart of Sri Lanka nestled in the hills — home to the sacred Temple of the Tooth Relic, a serene lake, and the vibrant annual Esala Perahera procession.",
    image:
      "https://images.unsplash.com/photo-1590123575668-53235ea4d584?w=800&q=80",
    highlights: ["Culture", "Temples", "Nature"],
    tag: "Culture",
  },
  {
    id: "colombo",
    name: "Colombo",
    position: [6.9271, 79.8612] as [number, number],
    desc: "The bustling commercial capital blending colonial architecture with modern skyscrapers — explore vibrant markets, world-class dining, and the iconic Galle Face Green.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    highlights: ["City Life", "Shopping", "Dining"],
    tag: "City",
  },
  {
    id: "nuwara-eliya",
    name: "Nuwara Eliya",
    position: [6.9497, 80.7891] as [number, number],
    desc: '"Little England" at 1,868 m — rolling emerald tea estates, colonial bungalows, cool misty air, and the annual flower festival that transforms the town.',
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    highlights: ["Tea Estates", "Mountains", "Cool Climate"],
    tag: "Nature",
  },
  {
    id: "ella",
    name: "Ella",
    position: [6.8667, 81.0466] as [number, number],
    desc: "A charming mountain village famous for the iconic Nine Arch Bridge, misty hikes up Little Adam's Peak, and the world's most scenic train journey through the highlands.",
    image:
      "https://images.unsplash.com/photo-1580910365203-91ea9115a319?w=800&q=80",
    highlights: ["Hiking", "Views", "Train Ride"],
    tag: "Nature",
  },
  {
    id: "arugam-bay",
    name: "Arugam Bay",
    position: [7.2667, 81.8333] as [number, number],
    desc: "A world-renowned surfer's paradise on the east coast — consistent right-hand point breaks, a laid-back bohemian vibe, and stunning lagoon sunsets.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    highlights: ["Surfing", "Beaches", "Sunsets"],
    tag: "Beach",
  },
  {
    id: "yala",
    name: "Yala",
    position: [6.3667, 81.5167] as [number, number],
    desc: "Sri Lanka's flagship national park — the highest density of wild leopards on earth, plus elephants, sloth bears, crocodiles, and 215 species of birds.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    highlights: ["Wildlife", "Safari", "Leopards"],
    tag: "Wildlife",
  },
  {
    id: "galle",
    name: "Galle",
    position: [6.0535, 80.221] as [number, number],
    desc: "A perfectly preserved 17th-century Dutch colonial fort — cobblestone streets, boutique galleries, rampart sunsets, and the finest selection of designer stays in Sri Lanka.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    highlights: ["Heritage", "Architecture", "Coast"],
    tag: "Heritage",
  },
  {
    id: "mirissa",
    name: "Mirissa",
    position: [5.9481, 80.4711] as [number, number],
    desc: "A crescent-shaped paradise beach renowned for spectacular blue whale and sperm whale watching expeditions from November to April — plus legendary Sri Lankan seafood.",
    image:
      "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=800&q=80",
    highlights: ["Whales", "Beaches", "Seafood"],
    tag: "Beach",
  },
];

const TAG_COLORS: Record<string, { pill: string; dot: string }> = {
  Culture: {
    pill: "bg-violet-500/20 text-violet-300 border-violet-500/30",
    dot: "#8b5cf6",
  },
  Heritage: {
    pill: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    dot: "#f59e0b",
  },
  Nature: {
    pill: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    dot: "#10b981",
  },
  Beach: {
    pill: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    dot: "#06b6d4",
  },
  City: {
    pill: "bg-sky-500/20 text-sky-300 border-sky-500/30",
    dot: "#0284c7",
  },
  Wildlife: {
    pill: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    dot: "#f97316",
  },
};

const MapSection = () => {
  const [activePin, setActivePin] = useState<string>(destinations[2].id);
  const [isClient, setIsClient] = useState(false);
  const active = destinations.find((d) => d.id === activePin)!;

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      const L = require("leaflet");
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      });
    }
  }, []);

  if (!isClient) {
    return (
      <section id="destinations" className="py-20 lg:py-28 bg-[#060d1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4 text-white">
              Explore Sri Lanka
            </h2>
            <p className="text-lg text-white/40">Loading map...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="destinations"
      className="py-20 lg:py-28 bg-[#060d1a] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#1761A0]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#0BAADC]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 bg-[#0BAADC]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#0BAADC]/20 mb-6"
          >
            <CompassIcon className="w-5 h-5 text-[#0BAADC]" />
            <span className="text-sm font-medium tracking-wide text-[#0BAADC]">
              DISCOVER THE ISLAND
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-serif font-bold mb-4 text-white"
          >
            Explore Sri Lanka
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-[#1761A0] to-[#0BAADC] mx-auto mb-6 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-white/40 max-w-2xl mx-auto"
          >
            Discover the diverse landscapes and rich heritage of our island.
            Click a destination to learn more.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[400px] h-[500px] flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-white/5 relative"
          >
            <MapContainer
              center={[7.8731, 80.7718]}
              zoom={5.5}
              style={{ height: "100%", width: "100%", borderRadius: "16px" }}
              scrollWheelZoom={false}
              zoomControl={false}
              doubleClickZoom={false}
              boxZoom={false}
              keyboard={false}
              dragging={true}
              attributionControl={false}
              touchZoom={false}
            >
              <LockMapToSriLanka />
              <TileLayer
                attribution="&copy; OpenStreetMap"
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              />
              {destinations.map((dest) => {
                const isActive = activePin === dest.id;
                const color = TAG_COLORS[dest.tag]?.dot ?? "#0BAADC";
                const icon = createCustomIcon(isActive, color);
                return (
                  <Marker
                    key={dest.id}
                    position={dest.position}
                    icon={icon}
                    eventHandlers={{ click: () => setActivePin(dest.id) }}
                  >
                    <Popup className="custom-popup-dark" closeButton={false}>
                      <div className="text-white min-w-[200px]">
                        <h4 className="font-bold text-base mb-1">
                          {dest.name}
                        </h4>
                        <p className="text-xs text-white/60 mb-2">
                          {dest.highlights.slice(0, 3).join(" · ")}
                        </p>
                        <button
                          onClick={() => setActivePin(dest.id)}
                          className="text-xs font-medium text-[#0BAADC] hover:text-[#2EDCF4] transition-colors"
                        >
                          View details →
                        </button>
                      </div>
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 text-xs text-white/50 flex items-center gap-1.5 z-[1000]">
              <CompassIcon className="w-3.5 h-3.5 text-[#0BAADC]" />
            </div>
          </motion.div>

          <div className="w-full max-w-md lg:flex-1 flex items-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 30, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -30, scale: 0.97 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full bg-[#0d1424] rounded-2xl border border-white/5 shadow-2xl overflow-hidden"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={active.image}
                    alt={active.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-6 flex items-center gap-2">
                    <MapPinIcon className="w-5 h-5 text-[#0BAADC] drop-shadow-lg flex-shrink-0" />
                    <h3 className="text-3xl font-serif font-bold text-white drop-shadow-lg">
                      {active.name}
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span
                      className={`text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full border ${TAG_COLORS[active.tag]?.pill}`}
                    >
                      {active.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6 lg:p-7">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {active.highlights.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-white/50 text-base leading-relaxed mb-7">
                    {active.desc}
                  </p>
                  <button className="w-full py-3.5 bg-gradient-to-r from-[#1761A0] to-[#0BAADC] hover:from-[#0d4f8a] hover:to-[#099bbf] text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all duration-200 group shadow-[0_0_20px_rgba(11,170,220,0.2)] hover:shadow-[0_0_30px_rgba(11,170,220,0.4)]">
                    <span>View Packages</span>
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-12 text-sm"
        >
          {[
            {
              color: "bg-[#0BAADC]",
              label: `${destinations.length} Destinations`,
            },
            { color: "bg-[#1761A0]", label: "Pearl of the Indian Ocean" },
            { color: "bg-amber-500", label: "UNESCO Heritage Sites" },
          ].map(({ color, label }) => (
            <div key={label} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${color}`} />
              <span className="text-white/40">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        .custom-popup-dark .leaflet-popup-content-wrapper {
          background: #0d1424;
          color: white;
          border-radius: 12px;
          padding: 4px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .custom-popup-dark .leaflet-popup-tip {
          background: #0d1424;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .custom-popup-dark .leaflet-popup-close-button {
          color: rgba(255, 255, 255, 0.4);
        }
        .leaflet-control-zoom {
          display: none !important;
        }
        .leaflet-container {
          cursor: default !important;
          background: #0a0f1a !important;
        }
        .leaflet-marker-icon {
          cursor: pointer !important;
        }
      `}</style>
    </section>
  );
};

export default MapSection;
