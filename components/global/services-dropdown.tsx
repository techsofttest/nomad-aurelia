"use client";

import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export interface ServiceCategory {
  category: string;
  items: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    category: "Company Formation",
    items: [
      "Mainland company formation",
      "Free zone company formation",
      "Offshore company formation",
      "Trade name reservation",
      "Business activity selection",
      "Trade licence processing",
      "Shareholder documentation",
      "Corporate compliance support",
    ],
  },
  {
    category: "Banking & Financial Solutions",
    items: [
      "Corporate and personal bank account assistance",
      "KYC and compliance documentation support",
      "Digital banking and payment solutions",
      "International fund transfer assistance",
    ],
  },
  {
    category: "Accounting & Tax Services",
    items: [
      "VAT registration, return preparation, and filing support",
      "Corporate tax registration and compliance",
      "Accounting and bookkeeping",
      "Auditing support and management reporting",
    ],
  },
  {
    category: "Corporate Compliance & Advisory",
    items: [
      "Anti-Money Laundering (AML) and Ultimate Beneficial Ownership (UBO) compliance support",
      "Regulatory reporting assistance",
      "Corporate governance advisory",
      "Risk management support",
    ],
  },
  {
    category: "Concierge & PRO Services",
    items: [
      "Visa and Emirates ID assistance",
      "Labour card and government formalities support",
      "Document attestation and translation coordination",
      "Travel and accommodation assistance",
      "Relocation support",
      "Personal and business administrative assistance",
    ],
  },
];

interface ServicesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function ServicesMegaDropdown({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: ServicesDropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="fixed inset-x-0 top-[64px] lg:top-[80px] z-40 w-screen text-white"
        >
          {/* Boxed Content Container */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="rounded-lg bg-[#062638] p-6 lg:p-8">
              {/* 5 Column Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
                {serviceCategories.map((group) => (
                  <div key={group.category} className="flex flex-col">
                    {/* Category Title: crisp white, highly legible */}
                    <h3 className="text-[13px] font-bold text-white tracking-wide border-b border-white/20 pb-2.5">
                      {group.category}
                    </h3>

                    {/* Service Items: high contrast white/neutral-100 */}
                    <ul className="mt-3.5 space-y-2.5 text-[13px] leading-snug">
                      {group.items.map((item) => (
                        <li key={item}>
                          <a
                            href="#services"
                            onClick={onClose}
                            className="block text-neutral-100 hover:text-white hover:underline underline-offset-4 transition-colors"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Bottom Info Bar inside the Box */}
              <div className="mt-7 pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-neutral-200">
                <p className="font-medium">
                  Corporate setup, tax, banking & advisory solutions across the UAE.
                </p>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 font-bold text-white hover:underline underline-offset-4 transition-colors"
                >
                  <span>Request a consultation</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
