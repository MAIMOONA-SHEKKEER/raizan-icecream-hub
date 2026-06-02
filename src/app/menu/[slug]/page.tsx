import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/common/Container";
import { flavors } from "@/data/flavors";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetailsPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = flavors.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="py-16 md:py-20">
      <Container>
        <Link
          href="/menu"
          className="mb-8 inline-flex text-sm font-medium text-pink-600 hover:text-pink-700"
        >
          ← Back to Menu
        </Link>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative min-h-[350px] overflow-hidden rounded-[2rem] bg-pink-50 md:min-h-[500px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          <div>
            <span className="inline-block rounded-full bg-pink-100 px-4 py-1 text-sm font-medium text-pink-700">
              {product.category}
            </span>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl">
              {product.name}
            </h1>


            <p className="mt-6 text-base leading-8 text-zinc-600">
              {product.description}
            </p>

            <div className="mt-8">
              <h2 className="text-lg font-bold text-zinc-900">
                Available Flavors
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.flavorsAvailable.map((flavor) => (
                  <span
                    key={flavor}
                    className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700"
                  >
                    {flavor}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-pink-50 p-6">
              <h3 className="text-lg font-bold text-zinc-900">
                Interested in this product?
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                Contact Raizan Ice Cream Hub on WhatsApp to ask about ordering,
                partnerships, distribution, or product launch details.
              </p>

              <a
                href={`https://wa.me/917012420156?text=${encodeURIComponent(
                  `Hello Raizan Ice Cream Hub! I am interested in ${product.name}. Please share more details.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
