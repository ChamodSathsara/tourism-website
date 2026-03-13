'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  CameraIcon,
  LeafIcon,
  ShipIcon,
  CastleIcon,
  SparklesIcon,
  UtensilsIcon,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import img1 from '../assest/experiences/1.jpg'
import img2 from '../assest/experiences/2.jpg'
import img3 from '../assest/experiences/3.jpg'
import img4 from '../assest/experiences/4.jpg'
import img5 from '../assest/experiences/5.jpg'
import img6 from '../assest/experiences/6.jpg'

const experiences: {
  id: number
  title: string
  desc: string
  icon: LucideIcon
  image: any
}[] = [
  {
    id: 1,
    title: 'Safari & Wildlife',
    desc: 'Spot elusive leopards and wild elephants in their natural habitat.',
    icon: CameraIcon,
    image: img1,
  },
  {
    id: 2,
    title: 'Tea Plantations',
    desc: 'Walk through misty hills and taste world-renowned Ceylon tea.',
    icon: LeafIcon,
    image: img2,
  },
  {
    id: 3,
    title: 'Whale Watching',
    desc: 'Encounter majestic blue whales in the deep waters of Mirissa.',
    icon: ShipIcon,
    image: img3,
  },
  {
    id: 4,
    title: 'Cultural Heritage',
    desc: 'Explore ancient ruins, sacred temples, and royal palaces.',
    icon: CastleIcon,
    image: img4,
  },
  {
    id: 5,
    title: 'Ayurveda & Wellness',
    desc: 'Rejuvenate your body and soul with traditional spa retreats.',
    icon: SparklesIcon,
    image: img5,
  },
  {
    id: 6,
    title: 'Culinary Journeys',
    desc: 'Learn the secrets of spicy, flavorful Sri Lankan cuisine.',
    icon: UtensilsIcon,
    image: img6,
  },
]

export function ExperiencesSection() {
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
            Beyond standard tours, we curate unique moments that connect you deeply with the soul of
            Sri Lanka.
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
                alt={exp.title}
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
                  {exp.title}
                </h3>
                <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sand-100 text-sm mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {exp.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}