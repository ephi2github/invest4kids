"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Quote } from "lucide-react";

type Testimonial = {
  name: string;
  date: string;
  text: string;
};

type EtfTestimonialsCarouselSectionProps = {
  testimonials: Testimonial[];
};

const AUTOPLAY_MS = 3000;

function wrapIndex(index: number, length: number) {
  if (length === 0) return 0;
  return ((index % length) + length) % length;
}

export default function EtfTestimonialsCarouselSection({
  testimonials,
}: EtfTestimonialsCarouselSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [pendingDelta, setPendingDelta] = useState<1 | -1 | null>(null);
  const [liftPhase, setLiftPhase] = useState(false);
  const [liftBaseIndex, setLiftBaseIndex] = useState(0);
  const controls = useAnimationControls();
  const activeIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const visibleOffsets = useMemo(
    () => (isMobile ? [-1, 0, 1] : [-2, -1, 0, 1, 2]),
    [isMobile],
  );

  const stepX = isMobile ? 352 : 484;

  const slide = useCallback(
    async (delta: number) => {
      if (isAnimatingRef.current || testimonials.length < 2) {
        return;
      }

      isAnimatingRef.current = true;
      setIsAnimating(true);
      const direction = delta > 0 ? 1 : -1;
      setPendingDelta(direction);
      setLiftBaseIndex(activeIndexRef.current);

      // Phase 1: raise the incoming card before horizontal movement.
      setLiftPhase(true);
      await new Promise<void>((resolve) => {
        window.setTimeout(resolve, isMobile ? 150 : 180);
      });

      // Phase 2: slide the whole strip.
      const travelDistance = direction > 0 ? -stepX : stepX;
      await controls.start({
        x: travelDistance,
        transition: {
          duration: isMobile ? 0.4 : 0.46,
          ease: [0.22, 1, 0.36, 1],
        },
      });

      const nextIndex = wrapIndex(activeIndexRef.current + delta, testimonials.length);
      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
      controls.set({ x: 0 });

      setLiftPhase(false);
      setPendingDelta(null);
      isAnimatingRef.current = false;
      setIsAnimating(false);
    },
    [controls, isMobile, stepX, testimonials.length],
  );

  useEffect(() => {
    if (isPaused || testimonials.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      void slide(1);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, slide, testimonials.length]);

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section id="rezensionen" className="overflow-hidden bg-white py-[70px] md:py-[124px]">
      <div className="mx-auto max-w-[1540px]">
        <h2 className="mx-auto max-w-[720px] pb-5 text-center font-outfit text-[30px] font-medium leading-[36px] text-secondary md:text-[48px] md:leading-[48px]">
          Das sagen Eltern und Großeltern über Invest4Kids
        </h2>

        <div
          className="relative mt-[20px] h-[314px] md:h-[430px] w-full md:mt-0 md:h-[500px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="pointer-events-none absolute left-1/2 top-[224px] hidden h-[150px] w-[360px] -translate-x-1/2 rounded-full bg-[#06B4DF33] blur-[24px] md:block" />

          <motion.div initial={false} animate={controls} className="absolute inset-0">
            {visibleOffsets.map((offset) => {
              const virtualPosition = activeIndex + offset;
              const testimonialIndex = wrapIndex(activeIndex + offset, testimonials.length);
              const testimonial = testimonials[testimonialIndex];
              const isLiftContext =
                liftPhase && pendingDelta !== null && activeIndex === liftBaseIndex;
              const isIncoming = isLiftContext && offset === pendingDelta;
              const isOutgoing = isLiftContext && offset === 0;
              const isActive = (offset === 0 && !isOutgoing) || isIncoming;
              const layerClass = isActive ? "z-30" : Math.abs(offset) === 1 ? "z-20" : "z-10";

              return (
                <motion.div
                  key={virtualPosition}
                  className={`absolute left-1/2 top-0 -translate-x-1/2 ${layerClass}`}
                  style={{ x: offset * stepX }}
                  aria-hidden={!isActive}
                >
                  <article
                    className={`w-[310px] rounded-[20px] bg-white p-0 text-center font-outfit shadow-none md:w-[410px] md:px-5 md:py-[30px] ${
                      isActive ? "scale-100" : "translate-y-[60px] scale-90"
                    } transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`}
                  >
                    <div className="mx-auto mb-[14px] flex h-[55px] w-[55px] items-center justify-center rounded-full bg-[#06B47B1A]">
                      <Quote
                        aria-hidden="true"
                        className="h-[25px] w-[25px] stroke-[2.4] text-[#06B47B]"
                      />
                    </div>

                    <p className="pb-[10px] text-[14px] md:text-[16px] leading-[24px] text-black">
                      {testimonial.date}
                    </p>

                    <div className="mx-auto mb-[10px] h-[2px] w-4 bg-[#06B47B]" />

                    <p className="pb-5 text-[16px] md:text-[24px] font-light leading-[32px] text-secondary">
                      {testimonial.name}
                    </p>

                    <p className="text-[14px] md:text-[16px] leading-[20px] text-black md:leading-[24px]">
                      {testimonial.text}
                    </p>
                  </article>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div className="relative z-50 md:-translate-y-[80px] flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => void slide(-1)}
            className="pointer-events-auto inline-flex h-[20px] w-[100px] cursor-pointer items-center justify-center text-black transition-colors duration-200 hover:text-accent-hover"
            aria-label="Vorherige Bewertung"
            aria-disabled={isAnimating}
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="20"
              viewBox="0 0 100 20"
              fill="none"
              className="h-[14px] w-[72px] md:h-[20px] md:w-[100px]"
            >
              <path d="M99 10H10" stroke="black" strokeWidth="2" />
              <path d="M18 15L8 10L18 5" stroke="black" strokeWidth="2" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => void slide(1)}
            className="pointer-events-auto inline-flex h-[20px] w-[100px] cursor-pointer items-center justify-center text-black transition-colors duration-200 hover:text-accent-hover"
            aria-label="Nächste Bewertung"
            aria-disabled={isAnimating}
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="20"
              viewBox="0 0 100 20"
              fill="none"
              className="h-[14px] w-[72px] md:h-[20px] md:w-[100px]"
            >
              <path d="M1 10H90" stroke="black" strokeWidth="2" />
              <path d="M82 5L92 10L82 15" stroke="black" strokeWidth="2" />
            </svg>
          </button>
        </div>

        <div className="pt-12.5 md:pt-0 md:-translate-y-[30px] flex items-center justify-center gap-[28px] md:gap-[50px]">
          <img
            src="https://invest4kids.de/wp-content/uploads/2024/10/Container.svg"
            alt="Trustpilot"
            width={120}
            height={60}
            className="h-auto w-[120px]"
            loading="lazy"
          />
          <img
            src="https://invest4kids.de/wp-content/uploads/2024/11/goggle.png"
            alt="Google Bewertung"
            width={120}
            height={61}
            className="h-auto w-[120px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
