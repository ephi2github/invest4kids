"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, CircleHelp } from "lucide-react";
import { useState } from "react";

const faqItems = [
  {
    question: "Wie verschicke ich eine Empfehlung?",
    answer:
      "Nach deiner Anmeldung erhältst du einen persönlichen Referral-Link. Diesen Link kannst du über Social Media, E-Mail, WhatsApp oder direkt im Gespräch teilen. Sobald eine Familie über deinen Link ein Beratungsgespräch bucht, wird die Empfehlung registriert.",
  },
  {
    question: "Wie werde ich bezahlt?",
    answer:
      "Deine Prämie wird einmal im Monat, immer am 15., auf dein PayPal-Konto überwiesen. Du erhältst vorher eine Übersicht über deine verdienten Prämien.",
  },
  {
    question: "Wie überprüfe ich meinen Fortschritt?",
    answer:
      "In deinem Referral Rock Account kannst du jederzeit sehen, wie viele Empfehlungen du bereits verschickt hast, wie viele davon erfolgreich waren und welche Stufe du aktuell erreicht hast.",
  },
  {
    question: "Gibt es Kosten für die Teilnahme am Programm?",
    answer:
      "Nein, die Teilnahme am Invest4Kids Ambassador-Programm ist komplett kostenlos für dich.",
  },
  {
    question: "Wie viel Zeit muss ich investieren?",
    answer:
      "Das Programm ist flexibel und passt sich deinem Alltag an. Du entscheidest selbst, wie viel Zeit du investieren möchtest.",
  },
  {
    question: "Gibt es eine Begrenzung, wie viele Familien ich empfehlen kann?",
    answer:
      "Nein, es gibt keine Begrenzung! Je mehr Empfehlungen du aussprichst, desto mehr Familien kannst du unterstützen und desto mehr Prämien kannst du verdienen.",
  },
] as const;

const footerLinks = [
  { label: "AGBs", href: "https://invest4kids.de/ambs-agbs/" },
  { label: "Datenschutz", href: "https://invest4kids.de/ambs-datenschutz/" },
  { label: "Impressum", href: "https://invest4kids.de/ambs-impressum/" },
] as const;

export function AmbassadorFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="bg-transparent px-6 pb-[74px] pt-[74px] text-[#062D57] lg:px-5 lg:pb-[96px] lg:pt-[124px]"
      style={{ fontFamily: "var(--font-outfit)" }}
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-[50px]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[860px] text-center"
        >
          <span className="inline-flex rounded-full border border-[rgba(6,45,87,0.08)] bg-[rgba(255,255,255,0.55)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#537EA8] shadow-[0_10px_30px_rgba(6,45,87,0.05)] backdrop-blur-sm lg:text-[12px]">
            Ambassador FAQ
          </span>
          <h2 className="pt-4 text-[24px] font-bold leading-[35px] text-[#062D57] lg:text-[35px] lg:leading-[48px]">
            Haeufig gestellte Fragen zum Ambassadorprogramm
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[858px] rounded-[28px] border border-[rgba(6,45,87,0.08)] bg-[rgba(255,255,255,0.58)] px-5 py-3 shadow-[0_24px_55px_rgba(6,45,87,0.06)] backdrop-blur-md lg:rounded-[34px] lg:px-8 lg:py-4"
        >
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="border-b-2 border-[#062D57] last:border-b-0"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left text-[#062D57] transition-colors duration-200 hover:text-[#537EA8] lg:py-6"
                >
                  <span className="flex min-w-0 items-start gap-3 lg:gap-4">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(83,126,168,0.12)] text-[#537EA8] lg:h-10 lg:w-10">
                      <CircleHelp className="h-4 w-4 lg:h-5 lg:w-5" />
                    </span>
                    <span className="text-[18px] font-normal leading-[28px] lg:text-[24px] lg:leading-[32px]">
                      {item.question}
                    </span>
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="mt-1 shrink-0 text-[#062D57]"
                  >
                    <ChevronDown className="h-4 w-4 lg:h-5 lg:w-5" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5 pl-11 pr-1 text-[16px] leading-[28px] text-[#385779] lg:pb-6 lg:pl-14 lg:pr-8 lg:text-[18px]">
                        {item.answer}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        <motion.footer
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex w-full flex-col-reverse items-center gap-5 px-5 pt-[10px] text-center lg:flex-col lg:gap-4 lg:px-0"
        >
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-[#062D57] transition-colors duration-200 hover:text-[#F8BF3C] lg:text-[16px]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-[15px] leading-[28px] text-[#062D57] lg:text-[18px]">
            © 2024 Invest4Kids. Alle Rechte vorbehalten.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
