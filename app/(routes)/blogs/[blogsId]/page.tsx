import { getBlogs } from "@/actions/get-blogs";
import BlogPost from "@/components/BlogPost";
import BlogList from "@/components/blogsList";
import Footer from "@/components/footer";
import HomeNav from "@/components/home-nav";

import "./new.css";
import HomeNavBase from "@/components/home-nav-base";

interface BlogsProps {
  params: {
    blogsId: string;
  };
}

const blogs: React.FC<BlogsProps> = async ({ params }) => {
  const blogs = await getBlogs(params.blogsId);
  const blogsList = await getBlogs("");

  return (
    <div className="bg-[#F8FAFB]">
      <HomeNavBase />
      <div className="container mx-auto p-6 max-w-[1100px]">
        {params.blogsId === "all" ? null : (
          <BlogPost
            title={blogs?.data.attributes.title}
            content={blogs?.data.attributes.content}
            image={blogs?.data.attributes.image.data[0].attributes}
            updatedAt={blogs?.data.attributes.updatedAt}
          />
        )}

        <h2 className="md:text-[100px] text-[30px] font-normal mt-8 mb-8 text-black">
          CasaNona Blogs
        </h2>
        <BlogList blogPosts={blogsList.data} cardStyle={"default"} />
      </div>
      <Footer />
    </div>
  );
};

export default blogs;
