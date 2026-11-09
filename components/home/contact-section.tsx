import { ArrowUpRight, Globe2 } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import { LinkButton } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="bg-[var(--color-gold)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <SectionBadge
              label="Start a conversation"
              theme="light"
              className="border-black/10 bg-black/5"
            />

            <h2 className="mt-5 max-w-3xl font-serif text-6xl leading-[0.88] tracking-[-0.04em] text-[var(--color-ink)] sm:text-7xl">
              Tell us what you are building. We will help you map the next
              step.
            </h2>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <LinkButton
                href="mailto:finance@nomadaurelia.com"
                variant="primary"
                size="lg"
              >
                Email Nomad
                <ArrowUpRight className="h-4 w-4" />
              </LinkButton>

              <LinkButton
                href="tel:+971508332542"
                variant="secondary"
                size="lg"
              >
                Call us
              </LinkButton>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-7 sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-gold-pale)]">
              <Globe2 className="h-5 w-5 text-[var(--color-ink)]" />
            </div>

            <h3 className="mt-8 font-serif text-3xl text-[var(--color-ink)]">
              Nomad Aurelia L.L.C-FZ
            </h3>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-xs font-semibold text-[var(--color-muted)]">
                  Phone
                </p>
                <a
                  href="tel:+971508332542"
                  className="mt-1 block text-sm font-semibold text-[var(--color-ink)]"
                >
                  +971 50 833 2542
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold text-[var(--color-muted)]">
                  Email
                </p>
                <a
                  href="mailto:finance@nomadaurelia.com"
                  className="mt-1 block text-sm font-semibold text-[var(--color-ink)]"
                >
                  finance@nomadaurelia.com
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold text-[var(--color-muted)]">
                  Office
                </p>
                <p className="mt-1 max-w-sm text-sm font-semibold leading-6 text-[var(--color-ink)]">
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
