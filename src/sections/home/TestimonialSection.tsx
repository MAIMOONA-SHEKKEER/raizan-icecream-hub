import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

const TestimonialSection = () => {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          badge="Testimonials"
          title="What People Are Saying About Raizan"
          description="Early reactions to our brand direction and first signature release, GLAZE."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              name={item.name}
              role={item.role}
              quote={item.quote}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;
