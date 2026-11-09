"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#" className="flex items-center" aria-label="Nomad Aurelia">
          <Image
            src="/logo/logo.svg"
            alt="Nomad Aurelia Logo"
            width={1324}
            height={1781}
            priority
            className="h-24 w-auto object-contain sm:h-28 lg:h-32"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          <a
            href="#services"
            className="text-sm font-medium text-[var(--color-ink)] transition hover:text-[var(--color-gold)]"
          >
            Services
          </a>
          <a
            href="#approach"
            className="text-sm font-medium text-[var(--color-ink)] transition hover:text-[var(--color-gold)]"
          >
            Our approach
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-[var(--color-ink)] transition hover:text-[var(--color-gold)]"
          >
            About
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-[var(--color-ink)] transition hover:text-[var(--color-gold)]"
          >
            FAQ
          </a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+971508332542"
            className="rounded-full px-4 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:bg-white/60"
          >
            +971 50 833 2542
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-ink-soft)]"
          >
            Request a consultation
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-ink)] text-white lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="mx-4 rounded-2xl bg-[var(--color-paper)] p-5 lg:hidden">
          <nav className="flex flex-col gap-1">
            {[
              { id: "services", label: "Services" },
              { id: "approach", label: "Our approach" },
              { id: "about", label: "About" },
              { id: "faq", label: "FAQ" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-4 text-base font-semibold text-[var(--color-ink)] hover:bg-[var(--color-gold-pale)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[var(--color-ink)] px-5 py-4 text-sm font-semibold text-white"
          >
            Request a consultation
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </header>
  );
}
