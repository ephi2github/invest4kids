"use client";

import { useState, useCallback, useEffect } from "react";
import alexanderMinKim from "@/assets/images/home/team/alexander-min-kim.webp";
import bastianWeise from "@/assets/images/home/team/bastian-weise.webp";
import bogdanJakuschenko from "@/assets/images/home/team/bogdan-jakuschenko.webp";
import felixKleinhenz from "@/assets/images/home/team/felix-kleinhenz.webp";
import finnDiestel from "@/assets/images/home/team/finn-diestel.webp";
import gloryMayasi from "@/assets/images/home/team/glory-mayasi.webp";
import janoschEisenbart from "@/assets/images/home/team/janosch-eisenbart.webp";
import jeromeJoseph from "@/assets/images/home/team/jerome-joseph.webp";
import lailaMoor from "@/assets/images/home/team/laila-moor.webp";
import mallikGodjeIssa from "@/assets/images/home/team/mallik-godje-issa.webp";
import patrickMakaryk from "@/assets/images/home/team/patrick-makaryk.webp";
import sofiaLasovskaja from "@/assets/images/home/team/sofia-lasovskaja.webp";
import susannaSchmitz from "@/assets/images/home/team/susanna-schmitz.webp";
import tillJohanDeraneck from "@/assets/images/home/team/till-johan-deraneck.webp";
import timRuser from "@/assets/images/home/team/tim-ruser.webp";
import tonyKotala from "@/assets/images/home/team/tony-kotala.webp";
import torbenKratzke from "@/assets/images/home/team/torben-kratzke.webp";
import TeamCard from "../ui/TeamCard";
import { ArrowRight } from "lucide-react";

const teamMembers = [
  { name: "Laila", image: lailaMoor, subtitle: "Expertin für Kinderinvestments" },
  { name: "Bogdan", image: bogdanJakuschenko, subtitle: "Gründer von Invest4kids" },
  { name: "Torben", image: torbenKratzke, subtitle: "Experte für Kinderinvestments" },
  { name: "Alex", image: alexanderMinKim, subtitle: "Experte für Kinderinvestments" },
  { name: "Susanna", image: susannaSchmitz, subtitle: "Expertin für Kinderinvestments" },
  { name: "Tony", image: tonyKotala, subtitle: "Experte für Kinderinvestments" },
  { name: "Janosch", image: janoschEisenbart, subtitle: "Experte für Kinderinvestments" },
  { name: "Till", image: tillJohanDeraneck, subtitle: "Experte für Kinderinvestments" },
  { name: "Tim", image: timRuser, subtitle: "Experte für Kinderinvestments" },
  { name: "Mallik", image: mallikGodjeIssa, subtitle: "Experte für Kinderinvestments" },
  { name: "Glory", image: gloryMayasi, subtitle: "Experte für Kinderinvestments" },
  { name: "Finn", image: finnDiestel, subtitle: "Experte für Kinderinvestments" },
  { name: "Sofia", image: sofiaLasovskaja, subtitle: "Expertin für Kinderinvestments" },
  { name: "Bastian", image: bastianWeise, subtitle: "Experte für Kinderinvestments" },
  { name: "Jerome", image: jeromeJoseph, subtitle: "Experte für Kinderinvestments" },
  { name: "Patrick", image: patrickMakaryk, subtitle: "Experte für Kinderinvestments" },
  { name: "Felix", image: felixKleinhenz, subtitle: "Experte für Kinderinvestments" },
];

const CARD_W = 253;
const GAP = 24;
const EDGE_BUFFER = 2;

export default function TeamCarousel() {
  const teamCount = teamMembers.length;
  const [carouselMembers, setCarouselMembers] = useState(() => [
    ...teamMembers,
    ...teamMembers,
  ]);
  const [centerIndex, setCenterIndex] = useState(teamCount + 3);
  const [virtualStartIndex, setVirtualStartIndex] = useState(0);
  const [isIndexAdjusting, setIsIndexAdjusting] = useState(false);

  const prev = useCallback(() => {
    if (centerIndex <= EDGE_BUFFER) {
      setIsIndexAdjusting(true);
      setCarouselMembers((prevMembers) => [...teamMembers, ...prevMembers]);
      setVirtualStartIndex((prevValue) => prevValue - teamCount);
      setCenterIndex((prevIndex) => prevIndex + teamCount - 1);
      return;
    }

    setCenterIndex((i) => i - 1);
  }, [centerIndex, teamCount]);

  const next = useCallback(() => {
    if (centerIndex >= carouselMembers.length - (EDGE_BUFFER + 1)) {
      setCarouselMembers((prevMembers) => [...prevMembers, ...teamMembers]);
    }

    setCenterIndex((i) => i + 1);
  }, [centerIndex, carouselMembers.length]);

  const offset = centerIndex * (CARD_W + GAP) + CARD_W / 2;

  useEffect(() => {
    if (isIndexAdjusting) {
      const frame = requestAnimationFrame(() => {
        setIsIndexAdjusting(false);
      });

      return () => cancelAnimationFrame(frame);
    }
  }, [isIndexAdjusting]);

  return (
    <section className="bg-bg-cream">
      <div className="py-14 md:pt-25 md:pb-17.5 mx-auto w-full md:max-w-346.5">
        <div className="md:mx-35.75 flex flex-col md:flex-row items-center justify-between px-5 gap-y-5">
          <h2 className="text-center font-bold text-[27px] md:text-[28px] leading-[1.7]">
            Dein Team hinter Invest4Kids
          </h2>
          <a
            href="/team"
            className="items-center w-full md:w-fit justify-center border rounded-full transition-all duration-200 text-[16px] md:text-[18px] flex font-medium h-12.5 py-3.75 px-9 font-outfit border-accent-hover! bg-white!"
          >
            Mehr zum Team erfahren <ArrowRight width={16} height={16} className="ml-0.5" />
          </a>
        
        </div>

        <div className="overflow-x-hidden pt-20 z-10 pb-7.5 mt-8.5">
          <div
            className={`flex ease-in-out ${isIndexAdjusting ? "" : "transition-transform duration-500"}`}
            style={{
              gap: `${GAP}px`,
              transform: `translateX(calc(50% - ${offset}px))`,
            }}
          >
            {carouselMembers.map((member, idx) => (
              <TeamCard
                key={`${member.name}-${virtualStartIndex + idx}`}
                name={member.name}
                imageUrl={member.image}
                subtitle={member.subtitle}
                isCenter={idx === centerIndex}
              />
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="-mt-13 flex items-center justify-center gap-5 relative z-20">
          <button
            onClick={prev}
            aria-label="Vorheriges Teammitglied"
            className="cursor-pointer p-2 hover:opacity-70 hover:text-accent-hover text-primary transition-colors duration-300"
          >
            <svg
              width="72"
              height="16"
              viewBox="0 0 72 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M70 8H2M2 8L9 1.5M2 8L9 14.5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Nächstes Teammitglied"
            className="cursor-pointer p-2 hover:opacity-70 hover:text-accent-hover text-primary transition-colors duration-300"
          >
            <svg
              width="72"
              height="16"
              viewBox="0 0 72 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8H70M70 8L63 1.5M70 8L63 14.5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>       
      </div>
    </section>
  );
}
