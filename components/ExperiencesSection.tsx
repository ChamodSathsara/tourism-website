"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Experience } from "@/dataConfig/types";
import { experiencesList } from "@/dataConfig/dtaConfig";
import { useRouter } from "next/navigation";

export function ExperiencesSection() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const router = useRouter();

  useEffect(() => {
    setExperiences(experiencesList);
  }, []);
  return (
    <section id="experiences" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-tropical-950 mb-4">
            Magical Experiences
          </h2>
          <div className="w-24 h-1 bg-sand-400 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beyond standard tours, we curate unique moments that connect you
            deeply with the soul of Sri Lanka.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                
                src={exp.image}
                alt={exp.name}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 text-white border border-white/30 group-hover:bg-tropical-600 group-hover:border-tropical-500 transition-colors duration-300">
                  <exp.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2 transform group-hover:-translate-y-1 transition-transform duration-300">
                  {exp.name}
                </h3>
                <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sand-100 text-sm mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
