import {Building2,Globe2,Anchor,Landmark,Percent,ShieldCheck,FileCheck2,Plane,ArrowUpRight,} from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import { LinkButton } from "@/components/ui/button";
import { FloatingGlobeLines } from "@/components/ui/floating-lines-background";
import { HeroTrustVerticalCarousel } from "@/components/ui/hero-trust-carousel";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
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

export function AboutSection({about,tag}:{about?:AboutData,tag?:AboutData}) {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Floating 3D globe wireframe background */}
      <FloatingGlobeLines color="#12394a" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
        <div className="flex flex-col justify-between gap-12">
          <ScrollReveal delay={0.05} direction="up">
            <SectionBadge label={about?.title ?? ""} theme="light" />

            <div className="mt-5 max-w-xs text-sm font-medium leading-6 text-neutral-700" dangerouslySetInnerHTML={{__html:about?.content ?? ""}} />

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
              items={about?.detail ?? []}
              intervalMs={3200}
            />
          </ScrollReveal>
        </div>

        <div>
          <ScrollReveal delay={0.1} direction="up">
            <h2 className="max-w-5xl font-serif text-5xl leading-[0.95] tracking-[-0.035em] text-neutral-950 sm:text-6xl lg:text-7xl font-semibold" dangerouslySetInnerHTML={{__html:tag?.title ?? ""}} />
          </ScrollReveal>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            {(tag?.content?.match(/<p\b[^>]*>[\s\S]*?<\/p>/gi) || [])
              .filter((paragraph) => paragraph.replace(/<[^>]*>/g, "").trim())
              .map((paragraph, index) => (
                <ScrollReveal
                  key={index}
                  delay={0.2 + index * 0.05}
                  direction="up"
                >
                  <div
                    className="text-base font-normal leading-7 text-neutral-800"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                </ScrollReveal>
              ))}
          </div>
<ScrollReveal delay={0.3} direction="up">
  <div className="mt-12 flex flex-wrap gap-2.5">
    {tag?.detail?.map((item, idx) => (
      <span
        key={idx}
        className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-3.5 py-2 text-sm font-semibold text-neutral-900 transition-colors hover:border-neutral-400 hover:bg-neutral-50"
      >
        <div
          className="shrink-0 text-[var(--color-gold)]"
          dangerouslySetInnerHTML={{ __html: item.icon ?? "" }}
        />
        <span>{item.title}</span>
      </span>
    ))}
  </div>
</ScrollReveal>
        </div>
      </div>
    </section>
  );
}
