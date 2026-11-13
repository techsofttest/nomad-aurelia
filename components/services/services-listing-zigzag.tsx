"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { useSectionReveal } from "@/components/home/use-section-reveal";

// Generate IDs that match the ServicesDropdown links.
function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

interface Service {
  title: string;
  content: string;
  image: string;
  sub: {
    title: string;
    description: string;
  }[];
}

export function ServicesListingZigzag({
  services,
}: {
  services: Service[];
}) {
  const { sectionRef, isVisible } = useSectionReveal({
    threshold: 0.05,
  });

  const [expandedServices, setExpandedServices] = useState<
    Record<number, boolean>
  >({});
  return (
    <section
      id="service-grid"
      ref={sectionRef}
      className="py-18 sm:py-24 lg:py-28 bg-white overflow-x-clip"
    >
      <Container>
        {/* Zigzag Services List */}
        <div className="flex flex-col gap-20 sm:gap-28 lg:gap-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            const serviceSlug = generateSlug(service.title);
            const isExpanded = expandedServices[index];

            return (
              <ScrollReveal
                key={index}
                direction={isEven ? "left" : "right"}
                delay={150 + (index % 2) * 100}
              >
                <article
                  id={serviceSlug}
                  className={`scroll-mt-28 sm:scroll-mt-36 reveal-item ${
                    isVisible ? "is-visible" : ""
                  }`}
                >
                  {/* items-start allows the sticky image and scrolling checklist to sync heights properly */}
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start ${
                      isEven ? "" : "lg:[&>*:first-child]:order-2"
                    }`}
                  >
                    {/* STICKY IMAGE COLUMN */}
                    <div className="lg:col-span-6 w-full lg:sticky lg:top-28 lg:self-start">
                      <div className="relative group rounded-2xl sm:rounded-3xl overflow-hidden h-[320px] sm:h-[420px] lg:h-[520px] bg-[#17191a] shadow-sm">
                        {service.image ? (
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-white/50">
                            <span className="text-sm">{service.title}</span>
                          </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                        {/* Corner Number Badge */}
                        <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 z-10 text-white/30 font-bold text-3xl sm:text-4xl select-none">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>
                    </div>

                    {/* TEXT / DETAILS COLUMN WITH INTERNAL SCROLL */}
                    <div className="lg:col-span-6 flex flex-col items-start pt-4 ">
                      {/* Service Title */}
                      <h3 className="m-0 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#17191a] mb-4">
                        {service.title}
                      </h3>

                      {/* Main Description */}
                      {service.content && (
                        <div
                          className="m-0 text-xs sm:text-sm text-[#4a4f52] leading-relaxed mb-6"
                          dangerouslySetInnerHTML={{ __html: service.content }}
                        />
                      )}

                      {/* Features Checklist */}
                      {service.sub && service.sub.length > 0 && (
                        <div className="w-full mb-8 pt-4 border-t border-black/10">
                          {/* Internal Scroll Container: Triggers scroll when expanded so it matches the image height */}
                          <div
                            className={`transition-all duration-300 ${
                              isExpanded
                                ? "max-h-[250px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-black/20 scrollbar-track-transparent"
                                : ""
                            }`}
                          >
                            {service.sub
                              .slice(
                                0,
                                isExpanded ? service.sub.length : 3
                              )
                              .map((feature, fIdx) => (
                                <div
                                  key={fIdx}
                                  className="flex items-start gap-3 py-3.5 border-b border-black/5 last:border-0"
                                >
                                  <div className="mt-0.5 rounded-full bg-[#C98236]/10 p-1 shrink-0">
                                    <CheckCircle2
                                      size={14}
                                      className="text-[#C98236]"
                                      strokeWidth={2.5}
                                    />
                                  </div>

                                  <div className="flex-1 flex flex-col gap-1">
                                    <span className="text-xs sm:text-sm font-bold text-[#1E1A17] tracking-wide">
                                      {feature.title}
                                    </span>

                                    <div
                                      className="text-xs sm:text-[13px] text-[#6B655D] font-medium leading-relaxed"
                                      dangerouslySetInnerHTML={{
                                        __html: feature.description,
                                      }}
                                    />
                                  </div>
                                </div>
                              ))}
                          </div>

                          {service.sub.length > 3 && (
                            <button
                              type="button"
                              onClick={() =>
                                setExpandedServices((prev) => ({
                                  ...prev,
                                  [index]: !prev[index],
                                }))
                              }
                              className="mt-4 text-sm font-semibold text-[#C98236] hover:text-[#A96625] transition-colors flex items-center gap-2 cursor-pointer"
                            >
                              <span>
                                {isExpanded
                                  ? "Show Less"
                                  : `Show More (${service.sub.length - 3})`}
                              </span>
                              <span
                                className={`transition-transform duration-300 ${
                                  isExpanded ? "rotate-180" : ""
                                }`}
                              >
                                ↓
                              </span>
                            </button>
                          )}
                        </div>
                      )}

                      {/* Action Button */}
                      <div className="flex flex-wrap items-center gap-3.5">
                        <LinkButton
                        href={`/contact?service=${encodeURIComponent(service.title)}#contact-form`}
                          variant="primary"
                          size="sm"
                          className="!text-xs sm:!text-sm"
                        >
                          Enquire for this service
                        </LinkButton>
                      </div>
                    </div>

                  </div>
                </article>
              </ScrollReveal>
            );
          })}

          {/* Empty State */}
          {services.length === 0 && (
            <div className="text-center py-12">
              <p className="text-sm text-[#4a4f52]">
                No services are currently available.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}