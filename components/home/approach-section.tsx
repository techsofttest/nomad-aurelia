import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand",
    text: "We start with your objectives, activities, ownership and plans.",
  },
  {
    number: "02",
    title: "Structure",
    text: "We identify the practical route through the available UAE options.",
  },
  {
    number: "03",
    title: "Establish",
    text: "We coordinate documentation, licensing and formation requirements.",
  },
  {
    number: "04",
    title: "Activate",
    text: "We support banking, tax, visas and the operational details.",
  },
];

export function ApproachSection() {
  return (
    <section id="approach" className="bg-[var(--color-cream)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <span className="text-sm font-semibold text-[var(--color-gold)]">
              A clearer journey
            </span>

            <h2 className="mt-5 max-w-xl font-serif text-5xl leading-[0.94] tracking-[-0.035em] text-[var(--color-ink)] sm:text-6xl">
              From the first question to a business that is ready to move.
            </h2>

            <p className="mt-7 max-w-md text-base leading-7 text-[var(--color-muted)]">
              We coordinate the important pieces so you can spend less time
              navigating processes and more time building the business.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl bg-[var(--color-paper)] p-7 transition hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-4xl text-[var(--color-gold)]">
                    {step.number}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-[var(--color-muted)]" />
                </div>

                <h3 className="mt-12 text-lg font-semibold text-[var(--color-ink)]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
