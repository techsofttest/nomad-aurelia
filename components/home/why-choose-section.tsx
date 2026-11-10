import { SectionBadge } from "@/components/ui/section-badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const trustPoints = [
  {
    number: "01",
    title: "Tailored solutions",
    text: "Dedicated to providing customized corporate setups that support your specific business goals.",
  },
  {
    number: "02",
    title: "Professional guidance",
    text: "Helping clients navigate the UAE’s dynamic business landscape with confidence and ease.",
  },
  {
    number: "03",
    title: "End-to-end support",
    text: "From company formation and licensing to banking, tax, compliance, and ongoing corporate administration.",
  },
  {
    number: "04",
    title: "Lasting partnerships",
    text: "Delivering reliable support at every stage, enabling you to focus on growth and long-term success.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="bg-[var(--color-gold-pale)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal delay={0.05} direction="up" className="max-w-4xl">
          <SectionBadge label="Why Choose Nomad Aurelia" theme="light" />

          <h2 className="mt-5 font-serif text-5xl font-semibold leading-[0.94] tracking-[-0.035em] text-neutral-950 sm:text-6xl lg:text-7xl">
            Committed to professional guidance, efficient solutions, and a client-focused approach.
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
