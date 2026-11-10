"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Minus, Plus } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";

export const faqs = [
  {
    question: "Can Nomad help me choose between mainland and free zone?",
    answer:
      "Yes. We can review your business activity, ownership requirements, operating model and intended market before recommending an appropriate structure.",
  },
  {
    question: "Can you support the business after formation?",
    answer:
      "Yes. Our services extend beyond incorporation into banking, accounting, tax, compliance, PRO services and ongoing administrative support.",
  },
  {
    question: "Do you support international founders?",
    answer:
      "Yes. Our corporate solutions are designed to support entrepreneurs, investors and established businesses navigating the UAE business environment.",
  },
  {
    question: "Can Nomad assist with banking?",
    answer:
      "We provide guidance and documentation support for corporate and personal banking applications, including KYC and compliance requirements.",
  },
];

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[var(--color-cream)] py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
        <div>
          <SectionBadge label="Common questions" theme="light" />

          <h2 className="mt-5 max-w-md font-serif text-5xl font-semibold leading-[0.94] tracking-[-0.035em] text-neutral-950 sm:text-6xl">
            Clarity before commitment.
          </h2>

          <p className="mt-6 max-w-sm text-base font-medium leading-7 text-neutral-800">
            If your question is not here, start a conversation and we can
            discuss your situation directly.
          </p>
        </div>

        {/* Boxed Accordion items with no dividers between */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-md bg-white transition-colors hover:bg-neutral-50/80"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-neutral-950">
                    {faq.question}
                  </span>

                  {/* Plus / Minus icon badge with rotation animation */}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[var(--color-cream)] text-neutral-900 transition-colors">
                    <motion.div
                      key={isOpen ? "minus" : "plus"}
                      initial={{ scale: 0.8, rotate: isOpen ? -90 : 90, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4 stroke-[2.25]" />
                      ) : (
                        <Plus className="h-4 w-4 stroke-[2.25]" />
                      )}
                    </motion.div>
                  </span>
                </button>

                {/* Smooth spring height animation using motion/react */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.35, ease: [0.25, 1, 0.5, 1] },
                          opacity: { duration: 0.25, delay: 0.1 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.25, ease: [0.25, 1, 0.5, 1] },
                          opacity: { duration: 0.15 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1">
                        <p className="max-w-2xl text-base font-normal leading-relaxed text-neutral-800">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
