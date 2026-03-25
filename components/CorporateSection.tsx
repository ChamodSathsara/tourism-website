// ── CorporateSection.tsx (dark theme) ───────────────────────────────────────

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  BriefcaseIcon,
  UsersIcon,
  PlaneIcon,
  GlassWaterIcon,
} from "lucide-react";
import img from "../assest/testimonials/1.jpg";
import { useRouter as useNextRouter } from "next/navigation";

export function CorporateSection() {
  const router = useNextRouter();
  return (
    <section className="py-20 lg:py-28 bg-[#080e1c] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#0BAADC] font-semibold tracking-wider uppercase text-sm mb-4 block">
              Corporate & Groups
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Corporate Events & Retreats
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1761A0] to-[#0BAADC] mb-8 rounded-full" />
            <p className="text-lg text-white/40 mb-10 leading-relaxed">
              Elevate your business gatherings in paradise. From executive
              retreats in the tea country to large-scale conferences in Colombo,
              we provide end-to-end corporate event planning tailored to your
              organization's goals.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {[
                {
                  icon: UsersIcon,
                  title: "Team Building",
                  desc: "Engaging activities in nature",
                },
                {
                  icon: BriefcaseIcon,
                  title: "Conferences",
                  desc: "Premium venue sourcing",
                },
                {
                  icon: PlaneIcon,
                  title: "Incentive Travel",
                  desc: "Reward your top performers",
                },
                {
                  icon: GlassWaterIcon,
                  title: "Gala Dinners",
                  desc: "Unforgettable evening events",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="bg-[#0BAADC]/10 border border-[#0BAADC]/20 p-3 rounded-xl text-[#0BAADC] shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-white/40">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => router.push("/partnership")}
              className="bg-gradient-to-r from-[#1761A0] to-[#0BAADC] hover:from-[#0d4f8a] hover:to-[#099bbf] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(11,170,220,0.3)] hover:shadow-[0_0_50px_rgba(11,170,220,0.5)]"
            >
              Request a Proposal
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-white/5">
              <Image
                src={img}
                alt="Corporate Retreat"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060d1a]/40 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#1761A0]/10 rounded-3xl -z-10" />
            <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-[#0BAADC]/20 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
