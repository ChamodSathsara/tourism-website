"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import DestinationDetailPage from "@/components/Destinations/destination";

function Page() {
  const params = useParams();
  const id = params?.id;

  console.log("DestinationDetailPage params id:", id);

  return (
    <div>
      <Navbar />
      <DestinationDetailPage params={{ id }} />
      <Footer />
    </div>
  );
}

export default Page;