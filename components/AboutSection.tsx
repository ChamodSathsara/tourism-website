// ── AboutSection.tsx (dark theme) ───────────────────────────────────────────
"use client";
import Image from "next/image";
import { MapIcon, HeartIcon, LeafIcon as LeafIcon2 } from "lucide-react";
import img1 from "../assest/hotels/1.jpg";
import img2 from "../assest/hotels/2.jpg";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#080e1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1761A0] to-[#0BAADC] mb-8 rounded-full" />
            <div className="space-y-6 text-lg text-white/50 leading-relaxed">
              <p>
                Founded over 15 years ago, Magical Paradise was born out of a
                deep passion for Sri Lanka&apos;s unparalleled beauty and rich
                heritage. We started as a small team of local experts who wanted
                to share the authentic soul of our island with the world.
              </p>
              <p>
                Today, we are recognized as one of the premier luxury
                destination management companies in Sri Lanka. We don&apos;t
                just sell tours; we craft personalized journeys that immerse you
                in the culture, nature, and warmth of our people.
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
            <div className="relative w-full h-64 mt-8 rounded-2xl overflow-hidden border border-white/5">
              <Image
                src={img1}
                alt="Sri Lanka Tea Plucker"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-white/5">
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
              icon: LeafIcon2,
              title: "Sustainable Tourism",
              desc: "Eco-friendly practices that respect wildlife and support local artisans and communities.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0d1424] p-8 rounded-2xl text-center border border-white/5 hover:border-[#0BAADC]/20 transition-colors"
            >
              <div className="w-16 h-16 mx-auto bg-[#0BAADC]/10 border border-[#0BAADC]/20 rounded-full flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-[#0BAADC]" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-white/40">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
