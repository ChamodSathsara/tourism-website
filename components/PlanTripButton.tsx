import Link from "next/link";
import { PlaneTakeoffIcon } from "lucide-react";

export function PlanTripButton() {
  return (
    <Link
      href="/contactUs#plan-trip"
      aria-label="Plan your trip"
      className="fixed bottom-6 left-4 sm:left-6 z-40 group flex items-center gap-2.5 rounded-full border border-[#0BAADC]/40 bg-gradient-to-r from-[#1761A0] to-[#0BAADC] px-4 sm:px-5 h-14 text-sm sm:text-base font-bold text-white shadow-[0_10px_35px_rgba(11,170,220,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_45px_rgba(11,170,220,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2EDCF4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060d1a]"
    >
      <span className="absolute inset-0 rounded-full bg-[#0BAADC] opacity-20 animate-ping pointer-events-none" />
      <PlaneTakeoffIcon className="relative w-5 h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      <span className="relative whitespace-nowrap">Plan My Trip</span>
    </Link>
  );
}
