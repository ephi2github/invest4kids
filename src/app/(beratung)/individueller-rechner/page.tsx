import type { Metadata } from "next";
import VorteilsrechnerHeroSection from "@/components/sections/VorteilsrechnerHeroSection";
import VorteilsrechnerCalculator from "@/components/sections/VorteilsrechnerCalculator";
import "../vorteilsrechner/vorteilsrechner.css";
import "./individueller-rechner.css";

export const metadata: Metadata = {
  title: "Individual Calculator - Invest4Kids",
  description:
    "Calculate how your investment can evolve over time with the Invest4Kids individual calculator.",
};

export default function IndividuellerRechnerPage() {
  return (
    <main>
      <VorteilsrechnerHeroSection />
      <VorteilsrechnerCalculator withGrowthSection locale="en" />
    </main>
  );
}
