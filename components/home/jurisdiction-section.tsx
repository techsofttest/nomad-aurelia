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
        {/* Top Centered Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge
            label="Finding the right route"
            theme="light"
            className="justify-center"
          />

          <h2 className="mt-5 font-serif text-4xl leading-[1.02] tracking-[-0.035em] text-neutral-950 sm:text-5xl lg:text-6xl font-semibold">
            There is no single best way to establish a business in the UAE.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base font-medium leading-7 text-neutral-800">
            The right structure depends on what you do, where you operate, who
            owns the business and where you want to take it next.
          </p>
        </div>

        {/* Bento Grid Layout - rounded-md, no shadows, no borders */}
        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Bento Item 1: Large Featured Visual Image Box (Spans 5 cols on lg) */}
          <div className="relative min-h-[340px] overflow-hidden rounded-md bg-[var(--color-cream)] lg:col-span-5 lg:min-h-full">
            <Image
              src="/jurisdiction-section/Executive Skyline Business Meeting.png"
              alt="Dubai business district"
              fill
              className="object-cover object-center"
            />
            {/* Soft badge overlay */}
            <div className="absolute left-5 top-5 rounded-md bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-[var(--color-ink)] backdrop-blur-sm">
              Mainland · Free Zone · Offshore
            </div>
          </div>

          {/* Bento Right Column (Spans 7 cols on lg): 3 Jurisdiction Cards + CTA Card */}
          <div className="flex flex-col gap-5 lg:col-span-7">
            {/* 3 Jurisdiction Cards in a structured layout */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {/* Mainland Card (spans 2 on sm for prominent display) */}
              <div className="group flex flex-col justify-between rounded-md bg-[var(--color-cream)] p-6 transition-colors hover:bg-[var(--color-sand)] sm:col-span-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-2xl font-bold tracking-tight text-[#b87d3b]">
                      01
                    </span>
                    <h3 className="text-lg font-bold text-neutral-950">
                      {jurisdictions[0].title}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-neutral-700 transition-colors group-hover:text-neutral-950" />
                </div>
                <p className="mt-3 text-sm font-medium leading-6 text-neutral-800">
                  {jurisdictions[0].text}
                </p>
              </div>

              {/* Free Zone Card */}
              <div className="group flex flex-col justify-between rounded-md bg-[var(--color-cream)] p-6 transition-colors hover:bg-[var(--color-sand)]">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-2xl font-bold tracking-tight text-[#b87d3b]">
                      02
                    </span>
                    <h3 className="text-lg font-bold text-neutral-950">
                      {jurisdictions[1].title}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-neutral-700 transition-colors group-hover:text-neutral-950" />
                </div>
                <p className="mt-3 text-sm font-medium leading-6 text-neutral-800">
                  {jurisdictions[1].text}
                </p>
              </div>

              {/* Offshore Card */}
              <div className="group flex flex-col justify-between rounded-md bg-[var(--color-cream)] p-6 transition-colors hover:bg-[var(--color-sand)]">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-2xl font-bold tracking-tight text-[#b87d3b]">
                      03
                    </span>
                    <h3 className="text-lg font-bold text-neutral-950">
                      {jurisdictions[2].title}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-neutral-700 transition-colors group-hover:text-neutral-950" />
                </div>
                <p className="mt-3 text-sm font-medium leading-6 text-neutral-800">
                  {jurisdictions[2].text}
                </p>
              </div>
            </div>

            {/* CTA Bento Bar */}
            <div className="flex flex-col items-start justify-between gap-4 rounded-md bg-[var(--color-ink)] p-6 text-white sm:flex-row sm:items-center">
              <div>
                <p className="font-serif text-xl font-medium leading-snug text-white">
                  Unsure which jurisdiction fits your business?
                </p>
                <p className="mt-1 text-xs font-normal text-white/90">
                  Our advisors will map your activity to the optimal structure.
                </p>
              </div>
              <LinkButton
                href="#contact"
                variant="primary"
                size="md"
                onDark
                className="shrink-0"
              >
                Talk through your options
                <ArrowUpRight className="h-4 w-4" />
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
