import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Magical Paradise | Luxury Sri Lanka Travel",
  description:
    "Luxury journeys through ancient kingdoms, pristine beaches, and misty highlands of Sri Lanka.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
