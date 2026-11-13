"use client";
import { useLayoutData } from "@/context/LayoutContext";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export function ContactPageData() {

    const { layoutData } = useLayoutData();
    const contact = layoutData?.contact;
    return (<section className="px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-md bg-white p-6 sm:p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--color-cream)] text-[var(--color-ink)]">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-neutral-950">
                    Call our team
                </h3>
                {contact?.phone ? (
                    <a
                        href={`tel:${contact?.phone}`}
                        className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)] hover:underline"
                    >
                        {contact.phone}
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                ) : (
                    <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                        Call details are temporarily unavailable.
                    </p>
                )}
            </article>

            <article className="rounded-md  bg-white p-6 sm:p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--color-cream)] text-[var(--color-ink)]">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-neutral-950">
                    Send an email
                </h3>
                {contact?.email ? (
                    <a
                        href={`mailto:${contact.email}`}
                        className="mt-3 inline-flex items-center gap-2 break-all text-sm font-semibold text-[var(--color-ink)] hover:underline"
                    >
                        {contact.email}
                        <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                    </a>
                ) : (
                    <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                        Email details are temporarily unavailable.
                    </p>
                )}
            </article>

            <article className="rounded-md   bg-white p-6 sm:col-span-2 sm:p-8 lg:col-span-1">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--color-cream)] text-[var(--color-ink)]">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-neutral-950">
                    Visit our office
                </h3>
                {contact?.address ? (
                    <div
                        className="mt-3 max-w-xl text-sm leading-6 text-[var(--color-muted)]"
                        dangerouslySetInnerHTML={{ __html: contact.address }}
                    />
                ) : (
                    <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                        Office details are temporarily unavailable. Please contact our
                        team before planning a visit.
                    </p>
                )}
            </article>
        </div>
    </section>
    )
}