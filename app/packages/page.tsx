import React from "react";
import { Navbar } from "@/components/Navbar";
import FullPackagesSection from "@/components/FullPages/FullPackagesSection";
import { Footer } from "@/components/Footer";

function page() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <FullPackagesSection />
      <Footer />
    </div>
  );
}

export default page;
