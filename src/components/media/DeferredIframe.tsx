"use client";

import { useState } from "react";

type DeferredIframeProps = {
  buttonLabel: string;
  description: string;
  src: string;
  title: string;
};

export default function DeferredIframe({
  buttonLabel,
  description,
  src,
  title,
}: DeferredIframeProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      <iframe
        title={title}
        src={src}
        className="h-[396px] w-full border-0"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    );
  }

  return (
    <div className="flex h-[396px] w-full flex-col items-center justify-center gap-5 rounded-[20px] bg-[#0E2D66] px-6 text-center">
      <p className="max-w-[360px] font-outfit text-[16px] leading-[1.35] text-white/95 md:text-[18px]">
        {description}
      </p>
      <button
        type="button"
        onClick={() => setIsLoaded(true)}
        className="inline-flex h-[50px] items-center justify-center rounded-full bg-[#F8BF3C] px-8 font-outfit text-[16px] font-medium leading-none text-[#2C3E50] transition-colors duration-300 hover:bg-[#FCB900] md:text-[18px]"
      >
        {buttonLabel}
      </button>
    </div>
  );
}
