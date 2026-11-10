import {
  Building2,
  Globe2,
  Anchor,
  Landmark,
  Percent,
  ShieldCheck,
  FileCheck2,
  Plane,
  ArrowUpRight,
} from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import { LinkButton } from "@/components/ui/button";
import { FloatingGlobeLines } from "@/components/ui/floating-lines-background";
import { HeroTrustVerticalCarousel } from "@/components/ui/hero-trust-carousel";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const trustItems = [
  {
    number: "01",
    title: "Professional guidance",
    text: "Committed to delivering expert, reliable corporate solutions",
  },
  {
    number: "02",
    title: "Efficient solutions",
    text: "Simplifying company formation, licensing, and compliance",
  },
  {
    number: "03",
    title: "Client-focused",
    text: "Building lasting partnerships at every stage of the business journey",
  },
  {
    number: "04",
    title: "Long-term success",
    text: "Enabling clients to focus on growth, innovation, and expansion",
  },
];

const tags = [
  { name: "Mainland", icon: Building2 },
  { name: "Free Zone", icon: Globe2 },
  { name: "Offshore", icon: Anchor },
  { name: "Banking", icon: Landmark },
  { name: "Tax", icon: Percent },
  { name: "Compliance", icon: ShieldCheck },
  { name: "PRO", icon: FileCheck2 },
  { name: "Relocation", icon: Plane },
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Floating 3D globe wireframe background */}
      <FloatingGlobeLines color="#12394a" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
        <div className="flex flex-col justify-between gap-12">
          <ScrollReveal delay={0.05} direction="up">
            <SectionBadge label="About Us" theme="light" />

            <p className="mt-5 max-w-xs text-sm font-medium leading-6 text-neutral-700">
              NOMAD AURELIA L.L.C-FZ is a UAE-based business consultancy dedicated to providing tailored corporate solutions.
            </p>

            <div className="mt-6">
              <LinkButton
                href="#approach"
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
              >
                Know more about us
                <ArrowUpRight className="h-4 w-4" />
              </LinkButton>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} direction="up" className="pt-4">
            <HeroTrustVerticalCarousel
              items={trustItems}
              intervalMs={3200}
            />
          </ScrollReveal>
        </div>

        <div>
          <ScrollReveal delay={0.1} direction="up">
            <h2 className="max-w-5xl font-serif text-5xl leading-[0.95] tracking-[-0.035em] text-neutral-950 sm:text-6xl lg:text-7xl font-semibold">
              Supporting entrepreneurs, startups, and established businesses in achieving their goals.
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <ScrollReveal delay={0.2} direction="up">
              <p className="text-base font-normal leading-7 text-neutral-800">
                NOMAD AURELIA L.L.C-FZ is specialized in business setup, company formation, licensing, and corporate support services, helping clients navigate the UAE’s dynamic business landscape with confidence and ease.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25} direction="up">
              <p className="text-base font-normal leading-7 text-neutral-700">
                At NOMAD AURELIA L.L.C-FZ, we are committed to delivering professional guidance, efficient solutions, and a client-focused approach, enabling our clients to focus on growth, innovation, and long-term success.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3} direction="up">
            <div className="mt-12 flex flex-wrap gap-2.5">
              {tags.map((item) => {
                const Icon = item.icon;
                return (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-3.5 py-2 text-sm font-semibold text-neutral-900 transition-colors hover:border-neutral-400 hover:bg-neutral-50"
                  >
                    <Icon className="h-4 w-4 text-[var(--color-gold)] shrink-0" />
                    <span>{item.name}</span>
                  </span>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
