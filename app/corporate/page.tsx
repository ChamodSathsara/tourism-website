import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CorporateSection } from "@/components/CorporateSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";

function page() {
  return (
    <div className="min-h-screen bg-[#080e1c] pt-20">
      <Navbar />
      <CorporateSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default page;
