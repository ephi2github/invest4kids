"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import invest4kidsLogo from "@/assets/images/header/invest4kids-logo.png";
import ambassadorHeroImage from "@/assets/images/ambassadorprogramm/ambassador-hero.png";

const ambassadorHref =
  "https://83iwtj515ob.typeform.com/I4Kambassador";

function PlayBadge({ mobile = false }: { mobile?: boolean }) {
  return (
    <div
      className={`absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[#FFC53A] ${
        mobile ? "h-[68px] w-[92px] rounded-[16px]" : "h-[136px] w-[185px] rounded-[28px]"
      }`}
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 56 64"
        className={mobile ? "h-[30px] w-[26px]" : "h-[64px] w-[56px]"}
        fill="none"
      >
        <path
          d="M52.5 28.9697C54.8333 30.3169 54.8333 33.6831 52.5 35.0303L7.5 61.0111C5.16667 62.3583 2.25 60.6749 2.25 57.9808L2.25 6.01924C2.25 3.32514 5.16667 1.64175 7.5 2.98889L52.5 28.9697Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

export function AmbassadorHeroSection() {
  return (
    <section
      aria-labelledby="ambassador-hero-heading"
      className="overflow-hidden bg-transparent"
      style={{ fontFamily: "var(--font-outfit)" }}
    >
      <div className="hidden md:block">
        <div className="mx-auto flex w-full max-w-[1550px] justify-end px-5 pb-0 pt-5 lg:px-6">
          <Image
            src={invest4kidsLogo}
            alt="Invest4Kids"
            width={2560}
            height={1618}
            className="h-auto w-20"
            priority
          />
        </div>

        <div className="relative overflow-hidden pb-[94px] pt-[150px] lg:pb-[120px] lg:pt-[165px]">
          <div className="absolute right-[-70px] top-[10%] h-40 w-40 rounded-full bg-[#DDE8EF]" />
          <div className="absolute right-[-50px] top-[45%] h-[250px] w-[250px] rounded-full bg-[#DDE8EF]" />

          <div className="mx-auto flex w-full max-w-[1405px] items-start justify-center gap-[48px]">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-[2] flex w-[662px] justify-end"
            >
              <Link
                href="https://youtu.be/_COZUDmO1a0"
                target="_blank"
                rel="noreferrer"
                className="group relative block h-[372px] w-[662px] overflow-hidden rounded-[24px] shadow-[0_24px_60px_rgba(6,45,87,0.08)]"
                aria-label="Play Invest4Kids Ambassador video"
              >
                <Image
                  src={ambassadorHeroImage}
                  alt="Invest4Kids Ambassador"
                  fill
                  sizes="662px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  priority
                />
                <PlayBadge />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.58, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-[1] flex w-[495px] max-w-[495px] flex-col items-start text-left"
            >
              <p className="mb-[10px] text-[17px] font-normal leading-[24px] text-[#062D57]">
                The exclusive parental referral program
              </p>

              <h2
                id="ambassador-hero-heading"
                className="m-0 text-[40px] font-bold leading-[48px] text-[#062D57]"
              >
                Become Ambassador
                <br />
                at Invest4Kids!
              </h2>

              <div className="relative z-0 my-[10px] ml-[-20%] h-px w-[90%] bg-[#9AAFC2]" />

              <p className="m-0 text-[19px] font-medium leading-[30px] text-[#062D57]">
                As an Invest4Kids Ambassador, you secure children
                <br />
                a better future and earn up to
                <br />
                200€ per recommendation
              </p>

              <Link
                href={ambassadorHref}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex h-[54px] w-[356px] items-center justify-center rounded-[8px] bg-[linear-gradient(180deg,#C6860B_0%,#D4AC0D_100%)] px-6 text-[19px] font-bold leading-none text-white shadow-[0_18px_35px_rgba(198,134,11,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_45px_rgba(198,134,11,0.28)]"
              >
                Become an Ambassador now!
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex min-h-screen w-full max-w-none flex-col items-center overflow-x-hidden px-5 pb-7 pt-4 md:hidden"
      >
        <Image
          src={invest4kidsLogo}
          alt="Invest4Kids"
          width={2560}
          height={1618}
          className="h-auto w-20"
          priority
        />

        <p className="mt-6 text-center text-[13px] font-medium leading-[20px] text-[#062D57]">
          The exclusive parental referral program
        </p>

        <h2
          id="ambassador-hero-heading-mobile"
          className="mt-3 text-center text-[40px] font-bold leading-[48px] text-[#062D57]"
        >
          Become Ambassador
          <br />
          at Invest4Kids!
        </h2>

        <div className="my-[14px] h-px w-[85%] bg-[#9AAFC2]" />

        <p className="text-center text-[13px] font-medium leading-[28px] text-[#062D57]">
          As an Invest4Kids Ambassador, you secure children
          <br />
          a better future and earn up to
          <br />
          200€ per recommendation
        </p>

        <div className="w-full px-[6px]">
          <Link
            href="https://youtu.be/_COZUDmO1a0"
            target="_blank"
            rel="noreferrer"
            className="group relative mt-4 block aspect-[351/197.44] w-full max-w-[351px] overflow-hidden rounded-[14px] shadow-[0_20px_45px_rgba(6,45,87,0.08)]"
            aria-labelledby="ambassador-hero-heading-mobile"
          >
            <Image
              src={ambassadorHeroImage}
              alt="Invest4Kids Ambassador"
              fill
              sizes="90vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              priority
            />
            <PlayBadge mobile />
          </Link>

          <Link
            href={ambassadorHref}
            target="_blank"
            rel="noreferrer"
            className="mt-8 flex h-[54px] w-full max-w-[351px] items-center justify-center rounded-[8px] bg-[linear-gradient(180deg,#C6860B_0%,#D4AC0D_100%)] px-4 text-center text-[19px] font-bold leading-[24px] text-white shadow-[0_18px_35px_rgba(198,134,11,0.22)]"
          >
            Become an Ambassador now!
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
