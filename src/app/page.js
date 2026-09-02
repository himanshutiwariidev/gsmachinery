import StatsSection from "@/sections/Stats";
import AboutUsSection from "@/sections/AboutUs";
import WhatIsPetBottleMachineSection from "@/sections/WhatIsPetBottleMachine";
import TopProductsSection from "@/sections/TopProducts";
import WhyChooseUsSection from "@/sections/WhyChooseUs";
import HowToChooseSection from "@/sections/HowToChoose";
import WhyTrustUsSection from "@/sections/WhyTrustUs";
import GallerySection from "@/sections/Gallery";
import TestimonialsSection from "@/sections/Testimonials";
import ContactUsSection from "@/sections/ContactUs";
import { Hero } from "@/sections/Hero";
import FAQ from "@/sections/Faq";
import WhatsAppButton from "@/components/FloatingButton";

export default function Home() {
  return (
   <>
   <Hero/>
   <StatsSection/>
   <AboutUsSection/>
   <WhatIsPetBottleMachineSection/>
   <TopProductsSection/>
   <WhyChooseUsSection/>
   <HowToChooseSection/>
   <WhyTrustUsSection/>
   <FAQ/>
   <GallerySection/>
   <TestimonialsSection/>
   <ContactUsSection/>
   <WhatsAppButton/>
   </>
  );
}
