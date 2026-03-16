"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import PackageDetailPage from "@/components/Packages/Packages";
import { useParams } from "next/navigation";

function page() {
  const params = useParams();
  const id = params?.id;

  return (
    <div>
      <Navbar />
      <PackageDetailPage params={{ id }} />
      <Footer />
    </div>
  );
}

export default page;
