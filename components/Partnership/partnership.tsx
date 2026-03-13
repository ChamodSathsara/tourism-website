"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRightIcon, SendIcon, CheckCircleIcon } from "lucide-react";

// ── Replace these with your actual image imports ──────────────────────────────
// import heroImg from "../../assest/Packages/1.jpg";
// For demo purposes we use a placeholder string; swap with your Image import.
const heroImg =
  "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?w=1600&q=80";

// ─── Types ────────────────────────────────────────────────────────────────────

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

// ─── Why Register perks ───────────────────────────────────────────────────────

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

// ─── Reusable field styles ────────────────────────────────────────────────────

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200";

const labelClass =
  "block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5";

// ─── Register Form ────────────────────────────────────────────────────────────

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
        <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mb-6 ring-8 ring-amber-100">
          <CheckCircleIcon className="w-9 h-9 text-amber-500" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
          Registration Submitted!
        </h3>
        <p className="text-gray-400 text-sm max-w-xs leading-relaxed mb-8">
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
          className="inline-flex items-center gap-2 px-6 py-3 border border-amber-200 text-amber-600 text-sm font-semibold rounded-xl hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300"
        >
          Register Another
          <ArrowRightIcon className="w-4 h-4" />
        </button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            First Name <span className="text-amber-500">*</span>
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
            Last Name <span className="text-amber-500">*</span>
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

      {/* Email */}
      <div>
        <label className={labelClass}>
          Email Address <span className="text-amber-500">*</span>
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

      {/* Travel Network */}
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

      {/* Row: Company + Language */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Company Name <span className="text-amber-500">*</span>
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

      {/* Website */}
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

      {/* Row: Company Type + Telephone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Company Type <span className="text-amber-500">*</span>
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

      {/* Country */}
      <div>
        <label className={labelClass}>
          Country <span className="text-amber-500">*</span>
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

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={loading || !isValid}
        className="w-full py-4 px-6 bg-amber-500 hover:bg-amber-400 disabled:bg-stone-200 disabled:cursor-not-allowed text-white font-semibold text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-amber-200/60 hover:shadow-amber-300/70 mt-2"
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

// ─── Register With Us Page ────────────────────────────────────────────────────

export default function RegisterWithUsPage() {
  return (
    <div className="min-h-screen bg-amber-50/30">
      {/* ── Hero ── */}
      <div className="relative h-[56vh] min-h-[400px] overflow-hidden">
        {/* Swap `src={heroImg}` for your imported image: src={img1} */}
        <Image
          src={heroImg}
          alt="Register with Magical Paradise"
          fill
          priority
          className="object-cover scale-105"
          style={{ filter: "brightness(0.38) saturate(1.1)" }}
          unoptimized // remove if using local imports
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-50/30 via-transparent to-transparent" />

        {/* Decorative rings */}
        <div className="absolute top-1/2 right-16 -translate-y-1/2 hidden lg:flex items-center justify-center pointer-events-none">
          <div className="w-52 h-52 rounded-full border border-white/10 flex items-center justify-center">
            <div className="w-36 h-36 rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border border-white/15 flex items-center justify-center">
                {/* User group icon */}
                <svg
                  className="w-10 h-10 text-white/25"
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

        {/* Hero text */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 w-full">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-amber-400" />
                <span className="text-amber-400 text-[11px] font-semibold uppercase tracking-[0.26em]">
                  Join Our Partner Network
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-[68px] font-bold text-white leading-[1.04] mb-5 drop-shadow-xl">
                Register
                <br />
                <span className="text-amber-400">with Us</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed max-w-lg">
                Become an exclusive travel partner and unlock curated Sri Lanka
                experiences, priority rates, and a dedicated support team.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          {/* ── Left: Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="bg-white rounded-3xl shadow-sm border border-stone-100 p-8 lg:p-10"
          >
            {/* Section header */}
            <div className="flex items-center gap-3 mb-1.5">
              <div className="w-5 h-px bg-amber-500" />
              <span className="text-[10px] uppercase tracking-widest text-amber-500 font-bold">
                Partner Registration
              </span>
            </div>
            <h2 className="text-[28px] font-bold text-gray-900 mb-1.5">
              Create Your Account
            </h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Fill in the details below and our team will complete your
              onboarding within 24 hours.
            </p>

            <RegisterForm />
          </motion.div>

          {/* ── Right: Perks + info ── */}
          <div className="space-y-6">
            {/* Why Register card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="bg-white rounded-3xl border border-stone-100 shadow-sm p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-amber-500" />
                <span className="text-[10px] uppercase tracking-widest text-amber-500 font-bold">
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
                    <div className="w-8 h-8 bg-amber-50 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-amber-500"
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
                      <p className="text-sm font-semibold text-gray-800 mb-0.5">
                        {perk.title}
                      </p>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {perk.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick contact strip */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="bg-amber-500 rounded-3xl p-7 text-white"
            >
              <p className="text-[11px] uppercase tracking-widest font-semibold text-amber-100 mb-2">
                Need help registering?
              </p>
              <h3 className="text-xl font-bold mb-3 leading-snug">
                Our partnerships team is ready to help
              </h3>
              <p className="text-amber-100 text-sm leading-relaxed mb-5">
                If you have any questions about the registration process or our
                partner programme, don't hesitate to get in touch.
              </p>
              <div className="flex flex-col gap-2.5">
                <a
                  href="tel:+94000000000"
                  className="flex items-center gap-3 text-sm font-semibold text-white hover:text-amber-100 transition-colors"
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
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.06-1.06a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </span>
                  +94 000 000 000
                </a>
                <a
                  href="mailto:info@magicalparadise.com"
                  className="flex items-center gap-3 text-sm font-semibold text-white hover:text-amber-100 transition-colors"
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
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  info@magicalparadise.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Bottom CTA bar ── */}
      <div className="bg-stone-900 py-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">
              Ready to start your Sri Lanka partnership?
            </h3>
            <p className="text-stone-400 text-sm mt-1">
              Already a partner? Log in to your partner portal.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="tel:+94000000000"
              className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-white font-semibold text-sm rounded-xl transition-colors"
            >
              Call Now
            </a>
            <a
              href="mailto:info@magicalparadise.com"
              className="flex items-center gap-2 px-5 py-2.5 border border-stone-600 text-stone-300 hover:text-white hover:border-stone-400 font-semibold text-sm rounded-xl transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
