"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRightIcon, SendIcon, CheckCircleIcon } from "lucide-react";

const heroImg =
  "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?w=1600&q=80";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  network: string;
  company: string;
  language: string;
  website: string;
  companyType: string;
  telephone: string;
  country: string;
}

const TRAVEL_NETWORKS = [
  "Virtuoso",
  "Traveller Made",
  "Pure Life Experiences",
  "Signature Travel Network",
  "Travel Leaders",
  "Connections Luxury",
  "Emotions Travel Community",
  "Private Luxury Forums",
  "American Express",
  "Luxperience",
  "TAANZ",
  "360 Private Travel",
  "Not Applicable",
];
const LANGUAGES = ["English", "French", "Spanish"];
const COMPANY_TYPES = [
  "Tour Operator",
  "Independent Travel Designer",
  "Travel Agent",
  "Destination Management Company",
  "MICE Travel Agent",
  "Other",
];

const perks = [
  {
    title: "Exclusive partner rates",
    desc: "Access preferential pricing across all our Sri Lanka packages.",
  },
  {
    title: "Dedicated account manager",
    desc: "A specialist on hand to assist you and your clients 24/7.",
  },
  {
    title: "Priority FAM trip invitations",
    desc: "Experience our destinations first-hand with curated press trips.",
  },
  {
    title: "Marketing collateral",
    desc: "High-res imagery, brochures and sales tools ready to use.",
  },
];

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#0BAADC]/50 focus:border-[#0BAADC]/50 focus:bg-white/8 transition-all duration-200 [&>option]:bg-[#0d1424] [&>option]:text-white";
const labelClass =
  "block text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-1.5";

