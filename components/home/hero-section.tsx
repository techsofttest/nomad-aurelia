import Image from "next/image";
import { ArrowDown, ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[800px] overflow-hidden bg-[var(--color-cream)]">
      <div className="absolute inset-y-0 right-0 hidden w-[43%] bg-[var(--color-gold-pale)] lg:block" />

      <div className="mx-auto grid min-h-[800px] max-w-7xl items-center gap-12 px-6 pb-20 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-16 lg:pt-40">
        <div className="relative z-10">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-12 bg-[var(--color-gold)]" />
            <span className="text-sm font-semibold tracking-wide text-[var(--color-muted)]">
              Corporate solutions for the UAE
            </span>
          </div>

          <h1 className="max-w-4xl font-serif text-6xl leading-[0.88] tracking-[-0.04em] text-[var(--color-ink)] sm:text-7xl lg:text-6xl">
            Build your business with clarity, confidence and a partner who stays.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-[var(--color-ink-soft)] sm:text-lg">
            Tailored support for company formation, banking, accounting,
            compliance and the practical details of doing business in the UAE.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group flex items-center justify-center gap-3 rounded-full bg-[var(--color-ink)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[var(--color-ink-soft)]"
            >
              Request a consultation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#services"
              className="flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[var(--color-ink)] transition hover:bg-[var(--color-gold-pale)]"
            >
              Explore our services
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-14 grid max-w-2xl grid-cols-3 gap-5">
            <div>
              <p className="font-serif text-4xl text-[var(--color-ink)]">
                01
              </p>
              <p className="mt-1 text-sm leading-5 text-[var(--color-muted)]">
                Tailored business structures
              </p>
            </div>

            <div>
              <p className="font-serif text-4xl text-[var(--color-ink)]">
                05
              </p>
              <p className="mt-1 text-sm leading-5 text-[var(--color-muted)]">
                Connected service areas
              </p>
            </div>

            <div>
              <p className="font-serif text-4xl text-[var(--color-ink)]">
                360°
              </p>
              <p className="mt-1 text-sm leading-5 text-[var(--color-muted)]">
                Support beyond setup
              </p>
            </div>
          </div>
        </div>

        <div className="relative lg:pl-10">
          <div className="relative overflow-hidden rounded-[2rem] bg-[var(--color-ink)]">
            <Image
              src="/images/hero-business.jpg"
              alt="Modern Dubai business district"
              width={1000}
              height={1200}
              priority
              className="h-[620px] w-full object-cover"
            />

            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-[var(--color-paper)] p-5">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold text-[var(--color-muted)]">
                    Your starting point
                  </p>
                  <p className="mt-1 max-w-xs font-serif text-2xl leading-tight text-[var(--color-ink)]">
                    One conversation can clarify the route ahead.
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)]">
                  <MessageCircle className="h-5 w-5 text-[var(--color-ink)]" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-7 -left-5 hidden rounded-2xl bg-[var(--color-gold)] p-5 sm:block lg:left-0">
            <Sparkles className="h-6 w-6 text-[var(--color-ink)]" />
            <p className="mt-3 max-w-[150px] text-sm font-semibold leading-5 text-[var(--color-ink)]">
              Built around the way your business actually works
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
