"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import wishDriverLicenseImage from "@/assets/images/etf-fuer-kinder/wish-driver-license.webp";
import wishStudyImage from "@/assets/images/etf-fuer-kinder/wish-study.webp";
import wishWorldTourImage from "@/assets/images/etf-fuer-kinder/wish-world-tour.webp";

const inputs = [
  {
    label: "Monthly savings rate",
    value: "255 €",
  },
  {
    label: "Savings period",
    value: "18 years",
  },
  {
    label: "Yield",
    value: "6 % p.a.",
  },
  {
    label: "Total contribution",
    value: "55.080 €",
  },
] as const;

const outcomes = [
  {
    title: "Driver's license & car",
    value: "8.000 €",
    image: wishDriverLicenseImage,
    imageWidth: 800,
    imageHeight: 533,
    alt: "Young woman smiling and holding up her driver's license from a car window",
  },
  {
    title: "World tour",
    value: "6.000 €",
    image: wishWorldTourImage,
    imageWidth: 828,
    imageHeight: 553,
    alt: "Traveler sitting on a stone wall overlooking a blue coastline",
  },
  {
    title: "Study (6 semesters)",
    value: "30.000 €",
    image: wishStudyImage,
    imageWidth: 800,
    imageHeight: 534,
    alt: "Students talking together in a university lecture hall",
  },
] as const;

function DownArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 126 126"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M86.1818 8H41.2273C38.4658 8 36.2273 10.2386 36.2273 13V53.4C36.2273 56.1614 33.9887 58.4 31.2273 58.4H13.1265C8.6642 58.4 6.43691 63.8018 9.60245 66.947L59.4759 116.499C61.4259 118.436 64.5741 118.436 66.5241 116.499L116.398 66.947C119.563 63.8018 117.336 58.4 112.873 58.4H96.1818C93.4204 58.4 91.1818 56.1614 91.1818 53.4V13C91.1818 10.2386 88.9432 8 86.1818 8Z"
        stroke="currentColor"
        strokeWidth="15"
      />
    </svg>
  );
}

function DownLeftArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 112 113"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M41.2326 9.44884L9.44494 41.2365C7.49231 43.1891 7.49231 46.3549 9.44493 48.3076L38.012 76.8747C39.9647 78.8273 39.9647 81.9931 38.012 83.9458L25.2129 96.7449C22.0575 99.9003 24.3023 105.295 28.7646 105.28L99.0688 105.053C101.818 105.044 104.044 102.818 104.053 100.069L104.28 29.7649C104.295 25.3026 98.9 23.0578 95.7446 26.2132L83.9418 38.016C81.9892 39.9686 78.8234 39.9686 76.8708 38.016L48.3037 9.44884C46.351 7.49622 43.1852 7.49622 41.2326 9.44884Z"
        stroke="currentColor"
        strokeWidth="15"
      />
    </svg>
  );
}

function DownRightArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 112 113"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M71.0487 9.46447L102.836 41.2521C104.789 43.2048 104.789 46.3706 102.836 48.3232L74.2692 76.8903C72.3166 78.8429 72.3166 82.0088 74.2692 83.9614L87.0684 96.7605C90.2237 99.9159 87.979 105.31 83.5166 105.296L13.2124 105.069C10.4637 105.06 8.23754 102.834 8.22864 100.085L8.00112 29.7805C7.98668 25.3182 13.3813 23.0735 16.5366 26.2288L28.3394 38.0316C30.292 39.9842 33.4578 39.9842 35.4105 38.0316L63.9776 9.46447C65.9302 7.51185 69.096 7.51184 71.0487 9.46447Z"
        stroke="currentColor"
        strokeWidth="15"
      />
    </svg>
  );
}

