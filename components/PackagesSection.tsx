'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ClockIcon, ChevronRightIcon } from 'lucide-react'
import img1 from '../assest/packages/1.jpg'
import img2 from '../assest/packages/2.jpg'
import img3 from '../assest/packages/3.jpg'
import img4 from '../assest/packages/4.jpg'
import img5 from '../assest/packages/5.jpg'
import img6 from '../assest/packages/6.jpg'

const packages = [
  {
    id: 1,
    title: 'Cultural Triangle Explorer',
    duration: '7 Days',
    price: '$899',
    description:
      'Discover ancient kingdoms, majestic stupas, and the iconic Sigiriya Rock Fortress.',
    image: img1,
  },
  {
    id: 2,
    title: 'Coastal Paradise',
    duration: '5 Days',
    price: '$649',
    description:
      'Relax on pristine southern beaches, surf in Weligama, and explore historic Galle Fort.',
    image: img2,
  },
  {
    id: 3,
    title: 'Hill Country Escape',
    duration: '4 Days',
    price: '$549',
    description:
      'Journey through misty tea plantations, cascading waterfalls, and take the famous Ella train ride.',
    image: img3,
  },
  {
    id: 4,
    title: 'Wildlife Safari Adventure',
    duration: '6 Days',
    price: '$799',
    description:
      'Spot elusive leopards in Yala, elephants in Minneriya, and diverse birdlife across national parks.',
    image: img4,
  },
  {
    id: 5,
    title: 'Romantic Honeymoon',
    duration: '8 Days',
    price: '$1,299',
    description:
      'Luxury boutique hotels, private candlelit dinners, and unforgettable couples experiences.',
    image: img5,
  },
  {
    id: 6,
    title: 'Complete Sri Lanka',
    duration: '14 Days',
    price: '$1,899',
    description:
      'The ultimate grand tour covering culture, nature, wildlife, and beaches in one epic journey.',
    image: img6,
  },
]

export function PackagesSection() {
  return (
    <section id="packages" className="py-20 lg:py-28 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-tropical-950 mb-4">
            Curated Travel Packages
          </h2>
          <div className="w-24 h-1 bg-sand-400 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handcrafted itineraries designed to showcase the very best of Sri
            Lanka, tailored for unforgettable memories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold text-tropical-900 shadow-sm">
                  <ClockIcon className="w-4 h-4" />
                  {pkg.duration}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif font-bold text-gray-900 leading-tight pr-4">
                    {pkg.title}
                  </h3>
                  <div className="text-right shrink-0">
                    <span className="block text-xs text-gray-500 uppercase tracking-wider">From</span>
                    <span className="text-lg font-bold text-tropical-700">{pkg.price}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 flex-grow">{pkg.description}</p>

                <button className="w-full py-3 px-4 border border-tropical-200 rounded-lg text-tropical-700 font-medium flex items-center justify-center gap-2 group-hover:bg-tropical-700 group-hover:text-white transition-colors duration-300">
                  View Itinerary
                  <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}