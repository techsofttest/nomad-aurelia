import {
  Compass,
  Layers,
  Building2,
  Rocket,
  ArrowUpRight,
} from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const steps = [
  {
    title: "Understand",
    text: "We start with your objectives, activities, ownership and plans.",
    icon: Compass,
  },
  {
    title: "Structure",
    text: "We identify the practical route through the available UAE options.",
    icon: Layers,
  },
  {
    title: "Establish",
    text: "We coordinate documentation, licensing and formation requirements.",
    icon: Building2,
  },
  {
    title: "Activate",
    text: "We support banking, tax, visas and the operational details.",
    icon: Rocket,
  },
];

export function ApproachSection() {
  return (
    <section id="approach" className="bg-[var(--color-cream)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top Centered Header */}
        <ScrollReveal delay={0.05} direction="up" className="mx-auto max-w-3xl text-center">
          <SectionBadge
            label="A clearer journey"
            theme="light"
            className="justify-center"
          />

          <h2 className="mt-5 font-serif text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-neutral-950 sm:text-5xl lg:text-6xl">
            From the first question to a business that is ready to move.
          </h2>
        </ScrollReveal>

        {/* 4 Cards Aligned Below Header in a Single Row on Large Screens */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => {
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
                        <Icon className="h-9 w-9 stroke-[1.85]" />
                      </div>
                    </div>

                    <h3 className="mt-7 text-xl font-bold tracking-tight text-neutral-950">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-base font-medium leading-relaxed text-neutral-800">
                      {step.text}
                    </p>
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
