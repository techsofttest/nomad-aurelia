import type { Metadata } from "next";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import {ContactPageData}  from "@/components/contact/ContactPage";
import  {Banner}  from "@/components/ui/banner";

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
    cta: {
    title: string;
    content: string;
  };
}

async function getSEO(): Promise<LayoutData> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/contact`, {
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

export default async function ContactPage() {
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
      <ContactPageData />
        

          <ContactInquiryForm cta={ data?.cta} />
      <Footer/>
    </main>
  );
}
