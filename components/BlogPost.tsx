// components/BlogPost.tsx
import { API_URL, API_URL_IMAGE } from "@/utils/urls";
import React from "react";
import ReactMarkdown from "react-markdown";

interface BlogPostProps {
  title: string;
  content: string;
  updatedAt: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  content,
  updatedAt,
  image,
}) => {
  const date = new Date(updatedAt);
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();

  return (
    <div className="blog-post">
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      <p className="text-gray-400 mt-1 mb-1 text-lg">
        Last updated: {formattedDate} {formattedTime}
      </p>
      <img src={`${API_URL_IMAGE}${image.url}`} alt={title} className="mb-4" />
      <div className="blogContent mt-4">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;
