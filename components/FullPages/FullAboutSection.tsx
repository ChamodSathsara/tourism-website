"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  MapIcon, HeartIcon, LeafIcon, PhoneIcon, MailIcon,
  ArrowRightIcon, UsersIcon, AwardIcon, GlobeIcon,
  BabyIcon, ThermometerIcon, ShirtIcon, CoffeeIcon, PlaneIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import img1 from "../../assest/hotels/1.jpg";
import img2 from "../../assest/hotels/2.jpg";
import { useTranslations } from "next-intl";

interface Service {
  id: number;
  nameKey: string;
  descKey: string;
  icon: LucideIcon;
  image: string;
}

const services: Service[] = [
  { id: 1, nameKey: "s1Name", descKey: "s1Desc", icon: BabyIcon,        image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&q=80" },
  { id: 2, nameKey: "s2Name", descKey: "s2Desc", icon: ThermometerIcon, image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&q=80" },
  { id: 3, nameKey: "s3Name", descKey: "s3Desc", icon: ShirtIcon,       image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80" },
  { id: 4, nameKey: "s4Name", descKey: "s4Desc", icon: CoffeeIcon,      image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80" },
  { id: 5, nameKey: "s5Name", descKey: "s5Desc", icon: LeafIcon,        image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=800&q=80" },
  { id: 6, nameKey: "s6Name", descKey: "s6Desc", icon: PlaneIcon,       image: "https://images.unsplash.com/photo-1577720643272-265f1f5c1bfb?w=800&q=80" },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ts = useTranslations("services");
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group bg-[#0d1424] rounded-2xl overflow-hidden border border-white/5 hover:border-[#0BAADC]/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(11,170,220,0.1)] flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <img src={service.image} alt={ts(service.nameKey as any)} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
        <div className="absolute top-4 right-4 w-9 h-9 bg-[#0BAADC]/20 backdrop-blur-sm border border-[#0BAADC]/30 rounded-full flex items-center justify-center">
          <Icon className="w-4 h-4 text-[#0BAADC]" />
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-serif font-bold text-white mb-2">{ts(service.nameKey as any)}</h3>
        <p className="text-white/40 text-sm leading-relaxed flex-grow">{ts(service.descKey as any)}</p>
      </div>
    </motion.div>
  );
}

export function FullAboutUsSection() {
  const t  = useTranslations("fullAbout");
  const ta = useTranslations("about");

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  const whyCards = [
    { icon: UsersIcon,    titleKey: "why1Title", descKey: "why1Desc" },
    { icon: AwardIcon,    titleKey: "why2Title", descKey: "why2Desc" },
    { icon: GlobeIcon,    titleKey: "why3Title", descKey: "why3Desc" },
    { icon: HeartIcon,    titleKey: "why4Title", descKey: "why4Desc" },
  ];

  const valueCards = [
    { icon: MapIcon,    titleKey: "card1Title", descKey: "card1Desc" },
    { icon: HeartIcon,  titleKey: "card2Title", descKey: "card2Desc" },
    { icon: LeafIcon,   titleKey: "card3Title", descKey: "card3Desc" },
  ];

  return (
    <div className="min-h-screen bg-[#060d1a]">
      {/* ── Hero ── */}
      <div ref={heroRef} className="relative h-[62vh] min-h-[440px] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image src={img1} alt="About Magical Paradise" fill priority className="object-cover" style={{ filter: "brightness(0.35) saturate(1.1)" }} />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#060d1a]/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060d1a] via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.05] mb-6 drop-shadow-2xl">
                {t("heroTitle")}
              </h1>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-lg">
                {t("heroSubtitle1")}{" "}
                <span className="text-[#0BAADC] font-semibold">{t("heroHighlight")}</span>.
              </p>
              <div className="flex gap-4 mt-8">
                <a href="#story" className="px-6 py-3 bg-gradient-to-r from-[#1761A0] to-[#0BAADC] text-white font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(11,170,220,0.3)] flex items-center gap-2">
                  {t("heroBtn1")}
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
                <a href="#contact" className="px-6 py-3 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-xl transition-colors">
                  {t("heroBtn2")}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Our Story ── */}
      <section id="story" className="py-20 lg:py-28 bg-[#080e1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-[#0BAADC]" />
                <span className="text-xs uppercase tracking-widest text-[#0BAADC] font-bold">{t("sectionWhoWeAre")}</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">{t("storyTitle")}</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#1761A0] to-[#0BAADC] mb-8 rounded-full" />
              <div className="space-y-5 text-lg text-white/50 leading-relaxed">
                <p>{ta("p1")}</p>
                <p>{ta("p2")}</p>
                <p>{ta("p3")}</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid grid-cols-2 gap-4">
              <div className="relative w-full h-64 mt-8 rounded-2xl overflow-hidden border border-white/5">
                <Image src={img1} alt="Sri Lanka Landscape" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
              <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-white/5">
                <Image src={img2} alt="Sri Lanka Temple" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {valueCards.map((item, index) => (
              <motion.div
                key={item.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-[#0d1424] p-8 rounded-2xl text-center border border-white/5 hover:border-[#0BAADC]/20 transition-colors group"
              >
                <div className="w-16 h-16 mx-auto bg-[#0BAADC]/10 border border-[#0BAADC]/20 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-[#0BAADC]" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-3">{ta(item.titleKey as any)}</h3>
                <p className="text-white/40">{ta(item.descKey as any)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Special Services ── */}
      <section className="py-20 bg-[#060d1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-6 h-px bg-[#0BAADC]" />
              <span className="text-xs uppercase tracking-widest text-[#0BAADC] font-bold">{t("servicesLabel")}</span>
              <div className="w-6 h-px bg-[#0BAADC]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-4">{t("servicesTitle")}</h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">{t("servicesDesc")}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-[#080e1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-6 h-px bg-[#0BAADC]" />
              <span className="text-xs uppercase tracking-widest text-[#0BAADC] font-bold">{t("whyLabel")}</span>
              <div className="w-6 h-px bg-[#0BAADC]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white">{t("whyTitle")}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCards.map((item, index) => (
              <motion.div
                key={item.titleKey}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0d1424] rounded-2xl p-6 border border-white/5 hover:border-[#0BAADC]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(11,170,220,0.1)]"
              >
                <div className="w-12 h-12 bg-[#0BAADC]/10 border border-[#0BAADC]/20 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#0BAADC]" />
                </div>
                <h3 className="font-serif font-bold text-white text-lg mb-2">{t(item.titleKey as any)}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{t(item.descKey as any)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section id="contact" className="py-20 lg:py-28 bg-[#060d1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden min-h-[320px] border border-white/5">
            <Image src={img2} alt="Contact Us" fill className="object-cover" style={{ filter: "brightness(0.25) saturate(1.1)" }} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#060d1a]/70 via-black/30 to-transparent" />
            <div className="relative z-10 py-16 px-8 md:px-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-px bg-[#0BAADC]" />
                    <span className="text-[#0BAADC] text-xs uppercase tracking-widest font-bold">{t("ctaLabel")}</span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight">{t("ctaTitle")}</h2>
                  <p className="text-white/50 text-lg leading-relaxed">{t("ctaDesc")}</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-4">
                  {[
                    { icon: PhoneIcon, label: t("ctaCall"),  value: "+94 77 436 5214",         href: "tel:+94774365214" },
                    { icon: MailIcon,  label: t("ctaEmail"), value: "travel@magicalparadise.lk", href: "mailto:travel@magicalparadise.lk" },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <a key={label} href={href} className="flex items-center gap-4 bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10 hover:border-[#0BAADC]/30 rounded-2xl px-6 py-4 transition-all duration-300 group">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#1761A0] to-[#0BAADC] rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white/40 text-xs uppercase tracking-wider mb-0.5">{label}</div>
                        <div className="text-white font-semibold">{value}</div>
                      </div>
                      <ArrowRightIcon className="w-4 h-4 text-white/30 ml-auto group-hover:translate-x-1 transition-transform" />
                    </a>
                  ))}
                  <a href="/contact" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#1761A0] to-[#0BAADC] text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-[0_0_20px_rgba(11,170,220,0.3)]">
                    {t("ctaSend")}
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
