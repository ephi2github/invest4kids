import type { Metadata } from "next";
import {AmbassadorHeroSection} from "../../components/sections/ambassador-hero-section";
import {AmbassadorBenefitsSection} from "../../components/sections/ambassador-benefits-section";
import {AmbassadorHowItWorksSection} from "../../components/sections/ambassador-how-it-works-section";
import {AmbassadorAcademySection} from "../../components/sections/ambassador-academy-section";
import {AmbassadorFaqSection} from "../../components/sections/ambassador-faq-section";

export const metadata: Metadata = {
  title: {
    absolute: "Ambassadorprogramm - Invest4kids - expertenhilfe beim Geld anlegen fur kinder",
  },
  description: "Das exklusive Empfehlungsprogramm für Eltern",
};

export default function AmbassadorProgramPage() {
  return (
      <main className="min-h-screen bg-[linear-gradient(180deg,#EDEDEE_0%,#DFE9F0_100%)]">
          <AmbassadorHeroSection />
          <AmbassadorBenefitsSection />
          <AmbassadorHowItWorksSection />
          <AmbassadorAcademySection />
          <AmbassadorFaqSection />
      </main>
  );
}
