"use client";

import { motion, type Variants } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Book a free consultation",
    description:
      "Sign up for a free, no-obligation consultation. Simply fill out our form, answer a few brief questions and leave your contact details. Our expert will then get in touch with you to discuss the first steps. This will give you an initial overview and tell you the best way to invest for your child.",
  },
  {
    number: "02",
    title: "Invest4Kids will contact you",
    description:
      "We will contact you within 48 hours to discuss the process in a short phone call. In this conversation, we will check your current status and make sure that you can benefit from our advice to the maximum. We'll take the time to clarify your questions and explain all your options.",
  },
  {
    number: "03",
    title: "Your individual consultation",
    description:
      "In a 30-minute consultation, you will find out everything you need to know about ETF investments for your child. We'll discuss your family situation and your savings goals. We will then answer all your questions, explain how to invest in ETFs and show you how you can achieve the best for your child with Invest4Kids.",
  },
  {
    number: "04",
    title: "The Invest4Kids concept for your child",
    descriptionBeforeHighlight:
      "After the consultation, we start investing for your child straight away. Our experts will take care of everything for you, from drawing up the strategy to opening the custody account and controlling. You can sit back and rest assured that your child will benefit from long-term wealth accumulation. This gives your child the chance to receive up to ",
    highlight: "€25,703 more",
    descriptionAfterHighlight:
      " and many other benefits on their 18th birthday.",
  },
] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
} satisfies Variants;

const slideInUpVariants = {
  hidden: {
    opacity: 0,
    y: 58,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.68,
      ease: [0.22, 1, 0.36, 1],
    },
  },
} satisfies Variants;

export function ProcessTimelineSection() {
  return (
    <section
      id="ablauf"
      aria-labelledby="process-timeline-heading"
      className="font-outfit bg-[linear-gradient(180deg,#2A4D89_0%,#E0EBEE_100%)] px-6 py-[74px] text-[#334155] lg:bg-none lg:bg-[#E4EDF0] lg:px-0 lg:py-[124px]"
    >
      <div className="mx-auto flex w-full max-w-full flex-col items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={slideInUpVariants}
          className="w-full max-w-[320px] text-center md:max-w-[700px] xl:max-w-[1420px]"
        >
          <h2
            id="process-timeline-heading"
            className="text-[30px] font-medium leading-[36px] text-white md:text-[36px] md:leading-[40px] lg:text-[48px] lg:leading-[48px] lg:text-[#1E293B]"
          >
            From birth to adolescence: how your ETF savings plan for children
            works
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-[50px] flex w-full flex-col items-center justify-center gap-[50px] md:flex-row md:flex-wrap md:items-start md:gap-[30px] xl:gap-[56px]"
        >
          {steps.map((step) => (
            <motion.article
              key={step.number}
              variants={slideInUpVariants}
              className="w-full max-w-[332px] rounded-[44px] bg-[linear-gradient(45deg,#FFFFFF_0%,#F0F9FF_100%)] p-8 lg:h-[571px] lg:w-[327px] lg:max-w-[327px]"
            >
              <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#9ECCDE] text-[20px] font-bold leading-[28px] text-[#84B7CA] md:h-[44px] md:w-[44px] md:text-[24px] md:leading-[32px]">
                {step.number}
              </div>

              <h3 className="pt-5 text-[20px] font-bold leading-[28px] text-[#0F172A] md:text-[24px] md:leading-[32px]">
                {step.title}
              </h3>

              {"description" in step ? (
                <p className="pt-4 text-[16px] font-normal leading-[24px] text-[#334155] md:text-[18px] md:leading-[28px]">
                  {step.description}
                </p>
              ) : (
                <p className="pt-4 text-[16px] font-normal leading-[24px] text-[#334155] md:text-[18px] md:leading-[28px]">
                  {step.descriptionBeforeHighlight}
                  <span className="underline decoration-[#334155] underline-offset-[3px]">
                    {step.highlight}
                  </span>
                  {step.descriptionAfterHighlight}
                </p>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
