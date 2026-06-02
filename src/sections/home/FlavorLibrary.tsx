import Image from "next/image";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { allPossibleFlavors } from "@/data/flavors";

const FlavorLibrary = () => {
  return (
    <section className="bg-pink-50 py-20">
      <Container>
        <SectionTitle
          badge="Flavor Library"
          title="Explore the Full GLAZE Flavor Universe"
          description="Discover our collection of classic, fruity, premium, and specialty flavors."
          align="center"
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 ">
          {allPossibleFlavors.map((flavor) => (
            <div
              key={flavor.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-square">
                <Image
                  src={flavor.image}
                  alt={flavor.name}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-3 text-center">
                <h3 className="text-sm font-semibold text-zinc-800">
                  {flavor.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FlavorLibrary;