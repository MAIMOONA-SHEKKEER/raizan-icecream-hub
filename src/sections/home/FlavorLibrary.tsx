import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { allPossibleFlavors } from "@/data/flavors";

const FlavorLibrary = () => {
  return (
    <section className="py-20 bg-pink-50">
      <Container>
        <SectionTitle
          badge="Flavor Library"
          title="Explore the Full GLAZE Flavor Universe"
          description="GLAZE can expand across classic, premium, fruity, festive, and modern dessert-inspired flavors."
          align="center"
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {allPossibleFlavors.map((flavor) => (
            <span
              key={flavor}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm"
            >
              {flavor}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FlavorLibrary;
