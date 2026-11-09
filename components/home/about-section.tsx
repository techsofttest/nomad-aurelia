const tags = [
  "Mainland",
  "Free Zone",
  "Offshore",
  "Banking",
  "Tax",
  "Compliance",
  "PRO",
  "Relocation",
];

export function AboutSection() {
  return (
    <section id="about" className="bg-[var(--color-paper)] py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
        <div>
          <span className="text-sm font-semibold text-[var(--color-gold)]">
            About Nomad Aurelia
          </span>

          <p className="mt-5 max-w-xs text-sm leading-6 text-[var(--color-muted)]">
            A UAE-based business consultancy supporting entrepreneurs,
            investors and established businesses.
          </p>
        </div>

        <div>
          <h2 className="max-w-5xl font-serif text-5xl leading-[0.95] tracking-[-0.035em] text-[var(--color-ink)] sm:text-6xl lg:text-7xl">
            The right business structure should make your next move easier,
            not create another layer of complexity.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <p className="text-base leading-7 text-[var(--color-ink-soft)]">
              Nomad Aurelia helps clients navigate the UAE business
              environment with tailored corporate solutions across formation,
              licensing, banking, tax, compliance and administration.
            </p>

            <p className="text-base leading-7 text-[var(--color-muted)]">
              Our role is to simplify the decisions behind establishing and
              growing a business, while providing practical support through
              the details that follow.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {tags.map((item) => (
              <span
                key={item}
                className="rounded-full bg-[var(--color-cream)] px-4 py-2 text-sm font-semibold text-[var(--color-ink)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
