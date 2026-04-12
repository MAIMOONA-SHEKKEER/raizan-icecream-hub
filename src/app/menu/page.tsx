import Container from "@/components/common/Container";
import PageHero from "@/components/common/PageHero";
import ProductCard from "@/components/ui/ProductCard";
import { flavors } from "@/data/flavors";
import MotionSection from "@/components/common/MotionSection";

export default function MenuPage() {
  return (
    <>
      <MotionSection>
        <PageHero
          badge="GLAZE Portfolio"
          title="Explore the Full GLAZE Product Range"
          description="GLAZE is more than a single ice cream. It is a modern frozen dessert brand with multiple product types designed for different tastes, moments, and customer needs."
        />
      </MotionSection>

      <MotionSection delay={0.1}>
        <section className="py-20">
          <Container>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {flavors.map((product) => (
                <ProductCard
                  key={product.id}
                  slug={product.slug}
                  name={product.name}
                  category={product.category}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                  flavorsAvailable={product.flavorsAvailable}
                />
              ))}
            </div>
          </Container>
        </section>
      </MotionSection>
    </>
  );
}
