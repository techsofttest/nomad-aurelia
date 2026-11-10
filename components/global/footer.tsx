"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[var(--color-dark)] px-6 py-12 text-white lg:px-8">
      {/* Full-width centered stylish company wordmark row */}
      <div className="w-full border-b border-white/10 pb-8 sm:pb-12 mb-12 sm:mb-16">
        <h2 className="w-full text-center font-serif text-[clamp(2.5rem,11vw,10rem)] font-bold uppercase leading-[0.9] select-none bg-gradient-to-b from-white via-white/80 to-transparent bg-clip-text text-transparent">
          Nomad Aurelia
        </h2>
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Main Footer Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand & Mission (Spans 2 cols on lg) */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block" aria-label="Nomad Aurelia">
              <Image
                src="/logo/logo-white.svg"
                alt="Nomad Aurelia Logo"
                width={1324}
                height={1781}
                className="h-28 w-auto object-contain sm:h-32 lg:h-36"
              />
            </a>

            <p className="mt-6 max-w-sm text-sm font-normal leading-6 text-neutral-300">
              Tailored corporate solutions for entrepreneurs, investors and
              businesses building their future in the UAE.
            </p>

            {/* Contact Details */}
            <div className="mt-8 space-y-4 text-sm font-medium text-neutral-300">
              <div className="pt-2 space-y-1.5 text-xs text-neutral-300">
                <a
                  href="tel:+971508332542"
                  className="block font-semibold hover:text-white transition-colors"
                >
                  +971 50 833 2542
                </a>
                <a
                  href="mailto:finance@nomadaurelia.com"
                  className="block break-all hover:text-white transition-colors"
                >
                  finance@nomadaurelia.com
                </a>
                <p className="text-neutral-400">
                  Plot number 565-0, Al Gurg Building, Karama, UAE
                </p>
              </div>
            </div>
          </div>

          {/* Service Column 1: Company Formation */}
          <div>
            <p className="text-sm font-bold text-white">
              Company Formation
            </p>

            <ul className="mt-4 space-y-2.5 text-xs font-medium text-neutral-300">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Mainland Company Formation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Free Zone Company Formation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Offshore Company Formation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Trade Name Reservation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Business Activity Selection
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Trade License Processing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Shareholder Documentation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Corporate Compliance Support
                </a>
              </li>
            </ul>
          </div>

          {/* Service Column 2: Banking & Financial Solutions */}
          <div>
            <p className="text-sm font-bold text-white">
              Banking & Finance
            </p>

            <ul className="mt-4 space-y-2.5 text-xs font-medium text-neutral-300">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Corporate & Personal Bank Accounts
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  KYC & Compliance Support
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Digital Banking & Payment Solutions
                </a>
              </li>
            </ul>

            <p className="mt-8 text-sm font-bold text-white">
              Accounting & Tax
            </p>

            <ul className="mt-4 space-y-2.5 text-xs font-medium text-neutral-300">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  VAT Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Corporate Tax
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Accounting & Bookkeeping
                </a>
              </li>
            </ul>
          </div>

          {/* Service Column 3: Corporate Compliance & Advisory */}
          <div>
            <p className="text-sm font-bold text-white">
              Compliance & Advisory
            </p>

            <ul className="mt-4 space-y-2.5 text-xs font-medium text-neutral-300">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  AML & UBO Compliance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Regulatory Reporting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Corporate Governance & Risk Management
                </a>
              </li>
            </ul>
          </div>

          {/* Service Column 4: Concierge & PRO Services */}
          <div>
            <p className="text-sm font-bold text-white">
              Concierge & PRO
            </p>

            <ul className="mt-4 space-y-2.5 text-xs font-medium text-neutral-300">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  PRO & Visa Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Document Attestation & Translation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Travel & Accommodation Assistance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Relocation Support
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Administrative Assistance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick Links Row aligned to right edge */}
        <div className="mt-12 flex justify-end">
          <div className="flex flex-wrap items-center justify-end gap-4 text-xs font-medium text-white">
            <a href="#about" className="hover:text-white/70 transition-colors">
              About us
            </a>
            <span className="text-white/30">·</span>
            <a href="#approach" className="hover:text-white/70 transition-colors">
              Our approach
            </a>
            <span className="text-white/30">·</span>
            <a href="#faq" className="hover:text-white/70 transition-colors">
              FAQ
            </a>
            <span className="text-white/30">·</span>
            <a href="#contact" className="hover:text-white/70 transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Bottom Attribution Strip */}
        <div className="mt-6 flex flex-col justify-between items-center gap-4 border-t border-white/15 pt-6 text-xs font-medium text-neutral-400 sm:flex-row">
          <p>
            © {year ?? 2025} Nomad Aurelia L.L.C-FZ. All rights
            reserved.
          </p>
          <a
            href="https://www.techsoftweb.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal transition-colors hover:text-white hover:underline underline-offset-4"
          >
            Web Design Company in Kochi Techsoft
          </a>
          <p className="text-neutral-300">Corporate solutions · UAE</p>
        </div>
      </div>
    </footer>
  );
}
