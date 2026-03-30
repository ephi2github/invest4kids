"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Camera,
  Disc3,
  Music4,
  Play,
} from "lucide-react";
import bookImage from "@/assets/images/etf-fuer-kinder/book.webp";
import cloudImage from "@/assets/images/etf-fuer-kinder/cloud.webp";
import rocketImage from "@/assets/images/etf-fuer-kinder/rocket.webp";

const cards = [
  {
    text: "...that your child has a financial head start and can plan their future with confidence?",
    image: rocketImage,
    alt: "Rocket icon",
  },
  {
    text: "...be secure for the future yourself and not have to worry that you won't have enough for your child later?",
    image: cloudImage,
    alt: "Thought cloud icon",
  },
  {
    text: "...be a role model for your child and show them how to save wisely for the future through ETF investments?",
    image: bookImage,
    alt: "Book and euro icon",
  },
] as const;

const socialLinks = [
  {
    href: "https://www.tiktok.com/@invest4kids_official",
    label: "Invest4Kids on TikTok",
    icon: Music4,
  },
  {
    href: "https://www.instagram.com/invest4kids_official",
    label: "Invest4Kids on Instagram",
    icon: Camera,
  },
  {
    href: "https://open.spotify.com/user/31zoltslu5wgyg36zv467fy4xtti?si=2fbd10ff6a224d65",
    label: "Invest4Kids on Spotify",
    icon: Disc3,
  },
  {
    href: "https://www.youtube.com/@Invest4kids1",
    label: "Invest4Kids on YouTube",
    icon: Play,
  },
] as const;

export function InvestChildBenefitSection() {
  return (
    <>
      <section
        aria-labelledby="child-benefit-heading"
        className="font-outfit overflow-hidden bg-[#FAFAF9] px-5 pb-[74px] pt-[74px] text-[#1E293B] sm:px-6 lg:px-0 lg:pb-[60px] lg:pt-[60px]"
      >
        <div className="mx-auto flex w-full max-w-[1540px] flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="max-w-[900px] text-center"
          >
            <h2
              id="child-benefit-heading"
              className="text-balance text-[30px] font-medium leading-[1.2] tracking-[-0.045em] text-black md:text-[36px] lg:text-[48px] lg:leading-[48px]"
            >
              Why should you invest your child benefit?
            </h2>
            <p className="mt-5 text-[18px] font-medium leading-[28px] tracking-[-0.03em] text-[#1E293B] md:text-[20px] lg:mt-6 lg:text-[24px] lg:leading-[32px]">
              You want...
            </p>
          </motion.div>

          <div className="mt-[50px] flex w-full max-w-[1205px] flex-col items-center gap-8 md:gap-10 lg:flex-row lg:items-stretch lg:justify-center lg:gap-[50px] ">
            {cards.map((card, index) => (
              <motion.article
                key={card.text}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className=" flex min-h-[230px] w-full max-w-[335px] flex-col rounded-[44px] bg-[linear-gradient(45deg,#FFFFFF_0%,#F0F9FF_100%)] p-8 sm:min-h-[254px] lg:min-h-[270px]"
              >
                <p className="max-w-[22ch] text-[16px] leading-[1.56] tracking-[-0.03em] text-[#2C3E50] sm:text-[18px] sm:leading-[1.56]">
                  {card.text}
                </p>
                <div className="mt-auto flex justify-end pt-[30px]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={64}
                    height={64}
                    className="h-16 w-16"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
