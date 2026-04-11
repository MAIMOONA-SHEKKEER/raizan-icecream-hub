import Container from "@/components/common/Container";
import PageHero from "@/components/common/PageHero";
import ProductCard from "@/components/ui/ProductCard";
import { flavors } from "@/data/flavors";

export default function MenuPage() {
  return (
    <>
      <PageHero
        badge="GLAZE Portfolio"
        title="Explore the Full GLAZE Product Range"
        description="GLAZE is more than a single ice cream. It is a modern frozen dessert brand with multiple product types designed for different tastes, moments, and customer needs."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {flavors.map((flavor) => (
              <ProductCard
                key={flavor.id}
                name={flavor.name}
                category={flavor.category}
                description={flavor.description}
                price={flavor.price}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
