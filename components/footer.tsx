import { getCategories } from "@/actions/get-categories";
import { Facebook, Instagram, Twitter, YoutubeIcon } from "lucide-react";
import Link from "next/link";

const Footer = async () => {
  const category = await getCategories();
  return (
    <footer className="bg-[#e6e6e6] text-black">
      <div className="container mx-auto md:py-12 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <a href="/" className="ml-4 cursor-pointer block">
              <img className="w-[150px] h-[120px]" alt="logo" src="/logo.png" />
            </a>
            <p className="mt-0">Love creates boundless beauty.</p>
          </div>
          <div className="md:w-2/3 flex flex-wrap justify-center md:justify-end md:ml-[200px]">
            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <h3 className="text-xl font-semibold mb-2">Links</h3>
              <ul className="list-none">
                <Link href="/about">
                  <li className="mb-2">About Us</li>
                </Link>
                <Link href="/blogs/all">
                  <li className="mb-2">Blogs</li>
                </Link>
                <Link href="/form">
                  <li className="mb-2">Start a Project</li>
                </Link>
                <Link href="/category/all/1">
                  <li className="mb-2">Products</li>
                </Link>
              </ul>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 p-4">
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <ul className="list-none">
                <li className="mb-2">Email: khushbujain2602@gmail.com</li>
                <li className="mb-2">Phone: +91 9828645550/9713018234</li>
                <li className="mb-2">Monday-Saturday, 10:00AM-7:00PM</li>
                <li className="mb-2">Address: 123 Street, City</li>
                <ul className="list-none flex space-x-4 mt-4">
                  <li>
                    <a href="#">
                      <Facebook className="w-6 h-6 text-blue-500 hover:text-blue-700 transition duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Instagram className="w-6 h-6 text-pink-500 hover:text-pink-700 transition duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Twitter className="w-6 h-6 text-blue-400 hover:text-blue-600 transition duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <YoutubeIcon className="w-7 h-7 text-red-400 hover:red-blue-600 transition duration-300" />
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <h3 className="text-xl font-semibold mb-2">Wide Ranges</h3>
              <ul className="list-none">
                {category.data.slice(0, 6).map((category: any) => (
                  <Link
                    id={category.id}
                    href={`/subcategory/${category.id}/1`}
                    key={category.id}
                  >
                    <li className="mb-2">{category.attributes.name}</li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#bababa] py-4 md:text-lg text-md">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} CasaNona. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
