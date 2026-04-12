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
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-sm"
    >
      <div className="relative h-44 w-full bg-pink-50 sm:h-52">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
        />
      </div>

      <div className="p-4 sm:p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-[11px] font-medium text-zinc-600 sm:text-xs">
            {category}
          </span>
          <span className="text-sm font-semibold text-pink-600 sm:text-base">
            {price}
          </span>
        </div>

        <h3 className="text-lg font-bold text-zinc-900 sm:text-xl">{name}</h3>

        <p className="mt-2 text-sm leading-6 text-zinc-600">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {flavorsAvailable.slice(0, 3).map((flavor) => (
            <span
              key={flavor}
              className="rounded-full bg-pink-50 px-3 py-1 text-[11px] font-medium text-pink-700 sm:text-xs"
            >
              {flavor}
            </span>
          ))}
        </div>

        <Link
          href={`/menu/${slug}`}
          className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-pink-600 sm:w-auto"
        >
          View Full Details
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
