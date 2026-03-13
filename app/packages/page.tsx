import React from "react";
import { Navbar } from "@/components/Navbar";
import { PackagesSection } from "@/components/PackagesSection";

function page() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PackagesSection />
    </div>
  );
}

export default page;
