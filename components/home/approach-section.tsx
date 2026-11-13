import {
  Compass,
  Layers,
  Building2,
  Rocket,
  ArrowUpRight,
} from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
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
export function ApproachSection({appraoch}:{appraoch?:AboutData}) {
  return (
    <section id="approach" className="bg-[var(--color-cream)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top Centered Header */}
        <ScrollReveal delay={0.05} direction="up" className="mx-auto max-w-3xl text-center">
          <SectionBadge
            label={appraoch?.title || ""}
            theme="light"
            className="justify-center"
          />

          <div className="mt-5 font-serif text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-neutral-950 sm:text-5xl lg:text-6xl" dangerouslySetInnerHTML={{__html:appraoch?.content ?? ""}} />
        </ScrollReveal>

        {/* 4 Cards Aligned Below Header in a Single Row on Large Screens */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {appraoch?.detail.map((step, idx) => {
            const Icon = step.icon;

            return (
              <ScrollReveal
                key={step.title}
                delay={0.1 + idx * 0.08}
                direction="up"
                distance={20}
              >
                <div className="group relative flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
                  <div>
                    {/* Top Bar with Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-16 w-16 items-center justify-center rounded-md bg-white text-neutral-900 transition-colors group-hover:bg-neutral-950 group-hover:text-white">
                        <div className=" stroke-[1.85]" dangerouslySetInnerHTML={{__html:step.icon ?? ""}}/>
                      </div>
                    </div>

                    <h3 className="mt-7 text-xl font-bold tracking-tight text-neutral-950">
                      {step.title}
                    </h3>

                    <div className="mt-3 text-base font-medium leading-relaxed text-neutral-800"dangerouslySetInnerHTML={{__html:step.description ?? ""}}/>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
