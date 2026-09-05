import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { LanguageProvider } from "../contexts/LanguageContext";
import SmoothScroll from "../components/SmoothScroll";
import { PlanTripButton } from "../components/PlanTripButton";
import { WhatsAppButton } from "../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Magical Paradise | Luxury Sri Lanka Travel",
  description:
    "Luxury journeys through ancient kingdoms, pristine beaches, and misty highlands of Sri Lanka.",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Fetch messages for current locale (determined by cookie in i18n/request.ts)
  const messages = await getMessages();

  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <NextIntlClientProvider messages={messages}>
          <LanguageProvider>
            {children}
            <PlanTripButton />
            <WhatsAppButton />
          </LanguageProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
