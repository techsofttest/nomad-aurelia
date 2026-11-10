"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, Plus, X } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import {
  ServicesMegaDropdown,
  serviceCategories,
} from "@/components/global/services-dropdown";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Detect scroll direction and threshold to toggle visibility & sticky styling
  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      const scrolled = currentScrollY > 40;
      setIsScrolled(scrolled);

      // Always show at top of page (scrollY <= 40)
      if (currentScrollY <= 40) {
        setIsVisible(true);
      } else {
        // If scrolling up, show header; if scrolling down, hide header and close services dropdown
        if (currentScrollY < lastScrollY.current) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY.current + 5) {
          // Add a small threshold (5px) to prevent jitter
          setIsVisible(false);
          setServicesOpen(false);
        }
      }

      lastScrollY.current = currentScrollY;
    }

    lastScrollY.current = window.scrollY;
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 text-white ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
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
            className={`w-auto object-contain transition-all duration-300 ${
              isScrolled
                ? "h-12 sm:h-14 lg:h-16 translate-y-0"
                : "h-24 sm:h-28 lg:h-32 translate-y-3 sm:translate-y-4 lg:translate-y-8"
            }`}
          />
        </a>

        {/* Right-aligned Navigation & CTAs */}
        <div className="hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-7">
            {/* Services with categorized Mega Dropdown */}
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
                  strokeWidth={3}
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    servicesOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
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

          <LinkButton
            href="#contact"
            variant="primary"
            size="md"
            onDark
            className="shadow-sm"
          >
            Request a consultation
            <ArrowUpRight className="h-4 w-4" />
          </LinkButton>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white lg:hidden"
          aria-label="Toggle navigation menu"
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
        <div className="mx-4 mt-2 max-h-[80vh] overflow-y-auto rounded-md border border-white/15 bg-[#062638] p-5 text-white lg:hidden">
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
                  className={`h-4 w-4 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-45" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="ml-3 my-2 flex flex-col gap-5 border-l border-white/20 pl-4">
                  {serviceCategories.map((group) => (
                    <div key={group.category}>
                      <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-gold)]">
                        {group.category}
                      </p>
                      <ul className="mt-2 space-y-1.5 text-xs text-neutral-300">
                        {group.items.map((item) => (
                          <li key={item}>
                            <a
                              href="#services"
                              onClick={() => {
                                setMobileServicesOpen(false);
                                setMobileOpen(false);
                              }}
                              className="block py-1 leading-relaxed hover:text-white"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
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
      {/* Full-width Services Mega Dropdown */}
      <div
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
      >
        <ServicesMegaDropdown
          isOpen={servicesOpen}
          onClose={() => setServicesOpen(false)}
        />
      </div>
    </header>
  );
}
