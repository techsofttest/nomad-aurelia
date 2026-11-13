"use client";

import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface Service {
  title: string;
  slug: string;
  sub: string[];
}
interface ServicesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  services:Service[]
}

export function ServicesMegaDropdown({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,services
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
                {services.map((group,idx) => (
                  <div key={idx} className="flex flex-col">
                    {/* Category Title: Linked to #services, crisp white and hoverable */}
                    <a
                      href={`/services#${group.slug}`}
                      onClick={onClose}
                      className="group/cat flex items-center justify-between border-b border-white/20 pb-2.5 transition-colors"
                    >
                      <h3 className="text-[13px] font-bold text-white tracking-wide group-hover/cat:underline underline-offset-4">
                        {group.title}
                      </h3>
                      <ArrowUpRight className="h-3.5 w-3.5 text-white/70 group-hover/cat:text-white transition-colors" />
                    </a>

                    {/* Service Items: Plain text listing (not links) */}
                    <ul className="mt-3.5 space-y-2 text-[13px] leading-snug">
                      {group.sub.map((item) => (
                        <li key={item} className="text-neutral-200">
                          {item}
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
                  href="/contact#contact-form"
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
