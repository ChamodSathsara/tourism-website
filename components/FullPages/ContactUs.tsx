"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
  SendIcon,
  CheckCircleIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "lucide-react";
import img1 from "../../assest/Packages/1.jpg";
import img2 from "../../assest/Packages/5.jpg";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// ─── Info Cards Data ──────────────────────────────────────────────────────────

const contactInfo = [
  {
    icon: PhoneIcon,
    label: "Call Us",
    value: "+94 000 000 000",
    sub: "Mon – Sat, 8am – 8pm",
    href: "tel:+94000000000",
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    border: "border-amber-100",
  },
  {
    icon: MailIcon,
    label: "Email Us",
    value: "info@magicalparadise.com",
    sub: "We reply within 24 hours",
    href: "mailto:info@magicalparadise.com",
    color: "bg-rose-50",
    iconColor: "text-rose-500",
    border: "border-rose-100",
  },
  {
    icon: MapPinIcon,
    label: "Visit Us",
    value: "Colombo 03, Sri Lanka",
    sub: "Open for walk-ins by appointment",
    href: "https://maps.google.com",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
    border: "border-emerald-100",
  },
  {
    icon: ClockIcon,
    label: "Office Hours",
    value: "Mon – Sat: 8am – 8pm",
    sub: "Sunday: 9am – 5pm",
    href: "#",
    color: "bg-sky-50",
    iconColor: "text-sky-600",
    border: "border-sky-100",
  },
];

// ─── Contact Form ─────────────────────────────────────────────────────────────

function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center py-20 text-center"
      >
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircleIcon className="w-10 h-10 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
          Message Sent!
        </h3>
        <p className="text-gray-500 max-w-sm leading-relaxed mb-8">
          Thank you for reaching out. One of our travel specialists will get
          back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
            });
          }}
          className="px-6 py-3 border border-amber-200 rounded-xl text-amber-700 font-medium hover:bg-amber-700 hover:text-white hover:border-amber-700 transition-colors duration-300 flex items-center gap-2"
        >
          Send Another Message
          <ArrowRightIcon className="w-4 h-4" />
        </button>
      </motion.div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent focus:bg-white transition-all duration-200";

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
            Full Name <span className="text-amber-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 000 000 0000"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
            Subject <span className="text-amber-500">*</span>
          </label>
          <select
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>
              Select a subject
            </option>
            <option value="package">Package Enquiry</option>
            <option value="custom">Custom Tour</option>
            <option value="honeymoon">Honeymoon / Couples</option>
            <option value="maldives">Maldives Package</option>
            <option value="accommodation">Accommodation</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
          Message <span className="text-amber-500">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your dream trip — travel dates, group size, interests…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading || !form.name || !form.email || !form.message}
        className="w-full py-3.5 px-6 bg-amber-500 hover:bg-amber-400 disabled:bg-stone-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-amber-200/50 hover:shadow-amber-300/60"
      >
        {loading ? (
          <>
            <motion.div
              className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <SendIcon className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  );
}

// ─── Contact Us Page ──────────────────────────────────────────────────────────

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* ── Hero Banner ── */}
      <div className="relative h-[58vh] min-h-[420px] overflow-hidden">
        <Image
          src={img1}
          alt="Contact Magical Paradise"
          fill
          priority
          className="object-cover scale-105"
          style={{ filter: "brightness(0.42) saturate(1.15)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-transparent" />

        {/* Decorative rings */}
        <div className="absolute top-1/2 right-16 -translate-y-1/2 hidden lg:block pointer-events-none">
          <div className="w-52 h-52 rounded-full border border-white/10 flex items-center justify-center">
            <div className="w-36 h-36 rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border border-white/15 flex items-center justify-center">
                <MailIcon className="w-10 h-10 text-white/25" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-amber-400" />
                <span className="text-amber-400 text-sm font-semibold uppercase tracking-[0.25em]">
                  We'd Love to Hear From You
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.05] mb-6 drop-shadow-2xl">
                Contact Us
              </h1>
              <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-xl">
                Have a question, a dream trip in mind, or simply want to say
                hello? Our team is always happy to help you plan the perfect Sri
                Lanka experience.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Info Cards ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.a
                href={info.href}
                key={info.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-xl border ${info.border} transition-all duration-300 hover:-translate-y-1 group`}
              >
                <div
                  className={`w-11 h-11 ${info.color} rounded-xl flex items-center justify-center shrink-0`}
                >
                  <Icon className={`w-5 h-5 ${info.iconColor}`} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                    {info.label}
                  </div>
                  <div className="text-sm font-semibold text-gray-900 truncate">
                    {info.value}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">{info.sub}</div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* ── Form + Map ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl shadow-sm border border-stone-100 p-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-px bg-amber-500" />
              <span className="text-xs uppercase tracking-widest text-amber-600 font-bold">
                Send a Message
              </span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
              Plan Your Journey
            </h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Fill in the form below and one of our Sri Lanka travel specialists
              will get back to you within 24 hours.
            </p>
            <ContactForm />
          </motion.div>

          {/* Map + image stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Map embed */}
            <div className="rounded-3xl overflow-hidden shadow-sm border border-stone-100 h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58299879888!2d79.77865!3d6.921833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Magical Paradise Location"
              />
            </div>

            {/* Image with social links overlay */}
            <div className="relative rounded-3xl overflow-hidden h-56 shadow-sm">
              <Image
                src={img2}
                alt="Sri Lanka"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.5) saturate(1.1)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/70 text-sm mb-3">Follow our journey</p>
                <div className="flex gap-3">
                  {[
                    { icon: FacebookIcon, label: "Facebook", href: "#" },
                    { icon: InstagramIcon, label: "Instagram", href: "#" },
                    { icon: TwitterIcon, label: "Twitter", href: "#" },
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-10 h-10 bg-white/15 hover:bg-amber-500 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="bg-amber-600 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white">
              Ready to start your Sri Lanka adventure?
            </h3>
            <p className="text-amber-200 text-sm mt-1">
              Our travel specialists are standing by to help.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="tel:+94000000000"
              className="flex items-center gap-2 px-6 py-3 bg-white text-amber-700 font-bold rounded-xl hover:bg-amber-50 transition-colors shadow"
            >
              <PhoneIcon className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="mailto:info@magicalparadise.com"
              className="flex items-center gap-2 px-6 py-3 border border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              <MailIcon className="w-4 h-4" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
