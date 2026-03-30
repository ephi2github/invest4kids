"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import phoneChatExactImage from "@/assets/images/etf-fuer-kinder/phone-chat-exact.png";

const bulletPoints = [
  "Uncertainty in the selection of suitable ETFs",
  "Lack of knowledge about risks and opportunities",
  "Fear of hidden costs or wrong decisions",
] as const;

export function ParentHesitationSection() {
  return (
    <section
      aria-labelledby="parent-hesitation-heading"
      className="font-outfit relative -mt-6 overflow-hidden bg-[linear-gradient(180deg,#FAFAF9_0%,#133A7E_100%)] px-5 pb-0 pt-[60px] text-black  lg:px-6 "
    >
      <div className="mx-auto flex w-full max-w-[1550px] flex-col items-center gap-[50px]">
        <div className="flex w-full flex-col items-center gap-[50px] lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-[50px]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex w-full max-w-[400px] flex-col items-center gap-4 text-center lg:w-[400px] lg:flex-none lg:items-start lg:text-left"
          >
            <p className="text-[18px] font-medium leading-[21px] text-black md:text-[20px] md:leading-[22px] lg:text-[22px] lg:leading-[22px] lg:[text-shadow:0_0_10px_rgba(0,0,0,0.3)]">
              Despite all these reasons
            </p>

            <h2
              id="parent-hesitation-heading"
              className="w-full text-[30px] font-medium leading-[36px] text-black md:text-[36px] md:leading-[40px] lg:text-[32px] lg:leading-[35px]"
            >
              Why are many parents still hesitant?
            </h2>

            <p className="text-[18px] font-normal leading-[28px] text-black">
              Many parents still invest child benefit or savings amounts in
              traditional savings accounts. However, inflation is slowly eating
              away at their assets. The result: savings barely grow, while
              important goals such as studying, a driving license or a first
              home become significantly more expensive.
            </p>

            <ul className="space-y-0 text-[18px] font-normal leading-[28px] text-black">
              {bulletPoints.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-[400px] lg:w-[519px] lg:flex-none"
          >
            <Image
              src={phoneChatExactImage}
              alt="Phone mockup showing Invest4Kids Instagram messages"
              width={519}
              height={1023}
              priority={false}
              className="mx-auto w-full max-w-[330px] lg:max-w-[519px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
