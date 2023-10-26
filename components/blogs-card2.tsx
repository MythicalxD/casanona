// components/BlogCard.tsx
import { API_URL } from "@/utils/urls";
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
      className={`blog-card hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105 shadow-xl p-4 rounded-lg border-2 border-zinc-200 cursor-pointer ${cardClass}`}
    >
      <Link href={`/blogs/${id}`}>
        <div className="flex">
          <img
            src={`${API_URL}${image.url}`}
            alt={title}
            className="mb-4 w-[150px] h-[150px] object-cover rounded-lg shadow-lg"
          />
          <div className="flex flex-col m-1 ml-4">
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 mb-2">{description}</p>
            <p className="text-gray-400 text-sm">Last updated: {updatedAt}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
