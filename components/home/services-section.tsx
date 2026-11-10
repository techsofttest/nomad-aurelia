"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import { LinkButton } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const services = [
  {
    category: "Entity Setup",
    title: "Company Formation",
    description:
      "A tailored route through mainland, free zone and offshore business structures, licensing and documentation.",
    image: "/services/Dubai Office Consultation with Skyline View.png",
  },
  {
    category: "Financial Care",
    title: "Banking & Financial Solutions",
    description:
      "Strategic support for corporate and personal bank accounts, KYC clearance, digital banking, and international transactions.",
    image: "/services/High-Rise Business Strategy Session.png",
  },
  {
    category: "Fiscal Advisory",
    title: "Accounting & Tax Services",
    description:
      "Reliable corporate tax advisory, VAT registration, bookkeeping and structured audit compliance built for UAE regulations.",
    image: "/services/Global Strategy in the Executive Office.png",
  },
  {
    category: "Risk & Governance",
    title: "Corporate Compliance & Advisory",
    description:
      "Proactive guidance through regulatory frameworks, AML & UBO compliance, reporting obligations, and corporate governance.",
    image: "/services/Design Planning at a Modern Workspace.png",
  },
  {
    category: "Operational Care",
    title: "Concierge & PRO Services",
    description:
      "Dedicated PRO and visa services, document attestation, relocation support, and seamless administrative assistance.",
    image: "/services/Business Partnership Contract Signing.png",
  },
];

export function ServicesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
    dragFree: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="services"
      className="relative flex min-h-[720px] sm:min-h-[820px] lg:min-h-[900px] flex-col justify-between overflow-hidden pb-12 pt-20 sm:pb-16 sm:pt-24 lg:pb-20 lg:pt-28 text-white bg-[#062638]"
    >
      {/* Background Image with top-left black gradient overlay */}
      <Image
        src="/banner/b3.png"
        alt="Nomad Aurelia Services Background"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/90 via-black/50 to-transparent"
      />

      {/* Top Header Area */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <ScrollReveal delay={0.05} direction="up" className="max-w-2xl">
            <SectionBadge label="What we handle" theme="dark" />

            <h2 className="mt-5 font-serif text-4xl leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              The business essentials, connected under one roof.
            </h2>
          </ScrollReveal>

          {/* Navigation Controls */}
          <ScrollReveal delay={0.15} direction="up" className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                aria-label="Previous service"
                className={`group flex h-11 w-11 items-center justify-center rounded-md border transition-all active:scale-95 ${canScrollPrev
                  ? "border-white/20 bg-white text-black hover:bg-white/90"
                  : "border-white/10 bg-white/20 text-white/40 cursor-not-allowed"
                  }`}
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                disabled={!canScrollNext}
                aria-label="Next service"
                className={`group flex h-11 w-11 items-center justify-center rounded-md border transition-all active:scale-95 ${canScrollNext
                  ? "border-white/20 bg-white text-black hover:bg-white/90"
                  : "border-white/10 bg-white/20 text-white/40 cursor-not-allowed"
                  }`}
              >
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Embla Carousel Viewport */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-16 sm:pt-20 lg:px-8">
        <ScrollReveal delay={0.2} direction="up" distance={24}>
          <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
            <div className="flex gap-3 sm:gap-3.5 lg:gap-4">
              {services.map((service) => {
                return (
                  <div
                    key={service.title}
                    className="relative flex-none w-[280px] sm:w-[320px] md:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)] flex flex-col overflow-hidden rounded-md transition-transform duration-300"
                  >
                    {/* Image container: 4:3 aspect ratio */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 640px) 280px, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                      />
                    </div>

                    {/* Text below image with white background */}
                    <div className="flex flex-1 flex-col justify-between text-left bg-white p-5 sm:p-6 min-h-[220px] sm:min-h-[235px]">
                      <div>
                        {/* Bold title */}
                        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 leading-snug line-clamp-2 h-[3.2rem] sm:h-[3.5rem]">
                          {service.title}
                        </h3>

                        {/* 2-line description */}
                        <p className="mt-2 line-clamp-2 text-sm font-medium leading-relaxed text-neutral-600">
                          {service.description}
                        </p>
                      </div>

                      {/* View More Services / Scope action button */}
                      <div className="mt-4 pt-3 border-t border-neutral-100">
                        <LinkButton
                          href="#services"
                          variant="secondary"
                          size="sm"
                          className="w-full justify-between font-semibold border-neutral-800 bg-neutral-50 hover:bg-neutral-100 text-neutral-900 group/btn"
                        >
                          <span className="text-left text-xs">View service scope</span>
                          <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </LinkButton>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
