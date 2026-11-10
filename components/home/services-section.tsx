"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";

export const services = [
  {
    category: "Mainland",
    title: "Mainland Company Formation",
    description:
      "Assistance with company registration and licensing through the relevant UAE mainland authorities and necessary approvals.",
    image: "/services/Dubai Office Consultation with Skyline View.png",
  },
  {
    category: "Free Zone",
    title: "Free Zone Company Formation",
    description:
      "Business setup solutions across leading UAE free zones, including DMCC, DAFZA, Meydan, IFZA, SHAMS, RAKEZ, RAK ICC, JAFZA, ADGM, and DIFC, subject to jurisdictional eligibility.",
    image: "/services/High-Rise Business Strategy Session.png",
  },
  {
    category: "Offshore",
    title: "Offshore Company Formation",
    description:
      "Support for establishing offshore entities for suitable international business activities and asset-holding purposes.",
    image: "/services/Global Strategy in the Executive Office.png",
  },
  {
    category: "Branding & Identity",
    title: "Trade Name Reservation",
    description:
      "Guidance on selecting and reserving an appropriate business name in accordance with applicable regulations.",
    image: "/services/Design Planning at a Modern Workspace.png",
  },
  {
    category: "Licensing Scope",
    title: "Business Activity Selection",
    description:
      "Assistance in identifying suitable business activities based on your business objectives and licensing requirements.",
    image: "/services/Architectural Vision in the Skyline.png",
  },
  {
    category: "Approvals & Issuance",
    title: "Trade License Processing",
    description:
      "Support with the preparation and submission of documentation required for license issuance.",
    image: "/services/Business Partnership Contract Signing.png",
  },
  {
    category: "Corporate Structure",
    title: "Shareholder Documentation",
    description:
      "Assistance with shareholder details, incorporation documents, and related corporate paperwork.",
    image: "/services/Focused Professional at a City Office Desk.png",
  },
  {
    category: "Regulatory Care",
    title: "Corporate Compliance Support",
    description:
      "Guidance on applicable UAE company regulations, licensing obligations, and ongoing compliance requirements.",
    image: "/services/Focused Businessman Analyzing Dashboard Charts.png",
  },
];

export function ServicesSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const total = services.length;
  // On large screens, 4 cards are shown at a time
  const maxStartIndex = Math.max(0, total - 4);

  const nextSlide = useCallback(() => {
    setStartIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1));
  }, [maxStartIndex]);

  const prevSlide = useCallback(() => {
    setStartIndex((prev) => (prev <= 0 ? maxStartIndex : prev - 1));
  }, [maxStartIndex]);

  // Gentle auto-advance every 5.5s (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      id="services"
      className="relative flex min-h-[720px] sm:min-h-[820px] lg:min-h-[900px] flex-col justify-between overflow-hidden pb-12 pt-20 sm:pb-16 sm:pt-24 lg:pb-20 lg:pt-28 text-white bg-[#062638]"
    >
      {/* Background Image with high-contrast dark overlay */}
      <Image
        src="/banner/b3.png"
        alt="Nomad Aurelia Services Background"
        fill
        priority={false}
        className="object-cover object-center"
      />
      {/* Top-left black gradient overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/90 via-black/50 to-transparent"
      />
      {/* Top Header Area */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionBadge label="What we handle" theme="dark" />

            <h2 className="mt-5 font-serif text-4xl leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              The business essentials, connected under one roof.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous services"
                className="group flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-white text-black transition-all hover:border-white/40 hover:bg-white/90 active:scale-95"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next services"
                className="group flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-white text-black transition-all hover:border-white/40 hover:bg-white/90 active:scale-95"
              >
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Cards Carousel Area */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-16 sm:pt-20 lg:px-8">
        <div
          ref={containerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative overflow-hidden"
        >
          {/* Track sliding horizontally */}
          <motion.div
            className="flex gap-3 sm:gap-3.5 lg:gap-4"
            animate={{
              x: `calc(-${startIndex} * (100% / 4 + 1rem / 4))`,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 30,
            }}
            style={{
              width: "100%",
            }}
          >
            {services.map((service) => {
              return (
                <a
                  key={service.title}
                  href="#contact"
                  className="group relative flex min-w-[270px] sm:min-w-[300px] md:min-w-[calc(50%-0.5rem)] lg:min-w-[calc(25%-0.75rem)] flex-col cursor-pointer overflow-hidden rounded-md transition-transform duration-300"
                >
                  {/* Image container: 4:3 aspect ratio, unboxed/clean */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 270px, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Text below image with solid black background - fixed height for uniform card alignment */}
                  <div className="flex flex-1 flex-col justify-between text-left bg-black p-5 sm:p-6 transition-colors duration-300 group-hover:bg-[#0c0c0c] min-h-[195px] sm:min-h-[215px]">
                    <div>
                      {/* Small category / brand eyebrow */}
                      {/* <span className="text-xs font-bold uppercase tracking-wider text-white">
                        {service.category}
                      </span> */}

                      {/* Bold title - fixed height across 2 lines so descriptions align */}
                      <h3 className="mt-2 text-lg sm:text-xl font-bold tracking-tight text-white leading-snug line-clamp-2 h-[3.2rem] sm:h-[3.5rem]">
                        {service.title}
                      </h3>
                    </div>

                    {/* 2-line description */}
                    <p className="mt-2 line-clamp-2 text-sm font-medium leading-relaxed text-neutral-300">
                      {service.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile carousel indicator dots */}
        <div className="mt-10 flex justify-center gap-2 md:hidden">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setStartIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === startIndex
                ? "w-6 bg-white"
                : "w-2 bg-white/20"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
