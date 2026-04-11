import HeroSection from "@/sections/home/HeroSection";
import PopularFlavors from "@/sections/home/PopularFlavors";
import WhyChooseUs from "@/sections/home/WhyChooseUs";
import TestimonialSection from "@/sections/home/TestimonialSection";
import CTASection from "@/sections/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PopularFlavors />
      <WhyChooseUs />
      <TestimonialSection />
      <CTASection />
    </>
  );
}
