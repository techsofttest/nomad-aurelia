import type { Metadata } from "next";
import { ServicesListingHero } from "@/components/services/services-listing-hero";
import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { AboutSection } from "@/components/home/about-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { ConsultationSection } from "@/components/home/consultation-section";
import { ContactSection } from "@/components/home/contact-section";
import { Banner }  from "@/components/ui/banner";

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

 
   about: {
    title: string;
    content: string;
    image:string;
      detail:{
      title:string;
      icon:string;
      description:string;
   }[];
  };
    tag: {
    title: string;
    content: string;
    image:string;
      detail:{
      title:string;
      option:string;
      description:string;
   }[];
  };
   why: {
    title: string;
    content: string;
    image:string;
    detail:{
      title:string;
      icon:string;
      description:string;
   }[];
  };
  con: {
    title: string;
    content: string;
    image:string;
    detail:{
      title:string;
      icon:string;
      description:string;
   }[];
  };

 cta: {
    title: string;
    content: string;
    image: string;
  };
}

async function getSEO(): Promise<ProductResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/about`, {
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
      <Banner banner={data?.hero} />
      <AboutSection about={data?.about}  tag={data?.tag} />
      <WhyChooseSection why={data?.why} />
      <ConsultationSection con={data?.con} />
      <ContactSection cta={data?.cta}/>
      <Footer />
    </main>
  );
}
