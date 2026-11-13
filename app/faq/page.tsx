import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { ArrowUpRight } from "lucide-react";
import { FaqSection } from "@/components/home/faq-section";
import  {Banner}  from "@/components/ui/banner";
import { ContactSection } from "@/components/home/contact-section";
interface LayoutData {
    seo: {
    meta_title: string;
    meta_key: string;
    meta_desc: string;
  };
    hero: {
    title: string;
    content: string;
    image:string;
  };
   
   faq: {
    title: string;
    content: string;
    detail:{
      title:string;
      description:string;
   }[];
  };
   cta: {
    title: string;
    content: string;
    image: string;
    contact:any;
  };
}

async function getSEO(): Promise<LayoutData> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/faq`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch SEO data");
  }

  return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await getSEO();

    return {
      title: data?.seo?.meta_title ?? "Home",
      description: data?.seo?.meta_desc ?? "",
      keywords: data?.seo?.meta_key ?? "",
    };
  } catch (error) {
    return {
      title: "Home",
    };
  }
}


export default async function FaqPage() {
  let data: LayoutData | null = null;

  try {
    data = await getSEO();
  } catch (error) {
    console.error("Error fetching homepage data:", error);
  }
  return (
    <main className="min-h-screen bg-[var(--color-cream)]">
      <Header/>
      <Banner banner={data?.hero} />

      <FaqSection faq={data?.faq} />

      {/* <section className="px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-md bg-white p-8 sm:p-10 md:flex-row md:items-center">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-[var(--color-ink)] sm:text-4xl">
              Still have a question?
            </h2>
            <p className="mt-2 text-sm leading-6 text-[var(--color-muted)] sm:text-base">
              Talk to our team about your plans and what support may be right
              for you.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[var(--color-ink)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-ink-soft)]"
          >
            Contact us
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section> */}
      <ContactSection cta={data?.cta}/>
      <Footer/>
    </main>
  );
}
