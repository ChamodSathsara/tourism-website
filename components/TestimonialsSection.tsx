"use client";

import React from "react";
import { motion } from "framer-motion";
import { StarIcon, QuoteIcon } from "lucide-react";


const testimonials = [
  {
    id: 1,
    text: "An absolutely flawless experience from start to finish. Our driver was incredibly knowledgeable, the hotels were breathtaking, and the itinerary was perfectly paced. Magical Paradise truly lives up to its name.",
    name: "Sarah & James",
    country: "United Kingdom 🇬🇧",
  },
  {
    id: 2,
    text: "We booked our honeymoon through them and it exceeded all expectations. The private dinner in Ella and the seamless transfer to the Maldives made it the trip of a lifetime. Highly recommend their services!",
    name: "Michael Chen",
    country: "Singapore 🇸🇬",
  },
  {
    id: 3,
    text: "As a solo female traveler, safety and comfort were my top priorities. The team ensured I felt secure while still experiencing the authentic culture of Sri Lanka. The tea country tour was my absolute favorite.",
    name: "Emma Schmidt",
    country: "Germany 🇩🇪",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-sand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-serif font-bold text-tropical-950 mb-4"
          >
            What Our Travelers Say
          </motion.h2>
          <div className="w-24 h-1 bg-tropical-600 mx-auto mb-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm relative"
            >
              <QuoteIcon className="absolute top-6 right-6 w-12 h-12 text-sand-200 opacity-50" />

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-5 h-5 fill-tropical-500 text-tropical-500"
                  />
                ))}
              </div>

              <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="mt-auto border-t border-gray-100 pt-4">
                <p className="font-bold text-gray-900 font-serif text-lg">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.country}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4 flex items-center justify-center gap-2">
            Rated <span className="font-bold text-gray-900">Excellent</span> on
            <span className="font-bold text-tropical-800 flex items-center gap-1">
              TripAdvisor
            </span>
          </p>
          <a
            href="#"
            className="inline-block text-tropical-700 font-semibold hover:text-tropical-800 underline underline-offset-4 transition-colors"
          >
            Read More Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
