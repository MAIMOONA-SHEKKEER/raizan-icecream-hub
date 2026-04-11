import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import FeatureCard from "@/components/ui/FeatureCard";
import { features } from "@/data/features";

const WhyChooseUs = () => {
  return (
    <section className="bg-pink-50 py-20">
      <Container>
        <SectionTitle
          badge="Why Choose Us"
          title="Built Like a Startup, Crafted Like a Premium Dessert Brand"
          description="Raizan Ice Cream Hub is designed to launch standout products, build emotional brand connection, and create a modern dessert experience customers remember."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
