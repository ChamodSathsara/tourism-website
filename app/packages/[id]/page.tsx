import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import PackageDetailPage from "@/components/Packages/Packages";
import React from "react";

function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <Navbar />
      <PackageDetailPage params={params} />
      <Footer />
    </div>
  );
}

export default page;
