"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, HandCoins, PenLine } from "lucide-react";

const steps = [
  {
    step: "STEP 1:",
    title: "Registration",
    body: "Simply register using our form and submit your application. We will check your application and inform you as soon as you are confirmed - then you can get started right away!",
    icon: PenLine,
    iconWrapClassName:
      "bg-[linear-gradient(180deg,rgba(83,126,168,0.22)_0%,rgba(211,230,236,0.9)_100%)] text-[#204B7A]",
    iconInnerClassName: "bg-[rgba(255,255,255,0.72)]",
  },
  {
    step: "STEP 2:",
    title: "Academy",
    body: "Get started with our Academy! Here you will learn everything about investments and how to use social media effectively. Upon completion you will receive your personal Ambassador certificate.",
    icon: GraduationCap,
    iconWrapClassName:
      "bg-[linear-gradient(180deg,rgba(212,172,13,0.18)_0%,rgba(243,228,165,0.78)_100%)] text-[#8C6B05]",
    iconInnerClassName: "bg-[rgba(255,255,255,0.78)]",
  },
  {
    step: "STEP 3:",
    title: "Recommend & Earn",
    body: "Now you're ready to go! Use your personal referral link to recommend Invest4Kids to others and secure up to €200 per recommendation.",
    icon: HandCoins,
    iconWrapClassName:
      "bg-[linear-gradient(180deg,rgba(33,133,112,0.18)_0%,rgba(201,233,225,0.92)_100%)] text-[#1C6C5D]",
    iconInnerClassName: "bg-[rgba(255,255,255,0.78)]",
  },
] as const;

export function AmbassadorHowItWorksSection() {
  return (
    <section
      className="bg-transparent px-4 pb-[48px] pt-[52px] text-[#062D57] sm:px-5 lg:px-6 lg:pb-[64px] lg:pt-[72px]"
      style={{ fontFamily: "var(--font-outfit)" }}
    >
      <div className="mx-auto flex w-full max-w-[1460px] flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          className="w-full text-center"
        >
          <span className="inline-flex rounded-full border border-[rgba(6,45,87,0.08)] bg-[rgba(255,255,255,0.58)] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#537EA8] shadow-[0_12px_30px_rgba(6,45,87,0.04)] backdrop-blur-sm lg:px-4 lg:py-2 lg:text-[12px]">
            Ambassador Program
          </span>

          <h2 className="m-0 pt-4 text-[34px] font-bold leading-[40px] text-[#062D57] sm:text-[36px] sm:leading-[44px] lg:text-[56px] lg:leading-[62px]">
            How it works
          </h2>
          <p className="mx-auto max-w-[680px] pt-[8px] text-[13px] font-medium leading-[20px] text-[#385779] lg:text-[18px] lg:leading-[26px]">
            Become an Ambassador in 3 simple steps
          </p>
        </motion.div>

        <div className="relative mt-8 w-full lg:mt-12">
          <div className="pointer-events-none absolute left-[18%] right-[18%] top-[104px] hidden h-px bg-[linear-gradient(90deg,rgba(83,126,168,0)_0%,rgba(83,126,168,0.3)_18%,rgba(83,126,168,0.3)_82%,rgba(83,126,168,0)_100%)] lg:block" />

          <div className="flex w-full flex-col items-center justify-center gap-5 md:flex-row md:flex-wrap md:items-stretch md:gap-[24px] xl:flex-nowrap xl:gap-[26px]">
            {steps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 44, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                className="group relative flex min-h-0 w-full max-w-[420px] flex-col justify-between overflow-hidden rounded-[24px] border border-[rgba(83,126,168,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(247,250,252,0.92)_100%)] px-5 py-6 shadow-[0_20px_44px_rgba(6,45,87,0.06)] backdrop-blur-sm md:w-[27vw] md:max-w-none md:rounded-[22px] md:px-7 md:py-8 md:shadow-[0_24px_55px_rgba(6,45,87,0.07)] xl:w-[24.5vw]"
              >
                <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#5C88B4_0%,#D4AC0D_50%,#5C88B4_100%)] opacity-70" />

                <div className="flex h-full flex-col items-center">
                  <div className="flex w-full justify-center">
                    <span className="inline-flex rounded-full bg-[rgba(83,126,168,0.1)] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#537EA8] md:px-4 md:py-2 md:text-[11px]">
                      {step.step}
                    </span>
                  </div>

                  <div
                    className={`relative mt-5 flex h-[112px] w-[112px] items-center justify-center rounded-[24px] shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] md:mt-6 md:h-[144px] md:w-[144px] md:rounded-[28px] ${step.iconWrapClassName}`}
                  >
                    <div
                      className={`flex h-[78px] w-[78px] items-center justify-center rounded-[20px] shadow-[0_12px_24px_rgba(6,45,87,0.08)] md:h-[100px] md:w-[100px] md:rounded-[24px] md:shadow-[0_14px_28px_rgba(6,45,87,0.08)] ${step.iconInnerClassName}`}
                    >
                      <step.icon className="h-[34px] w-[34px] stroke-[1.85] md:h-[46px] md:w-[46px]" />
                    </div>
                  </div>

                  <h3 className="pt-5 text-center text-[20px] font-bold leading-[28px] text-[#062D57] md:pt-6 md:text-[24px] md:leading-8">
                    {step.title}
                  </h3>

                  <p className="pt-3 text-center text-[15px] font-normal leading-[1.68] text-[#385779] md:pt-4 md:text-[18px] md:leading-[1.75]">
                    {step.body}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center px-0 py-10 text-center lg:py-[56px]"
        >
          <Link
            href="https://83iwtj515ob.typeform.com/I4Kambassador"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-[54px] min-w-[248px] items-center justify-center gap-2 rounded-full bg-[linear-gradient(180deg,#C6860B_0%,#D4AC0D_100%)] px-8 text-[17px] font-bold leading-none text-white shadow-[0_18px_36px_rgba(198,134,11,0.22)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(198,134,11,0.3)] lg:h-[58px] lg:min-w-[280px] lg:px-10 lg:text-[19px]"
          >
            Get started now!
            <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
