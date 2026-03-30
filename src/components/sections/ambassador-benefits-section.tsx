"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BadgeEuro,
  BookOpenText,
  GraduationCap,
  Handshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    icon: BadgeEuro,
    title: "Earn up to €200 per referral 💸",
    body: "Look forward to monthly payouts - quick and easy!",
  },
  {
    icon: Sparkles,
    title: "Make a real difference",
    body: "Support the mission of Invest4Kids and help to secure the financial future of thousands of children.",
  },
  {
    icon: GraduationCap,
    title: "Get started with our Academy",
    body: "Discover further training opportunities, improve your social media skills and learn all about investments.",
  },
  {
    icon: ShieldCheck,
    title: "Trust a proven concept",
    body: "Recommend the unique Invest4Kids concept, which is already trusted by over 5,200 parents and with good reason.",
  },
  {
    icon: BookOpenText,
    title: "Use professional advertising materials",
    body: "You will receive a large selection of ready-made advertising materials that make recommendation child's play.",
  },
  {
    icon: Handshake,
    title: "Become part of an inspiring community",
    body: "Network with like-minded parents, share experiences and celebrate your successes - in a strong community.",
  },
] as const;

const headingText = "Why become an Ambassador?";

export function AmbassadorBenefitsSection() {
  const [typedHeading, setTypedHeading] = useState("");

  useEffect(() => {
    let frame = 0;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const tick = () => {
      frame += 1;
      setTypedHeading(headingText.slice(0, frame));

      if (frame < headingText.length) {
        timeoutId = setTimeout(tick, 42);
      }
    };

    timeoutId = setTimeout(tick, 180);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <section
      className="bg-transparent px-0 pb-[48px] pt-[8px] text-[#062D57] md:pb-[64px] md:pt-[8px]"
      style={{ fontFamily: "var(--font-outfit)" }}
    >
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full text-center"
        >
          <h2 className="m-0 px-5 pb-[5px] text-[40px] font-bold leading-[48px] text-[#062D57] lg:text-[56px] lg:leading-[62px]">
            {typedHeading}
            <span className="inline-block w-[0.08em] animate-pulse text-[#062D57]">
              |
            </span>
          </h2>
          <p className="px-5 text-[13px] font-medium leading-[20px] text-[#062D57] lg:text-[18px] lg:leading-[26px]">
            Your benefits as an Invest4Kids Ambassador
          </p>
        </motion.div>

        <div className="grid w-[95%] grid-cols-1 gap-[25px] px-0 py-5 min-[768px]:w-[768px] min-[768px]:grid-cols-2 min-[768px]:gap-[15px] min-[896px]:w-[896px] min-[1024px]:w-[1024px]">
          {benefits.map((benefit, index) => (
            <motion.article
              key={benefit.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex w-full items-center justify-start"
            >
              <div className="flex items-center justify-center pr-[15px] min-[768px]:pr-[5px] min-[1024px]:pr-[15px]">
                <div className="relative h-[56px] w-[56px] shrink-0 overflow-hidden rounded-full bg-[#D3E6EC] shadow-[0_10px_24px_rgba(6,45,87,0.04)] min-[431px]:h-[72px] min-[431px]:w-[72px]">
                  <benefit.icon
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 text-[#062D57] min-[431px]:h-[32px] min-[431px]:w-[32px]"
                    strokeWidth={2}
                  />
                </div>
              </div>

              <div className="flex items-center justify-start">
                <p className="w-auto text-left text-[14px] leading-[2] text-[#062D57] min-[431px]:text-[19px] min-[431px]:leading-[1.75] min-[768px]:text-[11px] min-[768px]:leading-4 min-[1024px]:text-[16px] min-[1024px]:leading-[2]">
                  <strong className="text-[15px] font-bold leading-[1.2] text-[#062D57] min-[1024px]:text-[20px]">
                    {benefit.title}
                  </strong>
                  <br />
                  {benefit.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
