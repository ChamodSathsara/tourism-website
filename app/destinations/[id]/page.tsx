import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import DestinationDetailPage from "@/components/Destinations/destination";

function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <Navbar />
      <DestinationDetailPage params={params} />
      <Footer />
    </div>
  );
}

export default page;
