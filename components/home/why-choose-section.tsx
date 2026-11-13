import { SectionBadge } from "@/components/ui/section-badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface AboutData{
    title: string;
    content: string;
    image:string;
    detail:{
      title:string;
      option?:string;
      icon?:string;
      description:string;
   }[];
}
export function WhyChooseSection({why}:{why?:AboutData}) {
  return (
    <section className="bg-[var(--color-gold-pale)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal delay={0.05} direction="up" className="max-w-4xl">
          <SectionBadge label={why?.title ?? ""} theme="light" />

          <div className="mt-5 font-serif text-5xl font-semibold leading-[0.94] tracking-[-0.035em] text-neutral-950 sm:text-6xl lg:text-7xl" dangerouslySetInnerHTML={{__html:why?.content ??""
          }} />
        </ScrollReveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {why?.detail.map((item, idx) => (
            <ScrollReveal
              key={idx}
              delay={0.1 + idx * 0.08}
              direction="up"
              distance={20}
            >
              <div className="h-full rounded-md bg-white p-7 transition-colors hover:bg-neutral-50 flex flex-col justify-between">
                <div>
                  <span className="font-sans text-4xl font-bold tracking-tight text-[#b87d3b]">
                   <span>{String(idx + 1).padStart(2, "0")}</span>
                  </span>

                  <h3 className="mt-10 text-xl font-bold tracking-tight text-neutral-950">
                    {item.title}
                  </h3>

                  <div className="mt-3 text-sm font-medium leading-relaxed text-neutral-800" dangerouslySetInnerHTML={{__html:item.description ?? ""}} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
