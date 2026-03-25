"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { destinations } from "@/dataConfig/dtaConfig";
import type { Destination } from "@/dataConfig/types";
import { useRouter } from "next/navigation";

export function DayToursSection() {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const pausedRef = useRef(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [dayTours, setDayTours] = useState<Destination[]>();
  const TOURS: Destination[] = [...(dayTours ?? []), ...(dayTours ?? [])];
  const CARD_WIDTH = 340;
  const GAP = 24;
  const SCROLL_SPEED = 0.6;

  useEffect(() => {
    setDayTours(destinations);
  }, []);

  const clickCard = (id: string) => {
    router.push(`/destinations/${id}`);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const singleSetWidth = (dayTours?.length ?? 0) * (CARD_WIDTH + GAP);
    const tick = () => {
      if (!pausedRef.current && el) {
        el.scrollLeft += SCROLL_SPEED;
        if (el.scrollLeft >= singleSetWidth) el.scrollLeft -= singleSetWidth;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === "left" ? -(CARD_WIDTH + GAP) : CARD_WIDTH + GAP,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 lg:py-28 bg-[#060d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              Popular Destinations
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1761A0] to-[#0BAADC] rounded-full" />
          </motion.div>

          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="p-3 rounded-full border border-white/10 hover:bg-white/10 hover:border-[#0BAADC]/50 transition-colors text-white/60 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="p-3 rounded-full border border-white/10 hover:bg-white/10 hover:border-[#0BAADC]/50 transition-colors text-white/60 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative w-full">
          <div className="absolute left-0 top-0 bottom-8 w-16 bg-gradient-to-r from-[#060d1a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-8 w-16 bg-gradient-to-l from-[#060d1a] to-transparent z-10 pointer-events-none" />

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
            style={{ scrollSnapType: "none" }}
          >
            {TOURS.map((tour, index) => (
              <div
                onClick={() => clickCard(tour.id)}
                key={`${tour.id}-${index}`}
                className="shrink-0 group cursor-pointer"
                style={{ width: CARD_WIDTH }}
              >
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-md group-hover:shadow-[0_20px_60px_rgba(11,170,220,0.2)] transition-all duration-300 border border-white/5 group-hover:border-[#0BAADC]/30">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    sizes="340px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-[#0BAADC] transition-colors">
                      {tour.name}
                    </h3>
                    <div className="flex justify-between items-center text-white/90 text-sm">
                      <div className="bg-white/10 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full font-semibold text-white/80 text-xs">
                        {tour.tags.join(" | ")}
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
