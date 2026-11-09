"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
          <span className="text-sm font-semibold text-[var(--color-gold)]">
            Common questions
          </span>

          <h2 className="mt-5 max-w-md font-serif text-5xl leading-[0.94] tracking-[-0.035em] text-[var(--color-ink)] sm:text-6xl">
            Clarity before commitment.
          </h2>

          <p className="mt-6 max-w-sm text-sm leading-6 text-[var(--color-muted)]">
            If your question is not here, start a conversation and we can
            discuss your situation directly.
          </p>
        </div>

        <div>
          {faqs.map((faq, index) => {
            const open = openFaq === index;

            return (
              <div
                key={faq.question}
                className="border-b border-[var(--color-line)] first:border-t"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-base font-semibold text-[var(--color-ink)]">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[var(--color-muted)] transition ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open && (
                  <div className="pb-6 pr-10">
                    <p className="max-w-2xl text-sm leading-6 text-[var(--color-muted)]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
