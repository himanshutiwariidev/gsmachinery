import StatsSection from "@/sections/Stats";
import TopProductsSection from "@/sections/TopProducts";
import WhyChooseUsSection from "@/sections/WhyChooseUs";
import GallerySection from "@/sections/Gallery";
import TestimonialsSection from "@/sections/Testimonials";
import { Hero } from "@/sections/Hero";

export default function Home() {
  return (
   <>
   <Hero/>
   <StatsSection/>
   <TopProductsSection/>
   <WhyChooseUsSection/>
   <GallerySection/>
   <TestimonialsSection/>
   </>
  );
}