export function WishesFlowSection() {
  return (
    <section
      id="vorteile"
      aria-labelledby="wishes-flow-heading"
      className="font-outfit bg-[linear-gradient(180deg,#FFFFFF_0%,#F6F9FC_21%)] px-5 pb-0 pt-[60px] text-black lg:px-0 "
    >
      <div className="mx-auto flex w-full max-w-[1550px] flex-col items-center gap-[30px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="w-full max-w-[348px] text-center lg:max-w-[65%]"
        >
          <h2
            id="wishes-flow-heading"
            className="text-[30px] font-medium leading-[36px] text-[#1E293B] md:text-[36px] md:leading-[40px] lg:text-[48px] lg:leading-[48px]"
          >
            How to make your child&apos;s wishes come true through smart
            investing
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
          className="flex w-full flex-col items-center justify-center gap-5 lg:w-1/2 lg:flex-row lg:flex-wrap"
        >
          {inputs.map((item) => (
            <article
              key={item.label}
              className="flex w-full flex-col items-center justify-center gap-[10px] rounded-[10px] bg-[#E4EEF3] px-5 py-[10px] lg:w-[48%]"
            >
              <p className="text-center text-[18px] font-light leading-[28px] text-black md:text-[22px] md:leading-[32px]">
                {item.label}
              </p>
              <p className="text-center text-[18px] font-medium leading-[28px] text-black lg:text-[24px] lg:leading-[32px]">
                {item.value}
              </p>
            </article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-[#98BBCD]"
        >
          <DownArrow className="h-[54px] w-[54px] md:h-[62px] md:w-[62px]" />
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex w-full max-w-[320px] flex-col items-center justify-center gap-[10px] rounded-[10px] bg-[linear-gradient(190deg,#88B5CA_4%,#34568D_100%)] px-5 py-[10px] text-center text-white lg:max-w-none lg:w-[30%]"
        >
          <h3 className="text-[18px] font-medium leading-[28px]">
            Assets on the 18th
            <br />
            Birthday
          </h3>
          <p className="text-[18px] font-semibold leading-[28px] md:text-[24px] md:leading-[32px]">
            97.645 €
          </p>
        </motion.article>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex items-center justify-center gap-[64px] text-[#98BBCD] lg:gap-[100px]"
        >
          <DownLeftArrow className="hidden h-[50px] w-[50px] lg:block rotate-90" />
          <DownArrow className="h-[54px] w-[54px] md:h-[62px] md:w-[62px] " />
          <DownRightArrow className="hidden h-[50px] w-[50px] lg:block rotate-270" />
        </motion.div>

        <div className="flex w-full flex-col items-center gap-10 lg:w-[90%] lg:flex-row lg:items-stretch">
          {outcomes.map((outcome, index) => (
            <motion.article
              key={outcome.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="w-full max-w-[320px] overflow-hidden rounded-[20px] bg-white lg:max-w-none lg:w-[31%]"
            >
              <div className="flex min-h-[96px] flex-col items-center justify-center px-5 py-5 text-center md:min-h-[112px]">
                <h3 className="text-[18px] font-light leading-[28px] text-black md:text-[24px] md:leading-[32px]">
                  {outcome.title}
                </h3>
                <p className="text-[24px] font-bold leading-[32px] text-black md:text-[30px] md:leading-[36px] lg:text-[32px] lg:leading-[40px]">
                  {outcome.value}
                </p>
              </div>

              <Image
                src={outcome.image}
                alt={outcome.alt}
                width={outcome.imageWidth}
                height={outcome.imageHeight}
                sizes="(max-width: 1023px) min(100vw - 40px, 320px), 28vw"
                className="h-auto w-full rounded-b-[20px]"
              />
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-[#98BBCD]"
        >
          <DownArrow className="h-[54px] w-[54px] md:h-[62px] md:w-[62px]" />
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex w-full max-w-[320px] flex-col items-center justify-center gap-[10px] rounded-[10px] bg-[linear-gradient(190deg,#88B5CA_4%,#34568D_100%)] px-5 py-[10px] text-center text-white lg:max-w-none lg:w-[30%]"
        >
          <h3 className="text-[18px] font-medium leading-[28px]">
            Money available according to
            <br />
            Expenditure
          </h3>
          <p className="text-[18px] font-semibold leading-[28px] md:text-[24px] md:leading-[32px]">
            53.645 €
          </p>
        </motion.article>
      </div>
    </section>
  );
}
