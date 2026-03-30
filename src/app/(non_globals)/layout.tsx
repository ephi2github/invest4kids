import type { Metadata } from "next";
import "./etf-fuer-kinder.css";

export const metadata: Metadata = {
  title: "ETF für Kinder",
  description:
    "ETF für Kinder: So baust du mit Invest4Kids ein starkes Fundament für die Zukunft deines Nachwuchses. Kostenlose Beratung und professionelle ETF-Strategie.",
  alternates: { canonical: "/etf-fuer-kinder" },
};

export default function EtfFuerKinderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
