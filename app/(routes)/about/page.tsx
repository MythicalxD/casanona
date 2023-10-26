import { getAboutUs } from "@/actions/get-about-us";
import Footer from "@/components/footer";
import HomeNav from "@/components/home-nav";
import HomeNavBase from "@/components/home-nav-base";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const AboutPage = async () => {
  const aboutUs = await getAboutUs();

  return (
    <div>
      <HomeNavBase />
      <div className="py-8 md:px-16 sm:px-8 px-4 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-4">About Us</h1>
        <ReactMarkdown>{aboutUs?.data.attributes.data}</ReactMarkdown>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
