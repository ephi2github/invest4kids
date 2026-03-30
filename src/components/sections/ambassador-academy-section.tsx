"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Crown,
  Medal,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import ambassadorAcademyImage from "@/assets/images/ambassadorprogramm/ambassador-academy.png";

const academyItems = [
  "Grundlagen der Kundengewinnung",
  "Persoenlichkeitsentwicklung",
  "Social-Media-Tipps",
  "Zertifikat",
  "PDF Vorlagen",
] as const;

const stageCards: Array<{
  id: string;
  title: string;
  badge: string;
  range: string;
  payout: string;
  features: string[];
  icon: LucideIcon;
  cardClassName: string;
  accentClassName: string;
}> = [
  {
    id: "bronze",
    title: "Bronze",
    badge: "Level 01",
    range: "1.-10. Empfehlung",
    payout: "50€/Empfehlung",
    features: [
      "woechentliche Zoom Calls",
      "Exklusive WhatsApp Gruppe",
      "Persoenlicher Ansprechpartner",
      "Social Media Leitfaden",
    ],
    icon: Medal,
    cardClassName: "w-full max-w-[340px] lg:w-[320px] xl:w-[332px]",
    accentClassName:
      "bg-[linear-gradient(180deg,#F1E1D5_0%,#E7CBB7_48%,#FFF9F5_100%)]",
  },
  {
    id: "silver",
    title: "Silber",
    badge: "Level 02",
    range: "11.-20. Empfehlung",
    payout: "100€/Empfehlung",
    features: [
      "woechentliche Zoom Calls",
      "Exklusive WhatsApp Gruppe",
      "Persoenlicher Ansprechpartner",
      "Social Media Leitfaden",
    ],
    icon: Sparkles,
    cardClassName: "w-full max-w-[340px] lg:w-[320px] xl:w-[332px]",
    accentClassName:
      "bg-[linear-gradient(180deg,#E7EDF4_0%,#D6E0EA_48%,#FBFDFF_100%)]",
  },
  {
    id: "gold",
    title: "Gold",
    badge: "Level 03",
    range: "ab 21. Empfehlung",
    payout: "200€/Empfehlung",
    features: [
      "woechentliche Zoom Calls",
      "Exklusive WhatsApp Gruppe",
      "Persoenlicher Ansprechpartner",
      "Social Media Leitfaden",
    ],
    icon: Crown,
    cardClassName: "w-full max-w-[340px] lg:w-[336px] xl:w-[352px]",
    accentClassName:
      "bg-[linear-gradient(180deg,#F6E8AC_0%,#ECCE59_46%,#FFFBEA_100%)]",
  },
];

