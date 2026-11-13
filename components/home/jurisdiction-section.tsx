import Image from "next/image";
import { ArrowUpRight, Compass } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import { LinkButton } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface AboutData{
    title: string;
    content: string;
    image:string;
    detail:{
      title:string;
      icon?:string;
      description:string;
   }[];
}

export function JurisdictionSection({js}:{js?:AboutData}) {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top Centered Header */}
        <ScrollReveal delay={0.05} direction="up" className="mx-auto max-w-3xl text-center">
          <SectionBadge
            label={js?.title ?? ""}
            theme="light"
            className="justify-center"
          />

          <div className="[&_h2]:mt-5 [&_h2]:font-serif [&_h2]:text-4xl [&_h2]:leading-[1.02] [&_h2]:tracking-[-0.035em] [&_h2]:text-neutral-950 sm:[&_h2]:text-5xl lg:[&_h2]:text-6xl [&_h2]:font-semibold [&_p]:mx-auto [&_p]:mt-6 [&_p]:max-w-xl [&_p]:text-base [&_p]:font-medium [&_p]:leading-7 [&_p]:text-neutral-800" dangerouslySetInnerHTML={{__html:js?.content ?? ''}} />
        </ScrollReveal>

        {/* Bento Grid Layout - rounded-md, no shadows, no borders */}
        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Bento Item 1: Large Featured Visual Image Box (Spans 5 cols on lg) */}
          <ScrollReveal
            delay={0.1}
            direction="up"
            distance={24}
            className="relative min-h-[340px] overflow-hidden rounded-md bg-[var(--color-cream)] lg:col-span-5 lg:min-h-full"
          >
            <Image
              src={ js?.image ||  ""}
              alt="Dubai business district"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
            />
            <div className="absolute left-5 top-5 rounded-md bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-[var(--color-ink)] backdrop-blur-sm">
              Mainland · Free Zone · Offshore
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-5 lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">

              <ScrollReveal
                delay={0.15}
                direction="up"
                distance={20}
                className="group flex flex-col justify-between rounded-md bg-[var(--color-cream)] p-6 transition-colors hover:bg-[var(--color-sand)] sm:col-span-2"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-2xl font-bold tracking-tight text-[#b87d3b]">
                      01
                    </span>
                    <h3 className="text-lg font-bold text-neutral-950">
                      {js?.detail?.[0].title}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-neutral-700 transition-colors group-hover:text-neutral-950" />
                </div>
                <div className="mt-3 text-sm font-medium leading-6 text-neutral-800" dangerouslySetInnerHTML={{__html:js?.detail?.[0].description ?? ""}} />
              </ScrollReveal>

              {/* Free Zone Card */}
              <ScrollReveal
                delay={0.2}
                direction="up"
                distance={20}
                className="group flex flex-col justify-between rounded-md bg-[var(--color-cream)] p-6 transition-colors hover:bg-[var(--color-sand)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-2xl font-bold tracking-tight text-[#b87d3b]">
                      02
                    </span>
                    <h3 className="text-lg font-bold text-neutral-950">
                      {js?.detail?.[1].title}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-neutral-700 transition-colors group-hover:text-neutral-950" />
                </div>
                <div className="mt-3 text-sm font-medium leading-6 text-neutral-800" dangerouslySetInnerHTML={{__html:js?.detail?.[1].description ?? ""}} />
              
              </ScrollReveal>

              {/* Offshore Card */}
              <ScrollReveal
                delay={0.25}
                direction="up"
                distance={20}
                className="group flex flex-col justify-between rounded-md bg-[var(--color-cream)] p-6 transition-colors hover:bg-[var(--color-sand)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-2xl font-bold tracking-tight text-[#b87d3b]">
                      03
                    </span>
                    <h3 className="text-lg font-bold text-neutral-950">
                      {js?.detail?.[2].title}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-neutral-700 transition-colors group-hover:text-neutral-950" />
                </div>
                <div className="mt-3 text-sm font-medium leading-6 text-neutral-800" dangerouslySetInnerHTML={{__html:js?.detail?.[1].description ?? ""}} />
              
              </ScrollReveal>
            </div>

            {/* CTA Bento Bar */}
            <ScrollReveal
              delay={0.3}
              direction="up"
              distance={20}
              className="flex flex-col justify-between gap-6 rounded-md bg-[var(--color-ink)] p-6 sm:p-7 text-white"
            >
              <div>
                <p className="text-xl font-medium leading-snug text-white">
                 {js?.detail?.[3].title}
                </p>
                <div className="text-xs font-normal text-white/90" dangerouslySetInnerHTML={{__html:js?.detail?.[3].description ?? ""}} />
              </div>
              <div className="flex items-end justify-between w-full">
                <Compass className="h-8 w-8 text-white/50 stroke-[1.25]" />
                <LinkButton
                  href="/contact#contact-form"
                  variant="primary"
                  size="md"
                  onDark
                  className="shrink-0"
                >
                  Talk through your options
                  <ArrowUpRight className="h-4 w-4" />
                </LinkButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
