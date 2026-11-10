import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import { LinkButton } from "@/components/ui/button";
import { HeroStatsVerticalCarousel } from "@/components/ui/hero-stats-carousel";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const stats = [
  {
    number: "01",
    label: "Tailored business structures",
  },
  {
    number: "05",
    label: "Connected service areas",
  },
  {
    number: "360°",
    label: "Support beyond setup",
  },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-[640px] flex-col justify-between overflow-hidden pt-28 sm:min-h-[720px] sm:pt-32 lg:aspect-[16/12] lg:min-h-[820px] lg:pt-40">
      {/* Background Image: Desert Dusk Conversation */}
      <Image
        src="/hero/Desert Dusk Conversation3.png"
        alt="Desert Dusk Conversation background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay covering the whole image for readability */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/85 via-black/5 to-transparent"
      />

      {/* Centered Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white lg:px-8">
        {/* Eyebrow badge */}
        <ScrollReveal delay={0.05} direction="down">
          <SectionBadge
            label="Corporate solutions for the UAE"
            theme="dark"
            className="mb-6 justify-center"
          />
        </ScrollReveal>

        {/* Headline with business owner profile pictures inline */}
        <ScrollReveal delay={0.15} direction="up" distance={30}>
          <h1 className="mx-auto max-w-4xl font-bold font-serif text-5xl uppercase leading-[1.05] tracking-[-0.035em] text-white drop-shadow-md sm:text-5xl md:text-6xl lg:text-[4rem] lg:leading-[1.02]">
            Build your business{" "}
            {/* <span className="mx-1.5 my-1 inline-flex items-center align-middle">
              <span className="flex -space-x-3 overflow-hidden rounded-full border-2 border-white/60 bg-white/20 p-0.5 backdrop-blur-sm">
                <Image
                  src="/clients/l1.png"
                  alt="Business Founder"
                  width={40}
                  height={40}
                  className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-white/40 bg-white sm:h-10 sm:w-10"
                />
                <Image
                  src="/clients/l2.png"
                  alt="Business Owner"
                  width={40}
                  height={40}
                  className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-white/40 bg-white sm:h-10 sm:w-10"
                />
                <Image
                  src="/clients/l3.png"
                  alt="Entrepreneur"
                  width={40}
                  height={40}
                  className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-white/40 bg-white sm:h-10 sm:w-10"
                />
              </span>
            </span>{" "} */}
            with clarity, confidence and a partner who stays.
          </h1>
        </ScrollReveal>

        {/* CTA Buttons in White */}
        <ScrollReveal delay={0.25} direction="up" distance={20}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <LinkButton
              href="#contact"
              variant="primary"
              size="lg"
              onDark
              className="w-full sm:w-auto"
            >
              Request a consultation
              <ArrowUpRight className="h-4 w-4" />
            </LinkButton>

            <LinkButton
              href="#services"
              variant="secondary"
              size="lg"
              onDark
              className="w-full sm:w-auto"
            >
              Explore our services
              <ArrowDown className="h-4 w-4" />
            </LinkButton>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom Area: Stats Carousel on bottom-left, Trust Carousel on bottom-right */}
      <div className="relative z-10 w-full px-6 pb-8 pt-4 sm:pb-10 lg:px-8">
        <ScrollReveal delay={0.35} direction="up" distance={20}>
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <HeroStatsVerticalCarousel items={stats} intervalMs={2800} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
