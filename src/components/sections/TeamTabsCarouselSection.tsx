"use client";

import { useState, useCallback, useEffect } from "react";
import Image, { type StaticImageData } from "next/image";
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

type TeamMember = {
  name: string;
  image: StaticImageData;
  subtitle: string;
  quote: string;
};

type Category = {
  label: string;
  members: TeamMember[];
};

const categories: Category[] = [
  {
    label: "Consultants",
    members: [
      { name: "Bogdan", image: bogdanJakuschenko, subtitle: "Founder of Invest4Kids", quote: "My goal: to help 1 million parents make better financial decisions for their children." },
      { name: "Torben", image: torbenKratzke, subtitle: "Expert for children's investments", quote: "I want to create long-term financial security and stability for children." },
      { name: "Alex", image: alexanderMinKim, subtitle: "Expert for children's investments", quote: "We are role models for our kids-that's why it's important to set a good example." },
      { name: "Susanna", image: susannaSchmitz, subtitle: "Expert for children's investments", quote: "The future is uncertain-a plan provides security to reliably support children." },
      { name: "Laila", image: lailaMoor, subtitle: "Expert for children's investments", quote: "My goal: to support and empower 1,000 families on their path to financial freedom." },
      { name: "Tony", image: tonyKotala, subtitle: "Expert for children's investments", quote: "I want all children to have the best opportunities for a successful, carefree future." },
      { name: "Janosch", image: janoschEisenbart, subtitle: "Expert for children's investments", quote: "My goal: to give children financial security and enable them to have a future without hardship." },
      { name: "Till", image: tillJohanDeraneck, subtitle: "Expert for children's investments", quote: "I want to give children an easy start in life-without student loans, for example." },
      { name: "Tim", image: timRuser, subtitle: "Expert for children's investments", quote: "My goal: to help parents give their children a future free from worries and fears." },
      { name: "Mallik", image: mallikGodjeIssa, subtitle: "Expert for children's investments", quote: "Investments are crucial to securing a sustainable future for our children." },
      { name: "Glory", image: gloryMayasi, subtitle: "Expert for children's investments", quote: "It's about giving children the foundations for financial stability and security at an early age." },
      { name: "Finn", image: finnDiestel, subtitle: "Expert for children's investments", quote: "My vision: to make finances more transparent and thus make it easier to get started." },
      { name: "Sofia", image: sofiaLasovskaja, subtitle: "Expert for children's investments", quote: "I learned early on from my mother how important financial awareness is for children." },
      { name: "Bastian", image: bastianWeise, subtitle: "Expert for children's investments", quote: "Together, we are laying the foundation for a secure and carefree future for our children." },
      { name: "Jerome", image: jeromeJoseph, subtitle: "Expert for children's investments", quote: "My mission: to give children access to education and dreams-without financial restrictions." },
      { name: "Patrick", image: patrickMakaryk, subtitle: "Expert for children's investments", quote: "I want to give children a carefree start in life so that they can pursue their heart's desires." },
      { name: "Felix", image: felixKleinhenz, subtitle: "Expert for children's investments", quote: "Those who invest today open doors for their children that often remained closed to them." },
    ],
  },
  { label: "Telephone operators", members: [] },
  { label: "Back office/assistant", members: [] },
  { label: "Marketing/IT", members: [] },
];

const CARD_W = 350;
const GAP = 24;
const EDGE_BUFFER = 2;
const IMAGE_H = 334;
const IMAGE_OVERFLOW = 100;

function QuoteIcon() {
  return (
    <svg
      width="28"
      height="20"
      viewBox="0 0 28 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M6.4 20C4.53333 20 3 19.3333 1.8 18C0.6 16.6667 0 14.9333 0 12.8C0 10.1333 0.733333 7.66667 2.2 5.4C3.66667 3.13333 5.73333 1.33333 8.4 0L9.8 2C7.93333 3.06667 6.5 4.26667 5.5 5.6C4.5 6.93333 4 8.26667 4 9.6C4 10.1333 4.13333 10.5333 4.4 10.8C4.66667 10.8 5 10.7333 5.4 10.6C5.8 10.4667 6.26667 10.4 6.8 10.4C8.26667 10.4 9.46667 10.8667 10.4 11.8C11.3333 12.7333 11.8 13.9333 11.8 15.4C11.8 16.8667 11.2667 18.0667 10.2 19C9.13333 19.6667 7.86667 20 6.4 20ZM22.2 20C20.3333 20 18.8 19.3333 17.6 18C16.4 16.6667 15.8 14.9333 15.8 12.8C15.8 10.1333 16.5333 7.66667 18 5.4C19.4667 3.13333 21.5333 1.33333 24.2 0L25.6 2C23.7333 3.06667 22.3 4.26667 21.3 5.6C20.3 6.93333 19.8 8.26667 19.8 9.6C19.8 10.1333 19.9333 10.5333 20.2 10.8C20.4667 10.8 20.8 10.7333 21.2 10.6C21.6 10.4667 22.0667 10.4 22.6 10.4C24.0667 10.4 25.2667 10.8667 26.2 11.8C27.1333 12.7333 27.6 13.9333 27.6 15.4C27.6 16.8667 27.0667 18.0667 26 19C24.9333 19.6667 23.6667 20 22.2 20Z"
        fill="#133A7D"
        fillOpacity="0.15"
      />
    </svg>
  );
}

