import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import { LinkButton } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function ConsultationSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-md min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex flex-col justify-between p-8 sm:p-12 lg:p-16 text-white">
          {/* Background Image: public/banner/b2.png */}
          <Image
            src="/banner/b2.png"
            alt="Consultation Background"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />

          {/* Dark gradient overlay for contrast and text legibility */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/75 lg:bg-gradient-to-br lg:from-black/85 lg:via-black/10 lg:to-black/80"
          />

          {/* Top Left: Badge & Main Title */}
          <ScrollReveal delay={0.05} direction="up" className="relative z-10 max-w-2xl text-left">
            <SectionBadge
              label="Before you choose a structure"
              theme="dark"
              className="self-start"
            />

            <h2 className="mt-5 font-serif text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Your business is different. Your setup should be too.
            </h2>
          </ScrollReveal>

          {/* Bottom Right: Description & Action Buttons */}
          <ScrollReveal
            delay={0.15}
            direction="up"
            className="relative z-10 mt-12 flex flex-col items-start self-start lg:mt-0 lg:max-w-xl lg:items-end lg:self-end lg:text-right"
          >
            <p className="max-w-xl text-base font-normal leading-7 text-neutral-200">
              Tell us what you are building, where you are coming from and
              where you want to go. We will help you understand the next
              practical steps.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <LinkButton
                href="#contact"
                variant="primary"
                size="lg"
                onDark
              >
                Request a consultation
                <ArrowUpRight className="h-4 w-4" />
              </LinkButton>

              <LinkButton
                href="tel:+971508332542"
                variant="secondary"
                size="lg"
                onDark
              >
                Call +971 50 833 2542
              </LinkButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
