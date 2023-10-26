"use client";
import { API_URL, API_URL_IMAGE } from "@/utils/urls";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProductProps {
  suggestedProducts: [];
}
const Products: React.FC<ProductProps> = ({ suggestedProducts }) => {
  // Create a function to truncate text to a specified number of words
  function truncateText(text: string, maxWords: number) {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  }
  return (
    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 mb-[30px]">
      {suggestedProducts
        .slice(0, 10)
        .map((item: { id: string | undefined; attributes: any; data: any }) => (
          <Link id={item.id} href={`/product/${item.id}`} key={item.id}>
            <motion.div
              className="relative rounded-lg overflow-hidden group"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <div
                  className="w-[250px] h-[350px] bg-center bg-cover transition-opacity group-hover:opacity-80"
                  style={{
                    backgroundImage: `url('${API_URL_IMAGE}${item.attributes.images.data[0].attributes.url}')`,
                  }}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity" />
                <div className="absolute inset-0 p-6 text-justify flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-semibold mb-2">
                    {truncateText(item.attributes.description, 20)}
                  </p>
                  <div className="flex items-center">
                    <img
                      alt="Rating Star"
                      src="./star.png"
                      className="w-4 h-4 mr-1"
                    />
                    <p>{item.attributes.rating}</p>
                  </div>
                </div>
              </div>
              {/* Name and price */}
              <div className="flex w-full mt-1">
                <p className="font-semibold text-black flex-grow">
                  {item.attributes.name}
                </p>
                <p className="text-zinc-800">{item.attributes.price}</p>
              </div>
              {/* Other description */}
              <div className="flex w-full justify-center items-center">
                <p className="text-black flex-grow">
                  {item.attributes.category.data.attributes.name}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
    </div>
  );
};

export default Products;
