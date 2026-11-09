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

export function TrustStrip() {
  return (
    <section className="bg-[var(--color-ink)] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-6 py-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 lg:px-8">
        {trustItems.map((item) => (
          <div
            key={item.number}
            className="px-0 py-5 sm:px-6 sm:py-2 first:sm:pl-0 last:sm:pr-0"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-[var(--color-gold)]">
                {item.number}
              </span>
              <span className="text-sm font-semibold">{item.title}</span>
            </div>
            <p className="mt-2 max-w-xs text-sm leading-5 text-white/70">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
