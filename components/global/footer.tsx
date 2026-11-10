"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

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
            <a
              href="#services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-white hover:underline underline-offset-4 transition-colors"
            >
              <span>Company Formation</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-white/70" />
            </a>

            <ul className="mt-4 space-y-2 text-xs font-normal text-neutral-300">
              <li>Mainland Company Formation</li>
              <li>Free Zone Company Formation</li>
              <li>Offshore Company Formation</li>
              <li>Trade Name Reservation</li>
              <li>Business Activity Selection</li>
              <li>Trade License Processing</li>
              <li>Shareholder Documentation</li>
              <li>Corporate Compliance Support</li>
            </ul>
          </div>

          {/* Service Column 2: Banking & Financial Solutions */}
          <div>
            <a
              href="#services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-white hover:underline underline-offset-4 transition-colors"
            >
              <span>Banking & Finance</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-white/70" />
            </a>

            <ul className="mt-4 space-y-2 text-xs font-normal text-neutral-300">
              <li>Corporate & Personal Bank Accounts</li>
              <li>KYC & Compliance Support</li>
              <li>Digital Banking & Payment Solutions</li>
            </ul>

            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-bold text-white hover:underline underline-offset-4 transition-colors"
            >
              <span>Accounting & Tax</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-white/70" />
            </a>

            <ul className="mt-4 space-y-2 text-xs font-normal text-neutral-300">
              <li>VAT Services</li>
              <li>Corporate Tax</li>
              <li>Accounting & Bookkeeping</li>
            </ul>
          </div>

          {/* Service Column 3: Corporate Compliance & Advisory */}
          <div>
            <a
              href="#services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-white hover:underline underline-offset-4 transition-colors"
            >
              <span>Compliance & Advisory</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-white/70" />
            </a>

            <ul className="mt-4 space-y-2 text-xs font-normal text-neutral-300">
              <li>AML & UBO Compliance</li>
              <li>Regulatory Reporting</li>
              <li>Corporate Governance & Risk Management</li>
            </ul>
          </div>

          {/* Service Column 4: Concierge & PRO Services */}
          <div>
            <a
              href="#services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-white hover:underline underline-offset-4 transition-colors"
            >
              <span>Concierge & PRO</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-white/70" />
            </a>

            <ul className="mt-4 space-y-2 text-xs font-normal text-neutral-300">
              <li>PRO & Visa Services</li>
              <li>Document Attestation & Translation</li>
              <li>Travel & Accommodation Assistance</li>
              <li>Relocation Support</li>
              <li>Administrative Assistance</li>
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