export function TeamTabsCarouselSection() {
  const [activeTab, setActiveTab] = useState(0);
  const members = categories[activeTab].members;
  const memberCount = members.length;

  const [carouselItems, setCarouselItems] = useState<TeamMember[]>([]);
  const [centerIndex, setCenterIndex] = useState(0);
  const [virtualStartIndex, setVirtualStartIndex] = useState(0);
  const [isIndexAdjusting, setIsIndexAdjusting] = useState(false);

  const resetCarousel = useCallback((newMembers: TeamMember[]) => {
    if (newMembers.length === 0) {
      setCarouselItems([]);
      setCenterIndex(0);
      setVirtualStartIndex(0);
      return;
    }
    setCarouselItems([...newMembers, ...newMembers]);
    setCenterIndex(newMembers.length + 1);
    setVirtualStartIndex(0);
    setIsIndexAdjusting(false);
  }, []);

  useEffect(() => {
    resetCarousel(members);
  }, [activeTab, members, resetCarousel]);

  const prev = useCallback(() => {
    if (memberCount === 0) return;
    if (centerIndex <= EDGE_BUFFER) {
      setIsIndexAdjusting(true);
      setCarouselItems((prev) => [...members, ...prev]);
      setVirtualStartIndex((prev) => prev - memberCount);
      setCenterIndex((prev) => prev + memberCount - 1);
      return;
    }
    setCenterIndex((i) => i - 1);
  }, [centerIndex, memberCount, members]);

  const next = useCallback(() => {
    if (memberCount === 0) return;
    if (centerIndex >= carouselItems.length - (EDGE_BUFFER + 1)) {
      setCarouselItems((prev) => [...prev, ...members]);
    }
    setCenterIndex((i) => i + 1);
  }, [centerIndex, carouselItems.length, memberCount, members]);

  useEffect(() => {
    if (isIndexAdjusting) {
      const frame = requestAnimationFrame(() => setIsIndexAdjusting(false));
      return () => cancelAnimationFrame(frame);
    }
  }, [isIndexAdjusting]);

  const offset = centerIndex * (CARD_W + GAP) + CARD_W / 2;

  return (
    <section className="bg-[#FBFBFB]">
      <div className="mx-auto w-full max-w-[1100px] px-5 py-[50px]">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActiveTab(i)}
              className={`inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full border-none px-6 py-1.5 font-outfit text-[18px] font-normal leading-[24.5px] transition-colors duration-300 ${
                i === activeTab
                  ? "bg-primary text-white"
                  : "bg-[#f1f2f3] text-text-medium"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Carousel */}
        {memberCount > 0 ? (
          <>
            <div className="mt-10 overflow-hidden pt-[100px] pb-2">
              <div
                className={`flex items-start ease-in-out ${isIndexAdjusting ? "" : "transition-transform duration-500"}`}
                style={{
                  gap: `${GAP}px`,
                  transform: `translateX(calc(50% - ${offset}px))`,
                }}
              >
                {carouselItems.map((member, idx) => (
                  <div
                    key={`${member.name}-${virtualStartIndex + idx}`}
                    className="relative w-[350px] shrink-0"
                  >
                    {/* White card background — starts below the image overflow */}
                    <div className="absolute top-[100px] inset-x-0 bottom-0 rounded-[20px] bg-white shadow-[2px_8px_20px_0_rgba(0,0,0,0.05)]" />

                    {/* Image — extends above the white card */}
                    <div className="relative z-10 h-[334px] w-full">
                      <Image
                        src={member.image}
                        alt={`${member.name}, ${member.subtitle}`}
                        width={464}
                        height={668}
                        className="h-[334px] w-full object-contain object-bottom"
                      />
                      {/* White fade at the bottom of the image */}
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] bg-linear-to-t from-white via-white/85 to-transparent" />
                    </div>

                    {/* Content — sits on top of the white card */}
                    <div className="relative z-10">
                      {/* Name badge */}
                      <div className="px-[34px] pt-10 pb-[15px] font-poppins text-[16px] md:text-[18px] font-bold leading-[1.3] text-text-medium">
                        {member.name}
                      </div>

                      {/* Subtitle + Quote */}
                      <div className="px-[34px] pb-[34px]">
                        <div className="font-outfit text-[16px] md:text-[18px] font-normal leading-[1.4] text-[#4B5563]">
                          {member.subtitle}
                        </div>
                        <div className="mt-3 flex items-start gap-2.5">
                          <QuoteIcon />
                          <p className="m-0 font-outfit text-[16px] md:text-[18px] font-light leading-[1.4] text-[#4B5563]">
                            {member.quote}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="mt-2 flex items-center justify-center gap-5">
              <button
                onClick={prev}
                aria-label="Previous team member"
                className="cursor-pointer border-none bg-transparent p-2 text-primary transition-opacity duration-300 hover:opacity-60"
              >
                <svg width="72" height="16" viewBox="0 0 72 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M70 8H2M2 8L9 1.5M2 8L9 14.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next team member"
                className="cursor-pointer border-none bg-transparent p-2 text-primary transition-opacity duration-300 hover:opacity-60"
              >
                <svg width="72" height="16" viewBox="0 0 72 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8H70M70 8L63 1.5M70 8L63 14.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </>
        ) : (
          <p className="my-15 text-center font-outfit text-[18px] text-[#4B5563]">
            Coming soon
          </p>
        )}
      </div>
    </section>
  );
}
