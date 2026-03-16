"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { XIcon, ZoomInIcon } from "lucide-react";
import img1 from "../assest/gallery/1.jpg";
import img2 from "../assest/gallery/2.jpg";
import img3 from "../assest/gallery/3.jpg";
import img4 from "../assest/gallery/4.jpg";
import img5 from "../assest/gallery/5.jpg";
import img6 from "../assest/gallery/6.jpg";
import img7 from "../assest/gallery/7.jpg";

// ─── Replace these with your local imports once you have images ───────────────
// import g1 from '../assest/Gallery/1.jpg'  etc.
// For now we use Unsplash URLs — swap src values below.
const galleryImages = [
  { id: 1, src: img1, alt: "Sigiriya Rock Fortress", col: 1 },
  { id: 2, src: img2, alt: "Coastal Paradise", col: 2 },
  { id: 3, src: img3, alt: "Tea Plantations Ella", col: 3 },
  { id: 4, src: img4, alt: "Yala Safari", col: 1 },
  { id: 5, src: img5, alt: "Cultural Heritage Temple", col: 2 },
  { id: 6, src: img6, alt: "Galle Fort", col: 3 },
  { id: 7, src: img7, alt: "Luxury Hotel Pool", col: 1 },
  { id: 8, src: img1, alt: "Ella Train Ride", col: 2 },
  { id: 9, src: img2, alt: "Whale Watching Mirissa", col: 3 },
  { id: 10, src: img3, alt: "Maldives Overwater Villa", col: 1 },
  { id: 11, src: img4, alt: "Ayurveda Wellness Spa", col: 2 },
  { id: 12, src: img5, alt: "Nuwara Eliya Tea Country", col: 3 },
];

// split into 3 columns for the masonry layout
const col1 = galleryImages.filter((i) => i.col === 1);
const col2 = galleryImages.filter((i) => i.col === 2);
const col3 = galleryImages.filter((i) => i.col === 3);

// ─── Single image card with hover zoom + scale ────────────────────────────────
function GalleryCard({
  img,
  index,
  onOpen,
}: {
  img: (typeof galleryImages)[0];
  index: number;
  onOpen: (img: (typeof galleryImages)[0]) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.03, zIndex: 10 }}
      onClick={() => onOpen(img)}
      className="relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-300 group"
      style={{
        aspectRatio: index % 3 === 0 ? "3/4" : index % 3 === 1 ? "4/3" : "1/1",
      }}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      {/* dark overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />

      {/* zoom icon + caption */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-white/20 backdrop-blur-md rounded-full p-3 mb-3 border border-white/30">
          <ZoomInIcon className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-white text-sm font-medium">{img.alt}</p>
      </div>
    </motion.div>
  );
}

// ─── One scrolling column (direction: up or down) ─────────────────────────────
function ScrollColumn({
  images,
  direction,
  columnIndex,
  onOpen,
}: {
  images: typeof galleryImages;
  direction: "up" | "down";
  columnIndex: number;
  onOpen: (img: (typeof galleryImages)[0]) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // column 1 scrolls up, column 2 stays, column 3 scrolls down
  const yUp = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const yDown = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const yNone = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

  const y = direction === "up" ? yUp : direction === "down" ? yDown : yNone;

  // duplicate images so the column looks full
  const doubled = [...images, ...images];

  return (
    <motion.div ref={ref} style={{ y }} className="flex flex-col gap-4">
      {doubled.map((img, i) => (
        <GalleryCard
          key={`${img.id}-${i}`}
          img={img}
          index={i + columnIndex * 4}
          onOpen={onOpen}
        />
      ))}
    </motion.div>
  );
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({
  img,
  onClose,
}: {
  img: (typeof galleryImages)[0];
  onClose: () => void;
}) {
  // close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full max-h-[88vh] rounded-3xl overflow-hidden shadow-2xl"
      >
        <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="90vw"
            priority
          />
          {/* caption bar */}
          <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-white font-serif text-xl font-bold">{img.alt}</p>
            <p className="text-white/60 text-sm mt-0.5">
              Sri Lanka · Magical Paradise
            </p>
          </div>
        </div>

        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/15 hover:bg-white/30 backdrop-blur-md text-white rounded-full p-2.5 transition-colors border border-white/20"
          aria-label="Close"
        >
          <XIcon className="w-5 h-5" />
        </button>
      </motion.div>
    </motion.div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export function GallerySection() {
  const [lightbox, setLightbox] = useState<(typeof galleryImages)[0] | null>(
    null,
  );

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-sand-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-tropical-950 mb-4">
            Life Through Our Lens
          </h2>
          <div className="w-24 h-1 bg-sand-400 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every frame tells a story. A glimpse into the breathtaking moments
            that await you across Sri Lanka and beyond.
          </p>
        </motion.div>

        {/* 3-column masonry with parallax scroll directions */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start"
          style={{ minHeight: 900 }}
        >
          <ScrollColumn
            images={col1}
            direction="up"
            columnIndex={0}
            onOpen={setLightbox}
          />
          <ScrollColumn
            images={col2}
            direction="down"
            columnIndex={1}
            onOpen={setLightbox}
          />
          <ScrollColumn
            images={col3}
            direction="up"
            columnIndex={2}
            onOpen={setLightbox}
          />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-tropical-700 hover:bg-tropical-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            View Full Gallery on Instagram
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox img={lightbox} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
