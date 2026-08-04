import StatsSection from "@/sections/Stats";
import AboutUsSection from "@/sections/AboutUs";
import TopProductsSection from "@/sections/TopProducts";
import WhyChooseUsSection from "@/sections/WhyChooseUs";
import GallerySection from "@/sections/Gallery";
import TestimonialsSection from "@/sections/Testimonials";
import ContactUsSection from "@/sections/ContactUs";
import { Hero } from "@/sections/Hero";
import FAQ from "@/sections/Faq";

export default function Home() {
  return (
   <>
   <Hero/>
   <StatsSection/>
   <AboutUsSection/>
   <TopProductsSection/>
   <WhyChooseUsSection/>
   <FAQ/>
   <GallerySection/>
   <TestimonialsSection/>
   <ContactUsSection/>
   </>
  );
}
