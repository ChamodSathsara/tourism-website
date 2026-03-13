import { i } from "framer-motion/client";
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import RegisterWithUsPage from "@/components/Partnership/partnership";

function page() {
  return (
    <div>
      <Navbar />
      <RegisterWithUsPage />
      <Footer />
    </div>
  );
}

export default page;
