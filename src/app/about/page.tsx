import Container from "@/components/common/Container";
import PageHero from "@/components/common/PageHero";

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Raizan"
        title="The Startup Behind the GLAZE Dessert Brand"
        description="Raizan Ice Cream Hub is building a modern frozen dessert company designed around brand identity, product variety, and scalable customer appeal."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900">Our Vision</h2>
              <p className="mt-4 text-base leading-8 text-zinc-600">
                We are building more than a single dessert item. Raizan is
                creating a startup-led frozen dessert ecosystem where one strong
                brand can expand into multiple product categories.
              </p>
              <p className="mt-4 text-base leading-8 text-zinc-600">
                That brand is{" "}
                <span className="font-semibold text-pink-600">GLAZE</span>. It
                starts with premium ice cream experiences and grows into candy,
                choco bars, syrups, donuts, family packs, and many more dessert
                formats.
              </p>
            </div>

            <div className="rounded-[2rem] bg-pink-50 p-8">
              <h3 className="text-2xl font-bold text-zinc-900">
                Brand Direction
              </h3>

              <ul className="mt-6 space-y-4 text-zinc-600">
                <li>• Raizan as the startup company</li>
                <li>• GLAZE as the umbrella dessert brand</li>
                <li>• Multi-format product strategy</li>
                <li>• Premium, modern, scalable identity</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
