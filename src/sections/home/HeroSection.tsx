import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-orange-50 py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-pink-100 px-4 py-1 text-sm font-medium text-pink-700">
              Startup Dessert Brand
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
              Builds the Future of Frozen Desserts with GLAZE
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600 sm:text-lg">
              Raizan Ice Cream Hub is a modern startup building a scalable
              dessert brand. Under GLAZE, we offer a wide portfolio of products
              including ice cream cups, candy, choco bars, syrups, donuts, and
              family packs. Designed for both everyday consumers and large-scale
              demand, our products are perfectly suited for retail, events, and
              bulk distribution.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/menu">Explore GLAZE</Button>
              <Button href="/about" variant="secondary">
                Our Story
              </Button>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-3">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900">12+</h3>
                <p className="text-sm text-zinc-600">Product Formats</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-zinc-900">01</h3>
                <p className="text-sm text-zinc-600">Master Brand</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-zinc-900">∞</h3>
                <p className="text-sm text-zinc-600">Growth Potential</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="mx-auto flex min-h-[320px] max-w-[500px] items-center justify-center rounded-[2rem] bg-gradient-to-br from-pink-200 via-rose-100 to-orange-100 p-8 text-center shadow-2xl sm:min-h-[420px]">
              <div className="text-center">
                <Image
                  src="/images/hero/glaze-hero.jpeg"
                  alt="GLAZE Ice Cream"
                  width={420}
                  height={420}
                  priority
                  className="mx-auto max-w-full rounded-2xl object-contain"
                  style={{ height: "auto" }}
                />
              </div>
            </div>

            <div className="absolute -left-2 top-8 rounded-2xl bg-white px-4 py-3 shadow-lg sm:-left-4 sm:top-10">
              <p className="text-sm font-semibold text-zinc-900">
                Master Brand
              </p>
              <p className="text-sm text-pink-600">GLAZE</p>
            </div>

            <div className="absolute -right-2 bottom-8 rounded-2xl bg-white px-4 py-3 shadow-lg sm:-right-4 sm:bottom-10">
              <p className="text-sm font-semibold text-zinc-900">Built By</p>
              <p className="text-sm text-pink-600">Raizan Icecream Hub</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
