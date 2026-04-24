"use client";

import { motion } from "framer-motion";
import { QuoteIcon, StarIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export function TestimonialsSection() {
  const t = useTranslations("testimonials");

  const testimonials = [
    { id: 1, textKey: "t1Text", nameKey: "t1Name", countryKey: "t1Country" },
    { id: 2, textKey: "t2Text", nameKey: "t2Name", countryKey: "t2Country" },
    { id: 3, textKey: "t3Text", nameKey: "t3Name", countryKey: "t3Country" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#060d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-serif font-bold text-white mb-4"
          >
            {t("title")}
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1761A0] to-[#0BAADC] mx-auto mb-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0d1424] p-8 rounded-2xl border border-white/5 hover:border-[#0BAADC]/20 transition-colors relative"
            >
              <QuoteIcon className="absolute top-6 right-6 w-12 h-12 text-[#0BAADC]/10" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-5 h-5 fill-[#0BAADC] text-[#0BAADC]"
                  />
                ))}
              </div>
              <p className="text-white/50 italic mb-8 relative z-10 leading-relaxed text-sm">
                &ldquo;{t(testimonial.textKey as any)}&rdquo;
              </p>
              <div className="mt-auto border-t border-white/5 pt-4">
                <p className="font-bold text-white font-serif text-lg">
                  {t(testimonial.nameKey as any)}
                </p>
                <p className="text-sm text-white/30">
                  {t(testimonial.countryKey as any)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-white/40 mb-4 flex items-center justify-center gap-2 text-sm">
            {t("rated")}{" "}
            <span className="font-bold text-white">{t("excellent")}</span>{" "}
            {t("on")}{" "}
            <span className="font-bold text-[#0BAADC]">TripAdvisor</span>
          </p>
          <a
            href="#"
            className="inline-block text-[#0BAADC] font-semibold hover:text-[#2EDCF4] underline underline-offset-4 transition-colors text-sm"
          >
            {t("readMore")}
          </a>
        </div>
      </div>
    </section>
  );
}
