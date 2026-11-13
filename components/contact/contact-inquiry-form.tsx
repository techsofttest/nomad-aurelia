"use client";

import { useSearchParams } from "next/navigation";
import { useLayoutData } from "@/context/LayoutContext";
import { useState, useEffect } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";

interface ServiceOption {
  title: string;
  slug: string;
  sub: string[];
}

interface InquiryResponse {
  message?: string;
  errors?: Record<string, string[]>;
}

export function ContactInquiryForm({cta}:{cta:any}) {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  
  // Track field-specific errors returned from Laravel validation
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  const { layoutData } = useLayoutData();
  const services = layoutData?.service ?? [];

  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    if (preselectedService && services.length > 0) {
      const matchedService = services.find(
        (s) => s.title.toLowerCase().trim() === decodeURIComponent(preselectedService).toLowerCase().trim()
      );
      if (matchedService) {
        setSelectedService(matchedService.title);
      } else {
        setSelectedService(preselectedService);
      }
    }
  }, [preselectedService, services]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    setSubmitting(true);
    setStatus(null);
    setFieldErrors({});

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    try {
      const response = await fetch(`${baseUrl}/contact-inquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as InquiryResponse;

      if (!response.ok) {
        // Capture specific field errors if returned from Laravel validator
        if (result.errors) {
          setFieldErrors(result.errors);
        }
        throw new Error(
          result.message ?? "Your message could not be sent. Please check the fields below."
        );
      }

      form.reset();
      setSelectedService("");
      setStatus({
        type: "success",
        message: result.message ?? "Thanks. Your inquiry has been sent.",
      });
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Your message could not be sent. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact-form" className="px-6 pb-16 sm:pb-20 lg:px-8 lg:pb-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b87d3b]">
            {cta?.title ?? ""}
          </p>
          <div className="[&_h2]:mt-4 [&_h2]:font-serif [&_h2]:text-4xl [&_h2]:font-semibold [&_h2]:leading-tight [&_h2]:text-neutral-950 sm:[&_h2]:text-5xl [&_p]:mt-5 max-w-lg [&_p]:text-base [&_p]:leading-7 [&_p]:text-[var(--color-muted)]" dangerouslySetInnerHTML={{__html:cta?.content ?? ''}} />
        </div>

        <form
          onSubmit={handleSubmit}
         className="h-full rounded-md bg-white p-7 transition-colors hover:bg-neutral-50 "
        >
          <div className="mb-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b87d3b]">
              Send an inquiry
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-neutral-950">
              How can we help?
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-[var(--color-ink)]">
              Your name
              <input
                name="name"
                autoComplete="name"
                required
                maxLength={120}
                className={`mt-2 w-full rounded-md border bg-white px-4 py-3 font-normal outline-none transition focus:border-[var(--color-ink)] ${
                  fieldErrors.name ? "border-red-500" : "border-[var(--color-line)]"
                }`}
              />
              {fieldErrors.name && (
                <span className="mt-1 text-xs text-red-600">{fieldErrors.name[0]}</span>
              )}
            </label>

            <label className="text-sm font-semibold text-[var(--color-ink)]">
              Email address
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                className={`mt-2 w-full rounded-md border bg-white px-4 py-3 font-normal outline-none transition focus:border-[var(--color-ink)] ${
                  fieldErrors.email ? "border-red-500" : "border-[var(--color-line)]"
                }`}
              />
              {fieldErrors.email && (
                <span className="mt-1 text-xs text-red-600">{fieldErrors.email[0]}</span>
              )}
            </label>

            <label className="text-sm font-semibold text-[var(--color-ink)]">
              Phone number{" "}
              <span className="font-normal text-[var(--color-muted)]">
                (optional)
              </span>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                maxLength={10}
                className={`mt-2 w-full rounded-md border bg-white px-4 py-3 font-normal outline-none transition focus:border-[var(--color-ink)] ${
                  fieldErrors.phone ? "border-red-500" : "border-[var(--color-line)]"
                }`}
              />
              {fieldErrors.phone && (
                <span className="mt-1 text-xs text-red-600">{fieldErrors.phone[0]}</span>
              )}
            </label>

            <label className="text-sm font-semibold text-[var(--color-ink)]">
              Service you’re interested in
              <select
                name="service"
                required
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className={`mt-2 w-full rounded-md border bg-white px-4 py-3 font-normal outline-none transition focus:border-[var(--color-ink)] ${
                  fieldErrors.service ? "border-red-500" : "border-[var(--color-line)]"
                }`}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service.slug} value={service.title}>
                    {service.title}
                  </option>
                ))}
                <option value="General enquiry">General enquiry</option>
              </select>
              {fieldErrors.service && (
                <span className="mt-1 text-xs text-red-600">{fieldErrors.service[0]}</span>
              )}
            </label>

            <label className="text-sm font-semibold text-[var(--color-ink)] sm:col-span-2">
              How can we help?
              <textarea
                name="message"
                required
                maxLength={5000}
                rows={5}
                className={`mt-2 w-full resize-y rounded-md border bg-white px-4 py-3 font-normal outline-none transition focus:border-[var(--color-ink)] ${
                  fieldErrors.message ? "border-red-500" : "border-[var(--color-line)]"
                }`}
              />
              {fieldErrors.message && (
                <span className="mt-1 text-xs text-red-600">{fieldErrors.message[0]}</span>
              )}
            </label>
          </div>

          {status && (
            <div
              role={status.type === "error" ? "alert" : "status"}
              className={`mt-6 flex items-center gap-3 rounded-md p-4 text-sm ${
                status.type === "success"
                  ? "bg-green-50 text-green-900 border border-green-200"
                  : "bg-red-50 text-red-900 border border-red-200"
              }`}
            >
              {status.type === "success" ? (
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-600 shrink-0" />
              )}
              <span>{status.message}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-[var(--color-ink)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-ink-soft)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Sending..." : "Send inquiry"}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
}