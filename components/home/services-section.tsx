"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Banknote,
  Building2,
  Check,
  Landmark,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import { LinkButton } from "@/components/ui/button";

export const services = [
  {
    number: "01",
    title: "Company formation",
    shortTitle: "Build your foundation",
    description:
      "A tailored route through mainland, free zone and offshore structures, licensing and corporate documentation.",
    icon: Building2,
    image: "/images/company-formation.jpg",
    items: [
      "Mainland company formation",
      "Free zone company formation",
      "Offshore company formation",
      "Trade name reservation",
      "Business activity selection",
      "Trade license processing",
      "Shareholder documentation",
      "Corporate compliance support",
    ],
  },
  {
    number: "02",
    title: "Banking & financial solutions",
    shortTitle: "Move money with confidence",
    description:
      "Practical support for corporate and personal banking, KYC, digital banking and international payment requirements.",
    icon: Landmark,
    image: "/images/banking.jpg",
    items: [
      "Corporate bank accounts",
      "Personal bank accounts",
      "KYC & compliance support",
      "Digital banking",
      "Merchant services",
      "International fund transfers",
    ],
  },
  {
    number: "03",
    title: "Accounting & tax",
    shortTitle: "Keep your numbers right",
    description:
      "Reliable accounting and tax support designed around your business structure, reporting needs and compliance obligations.",
    icon: Banknote,
    image: "/images/tax.jpg",
    items: [
      "VAT registration",
      "VAT return preparation",
      "Corporate tax registration",
      "Corporate tax advisory",
      "Accounting & bookkeeping",
      "Management reporting",
      "Audit support",
    ],
  },
  {
    number: "04",
    title: "Corporate compliance & advisory",
    shortTitle: "Reduce complexity",
    description:
      "Strategic guidance across regulatory requirements, governance, risk management, AML, UBO and ongoing obligations.",
    icon: ShieldCheck,
    image: "/images/compliance.jpg",
    items: [
      "AML compliance",
      "UBO declarations",
      "Regulatory reporting",
      "Economic substance support",
      "Corporate governance",
      "Risk management",
    ],
  },
  {
    number: "05",
    title: "Concierge & PRO services",
    shortTitle: "Make the move easier",
    description:
      "Personalised administrative and relocation support for entrepreneurs, executives, investors and their families.",
    icon: UserRound,
    image: "/images/concierge.jpg",
    items: [
      "PRO & visa services",
      "Emirates ID processing",
      "Document attestation",
      "Certified translation",
      "Travel assistance",
      "Accommodation assistance",
      "Relocation support",
      "Administrative assistance",
    ],
  },
];

export function ServicesSection() {
  const [activeService, setActiveService] = useState(0);
  const currentService = services[activeService];

  return (
    <section id="services" className="bg-[var(--color-ink)] py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <SectionBadge label="What we handle" theme="dark" />

            <h2 className="mt-5 max-w-xl font-serif text-5xl leading-[0.92] tracking-[-0.035em] sm:text-6xl">
              The business essentials, connected under one roof.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-white/70">
            Choose the area where you need support. Then explore the
            individual services that sit inside it.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="space-y-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              const active = activeService === index;

              return (
                <button
                  key={service.number}
                  type="button"
                  onClick={() => setActiveService(index)}
                  className={`group flex w-full items-center gap-5 rounded-2xl p-5 text-left transition ${active
                      ? "bg-[var(--color-gold)] text-[var(--color-ink)]"
                      : "bg-white/5 text-white hover:bg-white/10"
                    }`}
                >
                  <span
                    className={`font-serif text-3xl ${active
                        ? "text-[var(--color-ink)]"
                        : "text-[var(--color-gold)]"
                      }`}
                  >
                    {service.number}
                  </span>

                  <span className="flex-1">
                    <span className="block text-base font-semibold">
                      {service.title}
                    </span>
                    <span
                      className={`mt-1 block text-sm ${active ? "text-[var(--color-ink-soft)]" : "text-white/60"
                        }`}
                    >
                      {service.shortTitle}
                    </span>
                  </span>

                  <Icon className="h-5 w-5" />
                </button>
              );
            })}
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white text-[var(--color-ink)]">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <div className="relative min-h-[420px]">
                <Image
                  src={currentService.image}
                  alt={currentService.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-[var(--color-ink)] p-5 text-white">
                  <p className="text-xs font-semibold text-[var(--color-gold)]">
                    {currentService.number} · Service area
                  </p>
                  <p className="mt-2 font-serif text-3xl leading-none">
                    {currentService.shortTitle}
                  </p>
                </div>
              </div>

              <div className="p-7 sm:p-10">
                <p className="text-sm font-semibold text-[var(--color-gold)]">
                  {currentService.number}
                </p>

                <h3 className="mt-4 font-serif text-4xl leading-none tracking-[-0.03em]">
                  {currentService.title}
                </h3>

                <p className="mt-6 text-sm leading-6 text-[var(--color-muted)]">
                  {currentService.description}
                </p>

                <div className="mt-8 grid gap-3">
                  {currentService.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl bg-[var(--color-cream)] px-4 py-3"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold)]" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <LinkButton
                  href="#contact"
                  variant="ternary"
                  size="md"
                  className="mt-8 self-start"
                >
                  Discuss this service
                  <ArrowRight className="h-4 w-4" />
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
