"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export interface HeroTrustItem {
  number: string;
  title: string;
  text: string;
}

interface HeroTrustVerticalCarouselProps {
  items: HeroTrustItem[];
  intervalMs?: number;
}

export function HeroTrustVerticalCarousel({
  items,
  intervalMs = 3200,
}: HeroTrustVerticalCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [items.length, intervalMs]);

  return (
    <div className="relative flex flex-col justify-end text-left max-w-md">
      <div className="flex flex-col gap-3">
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={item.number}
              onClick={() => setActiveIndex(index)}
              layout
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0.4,
                scale: isActive ? 1 : 0.92,
                x: isActive ? 0 : -4,
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`flex cursor-pointer items-start gap-3 origin-left transition-colors duration-300 ${
                isActive
                  ? "text-neutral-900"
                  : "text-neutral-400 hover:text-neutral-600"
              }`}
            >
              {/* Active Indicator Bar - Deep Teal */}
              <motion.span
                animate={{
                  height: isActive ? 30 : 10,
                  opacity: isActive ? 1 : 0.25,
                  backgroundColor: isActive ? "#12394a" : "#cbd5e1",
                }}
                transition={{ duration: 0.4 }}
                className="w-1 rounded-full shrink-0 mt-1.5"
              />

              {/* Text content */}
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`font-mono text-sm sm:text-base font-bold transition-colors duration-300 ${
                      isActive ? "text-[#12394a]" : "text-neutral-400"
                    }`}
                  >
                    {item.number}
                  </span>
                  <span
                    className={`tracking-tight transition-all duration-300 ${
                      isActive
                        ? "text-base sm:text-lg font-bold text-neutral-900"
                        : "text-sm sm:text-base font-semibold text-neutral-500"
                    }`}
                  >
                    {item.title}
                  </span>
                </div>

                {isActive && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-1 text-sm leading-relaxed text-neutral-700 line-clamp-2 max-w-[320px]"
                  >
                    {item.text}
                  </motion.p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