export function AmbassadorAcademySection() {
  return (
    <section
      className="bg-transparent px-6 pb-0 pt-[50px] text-[#062D57] lg:px-0"
      style={{ fontFamily: "var(--font-outfit)" }}
    >
      <div className="mx-auto flex w-full max-w-[1460px] flex-col">
        <div className="flex flex-col gap-[74px]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="grid items-center gap-8 lg:grid-cols-[45vw_minmax(0,55vw)] lg:gap-[34px]"
          >
            <div className="order-2 lg:order-1">
              <div className="mx-auto flex max-w-[360px] items-center justify-center lg:max-w-none lg:justify-start">
                <div className="overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.28)_0%,rgba(223,233,240,0.18)_100%)]  shadow-[0_14px_30px_rgba(6,45,87,0.035)] lg:rounded-[34px] ">
                  <Image
                    src={ambassadorAcademyImage}
                    alt="Academy overview"
                    width={900}
                    height={900}
                    className="h-auto w-full max-w-[336px] rounded-[22px] object-contain lg:max-w-[42vw]"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className=" mx-auto max-w-[620px] rounded-[30px] border border-[rgba(6,45,87,0.08)] bg-[rgba(255,255,255,0.48)] px-6 py-7 shadow-[0_24px_55px_rgba(6,45,87,0.06)] backdrop-blur-sm lg:mr-[50px] lg:max-w-none lg:border-none lg:bg-transparent lg:px-0 lg:py-0 lg:pl-[10px] lg:shadow-none">
                <span className="inline-flex rounded-full bg-[rgba(83,126,168,0.1)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#537EA8] lg:text-[12px]">
                  Academy
                </span>

                <h2 className="pt-4 text-[30px] font-bold leading-[36px] text-[#062D57] lg:text-[35px] lg:leading-[42px]">
                  Das erwartet dich in der Academy
                </h2>

                <p className="pt-4 text-[18px] leading-[29px] text-[#062D57] lg:max-w-[620px] lg:text-[19px]">
                  Unsere Academy bietet dir alle Werkzeuge, die du brauchst,
                  um als Ambassador erfolgreich zu sein.
                </p>

                <ul className="space-y-3 pt-5 lg:space-y-[10px]">
                  {academyItems.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{
                        duration: 0.42,
                        delay: 0.08 * index,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex items-start gap-3 text-[18px] leading-[28px] text-[#062D57] lg:text-[19px]"
                    >
                      <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-[#537EA8]" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <div className="px-0 pb-0 pt-[24px] lg:pt-[50px]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <h2 className="text-[30px] font-bold leading-[36px] text-[#062D57] lg:text-[35px] lg:leading-[42px]">
                Dein Weg zum Erfolg
              </h2>
              <p className="pt-1 text-[18px] leading-[29px] text-[#062D57]">
                Unsere Karrierestufen im Ueberblick
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-8 grid max-w-[1080px] grid-cols-1 justify-items-center gap-5 lg:mt-[34px] lg:grid-cols-3 lg:items-stretch lg:gap-6"
            >
              {stageCards.map((stage, index) => (
                <motion.article
                  key={stage.id}
                  initial={{ opacity: 0, y: 46 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className={`group relative overflow-hidden rounded-[34px] border border-[rgba(6,45,87,0.08)] px-5 pb-6 pt-5 shadow-[0_24px_55px_rgba(6,45,87,0.07)] lg:min-h-[510px] lg:rounded-[38px] lg:px-6 lg:pb-7 lg:pt-6 ${stage.accentClassName} ${stage.cardClassName}`}
                >
                  <div className="relative flex items-center justify-between gap-3">
                    <span className="inline-flex rounded-full bg-[rgba(255,255,255,0.62)] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#537EA8] backdrop-blur-sm">
                      {stage.badge}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/72 text-[#062D57] shadow-[0_10px_24px_rgba(6,45,87,0.08)]">
                      <stage.icon className="h-[18px] w-[18px]" />
                    </span>
                  </div>

                  <div className="relative border-t border-[rgba(6,45,87,0.08)] pt-5 text-left">
                    <h3 className="text-[34px] font-bold leading-[38px] text-[#062D57] lg:text-[40px] lg:leading-[44px]">
                      {stage.title}
                    </h3>
                    <p className="pt-4 text-[18px] font-medium leading-[28px] text-[#062D57] lg:text-[20px] lg:leading-[30px]">
                      {stage.range}
                    </p>
                    <p className="pt-2 text-[20px] font-semibold leading-[30px] text-[#062D57] lg:text-[22px] lg:leading-[32px]">
                      {stage.payout}
                    </p>

                    <ul className="space-y-4 pt-6">
                      {stage.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-[17px] leading-[27px] text-[#062D57] lg:text-[18px] lg:leading-[29px]"
                        >
                          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#537EA8]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center pb-0 pt-10 lg:pt-12"
            >
              <Link
                href="https://83iwtj515ob.typeform.com/I4Kambassador"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[54px] min-w-[268px] items-center justify-center gap-2 rounded-full bg-[linear-gradient(180deg,#C6860B_0%,#D4AC0D_100%)] px-8 text-[17px] font-bold leading-none text-white shadow-[0_18px_36px_rgba(198,134,11,0.22)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(198,134,11,0.3)] lg:min-w-[292px] lg:text-[19px]"
              >
                Jetzt Ambassador werden!
                <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
