import type { Metadata } from "next";

import { ServicesListingHero } from "@/components/services/services-listing-hero";
import { ServicesListingZigzag } from "@/components/services/services-listing-zigzag";
import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";

interface ProductResponse {
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
  ser: {
    title: string;
    content: string;
    image:string;
    sub:{
      title:string;
      description:string;
   }[];
  }[];

 cta: {
    title: string;
    content: string;
    image: string;
    contact:any;
  };
}

async function getSEO(): Promise<ProductResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/service`, {
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


export default async function ServicesPage() {
    let data: ProductResponse | null = null;

  try {
    data = await getSEO();
  } catch (error) {
    console.error("Error fetching homepage data:", error);
  }
  return (
    <main className="overflow-hidden">
      <Header />
      <ServicesListingHero banner={data?.hero} />

      {/* Dynamic Services Listing */}
      <ServicesListingZigzag services={data?.ser || []} />
      <Footer />
    </main>
  );
}
