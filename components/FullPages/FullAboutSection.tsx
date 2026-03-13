"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  MapIcon,
  HeartIcon,
  LeafIcon,
  PhoneIcon,
  MailIcon,
  ArrowRightIcon,
  UsersIcon,
  AwardIcon,
  GlobeIcon,
  BabyIcon,
  ThermometerIcon,
  ShirtIcon,
  CoffeeIcon,
  PlaneIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import img1 from "../../assest/hotels/1.jpg";
import img2 from "../../assest/hotels/2.jpg";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Service {
  id: number;
  name: string;
  desc: string;
  icon: LucideIcon;
  image: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const services: Service[] = [
  {
    id: 1,
    name: "Baby Car Seats",
    desc: "Safe and comfortable travel for your little ones.",
    icon: BabyIcon,
    image:
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&q=80",
  },
  {
    id: 2,
    name: "Cool Boxes",
    desc: "Keep your beverages chilled during long drives.",
    icon: ThermometerIcon,
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&q=80",
  },
  {
    id: 3,
    name: "Branded T-Shirts",
    desc: "Complimentary Magical Paradise apparel.",
    icon: ShirtIcon,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
  },
  {
    id: 4,
    name: "Ceylon Tea",
    desc: "Premium tea purchases directly from estates.",
    icon: CoffeeIcon,
    image:
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80",
  },
  {
    id: 5,
    name: "Spices & Cinnamon",
    desc: "Authentic Sri Lankan spices to take home.",
    icon: LeafIcon,
    image:
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=800&q=80",
  },
  {
    id: 6,
    name: "Airport Transfers",
    desc: "Seamless VIP meet and greet at the airport.",
    icon: PlaneIcon,
    image:
      "https://images.unsplash.com/photo-1577720643272-265f1f5c1bfb?w=800&q=80",
  },
];

// ─── Service Card ─────────────────────────────────────────────────────────────

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        {/* Icon badge */}
        <div className="absolute top-4 right-4 z-20 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
          <Icon className="w-4 h-4 text-amber-600" />
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
          {service.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-grow">
          {service.desc}
        </p>
      </div>
    </motion.div>
  );
}

// ─── About Us Page ────────────────────────────────────────────────────────────

