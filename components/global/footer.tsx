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
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <a href="#" className="inline-block" aria-label="Nomad Aurelia">
              <Image
                src="/logo/logo-white.svg"
                alt="Nomad Aurelia Logo"
                width={1324}
                height={1781}
                className="h-28 w-auto object-contain sm:h-32 lg:h-36"
              />
            </a>

            <p className="mt-6 max-w-sm text-sm leading-6 text-white/60">
              Tailored corporate solutions for entrepreneurs, investors and
              businesses building their future in the UAE.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-[var(--color-gold)]">
              Services
            </p>

            <div className="mt-5 space-y-3 text-sm text-white/60">
              <a href="#services" className="block hover:text-white">
                Company formation
              </a>
              <a href="#services" className="block hover:text-white">
                Banking
              </a>
              <a href="#services" className="block hover:text-white">
                Accounting & tax
              </a>
              <a href="#services" className="block hover:text-white">
                Compliance
              </a>
              <a href="#services" className="block hover:text-white">
                Concierge & PRO
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-[var(--color-gold)]">
              Company
            </p>

            <div className="mt-5 space-y-3 text-sm text-white/60">
              <a href="#about" className="block hover:text-white">
                About us
              </a>
              <a href="#approach" className="block hover:text-white">
                Our approach
              </a>
              <a href="#faq" className="block hover:text-white">
                FAQ
              </a>
              <a href="#contact" className="block hover:text-white">
                Contact
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-[var(--color-gold)]">
              Contact
            </p>

            <div className="mt-5 space-y-3 text-sm text-white/60">
              <a
                href="tel:+971508332542"
                className="block hover:text-white"
              >
                +971 50 833 2542
              </a>
              <a
                href="mailto:finance@nomadaurelia.com"
                className="block break-all hover:text-white"
              >
                finance@nomadaurelia.com
              </a>
              <p className="leading-6">
                Plot number 565-0, Al Gurg Building, Karama,
                <br />
                Al Karama, UAE
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>
            © {year ?? 2025} Nomad Aurelia L.L.C-FZ. All rights
            reserved.
          </p>
          <p>Corporate solutions · UAE</p>
        </div>
      </div>
    </footer>
  );
}
