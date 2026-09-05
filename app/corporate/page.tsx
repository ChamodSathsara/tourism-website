import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CorporateSection } from "@/components/CorporateSection";

function page() {
  return (
    <div className="min-h-screen bg-[#080e1c]">
      <Navbar />
      <CorporateSection />
      <Footer />
    </div>
  );
}

export default page;
