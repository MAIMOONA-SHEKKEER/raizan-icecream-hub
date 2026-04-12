"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ProductCardProps = {
  slug: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  flavorsAvailable?: string[];
};

const ProductCard = ({
  slug,
  name,
  category,
  description,
  price,
  image,
  flavorsAvailable = [],
}: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-sm transition duration-300 hover:shadow-xl"
    >
      <div className="relative h-56 w-full bg-pink-50">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>

      <div className="p-6">
        <div className="mb-4 flex items-start justify-between gap-3">
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
            {category}
          </span>
          <span className="text-base font-semibold text-pink-600">{price}</span>
        </div>

        <h3 className="text-xl font-bold text-zinc-900">{name}</h3>
        <p className="mt-3 text-sm leading-6 text-zinc-600">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {flavorsAvailable.slice(0, 3).map((flavor) => (
            <span
              key={flavor}
              className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-700"
            >
              {flavor}
            </span>
          ))}
        </div>

        <Link
          href={`/menu/${slug}`}
          className="mt-6 inline-flex rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-pink-600"
        >
          View Full Details
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
