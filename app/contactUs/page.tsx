import React from "react";
import ContactUsPage from "@/components/FullPages/ContactUs";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

function page() {
  return (
    <div>
      <Navbar />
      <ContactUsPage />
      <Footer />
    </div>
  );
}

export default page;
