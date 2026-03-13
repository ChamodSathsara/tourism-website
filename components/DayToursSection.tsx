"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ClockIcon,
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import img1 from "../assest/DayTours/1.jpg";
import img2 from "../assest/DayTours/2.jpg";
import img3 from "../assest/DayTours/3.jpg";
import img4 from "../assest/DayTours/4.jpg";
import img5 from "../assest/DayTours/5.jpg";
import img6 from "../assest/DayTours/6.jpg";
import img7 from "../assest/DayTours/7.jpg";

const dayTours = [
  {
    id: 1,
    title: "Sigiriya Rock Fortress",
    duration: "Full Day",
    price: "$85",
    rating: 5.0,
    image: img1,
  },
  {
    id: 2,
    title: "Kandy Temple Tour",
    duration: "Half Day",
    price: "$45",
    rating: 4.8,
    image: img2,
  },
  {
    id: 3,
    title: "Galle Fort Walk",
    duration: "Half Day",
    price: "$35",
    rating: 4.9,
    image: img3,
  },
  {
    id: 4,
    title: "Yala Safari",
    duration: "Full Day",
    price: "$120",
    rating: 4.9,
    image: img4,
  },
  {
    id: 5,
    title: "Ella Train Ride",
    duration: "Full Day",
    price: "$65",
    rating: 5.0,
    image: img5,
  },
  {
    id: 6,
    title: "Whale Watching Mirissa",
    duration: "Half Day",
    price: "$75",
    rating: 4.7,
    image: img6,
  },
  {
    id: 7,
    title: "Nuwara Eliya Tea Country",
    duration: "Full Day",
    price: "$90",
    rating: 4.8,
    image: img7,
  },
];

// duplicate list so infinite scroll feels seamless
const TOURS = [...dayTours, ...dayTours];

const CARD_WIDTH = 340; // px — matches min-w below
const GAP = 24; // px — gap-6
const SCROLL_SPEED = 0.6; // px per animation frame (~36px/s at 60fps)

export function DayToursSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const pausedRef = useRef(false); // paused while user hovers or manually scrolls
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // ── auto-scroll loop ────────────────────────────────────────────────────
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const singleSetWidth = dayTours.length * (CARD_WIDTH + GAP);

    const tick = () => {
      if (!pausedRef.current && el) {
        el.scrollLeft += SCROLL_SPEED;

        // when we've scrolled through the first copy, jump back seamlessly
        if (el.scrollLeft >= singleSetWidth) {
          el.scrollLeft -= singleSetWidth;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // ── update arrow button state ───────────────────────────────────────────
  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  // ── manual arrow scroll ─────────────────────────────────────────────────
  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === "left" ? -(CARD_WIDTH + GAP) : CARD_WIDTH + GAP,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-tropical-950 mb-4">
              Popular Day Tours
            </h2>
            <div className="w-24 h-1 bg-sand-400 rounded-full" />
          </motion.div>

          {/* Arrow buttons */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="p-3 rounded-full border border-gray-200 hover:bg-sand-50 hover:border-sand-200 transition-colors text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Scroll left"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="p-3 rounded-full border border-gray-200 hover:bg-sand-50 hover:border-sand-200 transition-colors text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Scroll right"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scroll track */}
        <div className="relative w-full ">
          {/* left fade edge */}
          <div className="absolute left-0 top-0 bottom-8 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          {/* right fade edge */}
          <div className="absolute right-0 top-0 bottom-8 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            onMouseEnter={() => {
              pausedRef.current = true;
            }}
            onMouseLeave={() => {
              pausedRef.current = false;
            }}
            onTouchStart={() => {
              pausedRef.current = true;
            }}
            onTouchEnd={() => {
              pausedRef.current = false;
            }}
            onScroll={updateArrows}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-8 pt-4"
            style={{ scrollSnapType: "none" }} // disable snap so auto-scroll is smooth
          >
            {TOURS.map((tour, index) => (
              <div
                key={`${tour.id}-${index}`}
                className="shrink-0  group cursor-pointer"
                style={{ width: CARD_WIDTH }}
              >
                {/* ── Card — taller image ── */}
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    sizes="340px"
                  />
                  {/* gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                  {/* rating badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-xl flex items-center gap-1 text-sm font-bold text-gray-900">
                    <StarIcon className="w-4 h-4 fill-sand-400 text-sand-400" />
                    {tour.rating}
                  </div>

                  {/* bottom info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-sand-200 transition-colors">
                      {tour.title}
                    </h3>
                    <div className="flex justify-between items-center text-white/90 text-sm">
                      <div className="flex items-center gap-1.5">
                        <ClockIcon className="w-4 h-4" />
                        {tour.duration}
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-semibold text-white">
                        {tour.price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
