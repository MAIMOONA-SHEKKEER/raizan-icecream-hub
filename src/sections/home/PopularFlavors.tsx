import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import ProductCard from "@/components/ui/ProductCard";
import { flavors } from "@/data/flavors";

const PopularFlavors = () => {
  return (
    <section className="py-12 md:py-20">
      <Container>
        <SectionTitle
          badge="GLAZE Product Range"
          title="Explore Our Popular Products"
          description="From cups to choco bars, donuts, and family packs — GLAZE offers a wide range of frozen dessert experiences."
          align="center"
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
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
