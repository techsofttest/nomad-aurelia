import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { LinkButton } from "@/components/ui/button";


export function ServicesListingHero({ banner }:{ banner :any}) {

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 bg-[#17191a] text-white overflow-hidden min-h-[460px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={banner?.image ?? ""}
          alt="bannerimage" fill
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark contrast gradient overlays to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
      </div>

      {/* Subtle background ambient red glow */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[250px] bg-[#12394a]/20 rounded-full blur-3xl pointer-events-none z-1" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <Eyebrow theme="light">{banner.title}</Eyebrow>

          <div className="[&_h3]:m-0 [&_h3]:font-medium [&_h3]:tracking-tight [&_h3]:leading-tight [&_h3]:text-4xl sm:[&_h3]:text-5xl md:[&_h3]:text-6xl [&_h3]:text-white [&_h3]:mb-6 [&_h3_strong]:text-[#ed292f]" dangerouslySetInnerHTML={{__html:banner?.content ?? ""}} />

          <div className="flex flex-wrap items-center gap-4">
            <LinkButton href="#service-grid"  variant="primary" size="md">
              Browse All Services
            </LinkButton>

            <LinkButton href="/contact#contact-form" variant="secondary" size="md">
              Talk to Operations
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
