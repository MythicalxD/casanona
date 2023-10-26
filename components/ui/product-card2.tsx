"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";
import { ShoppingCartIcon } from "lucide-react";
import { API_URL } from "../../utils/urls";

const ProductCard2 = (data: any) => {
  const router = useRouter();
  const handleOnclick = () => {
    router.push(`/product/${data?.data.id}`);
  };

  const MarqueeCard = (data: any) => {
    const maxLength = 20; // Set the maximum length for the text

    const truncatedText =
      data.data.data.attributes.name.length > maxLength
        ? data.data.data.attributes.name.substring(0, maxLength) + "..."
        : data.data.data.attributes.name;

    return (
      <div className="w-[200px] h-[26px] left-[15px] top-[174px] absolute overflow-hidden">
        <div className="truncate" style={{ maxWidth: "100%" }}>
          {truncatedText}
        </div>
      </div>
    );
  };

  return (
    <div
      onClick={handleOnclick}
      className="bg-white cursor-pointer"
      id={data.data.id}
    >
      <div className="w-[200px] h-[241px] relative">
        <div className="w-[200px] h-[185px] left-0 top-[56px] absolute bg-white rounded-[20px] shadow-lg" />
        <div className="w-[172px] h-40 left-[15px] top-0 absolute bg-neutral-100 rounded-[20px] aspect-square shadow-lg">
          <Image
            fill
            alt="Image"
            src={`${API_URL}${data.data.attributes.images.data[0].attributes.url}`}
            className="aspect-square object-cover rounded-md"
          />
        </div>
        <div className="w-[30px] h-[30px] left-[139px] top-[12px] absolute bg-rose-500 rounded-full cursor-pointer" />
        {/* marque */}
        <MarqueeCard data={data} />

        <div className="w-full h-[19px] left-[15px] top-[213px] absolute text-black text-base font-semibold">
          ₹{data.data.attributes?.price}
        </div>
        <div className="left-[155px] top-[213px] absolute text-black text-base font-semibold">
          4.8
        </div>
        <div className="w-full h-[26px] left-[15px] top-[195px] absolute text-zinc-600 text-[11px] font-normal">
          {data.data.attributes.category.data.attributes.name}
        </div>
        <Image
          alt="Image"
          src="/star.png"
          width="1"
          height="1"
          className="left-[135px] top-[216px] absolute aspect-square object-cover rounded-md h-4 w-4"
          unoptimized
        />
        <ShoppingCartIcon className="h-4 w-4 text-white absolute left-[146px] top-[19px]" />
      </div>
    </div>
  );
};

export default ProductCard2;