export function FullAboutUsSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero Banner ── */}
      <div
        ref={heroRef}
        className="relative h-[62vh] min-h-[440px] overflow-hidden"
      >
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image
            src={img1}
            alt="About Magical Paradise"
            fill
            priority
            className="object-cover"
            style={{ filter: "brightness(0.42) saturate(1.1)" }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="max-w-2xl"
            >
              {/* <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-amber-400" />
                <span className="text-amber-400 text-sm font-semibold uppercase tracking-[0.25em]">
                  Our Story
                </span>
              </div> */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.05] mb-6 drop-shadow-2xl">
                About Us
              </h1>
              <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-lg">
                Born from a passion for Sri Lanka's unparalleled beauty —
                crafting unforgettable journeys for over{" "}
                <span className="text-amber-300 font-semibold">15 years</span>.
              </p>
              <div className="flex gap-4 mt-8">
                <a
                  href="#story"
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-xl transition-colors shadow-lg flex items-center gap-2"
                >
                  Read Our Story
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-white/40 hover:bg-white/10 text-white font-semibold rounded-xl transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Our Story ── */}
      <section id="story" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-amber-500" />
                <span className="text-xs uppercase tracking-widest text-amber-600 font-bold">
                  Who We Are
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-amber-400 mb-8 rounded-full" />
              <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded over 15 years ago, Magical Paradise was born out of a
                  deep passion for Sri Lanka's unparalleled beauty and rich
                  heritage. We started as a small team of local experts who
                  wanted to share the authentic soul of our island with the
                  world.
                </p>
                <p>
                  Today, we are recognized as one of the premier luxury
                  destination management companies in Sri Lanka. We don't just
                  sell tours; we craft personalized journeys that immerse you in
                  the culture, nature, and warmth of our people.
                </p>
                <p>
                  Our commitment goes beyond luxury. We are dedicated to
                  sustainable tourism practices that protect our environment and
                  uplift local communities, ensuring that the magic of Sri Lanka
                  endures for generations to come.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="relative w-full h-64 mt-8 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={img1}
                  alt="Sri Lanka Landscape"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={img2}
                  alt="Sri Lanka Temple"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </motion.div>
          </div>

          {/* ── Values ── */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapIcon,
                title: "Local Expertise",
                desc: "Over 15 years of intimate knowledge of Sri Lanka's hidden gems and best-kept secrets.",
              },
              {
                icon: HeartIcon,
                title: "Personalized Service",
                desc: "Every itinerary is meticulously tailored to your unique preferences, pace, and style.",
              },
              {
                icon: LeafIcon,
                title: "Sustainable Tourism",
                desc: "Eco-friendly practices that respect wildlife and support local artisans and communities.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-stone-50 p-8 rounded-2xl text-center group hover:bg-amber-50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                  <item.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Special Services ── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-6 h-px bg-amber-500" />
              <span className="text-xs uppercase tracking-widest text-amber-600 font-bold">
                What We Offer
              </span>
              <div className="w-6 h-px bg-amber-500" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              Our Special Services
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Every detail matters. These exclusive extras are included to make
              your Sri Lanka journey seamless, comfortable, and truly memorable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-6 h-px bg-amber-500" />
              <span className="text-xs uppercase tracking-widest text-amber-600 font-bold">
                Why Us
              </span>
              <div className="w-6 h-px bg-amber-500" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900">
              The Magical Paradise Difference
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: UsersIcon,
                title: "Expert Local Guides",
                desc: "Handpicked guides with deep regional knowledge and genuine passion for sharing their homeland.",
              },
              {
                icon: AwardIcon,
                title: "Award-Winning",
                desc: "Recognized by international travel bodies for excellence in luxury and sustainable tourism.",
              },
              {
                icon: GlobeIcon,
                title: "Island-Wide Network",
                desc: "Exclusive partnerships with the finest hotels, drivers, and experience providers across Sri Lanka.",
              },
              {
                icon: HeartIcon,
                title: "24/7 Support",
                desc: "Round-the-clock assistance throughout your journey — we're always just a call away.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-stone-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-stone-100"
              >
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section id="contact" className="py-20 lg:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden min-h-[320px]">
            <Image
              src={img2}
              alt="Contact Us"
              fill
              className="object-cover"
              style={{ filter: "brightness(0.3) saturate(1.1)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

            <div className="relative z-10 py-16 px-8 md:px-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-px bg-amber-400" />
                    <span className="text-amber-400 text-xs uppercase tracking-widest font-bold">
                      Get In Touch
                    </span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight">
                    Let's Plan Your Dream Journey
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Ready to experience the magic of Sri Lanka? Our travel
                    specialists are here to craft your perfect personalised
                    itinerary — no obligation, just inspiration.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="space-y-4"
                >
                  <a
                    href="tel:+94000000000"
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 rounded-2xl px-6 py-4 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-400 transition-colors">
                      <PhoneIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white/60 text-xs uppercase tracking-wider mb-0.5">
                        Call Us
                      </div>
                      <div className="text-white font-semibold">
                        +94 000 000 000
                      </div>
                    </div>
                    <ArrowRightIcon className="w-4 h-4 text-white/40 ml-auto group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="mailto:info@magicalparadise.com"
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 rounded-2xl px-6 py-4 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-400 transition-colors">
                      <MailIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white/60 text-xs uppercase tracking-wider mb-0.5">
                        Email Us
                      </div>
                      <div className="text-white font-semibold">
                        info@magicalparadise.com
                      </div>
                    </div>
                    <ArrowRightIcon className="w-4 h-4 text-white/40 ml-auto group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold py-4 px-8 rounded-2xl transition-colors shadow-lg"
                  >
                    Send Us a Message
                    <ArrowRightIcon className="w-4 h-4" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
