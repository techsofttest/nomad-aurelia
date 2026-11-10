"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, Plus, X } from "lucide-react";
import { LinkButton } from "@/components/ui/button";

const serviceTitles = [
  "Mainland Company Formation",
  "Free Zone Company Formation",
  "Offshore Company Formation",
  "Trade Name Reservation",
  "Business Activity Selection",
  "Trade License Processing",
  "Shareholder Documentation",
  "Corporate Compliance Support",
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Detect scroll to toggle sticky styling & alternate logo
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 text-white ${isScrolled
        ? "bg-[#062638]/95 backdrop-blur-md shadow-md py-2"
        : "bg-transparent py-0"
        }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-8">
        {/* Left: Brand Logo */}
        <a
          href="#"
          className="relative flex items-center overflow-visible"
          aria-label="Nomad Aurelia"
        >
          <Image
            src={isScrolled ? "/logo/logo-sec2.svg" : "/logo/logo-white.svg"}
            alt="Nomad Aurelia Logo"
            width={1324}
            height={1781}
            priority
            className={`w-auto object-contain transition-all duration-300 ${isScrolled
              ? "h-12 sm:h-14 lg:h-16 translate-y-0"
              : "h-24 sm:h-28 lg:h-32 translate-y-3 sm:translate-y-4 lg:translate-y-8"
              }`}
          />
        </a>

        {/* Right-aligned Navigation & CTAs */}
        <div className="hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-7">
            {/* Services with minimal high-contrast dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1.5 text-sm font-semibold tracking-wide text-white transition hover:text-white/70"
                aria-expanded={servicesOpen}
              >
                <span>Services</span>
                <Plus
                  strokeWidth={3} className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-45" : ""
                    }`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute right-0 top-full pt-2 z-50">
                  <div className="w-80 rounded-lg border border-white/20 bg-neutral-950 p-2">
                    {serviceTitles.map((title) => (
                      <a
                        key={title}
                        href="#services"
                        onClick={() => setServicesOpen(false)}
                        className="block rounded-md px-3.5 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
                      >
                        {title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#approach"
              className="text-sm font-semibold tracking-wide text-white transition hover:text-white/70"
            >
              Our approach
            </a>
            <a
              href="#about"
              className="text-sm font-semibold tracking-wide text-white transition hover:text-white/70"
            >
              About
            </a>
            <a
              href="#faq"
              className="text-sm font-semibold tracking-wide text-white transition hover:text-white/70"
            >
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <LinkButton
              href="tel:+971508332542"
              variant="ternary"
              size="sm"
              onDark
            >
              +971 50 833 2542
            </LinkButton>

            <LinkButton
              href="#contact"
              variant="primary"
              size="md"
              onDark
            >
              Request a consultation
              <ArrowUpRight className="h-4 w-4" />
            </LinkButton>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/25 bg-black/50 text-white lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="mx-4 mt-2 rounded-lg border border-white/15 bg-neutral-950 p-5 text-white lg:hidden">
          <nav className="flex flex-col gap-1">
            {/* Mobile Services Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex w-full items-center justify-between rounded-md px-4 py-3 text-base font-semibold text-white hover:bg-white/10"
              >
                <span>Services</span>
                <Plus
                  className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-45" : ""
                    }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="ml-3 my-1 flex flex-col border-l border-white/20 pl-3">
                  {serviceTitles.map((title) => (
                    <a
                      key={title}
                      href="#services"
                      onClick={() => {
                        setMobileServicesOpen(false);
                        setMobileOpen(false);
                      }}
                      className="py-2 text-sm font-medium text-white/75 hover:text-white"
                    >
                      {title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {[
              { id: "approach", label: "Our approach" },
              { id: "about", label: "About" },
              { id: "faq", label: "FAQ" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-4 py-3 text-base font-semibold text-white hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <LinkButton
            href="#contact"
            variant="primary"
            size="lg"
            onDark
            onClick={() => setMobileOpen(false)}
            className="mt-4 w-full"
          >
            Request a consultation
            <ArrowUpRight className="h-4 w-4" />
          </LinkButton>
        </div>
      )}
    </header>
  );
}