function RegisterForm() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    network: "",
    company: "",
    language: "",
    website: "",
    companyType: "",
    telephone: "",
    country: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isValid =
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.email.trim() &&
    form.company.trim() &&
    form.companyType &&
    form.country.trim();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isValid) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45 }}
        className="flex flex-col items-center justify-center py-20 text-center"
      >
        <div className="w-20 h-20 bg-[#0BAADC]/10 border border-[#0BAADC]/30 rounded-full flex items-center justify-center mb-6 ring-4 ring-[#0BAADC]/10">
          <CheckCircleIcon className="w-9 h-9 text-[#0BAADC]" />
        </div>
        <h3 className="text-2xl font-semibold text-white mb-3">
          Registration Submitted!
        </h3>
        <p className="text-white/40 text-sm max-w-xs leading-relaxed mb-8">
          Thank you for registering. Our partnerships team will review your
          details and be in touch within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({
              firstName: "",
              lastName: "",
              email: "",
              network: "",
              company: "",
              language: "",
              website: "",
              companyType: "",
              telephone: "",
              country: "",
            });
          }}
          className="inline-flex items-center gap-2 px-6 py-3 border border-[#0BAADC]/30 text-[#0BAADC] text-sm font-semibold rounded-xl hover:bg-[#0BAADC] hover:text-white hover:border-[#0BAADC] transition-all duration-300"
        >
          Register Another
          <ArrowRightIcon className="w-4 h-4" />
        </button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            First Name <span className="text-[#0BAADC]">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First name"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>
            Last Name <span className="text-[#0BAADC]">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last name"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className={labelClass}>
          Email Address <span className="text-[#0BAADC]">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className={inputClass}
        />
      </div>
      <div>
        <label className={labelClass}>Travel Network</label>
        <select
          name="network"
          value={form.network}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="" disabled>
            Select your network
          </option>
          {TRAVEL_NETWORKS.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Company Name <span className="text-[#0BAADC]">*</span>
          </label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Your company"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Preferred Language</label>
          <select
            name="language"
            value={form.language}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>
              Select language
            </option>
            {LANGUAGES.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className={labelClass}>Website</label>
        <input
          type="url"
          name="website"
          value={form.website}
          onChange={handleChange}
          placeholder="https://yourwebsite.com"
          className={inputClass}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Company Type <span className="text-[#0BAADC]">*</span>
          </label>
          <select
            name="companyType"
            value={form.companyType}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>
              Select type
            </option>
            {COMPANY_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Telephone</label>
          <input
            type="tel"
            name="telephone"
            value={form.telephone}
            onChange={handleChange}
            placeholder="+1 000 000 0000"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className={labelClass}>
          Country <span className="text-[#0BAADC]">*</span>
        </label>
        <input
          type="text"
          name="country"
          value={form.country}
          onChange={handleChange}
          placeholder="Your country"
          className={inputClass}
        />
      </div>
      <button
        onClick={handleSubmit}
        disabled={loading || !isValid}
        className="w-full py-4 px-6 bg-gradient-to-r from-[#1761A0] to-[#0BAADC] hover:from-[#0d4f8a] hover:to-[#099bbf] disabled:from-white/10 disabled:to-white/10 disabled:cursor-not-allowed text-white font-semibold text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(11,170,220,0.3)] hover:shadow-[0_0_30px_rgba(11,170,220,0.5)] mt-2"
      >
        {loading ? (
          <>
            <motion.div
              className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            />
            Submitting…
          </>
        ) : (
          <>
            Complete Registration
            <SendIcon className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  );
}

export default function RegisterWithUsPage() {
  return (
    <div className="min-h-screen bg-[#060d1a]">
      {/* Hero */}
      <div className="relative h-[56vh] min-h-[400px] overflow-hidden">
        <Image
          src={heroImg}
          alt="Register with Magical Paradise"
          fill
          priority
          className="object-cover scale-105"
          style={{ filter: "brightness(0.3) saturate(1.1)" }}
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060d1a]/85 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060d1a] via-transparent to-transparent" />

        <div className="absolute top-1/2 right-16 -translate-y-1/2 hidden lg:flex items-center justify-center pointer-events-none">
          <div className="w-52 h-52 rounded-full border border-white/8 flex items-center justify-center">
            <div className="w-36 h-36 rounded-full border border-white/8 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border border-[#0BAADC]/15 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-[#0BAADC]/30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 w-full">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#0BAADC]" />
                <span className="text-[#0BAADC] text-[11px] font-semibold uppercase tracking-[0.26em]">
                  Join Our Partner Network
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-[68px] font-bold text-white leading-[1.04] mb-5 drop-shadow-xl">
                Register
                <br />
                <span className="text-[#0BAADC]">with Us</span>
              </h1>
              <p className="text-white/50 text-lg leading-relaxed max-w-lg">
                Become an exclusive travel partner and unlock curated Sri Lanka
                experiences, priority rates, and a dedicated support team.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="bg-[#0d1424] rounded-3xl border border-white/5 p-8 lg:p-10"
          >
            <div className="flex items-center gap-3 mb-1.5">
              <div className="w-5 h-px bg-[#0BAADC]" />
              <span className="text-[10px] uppercase tracking-widest text-[#0BAADC] font-bold">
                Partner Registration
              </span>
            </div>
            <h2 className="text-[28px] font-bold text-white mb-1.5">
              Create Your Account
            </h2>
            <p className="text-white/40 text-sm mb-8 leading-relaxed">
              Fill in the details below and our team will complete your
              onboarding within 24 hours.
            </p>
            <RegisterForm />
          </motion.div>

          {/* Right */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="bg-[#0d1424] rounded-3xl border border-white/5 p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#0BAADC]" />
                <span className="text-[10px] uppercase tracking-widest text-[#0BAADC] font-bold">
                  Why Register?
                </span>
              </div>
              <div className="space-y-5">
                {perks.map((perk, i) => (
                  <motion.div
                    key={perk.title}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-start gap-3.5"
                  >
                    <div className="w-8 h-8 bg-[#0BAADC]/10 border border-[#0BAADC]/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-[#0BAADC]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white mb-0.5">
                        {perk.title}
                      </p>
                      <p className="text-xs text-white/40 leading-relaxed">
                        {perk.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="bg-gradient-to-br from-[#1761A0] to-[#0BAADC] rounded-3xl p-7 text-white"
            >
              <p className="text-[11px] uppercase tracking-widest font-semibold text-white/60 mb-2">
                Need help registering?
              </p>
              <h3 className="text-xl font-bold mb-3 leading-snug">
                Our partnerships team is ready to help
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                If you have any questions about the registration process or our
                partner programme, don't hesitate to get in touch.
              </p>
              <div className="flex flex-col gap-2.5">
                {[
                  {
                    href: "tel:+94000000000",
                    text: "+94 000 000 000",
                    d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.06-1.06a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z",
                  },
                  {
                    href: "mailto:info@magicalparadise.com",
                    text: "info@magicalparadise.com",
                    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22,6 12,13 2,6",
                  },
                ].map(({ href, text, d }) => (
                  <a
                    key={text}
                    href={href}
                    className="flex items-center gap-3 text-sm font-semibold text-white hover:text-white/80 transition-colors"
                  >
                    <span className="w-8 h-8 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                      <svg
                        className="w-3.5 h-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={d} />
                      </svg>
                    </span>
                    {text}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#040912] border-t border-white/5 py-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">
              Ready to start your Sri Lanka partnership?
            </h3>
            <p className="text-white/30 text-sm mt-1">
              Already a partner? Log in to your partner portal.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="tel:+94000000000"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#1761A0] to-[#0BAADC] text-white font-semibold text-sm rounded-xl transition-colors"
            >
              Call Now
            </a>
            <a
              href="mailto:info@magicalparadise.com"
              className="flex items-center gap-2 px-5 py-2.5 border border-white/10 text-white/50 hover:text-white hover:border-white/20 font-semibold text-sm rounded-xl transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
