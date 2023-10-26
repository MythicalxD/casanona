// components/BlogCard.tsx
import { API_URL, API_URL_IMAGE } from "@/utils/urls";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
  id: number;
  title: string;
  description: string;
  updatedAt: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  cardStyle: "default" | "custom"; // Add card style prop
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  description,
  updatedAt,
  image,
  cardStyle = "default", // Default to "default" card style
}) => {
  const cardClass = cardStyle === "custom" ? "custom-card" : "default-card";

  return (
    <div
      className={`blog-card hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105 shadow-xl max-w-[1000px] cursor-pointer ${cardClass}`}
    >
      <Link href={`/blogs/${id}`}>
        <div className="flex md:flex-row flex-col">
          <img
            src={`${API_URL_IMAGE}${image.url}`}
            alt={title}
            className="w-[250px] h-[250px] object-cover"
          />
          <div className="flex flex-col m-1 ml-4 p-6">
            <h2 className="text-[20px] font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 mb-2 text-[17px] leading-7">
              {description}
            </p>
            <div className="flex-grow"></div>
            <p className="text-gray-400 text-sm">Last updated: {updatedAt}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
