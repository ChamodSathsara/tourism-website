import React from "react";
import { Navbar } from "@/components/Navbar";
import { FullHotelSection } from "@/components/FullPages/FullHotelSection";
import { Footer } from "@/components/Footer";

function page() {
  return (
    <div>
      <Navbar />
      <FullHotelSection />
      <Footer />
    </div>
  );
}

export default page;
