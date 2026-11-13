"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export interface HeroStatItem {
  title: string;
  option: string;
}

interface HeroStatsVerticalCarouselProps {
  items: HeroStatItem[];
  intervalMs?: number;
}

export function HeroStatsVerticalCarousel({
  items,
  intervalMs = 2800,
}: HeroStatsVerticalCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [items.length, intervalMs]);

  return (
    <div className="relative flex flex-col justify-center text-left">
      {/* Vertical carousel items */}
      <div className="flex flex-col gap-2.5">
            {items.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  layout
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0.35,
                    scale: isActive ? 1 : 0.88,
                    x: isActive ? 0 : -4,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1], // ease-out-cubic
                  }}
                  className={`flex cursor-pointer items-center gap-3 origin-left transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/40 hover:text-white/60"
                  }`}
                >
                  {/* Active highlight indicator bar */}
                  <motion.span
                    animate={{
                      height: isActive ? 24 : 8,
                      opacity: isActive ? 1 : 0.25,
                      backgroundColor: isActive ? "#E8B077" : "#FFFFFF",
                    }}
                    transition={{ duration: 0.4 }}
                    className="w-1 rounded-full shrink-0"
                  />

                  {/* Number */}
                  <span
                    className={`font-sans font-bold tracking-tight transition-all duration-300 min-w-[48px] ${
                      isActive
                        ? "text-2xl sm:text-3xl text-white"
                        : "text-lg sm:text-xl text-white/50"
                    }`}
                  >
                    {item.title}
                  </span>

                  {/* Label */}
                  <span
                    className={`font-medium transition-all duration-300 ${
                      isActive
                        ? "text-sm sm:text-base text-white font-semibold"
                        : "text-xs sm:text-sm text-white/40"
                    }`}
                  >
                    {item.option}
                  </span>
                </motion.div>
              );
            })}
      </div>
    </div>
  );
}

