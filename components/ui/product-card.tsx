"use client";

import Image from "next/image";

import { Product } from "@/types";
import { useRouter } from "next/navigation";

interface productCard {
  data: Product;
}

const ProductCard: React.FC<productCard> = ({ data }) => {
  const router = useRouter();
  const handleOnclick = () => {
    router.push(`/product/${data?.id}`);
  };

  return (
    <div
      onClick={handleOnclick}
      className="bg-white cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Images and actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt="Image"
          src={data?.images?.[0]?.url}
          fill
          className="aspect-square object-cover rounded-md"
        />
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-grey-500s">{data.category?.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <div className="font-semibold">₹{data?.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
