import { Footer } from "@/components/Footer";
import { FullDestinationsSection } from "@/components/FullPages/FullDestinationSection";
import { Navbar } from "@/components/Navbar";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      
      <FullDestinationsSection />
      <Footer />
    </div>
  );
}

export default page;
