import {
  Building2,
  Globe2,
  Anchor,
  Landmark,
  Percent,
  ShieldCheck,
  FileCheck2,
  Plane,
} from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import { FloatingGlobeLines } from "@/components/ui/floating-lines-background";
import { HeroTrustVerticalCarousel } from "@/components/ui/hero-trust-carousel";

const trustItems = [
  {
    number: "01",
    title: "Founder-first",
    text: "Guidance designed around your objectives",
  },
  {
    number: "02",
    title: "Connected support",
    text: "Formation to ongoing corporate care",
  },
  {
    number: "03",
    title: "UAE expertise",
    text: "Practical knowledge of the local landscape",
  },
  {
    number: "04",
    title: "Clear communication",
    text: "Straightforward answers and next steps",
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
          <div>
            <SectionBadge label="About Nomad Aurelia" theme="light" />

            <p className="mt-5 max-w-xs text-sm font-medium leading-6 text-neutral-700">
              A UAE-based business consultancy supporting entrepreneurs,
              investors and established businesses.
            </p>
          </div>

          <div className="pt-4">
            <HeroTrustVerticalCarousel
              items={trustItems}
              intervalMs={3200}
            />
          </div>
        </div>

        <div>
          <h2 className="max-w-5xl font-serif text-5xl leading-[0.95] tracking-[-0.035em] text-neutral-950 sm:text-6xl lg:text-7xl font-semibold">
            The right business structure should make your next move easier,
            not create another layer of complexity.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <p className="text-base font-normal leading-7 text-neutral-800">
              Nomad Aurelia helps clients navigate the UAE business
              environment with tailored corporate solutions across formation,
              licensing, banking, tax, compliance and administration.
            </p>

            <p className="text-base font-normal leading-7 text-neutral-700">
              Our role is to simplify the decisions behind establishing and
              growing a business, while providing practical support through
              the details that follow.
            </p>
          </div>

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
        </div>
      </div>
    </section>
  );
}
