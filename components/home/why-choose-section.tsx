import { SectionBadge } from "@/components/ui/section-badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const trustPoints = [
  {
    number: "01",
    title: "Tailored structures",
    text: "Your business model, ownership structure and growth plans shape the route we recommend.",
  },
  {
    number: "02",
    title: "One coordinated partner",
    text: "Formation, banking, tax, compliance and administrative support are connected instead of scattered.",
  },
  {
    number: "03",
    title: "Clear communication",
    text: "We explain what needs to happen, why it matters and what comes next.",
  },
  {
    number: "04",
    title: "Long-term support",
    text: "Our relationship continues beyond incorporation as your business grows and changes.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="bg-[var(--color-gold-pale)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal delay={0.05} direction="up" className="max-w-4xl">
          <SectionBadge label="Why clients choose Nomad" theme="light" />

          <h2 className="mt-5 font-serif text-5xl font-semibold leading-[0.94] tracking-[-0.035em] text-neutral-950 sm:text-6xl lg:text-7xl">
            Trust is built by making complicated decisions feel clear.
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((item, idx) => (
            <ScrollReveal
              key={item.number}
              delay={0.1 + idx * 0.08}
              direction="up"
              distance={20}
            >
              <div className="h-full rounded-md bg-white p-7 transition-colors hover:bg-neutral-50 flex flex-col justify-between">
                <div>
                  <span className="font-sans text-4xl font-bold tracking-tight text-[#b87d3b]">
                    {item.number}
                  </span>

                  <h3 className="mt-10 text-xl font-bold tracking-tight text-neutral-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-800">
                    {item.text}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
