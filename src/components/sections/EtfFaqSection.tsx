"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  q: string;
  a: string;
};

type EtfFaqSectionProps = {
  items: FaqItem[];
  heading?: string;
  id?: string;
  defaultOpenIndex?: number | null;
};

export default function EtfFaqSection({
  items,
  heading = "FAQ",
  id = "FAQ",
  defaultOpenIndex = null,
}: EtfFaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <section
      id={id}
      className="bg-[#F5F5F2] px-5 py-[124px] max-lg:px-0 max-lg:py-[74px] max-md:px-6"
    >
      <div className="mx-auto flex max-w-[1320px] flex-row items-center gap-y-[50px] gap-x-[100px] max-lg:flex-col">
        <div
          className="w-full max-w-[500px] text-center"
        >
          <h2 className="font-poppins text-[48px] leading-[48px] font-medium text-secondary max-lg:text-[36px] max-lg:leading-[40px] max-md:text-[30px] max-md:leading-[36px]">
            {heading}
          </h2>
        </div>

        <div
          className="w-full max-w-[714px] space-y-4"
        >
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const isLast = index === items.length - 1;
            const itemId = `etf-faq-item-${index}`;

            return (
              <div key={item.q} className="w-full font-outfit">
                <h3>
                  <button
                    type="button"
                    id={`${itemId}-button`}
                    aria-controls={`${itemId}-panel`}
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`group flex w-full cursor-pointer items-center gap-[30px] pb-5 text-left text-[24px] leading-8 font-light text-secondary transition-colors max-lg:text-[20px] max-lg:leading-7 max-md:text-[18px] max-md:leading-7 ${
                      !isOpen && !isLast ? "border-b border-dashed border-primary-light" : ""
                    }`}
                  >
                    <span className="underline-offset-2 group-hover:underline">{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="shrink-0 text-secondary"
                    >
                      <ChevronDown className="size-4.5 stroke-[2.4]" aria-hidden="true" />
                    </motion.span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`${itemId}-panel`}
                      role="region"
                      aria-labelledby={`${itemId}-button`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                        opacity: { duration: 0.2, ease: "easeInOut" },
                      }}
                      className="overflow-hidden"
                    >
                      <div
                        className={`pb-5 ${isLast ? "pt-5" : "border-b border-dashed border-primary-light"}`}
                      >
                        <p className="max-w-[520px] text-[18px] leading-7 font-normal text-black max-md:text-[16px] max-md:leading-6">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
