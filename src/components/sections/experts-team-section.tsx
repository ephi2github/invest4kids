"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import styles from "./experts-team-section.module.css";
import team1Image from "@/assets/images/etf-fuer-kinder/team-1.png";
import team2Image from "@/assets/images/etf-fuer-kinder/team-2.png";
import team3Image from "@/assets/images/etf-fuer-kinder/team-3.png";
import team4Image from "@/assets/images/etf-fuer-kinder/team-4.png";
import team5Image from "@/assets/images/etf-fuer-kinder/team-5.png";
import team6Image from "@/assets/images/etf-fuer-kinder/team-6.png";
import team7Image from "@/assets/images/etf-fuer-kinder/team-7.png";
import team8Image from "@/assets/images/etf-fuer-kinder/team-8.png";

const teamMembers = [
  { name: "Patrick", image: team8Image },
  { name: "Alex", image: team1Image },
  { name: "Torben", image: team2Image },
  { name: "Bogdan", image: team3Image },
  { name: "Angelina", image: team4Image },
  { name: "Laura", image: team5Image },
  { name: "Rebecca", image: team6Image },
  { name: "Sofia", image: team7Image },
] as const;

const stats = [
  { value: "17+", label: "Consultants" },
  { value: "since", label: "2020" },
  { value: "5200+", label: "Advice for families" },
] as const;

export function ExpertsTeamSection() {
  const [isDragging, setIsDragging] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const isPointerDownRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);

  const wrapDragPosition = (nextScrollLeft: number) => {
    const container = scrollerRef.current;

    if (!container) {
      return;
    }

    const loopWidth = container.scrollWidth / 2;

    if (loopWidth <= 0) {
      return;
    }

    let wrappedScrollLeft = nextScrollLeft;

    while (wrappedScrollLeft >= loopWidth) {
      wrappedScrollLeft -= loopWidth;
    }

    while (wrappedScrollLeft < 0) {
      wrappedScrollLeft += loopWidth;
    }

    container.scrollLeft = wrappedScrollLeft;
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const container = scrollerRef.current;

    if (!container) {
      return;
    }

    isPointerDownRef.current = true;
    dragStartXRef.current = event.clientX;
    dragStartScrollLeftRef.current = container.scrollLeft;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDownRef.current) {
      return;
    }

    const dragDistance = event.clientX - dragStartXRef.current;
    wrapDragPosition(dragStartScrollLeftRef.current - dragDistance);
  };

  const handlePointerRelease = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (!isPointerDownRef.current) {
      return;
    }

    isPointerDownRef.current = false;
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section
      aria-labelledby="experts-team-heading"
      className="font-outfit bg-[#133A7E] px-5 pb-10 pt-[60px] text-white lg:px-0 lg:pb-[44px] lg:pt-[75px]"
    >
      <div className="mx-auto flex w-full max-w-[1550px] flex-col items-center gap-5">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-[860px] text-center"
        >
          <h2
            id="experts-team-heading"
            className="text-[30px] font-medium leading-[36px] md:text-[36px] md:leading-[40px] lg:text-[48px] lg:leading-[48px]"
          >
            Save ETFs with Invest4Kids:
            <br />
            Experts at your side
          </h2>

          <p className="mt-5 text-[18px] font-medium leading-[28px] text-white">
            This is where we come in: your personal experts for children&apos;s
            investments
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-[10px] w-full"
        >
          <div
            ref={scrollerRef}
            className={`${styles.scroller} ${isDragging ? styles.dragging : ""} mx-auto md:-mx-5 px-1 lg:mx-0 lg:px-0`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerRelease}
            onPointerCancel={handlePointerRelease}
          >
            <ul className={styles.track + ' md:w-max'}>
              {[...teamMembers, ...teamMembers].map((member, index) => (
                <li
                  key={`${member.name}-${index}`}
                  aria-hidden={index >= teamMembers.length}
                  className="mr-5  shrink-0 list-none w-full md:w-[340px] lg:w-[175px] xl:w-[176px]"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={1000}
                    height={1500}
                    draggable={false}
                    className="h-auto w-full rounded-[15px] object-cover relative z-20"
                  />
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-5 grid w-full max-w-[1386px] grid-cols-1 gap-5 md:grid-cols-3"
        >
          {stats.map((stat) => (
            <div
              key={`${stat.value}-${stat.label}`}
              className="flex min-h-[86px] flex-col items-center justify-center rounded-[10px] bg-[#133A7E] px-[15px] py-[15px] text-center shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            >
              <span className="text-2xl font-semibold leading-8">
                {stat.value}
              </span>
              <span className="text-2xl font-semibold leading-8">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
