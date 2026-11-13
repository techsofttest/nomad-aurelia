"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import { LinkButton } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLayoutData } from "@/context/LayoutContext";
interface AboutData{
    title: string;
    content: string;
    image:string;
    detail:{
      title:string;
      option?:string;
      icon?:string;
      description:string;
   }[];
}
export function ConsultationSection({con}:{con?:AboutData}) {
  
    const { layoutData } = useLayoutData();
    const contact = layoutData?.contact;
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-md min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex flex-col justify-between p-8 sm:p-12 lg:p-16 text-white">
          {/* Background Image: public/banner/b2.png */}
          <Image
            src={con?.image ?? ""}
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
             {con?.title ?? ""}
            </h2>
          </ScrollReveal>

          {/* Bottom Right: Description & Action Buttons */}
          <ScrollReveal
            delay={0.15}
            direction="up"
            className="relative z-10 mt-12 flex flex-col items-start self-start lg:mt-0 lg:max-w-xl lg:items-end lg:self-end lg:text-right"
          >
            <div className="max-w-xl text-base font-normal leading-7 text-neutral-200" dangerouslySetInnerHTML={{__html:con?.content|| ""}} />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <LinkButton
                href="/contact#contact-form"
                variant="primary"
                size="lg"
                onDark
              >
                Request a consultation
                <ArrowUpRight className="h-4 w-4" />
              </LinkButton>

              <LinkButton
                href={`tel:${contact?.phone}`}
                variant="secondary"
                size="lg"
                onDark
              >
                Call {contact?.phone ?? ""}
              </LinkButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
