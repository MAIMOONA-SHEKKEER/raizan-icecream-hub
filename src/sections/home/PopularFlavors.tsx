import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import ProductCard from "@/components/ui/ProductCard";
import { flavors } from "@/data/flavors";

const PopularFlavors = () => {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          badge="GLAZE Product Ecosystem"
          title="One Brand, Many Frozen Dessert Experiences"
          description="GLAZE is built as a scalable product line with multiple dessert formats."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {flavors?.slice(0, 8).map((product) => (
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
  );
};

export default PopularFlavors;
