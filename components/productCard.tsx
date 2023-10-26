"use client";
// components/ProductCard.tsx
import React, { useState } from "react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-md bg-white select-none cursor-pointer transition-transform duration-300 hover:scale-105"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      style={{ width: "100%", maxWidth: "300px" }} // Adjust the max width as needed
    >
      <div className="aspect-w-3 aspect-h-4">
        <div
          className="bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${product.images[0].url})`,
            paddingBottom: "70%", // To maintain 3:4 aspect ratio
          }}
        ></div>
      </div>
      <div className="p-2">
        <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
        <p className="text-xs">
          {product.color.name}, {product.category.name}
        </p>
        <p
          className={`${
            isHovered
              ? "text-indigo-600 font-bold text-xl"
              : "text-indigo-600 text-lg"
          } mt-1`}
        >
          {product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
