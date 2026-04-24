"use client";
import Image from "next/image";
import { MapIcon, HeartIcon, LeafIcon as LeafIcon2 } from "lucide-react";
import img1 from "../assest/hotels/1.jpg";
import img2 from "../assest/hotels/2.jpg";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("about");

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
              {t("title")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1761A0] to-[#0BAADC] mb-8 rounded-full" />
            <div className="space-y-6 text-lg text-white/50 leading-relaxed">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
              <p>{t("p3")}</p>
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
            { icon: MapIcon, title: t("card1Title"), desc: t("card1Desc") },
            { icon: HeartIcon, title: t("card2Title"), desc: t("card2Desc") },
            { icon: LeafIcon2, title: t("card3Title"), desc: t("card3Desc") },
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
