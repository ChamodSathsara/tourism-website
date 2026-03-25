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

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: PhoneIcon,
    label: "Call Us",
    value: "+94 000 000 000",
    sub: "Mon – Sat, 8am – 8pm",
    href: "tel:+94000000000",
    bg: "bg-[#0BAADC]/10",
    iconColor: "text-[#0BAADC]",
    border: "border-[#0BAADC]/20",
  },
  {
    icon: MailIcon,
    label: "Email Us",
    value: "info@magicalparadise.com",
    sub: "We reply within 24 hours",
    href: "mailto:info@magicalparadise.com",
    bg: "bg-[#1761A0]/10",
    iconColor: "text-[#1761A0]",
    border: "border-[#1761A0]/20",
  },
  {
    icon: MapPinIcon,
    label: "Visit Us",
    value: "Colombo 03, Sri Lanka",
    sub: "Open for walk-ins by appointment",
    href: "https://maps.google.com",
    bg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    border: "border-emerald-500/20",
  },
  {
    icon: ClockIcon,
    label: "Office Hours",
    value: "Mon – Sat: 8am – 8pm",
    sub: "Sunday: 9am – 5pm",
    href: "#",
    bg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    border: "border-violet-500/20",
  },
];

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
        <div className="w-20 h-20 bg-[#0BAADC]/15 border border-[#0BAADC]/30 rounded-full flex items-center justify-center mb-6">
          <CheckCircleIcon className="w-10 h-10 text-[#0BAADC]" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-white mb-3">
          Message Sent!
        </h3>
        <p className="text-white/50 max-w-sm leading-relaxed mb-8">
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
          className="px-6 py-3 border border-[#0BAADC]/30 rounded-xl text-[#0BAADC] font-medium hover:bg-[#0BAADC] hover:text-white hover:border-[#0BAADC] transition-colors duration-300 flex items-center gap-2"
        >
          Send Another Message
          <ArrowRightIcon className="w-4 h-4" />
        </button>
      </motion.div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#0BAADC]/50 focus:border-[#0BAADC]/50 focus:bg-white/8 transition-all duration-200";

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-1.5">
            Full Name <span className="text-[#0BAADC]">*</span>
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
          <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-1.5">
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
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-1.5">
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
          <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-1.5">
            Subject <span className="text-[#0BAADC]">*</span>
          </label>
          <select
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={
              inputClass + " [&>option]:bg-[#0d1424] [&>option]:text-white"
            }
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
        <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-1.5">
          Message <span className="text-[#0BAADC]">*</span>
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
        className="w-full py-3.5 px-6 bg-gradient-to-r from-[#1761A0] to-[#0BAADC] hover:from-[#0d4f8a] hover:to-[#099bbf] disabled:from-white/10 disabled:to-white/10 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(11,170,220,0.3)] hover:shadow-[0_0_50px_rgba(11,170,220,0.5)]"
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

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[#060d1a]">
      {/* Hero */}
      <div className="relative h-[58vh] min-h-[420px] overflow-hidden">
        <Image
          src={img1}
          alt="Contact Magical Paradise"
          fill
          priority
          className="object-cover scale-105"
          style={{ filter: "brightness(0.35) saturate(1.15)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060d1a]/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060d1a] via-transparent to-transparent" />

        <div className="absolute top-1/2 right-16 -translate-y-1/2 hidden lg:block pointer-events-none">
          <div className="w-52 h-52 rounded-full border border-white/8 flex items-center justify-center">
            <div className="w-36 h-36 rounded-full border border-white/8 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border border-[#0BAADC]/15 flex items-center justify-center">
                <MailIcon className="w-10 h-10 text-[#0BAADC]/30" />
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
                <div className="w-8 h-px bg-[#0BAADC]" />
                <span className="text-[#0BAADC] text-sm font-semibold uppercase tracking-[0.25em]">
                  We'd Love to Hear From You
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.05] mb-6 drop-shadow-2xl">
                Contact Us
              </h1>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl">
                Have a question, a dream trip in mind, or simply want to say
                hello? Our team is always happy to help you plan the perfect Sri
                Lanka experience.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Info Cards */}
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
                className={`flex items-start gap-4 p-5 bg-[#0d1424] rounded-2xl border ${info.border} hover:border-[#0BAADC]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(11,170,220,0.1)] group`}
              >
                <div
                  className={`w-11 h-11 ${info.bg} rounded-xl flex items-center justify-center shrink-0 border ${info.border}`}
                >
                  <Icon className={`w-5 h-5 ${info.iconColor}`} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white/30 uppercase tracking-wider mb-0.5">
                    {info.label}
                  </div>
                  <div className="text-sm font-semibold text-white truncate">
                    {info.value}
                  </div>
                  <div className="text-xs text-white/40 mt-0.5">{info.sub}</div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Form + Map */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#0d1424] rounded-3xl border border-white/5 p-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-px bg-[#0BAADC]" />
              <span className="text-xs uppercase tracking-widest text-[#0BAADC] font-bold">
                Send a Message
              </span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-white mb-2">
              Plan Your Journey
            </h2>
            <p className="text-white/40 text-sm mb-8 leading-relaxed">
              Fill in the form below and one of our Sri Lanka travel specialists
              will get back to you within 24 hours.
            </p>
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="rounded-3xl overflow-hidden border border-white/5 h-80 opacity-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58299879888!2d79.77865!3d6.921833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Magical Paradise Location"
              />
            </div>

            <div className="relative rounded-3xl overflow-hidden h-56 border border-white/5">
              <Image
                src={img2}
                alt="Sri Lanka"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.4) saturate(1.1)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/50 text-sm mb-3">Follow our journey</p>
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
                      className="w-10 h-10 bg-white/10 hover:bg-[#0BAADC] backdrop-blur-sm border border-white/10 hover:border-[#0BAADC] rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
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

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-[#1761A0] to-[#0BAADC] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white">
              Ready to start your Sri Lanka adventure?
            </h3>
            <p className="text-white/70 text-sm mt-1">
              Our travel specialists are standing by to help.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="tel:+94000000000"
              className="flex items-center gap-2 px-6 py-3 bg-white text-[#1761A0] font-bold rounded-xl hover:bg-white/90 transition-colors shadow"
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
