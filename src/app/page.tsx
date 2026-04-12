import HeroSection from "@/sections/home/HeroSection";
import PopularFlavors from "@/sections/home/PopularFlavors";
import WhyChooseUs from "@/sections/home/WhyChooseUs";
import TestimonialSection from "@/sections/home/TestimonialSection";
import CTASection from "@/sections/home/CTASection";
import MotionSection from "@/components/common/MotionSection";
import FlavorLibrary from "@/sections/home/FlavorLibrary";

export default function HomePage() {
  return (
    <>
      <MotionSection>
        <HeroSection />
      </MotionSection>

      <MotionSection delay={0.1}>
        <PopularFlavors />
      </MotionSection>

      <MotionSection delay={0.15}>
        <WhyChooseUs />
      </MotionSection>

      <MotionSection delay={0.2}>
        <FlavorLibrary />
      </MotionSection>

      <MotionSection delay={0.25}>
        <TestimonialSection />
      </MotionSection>

      <MotionSection delay={0.3}>
        <CTASection />
      </MotionSection>
    </>
  );
}
