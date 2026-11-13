
import Image from "next/image";

export  function Banner({ banner }: { banner: any }) {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-neutral-950 px-6 pb-20 pt-36 text-white sm:pt-40 lg:px-8 lg:pb-28"
    >
      {/* Background Image */}
      <Image
        src={banner?.image || "/banner/b4.jpg"}
        alt="Nomad Aurelia"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/60 to-black/50"
      />

      {/* Banner Content */}
      <div className="relative z-20 mx-auto max-w-7xl">
        <h1 className="mt-5 max-w-3xl font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
          {banner?.title || ""}
        </h1>

        <div
          className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg"
          dangerouslySetInnerHTML={{
            __html: banner?.content || "",
          }}
        />
      </div>
    </section>
  );
}
