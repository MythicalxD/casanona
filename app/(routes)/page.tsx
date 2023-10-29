import { getArrivals } from "@/actions/get-arrivals";
import { getBillboards } from "@/actions/get-billboard";
import { getCategories } from "@/actions/get-categories";
import { getFeatured } from "@/actions/get-featured";
import Footer from "@/components/footer";
import NewsLetterForm from "@/components/news-letter-form";
import Container from "@/components/ui/container";
import { API_URL_IMAGE } from "@/utils/urls";
import { Katibeh } from "next/font/google";
import Link from "next/link";
import Products from "@/components/products";
import Blogs from "@/components/blogs-home";
import { getBlogs } from "@/actions/get-blogs";
import TestimonialPage from "@/components/testimonial";
import { getTestimonial } from "@/actions/get-testimonials";
import { getBanner } from "@/actions/get-banners";
import HomeNavBase from "@/components/home-nav";

const newFont = Katibeh({ weight: "400", subsets: ["latin"] });

export default async function HomePage() {
  const bg = await getBillboards("1");

  // get Category images
  const categoryImage1 = await getBillboards("5");
  const categoryImage2 = await getBillboards("6");
  const categoryImage3 = await getBillboards("7");

  const newsletterImage = await getBillboards("8");

  const leftImage = await getBillboards("10");
  const rightImage = await getBillboards("11");

  // Get category
  const category = await getCategories();

  // Get suggested Products
  const suggestedProducts = await getFeatured();

  //Get blogs
  const blogs = await getBlogs("");

  // get testimonials
  const testimonial = await getTestimonial();

  // get Banner
  const banner = await getBanner();

  return (
    <Container>
      <div className="min-h-screen flex flex-col">
        {/* Navigation */}
        <HomeNavBase />

        <div className="flex md:h-[40vh] h-[100px] w-[0px] absolute md:top-[10px] top-[140px] left-[10px] z-10 md:text-[120px] text-[40px] font-bold transform rotate-90">
          <h2 className="transform text-stone-300">ELEGANT</h2>
        </div>

        <div className="absolute top-0 md:right-[200px] right-[100px] z-20">
          <img
            src="./lamps.png"
            className="md:h-[330px] md:w-[200px] h-[200px] w-[100px]"
          />
        </div>

        {/* Section 1 | Landing page */}
        <div
          className={`flex md:w-full h-full justify-center items-center md:mt-0 ${newFont.className}`}
        >
          <div className="w-full h-[110vh] bg-gradient-to-r from-[#fff5f5] to-[#f1fff9] ">
            <Link href="/catalogue">
              <div className="flex md:flex-row flex-col md:mt-0 mt-[130px] items-center justify-center transform transition-transform hover:scale-105 md:absolute top-[50px] left-[200px]">
                <div className="md:w-[450px] md:h-[450px] w-[300px] h-[300px] overflow-hidden">
                  <img
                    src={leftImage}
                    alt="Custom Furniture"
                    className="w-full"
                  />
                </div>
                <div className="mt-5 text-center">
                  <div className="flex ml-4 z-10 md:text-[120px] text-[40px] font-bold">
                    <h2 className="transform text-[#c3dfda]">CUSTOM BUILD</h2>
                  </div>
                </div>
              </div>
            </Link>

            {/* Section for the right side */}
            <Link href="/product/1">
              <div className="flex md:flex-row flex-col md:mx-0 mx-10 items-center justify-center transform transition-transform hover:scale-105 md:absolute md:top-[290px] top-[260px] right-[100px]">
                <div className="md:mt-5 mt-0 text-center">
                  <div className="flex ml-4 md:mt-16 mt-4 z-10 md:text-[120px] text-[40px] font-bold">
                    <h2 className="transform text-[#ead2d8]">READY TO BUY</h2>
                  </div>
                </div>
                <div className="md:w-[450px] md:h-[450px] w-[300px] h-[300px] overflow-hidden">
                  <img
                    src={rightImage}
                    alt="Custom Furniture"
                    className="w-full"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Section 2 | Mini navigation */}
        <div className="relative h-[70vh]">
          <div className="relative h-[70vh]">
            <img
              className="w-screen h-full object-cover cursor-pointer"
              src={bg}
              alt="Background Image"
            />

            <Link href="/category/all/1">
              <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                <div className="w-full h-full bg-black transition-opacity delay-150 bg-gradient-to-l from-black to-transparent bg-opacity-50 text-white text-4xl font-bold flex items-center justify-end">
                  <p className="md:flex justify-center items-center content-center mr-[140px] hidden">
                    BROWSE OUR HUGE <br /> COLLECTION
                  </p>
                  <img
                    src="./arrow_right.png"
                    alt="Arrow Right"
                    className="md:w-[70px] md:h-[70px] w-[40px] h-[40px] z-10 md:mr-[160px] mr-[50px]"
                  />
                </div>
              </div>
            </Link>

            {/* ... Rest of your code */}
          </div>
          <div className="lg:bg-[#111111] bg-[#11111175] h-[70vh] lg:w-[400px] w-full absolute left-0 top-0 flex flex-col justify-end mb-8">
            {/* Card content */}
            <div className="text-white text-xs font-normal tracking-[5.82px] mt-12 ml-12">
              C A S A <br />N 0 N<br />A 7{" "}
            </div>
            {/* Text */}
            <div className="w-[258px] ml-12 mt-8">
              <span className="text-white text-[32px] font-bold hover:text-lime-300 cursor-pointer">
                CREATIVE <br />
                AND{" "}
              </span>
              <span className="text-lime-300 text-[32px] font-bold">
                ELEGANT
              </span>
              <span className="text-white text-[32px] font-bold hover:text-lime-300 cursor-pointer">
                {" "}
                <br />
                FURNITURE
              </span>
            </div>
            <div className="flex-1"></div>{" "}
            {/* Empty space to push links to the bottom */}
            {/* Links */}
            <div className="flex w-full mb-12 pl-12 pr-12 items-end justify-end">
              <div className="flex flex-col flex-grow">
                <Link href="/" passHref>
                  <div className="lg:text-zinc-600 text-[#cdcdcd] text-xl font-bold hover:text-3xl cursor-pointer hover:text-white">
                    HOME
                  </div>
                </Link>
                <Link href="/blogs/all" passHref>
                  <div className="lg:text-zinc-600 text-[#cdcdcd] text-xl font-bold hover:text-3xl cursor-pointer hover:text-white">
                    BLOGS
                  </div>
                </Link>
                <Link href="/category/all/1" passHref>
                  <div className="text-lime-300 text-xl font-bold hover:text-3xl cursor-pointer hover:text-lime-300">
                    SHOP
                  </div>
                </Link>
                <Link href="/custom-order" passHref>
                  <div className="lg:text-zinc-600 text-[#cdcdcd] text-xl font-bold hover:text-3xl cursor-pointer hover:text-white">
                    CUSTOM
                  </div>
                </Link>
                <Link href="/about" passHref>
                  <div className="lg:text-zinc-600 text-[#cdcdcd] text-xl font-bold hover:text-3xl cursor-pointer hover:text-white">
                    ABOUT US
                  </div>
                </Link>
                <Link href="/start-project" passHref>
                  <div className="lg:text-zinc-600 text-[#cdcdcd] text-xl font-bold hover:text-3xl cursor-pointer hover:text-white">
                    PROJECT
                  </div>
                </Link>
              </div>

              <div className="w-[52px] h-[83.59px] relative mb-1">
                <div className="left-0 top-0 absolute lg:text-zinc-500 text-white text-5xl font-normal tracking-[4.56px]">
                  01
                </div>
                <div className="w-[52px] h-[6.59px] left-0 top-[77px] absolute">
                  <div className="w-[27.83px] h-[6.59px] left-0 top-0 absolute bg-stone-300 rounded-xl" />
                  <div className="w-[6.59px] h-[6.59px] left-[29.29px] top-0 absolute bg-neutral-400 rounded-xl" />
                  <div className="w-[6.59px] h-[6.59px] left-[37.35px] top-0 absolute bg-neutral-400 rounded-xl" />
                  <div className="w-[6.59px] h-[6.59px] left-[45.41px] top-0 absolute bg-neutral-400 rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 7 | Making product video */}
        {banner.attributes.isVisible ? (
          <div className="flex w-full h-full justify-center items-center">
            <img
              src={`${API_URL_IMAGE}${banner.attributes.homePageBanner.data.attributes.url}`}
              alt={banner.attributes.homePageBanner.data.attributes.name}
              className="w-full h-[100vh] object-cover"
            />
          </div>
        ) : null}

        {/* Banner */}

        {/* Section 3 | Category page */}
        <div className="flex flex-col w-full h-full items-start justify-start pt-8 mb-[30px]">
          <div className="w-full flex justify-center items-center md:px-[100px] px-[15px] md:flex-row flex-col">
            <div className="md:w-[303px] w-full md:h-[151px] relative">
              <div className="left-0 top-0 absolute text-center text-black md:text-2xl text-xl font-normal">
                Categories
              </div>
              <div
                className={`left-0 md:top-[45px] top-[30px] absolute text-black md:text-[64px] text-[32px] font-normal md:leading-[52.80px] leading-[30px] mt-2 ${newFont.className} `}
              >
                CHOOSE YOUR CATEGORY
              </div>
            </div>
            <div className="flex flex-grow"></div>
            <div className="md:w-[609px] text-justify text-neutral-600 md:text-xl text-base font-medium leading-[27px] md:mt-[40px] mt-[70px]">
              We&apos;re here to get closer to every customer&apos;s daily life
              to make a sense of beauty through urban-style furniture and home
              décor. We create all sorts of items like sofas, tables, beds, and
              more.
            </div>
          </div>
          {/* Images Section */}
          <div className="flex xl:flex-row flex-col w-full">
            <div className="md:w-[765px] md:h-[358.05px] relative ml-[30px] mt-[30px] flex cursor-pointer">
              <Link href="/subcategory/1/1">
                <img
                  className="md:w-[244.45px] md:h-[356.61px] w-[110px] h-[160px] left-0 top-[1.44px] md:absolute transition-transform transform hover:scale-105 hover:rotate-3"
                  src={categoryImage1}
                />
              </Link>
              <Link href="/subcategory/2/1">
                <img
                  className="md:w-[244.45px] md:h-[356.61px] w-[110px] h-[160px] md:left-[257.39px] top-0 md:absolute transition-transform transform hover:scale-105 hover:rotate-3"
                  src={categoryImage2}
                />
              </Link>
              <Link href="/subcategory/3/1">
                <img
                  className="md:w-[244.45px] md:h-[356.61px] w-[110px] h-[160px] left-[520.55px] top-[1.44px] md:absolute transition-transform transform hover:scale-105 hover:rotate-3"
                  src={categoryImage3}
                />
              </Link>
            </div>

            <div className="flex-grow md:flex hidden"></div>
            <div className="flex flex-col mr-[30px] mt-[30px]">
              {category.data.slice(0, 6).map((category: any) => (
                <Link
                  id={category.id}
                  href={`/subcategory/${category.id}/1`}
                  key={category.id}
                >
                  <div className="md:w-[390.76px] w-screen h-[54.50px] relative cursor-pointer group">
                    <img
                      className="w-[25px] h-[25px] left-[17.68px] top-[45.49px] absolute origin-top-left rotate-[-135deg] group-hover:hidden block"
                      src="./arrow_grey.png"
                    />
                    <img
                      className="w-[25px] h-[25px] left-[17.68px] top-[45.49px] absolute origin-top-left rotate-[-135deg] group-hover:block hidden"
                      src="./arrow_orange.png"
                    />
                    <div className="right-2 top-[5.50px] absolute text-zinc-600 text-4xl font-normal leading-[48.60px] group-hover:text-black group-hover:font-bold">
                      {category.attributes.name}
                    </div>
                    <div className="md:w-[388px] w-screen group-hover:h-[2px] h-[0.5px] left-[1.76px] top-[52.50px] absolute bg-zinc-800" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Section 8 | Products */}
        <div className="flex w-full min-h-screen justify-start items-start">
          <div className="h-full w-full flex justify-center items-center flex-col">
            {/* Initial divider */}
            <div className="flex w-full h-[2px] bg-black mt-[30px]" />
            <p className="xl:text-[100px] lg:text-[80px] md:text-[50px] text-[30px]">
              FEATURED PRODUCTS
            </p>
            <div className="flex w-full h-[2px] bg-black mb-[30px] mt-[10px]" />

            {/* Products */}
            <Products suggestedProducts={suggestedProducts} />
          </div>
        </div>

        {/* Section 9 */}
        {/* <div className="flex w-full min-h-screen">
          <ContactForm bg={formImage} />
        </div> */}

        {/* Section 7 | Making product video */}
        {/* <div className="flex w-full min-h-screen justify-center items-center">
          <div className="text-black xl:text-[160px] font-normal xl:ml-10 md:ml-4">
            MAKING PRODUCT
          </div>
        </div> */}

        {/* Section 7 | Blogs */}
        <div className="flex w-full h-full">
          <div className="h-full w-full flex justify-center items-center md:flex-row flex-col bg-gray-100 pt-8">
            {/* Initial divider */}
            <p className="xl:text-[100px] font-extrabold text-zinc-400 md:leading-[90px] md:mb-0 mb-12 md:mt-0 mt-8 lg:text-[80px] md:text-[50px] text-[40px] max-w-[300px] leading-16 md:ml-12 ml-4 md:mr-[200px]">
              BLOG POSTS
            </p>
            {/* Products */}
            <Blogs suggestedProducts={blogs} />
          </div>
        </div>

        {/* Section 10 */}
        <div className="flex w-full h-full">
          <div className="relative">
            <div className="flex bg-[#00000095] absolute w-screen h-full z-10"></div>
            <img
              src={newsletterImage}
              alt="Newsletter image"
              className="w-screen h-[400px] object-cover"
            />
            <div className="absolute z-10 top-0 flex flex-col justify-center items-center w-screen h-full">
              <h2 className="text-white md:text-4xl text-xl m-3 lg:max-w-[1000px] text-center">
                Join our newsletter and never miss a beat! Subscribe now to stay
                updated with the latest news, offers, and trends.
              </h2>
              <NewsLetterForm />
            </div>
          </div>
        </div>

        {/* Section 8 | Testimonials */}
        <div className="flex w-full h-full md:p-8 md:justify-center md:items-center">
          <div className="flex md:mt-[50px] mt-[10px] md:justify-center md:items-center flex-col md:ml-[10px] relative">
            <h1 className="lg:text-[100px] font-extrabold text-zinc-400 md:text-[50px] text-[40px] z-10 md:mt-0 mt-6 md:ml-0 text-center">
              CUSTOMER REVIEWS
            </h1>
            <div className="flex md:ml-[50px] md:mr-[10px]">
              <TestimonialPage data={testimonial} />
            </div>
          </div>
        </div>

        {/* Section 11*/}
        {/* <div className="flex w-full min-h-screen bg-green-300 justify-center items-center">
          <div className="text-black xl:text-[160px] font-normal xl:ml-10 md:ml-4">
            AR VR
          </div>
        </div> */}
      </div>

      <div className="w-full">
        <Footer />
      </div>
    </Container>
  );
}
