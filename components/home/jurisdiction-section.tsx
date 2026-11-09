import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import { LinkButton } from "@/components/ui/button";

const jurisdictions = [
  {
    title: "Mainland",
    text: "For businesses that need a flexible operating presence across the UAE.",
  },
  {
    title: "Free Zone",
    text: "For founders looking for a specialised jurisdiction aligned with their activity.",
  },
  {
    title: "Offshore",
    text: "For suitable international business and asset-holding requirements.",
  },
];

export function JurisdictionSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] bg-[var(--color-gold-pale)]">
            <Image
              src="/images/dubai-office.jpg"
              alt="Dubai business district"
              width={1000}
              height={1000}
              className="h-[620px] w-full object-cover"
            />

            <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[var(--color-ink)]">
              Mainland · Free Zone · Offshore
            </div>
          </div>

          <div>
            <SectionBadge label="Finding the right route" theme="light" />

            <h2 className="mt-5 max-w-2xl font-serif text-5xl leading-[0.94] tracking-[-0.035em] sm:text-6xl">
              There is no single best way to establish a business in the UAE.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-[var(--color-muted)]">
              The right structure depends on what you do, where you operate,
              who owns the business and where you want to take it next.
            </p>

            <div className="mt-10 space-y-3">
              {jurisdictions.map((item, index) => (
                <div
                  key={item.title}
                  className="group rounded-2xl bg-[var(--color-cream)] p-5 transition hover:bg-[var(--color-gold-pale)]"
                >
                  <div className="flex items-start gap-5">
                    <span className="font-serif text-2xl text-[var(--color-gold)]">
                      0{index + 1}
                    </span>

                    <div className="flex-1">
                      <h3 className="text-base font-semibold">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                        {item.text}
                      </p>
                    </div>

                    <ArrowUpRight className="h-5 w-5 text-[var(--color-muted)] transition group-hover:text-[var(--color-ink)]" />
                  </div>
                </div>
              ))}
            </div>

            <LinkButton
              href="#contact"
              variant="primary"
              size="lg"
              className="mt-8"
            >
              Talk through your options
              <ArrowUpRight className="h-4 w-4" />
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
