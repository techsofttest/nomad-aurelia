import Image from "next/image";
import { ArrowUpRight, Globe2 } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import { LinkButton } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--color-ink)]">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-stretch">
        {/* Left Column: Background image 'public/banner/b4.jpg' with high-contrast text */}
        <div className="relative flex flex-col justify-center overflow-hidden py-20 px-6 sm:px-10 lg:py-28 lg:pl-12 lg:pr-16 w-full">
          {/* Background image */}
          <Image
            src="/banner/b4.jpg"
            alt="Nomad Aurelia Contact"
            fill
            className="object-cover object-center"
          />

          {/* Gradient overlay for contrast */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50"
          />

          <div className="relative z-10 max-w-2xl ml-auto w-full">
            <SectionBadge
              label="Start a conversation"
              theme="dark"
              className="self-start"
            />

            <h2 className="mt-5 font-serif text-5xl font-semibold leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Tell us what you are building. We will help you map the next
              step.
            </h2>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <LinkButton
                href="mailto:finance@nomadaurelia.com"
                variant="primary"
                size="lg"
                onDark
              >
                Email Nomad
                <ArrowUpRight className="h-4 w-4" />
              </LinkButton>

              <LinkButton
                href="tel:+971508332542"
                variant="secondary"
                size="lg"
                onDark
              >
                Call us
              </LinkButton>
            </div>
          </div>
        </div>

        {/* Right Column: Brand dark blue background (#062638) with 3 standalone cross stars */}
        <div className="relative flex flex-col justify-center items-center lg:items-start py-20 px-6 sm:px-10 lg:py-28 lg:pl-16 lg:pr-12 w-full h-full bg-[#062638] overflow-hidden text-white">
          {/* Standalone cross stars spread across the canvas */}
          {/* Star 1 - Top right */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute right-12 top-12 h-6 w-6 text-white/40 animate-pulse"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          >
            <path d="M12 2v20M2 12h20" />
          </svg>

          {/* Star 2 - Mid left / accent */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute right-1/3 top-1/4 h-3.5 w-3.5 text-white/30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M12 4v16M4 12h16" />
          </svg>

          {/* Star 3 - Bottom right */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute bottom-14 right-16 h-5 w-5 text-white/35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          >
            <path d="M12 3v18M3 12h18" />
          </svg>

          {/* Content directly on dark blue canvas with crisp white typography */}
          <div className="relative z-10 w-full max-w-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-white backdrop-blur-sm">
              <Globe2 className="h-6 w-6" />
            </div>

            <h3 className="mt-8 font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Nomad Aurelia L.L.C-FZ
            </h3>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white">
                  Phone
                </p>
                <a
                  href="tel:+971508332542"
                  className="mt-1.5 block text-base sm:text-lg font-bold text-white transition-colors hover:text-white/80"
                >
                  +971 50 833 2542
                </a>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white">
                  Email
                </p>
                <a
                  href="mailto:finance@nomadaurelia.com"
                  className="mt-1.5 block text-base sm:text-lg font-bold text-white transition-colors hover:text-white/80"
                >
                  finance@nomadaurelia.com
                </a>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white">
                  Office
                </p>
                <p className="mt-1.5 max-w-sm text-sm sm:text-base font-medium leading-relaxed text-neutral-200">
                  Plot number 565-0, Al Gurg Building, Karama,
                  <br />
                  Al Karama, UAE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
