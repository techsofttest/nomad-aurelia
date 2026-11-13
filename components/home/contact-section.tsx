"use client";
import Image from "next/image";
import { ArrowUpRight, Globe2 } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import { LinkButton } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLayoutData } from "@/context/LayoutContext";

export function ContactSection({cta}:{cta:any}) {

    const { layoutData } = useLayoutData();
    const contact = layoutData?.contact;
  return (
    <section id="contact" className="relative overflow-hidden bg-neutral-950">
      {/* Background Image across the entire section */}
      <Image
        src={cta?.image || "/banner/b4.jpg"}
        alt="Nomad Aurelia Contact"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark gradient overlay across the whole section for readability */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          {/* Left Column: Headline, Badge, Action Buttons */}
          <ScrollReveal delay={0.05} direction="up" className="max-w-2xl text-left">
            <SectionBadge
              label={cta?.title ?? ""}
              theme="dark"
              className="self-start"
            />

            <div className="mt-5 font-serif text-5xl font-semibold leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl" dangerouslySetInnerHTML={{__html:cta?.content ?? ""}} />

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <LinkButton
                href={`mailto:${contact?.email}`}
                variant="primary"
                size="lg"
                onDark
              >
                Email Nomad
                <ArrowUpRight className="h-4 w-4" />
              </LinkButton>

              <LinkButton
                href={`tel:${contact?.phone}`}
                variant="secondary"
                size="lg"
                onDark
              >
                Call us
              </LinkButton>
            </div>
          </ScrollReveal>

          {/* Right Column: Boxed card with 12px padding & clean white background */}
          <div className="flex justify-start lg:justify-end w-full">
            <ScrollReveal
              delay={0.15}
              direction="up"
              distance={24}
              className="w-full max-w-md"
            >
              <div className="relative w-full rounded-md bg-white p-[12px] text-neutral-950 overflow-hidden">
                {/* Inner card content with high contrast dark text */}
                <div className="p-6 sm:p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--color-cream)] text-neutral-950">
                    <Globe2 className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950">
                    Nomad Aurelia L.L.C-FZ
                  </h3>

                  <div className="mt-6 space-y-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                        Phone
                      </p>
                      <a
                        href={`tel:${contact?.phone}` }
                        className="mt-1 block text-base font-bold text-neutral-950 transition-colors hover:text-neutral-700"
                      >
                        {contact?.phone}
                      </a>
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                        Email
                      </p>
                      <a
                        href={`mailto:${contact?.email}`}
                        className="mt-1 block text-base font-bold text-neutral-950 transition-colors hover:text-neutral-700"
                      >{contact?.email}
                      </a>
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                        Office
                      </p>
                      <div className="mt-1 text-sm font-medium leading-relaxed text-neutral-900" dangerouslySetInnerHTML={{__html:contact?.address ?? ""}} />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
