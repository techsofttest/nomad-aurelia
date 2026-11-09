import { ArrowUpRight, Globe2 } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="bg-[var(--color-gold)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <span className="text-sm font-semibold text-[var(--color-ink-soft)]">
              Start a conversation
            </span>

            <h2 className="mt-5 max-w-3xl font-serif text-6xl leading-[0.88] tracking-[-0.04em] text-[var(--color-ink)] sm:text-7xl">
              Tell us what you are building. We will help you map the next
              step.
            </h2>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:finance@nomadaurelia.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-ink)] px-6 py-4 text-sm font-semibold text-white"
              >
                Email Nomad
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="tel:+971508332542"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[var(--color-ink)]"
              >
                Call us
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[var(--color-paper)] p-7 sm:p-9">
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
