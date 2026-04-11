import Image from "next/image";

type ProductCardProps = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
};

const ProductCard = ({
  id,
  name,
  category,
  description,
  price,
}: ProductCardProps) => {
  return (
    <div className="group rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
      <div className="mb-4 flex h-32 w-full items-center justify-center rounded-md bg-gradient-to-br from-pink-100 to-orange-100">
        <div className="text-center">
          <p className="text-sm font-medium text-gray-600">{category}</p>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-pink-600">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
