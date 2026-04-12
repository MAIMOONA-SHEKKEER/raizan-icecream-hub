import Button from "@/components/common/Button";
import Container from "@/components/common/Container";

const CTASection = () => {
  return (
    <section className="pb-20">
      <Container>
        <div className="rounded-[2rem] bg-zinc-900 px-6 py-14 text-center text-white md:px-12">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-pink-200">
            GLAZE by Raizan
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Visit Us & Experience GLAZE
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-300 md:text-base">
            Come and explore our dessert experience in person. Discover GLAZE
            products, taste premium flavors, and connect with the Raizan brand.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/menu">View Products</Button>
            <Button
              href="/contact"
              variant="secondary"
              className="text-white border-white hover:text-pink-200"
            >
              Contact Us
            </Button>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1775926146439!6m8!1m7!1s1r5P5nFq24q8DXMPULRY0Q!2m2!1d12.42884263785744!2d75.07200143456504!3f304.2537634083521!4f1.3328190168839171!5f0.7820865974627469"
              width="1200"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
