import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import { LinkButton } from "@/components/ui/button";

export function ConsultationSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-[var(--color-ink)]">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative min-h-[520px]">
              <Image
                src="/images/founder.jpg"
                alt="Business founder in a modern office"
                fill
                className="object-cover"
              />

              <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-[var(--color-gold)] p-5">
                <p className="text-sm font-semibold text-[var(--color-ink)]">
                  Tailored guidance
                </p>
                <p className="mt-1 font-serif text-2xl leading-none text-[var(--color-ink)]">
                  Start with the questions that matter.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <SectionBadge
                label="Before you choose a structure"
                theme="dark"
                className="self-start"
              />

              <h2 className="mt-5 max-w-2xl font-serif text-5xl leading-[0.94] tracking-[-0.035em] text-white sm:text-6xl">
                Your business is different. Your setup should be too.
              </h2>

              <p className="mt-7 max-w-xl text-base leading-7 text-white/70">
                Tell us what you are building, where you are coming from and
                where you want to go. We will help you understand the next
                practical steps.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
