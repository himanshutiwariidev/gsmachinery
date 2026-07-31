import StatsSection from "@/sections/Stats";
import AboutUsSection from "@/sections/AboutUs";
import TopProductsSection from "@/sections/TopProducts";
import WhyChooseUsSection from "@/sections/WhyChooseUs";
import FaqSection from "@/sections/Faq";
import GallerySection from "@/sections/Gallery";
import TestimonialsSection from "@/sections/Testimonials";
import ContactUsSection from "@/sections/ContactUs";
import { Hero } from "@/sections/Hero";

export default function Home() {
  return (
   <>
   <Hero/>
   <StatsSection/>
   <AboutUsSection/>
   <TopProductsSection/>
   <WhyChooseUsSection/>
   <FaqSection/>
   <GallerySection/>
   <TestimonialsSection/>
   <ContactUsSection/>
   </>
  );
}
