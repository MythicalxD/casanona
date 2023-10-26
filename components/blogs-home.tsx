"use client";
import { API_URL, API_URL_IMAGE } from "@/utils/urls";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";

interface ProductProps {
  suggestedProducts: any;
}
const Blogs: React.FC<ProductProps> = ({ suggestedProducts }) => {
  // Create a function to truncate text to a specified number of words
  function truncateText(text: string, maxWords: number) {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  }

  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-[30px] md:ml-8 xl:ml-0">
      {suggestedProducts.data.slice(0, 5).map(
        (item: {
          id: number;
          attributes: {
            image: { data: { attributes: { url: any } }[] };
            title:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | PromiseLikeOfReactNode
              | null
              | undefined;
            content: string;
          };
        }) => (
          <Link href={`/blogs/${item.id}`} key={item.id}>
            <motion.div
              className="relative rounded-lg overflow-hidden group"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <div
                  className="w-[250px] h-[300px] bg-center bg-cover transition-opacity group-hover:opacity-80"
                  style={{
                    backgroundImage: `url('${API_URL_IMAGE}${item.attributes.image.data[0].attributes.url}')`,
                  }}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-bold mb-2 text-lg">
                    {item.attributes.title}
                  </p>
                  <p className="font-semibold mb-2 text-sm text-zinc-300">
                    {truncateText(item.attributes.content, 20)}
                  </p>
                </div>
              </div>
            </motion.div>
          </Link>
        )
      )}
    </div>
  );
};

export default Blogs;
