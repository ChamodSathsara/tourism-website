// components/Footer.tsx
"use client";

import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
} from "lucide-react";
import logo from "../assest/logo.png";
import { useTranslations } from "next-intl"; // ← from "next-intl", NOT "/server"

export function Footer() { // ← no async, no await
  const t = useTranslations("footer"); // ← hook, not await

  const destinations = [
    t("dest1"),
    t("dest2"),
    t("dest3"),
    t("dest4"),
    t("dest5"),
    t("dest6"),
  ];

  const services = [
    t("svc1"),
    t("svc2"),
    t("svc3"),
    t("svc4"),
    t("svc5"),
    t("svc6"),
  ];

  return (
    <footer
      id="contact"
      className="bg-[#040912] text-white/70 pt-20 pb-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="relative h-12 w-40 mb-6">
              <Image
                src={logo}
                alt="Magical Paradise"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-white/40 mb-6 leading-relaxed text-sm">
              {t("tagline")}
            </p>
            <div className="flex space-x-3">
              {[FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0BAADC]/20 hover:border-[#0BAADC]/30 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-bold text-white text-sm mb-6 tracking-widest uppercase">
              {t("destinationsCol")}
            </h4>
            <ul className="space-y-3 text-white/40 text-sm">
              {destinations.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#0BAADC] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-sm mb-6 tracking-widest uppercase">
              {t("servicesCol")}
            </h4>
            <ul className="space-y-3 text-white/40 text-sm">
              {services.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#0BAADC] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-sm mb-6 tracking-widest uppercase">
              {t("contactCol")}
            </h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-[#0BAADC] shrink-0 mt-0.5" />
                <span>
                  123 Galle Road, Colombo 03,
                  <br />
                  Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-[#0BAADC] shrink-0" />
                <span>+94 11 234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="w-5 h-5 text-[#0BAADC] shrink-0" />
                <span>hello@magicalparadise.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/20 text-center md:text-left">
            &copy; {new Date().getFullYear()} Magical Paradise. {t("rights")}{" "}
            <span className="text-white/15 mt-1 block md:inline">
              {t("license")}
            </span>
          </p>
          <div className="flex gap-3">
            {["VISA", "MasterCard", "AMEX"].map((card) => (
              <div
                key={card}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded text-white/40 font-bold text-xs"
              >
                {card}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}