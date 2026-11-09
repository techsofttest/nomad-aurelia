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
        <div className="max-w-4xl">
          <span className="text-sm font-semibold text-[var(--color-ink-soft)]">
            Why clients choose Nomad
          </span>

          <h2 className="mt-5 font-serif text-5xl leading-[0.94] tracking-[-0.035em] text-[var(--color-ink)] sm:text-6xl lg:text-7xl">
            Trust is built by making complicated decisions feel clear.
          </h2>
        </div>

        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((item) => (
            <div
              key={item.number}
              className="rounded-2xl bg-[var(--color-paper)] p-7"
            >
              <span className="font-serif text-4xl text-[var(--color-gold)]">
                {item.number}
              </span>

              <h3 className="mt-12 text-lg font-semibold text-[var(--color-ink)]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
