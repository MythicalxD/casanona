// components/BlogList.tsx
import React from "react";
import BlogCard from "./blogCard";

interface BlogListProps {
  blogPosts: Array<{
    id: number;
    attributes: {
      title: string;
      content: string;
      updatedAt: string;
      image: {
        data: any;
        url: string;
        width: number;
        height: number;
      };
    };
  }>;
  cardStyle: "default" | "custom"; // Add card style prop
}

const BlogList: React.FC<BlogListProps> = ({ blogPosts, cardStyle }) => {
  return (
    <div className="grid gap-8 w-full justify-center items-center">
      {blogPosts.map((post) => (
        <BlogCard
          key={post?.id}
          title={post?.attributes.title}
          description={post?.attributes.content.substring(0, 250) + "..."}
          updatedAt={new Date(post?.attributes.updatedAt).toLocaleDateString()}
          image={post?.attributes.image.data[0].attributes}
          cardStyle={cardStyle}
          id={post?.id}
        />
      ))}
    </div>
  );
};

export default BlogList;
